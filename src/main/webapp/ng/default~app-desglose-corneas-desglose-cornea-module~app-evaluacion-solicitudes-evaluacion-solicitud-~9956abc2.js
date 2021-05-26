(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-desglose-corneas-desglose-cornea-module~app-evaluacion-solicitudes-evaluacion-solicitud-~9956abc2"],{

/***/ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-conjunto/evaluacion-solicitud-conjunto.component.css":
/*!******************************************************************************************************************!*\
  !*** ./src/app/evaluacion-solicitudes/evaluacion-solicitud-conjunto/evaluacion-solicitud-conjunto.component.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-conjunto/evaluacion-solicitud-conjunto.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/evaluacion-solicitudes/evaluacion-solicitud-conjunto/evaluacion-solicitud-conjunto.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\"  >\n    <li *ngFor =  \"let evaluacionSolicitud of listaEvaluacionSolicitud \" [ngClass]=\"{ 'active':idSeleccionado=== 'I-'+evaluacionSolicitud.id}\"\n        (click)=\"elegir(evaluacionSolicitud,'I' )\" >\n        <a data-toggle=\"tab\" href=\"#tab-I-{{evaluacionSolicitud.id}}\">{{evaluacionSolicitud.id}}</a>\n    </li>\n    <li *ngFor =  \"let evaluacionSolicitud of listaEvaluacionSolicitudN \" [ngClass]=\"{ 'active':idSeleccionado=== 'N-'+evaluacionSolicitud.id}\"\n        (click)=\"elegir(evaluacionSolicitud, 'N')\" >\n        <a data-toggle=\"tab\" href=\"#tab-N-{{evaluacionSolicitud.id}}\">T-{{evaluacionSolicitud.id}}</a>\n    </li>\n</ul>\n<div class=\"panel panel-default\"  >\n     <div  class=\"tab-content\">\n        <div *ngFor = \"let evaluacionSolicitud of listaEvaluacionSolicitud ; let i = index \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='I-'+evaluacionSolicitud.id}\" id=\"tab-I-{{evaluacionSolicitud.id}}\">\n\t\t\t<app-evaluacion-solicitud [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [evaluacionSolicitudBuscar]=\"evaluacionSolicitudBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosEvaluacionSolicitud]=\"validosEvaluacionSolicitud\"  \n\t\t\t\t\t\t  [evaluacionSolicitudService]=\"evaluacionSolicitudService\" [(opcion)]=\"opcionEvaluacionSolicitud\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(evaluacionSolicitud)]=\"listaEvaluacionSolicitud[i]\"  [ocultarConjuntos]=\"ocultarConjuntosEvaluacionSolicitud\"\n                           [lista_usuarioUltMovEvaluacionSolicitudUsuario]=\"lista_usuarioUltMovEvaluacionSolicitudUsuario\" \n                           [lista_idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacion]=\"lista_idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacion\" \n\n\t\t\t\t\t  >\n\t\t\t</app-evaluacion-solicitud>\n        </div>\n        <div *ngFor = \"let evaluacionSolicitud of listaEvaluacionSolicitudN;  let i = index  \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='N-'+evaluacionSolicitud.id}\" id=\"tab-N-{{evaluacionSolicitud.id}}\">\n\t\t\t<app-evaluacion-solicitud [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [evaluacionSolicitudBuscar]=\"evaluacionSolicitudBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosEvaluacionSolicitud]=\"validosEvaluacionSolicitud\"  \n\t\t\t\t\t\t  [evaluacionSolicitudService]=\"evaluacionSolicitudService\" [(opcion)]=\"opcionEvaluacionSolicitud\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(evaluacionSolicitud)]=\"listaEvaluacionSolicitudN[i]\"  [ocultarConjuntos]=\"ocultarConjuntosEvaluacionSolicitud\"\n                           [lista_usuarioUltMovEvaluacionSolicitudUsuario]=\"lista_usuarioUltMovEvaluacionSolicitudUsuario\" \n                           [lista_idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacion]=\"lista_idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacion\" \n\n\t\t\t\t\t  >\n\t\t\t</app-evaluacion-solicitud>  \n        </div>\n\n    </div>\n    <div class=\"panel-footer\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"agregarNuevo()\">\n            <span class=\"fa fa-plus-circle\" aria-hidden=\"true\" style=\"font-size:36px\"></span> AGREGAR\n        </button>\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"actualizaTodo()\">\n            <span class=\"fa fa-reply-all\" aria-hidden=\"true\" style=\"font-size:36px\"></span> ACTUALIZAR TODO\n        </button>\n    </div>\n</div>\t\t\t\n"

/***/ }),

/***/ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-conjunto/evaluacion-solicitud-conjunto.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/evaluacion-solicitudes/evaluacion-solicitud-conjunto/evaluacion-solicitud-conjunto.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: EvaluacionSolicitudConjuntoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluacionSolicitudConjuntoComponent", function() { return EvaluacionSolicitudConjuntoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/evaluacion-solicitud */ "./src/app/evaluacion-solicitudes/shared/evaluacion-solicitud.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EvaluacionSolicitudConjuntoComponent = /** @class */ (function () {
    function EvaluacionSolicitudConjuntoComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovEvaluacionSolicitudUsuarioEditar = false;
        this.idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacionEditar = false;
        this.listaEvaluacionSolicitudN = [];
        this.listaEvaluacionSolicitud = [];
        this.listaEvaluacionSolicitudChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.evaluacionSolicitudN = new _shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_1__["EvaluacionSolicitud"]();
        this.evaluacionSolicitudNChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.agregados = 0;
        this.actualizados = 0;
        this.idSeleccionado = "N-0";
    }
    EvaluacionSolicitudConjuntoComponent.prototype.elegir = function (evaluacionSolicitud, tipo) {
        this.idSeleccionado = tipo + "-" + evaluacionSolicitud.id;
        this.evaluacionSolicitudN = evaluacionSolicitud;
    };
    EvaluacionSolicitudConjuntoComponent.prototype.ngOnInit = function () {
        this.evaluacionSolicitudN.id = 0;
        this.listaEvaluacionSolicitudN.push(Object.assign({}, this.evaluacionSolicitudN));
        this.usuariologueado = this.globalesService.dameUsuario();
    };
    EvaluacionSolicitudConjuntoComponent.prototype.agregarNuevo = function () {
        var pg = new _shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_1__["EvaluacionSolicitud"]();
        pg.id = this.listaEvaluacionSolicitudN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaEvaluacionSolicitudN.push(pg);
    };
    EvaluacionSolicitudConjuntoComponent.prototype.actualizaTodo = function () {
        this.agregados = 0;
        this.actualizados = 0;
        for (var _i = 0, _a = this.listaEvaluacionSolicitud; _i < _a.length; _i++) {
            var evaluacionSolicitud = _a[_i];
            this.evaluacionSolicitudService.actualizarEvaluacionSolicitud(evaluacionSolicitud, this.evtActualiza, this);
        }
        for (var _b = 0, _c = this.listaEvaluacionSolicitudN; _b < _c.length; _b++) {
            var evaluacionSolicitud = _c[_b];
            evaluacionSolicitud.id = null;
            this.evaluacionSolicitudService.guardarEvaluacionSolicitud(evaluacionSolicitud, this.evtGuardar, this);
        }
    };
    EvaluacionSolicitudConjuntoComponent.prototype.evtGuardar = function (evaluacionSolicitud, obj) {
        obj.agregados++;
        obj.listaEvaluacionSolicitud.push(evaluacionSolicitud);
        if (obj.agregados >= obj.listaEvaluacionSolicitudN.length) {
            obj.evaluacionSolicitudN = new _shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_1__["EvaluacionSolicitud"]();
            obj.listaEvaluacionSolicitudN = [];
            obj.evaluacionSolicitudN.id = 0;
            obj.idSeleccionado = "N-" + obj.evaluacionSolicitudN.id;
            obj.listaEvaluacionSolicitudN.push(Object.assign({}, obj.evaluacionSolicitudN));
            obj.listaEvaluacionSolicitudChange.emit(obj.listaEvaluacionSolicitud);
        }
        if (obj.agregados >= obj.listaEvaluacionSolicitudN.length &&
            obj.actualizados >= obj.listaEvaluacionSolicitud.length) {
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    EvaluacionSolicitudConjuntoComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.actualizados++;
            if (obj.agregados >= obj.listaEvaluacionSolicitudN.length &&
                obj.actualizados >= obj.listaEvaluacionSolicitud.length) {
                obj.opcion = 0;
                obj.opcion.emit(obj.opcion);
            }
        }
    };
    EvaluacionSolicitudConjuntoComponent.prototype.ngOnChanges = function (changes) {
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
    ], EvaluacionSolicitudConjuntoComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EvaluacionSolicitudConjuntoComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EvaluacionSolicitudConjuntoComponent.prototype, "evaluacionSolicitudBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EvaluacionSolicitudConjuntoComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EvaluacionSolicitudConjuntoComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EvaluacionSolicitudConjuntoComponent.prototype, "validosEvaluacionSolicitud", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EvaluacionSolicitudConjuntoComponent.prototype, "ocultarConjuntosEvaluacionSolicitud", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EvaluacionSolicitudConjuntoComponent.prototype, "evaluacionSolicitudService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], EvaluacionSolicitudConjuntoComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EvaluacionSolicitudConjuntoComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EvaluacionSolicitudConjuntoComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EvaluacionSolicitudConjuntoComponent.prototype, "lista_usuarioUltMovEvaluacionSolicitudUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EvaluacionSolicitudConjuntoComponent.prototype, "lista_idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EvaluacionSolicitudConjuntoComponent.prototype, "listaEvaluacionSolicitud", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EvaluacionSolicitudConjuntoComponent.prototype, "listaEvaluacionSolicitudChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_1__["EvaluacionSolicitud"])
    ], EvaluacionSolicitudConjuntoComponent.prototype, "evaluacionSolicitudN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EvaluacionSolicitudConjuntoComponent.prototype, "evaluacionSolicitudNChange", void 0);
    EvaluacionSolicitudConjuntoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-evaluacion-solicitud-conjunto',
            template: __webpack_require__(/*! ./evaluacion-solicitud-conjunto.component.html */ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-conjunto/evaluacion-solicitud-conjunto.component.html"),
            styles: [__webpack_require__(/*! ./evaluacion-solicitud-conjunto.component.css */ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-conjunto/evaluacion-solicitud-conjunto.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], EvaluacionSolicitudConjuntoComponent);
    return EvaluacionSolicitudConjuntoComponent;
}());



/***/ }),

/***/ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-crud/evaluacion-solicitud-crud.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/evaluacion-solicitudes/evaluacion-solicitud-crud/evaluacion-solicitud-crud.component.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-crud/evaluacion-solicitud-crud.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/evaluacion-solicitudes/evaluacion-solicitud-crud/evaluacion-solicitud-crud.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"panel panel-default\">\n        <app-evaluacion-solicitud [usuariologueado]=\"usuariologueado\"\n                           [etiquetaGeneral]=\"permisosTabla?.etiqueta\"\n                           [evaluacionSolicitudBuscar]=\"evaluacionSolicitudBuscar\"\n                           [permisosAtributos]=\"permisosAtributos\"\n                           [permisosConjuntos]=\"permisosConjuntos\"\n                           [validosEvaluacionSolicitud]=\"validosEvaluacionSolicitud\"\n                           [evaluacionSolicitudService]=\"evaluacionSolicitud_service\"\n                           [(opcion)]=\"opcionEvaluacionSolicitud\"\n                           [globalesService]=\"globalesService\"\n                           [(evaluacionSolicitud)]=\"evaluacionSolicitud\"\n                           [ocultarConjuntos]=\"ocultarConjuntosEvaluacionSolicitud\"\n                           [lista_usuarioUltMovEvaluacionSolicitudUsuario]=\"lista_usuarioUltMovEvaluacionSolicitudUsuario\"\n                           [lista_idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacion]=\"lista_idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacion\"\n\n\t\t\t\t\t  >\n\n        </app-evaluacion-solicitud>\n\n        <div class=\"panel-footer\" style=\"text-align: center\">\n\t\t  <div style=\"display: inline-block;width: 90%;\">\n            <button type=\"button\" class=\"btn btn-primary btn-buscar\" [class.hidden]=\"!evaluacionSolicitudBuscar\" (click)=\"buscarEvaluacionSolicitudFront()\"><span class=\"fa fa-search\"></span> Buscar</button>\n            <button type=\"button\" class=\"btn btn-success btn-agregar\" [class.hidden]=\"!evaluacionSolicitudAgregar\" (click)=\"nuevoEvaluacionSolicitudFront()\" ><span class=\"fa fa-newspaper\"></span>Nuevo </button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"!evaluacionSolicitudActualizar\" (click)=\"actualizarEvaluacionSolicitudFront()\"><span class=\"fa fa-arrow-up\"></span> Actualizar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-eliminar\"  [class.hidden]=\"!evaluacionSolicitudEliminar\" (click)=\"eliminarEvaluacionSolicitudFront()\"> <span class=\"fa fa-trash\"></span>Eliminar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-guardar\"  [disabled]=\"!validaTodosc\" [class.hidden]=\"!evaluacionSolicitudGuardar\" (click)=\"guardarEvaluacionSolicitudFront()\"><span class=\"fa fa-floppy-disk\"></span>Guardar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-cancelar\"  [class.hidden]=\"!evaluacionSolicitudCancelar\" (click)=\"cancelarEvaluacionSolicitudFront()\"><span class=\"fa fa-remove\"></span>Cancelar</button>\n            <button type=\"button\" class=\"btn btn-primary btn-limpiar\"  (click)=\"limpiarCampos()\">Limpiar Campos</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteEvaluacionSolicitudWord\" (click)=\"reporteEvaluacionSolicitudWord()\"> <span class=\"fa fa-download-alt\"></span>Word</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteEvaluacionSolicitudExcel\" (click)=\"reporteEvaluacionSolicitudExcel()\"> <span class=\"fa fa-download-alt\"></span> Excel</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteEvaluacionSolicitudPdf\" (click)=\"reporteEvaluacionSolicitudPdf()\"><span class=\"fa fa-download-alt\"></span> PDF</button>\n          </div>\n\n        </div>\n    </div>\n    <div class=\"modal fade\" id=\"buscarEvaluacionSolicitud_{{nombre}}\" role=\"dialog\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n                <div class=\"modal-body\">\n                    <app-evaluacion-solicitud-list-kendo [nombregrid]=\"'buscar_'+nombre\"  [configuracionEvaluacionSolicitud]=\"configuracionEvaluacionSolicitud\"  (evaluacionSolicitudSeleccionado) =\"evtEvaluacionSolicitudSeleccionado($event)\">  </app-evaluacion-solicitud-list-kendo>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                </div>\n            </div>\n\n        </div>\n    </div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-crud/evaluacion-solicitud-crud.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/evaluacion-solicitudes/evaluacion-solicitud-crud/evaluacion-solicitud-crud.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: EvaluacionSolicitudCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluacionSolicitudCrudComponent", function() { return EvaluacionSolicitudCrudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/core.service */ "./src/app/shared/core.service.ts");
/* harmony import */ var _shared_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/file.service */ "./src/app/shared/file.service.ts");
/* harmony import */ var _shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/evaluacion-solicitud */ "./src/app/evaluacion-solicitudes/shared/evaluacion-solicitud.ts");
/* harmony import */ var _shared_evaluacion_solicitud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/evaluacion-solicitud.service */ "./src/app/evaluacion-solicitudes/shared/evaluacion-solicitud.service.ts");
/* harmony import */ var _shared_configurar_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/configurar-evaluacion-solicitud */ "./src/app/evaluacion-solicitudes/shared/configurar-evaluacion-solicitud.ts");
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../usuarios/shared/usuario.service */ "./src/app/usuarios/shared/usuario.service.ts");
/* harmony import */ var _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../usuario-btcs/shared/usuario-btc.service */ "./src/app/usuario-btcs/shared/usuario-btc.service.ts");
/* harmony import */ var _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../perfil-red-issstes/shared/perfil-red-issste.service */ "./src/app/perfil-red-issstes/shared/perfil-red-issste.service.ts");
/* harmony import */ var _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hospitales/shared/hospital.service */ "./src/app/hospitales/shared/hospital.service.ts");
/* harmony import */ var _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../entidad-federativas/shared/entidad-federativa.service */ "./src/app/entidad-federativas/shared/entidad-federativa.service.ts");
/* harmony import */ var _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../perfiles/shared/perfil.service */ "./src/app/perfiles/shared/perfil.service.ts");
/* harmony import */ var _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion */ "./src/app/recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.ts");
/* harmony import */ var _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service */ "./src/app/recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service.ts");
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







var EvaluacionSolicitudCrudComponent = /** @class */ (function () {
    function EvaluacionSolicitudCrudComponent(globalesService, zone, fileservice, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    evaluacionSolicitud_service, usuario_service, usuarioBtc_service, perfilRedIssste_service, 
    //                public perfilBtc_service: PerfilBtcService,
    hospital_service, entidadFederativa_service, perfil_service, recepcionSolicitudEvaluacion_service, solicitudEvaluacionCorneal_service, causaMuerte_service) {
        this.globalesService = globalesService;
        this.zone = zone;
        this.fileservice = fileservice;
        this.coreService = coreService;
        this.evaluacionSolicitud_service = evaluacionSolicitud_service;
        this.usuario_service = usuario_service;
        this.usuarioBtc_service = usuarioBtc_service;
        this.perfilRedIssste_service = perfilRedIssste_service;
        this.hospital_service = hospital_service;
        this.entidadFederativa_service = entidadFederativa_service;
        this.perfil_service = perfil_service;
        this.recepcionSolicitudEvaluacion_service = recepcionSolicitudEvaluacion_service;
        this.solicitudEvaluacionCorneal_service = solicitudEvaluacionCorneal_service;
        this.causaMuerte_service = causaMuerte_service;
        this.opcionEvaluacionSolicitud = 0;
        this.validosEvaluacionSolicitud = {
            id: false,
            status: false,
            usuarioUltMov: false,
            idrecepcionSolicitudEvaluacion: false,
        };
        this.ocultarConjuntosEvaluacionSolicitud = false;
        this.nombre = "";
        this.permisosTabla = { "tabla": "evaluacionSolicitud", "permiso": 0, "etiqueta": "" };
        this.permisosAtributos = [];
        this.permisosConjuntos = [];
        //  public perfil: Perfil;
        this.accion = 0;
        this.evaluacionSolicitudLazy = false;
        this.evaluacionSolicitudPermisos = false;
        this.validaciones = false;
        this.validacionesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.evaluacionSolicitud = new _shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_4__["EvaluacionSolicitud"]();
        this.evaluacionSolicitudChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.evaluacionSolicitudTablaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lista_evaluacionSolicitudes = [];
        this.usuarioUltMovEvaluacionSolicitudUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.lista_usuarioUltMovEvaluacionSolicitudUsuario = [];
        this.usuarioUltMovEvaluacionSolicitudUsuarioEditar = false;
        this.idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacionEleccion = new _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_14__["RecepcionSolicitudEvaluacion"]();
        this.lista_idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacion = [];
        this.idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacionEditar = false;
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                this.obtenerPermisos();
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
            }
        }
        this.evaluacionSolicitudSeleccion = this.evaluacionSolicitudCancelar = this.evaluacionSolicitudGuardar = this.evaluacionSolicitudBuscar = this.evaluacionSolicitudAgregar = this.evaluacionSolicitudActualizar = this.evaluacionSolicitudEliminar = false;
        this.configuracionEvaluacionSolicitud = new _shared_configurar_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_6__["ConfigurarEvaluacionSolicitud"]();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovEvaluacionSolicitudUsuario, this);
        this.recepcionSolicitudEvaluacion_service.getRecepcionSolicitudEvaluacionesActivos(this.evtGetIdrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacion, this);
        this.limpiarCampos();
    }
    Object.defineProperty(EvaluacionSolicitudCrudComponent.prototype, "evaluacionSolicitudOcultarConjuntos", {
        get: function () {
            if (this.ocultarConjuntosEvaluacionSolicitud)
                return true;
            return !this.evaluacionSolicitudActualizar;
        },
        enumerable: true,
        configurable: true
    });
    EvaluacionSolicitudCrudComponent.prototype.ngOnChanges = function (changes) {
        if (changes.evaluacionSolicitud && changes.evaluacionSolicitud.currentValue == null &&
            this.evaluacionSolicitud == null)
            this.evaluacionSolicitud = new _shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_4__["EvaluacionSolicitud"]();
        else {
            var aux = new _shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_4__["EvaluacionSolicitud"]();
            if (this.evaluacionSolicitud)
                aux.from(this.evaluacionSolicitud);
            if (aux.isOk && aux.isOk()) {
                this.accion = 7;
                this.evaluacionSolicitudBuscar = this.evaluacionSolicitudAgregar = this.evaluacionSolicitudSeleccion = this.evaluacionSolicitudGuardar = false;
                this.evaluacionSolicitudActualizar = this.evaluacionSolicitudEliminar = this.evaluacionSolicitudCancelar = true;
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
                this.evaluacionSolicitudSeleccion = this.evaluacionSolicitudAgregar = this.evaluacionSolicitudBuscar = this.evaluacionSolicitudActualizar = this.evaluacionSolicitudEliminar = false;
                this.evaluacionSolicitudGuardar = this.evaluacionSolicitudCancelar = true;
            }
        }
    };
    EvaluacionSolicitudCrudComponent.prototype.obtenerPermisos = function () {
        var id_expe = -1;
        var tablas = [
            "evaluacionSolicitud",
            "usuario",
            "usuarioBtc",
            "perfilRedIssste",
            "perfilBtc",
            "hospital",
            "entidadFederativa",
            "perfil",
            "recepcionSolicitudEvaluacion",
            "solicitudEvaluacionCorneal",
            "causaMuerte",
        ];
        var parametros = {
            "id_usu": this.usuariologueado.id,
            "tablas": tablas,
            "id_exp": id_expe
        };
        this.evaluacionSolicitudPermisos = false;
        this.coreService.permisos(parametros, this.evtCorePermisos, this);
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    EvaluacionSolicitudCrudComponent.prototype.evtCorePermisos = function (permisos, obj) {
        obj.evaluacionSolicitudPermisos = true;
        if (permisos && permisos.evaluacionSolicitud && permisos.evaluacionSolicitud.PermisoAtributo && permisos.evaluacionSolicitud.PermisoAtributo.length > 0) {
            obj.permisosAtributos = permisos.evaluacionSolicitud.PermisoAtributo;
        }
        else {
            obj.usuariologueado = undefined;
        }
        if (permisos && permisos.evaluacionSolicitud && permisos.evaluacionSolicitud.PermisoConjunto && permisos.evaluacionSolicitud.PermisoConjunto.length > 0) {
            obj.permisosConjuntos = permisos.evaluacionSolicitud.PermisoConjunto;
        }
        if (permisos && permisos.evaluacionSolicitud && permisos.evaluacionSolicitud.PermisoTabla && permisos.evaluacionSolicitud.PermisoTabla.length > 0) {
            obj.permisosTabla = permisos.evaluacionSolicitud.PermisoTabla[0];
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
        if (permisos && permisos.recepcionSolicitudEvaluacion && permisos.recepcionSolicitudEvaluacion.PermisoAtributo && permisos.recepcionSolicitudEvaluacion.PermisoAtributo.length > 0) {
            //obj.configuracion$1= permisos.recepcionSolicitudEvaluacion.PermisoAtributo ;
            obj.permisosAtributos.push(permisos.recepcionSolicitudEvaluacion.PermisoAtributo);
        }
        if (permisos && permisos.recepcionSolicitudEvaluacion && permisos.recepcionSolicitudEvaluacion.PermisoAtributo && permisos.recepcionSolicitudEvaluacion.PermisoConjunto.length > 0) {
            obj.permisosConjuntos.push(permisos.recepcionSolicitudEvaluacion.PermisoConjunto);
        }
        if (permisos && permisos.recepcionSolicitudEvaluacion && permisos.recepcionSolicitudEvaluacion.PermisoTabla && permisos.recepcionSolicitudEvaluacion.PermisoTabla.length > 0) {
            //obj.configuracion$1= permisos.recepcionSolicitudEvaluacion.PermisoTabla[0] ;
            // obj.permisosTabla.push(permisos.recepcionSolicitudEvaluacion.PermisoTabla[0] );
        }
        if (obj.configurarTablasConjuntos)
            obj.configurarTablasConjuntos();
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    EvaluacionSolicitudCrudComponent.prototype.evtGetUsuarioUltMovEvaluacionSolicitudUsuario = function (lista_usuarioUltMovEvaluacionSolicitudUsuario, obj) {
        obj.lista_usuarioUltMovEvaluacionSolicitudUsuario = lista_usuarioUltMovEvaluacionSolicitudUsuario;
        obj.actualizar_UsuarioUltMovEvaluacionSolicitudUsuario();
    };
    EvaluacionSolicitudCrudComponent.prototype.evtGetIdrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacion = function (lista_idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacion, obj) {
        obj.lista_idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacion = lista_idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacion;
        obj.actualizar_IdrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacion();
    };
    EvaluacionSolicitudCrudComponent.prototype.actualizar_UsuarioUltMovEvaluacionSolicitudUsuario = function () {
        if (this.usuarioUltMovEvaluacionSolicitudUsuarioEleccion)
            for (var _i = 0, _a = this.lista_usuarioUltMovEvaluacionSolicitudUsuario; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.usuarioUltMovEvaluacionSolicitudUsuarioEleccion.id) {
                    this.usuarioUltMovEvaluacionSolicitudUsuarioEleccion = eleme;
                    break;
                }
            }
    };
    EvaluacionSolicitudCrudComponent.prototype.actualizar_IdrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacion = function () {
        if (this.idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacionEleccion)
            for (var _i = 0, _a = this.lista_idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacion; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacionEleccion.id) {
                    this.idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacionEleccion = eleme;
                    break;
                }
            }
    };
    EvaluacionSolicitudCrudComponent.prototype.ngDoCheck = function () {
    };
    EvaluacionSolicitudCrudComponent.prototype.validaAcciones = function (vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    };
    Object.defineProperty(EvaluacionSolicitudCrudComponent.prototype, "validaId", {
        get: function () {
            return this.validosEvaluacionSolicitud['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EvaluacionSolicitudCrudComponent.prototype, "validaIds", {
        get: function () {
            return this.validosEvaluacionSolicitud['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EvaluacionSolicitudCrudComponent.prototype, "validaStatus", {
        get: function () {
            return this.validosEvaluacionSolicitud['status'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EvaluacionSolicitudCrudComponent.prototype, "validaUsuarioUltMov", {
        get: function () {
            return this.validosEvaluacionSolicitud['usuarioUltMov'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EvaluacionSolicitudCrudComponent.prototype, "validaIdrecepcionSolicitudEvaluacion", {
        get: function () {
            return this.validosEvaluacionSolicitud['idrecepcionSolicitudEvaluacion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EvaluacionSolicitudCrudComponent.prototype, "validaTodosc", {
        get: function () {
            var salida = this.validaId && this.validaStatus && this.validaUsuarioUltMov && this.validaIdrecepcionSolicitudEvaluacion;
            if (salida != this.validaciones)
                this.validacionesChange.emit(salida);
            return salida;
        },
        enumerable: true,
        configurable: true
    });
    EvaluacionSolicitudCrudComponent.prototype.obtenerEvaluacionSolicitudes = function (lista, objeto) {
        objeto.lista_evaluacionSolicitudes = lista;
        if (lista && lista.length > 0) {
            objeto.evaluacionSolicitud.from(lista[0]);
            objeto.evtEvaluacionSolicitudSeleccionado(objeto.evaluacionSolicitud);
            if (objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    };
    EvaluacionSolicitudCrudComponent.prototype.evn_lazy_evaluacionSolicitud = function (evaluacionSolicitud, objeto) {
        objeto.evaluacionSolicitud = evaluacionSolicitud;
        objeto.evaluacionSolicitudChange.emit(objeto.evaluacionSolicitud);
        objeto.configuarCombosObjetos();
        objeto.evaluacionSolicitudLazy = true;
    };
    Object.defineProperty(EvaluacionSolicitudCrudComponent.prototype, "datosReporteEvaluacionSolicitudWord", {
        /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
        get: function () {
            return !(this.evaluacionSolicitudActualizar && this.evaluacionSolicitudLazy && this.globalesService.preporteWord(this, "evaluacionSolicitud"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EvaluacionSolicitudCrudComponent.prototype, "datosReporteEvaluacionSolicitudExcel", {
        get: function () {
            return !(this.evaluacionSolicitudActualizar && this.evaluacionSolicitudLazy && this.globalesService.preporteExcel(this, "evaluacionSolicitud"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EvaluacionSolicitudCrudComponent.prototype, "datosReporteEvaluacionSolicitudPdf", {
        get: function () {
            return !(this.evaluacionSolicitudActualizar && this.evaluacionSolicitudLazy && this.globalesService.preportePdf(this, "evaluacionSolicitud"));
        },
        enumerable: true,
        configurable: true
    });
    EvaluacionSolicitudCrudComponent.prototype.reporteEvaluacionSolicitudExcel = function () {
        var nombre = "EvaluacionSolicitud.xlsx";
        var path = "file/reporteExcel";
        var parametros = {};
        parametros["entradas"] = { "evaluacionSolicitud": this.evaluacionSolicitud };
        parametros["plantilla"] = "EvaluacionSolicitud.xlsx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    EvaluacionSolicitudCrudComponent.prototype.reporteEvaluacionSolicitudWord = function () {
        var nombre = "EvaluacionSolicitud.docx";
        var path = "file/reporteWord";
        var parametros = {};
        parametros["entradas"] = { "evaluacionSolicitud": this.evaluacionSolicitud };
        parametros["plantilla"] = "EvaluacionSolicitud.docx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    EvaluacionSolicitudCrudComponent.prototype.reporteEvaluacionSolicitudPdf = function () {
        var nombre = "EvaluacionSolicitud.docx";
        var path = "file/reportePdf";
        var parametros = {};
        parametros["entradas"] = { "evaluacionSolicitud": this.evaluacionSolicitud };
        parametros["plantilla"] = "EvaluacionSolicitud.docx";
        parametros["salida"] = "EvaluacionSolicitud.pdf";
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */
    EvaluacionSolicitudCrudComponent.prototype.accionesBuscar = function () {
        this.accion = 1;
        this.evaluacionSolicitudGuardar = this.evaluacionSolicitudActualizar = this.evaluacionSolicitudEliminar = false;
        this.evaluacionSolicitudBuscar = this.evaluacionSolicitudAgregar = this.evaluacionSolicitudCancelar = true;
    };
    EvaluacionSolicitudCrudComponent.prototype.buscarEvaluacionSolicitudFront = function () {
        this.accionesBuscar();
        var vevaluacionSolicitud = new _shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_4__["EvaluacionSolicitud"]();
        vevaluacionSolicitud.from(this.evaluacionSolicitud);
        this.configuracionEvaluacionSolicitud = new _shared_configurar_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_6__["ConfigurarEvaluacionSolicitud"]();
        this.configuracionEvaluacionSolicitud.permisosTabla = { "tabla": "evaluacionSolicitud", "permiso": 8 };
        this.configuracionEvaluacionSolicitud.titulo = "Buscar " + this.permisosTabla.etiqueta;
        this.configuracionEvaluacionSolicitud.evaluacionSolicitudConsulta = vevaluacionSolicitud;
        this.permisosacciones();
        $("#buscarEvaluacionSolicitud_" + this.nombre).modal();
    };
    EvaluacionSolicitudCrudComponent.prototype.buscarEvaluacionSolicitudBack = function (evaluacionSolicitud) {
        this.evaluacionSolicitud_service.getEvaluacionSolicitudesByDto(evaluacionSolicitud, this.eventoSrvEvaluacionSolicitudBuscar, this);
    };
    EvaluacionSolicitudCrudComponent.prototype.eventoSrvEvaluacionSolicitudBuscar = function (lista, objeto) {
        objeto.lista_evaluacionSolicitudes = lista;
        if (lista && lista.length > 0) {
            objeto.evaluacionSolicitud = lista[0];
            objeto.evaluacionSolicitudLazy = false;
            objeto.evaluacionSolicitud_service.lazyEvaluacionSolicitud(objeto.evaluacionSolicitud, objeto.evn_lazy_evaluacionSolicitud, objeto);
        }
    };
    EvaluacionSolicitudCrudComponent.prototype.guardarEvaluacionSolicitudFront = function () {
        this.accion = 5; // ********************************************************************************************** maquina
        this.guardarEvaluacionSolicitudBack(this.evaluacionSolicitud);
        this.accionesBuscar(); // ********************************************************************************* maquina
        this.permisosacciones();
    };
    EvaluacionSolicitudCrudComponent.prototype.guardarEvaluacionSolicitudBack = function (evaluacionSolicitud) {
        if (evaluacionSolicitud.usuarioUltMov == null)
            evaluacionSolicitud.usuarioUltMov = this.globalesService.dameUsuario();
        if (evaluacionSolicitud.status == null || evaluacionSolicitud.status == "")
            evaluacionSolicitud.status = 1;
        this.evaluacionSolicitud_service.guardarEvaluacionSolicitud(evaluacionSolicitud, this.eventoSrvEvaluacionSolicitudGuardar, this);
    };
    EvaluacionSolicitudCrudComponent.prototype.eventoSrvEvaluacionSolicitudGuardar = function (evaluacionSolicitud, obj) {
        obj.evaluacionSolicitud = evaluacionSolicitud;
        bootbox.alert("Datos guardados con éxito");
        var aux = new _shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_4__["EvaluacionSolicitud"]();
        aux.from(evaluacionSolicitud);
        obj.evaluacionSolicitudChange.emit(aux);
        obj.evaluacionSolicitudTablaChange.emit(aux);
        obj.evaluacionSolicitudLazy = false;
        obj.evaluacionSolicitud_service.lazyEvaluacionSolicitud(obj.evaluacionSolicitud, obj.evn_lazy_evaluacionSolicitud, obj);
        obj.accionesActualizar();
    };
    EvaluacionSolicitudCrudComponent.prototype.actualizarEvaluacionSolicitudFront = function () {
        this.accion = 3; // ************************************************************************************* maquina
        this.actualizarEvaluacionSolicitudBack(this.evaluacionSolicitud);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    };
    EvaluacionSolicitudCrudComponent.prototype.actualizarEvaluacionSolicitudBack = function (evaluacionSolicitud) {
        evaluacionSolicitud.usuarioUltMov = this.globalesService.dameUsuario();
        this.evaluacionSolicitud_service.actualizarEvaluacionSolicitud(evaluacionSolicitud, this.eventoSrvEvaluacionSolicitudActualizar, this);
    };
    EvaluacionSolicitudCrudComponent.prototype.eventoSrvEvaluacionSolicitudActualizar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux = new _shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_4__["EvaluacionSolicitud"]();
            // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.evaluacionSolicitudLazy = false;
            obj.evaluacionSolicitud_service.lazyEvaluacionSolicitud(obj.evaluacionSolicitud, obj.evn_lazy_evaluacionSolicitud, obj);
            // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.evaluacionSolicitud);
            obj.evaluacionSolicitudChange.emit(aux);
            obj.evaluacionSolicitudTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    };
    EvaluacionSolicitudCrudComponent.prototype.eliminarEvaluacionSolicitudFront = function () {
        this.accion = 4;
        this.eliminarEvaluacionSolicitudBack(this.evaluacionSolicitud);
        this.permisosacciones();
        this.accionesBuscar();
    };
    EvaluacionSolicitudCrudComponent.prototype.eliminarEvaluacionSolicitudBack = function (evaluacionSolicitud) {
        evaluacionSolicitud.usuarioUltMov = this.globalesService.dameUsuario();
        this.evaluacionSolicitud_service.eliminarEvaluacionSolicitud(evaluacionSolicitud, this.eventoSrvEvaluacionSolicitudEliminar, this);
    };
    EvaluacionSolicitudCrudComponent.prototype.eventoSrvEvaluacionSolicitudEliminar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.evaluacionSolicitud = new _shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_4__["EvaluacionSolicitud"]();
            obj.evaluacionSolicitudChange.emit(obj.evaluacionSolicitud);
            obj.evaluacionSolicitudTablaChange.emit(obj.evaluacionSolicitud);
            obj.limpiarCampos();
        }
    };
    EvaluacionSolicitudCrudComponent.prototype.cancelarEvaluacionSolicitudFront = function () {
        this.accion = 6;
        this.evaluacionSolicitudCancelar = this.evaluacionSolicitudGuardar = this.evaluacionSolicitudActualizar = this.evaluacionSolicitudEliminar = false;
        this.evaluacionSolicitudBuscar = this.evaluacionSolicitudAgregar = true;
        this.permisosacciones();
    };
    EvaluacionSolicitudCrudComponent.prototype.nuevoEvaluacionSolicitudFront = function () {
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
                this.evaluacionSolicitudSeleccion = this.evaluacionSolicitudAgregar = this.evaluacionSolicitudBuscar = this.evaluacionSolicitudActualizar = this.evaluacionSolicitudEliminar = false;
                this.evaluacionSolicitudGuardar = this.evaluacionSolicitudCancelar = true;
            }.bind(this)
        });
    };
    EvaluacionSolicitudCrudComponent.prototype.configuarCombosObjetos = function () {
        this.lista_usuarioUltMovEvaluacionSolicitudUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovEvaluacionSolicitudUsuario, this);
        this.lista_idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacion = [];
        this.recepcionSolicitudEvaluacion_service.getRecepcionSolicitudEvaluacionesActivos(this.evtGetIdrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacion, this);
    };
    EvaluacionSolicitudCrudComponent.prototype.configurarTablasConjuntos = function () {
    };
    EvaluacionSolicitudCrudComponent.prototype.accionesActualizar = function () {
        this.accion = 7;
        this.evaluacionSolicitudBuscar = this.evaluacionSolicitudAgregar = this.evaluacionSolicitudSeleccion = this.evaluacionSolicitudGuardar = false;
        this.evaluacionSolicitudActualizar = this.evaluacionSolicitudEliminar = this.evaluacionSolicitudCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    };
    EvaluacionSolicitudCrudComponent.prototype.evtEvaluacionSolicitudSeleccionado = function (evaluacionSolicitud) {
        this.evaluacionSolicitud = new _shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_4__["EvaluacionSolicitud"]();
        this.evaluacionSolicitud.from(evaluacionSolicitud);
        this.evaluacionSolicitudLazy = false;
        this.evaluacionSolicitud_service.lazyEvaluacionSolicitud(this.evaluacionSolicitud, this.evn_lazy_evaluacionSolicitud, this);
        this.accion = 7;
        this.evaluacionSolicitudBuscar = this.evaluacionSolicitudAgregar = this.evaluacionSolicitudSeleccion = this.evaluacionSolicitudGuardar = false;
        this.evaluacionSolicitudActualizar = this.evaluacionSolicitudEliminar = this.evaluacionSolicitudCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarEvaluacionSolicitud_" + this.nombre).modal("hide");
    };
    EvaluacionSolicitudCrudComponent.prototype.ngOnInit = function () {
        this.accion = 0; // *********************************************************************************************************** maquina
        this.evaluacionSolicitudSeleccion = this.evaluacionSolicitudCancelar = this.evaluacionSolicitudGuardar = this.evaluacionSolicitudActualizar = this.evaluacionSolicitudEliminar = false; // ******************** maquina
        this.evaluacionSolicitudBuscar = this.evaluacionSolicitudAgregar = true; // ************************************************************************************* maquina
        this.permisosacciones();
    };
    EvaluacionSolicitudCrudComponent.prototype.permisosacciones = function () {
        if (this.evaluacionSolicitudBuscar)
            this.evaluacionSolicitudBuscar = this.globalesService.pbuscar(this, "evaluacionSolicitud");
        if (this.evaluacionSolicitudActualizar)
            this.evaluacionSolicitudActualizar = (this.globalesService.pacutalizar(this, "evaluacionSolicitud") && this.globalesService.pbuscar(this, "evaluacionSolicitud"));
        if (this.evaluacionSolicitudEliminar)
            this.evaluacionSolicitudEliminar = (this.globalesService.peliminar(this, "evaluacionSolicitud") && this.globalesService.pbuscar(this, "evaluacionSolicitud"));
        if (this.evaluacionSolicitudAgregar)
            this.evaluacionSolicitudAgregar = this.globalesService.pagregar(this, "evaluacionSolicitud");
    };
    EvaluacionSolicitudCrudComponent.prototype.permisosaccionesInicio = function () {
        this.evaluacionSolicitudSeleccion = this.evaluacionSolicitudCancelar = this.evaluacionSolicitudGuardar = this.evaluacionSolicitudActualizar = this.evaluacionSolicitudEliminar = false; // *************************** maquina
        this.evaluacionSolicitudBuscar = this.evaluacionSolicitudAgregar = true; // ************************************************************************************* maquina
        this.accion = 0; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    EvaluacionSolicitudCrudComponent.prototype.limpiarCampos = function () {
        this.evaluacionSolicitud = new _shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_4__["EvaluacionSolicitud"]();
        this.usuarioUltMovEvaluacionSolicitudUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacionEleccion = new _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_14__["RecepcionSolicitudEvaluacion"]();
        this.evaluacionSolicitudChange.emit(this.evaluacionSolicitud);
        this.evaluacionSolicitudSeleccion = this.evaluacionSolicitudCancelar = this.evaluacionSolicitudGuardar = this.evaluacionSolicitudActualizar = this.evaluacionSolicitudEliminar = false; // *************************** maquina
        this.evaluacionSolicitudBuscar = this.evaluacionSolicitudAgregar = true; // ************************************************************************************* maquina
        this.accion = 6; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], EvaluacionSolicitudCrudComponent.prototype, "ocultarConjuntosEvaluacionSolicitud", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EvaluacionSolicitudCrudComponent.prototype, "nombre", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], EvaluacionSolicitudCrudComponent.prototype, "validaciones", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EvaluacionSolicitudCrudComponent.prototype, "validacionesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_4__["EvaluacionSolicitud"])
    ], EvaluacionSolicitudCrudComponent.prototype, "evaluacionSolicitud", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EvaluacionSolicitudCrudComponent.prototype, "evaluacionSolicitudChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EvaluacionSolicitudCrudComponent.prototype, "evaluacionSolicitudTablaChange", void 0);
    EvaluacionSolicitudCrudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-evaluacion-solicitud-crud',
            template: __webpack_require__(/*! ./evaluacion-solicitud-crud.component.html */ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-crud/evaluacion-solicitud-crud.component.html"),
            styles: [__webpack_require__(/*! ./evaluacion-solicitud-crud.component.css */ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-crud/evaluacion-solicitud-crud.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
                _shared_evaluacion_solicitud_service__WEBPACK_IMPORTED_MODULE_5__["EvaluacionSolicitudService"],
                _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
                _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__["EntidadFederativaService"],
                _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__["PerfilRedIsssteService"],
                //                PerfilBtcService,
                _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"],
                _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcService"],
                _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__["PerfilService"],
                _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_15__["RecepcionSolicitudEvaluacionService"],
                _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_17__["CausaMuerteService"],
                _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_16__["SolicitudEvaluacionCornealService"]
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
            _shared_evaluacion_solicitud_service__WEBPACK_IMPORTED_MODULE_5__["EvaluacionSolicitudService"],
            _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
            _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcService"],
            _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__["PerfilRedIsssteService"],
            _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"],
            _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__["EntidadFederativaService"],
            _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__["PerfilService"],
            _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_15__["RecepcionSolicitudEvaluacionService"],
            _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_16__["SolicitudEvaluacionCornealService"],
            _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_17__["CausaMuerteService"]])
    ], EvaluacionSolicitudCrudComponent);
    return EvaluacionSolicitudCrudComponent;
}());



/***/ }),

/***/ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-list-kendo/evaluacion-solicitud-list-kendo.component.css":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/evaluacion-solicitudes/evaluacion-solicitud-list-kendo/evaluacion-solicitud-list-kendo.component.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Tipos para evaluacionSolicitud-list-kendo*/\nh3 { text-transform: uppercase;} \n"

/***/ }),

/***/ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-list-kendo/evaluacion-solicitud-list-kendo.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/evaluacion-solicitudes/evaluacion-solicitud-list-kendo/evaluacion-solicitud-list-kendo.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!usuariologueado\" >\n    <div class=\"card\">\n        <div align=\"center\" class=\"card-header\"><h3>{{configuracionEvaluacionSolicitud.titulo}}</h3></div>\n        <div class=\"card-body\">\n            <div id=\"div_evaluacionSolicitud_{{nombregrid}}\">\n                <div id=\"grid_evaluacionSolicitud_{{nombregrid}}\"></div>\n            </div>\n        </div>\t\t\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-list-kendo/evaluacion-solicitud-list-kendo.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/evaluacion-solicitudes/evaluacion-solicitud-list-kendo/evaluacion-solicitud-list-kendo.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: EvaluacionSolicitudListKendoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluacionSolicitudListKendoComponent", function() { return EvaluacionSolicitudListKendoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/evaluacion-solicitud */ "./src/app/evaluacion-solicitudes/shared/evaluacion-solicitud.ts");
/* harmony import */ var _shared_configurar_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/configurar-evaluacion-solicitud */ "./src/app/evaluacion-solicitudes/shared/configurar-evaluacion-solicitud.ts");
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
var EvaluacionSolicitudListKendoComponent = /** @class */ (function () {
    function EvaluacionSolicitudListKendoComponent(urlprovider, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    globalesService) {
        this.urlprovider = urlprovider;
        this.coreService = coreService;
        this.globalesService = globalesService;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "", "permiso": 0, "etiqueta": "" };
        this.evaluacionSolicitudSeleccionado = new _shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_3__["EvaluacionSolicitud"]();
        this.configuracionEvaluacionSolicitud = new _shared_configurar_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_4__["ConfigurarEvaluacionSolicitud"]();
        this.nombregrid = "";
        this.evtEvaluacionSolicitudSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "evaluacionSolicitud";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'evaluacionSolicitud'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'evaluacionSolicitud'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }
    EvaluacionSolicitudListKendoComponent.prototype.actualizaTituloInicial = function () {
        if (this.configuracionEvaluacionSolicitud.titulo.indexOf("Catálogo") != -1) {
            this.configuracionEvaluacionSolicitud.titulo = "Catálogo " + this.permisosTabla.etiqueta;
        }
    };
    EvaluacionSolicitudListKendoComponent.prototype.ngOnChanges = function (changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionEvaluacionSolicitud && changes.configuracionEvaluacionSolicitud.currentValue &&
            (changes.configuracionEvaluacionSolicitud.previousValue instanceof _shared_configurar_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_4__["ConfigurarEvaluacionSolicitud"])) {
            if (changes.configuracionEvaluacionSolicitud.currentValue.permisosAtributos)
                this.permisosAtributos = changes.configuracionEvaluacionSolicitud.currentValue.permisosAtributos;
            if (changes.configuracionEvaluacionSolicitud.currentValue.permisosTabla)
                this.permisosTabla = changes.configuracionEvaluacionSolicitud.currentValue.permisosTabla;
            if ($("#grid_evaluacionSolicitud_" + this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    };
    EvaluacionSolicitudListKendoComponent.prototype.ngOnInit = function () {
        self["grid_evaluacionSolicitud_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var ejecutarpermisos = true;
        if (this.configuracionEvaluacionSolicitud.permisosAtributos &&
            this.configuracionEvaluacionSolicitud.permisosTabla)
            ejecutarpermisos = false;
        if (this.usuariologueado && ejecutarpermisos) {
            if (this.usuariologueado.perfil) {
                var tablas = [
                    "evaluacionSolicitud",
                ];
                var parametros = {
                    "id_usu": this.usuariologueado.id,
                    "tablas": tablas,
                    "id_exp": -1
                };
                this.coreService.permisos(parametros, this.evtCorePermisos, this);
                //                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                //                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'EvaluacionSolicitud'";
                //                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'EvaluacionSolicitud'";
                //                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'EvaluacionSolicitud'";
                //                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
                //                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
                //                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
            }
        }
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        if (this.configuracionEvaluacionSolicitud.permisosAtributos)
            this.permisosAtributos = this.configuracionEvaluacionSolicitud.permisosAtributos;
        if (this.configuracionEvaluacionSolicitud.permisosTabla)
            this.permisosTabla = this.configuracionEvaluacionSolicitud.permisosTabla;
        this.configuraGrid();
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    EvaluacionSolicitudListKendoComponent.prototype.evtCorePermisos = function (permisos, obj) {
        if (permisos && permisos.evaluacionSolicitud && permisos.evaluacionSolicitud.PermisoAtributo && permisos.evaluacionSolicitud.PermisoAtributo.length > 0
            && !obj.configuracionEvaluacionSolicitud.permisosAtributos) {
            obj.globalesService.evtAtributos(permisos.evaluacionSolicitud.PermisoAtributo, obj);
            //            obj.permisosAtributos = permisos.EvaluacionSolicitud.PermisoAtributo ;
        }
        if (permisos && permisos.evaluacionSolicitud && permisos.evaluacionSolicitud.PermisoTabla && permisos.evaluacionSolicitud.PermisoTabla.length > 0
            && !obj.configuracionEvaluacionSolicitud.permisosTabla) {
            obj.globalesService.evtTablas(permisos.evaluacionSolicitud.PermisoTabla, obj);
            //            obj.permisosTabla = permisos.EvaluacionSolicitud.PermisoTabla[0] ;
            //            obj.permisosaccionesInicio();
        }
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    EvaluacionSolicitudListKendoComponent.prototype.configuraGrid = function () {
        var _this = this;
        if ($("#grid_evaluacionSolicitud_" + this.nombregrid).data("kendoGrid")) {
        }
        else {
            setTimeout(function () {
                _this.inicializaGrid();
                _this.configuraGrid();
            }, 300);
        }
    };
    EvaluacionSolicitudListKendoComponent.prototype.sourcegrid = function () {
        function completar(e) {
            (e);
        }
        ;
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        if (this.configuracionEvaluacionSolicitud.campoAgEl != null
            && this.configuracionEvaluacionSolicitud.evaluacionSolicitudConsulta
            && this.configuracionEvaluacionSolicitud.evaluacionSolicitudConsulta.isOk
            && !this.configuracionEvaluacionSolicitud.evaluacionSolicitudConsulta.isOk())
            return;
        if (this.configuracionEvaluacionSolicitud.evaluacionSolicitudConsulta) {
            if (!this.configuracionEvaluacionSolicitud.campoAgEl && this.configuracionEvaluacionSolicitud.evaluacionSolicitudConsulta instanceof _shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_3__["EvaluacionSolicitud"])
                this.configuracionEvaluacionSolicitud.rutaLista = this.crudServiceBaseUrl + "/getEvaluacionSolicitudesByDto";
            this.lista = this.configuracionEvaluacionSolicitud.lecturaP(completar, this.configuracionEvaluacionSolicitud.evaluacionSolicitudConsulta);
            if (this.configuracionEvaluacionSolicitud.campoAgEl) {
                this.rutaAgregar = this.configuracionEvaluacionSolicitud.agregarP(function () { }, this.configuracionEvaluacionSolicitud.campoAgEl);
                this.rutaEliminar = this.configuracionEvaluacionSolicitud.eliminarP(function () { }, this.configuracionEvaluacionSolicitud.campoAgEl);
            }
            else {
                this.rutaAgregar = this.configuracionEvaluacionSolicitud.agregarP(completar, this.configuracionEvaluacionSolicitud.evaluacionSolicitudConsulta);
                this.rutaEliminar = this.configuracionEvaluacionSolicitud.eliminarP(completar, this.configuracionEvaluacionSolicitud.evaluacionSolicitudConsulta);
            }
        }
        else {
            this.lista = this.configuracionEvaluacionSolicitud.lectura();
            this.rutaAgregar = this.configuracionEvaluacionSolicitud.agregar();
            this.rutaEliminar = this.configuracionEvaluacionSolicitud.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this, "evaluacionSolicitud", "id")) {
            modelo["id"] = "id";
        }
        var campos = {};
        if (this.globalesService.avisible(this, "evaluacionSolicitud", "id")) {
            campos["id"] = { editable: false, nullable: true, type: "number" };
        }
        if (this.globalesService.avisible(this, "evaluacionSolicitud", "idrecepcionSolicitudEvaluacion")) {
            campos["idrecepcionSolicitudEvaluacion"] = { editable: this.globalesService.aenable(this, "evaluacionSolicitud", "idrecepcionSolicitudEvaluacion"), nullable: true, type: "object", defaultValue: { "id": "", "horaRecepcion": "" } };
        }
        if (this.globalesService.avisible(this, "evaluacionSolicitud", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this, "evaluacionSolicitud", "usuarioUltMov"), nullable: true, type: "object", defaultValue: { "id": "", "password": "" } };
        }
        if (this.globalesService.avisible(this, "evaluacionSolicitud", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this, "evaluacionSolicitud", "status"), nullable: true, type: "string", defaultValue: "1" };
        }
        modelo["fields"] = campos;
        var slf = this;
        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionEvaluacionSolicitud.rutaActualizar,
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
            if (self.configuracionEvaluacionSolicitud.campoAgEl) {
                if (self.configuracionEvaluacionSolicitud.tipocampoAgEl == "EvaluacionSolicitudEvaluacionSolicitud")
                    self.configuracionEvaluacionSolicitud.campoAgEl.evaluacionSolicitud2 = options.models[0];
                else
                    self.configuracionEvaluacionSolicitud.campoAgEl.evaluacionSolicitud = options.models[0];
                return JSON.stringify(self.configuracionEvaluacionSolicitud.campoAgEl);
            }
            else if (est.options[operation].data.models.evaluacionSolicitud) {
                est.options[operation].data.models.evaluacionSolicitud2 = options.models[0];
                return JSON.stringify(est.options[operation].data.models);
            }
            return JSON.stringify(options.models[0]);
        }
    };
    EvaluacionSolicitudListKendoComponent.prototype.inicializaGrid = function () {
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        this.sourcegrid();
        var columnas = [];
        if (this.globalesService.avisible(this, "evaluacionSolicitud", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this, "evaluacionSolicitud", "id"), editor: this.globalesService.txtNumero });
        }
        if (this.globalesService.avisible(this, "evaluacionSolicitud", "idrecepcionSolicitudEvaluacion")) {
            columnas.push({ field: "idrecepcionSolicitudEvaluacion", title: this.globalesService.aetiqueta(this, "evaluacionSolicitud", "idrecepcionSolicitudEvaluacion"), editor: idrecepcionSolicitudEvaluacionDropDownEditor, template: " #if (idrecepcionSolicitudEvaluacion){#   #=idrecepcionSolicitudEvaluacion.horaRecepcion# # } # " });
        }
        if (this.globalesService.avisible(this, "evaluacionSolicitud", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this, "evaluacionSolicitud", "usuarioUltMov"), editor: usuarioUltMovDropDownEditor, template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # " });
        }
        if (this.globalesService.avisible(this, "evaluacionSolicitud", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this, "evaluacionSolicitud", "status"), editor: this.globalesService.estadoDropDownEditor,
                template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this, "evaluacionSolicitud"))
            op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this, "evaluacionSolicitud")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this, "evaluacionSolicitud")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this, "evaluacionSolicitud") && this.configuracionEvaluacionSolicitud.evaluacionSolicitudConsulta != null) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid)
            $("#grid_evaluacionSolicitud_" + this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_evaluacionSolicitud_" + this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionEvaluacionSolicitud.altoComponente,
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
        this.grid = $("#grid_evaluacionSolicitud_" + this.nombregrid).data("kendoGrid");
        this.grid.refresh();
        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutaidrecepcionSolicitudEvaluacion = this.urlprovider.serverURL + "recepcionSolicitudEvaluacion/getRecepcionSolicitudEvaluacionesActivos";
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
        function idrecepcionSolicitudEvaluacionDropDownEditor(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                autoBind: false,
                dataTextField: "expedienteFisico",
                dataValueField: "id",
                filter: "contains",
                minLength: 5, dataSource: {
                    transport: {
                        read: {
                            url: rutaidrecepcionSolicitudEvaluacion,
                            contentType: "application/json",
                            type: "POST",
                        }
                    }
                }
            });
        }
    };
    EvaluacionSolicitudListKendoComponent.prototype.showDetails = function (e) {
        e.preventDefault();
        //        this.grid = $("#grid_evaluacionSolicitud_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        var gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.evaluacionSolicitudSeleccionado = new _shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_3__["EvaluacionSolicitud"]();
        gridac.evaluacionSolicitudSeleccionado.from(dataItem);
        gridac.evtEvaluacionSolicitudSeleccionado.emit(gridac.evaluacionSolicitudSeleccionado);
        (gridac.evaluacionSolicitudSeleccionado);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_configurar_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_4__["ConfigurarEvaluacionSolicitud"])
    ], EvaluacionSolicitudListKendoComponent.prototype, "configuracionEvaluacionSolicitud", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EvaluacionSolicitudListKendoComponent.prototype, "nombregrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("evaluacionSolicitudSeleccionado"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EvaluacionSolicitudListKendoComponent.prototype, "evtEvaluacionSolicitudSeleccionado", void 0);
    EvaluacionSolicitudListKendoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-evaluacion-solicitud-list-kendo',
            template: __webpack_require__(/*! ./evaluacion-solicitud-list-kendo.component.html */ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-list-kendo/evaluacion-solicitud-list-kendo.component.html"),
            styles: [__webpack_require__(/*! ./evaluacion-solicitud-list-kendo.component.css */ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-list-kendo/evaluacion-solicitud-list-kendo.component.css")],
            providers: [
                //             PermisoTablaService,
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_url_provider__WEBPACK_IMPORTED_MODULE_1__["URLProvider"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"]])
    ], EvaluacionSolicitudListKendoComponent);
    return EvaluacionSolicitudListKendoComponent;
}());



/***/ }),

/***/ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/evaluacion-solicitudes/evaluacion-solicitud-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: EvaluacionSolicitudRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluacionSolicitudRoutingModule", function() { return EvaluacionSolicitudRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _evaluacion_solicitudes_evaluacion_solicitud_list_kendo_evaluacion_solicitud_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../evaluacion-solicitudes/evaluacion-solicitud-list-kendo/evaluacion-solicitud-list-kendo.component */ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-list-kendo/evaluacion-solicitud-list-kendo.component.ts");
/* harmony import */ var _evaluacion_solicitudes_evaluacion_solicitud_crud_evaluacion_solicitud_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../evaluacion-solicitudes/evaluacion-solicitud-crud/evaluacion-solicitud-crud.component */ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-crud/evaluacion-solicitud-crud.component.ts");
/* harmony import */ var _evaluacion_solicitudes_evaluacion_solicitud_table_evaluacion_solicitud_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../evaluacion-solicitudes/evaluacion-solicitud-table/evaluacion-solicitud-table.component */ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-table/evaluacion-solicitud-table.component.ts");
/* harmony import */ var _evaluacion_solicitud_table_bandeja_evaluacion_solicitud_table_bandeja_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./evaluacion-solicitud-table-bandeja/evaluacion-solicitud-table-bandeja.component */ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-table-bandeja/evaluacion-solicitud-table-bandeja.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'evaluacion-solicitud-list-kendo', component: _evaluacion_solicitudes_evaluacion_solicitud_list_kendo_evaluacion_solicitud_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__["EvaluacionSolicitudListKendoComponent"] },
    { path: 'evaluacion-solicitud-crud', component: _evaluacion_solicitudes_evaluacion_solicitud_crud_evaluacion_solicitud_crud_component__WEBPACK_IMPORTED_MODULE_3__["EvaluacionSolicitudCrudComponent"] },
    { path: 'evaluacion-solicitud-table', component: _evaluacion_solicitudes_evaluacion_solicitud_table_evaluacion_solicitud_table_component__WEBPACK_IMPORTED_MODULE_4__["EvaluacionSolicitudTableComponent"] },
    { path: 'evaluacion-solicitud-table-bandeja', component: _evaluacion_solicitud_table_bandeja_evaluacion_solicitud_table_bandeja_component__WEBPACK_IMPORTED_MODULE_5__["EvaluacionSolicitudTableBandejaComponent"] },
];
var EvaluacionSolicitudRoutingModule = /** @class */ (function () {
    function EvaluacionSolicitudRoutingModule() {
    }
    EvaluacionSolicitudRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EvaluacionSolicitudRoutingModule);
    return EvaluacionSolicitudRoutingModule;
}());



/***/ }),

/***/ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-table-bandeja/evaluacion-solicitud-table-bandeja.component.css":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/evaluacion-solicitudes/evaluacion-solicitud-table-bandeja/evaluacion-solicitud-table-bandeja.component.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-table-bandeja/evaluacion-solicitud-table-bandeja.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/evaluacion-solicitudes/evaluacion-solicitud-table-bandeja/evaluacion-solicitud-table-bandeja.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"usuariologueado\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h1>Bandeja de Entrada de Evaluación</h1>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"container-fluid\">\n\n                <table id=\"tabla_evaluacionSolicitudBandeja\" class=\"table \" cellspacing=\"0\" width=\"100%\">\n                    <thead>\n                        <tr>\n                            <th>Id</th>\n                            <th>Tipo Solicitud </th>\n                            <th>Folio</th>\n                            <th>Fecha Ingreso</th>\n                            <th>Hora Ingreso</th>\n                            <th>Córnea Izquierda</th>\n                            <th>Córnea Derecha</th>\n                            <th>Ir a Estudios</th>\n                        </tr>\n                    </thead>\n                    <!-- <tfoot>\n                        <tr>\n                            <th>Id</th>\n                            <th>Tipo Solicitud </th>\n                            <th>Folio</th>\n                            <th>Fecha ingreso</th>\n                            <th>Hora Ingreso</th>\n                            <th>Cornea Izquierda</th>\n                            <th>Cornea Drecha</th>\n                            <th>Ir a Estudios</th>\n                        </tr>\n                    </tfoot> -->\n                </table>\n\n            </div>\n        </div>\n\n        <div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n            <strong>Alerta !</strong> No tienes permisos para esta página.\n        </div>"

/***/ }),

/***/ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-table-bandeja/evaluacion-solicitud-table-bandeja.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/evaluacion-solicitudes/evaluacion-solicitud-table-bandeja/evaluacion-solicitud-table-bandeja.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: EvaluacionSolicitudTableBandejaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluacionSolicitudTableBandejaComponent", function() { return EvaluacionSolicitudTableBandejaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/evaluacion-solicitud */ "./src/app/evaluacion-solicitudes/shared/evaluacion-solicitud.ts");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../permiso-atributos/shared/permiso-atributo.service */ "./src/app/permiso-atributos/shared/permiso-atributo.service.ts");
/* harmony import */ var _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../permiso-tablas/shared/permiso-tabla.service */ "./src/app/permiso-tablas/shared/permiso-tabla.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EvaluacionSolicitudTableBandejaComponent = /** @class */ (function () {
    function EvaluacionSolicitudTableBandejaComponent(globalesService, urlProvider, router) {
        this.globalesService = globalesService;
        this.urlProvider = urlProvider;
        this.router = router;
        this.primero = true;
        this.usuariologueado = globalesService.dameUsuario();
        this.getColumnas(this);
    }
    EvaluacionSolicitudTableBandejaComponent.prototype.getColumnas = function (obj) {
        if ($('#tabla_evaluacionSolicitudBandeja').length == 0) {
            setTimeout(function () {
                obj.getColumnas(obj);
                return;
            }, 500);
        }
        if ($('#tabla_evaluacionSolicitudBandeja').length == 0)
            return;
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        columnasNoVisibles.push(0);
        columnas.push({ data: 'idEvaluacion' });
        columnas.push({
            data: function (oObj) {
                if (oObj)
                    if (oObj.estatusProceso == '1')
                        return "<i data-toggle='tooltip' data-placement='top' title='Solicitud Nueva' class='icon-infocircle text-danger'  ></i>";
                if (oObj.estatusProceso == '2')
                    return "<i data-toggle='tooltip' data-placement='top' title='Solicitud en Recepción' class='icon-infocircle text-warning' ></i>";
                if (oObj.estatusProceso == '3')
                    return "<i data-toggle='tooltip' data-placement='top' title='Solicitud en Evaluación' class='icon-infocircle text-primary' ></i>";
                if (oObj.estatusProceso == '4')
                    return "<i data-toggle='tooltip' data-placement='top' title='Solicitud en  Almacén' class='icon-infocircle text-success' ></i>";
            }
        });
        columnas.push({ data: 'folio' });
        columnas.push({ data: 'fechaIngreso' });
        columnas.push({ data: 'horaIngreso' });
        columnas.push({
            data: function (obj) {
                var salida = "<div style='text-align:center;width:100%'> <input type='checkbox' disabled /> </div>";
                if (obj.corneaIz == 1)
                    salida = "<div style='text-align:center;width:100%'><input type='checkbox' disabled checked /> </div>";
                return salida;
            }
        });
        columnas.push({
            data: function (obj) {
                var salida = "<div style='text-align:center;width:100%'><input type='checkbox' disabled /></div>";
                if (obj.corneaDr == 1)
                    salida = "<div style='text-align:center;width:100%'><input type='checkbox' disabled checked /></div>";
                return salida;
            }
        });
        columnas.push({
            data: function (oObj) {
                if (oObj)
                    return "<span style=\"cursor: pointer\">Estudios Laboratorio</span>";
            }
        });
        var novisibles;
        novisibles = [
            {
                targets: columnasNoVisibles,
                visible: false,
                searchable: false
            }
        ];
        $.fn.dataTableExt.sErrMode = 'none';
        var tabla = $('#tabla_evaluacionSolicitudBandeja').DataTable({
            columnDefs: novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            ajax: {
                url: self.urlProvider.serverURL + 'evaluacionSolicitud/getEvaluacionSolicitudesBandeja',
                type: 'POST',
                contentType: 'application/json',
                datatype: 'json',
                dataSrc: ''
            },
            columns: columnas
        });
        $('#tabla_evaluacionSolicitudBandeja tbody').on('click', 'td', function (evt) {
            if (evt.currentTarget.cellIndex ==
                $(evt.currentTarget)
                    .parent()
                    .find('td').length -
                    1) {
                var data = $('#tabla_evaluacionSolicitudBandeja')
                    .DataTable()
                    .row(evt.currentTarget)
                    .data();
                self.evaluacionSolicitudSeleccionado = new _shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_1__["EvaluacionSolicitud"]();
                self.evaluacionSolicitudSeleccionado.from(data);
                self.primero = false;
                this.globalesService.registraIdEvaluacion(data.idEvaluacion);
                this.router.navigateByUrl('/estudio-laboratorio-crud/' + data.idEvaluacion);
            }
        }.bind(this));
    };
    EvaluacionSolicitudTableBandejaComponent.prototype.ngOnInit = function () {
    };
    EvaluacionSolicitudTableBandejaComponent.prototype.cambio_evaluacionSolicitud = function (evaluacionSolicitud) {
        $('#tabla_evaluacionSolicitudBandeja')
            .DataTable()
            .ajax.reload(null, false);
        this.primero = true;
    };
    EvaluacionSolicitudTableBandejaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-evaluacion-solicitud-table-bandeja',
            template: __webpack_require__(/*! ./evaluacion-solicitud-table-bandeja.component.html */ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-table-bandeja/evaluacion-solicitud-table-bandeja.component.html"),
            styles: [__webpack_require__(/*! ./evaluacion-solicitud-table-bandeja.component.css */ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-table-bandeja/evaluacion-solicitud-table-bandeja.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"], _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"], _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"]]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
            _shared_url_provider__WEBPACK_IMPORTED_MODULE_3__["URLProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], EvaluacionSolicitudTableBandejaComponent);
    return EvaluacionSolicitudTableBandejaComponent;
}());



/***/ }),

/***/ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-table/evaluacion-solicitud-table.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/evaluacion-solicitudes/evaluacion-solicitud-table/evaluacion-solicitud-table.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-table/evaluacion-solicitud-table.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/evaluacion-solicitudes/evaluacion-solicitud-table/evaluacion-solicitud-table.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"usuariologueado\" >\n<div class=\"card\">\n<div class=\"card-header\"><h1>Busqueda {{permisosTabla?.etiqueta}}</h1></div>\n<div class=\"card-body\">\n<div class=\"container-fluid\" >\n\n<table *ngIf=\"muestraTabla\" id=\"tabla_evaluacionSolicitud\" class=\"table \" cellspacing=\"0\" width=\"100%\">\n    <thead>\n        <tr>\n            <th [class.hidden]=\"!avisible('evaluacionSolicitud','id')\" >{{aetiqueta('evaluacionSolicitud','id')}}</th>\n            <th [class.hidden]=\"!avisible('evaluacionSolicitud','idrecepcionSolicitudEvaluacion')\" >{{aetiqueta('evaluacionSolicitud','idrecepcionSolicitudEvaluacion')}}</th>\n            <th [class.hidden]=\"!avisible('evaluacionSolicitud','usuarioUltMov')\" >{{aetiqueta('evaluacionSolicitud','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('evaluacionSolicitud','status')\" >{{aetiqueta('evaluacionSolicitud','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </thead>\n    <tfoot>\n        <tr>\n            <th [class.hidden]=\"!avisible('evaluacionSolicitud','id')\" >{{aetiqueta('evaluacionSolicitud','id')}}</th>\n            <th [class.hidden]=\"!avisible('evaluacionSolicitud','idrecepcionSolicitudEvaluacion')\" >{{aetiqueta('evaluacionSolicitud','idrecepcionSolicitudEvaluacion')}}</th>\n            <th [class.hidden]=\"!avisible('evaluacionSolicitud','usuarioUltMov')\" >{{aetiqueta('evaluacionSolicitud','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('evaluacionSolicitud','status')\" >{{aetiqueta('evaluacionSolicitud','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </tfoot>\n</table>\n</div>\n<app-evaluacion-solicitud [class.hidden]=\"primero\" [(evaluacionSolicitud)]=\"evaluacionSolicitudSeleccionado\" (evaluacionSolicitudTablaChange)=\"cambio_evaluacionSolicitud($event)\"> </app-evaluacion-solicitud>\n</div>\n</div>\n</div>\n\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div> -->\n\n<!-- <div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div> -->\n\n<div *ngIf=\"usuariologueado\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h4>LISTA DE CONSULTA DE SOLICITUDES DE EVALUACIÓN DE TEJIDO</h4>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"container-fluid\">\n        <!-- <div class=\"row\">\n                    <div class=\"col-lg-5\">\n                        <app-componente-cadena [componente]=\"'EvaluacionSolicitud'\" [atributo]=\"'folioSolicitudEvaluacion'\" [permisosAtributos]=\"permisosBusquedas\" [(valido)]=\"validos.folioSolicitudEvaluacion\" [(dato)]=\"datosBusqueda.folioSolicitudEvaluacion\" class=\"w-100\">\n                        </app-componente-cadena>\n                    </div>\n                    <div class=\"col-lg-5\">\n                        <app-componente-cadena [componente]=\"'EvaluacionSolicitud'\" [atributo]=\"'nombre'\" [permisosAtributos]=\"permisosBusquedas\" [(valido)]=\"validos.nombre\" [(dato)]=\"datosBusqueda.nombre\" class=\"w-100\">\n                        </app-componente-cadena>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-5\">\n                        <app-componente-cadena [componente]=\"'EvaluacionSolicitud'\" [atributo]=\"'apellido1'\" [permisosAtributos]=\"permisosBusquedas\" [(valido)]=\"validos.apellido1\" [(dato)]=\"datosBusqueda.apellido1\" class=\"w-100\">\n                        </app-componente-cadena>\n                    </div>\n                    <div class=\"col-md-5\">\n                        <app-componente-cadena [componente]=\"'EvaluacionSolicitud'\" [atributo]=\"'noExpediente'\" [permisosAtributos]=\"permisosBusquedas\" [(valido)]=\"validos.noExpediente\" [(dato)]=\"datosBusqueda.noExpediente\" class=\"w-100\">\n                        </app-componente-cadena>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <button class=\"btn btn-primary\" id=\"buscar\" (click)=\"llena(datosBusqueda)\">Buscar</button>\n                    </div>\n                </div> -->\n        <div class=\"row\">\n          <table id=\"tabla_evaluacionSolicitud\" class=\"table \" cellspacing=\"0\" width=\"100%\">\n            <thead>\n              <tr>\n                <!-- <th>Id Evuación</th> -->\n                <th>Folio Solicitud Evaluación</th>\n                <th>Nombre</th>\n                <th>1° Apellido</th>\n                <th>N° Expediente</th>\n                <th>Detalle</th>\n                <th>Editar</th>\n                <th>Borrar</th>\n              </tr>\n            </thead>\n            <!-- <tfoot>\n              <tr>\n                <th>Id Evuación</th>\n                <th>Folio Solicitud Evaluación</th>\n                <th>Nombre</th>\n                <th>1° Apellido</th>\n                <th>N° Expediente</th>\n                <th>Detalle</th>\n                <th>Editar</th>\n                <th>Borrar</th>\n              </tr>\n            </tfoot> -->\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n<div id=\"myModal\" class=\"modal fade \" role=\"dialog\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <!-- <div class=\"modal-body\">\n                <app-evaluacion-solicitud [id]=\"idSeleccionada\" [class.hidden]=\"primero\" [(evaluacionSolicitud)]=\"evaluacionSolicitudSeleccionado\"> </app-evaluacion-solicitud>\n            </div> -->\n      <div class=\"modal-body\">\n         <app-conteo-celular-crud   [idEvaluacion]=\"idSeleccionada\"></app-conteo-celular-crud>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-table/evaluacion-solicitud-table.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/evaluacion-solicitudes/evaluacion-solicitud-table/evaluacion-solicitud-table.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: EvaluacionSolicitudTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluacionSolicitudTableComponent", function() { return EvaluacionSolicitudTableComponent; });
/* harmony import */ var _shared_evaluacion_solicitud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/evaluacion-solicitud.service */ "./src/app/evaluacion-solicitudes/shared/evaluacion-solicitud.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/evaluacion-solicitud */ "./src/app/evaluacion-solicitudes/shared/evaluacion-solicitud.ts");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../permiso-atributos/shared/permiso-atributo.service */ "./src/app/permiso-atributos/shared/permiso-atributo.service.ts");
/* harmony import */ var _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../permiso-tablas/shared/permiso-tabla.service */ "./src/app/permiso-tablas/shared/permiso-tabla.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { EvaluacionSolicitudService } from '../../evaluacion-solicitudes/shared/evaluacion-solicitud.service';

var EvaluacionSolicitudTableComponent = /** @class */ (function () {
    function EvaluacionSolicitudTableComponent(globalesService, permisoAtributoService, permisoTablaService, urlProvider, router, evaluacionSolicitud_Service) {
        this.globalesService = globalesService;
        this.permisoAtributoService = permisoAtributoService;
        this.permisoTablaService = permisoTablaService;
        this.urlProvider = urlProvider;
        this.router = router;
        this.evaluacionSolicitud_Service = evaluacionSolicitud_Service;
        this.primero = true;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "evaluacionSolicitud", "permiso": 0, "etiqueta": "" };
        this.ptabla = false;
        this.pattr = false;
        this.datosBusqueda = {
            idEvaluacion: '',
            folioSolicitudEvaluacion: '',
            nombre: '',
            apellido1: '',
            noExpediente: ''
        };
        this.validos = {
            idEvaluacion: true,
            folioSolicitudEvaluacion: true,
            nombre: true,
            apellido1: true,
            noExpediente: true
        };
        this.permisosBusquedas = [
            {
                etiqueta: 'Folio de la Solicitud de Evaluaci?n',
                validacion: '^[0-9]*$',
                permiso: 3,
                tabla: 'EvaluacionSolicitud',
                atributo: 'folioSolicitudEvaluacion'
            },
            {
                etiqueta: 'nombre',
                permiso: 3,
                tabla: 'EvaluacionSolicitud',
                atributo: 'nombre',
                validacion: '[A-Za-z]',
                mensaje: "Solo se aceptan caracteres"
            },
            {
                etiqueta: 'Primer Apellido',
                validacion: '[A-Za-z]',
                permiso: 3,
                tabla: 'EvaluacionSolicitud',
                atributo: 'apellido1',
                mensaje: "Solo se aceptan caracteres"
            },
            {
                etiqueta: 'N?mero de expediente',
                validacion: null,
                permiso: 3,
                tabla: 'EvaluacionSolicitud',
                atributo: 'noExpediente'
            },
            {
                etiqueta: 'Id Evuación',
                validacion: null,
                permiso: 3,
                tabla: 'EvaluacionSolicitud',
                atributo: 'idEvaluacion'
            }
        ];
        this.idSeleccionada = null;
        this.evaluacionSolicitudSeleccionado = new _shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_2__["EvaluacionSolicitud"]();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        this.getColumnas(this);
    }
    EvaluacionSolicitudTableComponent.prototype.getColumnas = function (obj) {
        if ($('#tabla_evaluacionSolicitud').length == 0) {
            setTimeout(function () {
                obj.getColumnas(obj);
            }, 500);
        }
        var dato = {};
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        // columnasNoVisibles.push({ data: 'idEvaluacion' });
        columnasNoVisibles.push({ data: 'idEvaluacion' });
        columnas.push({ data: 'folioSolicitudEvaluacion' });
        columnas.push({ data: 'nombre' });
        columnas.push({ data: 'apellido1' });
        columnas.push({ data: 'noExpediente' });
        columnas.push({
            data: function (oObj) {
                // tslint:disable-next-line:max-line-length
                return '<div style=\'  text-align: center;\' ><span style="cursor: pointer"> <img src="assets/imagenes/svg/binocular.svg" alt="Detalle"  style="width: 30px;" /> </span></div>';
            }
        });
        columnas.push({
            data: function (oObj) {
                return '<div style=\'  text-align: center;\' ><span class="glyphicon glyphicon-edit"  style="cursor: pointer"></span></div>';
            }
        });
        columnas.push({
            data: function (oObj) {
                return '<div style=\'  text-align: center;\' ><span class="glyphicon glyphicon-trash"  style="cursor: pointer"></span> </div>';
            }
        });
        var novisibles;
        novisibles = [
            {
                targets: columnasNoVisibles,
                visible: false,
                searchable: false
            }
        ];
        $.fn.dataTableExt.sErrMode = 'none';
        var tabla = $('#tabla_evaluacionSolicitud').DataTable({
            columnDefs: novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            columns: columnas
        });
        this.llena({});
        $('#tabla_evaluacionSolicitud tbody').on('click', 'td', function (evt) {
            if (evt.currentTarget.cellIndex ==
                $(evt.currentTarget)
                    .parent()
                    .find('td').length -
                    3) {
                var data = $('#tabla_evaluacionSolicitud')
                    .DataTable()
                    .row(evt.currentTarget)
                    .data();
                this.detalle(data);
            }
            if (evt.currentTarget.cellIndex ==
                $(evt.currentTarget)
                    .parent()
                    .find('td').length -
                    2) {
                var data = $('#tabla_evaluacionSolicitud')
                    .DataTable()
                    .row(evt.currentTarget)
                    .data();
                this.editar(data);
            }
            if (evt.currentTarget.cellIndex ==
                $(evt.currentTarget)
                    .parent()
                    .find('td').length -
                    1) {
                var data = $('#tabla_evaluacionSolicitud')
                    .DataTable()
                    .row(evt.currentTarge)
                    .data();
                this.borrar(data);
            }
        }.bind(this));
    };
    EvaluacionSolicitudTableComponent.prototype.detalle = function (dato) {
        (dato);
        this.idSeleccionada = undefined;
        this.idSeleccionada = dato.idEvaluacion;
        $('#myModal').modal('show');
    };
    EvaluacionSolicitudTableComponent.prototype.ngOnInit = function () {
    };
    EvaluacionSolicitudTableComponent.prototype.cambio_evaluacionSolicitud = function (evaluacionSolicitud) {
        $('#tabla_evaluacionSolicitud').DataTable().ajax.reload(null, false);
        this.primero = true;
    };
    // **********************************************************************************
    // **********************************************************************************
    // **           I N I C I A N   P E R M I S O S   P A R A   P E R F I L E S
    // **********************************************************************************
    // **********************************************************************************
    EvaluacionSolicitudTableComponent.prototype.paux = function (tabla, permiso) {
        if (this.permisosTabla.tabla == tabla && (this.permisosTabla.permiso & permiso) == permiso)
            return true;
        return false;
    };
    EvaluacionSolicitudTableComponent.prototype.preporteWord = function (tabla) { return this.paux(tabla, 64); };
    EvaluacionSolicitudTableComponent.prototype.preporteExcel = function (tabla) { return this.paux(tabla, 32); };
    EvaluacionSolicitudTableComponent.prototype.preportePdf = function (tabla) { return this.paux(tabla, 16); };
    EvaluacionSolicitudTableComponent.prototype.pbuscar = function (tabla) { return this.paux(tabla, 8); };
    EvaluacionSolicitudTableComponent.prototype.pacutalizar = function (tabla) { return this.paux(tabla, 4); };
    EvaluacionSolicitudTableComponent.prototype.peliminar = function (tabla) { return this.paux(tabla, 2); };
    EvaluacionSolicitudTableComponent.prototype.pagregar = function (tabla) { return this.paux(tabla, 1); };
    //******************************************************************************************
    //*******  P E R M I S O S   S O B R E   A T R I B U T O S  ********************************
    //******************************************************************************************
    EvaluacionSolicitudTableComponent.prototype.aetiqueta = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo)
                return elemento.etiqueta;
        }
        return "";
    };
    EvaluacionSolicitudTableComponent.prototype.avalidacion = function (tabla, atributo) {
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
    EvaluacionSolicitudTableComponent.prototype.amensaje = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo) {
                return elemento.mensaje;
            }
        }
        return null;
    };
    EvaluacionSolicitudTableComponent.prototype.aeditable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 8) == 8)
                return true;
        }
        return false;
    };
    EvaluacionSolicitudTableComponent.prototype.arequerido = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 4) == 4)
                return true;
        }
        return false;
    };
    EvaluacionSolicitudTableComponent.prototype.avisible = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 2) == 2)
                return true;
        }
        return false;
    };
    EvaluacionSolicitudTableComponent.prototype.aenable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 1) == 1)
                return true;
        }
        return false;
    };
    // **********************************************************************************
    // **********************************************************************************
    EvaluacionSolicitudTableComponent.prototype.editar = function (dato) {
        (dato);
        bootbox.dialog({
            title: 'Mensaje de confirmación de edición',
            message: '¿Qué desea editar?',
            size: 'large',
            onEscape: true,
            backdrop: true,
            buttons: {
                se: {
                    label: 'Estudios de Laboratorio',
                    className: 'btn-primary',
                    callback: function () {
                        this.router.navigateByUrl('/estudio-laboratorio-crud/' + dato.idEvaluacion);
                    }.bind(this)
                },
                re: {
                    label: 'Revisión de Lámpara de Hendidura',
                    className: 'btn-info',
                    callback: function () {
                        this.router.navigateByUrl('/lampara-hendidura-crud/' + dato.idEvaluacion);
                    }.bind(this)
                },
                te: {
                    label: 'Conteo Celular',
                    className: 'btn-info',
                    callback: function () {
                        this.router.navigateByUrl('/conteo-celular-crud/' + dato.idEvaluacion);
                    }.bind(this)
                },
            }
        });
    };
    EvaluacionSolicitudTableComponent.prototype.borrar = function (dato) {
        (dato);
        // bootbox.confirm("¿Está seguro de eliminar?", function (result) {
        bootbox.confirm({
            message: "¿Está seguro de eliminar?",
            buttons: {
                confirm: {
                    label: "Sí",
                    className: "btn-primary"
                },
                cancel: {
                    label: "No",
                    className: 'btn-danger'
                }
            },
            callback: function (result) {
                if (result) {
                    var envio = {
                        id: dato.idEvaluacion,
                        baja: true
                    };
                    this.evaluacionSolicitud_Service.bajaEvaluacionSolicitudByID(envio, this.evtBorrar, this);
                }
            }.bind(this)
        });
    };
    EvaluacionSolicitudTableComponent.prototype.evtBorrar = function (bandera, obj) {
        if (bandera) {
            bootbox.alert('Datos eliminados con éxito');
            obj.llena({});
        }
    };
    EvaluacionSolicitudTableComponent.prototype.llena = function (dato) {
        var datoenviar = Object.assign({}, dato);
        var tabla = $('#tabla_evaluacionSolicitud').DataTable();
        tabla.clear().draw();
        $.ajax({
            url: this.urlProvider.serverURL + 'evaluacionSolicitud/getTramitesIngresados',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                data.forEach(function (enty) {
                    var obj = {};
                    obj.idEvaluacion = enty.idEvaluacion;
                    obj.folioSolicitudEvaluacion = enty.folioSolicitudEvaluacion;
                    obj.nombre = enty.nombre;
                    obj.apellido1 = enty.apellido1;
                    obj.noExpediente = enty.noExpediente;
                    tabla.row.add(obj).draw(false);
                });
            },
            data: JSON.stringify(datoenviar)
        });
    };
    EvaluacionSolicitudTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-evaluacion-solicitud-table',
            template: __webpack_require__(/*! ./evaluacion-solicitud-table.component.html */ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-table/evaluacion-solicitud-table.component.html"),
            styles: [__webpack_require__(/*! ./evaluacion-solicitud-table.component.css */ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-table/evaluacion-solicitud-table.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_3__["GlobalesService"],
                _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_5__["PermisoAtributoService"],
                _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_6__["PermisoTablaService"],
                _shared_evaluacion_solicitud_service__WEBPACK_IMPORTED_MODULE_0__["EvaluacionSolicitudService"]
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_3__["GlobalesService"],
            _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_5__["PermisoAtributoService"],
            _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_6__["PermisoTablaService"],
            _shared_url_provider__WEBPACK_IMPORTED_MODULE_4__["URLProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _shared_evaluacion_solicitud_service__WEBPACK_IMPORTED_MODULE_0__["EvaluacionSolicitudService"]])
    ], EvaluacionSolicitudTableComponent);
    return EvaluacionSolicitudTableComponent;
}());



/***/ }),

/***/ "./src/app/evaluacion-solicitudes/evaluacion-solicitud.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/evaluacion-solicitudes/evaluacion-solicitud.module.ts ***!
  \***********************************************************************/
/*! exports provided: EvaluacionSolicitudModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluacionSolicitudModule", function() { return EvaluacionSolicitudModule; });
/* harmony import */ var _conteo_celulares_conteo_celular_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../conteo-celulares/conteo-celular.module */ "./src/app/conteo-celulares/conteo-celular.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _evaluacion_solicitud_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./evaluacion-solicitud-routing.module */ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-routing.module.ts");
/* harmony import */ var _evaluacion_solicitud_list_kendo_evaluacion_solicitud_list_kendo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./evaluacion-solicitud-list-kendo/evaluacion-solicitud-list-kendo.component */ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-list-kendo/evaluacion-solicitud-list-kendo.component.ts");
/* harmony import */ var _evaluacion_solicitud_crud_evaluacion_solicitud_crud_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./evaluacion-solicitud-crud/evaluacion-solicitud-crud.component */ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-crud/evaluacion-solicitud-crud.component.ts");
/* harmony import */ var _evaluacion_solicitud_conjunto_evaluacion_solicitud_conjunto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./evaluacion-solicitud-conjunto/evaluacion-solicitud-conjunto.component */ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-conjunto/evaluacion-solicitud-conjunto.component.ts");
/* harmony import */ var _evaluacion_solicitud_evaluacion_solicitud_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./evaluacion-solicitud/evaluacion-solicitud.component */ "./src/app/evaluacion-solicitudes/evaluacion-solicitud/evaluacion-solicitud.component.ts");
/* harmony import */ var _evaluacion_solicitud_table_evaluacion_solicitud_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./evaluacion-solicitud-table/evaluacion-solicitud-table.component */ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-table/evaluacion-solicitud-table.component.ts");
/* harmony import */ var _evaluacion_solicitud_table_bandeja_evaluacion_solicitud_table_bandeja_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./evaluacion-solicitud-table-bandeja/evaluacion-solicitud-table-bandeja.component */ "./src/app/evaluacion-solicitudes/evaluacion-solicitud-table-bandeja/evaluacion-solicitud-table-bandeja.component.ts");
/* harmony import */ var _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/usuario-perfil.module */ "./src/app/shared/usuario-perfil.module.ts");
/* harmony import */ var _recepcion_solicitud_evaluaciones_recepcion_solicitud_evaluacion_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion.module */ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion.module.ts");
/* harmony import */ var _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/componentes-personalizados/personalizados.module */ "./src/app/core/componentes-personalizados/personalizados.module.ts");
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














var EvaluacionSolicitudModule = /** @class */ (function () {
    function EvaluacionSolicitudModule(parentModule) {
        if (parentModule) {
            throw new Error('EvaluacionSolicitudModule is already loaded. Import it in the AppModule only');
        }
    }
    EvaluacionSolicitudModule_1 = EvaluacionSolicitudModule;
    EvaluacionSolicitudModule.forRoot = function () {
        return {
            ngModule: EvaluacionSolicitudModule_1,
            providers: []
        };
    };
    var EvaluacionSolicitudModule_1;
    EvaluacionSolicitudModule = EvaluacionSolicitudModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_13__["PersonalizadosModule"], _evaluacion_solicitud_routing_module__WEBPACK_IMPORTED_MODULE_4__["EvaluacionSolicitudRoutingModule"], _conteo_celulares_conteo_celular_module__WEBPACK_IMPORTED_MODULE_0__["ConteoCelularModule"],
                _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_11__["UsuarioPerfilModule"].forRoot(),
                _recepcion_solicitud_evaluaciones_recepcion_solicitud_evaluacion_module__WEBPACK_IMPORTED_MODULE_12__["RecepcionSolicitudEvaluacionModule"]
            ],
            declarations: [
                _evaluacion_solicitud_list_kendo_evaluacion_solicitud_list_kendo_component__WEBPACK_IMPORTED_MODULE_5__["EvaluacionSolicitudListKendoComponent"],
                _evaluacion_solicitud_evaluacion_solicitud_component__WEBPACK_IMPORTED_MODULE_8__["EvaluacionSolicitudComponent"],
                _evaluacion_solicitud_crud_evaluacion_solicitud_crud_component__WEBPACK_IMPORTED_MODULE_6__["EvaluacionSolicitudCrudComponent"],
                _evaluacion_solicitud_conjunto_evaluacion_solicitud_conjunto_component__WEBPACK_IMPORTED_MODULE_7__["EvaluacionSolicitudConjuntoComponent"],
                _evaluacion_solicitud_table_evaluacion_solicitud_table_component__WEBPACK_IMPORTED_MODULE_9__["EvaluacionSolicitudTableComponent"],
                _evaluacion_solicitud_table_bandeja_evaluacion_solicitud_table_bandeja_component__WEBPACK_IMPORTED_MODULE_10__["EvaluacionSolicitudTableBandejaComponent"],
            ],
            exports: [
                _evaluacion_solicitud_list_kendo_evaluacion_solicitud_list_kendo_component__WEBPACK_IMPORTED_MODULE_5__["EvaluacionSolicitudListKendoComponent"],
                _evaluacion_solicitud_evaluacion_solicitud_component__WEBPACK_IMPORTED_MODULE_8__["EvaluacionSolicitudComponent"],
                _evaluacion_solicitud_crud_evaluacion_solicitud_crud_component__WEBPACK_IMPORTED_MODULE_6__["EvaluacionSolicitudCrudComponent"],
                _evaluacion_solicitud_conjunto_evaluacion_solicitud_conjunto_component__WEBPACK_IMPORTED_MODULE_7__["EvaluacionSolicitudConjuntoComponent"],
                _evaluacion_solicitud_table_evaluacion_solicitud_table_component__WEBPACK_IMPORTED_MODULE_9__["EvaluacionSolicitudTableComponent"],
                _evaluacion_solicitud_table_bandeja_evaluacion_solicitud_table_bandeja_component__WEBPACK_IMPORTED_MODULE_10__["EvaluacionSolicitudTableBandejaComponent"],
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        __metadata("design:paramtypes", [EvaluacionSolicitudModule])
    ], EvaluacionSolicitudModule);
    return EvaluacionSolicitudModule;
}());



/***/ }),

/***/ "./src/app/evaluacion-solicitudes/evaluacion-solicitud/evaluacion-solicitud.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/evaluacion-solicitudes/evaluacion-solicitud/evaluacion-solicitud.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/evaluacion-solicitudes/evaluacion-solicitud/evaluacion-solicitud.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/evaluacion-solicitudes/evaluacion-solicitud/evaluacion-solicitud.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [hidden]=\"!usuariologueado\" #formaGeneral=\"ngForm\"     >\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\"><h1>{{etiquetaGeneral}}</h1></div>\n        <div class=\"panel-body\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                     <!-- <app-componente-identificador [componente]=\"'evaluacionSolicitud'\"\n                                                   [atributo]=\"'id'\"\n                                                   [buscar]=\"evaluacionSolicitudBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosEvaluacionSolicitud['id']\"\n                                                   [(dato)]=\"evaluacionSolicitud.id\"   class=\"w-100\" >\n                    </app-componente-identificador >\n                    <div>\n                        <app-componente-objeto [componente]=\"'evaluacionSolicitud'\"\n                                               [atributo]=\"'idrecepcionSolicitudEvaluacion'\"\n                                               [buscar]=\"evaluacionSolicitudBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosEvaluacionSolicitud['idrecepcionSolicitudEvaluacion']\"\n                                               [(dato)]=\"evaluacionSolicitud.idrecepcionSolicitudEvaluacion\"  class=\"w-100\"\n                                               [ocultarConjuntos]=\"ocultarConjuntosEvaluacionSolicitud\"\n                                               [opciones]=\"lista_idrecepcionSolicitudEvaluacionEvaluacionSolicitud\"\n                                               [atributoVisible]=\"'expedienteFisico'\" [(objetoEdicion)]=\"idrecepcionSolicitudEvaluacionEvaluacionSolicitudEditar\">\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!idrecepcionSolicitudEvaluacionEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'evaluacionSolicitud','idrecepcionSolicitudEvaluacion')\" >\n                                   <app-recepcion-solicitud-evaluacion-crud [nombre]=\"'idrecepcionSolicitudEvaluacion'\" [recepcionSolicitudEvaluacion]=\"evaluacionSolicitud.idrecepcionSolicitudEvaluacion\" (recepcionSolicitudEvaluacionChange)=\"evtIdrecepcionSolicitudEvaluacion($event)\"\n                                                           [ocultarConjuntosRecepcionSolicitudEvaluacion]=\"'true'\" [class.hidden]=\"!idrecepcionSolicitudEvaluacionEditar\" ></app-recepcion-solicitud-evaluacion-crud>\n                            </div>\n                        </div>\n                    </div> -->\n                    <!-- <div>\n                        <app-componente-objeto [componente]=\"'evaluacionSolicitud'\"\n                                               [atributo]=\"'usuarioUltMov'\"\n                                               [buscar]=\"evaluacionSolicitudBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosEvaluacionSolicitud['usuarioUltMov']\"\n                                               [(dato)]=\"evaluacionSolicitud.usuarioUltMov\"  class=\"w-100\"\n                                               [ocultarConjuntos]=\"ocultarConjuntosEvaluacionSolicitud\"\n                                               [opciones]=\"lista_usuarioUltMovEvaluacionSolicitud\"\n                                               [atributoVisible]=\"'username'\" [(objetoEdicion)]=\"usuarioUltMovEvaluacionSolicitudEditar\">\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!usuarioUltMovEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'evaluacionSolicitud','usuarioUltMov')\" >\n                                   <app-usuario-crud [nombre]=\"'usuarioUltMov'\" [usuario]=\"evaluacionSolicitud.usuarioUltMov\" (usuarioChange)=\"evtUsuarioUltMov($event)\"\n                                                           [ocultarConjuntosUsuario]=\"'true'\" [class.hidden]=\"!usuarioUltMovEditar\" ></app-usuario-crud>\n                            </div>\n                        </div>\n                    </div> -->\n                     <!-- <app-componente-radio [componente]=\"'evaluacionSolicitud'\"\n                                                   [atributo]=\"'status'\"\n                                                   [buscar]=\"evaluacionSolicitudBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosEvaluacionSolicitud['status']\"\n                                                   [(dato)]=\"evaluacionSolicitud.status\"   class=\"w-100\" >\n                    </app-componente-radio >  -->\n\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/evaluacion-solicitudes/evaluacion-solicitud/evaluacion-solicitud.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/evaluacion-solicitudes/evaluacion-solicitud/evaluacion-solicitud.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: EvaluacionSolicitudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluacionSolicitudComponent", function() { return EvaluacionSolicitudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/evaluacion-solicitud */ "./src/app/evaluacion-solicitudes/shared/evaluacion-solicitud.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EvaluacionSolicitudComponent = /** @class */ (function () {
    function EvaluacionSolicitudComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.evaluacionSolicitudChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovEvaluacionSolicitudUsuarioEditar = false;
        this.idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacionEditar = false;
    }
    EvaluacionSolicitudComponent.prototype.actualizarEvaluacionSolicitud = function () {
        if (this.evaluacionSolicitud.id == null) {
            this.evaluacionSolicitudService.guardarEvaluacionSolicitud(this.evaluacionSolicitud, this.evtGuardar, this);
        }
        else {
            this.evaluacionSolicitudService.actualizarEvaluacionSolicitud(this.evaluacionSolicitud, this.evtActualiza, this);
        }
    };
    EvaluacionSolicitudComponent.prototype.evtGuardar = function (evaluacionSolicitud, obj) {
        obj.evaluacionSolicitud = evaluacionSolicitud;
        obj.evaluacionSolicitudChange.emit(obj.evaluacionSolicitud);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    };
    EvaluacionSolicitudComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.evaluacionSolicitudChange.emit(obj.evaluacionSolicitud);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    EvaluacionSolicitudComponent.prototype.ngOnChanges = function (changes) {
        if (changes.opcion && changes.opcion.currentValue != null) {
            if (changes.opcion.currentValue == 1) {
                this.opcion = 1;
                this.actualizarEvaluacionSolicitud();
            }
        }
    };
    EvaluacionSolicitudComponent.prototype.ngOnInit = function () {
        if (this.evaluacionSolicitud.id) {
            this.evaluacionSolicitudService.getTramitesIngresados();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EvaluacionSolicitudComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EvaluacionSolicitudComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EvaluacionSolicitudComponent.prototype, "evaluacionSolicitudBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EvaluacionSolicitudComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EvaluacionSolicitudComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EvaluacionSolicitudComponent.prototype, "validosEvaluacionSolicitud", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_1__["EvaluacionSolicitud"])
    ], EvaluacionSolicitudComponent.prototype, "evaluacionSolicitud", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EvaluacionSolicitudComponent.prototype, "evaluacionSolicitudService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], EvaluacionSolicitudComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EvaluacionSolicitudComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EvaluacionSolicitudComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EvaluacionSolicitudComponent.prototype, "evaluacionSolicitudChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EvaluacionSolicitudComponent.prototype, "ocultarConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EvaluacionSolicitudComponent.prototype, "lista_usuarioUltMovEvaluacionSolicitudUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EvaluacionSolicitudComponent.prototype, "lista_idrecepcionSolicitudEvaluacionEvaluacionSolicitudRecepcionSolicitudEvaluacion", void 0);
    EvaluacionSolicitudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-evaluacion-solicitud',
            template: __webpack_require__(/*! ./evaluacion-solicitud.component.html */ "./src/app/evaluacion-solicitudes/evaluacion-solicitud/evaluacion-solicitud.component.html"),
            styles: [__webpack_require__(/*! ./evaluacion-solicitud.component.css */ "./src/app/evaluacion-solicitudes/evaluacion-solicitud/evaluacion-solicitud.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], EvaluacionSolicitudComponent);
    return EvaluacionSolicitudComponent;
}());



/***/ }),

/***/ "./src/app/evaluacion-solicitudes/shared/configurar-evaluacion-solicitud.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/evaluacion-solicitudes/shared/configurar-evaluacion-solicitud.ts ***!
  \**********************************************************************************/
/*! exports provided: ConfigurarEvaluacionSolicitud */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurarEvaluacionSolicitud", function() { return ConfigurarEvaluacionSolicitud; });
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");

var ConfigurarEvaluacionSolicitud = /** @class */ (function () {
    //   rutaAgregar:string;
    function ConfigurarEvaluacionSolicitud() {
        this.urlprovider = new _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__["URLProvider"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "evaluacionSolicitud";
        this.rutaLista = this.crudServiceBaseUrl + "/getEvaluacionSolicitudes";
        this.rutaAgregar = this.crudServiceBaseUrl + "/guardarEvaluacionSolicitud";
        this.rutaActualizar = this.crudServiceBaseUrl + "/actualizarEvaluacionSolicitud";
        this.rutaEliminar = this.crudServiceBaseUrl + "/eliminarEvaluacionSolicitud";
        this.titulo = "Catálogo EvaluacionSolicitud";
        this.permisosAtributos = null;
        this.permisosTabla = null;
        this.evaluacionSolicitudConsulta = null;
        this.campoAgEl = null;
        this.tipocampoAgEl = null;
        this.altoComponente = 500;
    }
    ConfigurarEvaluacionSolicitud.prototype.lectura = function () {
        return {
            url: this.rutaLista,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarEvaluacionSolicitud.prototype.lecturaP = function (evt, dat) {
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
    ConfigurarEvaluacionSolicitud.prototype.eliminar = function () {
        return {
            url: this.rutaEliminar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarEvaluacionSolicitud.prototype.eliminarP = function (evt, dat) {
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
    ConfigurarEvaluacionSolicitud.prototype.agregar = function () {
        return {
            url: this.rutaAgregar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarEvaluacionSolicitud.prototype.agregarP = function (evt, dat) {
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
    return ConfigurarEvaluacionSolicitud;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-desglose-corneas-desglose-cornea-module~app-evaluacion-solicitudes-evaluacion-solicitud-~9956abc2.js.map