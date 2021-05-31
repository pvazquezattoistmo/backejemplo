(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-conteo-celulares-conteo-celular-module~app-desglose-corneas-desglose-cornea-module~app-e~72967aa3"],{

/***/ "./src/app/estudio-laboratorios/estudio-laboratorio-conjunto/estudio-laboratorio-conjunto.component.css":
/*!**************************************************************************************************************!*\
  !*** ./src/app/estudio-laboratorios/estudio-laboratorio-conjunto/estudio-laboratorio-conjunto.component.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/estudio-laboratorios/estudio-laboratorio-conjunto/estudio-laboratorio-conjunto.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/estudio-laboratorios/estudio-laboratorio-conjunto/estudio-laboratorio-conjunto.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\"  >\n    <li *ngFor =  \"let estudioLaboratorio of listaEstudioLaboratorio \" [ngClass]=\"{ 'active':idSeleccionado=== 'I-'+estudioLaboratorio.id}\"\n        (click)=\"elegir(estudioLaboratorio,'I' )\" >\n        <a data-toggle=\"tab\" href=\"#tab-I-{{estudioLaboratorio.id}}\">{{estudioLaboratorio.id}}</a>\n    </li>\n    <li *ngFor =  \"let estudioLaboratorio of listaEstudioLaboratorioN \" [ngClass]=\"{ 'active':idSeleccionado=== 'N-'+estudioLaboratorio.id}\"\n        (click)=\"elegir(estudioLaboratorio, 'N')\" >\n        <a data-toggle=\"tab\" href=\"#tab-N-{{estudioLaboratorio.id}}\">T-{{estudioLaboratorio.id}}</a>\n    </li>\n</ul>\n<div class=\"panel panel-default\"  >\n     <div  class=\"tab-content\">\n        <div *ngFor = \"let estudioLaboratorio of listaEstudioLaboratorio ; let i = index \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='I-'+estudioLaboratorio.id}\" id=\"tab-I-{{estudioLaboratorio.id}}\">\n\t\t\t<app-estudio-laboratorio [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [estudioLaboratorioBuscar]=\"estudioLaboratorioBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosEstudioLaboratorio]=\"validosEstudioLaboratorio\"  \n\t\t\t\t\t\t  [estudioLaboratorioService]=\"estudioLaboratorioService\" [(opcion)]=\"opcionEstudioLaboratorio\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(estudioLaboratorio)]=\"listaEstudioLaboratorio[i]\"  [ocultarConjuntos]=\"ocultarConjuntosEstudioLaboratorio\"\n                           [lista_usuarioUltMovEstudioLaboratorioUsuario]=\"lista_usuarioUltMovEstudioLaboratorioUsuario\" \n                           [lista_idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud]=\"lista_idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud\" \n\n\t\t\t\t\t  >\n\t\t\t</app-estudio-laboratorio>\n        </div>\n        <div *ngFor = \"let estudioLaboratorio of listaEstudioLaboratorioN;  let i = index  \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='N-'+estudioLaboratorio.id}\" id=\"tab-N-{{estudioLaboratorio.id}}\">\n\t\t\t<app-estudio-laboratorio [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [estudioLaboratorioBuscar]=\"estudioLaboratorioBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosEstudioLaboratorio]=\"validosEstudioLaboratorio\"  \n\t\t\t\t\t\t  [estudioLaboratorioService]=\"estudioLaboratorioService\" [(opcion)]=\"opcionEstudioLaboratorio\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(estudioLaboratorio)]=\"listaEstudioLaboratorioN[i]\"  [ocultarConjuntos]=\"ocultarConjuntosEstudioLaboratorio\"\n                           [lista_usuarioUltMovEstudioLaboratorioUsuario]=\"lista_usuarioUltMovEstudioLaboratorioUsuario\" \n                           [lista_idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud]=\"lista_idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud\" \n\n\t\t\t\t\t  >\n\t\t\t</app-estudio-laboratorio>  \n        </div>\n\n    </div>\n    <div class=\"panel-footer\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"agregarNuevo()\">\n            <span class=\"fa fa-plus-circle\" aria-hidden=\"true\" style=\"font-size:36px\"></span> AGREGAR\n        </button>\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"actualizaTodo()\">\n            <span class=\"fa fa-reply-all\" aria-hidden=\"true\" style=\"font-size:36px\"></span> ACTUALIZAR TODO\n        </button>\n    </div>\n</div>\t\t\t\n"

/***/ }),

/***/ "./src/app/estudio-laboratorios/estudio-laboratorio-conjunto/estudio-laboratorio-conjunto.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/estudio-laboratorios/estudio-laboratorio-conjunto/estudio-laboratorio-conjunto.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: EstudioLaboratorioConjuntoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstudioLaboratorioConjuntoComponent", function() { return EstudioLaboratorioConjuntoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/estudio-laboratorio */ "./src/app/estudio-laboratorios/shared/estudio-laboratorio.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EstudioLaboratorioConjuntoComponent = /** @class */ (function () {
    function EstudioLaboratorioConjuntoComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovEstudioLaboratorioUsuarioEditar = false;
        this.idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitudEditar = false;
        this.listaEstudioLaboratorioN = [];
        this.listaEstudioLaboratorio = [];
        this.listaEstudioLaboratorioChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.estudioLaboratorioN = new _shared_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_1__["EstudioLaboratorio"]();
        this.estudioLaboratorioNChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.agregados = 0;
        this.actualizados = 0;
        this.idSeleccionado = "N-0";
    }
    EstudioLaboratorioConjuntoComponent.prototype.elegir = function (estudioLaboratorio, tipo) {
        this.idSeleccionado = tipo + "-" + estudioLaboratorio.id;
        this.estudioLaboratorioN = estudioLaboratorio;
    };
    EstudioLaboratorioConjuntoComponent.prototype.ngOnInit = function () {
        this.estudioLaboratorioN.id = 0;
        this.listaEstudioLaboratorioN.push(Object.assign({}, this.estudioLaboratorioN));
        this.usuariologueado = this.globalesService.dameUsuario();
    };
    EstudioLaboratorioConjuntoComponent.prototype.agregarNuevo = function () {
        var pg = new _shared_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_1__["EstudioLaboratorio"]();
        pg.id = this.listaEstudioLaboratorioN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaEstudioLaboratorioN.push(pg);
    };
    EstudioLaboratorioConjuntoComponent.prototype.actualizaTodo = function () {
        this.agregados = 0;
        this.actualizados = 0;
        for (var _i = 0, _a = this.listaEstudioLaboratorio; _i < _a.length; _i++) {
            var estudioLaboratorio = _a[_i];
            this.estudioLaboratorioService.actualizarEstudioLaboratorio(estudioLaboratorio, this.evtActualiza, this);
        }
        for (var _b = 0, _c = this.listaEstudioLaboratorioN; _b < _c.length; _b++) {
            var estudioLaboratorio = _c[_b];
            estudioLaboratorio.id = null;
            this.estudioLaboratorioService.guardarEstudioLaboratorio(estudioLaboratorio, this.evtGuardar, this);
        }
    };
    EstudioLaboratorioConjuntoComponent.prototype.evtGuardar = function (estudioLaboratorio, obj) {
        obj.agregados++;
        obj.listaEstudioLaboratorio.push(estudioLaboratorio);
        if (obj.agregados >= obj.listaEstudioLaboratorioN.length) {
            obj.estudioLaboratorioN = new _shared_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_1__["EstudioLaboratorio"]();
            obj.listaEstudioLaboratorioN = [];
            obj.estudioLaboratorioN.id = 0;
            obj.idSeleccionado = "N-" + obj.estudioLaboratorioN.id;
            obj.listaEstudioLaboratorioN.push(Object.assign({}, obj.estudioLaboratorioN));
            obj.listaEstudioLaboratorioChange.emit(obj.listaEstudioLaboratorio);
        }
        if (obj.agregados >= obj.listaEstudioLaboratorioN.length &&
            obj.actualizados >= obj.listaEstudioLaboratorio.length) {
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    EstudioLaboratorioConjuntoComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.actualizados++;
            if (obj.agregados >= obj.listaEstudioLaboratorioN.length &&
                obj.actualizados >= obj.listaEstudioLaboratorio.length) {
                obj.opcion = 0;
                obj.opcion.emit(obj.opcion);
            }
        }
    };
    EstudioLaboratorioConjuntoComponent.prototype.ngOnChanges = function (changes) {
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
    ], EstudioLaboratorioConjuntoComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EstudioLaboratorioConjuntoComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EstudioLaboratorioConjuntoComponent.prototype, "estudioLaboratorioBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EstudioLaboratorioConjuntoComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EstudioLaboratorioConjuntoComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EstudioLaboratorioConjuntoComponent.prototype, "validosEstudioLaboratorio", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EstudioLaboratorioConjuntoComponent.prototype, "ocultarConjuntosEstudioLaboratorio", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EstudioLaboratorioConjuntoComponent.prototype, "estudioLaboratorioService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], EstudioLaboratorioConjuntoComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EstudioLaboratorioConjuntoComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EstudioLaboratorioConjuntoComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EstudioLaboratorioConjuntoComponent.prototype, "lista_usuarioUltMovEstudioLaboratorioUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EstudioLaboratorioConjuntoComponent.prototype, "lista_idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EstudioLaboratorioConjuntoComponent.prototype, "listaEstudioLaboratorio", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EstudioLaboratorioConjuntoComponent.prototype, "listaEstudioLaboratorioChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_1__["EstudioLaboratorio"])
    ], EstudioLaboratorioConjuntoComponent.prototype, "estudioLaboratorioN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EstudioLaboratorioConjuntoComponent.prototype, "estudioLaboratorioNChange", void 0);
    EstudioLaboratorioConjuntoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-estudio-laboratorio-conjunto',
            template: __webpack_require__(/*! ./estudio-laboratorio-conjunto.component.html */ "./src/app/estudio-laboratorios/estudio-laboratorio-conjunto/estudio-laboratorio-conjunto.component.html"),
            styles: [__webpack_require__(/*! ./estudio-laboratorio-conjunto.component.css */ "./src/app/estudio-laboratorios/estudio-laboratorio-conjunto/estudio-laboratorio-conjunto.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], EstudioLaboratorioConjuntoComponent);
    return EstudioLaboratorioConjuntoComponent;
}());



/***/ }),

/***/ "./src/app/estudio-laboratorios/estudio-laboratorio-crud/estudio-laboratorio-crud.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/estudio-laboratorios/estudio-laboratorio-crud/estudio-laboratorio-crud.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/estudio-laboratorios/estudio-laboratorio-crud/estudio-laboratorio-crud.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/estudio-laboratorios/estudio-laboratorio-crud/estudio-laboratorio-crud.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <!-- <div class=\"panel-footer\" style=\"text-align: right\" *ngIf=\"!viewModeEvaluacion\">\n        <div style=\"display: inline-block;width: 90%; margin-right: 10%;\">\n        </div>\n    </div> -->\n  <app-recepcion-solicitud-evaluacion-crud [viewModeEvaluacion]=\"true\"\n    [solicitudEvaluacionCorneal]=\"solicitudEvaluacionCorneal\"\n    [recepcionSolicitudEvaluacion]=\"recepcionSolicitudEvaluacion\"></app-recepcion-solicitud-evaluacion-crud>\n  <div class=\"panel-footer\" style=\"text-align: left;\">\n    <h3 class=\"text-center\">EVALUACIÓN DE TEJIDO CORNEAL </h3>\n    <h3 class=\"text-center\">Aplicación de Calidad / Estudios de Laboratorio / Revisión Ocular</h3>\n    <hr>\n    <div class=\"form-group\">\n      <label class=\"control-label\">Nombre del Donante:</label>\n      <input class=\"form-control\" placeholder=\"Nombre\" type=\"text\"\n        [value]=\"solicitudEvaluacionCorneal.nombre + ' ' + solicitudEvaluacionCorneal.primerApellido + ' ' + solicitudEvaluacionCorneal.segundoApellido\"\n        disabled=\"true\" />\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label\">EXPEDIENTE SIRNT:</label>\n      <input class=\"form-control\" placeholder=\"Segundo Apellido\" type=\"text\"\n        [value]=\"solicitudEvaluacionCorneal.numeroExpediente\" disabled=\"true\" />\n    </div>\n    <hr>\n    <label class=\"text-center\">1° OFTALMOLOGÍA: apartado 1 y 2 (apartado 3 opcional, sustituye lámpara de hendidura).\n      Evitar confusión de lateralidad. Valorar en cada apartado como Apta y No Apta</label>\n    <hr>\n    <h4 class=\"text-center\">REVISIÓN MACROSCÓPICA</h4>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <app-estudio-laboratorio [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"'CÓRNEA IZQUIERDA (CI)'\"\n        [estudioLaboratorioBuscar]=\"estudioLaboratorioBuscar\" [permisosAtributos]=\"permisosAtributos\"\n        [permisosConjuntos]=\"permisosConjuntos\" [validosEstudioLaboratorio]=\"validosEstudioLaboratorio\"\n        [estudioLaboratorioService]=\"estudioLaboratorio_service\" [(opcion)]=\"opcionEstudioLaboratorio\"\n        [globalesService]=\"globalesService\" [(estudioLaboratorio)]=\"estudioLaboratorio\"\n        [ocultarConjuntos]=\"ocultarConjuntosEstudioLaboratorio\" [lista_usuarioUltMovEstudioLaboratorioUsuario]=\"\n      lista_usuarioUltMovEstudioLaboratorioUsuario\n    \" [lista_idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud]=\"\n      lista_idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud\n    \" [enable]=\"recepcionSolicitudEvaluacion?.idbtcCi != null && !viewModeEvaluacion && (!evaluacionSolicitud.almacenEvaluacion)\">\n      </app-estudio-laboratorio>\n    </div>\n    <div class=\"col-md-6\">\n      <app-estudio-laboratorio [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"'CÓRNEA DERECHA (CD)'\"\n        [estudioLaboratorioBuscar]=\"estudioLaboratorioBuscar\" [permisosAtributos]=\"permisosAtributos\"\n        [permisosConjuntos]=\"permisosConjuntos\" [validosEstudioLaboratorio]=\"validosEstudioLaboratorio\"\n        [estudioLaboratorioService]=\"estudioLaboratorio_service\" [(opcion)]=\"opcionEstudioLaboratorio\"\n        [globalesService]=\"globalesService\" [(estudioLaboratorio)]=\"estudioLaboratorioDerecha\"\n        [ocultarConjuntos]=\"ocultarConjuntosEstudioLaboratorio\" [lista_usuarioUltMovEstudioLaboratorioUsuario]=\"\n      lista_usuarioUltMovEstudioLaboratorioUsuario\n    \" [lista_idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud]=\"\n      lista_idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud\n    \" [enable]=\"recepcionSolicitudEvaluacion?.idbtcCd != null && !viewModeEvaluacion && (!evaluacionSolicitud.almacenEvaluacion)\">\n      </app-estudio-laboratorio>\n    </div>\n  </div>\n  <div class=\"panel-footer\" style=\"text-align: right\" *ngIf=\"!viewModeEvaluacion\">\n    <div style=\"display: inline-block;width: 90%; margin-right: 10%;\">\n      <button style=\"margin-right: 10px;\" type=\"button\" class=\"btn btn-primary btn-guardar\" (click)=\"doSave()\"\n        [disabled]=\"evaluacionSolicitud.almacenEvaluacion\">\n        <span class=\"glyphicon glyphicon-floppy-disk\" aria-hidden=\"true\"></span>\n      </button>\n      <button type=\"button\" class=\"btn btn-primary btn-guardar\"\n        [routerLink]=\"['/lampara-hendidura-crud/',evaluacionSolicitud.id]\"\n        [disabled]=\"!(evaluacionSolicitud.estudiosLaboratorio?.length > 0)\">\n        <span class=\"fa fa-floppy-disk\"></span>Siguiente\n      </button>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"buscarEstudioLaboratorio_{{ nombre }}\" role=\"dialog\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n          &times;\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <app-estudio-laboratorio-list-kendo [nombregrid]=\"'buscar_' + nombre\"\n          [configuracionEstudioLaboratorio]=\"configuracionEstudioLaboratorio\" (estudioLaboratorioSeleccionado)=\"\n            evtEstudioLaboratorioSeleccionado($event)\n          \">\n        </app-estudio-laboratorio-list-kendo>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\n          Close\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/estudio-laboratorios/estudio-laboratorio-crud/estudio-laboratorio-crud.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/estudio-laboratorios/estudio-laboratorio-crud/estudio-laboratorio-crud.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: EstudioLaboratorioCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstudioLaboratorioCrudComponent", function() { return EstudioLaboratorioCrudComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/core.service */ "./src/app/shared/core.service.ts");
/* harmony import */ var _shared_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/file.service */ "./src/app/shared/file.service.ts");
/* harmony import */ var _shared_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/estudio-laboratorio */ "./src/app/estudio-laboratorios/shared/estudio-laboratorio.ts");
/* harmony import */ var _shared_estudio_laboratorio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/estudio-laboratorio.service */ "./src/app/estudio-laboratorios/shared/estudio-laboratorio.service.ts");
/* harmony import */ var _shared_configurar_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/configurar-estudio-laboratorio */ "./src/app/estudio-laboratorios/shared/configurar-estudio-laboratorio.ts");
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../usuarios/shared/usuario.service */ "./src/app/usuarios/shared/usuario.service.ts");
/* harmony import */ var _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../usuario-btcs/shared/usuario-btc.service */ "./src/app/usuario-btcs/shared/usuario-btc.service.ts");
/* harmony import */ var _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../perfil-red-issstes/shared/perfil-red-issste.service */ "./src/app/perfil-red-issstes/shared/perfil-red-issste.service.ts");
/* harmony import */ var _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hospitales/shared/hospital.service */ "./src/app/hospitales/shared/hospital.service.ts");
/* harmony import */ var _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../entidad-federativas/shared/entidad-federativa.service */ "./src/app/entidad-federativas/shared/entidad-federativa.service.ts");
/* harmony import */ var _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../perfiles/shared/perfil.service */ "./src/app/perfiles/shared/perfil.service.ts");
/* harmony import */ var _evaluacion_solicitudes_shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../evaluacion-solicitudes/shared/evaluacion-solicitud */ "./src/app/evaluacion-solicitudes/shared/evaluacion-solicitud.ts");
/* harmony import */ var _evaluacion_solicitudes_shared_evaluacion_solicitud_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../evaluacion-solicitudes/shared/evaluacion-solicitud.service */ "./src/app/evaluacion-solicitudes/shared/evaluacion-solicitud.service.ts");
/* harmony import */ var _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service */ "./src/app/recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service.ts");
/* harmony import */ var _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion */ "./src/app/recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.ts");
/* harmony import */ var _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service */ "./src/app/solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service.ts");
/* harmony import */ var _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal */ "./src/app/solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.ts");
/* harmony import */ var _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../causa-muertes/shared/causa-muerte.service */ "./src/app/causa-muertes/shared/causa-muerte.service.ts");
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










var EstudioLaboratorioCrudComponent = /** @class */ (function () {
    function EstudioLaboratorioCrudComponent(globalesService, zone, fileservice, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    estudioLaboratorio_service, usuario_service, usuarioBtc_service, perfilRedIssste_service, 
    //                public perfilBtc_service: PerfilBtcService,
    hospital_service, entidadFederativa_service, perfil_service, evaluacionSolicitud_service, recepcionSolicitudEvaluacion_service, solicitudEvaluacionCorneal_service, causaMuerte_service, activatedRoute) {
        this.globalesService = globalesService;
        this.zone = zone;
        this.fileservice = fileservice;
        this.coreService = coreService;
        this.estudioLaboratorio_service = estudioLaboratorio_service;
        this.usuario_service = usuario_service;
        this.usuarioBtc_service = usuarioBtc_service;
        this.perfilRedIssste_service = perfilRedIssste_service;
        this.hospital_service = hospital_service;
        this.entidadFederativa_service = entidadFederativa_service;
        this.perfil_service = perfil_service;
        this.evaluacionSolicitud_service = evaluacionSolicitud_service;
        this.recepcionSolicitudEvaluacion_service = recepcionSolicitudEvaluacion_service;
        this.solicitudEvaluacionCorneal_service = solicitudEvaluacionCorneal_service;
        this.causaMuerte_service = causaMuerte_service;
        this.activatedRoute = activatedRoute;
        this.opcionEstudioLaboratorio = 0;
        this.validosEstudioLaboratorio = {
            id: false,
            fechaBaja: false,
            brilloCorneal: false,
            cicatriceLeucoma: false,
            fechaRegistro: false,
            erocioneUlcera: false,
            fechaActualizacion: false,
            valoracion: false,
            cuerpoExtrano: false,
            tipoCornea: false,
            observacion: true,
            status: false,
            usuarioUltMov: false,
            idevaluacionSolicitud: false,
        };
        this.ocultarConjuntosEstudioLaboratorio = false;
        this.nombre = "";
        this.permisosTabla = { "tabla": "estudioLaboratorio", "permiso": 0, "etiqueta": "" };
        this.permisosAtributos = [];
        this.permisosConjuntos = [];
        //  public perfil: Perfil;
        this.accion = 0;
        this.estudioLaboratorioLazy = false;
        this.estudioLaboratorioPermisos = false;
        this.validaciones = false;
        this.validacionesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.estudioLaboratorio = new _shared_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_5__["EstudioLaboratorio"]();
        this.estudioLaboratorioDerecha = new _shared_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_5__["EstudioLaboratorio"]();
        this.estudioLaboratorioChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.estudioLaboratorioTablaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.lista_estudioLaboratorios = [];
        this.usuarioUltMovEstudioLaboratorioUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_8__["Usuario"]();
        this.lista_usuarioUltMovEstudioLaboratorioUsuario = [];
        this.usuarioUltMovEstudioLaboratorioUsuarioEditar = false;
        this.idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitudEleccion = new _evaluacion_solicitudes_shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_15__["EvaluacionSolicitud"]();
        this.lista_idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud = [];
        this.idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitudEditar = false;
        this.evaluacionSolicitud = new _evaluacion_solicitudes_shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_15__["EvaluacionSolicitud"]();
        this.recepcionSolicitudEvaluacion = new _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_18__["RecepcionSolicitudEvaluacion"]();
        this.solicitudEvaluacionCorneal = new _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal__WEBPACK_IMPORTED_MODULE_20__["SolicitudEvaluacionCorneal"]();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                this.obtenerPermisos();
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
            }
        }
        this.estudioLaboratorioSeleccion = this.estudioLaboratorioCancelar = this.estudioLaboratorioGuardar = this.estudioLaboratorioBuscar = this.estudioLaboratorioAgregar = this.estudioLaboratorioActualizar = this.estudioLaboratorioEliminar = false;
        this.configuracionEstudioLaboratorio = new _shared_configurar_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_7__["ConfigurarEstudioLaboratorio"]();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovEstudioLaboratorioUsuario, this);
        this.evaluacionSolicitud_service.getEvaluacionSolicitudesActivos(this.evtGetIdevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud, this);
        this.limpiarCampos();
    }
    Object.defineProperty(EstudioLaboratorioCrudComponent.prototype, "estudioLaboratorioOcultarConjuntos", {
        get: function () {
            if (this.ocultarConjuntosEstudioLaboratorio)
                return true;
            return !this.estudioLaboratorioActualizar;
        },
        enumerable: true,
        configurable: true
    });
    EstudioLaboratorioCrudComponent.prototype.ngOnChanges = function (changes) {
        if (changes.estudioLaboratorio && changes.estudioLaboratorio.currentValue == null &&
            this.estudioLaboratorio == null)
            this.estudioLaboratorio = new _shared_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_5__["EstudioLaboratorio"]();
        else {
            var aux = new _shared_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_5__["EstudioLaboratorio"]();
            if (this.estudioLaboratorio)
                aux.from(this.estudioLaboratorio);
            if (aux.isOk && aux.isOk()) {
                this.accion = 7;
                this.estudioLaboratorioBuscar = this.estudioLaboratorioAgregar = this.estudioLaboratorioSeleccion = this.estudioLaboratorioGuardar = false;
                this.estudioLaboratorioActualizar = this.estudioLaboratorioEliminar = this.estudioLaboratorioCancelar = true;
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
                this.estudioLaboratorioSeleccion = this.estudioLaboratorioAgregar = this.estudioLaboratorioBuscar = this.estudioLaboratorioActualizar = this.estudioLaboratorioEliminar = false;
                this.estudioLaboratorioGuardar = this.estudioLaboratorioCancelar = true;
            }
        }
    };
    EstudioLaboratorioCrudComponent.prototype.obtenerPermisos = function () {
        var id_expe = -1;
        var tablas = [
            "estudioLaboratorio",
            "usuario",
            "usuarioBtc",
            "perfilRedIssste",
            "perfilBtc",
            "hospital",
            "entidadFederativa",
            "perfil",
            "evaluacionSolicitud",
            "recepcionSolicitudEvaluacion",
            "solicitudEvaluacionCorneal",
            "causaMuerte",
        ];
        var parametros = {
            "id_usu": this.usuariologueado.id,
            "tablas": tablas,
            "id_exp": id_expe
        };
        this.estudioLaboratorioPermisos = false;
        this.coreService.permisos(parametros, this.evtCorePermisos, this);
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    EstudioLaboratorioCrudComponent.prototype.evtCorePermisos = function (permisos, obj) {
        obj.estudioLaboratorioPermisos = true;
        if (permisos && permisos.estudioLaboratorio && permisos.estudioLaboratorio.PermisoAtributo && permisos.estudioLaboratorio.PermisoAtributo.length > 0) {
            obj.permisosAtributos = permisos.estudioLaboratorio.PermisoAtributo;
        }
        else {
            obj.usuariologueado = undefined;
        }
        if (permisos && permisos.estudioLaboratorio && permisos.estudioLaboratorio.PermisoConjunto && permisos.estudioLaboratorio.PermisoConjunto.length > 0) {
            obj.permisosConjuntos = permisos.estudioLaboratorio.PermisoConjunto;
        }
        if (permisos && permisos.estudioLaboratorio && permisos.estudioLaboratorio.PermisoTabla && permisos.estudioLaboratorio.PermisoTabla.length > 0) {
            obj.permisosTabla = permisos.estudioLaboratorio.PermisoTabla[0];
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
        if (permisos && permisos.evaluacionSolicitud && permisos.evaluacionSolicitud.PermisoAtributo && permisos.evaluacionSolicitud.PermisoAtributo.length > 0) {
            //obj.configuracion$1= permisos.evaluacionSolicitud.PermisoAtributo ;
            obj.permisosAtributos.push(permisos.evaluacionSolicitud.PermisoAtributo);
        }
        if (permisos && permisos.evaluacionSolicitud && permisos.evaluacionSolicitud.PermisoAtributo && permisos.evaluacionSolicitud.PermisoConjunto.length > 0) {
            obj.permisosConjuntos.push(permisos.evaluacionSolicitud.PermisoConjunto);
        }
        if (permisos && permisos.evaluacionSolicitud && permisos.evaluacionSolicitud.PermisoTabla && permisos.evaluacionSolicitud.PermisoTabla.length > 0) {
            //obj.configuracion$1= permisos.evaluacionSolicitud.PermisoTabla[0] ;
            // obj.permisosTabla.push(permisos.evaluacionSolicitud.PermisoTabla[0] );
        }
        if (obj.configurarTablasConjuntos)
            obj.configurarTablasConjuntos();
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    EstudioLaboratorioCrudComponent.prototype.evtGetUsuarioUltMovEstudioLaboratorioUsuario = function (lista_usuarioUltMovEstudioLaboratorioUsuario, obj) {
        obj.lista_usuarioUltMovEstudioLaboratorioUsuario = lista_usuarioUltMovEstudioLaboratorioUsuario;
        obj.actualizar_UsuarioUltMovEstudioLaboratorioUsuario();
    };
    EstudioLaboratorioCrudComponent.prototype.evtGetIdevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud = function (lista_idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud, obj) {
        obj.lista_idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud = lista_idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud;
        obj.actualizar_IdevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud();
    };
    EstudioLaboratorioCrudComponent.prototype.actualizar_UsuarioUltMovEstudioLaboratorioUsuario = function () {
        if (this.usuarioUltMovEstudioLaboratorioUsuarioEleccion)
            for (var _i = 0, _a = this.lista_usuarioUltMovEstudioLaboratorioUsuario; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.usuarioUltMovEstudioLaboratorioUsuarioEleccion.id) {
                    this.usuarioUltMovEstudioLaboratorioUsuarioEleccion = eleme;
                    break;
                }
            }
    };
    EstudioLaboratorioCrudComponent.prototype.actualizar_IdevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud = function () {
        if (this.idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitudEleccion)
            for (var _i = 0, _a = this.lista_idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitudEleccion.id) {
                    this.idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitudEleccion = eleme;
                    break;
                }
            }
    };
    EstudioLaboratorioCrudComponent.prototype.ngDoCheck = function () {
    };
    EstudioLaboratorioCrudComponent.prototype.validaAcciones = function (vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    };
    Object.defineProperty(EstudioLaboratorioCrudComponent.prototype, "validaId", {
        get: function () {
            return this.validosEstudioLaboratorio['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EstudioLaboratorioCrudComponent.prototype, "validaIds", {
        get: function () {
            return this.validosEstudioLaboratorio['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EstudioLaboratorioCrudComponent.prototype, "validaFechaBaja", {
        get: function () {
            return this.validosEstudioLaboratorio['fechaBaja'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EstudioLaboratorioCrudComponent.prototype, "validaBrilloCorneal", {
        get: function () {
            return this.validosEstudioLaboratorio['brilloCorneal'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EstudioLaboratorioCrudComponent.prototype, "validaCicatriceLeucoma", {
        get: function () {
            return this.validosEstudioLaboratorio['cicatriceLeucoma'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EstudioLaboratorioCrudComponent.prototype, "validaFechaRegistro", {
        get: function () {
            return this.validosEstudioLaboratorio['fechaRegistro'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EstudioLaboratorioCrudComponent.prototype, "validaErocioneUlcera", {
        get: function () {
            return this.validosEstudioLaboratorio['erocioneUlcera'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EstudioLaboratorioCrudComponent.prototype, "validaFechaActualizacion", {
        get: function () {
            return this.validosEstudioLaboratorio['fechaActualizacion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EstudioLaboratorioCrudComponent.prototype, "validaValoracion", {
        get: function () {
            return this.validosEstudioLaboratorio['valoracion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EstudioLaboratorioCrudComponent.prototype, "validaCuerpoExtrano", {
        get: function () {
            return this.validosEstudioLaboratorio['cuerpoExtrano'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EstudioLaboratorioCrudComponent.prototype, "validaTipoCornea", {
        get: function () {
            return this.validosEstudioLaboratorio['tipoCornea'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EstudioLaboratorioCrudComponent.prototype, "validaObservacion", {
        get: function () {
            return this.validosEstudioLaboratorio['observacion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EstudioLaboratorioCrudComponent.prototype, "validaStatus", {
        get: function () {
            return this.validosEstudioLaboratorio['status'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EstudioLaboratorioCrudComponent.prototype, "validaUsuarioUltMov", {
        get: function () {
            return this.validosEstudioLaboratorio['usuarioUltMov'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EstudioLaboratorioCrudComponent.prototype, "validaIdevaluacionSolicitud", {
        get: function () {
            return this.validosEstudioLaboratorio['idevaluacionSolicitud'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EstudioLaboratorioCrudComponent.prototype, "validaTodosc", {
        get: function () {
            var salida = this.validaId && this.validaFechaBaja && this.validaBrilloCorneal && this.validaCicatriceLeucoma && this.validaFechaRegistro && this.validaErocioneUlcera && this.validaFechaActualizacion && this.validaValoracion && this.validaCuerpoExtrano && this.validaTipoCornea && this.validaObservacion && this.validaStatus && this.validaUsuarioUltMov && this.validaIdevaluacionSolicitud;
            if (salida != this.validaciones)
                this.validacionesChange.emit(salida);
            return salida;
        },
        enumerable: true,
        configurable: true
    });
    EstudioLaboratorioCrudComponent.prototype.obtenerEstudioLaboratorios = function (lista, objeto) {
        objeto.lista_estudioLaboratorios = lista;
        if (lista && lista.length > 0) {
            objeto.estudioLaboratorio.from(lista[0]);
            objeto.evtEstudioLaboratorioSeleccionado(objeto.estudioLaboratorio);
            if (objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    };
    EstudioLaboratorioCrudComponent.prototype.evn_lazy_estudioLaboratorio = function (estudioLaboratorio, objeto) {
        objeto.estudioLaboratorio = estudioLaboratorio;
        objeto.estudioLaboratorioChange.emit(objeto.estudioLaboratorio);
        objeto.configuarCombosObjetos();
        objeto.estudioLaboratorioLazy = true;
    };
    Object.defineProperty(EstudioLaboratorioCrudComponent.prototype, "datosReporteEstudioLaboratorioWord", {
        /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
        get: function () {
            return !(this.estudioLaboratorioActualizar && this.estudioLaboratorioLazy && this.globalesService.preporteWord(this, "estudioLaboratorio"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EstudioLaboratorioCrudComponent.prototype, "datosReporteEstudioLaboratorioExcel", {
        get: function () {
            return !(this.estudioLaboratorioActualizar && this.estudioLaboratorioLazy && this.globalesService.preporteExcel(this, "estudioLaboratorio"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EstudioLaboratorioCrudComponent.prototype, "datosReporteEstudioLaboratorioPdf", {
        get: function () {
            return !(this.estudioLaboratorioActualizar && this.estudioLaboratorioLazy && this.globalesService.preportePdf(this, "estudioLaboratorio"));
        },
        enumerable: true,
        configurable: true
    });
    EstudioLaboratorioCrudComponent.prototype.reporteEstudioLaboratorioExcel = function (form) {
        var nombre = "EstudioLaboratorio.xlsx";
        var path = "file/reporteExcel";
        var parametros = {};
        parametros["entradas"] = { "estudioLaboratorio": this.estudioLaboratorio };
        parametros["plantilla"] = "EstudioLaboratorio.xlsx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    EstudioLaboratorioCrudComponent.prototype.reporteEstudioLaboratorioWord = function (form) {
        var nombre = "EstudioLaboratorio.docx";
        var path = "file/reporteWord";
        var parametros = {};
        parametros["entradas"] = { "estudioLaboratorio": this.estudioLaboratorio };
        parametros["plantilla"] = "EstudioLaboratorio.docx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    EstudioLaboratorioCrudComponent.prototype.reporteEstudioLaboratorioPdf = function (form) {
        var nombre = "EstudioLaboratorio.docx";
        var path = "file/reportePdf";
        var parametros = {};
        parametros["entradas"] = { "estudioLaboratorio": this.estudioLaboratorio };
        parametros["plantilla"] = "EstudioLaboratorio.docx";
        parametros["salida"] = "EstudioLaboratorio.pdf";
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */
    EstudioLaboratorioCrudComponent.prototype.accionesBuscar = function () {
        this.accion = 1;
        this.estudioLaboratorioGuardar = this.estudioLaboratorioActualizar = this.estudioLaboratorioEliminar = false;
        this.estudioLaboratorioBuscar = this.estudioLaboratorioAgregar = this.estudioLaboratorioCancelar = true;
    };
    EstudioLaboratorioCrudComponent.prototype.buscarEstudioLaboratorioFront = function (form) {
        this.accionesBuscar();
        var vestudioLaboratorio = new _shared_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_5__["EstudioLaboratorio"]();
        vestudioLaboratorio.from(this.estudioLaboratorio);
        this.configuracionEstudioLaboratorio = new _shared_configurar_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_7__["ConfigurarEstudioLaboratorio"]();
        this.configuracionEstudioLaboratorio.permisosTabla = { "tabla": "estudioLaboratorio", "permiso": 8 };
        this.configuracionEstudioLaboratorio.titulo = "Buscar " + this.permisosTabla.etiqueta;
        this.configuracionEstudioLaboratorio.estudioLaboratorioConsulta = vestudioLaboratorio;
        this.permisosacciones();
        $("#buscarEstudioLaboratorio_" + this.nombre).modal();
    };
    EstudioLaboratorioCrudComponent.prototype.buscarEstudioLaboratorioBack = function (estudioLaboratorio) {
        this.estudioLaboratorio_service.getEstudioLaboratoriosByDto(estudioLaboratorio, this.eventoSrvEstudioLaboratorioBuscar, this);
    };
    EstudioLaboratorioCrudComponent.prototype.eventoSrvEstudioLaboratorioBuscar = function (lista, objeto) {
        objeto.lista_estudioLaboratorios = lista;
        if (lista && lista.length > 0) {
            objeto.estudioLaboratorio = lista[0];
            objeto.estudioLaboratorioLazy = false;
            objeto.estudioLaboratorio_service.lazyEstudioLaboratorio(objeto.estudioLaboratorio, objeto.evn_lazy_estudioLaboratorio, objeto);
        }
    };
    EstudioLaboratorioCrudComponent.prototype.guardarEstudioLaboratorioFront = function (form) {
        this.accion = 5; // ********************************************************************************************** maquina
        this.guardarEstudioLaboratorioBack(this.estudioLaboratorio);
        this.accionesBuscar(); // ********************************************************************************* maquina
        this.permisosacciones();
    };
    EstudioLaboratorioCrudComponent.prototype.guardarEstudioLaboratorioBack = function (estudioLaboratorio) {
        if (estudioLaboratorio.usuarioUltMov == null)
            estudioLaboratorio.usuarioUltMov = this.globalesService.dameUsuario();
        if (estudioLaboratorio.status == null || estudioLaboratorio.status == "")
            estudioLaboratorio.status = 1;
        this.estudioLaboratorio_service.guardarEstudioLaboratorio(estudioLaboratorio, this.eventoSrvEstudioLaboratorioGuardar, this);
    };
    EstudioLaboratorioCrudComponent.prototype.eventoSrvEstudioLaboratorioGuardar = function (estudioLaboratorio, obj) {
        obj.estudioLaboratorio = estudioLaboratorio;
        bootbox.alert("Datos guardados con éxito");
        var aux = new _shared_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_5__["EstudioLaboratorio"]();
        aux.from(estudioLaboratorio);
        obj.estudioLaboratorioChange.emit(aux);
        obj.estudioLaboratorioTablaChange.emit(aux);
        obj.estudioLaboratorioLazy = false;
        obj.estudioLaboratorio_service.lazyEstudioLaboratorio(obj.estudioLaboratorio, obj.evn_lazy_estudioLaboratorio, obj);
        obj.accionesActualizar();
    };
    EstudioLaboratorioCrudComponent.prototype.actualizarEstudioLaboratorioFront = function (form) {
        this.accion = 3; // ************************************************************************************* maquina
        this.actualizarEstudioLaboratorioBack(this.estudioLaboratorio);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    };
    EstudioLaboratorioCrudComponent.prototype.actualizarEstudioLaboratorioBack = function (estudioLaboratorio) {
        estudioLaboratorio.usuarioUltMov = this.globalesService.dameUsuario();
        this.estudioLaboratorio_service.actualizarEstudioLaboratorio(estudioLaboratorio, this.eventoSrvEstudioLaboratorioActualizar, this);
    };
    EstudioLaboratorioCrudComponent.prototype.eventoSrvEstudioLaboratorioActualizar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux = new _shared_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_5__["EstudioLaboratorio"]();
            // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.estudioLaboratorioLazy = false;
            obj.estudioLaboratorio_service.lazyEstudioLaboratorio(obj.estudioLaboratorio, obj.evn_lazy_estudioLaboratorio, obj);
            // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.estudioLaboratorio);
            obj.estudioLaboratorioChange.emit(aux);
            obj.estudioLaboratorioTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    };
    EstudioLaboratorioCrudComponent.prototype.eliminarEstudioLaboratorioFront = function (form) {
        this.accion = 4;
        this.eliminarEstudioLaboratorioBack(this.estudioLaboratorio);
        this.permisosacciones();
        this.accionesBuscar();
    };
    EstudioLaboratorioCrudComponent.prototype.eliminarEstudioLaboratorioBack = function (estudioLaboratorio) {
        estudioLaboratorio.usuarioUltMov = this.globalesService.dameUsuario();
        this.estudioLaboratorio_service.eliminarEstudioLaboratorio(estudioLaboratorio, this.eventoSrvEstudioLaboratorioEliminar, this);
    };
    EstudioLaboratorioCrudComponent.prototype.eventoSrvEstudioLaboratorioEliminar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.estudioLaboratorio = new _shared_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_5__["EstudioLaboratorio"]();
            obj.estudioLaboratorioChange.emit(obj.estudioLaboratorio);
            obj.estudioLaboratorioTablaChange.emit(obj.estudioLaboratorio);
            obj.limpiarCampos();
        }
    };
    EstudioLaboratorioCrudComponent.prototype.cancelarEstudioLaboratorioFront = function (form) {
        this.accion = 6;
        this.estudioLaboratorioCancelar = this.estudioLaboratorioGuardar = this.estudioLaboratorioActualizar = this.estudioLaboratorioEliminar = false;
        this.estudioLaboratorioBuscar = this.estudioLaboratorioAgregar = true;
        this.permisosacciones();
    };
    EstudioLaboratorioCrudComponent.prototype.nuevoEstudioLaboratorioFront = function (form) {
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
                this.estudioLaboratorioSeleccion = this.estudioLaboratorioAgregar = this.estudioLaboratorioBuscar = this.estudioLaboratorioActualizar = this.estudioLaboratorioEliminar = false;
                this.estudioLaboratorioGuardar = this.estudioLaboratorioCancelar = true;
            }.bind(this)
        });
    };
    EstudioLaboratorioCrudComponent.prototype.configuarCombosObjetos = function () {
        this.lista_usuarioUltMovEstudioLaboratorioUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovEstudioLaboratorioUsuario, this);
        this.lista_idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud = [];
        this.evaluacionSolicitud_service.getEvaluacionSolicitudesActivos(this.evtGetIdevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud, this);
    };
    EstudioLaboratorioCrudComponent.prototype.configurarTablasConjuntos = function () {
    };
    EstudioLaboratorioCrudComponent.prototype.accionesActualizar = function () {
        this.accion = 7;
        this.estudioLaboratorioBuscar = this.estudioLaboratorioAgregar = this.estudioLaboratorioSeleccion = this.estudioLaboratorioGuardar = false;
        this.estudioLaboratorioActualizar = this.estudioLaboratorioEliminar = this.estudioLaboratorioCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    };
    EstudioLaboratorioCrudComponent.prototype.evtEstudioLaboratorioSeleccionado = function (estudioLaboratorio) {
        this.estudioLaboratorio = new _shared_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_5__["EstudioLaboratorio"]();
        this.estudioLaboratorio.from(estudioLaboratorio);
        this.estudioLaboratorioLazy = false;
        this.estudioLaboratorio_service.lazyEstudioLaboratorio(this.estudioLaboratorio, this.evn_lazy_estudioLaboratorio, this);
        this.accion = 7;
        this.estudioLaboratorioBuscar = this.estudioLaboratorioAgregar = this.estudioLaboratorioSeleccion = this.estudioLaboratorioGuardar = false;
        this.estudioLaboratorioActualizar = this.estudioLaboratorioEliminar = this.estudioLaboratorioCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarEstudioLaboratorio_" + this.nombre).modal("hide");
    };
    EstudioLaboratorioCrudComponent.prototype.ngOnInit = function () {
        this.accion = 0; // *********************************************************************************************************** maquina
        this.estudioLaboratorioSeleccion = this.estudioLaboratorioCancelar = this.estudioLaboratorioGuardar = this.estudioLaboratorioActualizar = this.estudioLaboratorioEliminar = false; // ******************** maquina
        this.estudioLaboratorioBuscar = this.estudioLaboratorioAgregar = true; // ************************************************************************************* maquina
        this.permisosacciones();
        var id = this.activatedRoute.snapshot.paramMap.get("id");
        if (id) {
            this.evaluacionSolicitud.id = id;
            this.evaluacionSolicitud_service.lazyEvaluacionSolicitud(this.evaluacionSolicitud, this.evn_lazy_evaluacionSolicitud, this);
        }
    };
    EstudioLaboratorioCrudComponent.prototype.permisosacciones = function () {
        if (this.estudioLaboratorioBuscar)
            this.estudioLaboratorioBuscar = this.globalesService.pbuscar(this, "estudioLaboratorio");
        if (this.estudioLaboratorioActualizar)
            this.estudioLaboratorioActualizar = (this.globalesService.pacutalizar(this, "estudioLaboratorio") && this.globalesService.pbuscar(this, "estudioLaboratorio"));
        if (this.estudioLaboratorioEliminar)
            this.estudioLaboratorioEliminar = (this.globalesService.peliminar(this, "estudioLaboratorio") && this.globalesService.pbuscar(this, "estudioLaboratorio"));
        if (this.estudioLaboratorioAgregar)
            this.estudioLaboratorioAgregar = this.globalesService.pagregar(this, "estudioLaboratorio");
    };
    EstudioLaboratorioCrudComponent.prototype.permisosaccionesInicio = function () {
        this.estudioLaboratorioSeleccion = this.estudioLaboratorioCancelar = this.estudioLaboratorioGuardar = this.estudioLaboratorioActualizar = this.estudioLaboratorioEliminar = false; // *************************** maquina
        this.estudioLaboratorioBuscar = this.estudioLaboratorioAgregar = true; // ************************************************************************************* maquina
        this.accion = 0; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    EstudioLaboratorioCrudComponent.prototype.limpiarCampos = function () {
        this.estudioLaboratorio = new _shared_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_5__["EstudioLaboratorio"]();
        this.usuarioUltMovEstudioLaboratorioUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_8__["Usuario"]();
        this.idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitudEleccion = new _evaluacion_solicitudes_shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_15__["EvaluacionSolicitud"]();
        this.estudioLaboratorioChange.emit(this.estudioLaboratorio);
        this.estudioLaboratorioSeleccion = this.estudioLaboratorioCancelar = this.estudioLaboratorioGuardar = this.estudioLaboratorioActualizar = this.estudioLaboratorioEliminar = false; // *************************** maquina
        this.estudioLaboratorioBuscar = this.estudioLaboratorioAgregar = true; // ************************************************************************************* maquina
        this.accion = 6; // *********************************************************************************************************** maquina
        this.permisosacciones();
        this.recepcionSolicitudEvaluacion;
    };
    EstudioLaboratorioCrudComponent.prototype.evn_lazy_evaluacionSolicitud = function (evaluacionSolicitud, objeto) {
        (evaluacionSolicitud);
        objeto.evaluacionSolicitud = evaluacionSolicitud;
        objeto.solicitudEvaluacionCorneal = evaluacionSolicitud.idrecepcionSolicitudEvaluacion.idsolicitudEvaluacionCorneal;
        objeto.recepcionSolicitudEvaluacion = evaluacionSolicitud.idrecepcionSolicitudEvaluacion;
        if (evaluacionSolicitud.estudiosLaboratorio) {
            evaluacionSolicitud.estudiosLaboratorio.forEach(function (element) {
                if (element.tipoCornea === 1) {
                    objeto.estudioLaboratorio = element;
                }
                else if (element.tipoCornea === 2) {
                    objeto.estudioLaboratorioDerecha = element;
                }
            });
        }
    };
    EstudioLaboratorioCrudComponent.prototype.doSave = function () {
        var estudios = [];
        var isUpdate = false;
        if (this.recepcionSolicitudEvaluacion.idbtcCd) {
            this.estudioLaboratorioDerecha.tipoCornea = 2;
            this.estudioLaboratorioDerecha.idevaluacionSolicitud = {};
            this.estudioLaboratorioDerecha.idevaluacionSolicitud.id = this.evaluacionSolicitud.id;
            this.estudioLaboratorioDerecha.usuarioUltMov = {};
            this.estudioLaboratorioDerecha.usuarioUltMov.id = this.globalesService.dameUsuario().id;
            if (this.estudioLaboratorioDerecha.id) {
                isUpdate = true;
            }
            estudios.push(this.estudioLaboratorioDerecha);
        }
        if (this.recepcionSolicitudEvaluacion.idbtcCi) {
            this.estudioLaboratorio.tipoCornea = 1;
            this.estudioLaboratorio.idevaluacionSolicitud = {};
            this.estudioLaboratorio.idevaluacionSolicitud.id = this.evaluacionSolicitud.id;
            this.estudioLaboratorio.usuarioUltMov = {};
            this.estudioLaboratorio.usuarioUltMov.id = this.globalesService.dameUsuario().id;
            if (this.estudioLaboratorio.id) {
                isUpdate = true;
            }
            estudios.push(this.estudioLaboratorio);
        }
        if (isUpdate) {
            this.estudioLaboratorio_service.actualizarListaEstudioLaboratorio(estudios, this.evn_guardarListaEvaluacion, this);
        }
        else {
            this.estudioLaboratorio_service.guardarListaEstudioLaboratorio(estudios, this.evn_guardarListaEvaluacion, this);
        }
    };
    EstudioLaboratorioCrudComponent.prototype.evn_guardarListaEvaluacion = function (ev, objeto) {
        var id = objeto.activatedRoute.snapshot.paramMap.get("id");
        if (id) {
            var ev_1 = new _evaluacion_solicitudes_shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_15__["EvaluacionSolicitud"]();
            ev_1.id = id;
            objeto.evaluacionSolicitud_service.lazyEvaluacionSolicitud(ev_1, objeto.evn_lazy_evaluacionSolicitud, objeto);
        }
        bootbox.alert("Datos guardados con éxito");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], EstudioLaboratorioCrudComponent.prototype, "ocultarConjuntosEstudioLaboratorio", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], EstudioLaboratorioCrudComponent.prototype, "nombre", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], EstudioLaboratorioCrudComponent.prototype, "validaciones", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], EstudioLaboratorioCrudComponent.prototype, "validacionesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _shared_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_5__["EstudioLaboratorio"])
    ], EstudioLaboratorioCrudComponent.prototype, "estudioLaboratorio", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _shared_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_5__["EstudioLaboratorio"])
    ], EstudioLaboratorioCrudComponent.prototype, "estudioLaboratorioDerecha", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], EstudioLaboratorioCrudComponent.prototype, "estudioLaboratorioChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], EstudioLaboratorioCrudComponent.prototype, "estudioLaboratorioTablaChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], EstudioLaboratorioCrudComponent.prototype, "viewModeEvaluacion", void 0);
    EstudioLaboratorioCrudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-estudio-laboratorio-crud',
            template: __webpack_require__(/*! ./estudio-laboratorio-crud.component.html */ "./src/app/estudio-laboratorios/estudio-laboratorio-crud/estudio-laboratorio-crud.component.html"),
            styles: [__webpack_require__(/*! ./estudio-laboratorio-crud.component.css */ "./src/app/estudio-laboratorios/estudio-laboratorio-crud/estudio-laboratorio-crud.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"],
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_file_service__WEBPACK_IMPORTED_MODULE_4__["FileService"],
                _shared_estudio_laboratorio_service__WEBPACK_IMPORTED_MODULE_6__["EstudioLaboratorioService"],
                _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioService"],
                _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_13__["EntidadFederativaService"],
                _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_11__["PerfilRedIsssteService"],
                //                PerfilBtcService,
                _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_12__["HospitalService"],
                _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_10__["UsuarioBtcService"],
                _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_14__["PerfilService"],
                _evaluacion_solicitudes_shared_evaluacion_solicitud_service__WEBPACK_IMPORTED_MODULE_16__["EvaluacionSolicitudService"],
                _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_21__["CausaMuerteService"],
                _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_19__["SolicitudEvaluacionCornealService"],
                _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_17__["RecepcionSolicitudEvaluacionService"]
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _shared_file_service__WEBPACK_IMPORTED_MODULE_4__["FileService"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"],
            _shared_estudio_laboratorio_service__WEBPACK_IMPORTED_MODULE_6__["EstudioLaboratorioService"],
            _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioService"],
            _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_10__["UsuarioBtcService"],
            _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_11__["PerfilRedIsssteService"],
            _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_12__["HospitalService"],
            _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_13__["EntidadFederativaService"],
            _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_14__["PerfilService"],
            _evaluacion_solicitudes_shared_evaluacion_solicitud_service__WEBPACK_IMPORTED_MODULE_16__["EvaluacionSolicitudService"],
            _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_17__["RecepcionSolicitudEvaluacionService"],
            _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_19__["SolicitudEvaluacionCornealService"],
            _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_21__["CausaMuerteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], EstudioLaboratorioCrudComponent);
    return EstudioLaboratorioCrudComponent;
}());



/***/ }),

/***/ "./src/app/estudio-laboratorios/estudio-laboratorio-list-kendo/estudio-laboratorio-list-kendo.component.css":
/*!******************************************************************************************************************!*\
  !*** ./src/app/estudio-laboratorios/estudio-laboratorio-list-kendo/estudio-laboratorio-list-kendo.component.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Tipos para estudioLaboratorio-list-kendo*/\nh3 { text-transform: uppercase;} \n"

/***/ }),

/***/ "./src/app/estudio-laboratorios/estudio-laboratorio-list-kendo/estudio-laboratorio-list-kendo.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/estudio-laboratorios/estudio-laboratorio-list-kendo/estudio-laboratorio-list-kendo.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!usuariologueado\" >\n    <div class=\"card\">\n        <div align=\"center\" class=\"card-header\"><h3>{{configuracionEstudioLaboratorio.titulo}}</h3></div>\n        <div class=\"card-body\">\n            <div id=\"div_estudioLaboratorio_{{nombregrid}}\">\n                <div id=\"grid_estudioLaboratorio_{{nombregrid}}\"></div>\n            </div>\n        </div>\t\t\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/estudio-laboratorios/estudio-laboratorio-list-kendo/estudio-laboratorio-list-kendo.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/estudio-laboratorios/estudio-laboratorio-list-kendo/estudio-laboratorio-list-kendo.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: EstudioLaboratorioListKendoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstudioLaboratorioListKendoComponent", function() { return EstudioLaboratorioListKendoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/estudio-laboratorio */ "./src/app/estudio-laboratorios/shared/estudio-laboratorio.ts");
/* harmony import */ var _shared_configurar_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/configurar-estudio-laboratorio */ "./src/app/estudio-laboratorios/shared/configurar-estudio-laboratorio.ts");
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
var EstudioLaboratorioListKendoComponent = /** @class */ (function () {
    function EstudioLaboratorioListKendoComponent(urlprovider, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    globalesService) {
        this.urlprovider = urlprovider;
        this.coreService = coreService;
        this.globalesService = globalesService;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "", "permiso": 0, "etiqueta": "" };
        this.estudioLaboratorioSeleccionado = new _shared_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_3__["EstudioLaboratorio"]();
        this.configuracionEstudioLaboratorio = new _shared_configurar_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_4__["ConfigurarEstudioLaboratorio"]();
        this.nombregrid = "";
        this.evtEstudioLaboratorioSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "estudioLaboratorio";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'estudioLaboratorio'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'estudioLaboratorio'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }
    EstudioLaboratorioListKendoComponent.prototype.actualizaTituloInicial = function () {
        if (this.configuracionEstudioLaboratorio.titulo.indexOf("Catálogo") != -1) {
            this.configuracionEstudioLaboratorio.titulo = "Catálogo " + this.permisosTabla.etiqueta;
        }
    };
    EstudioLaboratorioListKendoComponent.prototype.ngOnChanges = function (changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionEstudioLaboratorio && changes.configuracionEstudioLaboratorio.currentValue &&
            (changes.configuracionEstudioLaboratorio.previousValue instanceof _shared_configurar_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_4__["ConfigurarEstudioLaboratorio"])) {
            if (changes.configuracionEstudioLaboratorio.currentValue.permisosAtributos)
                this.permisosAtributos = changes.configuracionEstudioLaboratorio.currentValue.permisosAtributos;
            if (changes.configuracionEstudioLaboratorio.currentValue.permisosTabla)
                this.permisosTabla = changes.configuracionEstudioLaboratorio.currentValue.permisosTabla;
            if ($("#grid_estudioLaboratorio_" + this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    };
    EstudioLaboratorioListKendoComponent.prototype.ngOnInit = function () {
        self["grid_estudioLaboratorio_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var ejecutarpermisos = true;
        if (this.configuracionEstudioLaboratorio.permisosAtributos &&
            this.configuracionEstudioLaboratorio.permisosTabla)
            ejecutarpermisos = false;
        if (this.usuariologueado && ejecutarpermisos) {
            if (this.usuariologueado.perfil) {
                var tablas = [
                    "estudioLaboratorio",
                ];
                var parametros = {
                    "id_usu": this.usuariologueado.id,
                    "tablas": tablas,
                    "id_exp": -1
                };
                this.coreService.permisos(parametros, this.evtCorePermisos, this);
                //                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                //                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'EstudioLaboratorio'";
                //                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'EstudioLaboratorio'";
                //                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'EstudioLaboratorio'";
                //                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
                //                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
                //                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
            }
        }
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        if (this.configuracionEstudioLaboratorio.permisosAtributos)
            this.permisosAtributos = this.configuracionEstudioLaboratorio.permisosAtributos;
        if (this.configuracionEstudioLaboratorio.permisosTabla)
            this.permisosTabla = this.configuracionEstudioLaboratorio.permisosTabla;
        this.configuraGrid();
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    EstudioLaboratorioListKendoComponent.prototype.evtCorePermisos = function (permisos, obj) {
        if (permisos && permisos.estudioLaboratorio && permisos.estudioLaboratorio.PermisoAtributo && permisos.estudioLaboratorio.PermisoAtributo.length > 0
            && !obj.configuracionEstudioLaboratorio.permisosAtributos) {
            obj.globalesService.evtAtributos(permisos.estudioLaboratorio.PermisoAtributo, obj);
            //            obj.permisosAtributos = permisos.EstudioLaboratorio.PermisoAtributo ;
        }
        if (permisos && permisos.estudioLaboratorio && permisos.estudioLaboratorio.PermisoTabla && permisos.estudioLaboratorio.PermisoTabla.length > 0
            && !obj.configuracionEstudioLaboratorio.permisosTabla) {
            obj.globalesService.evtTablas(permisos.estudioLaboratorio.PermisoTabla, obj);
            //            obj.permisosTabla = permisos.EstudioLaboratorio.PermisoTabla[0] ;
            //            obj.permisosaccionesInicio();
        }
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    EstudioLaboratorioListKendoComponent.prototype.configuraGrid = function () {
        var _this = this;
        if ($("#grid_estudioLaboratorio_" + this.nombregrid).data("kendoGrid")) {
        }
        else {
            setTimeout(function () {
                _this.inicializaGrid();
                _this.configuraGrid();
            }, 300);
        }
    };
    EstudioLaboratorioListKendoComponent.prototype.sourcegrid = function () {
        function completar(e) {
            (e);
        }
        ;
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        if (this.configuracionEstudioLaboratorio.campoAgEl != null
            && this.configuracionEstudioLaboratorio.estudioLaboratorioConsulta
            && this.configuracionEstudioLaboratorio.estudioLaboratorioConsulta.isOk
            && !this.configuracionEstudioLaboratorio.estudioLaboratorioConsulta.isOk())
            return;
        if (this.configuracionEstudioLaboratorio.estudioLaboratorioConsulta) {
            if (!this.configuracionEstudioLaboratorio.campoAgEl && this.configuracionEstudioLaboratorio.estudioLaboratorioConsulta instanceof _shared_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_3__["EstudioLaboratorio"])
                this.configuracionEstudioLaboratorio.rutaLista = this.crudServiceBaseUrl + "/getEstudioLaboratoriosByDto";
            this.lista = this.configuracionEstudioLaboratorio.lecturaP(completar, this.configuracionEstudioLaboratorio.estudioLaboratorioConsulta);
            if (this.configuracionEstudioLaboratorio.campoAgEl) {
                this.rutaAgregar = this.configuracionEstudioLaboratorio.agregarP(function () { }, this.configuracionEstudioLaboratorio.campoAgEl);
                this.rutaEliminar = this.configuracionEstudioLaboratorio.eliminarP(function () { }, this.configuracionEstudioLaboratorio.campoAgEl);
            }
            else {
                this.rutaAgregar = this.configuracionEstudioLaboratorio.agregarP(completar, this.configuracionEstudioLaboratorio.estudioLaboratorioConsulta);
                this.rutaEliminar = this.configuracionEstudioLaboratorio.eliminarP(completar, this.configuracionEstudioLaboratorio.estudioLaboratorioConsulta);
            }
        }
        else {
            this.lista = this.configuracionEstudioLaboratorio.lectura();
            this.rutaAgregar = this.configuracionEstudioLaboratorio.agregar();
            this.rutaEliminar = this.configuracionEstudioLaboratorio.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this, "estudioLaboratorio", "id")) {
            modelo["id"] = "id";
        }
        var campos = {};
        if (this.globalesService.avisible(this, "estudioLaboratorio", "id")) {
            campos["id"] = { editable: false, nullable: true, type: "number" };
        }
        if (this.globalesService.avisible(this, "estudioLaboratorio", "idevaluacionSolicitud")) {
            campos["idevaluacionSolicitud"] = { editable: this.globalesService.aenable(this, "estudioLaboratorio", "idevaluacionSolicitud"), nullable: true, type: "object", defaultValue: { "id": "", "status": "" } };
        }
        if (this.globalesService.avisible(this, "estudioLaboratorio", "tipoCornea")) {
            campos["tipoCornea"] = { editable: this.globalesService.aenable(this, "estudioLaboratorio", "tipoCornea"), nullable: true };
        }
        if (this.globalesService.avisible(this, "estudioLaboratorio", "cicatriceLeucoma")) {
            campos["cicatriceLeucoma"] = { editable: this.globalesService.aenable(this, "estudioLaboratorio", "cicatriceLeucoma"), nullable: true };
        }
        if (this.globalesService.avisible(this, "estudioLaboratorio", "brilloCorneal")) {
            campos["brilloCorneal"] = { editable: this.globalesService.aenable(this, "estudioLaboratorio", "brilloCorneal"), nullable: true };
        }
        if (this.globalesService.avisible(this, "estudioLaboratorio", "cuerpoExtrano")) {
            campos["cuerpoExtrano"] = { editable: this.globalesService.aenable(this, "estudioLaboratorio", "cuerpoExtrano"), nullable: true };
        }
        if (this.globalesService.avisible(this, "estudioLaboratorio", "erocioneUlcera")) {
            campos["erocioneUlcera"] = { editable: this.globalesService.aenable(this, "estudioLaboratorio", "erocioneUlcera"), nullable: true };
        }
        if (this.globalesService.avisible(this, "estudioLaboratorio", "valoracion")) {
            campos["valoracion"] = { editable: this.globalesService.aenable(this, "estudioLaboratorio", "valoracion"), nullable: true };
        }
        if (this.globalesService.avisible(this, "estudioLaboratorio", "observacion")) {
            campos["observacion"] = { editable: this.globalesService.aenable(this, "estudioLaboratorio", "observacion"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "estudioLaboratorio", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this, "estudioLaboratorio", "fechaRegistro"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "estudioLaboratorio", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this, "estudioLaboratorio", "fechaActualizacion"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "estudioLaboratorio", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this, "estudioLaboratorio", "fechaBaja"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "estudioLaboratorio", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this, "estudioLaboratorio", "usuarioUltMov"), nullable: true, type: "object", defaultValue: { "id": "", "password": "" } };
        }
        if (this.globalesService.avisible(this, "estudioLaboratorio", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this, "estudioLaboratorio", "status"), nullable: true, type: "string", defaultValue: "1" };
        }
        modelo["fields"] = campos;
        var slf = this;
        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionEstudioLaboratorio.rutaActualizar,
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
            if (self.configuracionEstudioLaboratorio.campoAgEl) {
                if (self.configuracionEstudioLaboratorio.tipocampoAgEl == "EstudioLaboratorioEstudioLaboratorio")
                    self.configuracionEstudioLaboratorio.campoAgEl.estudioLaboratorio2 = options.models[0];
                else
                    self.configuracionEstudioLaboratorio.campoAgEl.estudioLaboratorio = options.models[0];
                return JSON.stringify(self.configuracionEstudioLaboratorio.campoAgEl);
            }
            else if (est.options[operation].data.models.estudioLaboratorio) {
                est.options[operation].data.models.estudioLaboratorio2 = options.models[0];
                return JSON.stringify(est.options[operation].data.models);
            }
            return JSON.stringify(options.models[0]);
        }
    };
    EstudioLaboratorioListKendoComponent.prototype.inicializaGrid = function () {
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        this.sourcegrid();
        var columnas = [];
        if (this.globalesService.avisible(this, "estudioLaboratorio", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this, "estudioLaboratorio", "id"), editor: this.globalesService.txtNumero });
        }
        if (this.globalesService.avisible(this, "estudioLaboratorio", "idevaluacionSolicitud")) {
            columnas.push({ field: "idevaluacionSolicitud", title: this.globalesService.aetiqueta(this, "estudioLaboratorio", "idevaluacionSolicitud"), editor: idevaluacionSolicitudDropDownEditor, template: " #if (idevaluacionSolicitud){#   #=idevaluacionSolicitud.status# # } # " });
        }
        if (this.globalesService.avisible(this, "estudioLaboratorio", "tipoCornea")) {
            columnas.push({ field: "tipoCornea", title: this.globalesService.aetiqueta(this, "estudioLaboratorio", "tipoCornea") });
        }
        if (this.globalesService.avisible(this, "estudioLaboratorio", "cicatriceLeucoma")) {
            columnas.push({ field: "cicatriceLeucoma", title: this.globalesService.aetiqueta(this, "estudioLaboratorio", "cicatriceLeucoma") });
        }
        if (this.globalesService.avisible(this, "estudioLaboratorio", "brilloCorneal")) {
            columnas.push({ field: "brilloCorneal", title: this.globalesService.aetiqueta(this, "estudioLaboratorio", "brilloCorneal") });
        }
        if (this.globalesService.avisible(this, "estudioLaboratorio", "cuerpoExtrano")) {
            columnas.push({ field: "cuerpoExtrano", title: this.globalesService.aetiqueta(this, "estudioLaboratorio", "cuerpoExtrano") });
        }
        if (this.globalesService.avisible(this, "estudioLaboratorio", "erocioneUlcera")) {
            columnas.push({ field: "erocioneUlcera", title: this.globalesService.aetiqueta(this, "estudioLaboratorio", "erocioneUlcera") });
        }
        if (this.globalesService.avisible(this, "estudioLaboratorio", "valoracion")) {
            columnas.push({ field: "valoracion", title: this.globalesService.aetiqueta(this, "estudioLaboratorio", "valoracion") });
        }
        if (this.globalesService.avisible(this, "estudioLaboratorio", "observacion")) {
            columnas.push({ field: "observacion", title: this.globalesService.aetiqueta(this, "estudioLaboratorio", "observacion"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "estudioLaboratorio", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this, "estudioLaboratorio", "fechaRegistro"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "estudioLaboratorio", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this, "estudioLaboratorio", "fechaActualizacion"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "estudioLaboratorio", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this, "estudioLaboratorio", "fechaBaja"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "estudioLaboratorio", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this, "estudioLaboratorio", "usuarioUltMov"), editor: usuarioUltMovDropDownEditor, template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # " });
        }
        if (this.globalesService.avisible(this, "estudioLaboratorio", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this, "estudioLaboratorio", "status"), editor: this.globalesService.estadoDropDownEditor,
                template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this, "estudioLaboratorio"))
            op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this, "estudioLaboratorio")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this, "estudioLaboratorio")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this, "estudioLaboratorio") && this.configuracionEstudioLaboratorio.estudioLaboratorioConsulta != null) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid)
            $("#grid_estudioLaboratorio_" + this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_estudioLaboratorio_" + this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionEstudioLaboratorio.altoComponente,
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
        this.grid = $("#grid_estudioLaboratorio_" + this.nombregrid).data("kendoGrid");
        this.grid.refresh();
        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutaidevaluacionSolicitud = this.urlprovider.serverURL + "evaluacionSolicitud/getEvaluacionSolicitudesActivos";
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
        function idevaluacionSolicitudDropDownEditor(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                autoBind: false,
                dataTextField: "status",
                dataValueField: "id",
                filter: "contains",
                minLength: 5, dataSource: {
                    transport: {
                        read: {
                            url: rutaidevaluacionSolicitud,
                            contentType: "application/json",
                            type: "POST",
                        }
                    }
                }
            });
        }
    };
    EstudioLaboratorioListKendoComponent.prototype.showDetails = function (e) {
        e.preventDefault();
        //        this.grid = $("#grid_estudioLaboratorio_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        var gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.estudioLaboratorioSeleccionado = new _shared_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_3__["EstudioLaboratorio"]();
        gridac.estudioLaboratorioSeleccionado.from(dataItem);
        gridac.evtEstudioLaboratorioSeleccionado.emit(gridac.estudioLaboratorioSeleccionado);
        (gridac.estudioLaboratorioSeleccionado);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_configurar_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_4__["ConfigurarEstudioLaboratorio"])
    ], EstudioLaboratorioListKendoComponent.prototype, "configuracionEstudioLaboratorio", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EstudioLaboratorioListKendoComponent.prototype, "nombregrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("estudioLaboratorioSeleccionado"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EstudioLaboratorioListKendoComponent.prototype, "evtEstudioLaboratorioSeleccionado", void 0);
    EstudioLaboratorioListKendoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-estudio-laboratorio-list-kendo',
            template: __webpack_require__(/*! ./estudio-laboratorio-list-kendo.component.html */ "./src/app/estudio-laboratorios/estudio-laboratorio-list-kendo/estudio-laboratorio-list-kendo.component.html"),
            styles: [__webpack_require__(/*! ./estudio-laboratorio-list-kendo.component.css */ "./src/app/estudio-laboratorios/estudio-laboratorio-list-kendo/estudio-laboratorio-list-kendo.component.css")],
            providers: [
                //             PermisoTablaService,
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_url_provider__WEBPACK_IMPORTED_MODULE_1__["URLProvider"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"]])
    ], EstudioLaboratorioListKendoComponent);
    return EstudioLaboratorioListKendoComponent;
}());



/***/ }),

/***/ "./src/app/estudio-laboratorios/estudio-laboratorio-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/estudio-laboratorios/estudio-laboratorio-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: EstudioLaboratorioRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstudioLaboratorioRoutingModule", function() { return EstudioLaboratorioRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _estudio_laboratorios_estudio_laboratorio_list_kendo_estudio_laboratorio_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../estudio-laboratorios/estudio-laboratorio-list-kendo/estudio-laboratorio-list-kendo.component */ "./src/app/estudio-laboratorios/estudio-laboratorio-list-kendo/estudio-laboratorio-list-kendo.component.ts");
/* harmony import */ var _estudio_laboratorios_estudio_laboratorio_crud_estudio_laboratorio_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../estudio-laboratorios/estudio-laboratorio-crud/estudio-laboratorio-crud.component */ "./src/app/estudio-laboratorios/estudio-laboratorio-crud/estudio-laboratorio-crud.component.ts");
/* harmony import */ var _estudio_laboratorios_estudio_laboratorio_table_estudio_laboratorio_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../estudio-laboratorios/estudio-laboratorio-table/estudio-laboratorio-table.component */ "./src/app/estudio-laboratorios/estudio-laboratorio-table/estudio-laboratorio-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'estudio-laboratorio-list-kendo', component: _estudio_laboratorios_estudio_laboratorio_list_kendo_estudio_laboratorio_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__["EstudioLaboratorioListKendoComponent"] },
    { path: 'estudio-laboratorio-crud/:id', component: _estudio_laboratorios_estudio_laboratorio_crud_estudio_laboratorio_crud_component__WEBPACK_IMPORTED_MODULE_3__["EstudioLaboratorioCrudComponent"] },
    { path: 'estudio-laboratorio-table', component: _estudio_laboratorios_estudio_laboratorio_table_estudio_laboratorio_table_component__WEBPACK_IMPORTED_MODULE_4__["EstudioLaboratorioTableComponent"] },
];
var EstudioLaboratorioRoutingModule = /** @class */ (function () {
    function EstudioLaboratorioRoutingModule() {
    }
    EstudioLaboratorioRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EstudioLaboratorioRoutingModule);
    return EstudioLaboratorioRoutingModule;
}());



/***/ }),

/***/ "./src/app/estudio-laboratorios/estudio-laboratorio-table/estudio-laboratorio-table.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/estudio-laboratorios/estudio-laboratorio-table/estudio-laboratorio-table.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/estudio-laboratorios/estudio-laboratorio-table/estudio-laboratorio-table.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/estudio-laboratorios/estudio-laboratorio-table/estudio-laboratorio-table.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"usuariologueado\" >\n<div class=\"card\">\n<div class=\"card-header\"><h1>Busqueda {{permisosTabla?.etiqueta}}</h1></div>\n<div class=\"card-body\">\n<div class=\"container-fluid\" >    \n\n<table *ngIf=\"muestraTabla\" id=\"tabla_estudioLaboratorio\" class=\"table \" cellspacing=\"0\" width=\"100%\">\n    <thead>\n        <tr>\n            <th [class.hidden]=\"!avisible('estudioLaboratorio','id')\" >{{aetiqueta('estudioLaboratorio','id')}}</th>\n            <th [class.hidden]=\"!avisible('estudioLaboratorio','idevaluacionSolicitud')\" >{{aetiqueta('estudioLaboratorio','idevaluacionSolicitud')}}</th>\n            <th [class.hidden]=\"!avisible('estudioLaboratorio','tipoCornea')\" >{{aetiqueta('estudioLaboratorio','tipoCornea')}}</th>\n            <th [class.hidden]=\"!avisible('estudioLaboratorio','cicatriceLeucoma')\" >{{aetiqueta('estudioLaboratorio','cicatriceLeucoma')}}</th>\n            <th [class.hidden]=\"!avisible('estudioLaboratorio','brilloCorneal')\" >{{aetiqueta('estudioLaboratorio','brilloCorneal')}}</th>\n            <th [class.hidden]=\"!avisible('estudioLaboratorio','cuerpoExtrano')\" >{{aetiqueta('estudioLaboratorio','cuerpoExtrano')}}</th>\n            <th [class.hidden]=\"!avisible('estudioLaboratorio','erocioneUlcera')\" >{{aetiqueta('estudioLaboratorio','erocioneUlcera')}}</th>\n            <th [class.hidden]=\"!avisible('estudioLaboratorio','valoracion')\" >{{aetiqueta('estudioLaboratorio','valoracion')}}</th>\n            <th [class.hidden]=\"!avisible('estudioLaboratorio','observacion')\" >{{aetiqueta('estudioLaboratorio','observacion')}}</th>\n            <th [class.hidden]=\"!avisible('estudioLaboratorio','fechaRegistro')\" >{{aetiqueta('estudioLaboratorio','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('estudioLaboratorio','fechaActualizacion')\" >{{aetiqueta('estudioLaboratorio','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('estudioLaboratorio','fechaBaja')\" >{{aetiqueta('estudioLaboratorio','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('estudioLaboratorio','usuarioUltMov')\" >{{aetiqueta('estudioLaboratorio','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('estudioLaboratorio','status')\" >{{aetiqueta('estudioLaboratorio','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </thead>\n    <tfoot>\n        <tr>\n            <th [class.hidden]=\"!avisible('estudioLaboratorio','id')\" >{{aetiqueta('estudioLaboratorio','id')}}</th>\n            <th [class.hidden]=\"!avisible('estudioLaboratorio','idevaluacionSolicitud')\" >{{aetiqueta('estudioLaboratorio','idevaluacionSolicitud')}}</th>\n            <th [class.hidden]=\"!avisible('estudioLaboratorio','tipoCornea')\" >{{aetiqueta('estudioLaboratorio','tipoCornea')}}</th>\n            <th [class.hidden]=\"!avisible('estudioLaboratorio','cicatriceLeucoma')\" >{{aetiqueta('estudioLaboratorio','cicatriceLeucoma')}}</th>\n            <th [class.hidden]=\"!avisible('estudioLaboratorio','brilloCorneal')\" >{{aetiqueta('estudioLaboratorio','brilloCorneal')}}</th>\n            <th [class.hidden]=\"!avisible('estudioLaboratorio','cuerpoExtrano')\" >{{aetiqueta('estudioLaboratorio','cuerpoExtrano')}}</th>\n            <th [class.hidden]=\"!avisible('estudioLaboratorio','erocioneUlcera')\" >{{aetiqueta('estudioLaboratorio','erocioneUlcera')}}</th>\n            <th [class.hidden]=\"!avisible('estudioLaboratorio','valoracion')\" >{{aetiqueta('estudioLaboratorio','valoracion')}}</th>\n            <th [class.hidden]=\"!avisible('estudioLaboratorio','observacion')\" >{{aetiqueta('estudioLaboratorio','observacion')}}</th>\n            <th [class.hidden]=\"!avisible('estudioLaboratorio','fechaRegistro')\" >{{aetiqueta('estudioLaboratorio','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('estudioLaboratorio','fechaActualizacion')\" >{{aetiqueta('estudioLaboratorio','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('estudioLaboratorio','fechaBaja')\" >{{aetiqueta('estudioLaboratorio','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('estudioLaboratorio','usuarioUltMov')\" >{{aetiqueta('estudioLaboratorio','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('estudioLaboratorio','status')\" >{{aetiqueta('estudioLaboratorio','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </tfoot>\n</table>\n</div>\n<app-estudio-laboratorio [class.hidden]=\"primero\" [(estudioLaboratorio)]=\"estudioLaboratorioSeleccionado\" (estudioLaboratorioTablaChange)=\"cambio_estudioLaboratorio($event)\"> </app-estudio-laboratorio>    \n</div>\n</div>\n</div>\n\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/estudio-laboratorios/estudio-laboratorio-table/estudio-laboratorio-table.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/estudio-laboratorios/estudio-laboratorio-table/estudio-laboratorio-table.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: EstudioLaboratorioTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstudioLaboratorioTableComponent", function() { return EstudioLaboratorioTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/estudio-laboratorio */ "./src/app/estudio-laboratorios/shared/estudio-laboratorio.ts");
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






var EstudioLaboratorioTableComponent = /** @class */ (function () {
    function EstudioLaboratorioTableComponent(globalesService, permisoAtributoService, permisoTablaService, urlProvider) {
        this.globalesService = globalesService;
        this.permisoAtributoService = permisoAtributoService;
        this.permisoTablaService = permisoTablaService;
        this.urlProvider = urlProvider;
        this.primero = true;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "estudioLaboratorio", "permiso": 0, "etiqueta": "" };
        this.ptabla = false;
        this.pattr = false;
        this.estudioLaboratorioSeleccionado = new _shared_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_1__["EstudioLaboratorio"]();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                discon = "with perfil.id = " + this.usuariologueado.perfil.id;
                var cadena2 = "select pa from PermisoTabla as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'estudioLaboratorio'";
                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
            }
        }
    }
    EstudioLaboratorioTableComponent.prototype.evtTablas = function (lista, obj) {
        if (lista.length >= 0) {
            obj.permisosTabla = lista[0];
            obj.ptabla = true;
            var discon = "with perfil.id = " + obj.usuariologueado.perfil.id;
            var cadena1 = "select pa from PermisoAtributo as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'estudioLaboratorio'";
            obj.permisoAtributoService.custom(cadena1, obj.evtAtributos, obj);
        }
    };
    EstudioLaboratorioTableComponent.prototype.evtAtributos = function (lista, obj) {
        obj.permisosAtributos = lista;
        obj.pattr = true;
        if (obj.ptabla && obj.pattr) {
            setTimeout(function () { obj.getColumnas(obj); }, 500);
        }
    };
    Object.defineProperty(EstudioLaboratorioTableComponent.prototype, "muestraTabla", {
        get: function () {
            return this.ptabla && this.pattr;
        },
        enumerable: true,
        configurable: true
    });
    EstudioLaboratorioTableComponent.prototype.getColumnas = function (obj) {
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        if (!this.avisible("estudioLaboratorio", "id"))
            columnasNoVisibles.push(0);
        columnas.push({ "data": "id" });
        if (!this.avisible("estudioLaboratorio", "idevaluacionSolicitud"))
            columnasNoVisibles.push(1);
        columnas.push({
            "data": function (oObj) {
                if (oObj.idevaluacionSolicitud)
                    return "<span style=\"cursor: pointer\">" + oObj.idevaluacionSolicitud.status + "</span>";
                return "";
            }
        });
        if (!this.avisible("estudioLaboratorio", "tipoCornea"))
            columnasNoVisibles.push(2);
        columnas.push({ "data": "tipoCornea" });
        if (!this.avisible("estudioLaboratorio", "cicatriceLeucoma"))
            columnasNoVisibles.push(3);
        columnas.push({ "data": "cicatriceLeucoma" });
        if (!this.avisible("estudioLaboratorio", "brilloCorneal"))
            columnasNoVisibles.push(4);
        columnas.push({ "data": "brilloCorneal" });
        if (!this.avisible("estudioLaboratorio", "cuerpoExtrano"))
            columnasNoVisibles.push(5);
        columnas.push({ "data": "cuerpoExtrano" });
        if (!this.avisible("estudioLaboratorio", "erocioneUlcera"))
            columnasNoVisibles.push(6);
        columnas.push({ "data": "erocioneUlcera" });
        if (!this.avisible("estudioLaboratorio", "valoracion"))
            columnasNoVisibles.push(7);
        columnas.push({ "data": "valoracion" });
        if (!this.avisible("estudioLaboratorio", "observacion"))
            columnasNoVisibles.push(8);
        columnas.push({ "data": "observacion" });
        if (!this.avisible("estudioLaboratorio", "fechaRegistro"))
            columnasNoVisibles.push(9);
        columnas.push({ "data": "fechaRegistro" });
        if (!this.avisible("estudioLaboratorio", "fechaActualizacion"))
            columnasNoVisibles.push(10);
        columnas.push({ "data": "fechaActualizacion" });
        if (!this.avisible("estudioLaboratorio", "fechaBaja"))
            columnasNoVisibles.push(11);
        columnas.push({ "data": "fechaBaja" });
        if (!this.avisible("estudioLaboratorio", "usuarioUltMov"))
            columnasNoVisibles.push(12);
        columnas.push({
            "data": function (oObj) {
                if (oObj.usuarioUltMov)
                    return "<span style=\"cursor: pointer\">" + oObj.usuarioUltMov.username + "</span>";
                return "";
            }
        });
        if (!this.avisible("estudioLaboratorio", "status"))
            columnasNoVisibles.push(13);
        columnas.push({ "data": "status" });
        if (self.pacutalizar("estudioLaboratorio"))
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
        var tabla = $('#tabla_estudioLaboratorio').DataTable({
            "columnDefs": novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            "initComplete": function (settings, json) {
                var xs = $("#tabla_estudioLaboratorio_wrapper").find(".row");
                $($(xs[0]).find(".col-sm-6")[0]).
                    find(".dataTables_length").
                    append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function () {
                    self.estudioLaboratorioSeleccionado = new _shared_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_1__["EstudioLaboratorio"]();
                    self.primero = false;
                });
            },
            "ajax": {
                "url": self.urlProvider.serverURL + "estudioLaboratorio/getEstudioLaboratorios",
                "type": "POST",
                "contentType": "application/json",
                "datatype": 'json',
                "dataSrc": "",
            },
            "columns": columnas,
        });
        $('#tabla_estudioLaboratorio tbody').on('click', 'td', function () {
            if (this.cellIndex == $(this).parent().find("td").length - 1) {
                var data = $('#tabla_estudioLaboratorio').DataTable().row(this).data();
                self.estudioLaboratorioSeleccionado = new _shared_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_1__["EstudioLaboratorio"]();
                self.estudioLaboratorioSeleccionado.from(data);
                self.primero = false;
                if ($(this).parent().hasClass('selected')) {
                    $(this).parent().removeClass('selected');
                }
                else {
                    $('#tabla_estudioLaboratorio').DataTable().$('tr.selected').removeClass('selected');
                    $(this).parent().addClass('selected');
                }
            }
        });
    };
    EstudioLaboratorioTableComponent.prototype.ngOnInit = function () {
    };
    EstudioLaboratorioTableComponent.prototype.cambio_estudioLaboratorio = function (estudioLaboratorio) {
        $('#tabla_estudioLaboratorio').DataTable().ajax.reload(null, false);
        this.primero = true;
    };
    // **********************************************************************************
    // **********************************************************************************
    // **           I N I C I A N   P E R M I S O S   P A R A   P E R F I L E S  
    // **********************************************************************************
    // **********************************************************************************
    EstudioLaboratorioTableComponent.prototype.paux = function (tabla, permiso) {
        if (this.permisosTabla.tabla == tabla && (this.permisosTabla.permiso & permiso) == permiso)
            return true;
        return false;
    };
    EstudioLaboratorioTableComponent.prototype.preporteWord = function (tabla) { return this.paux(tabla, 64); };
    EstudioLaboratorioTableComponent.prototype.preporteExcel = function (tabla) { return this.paux(tabla, 32); };
    EstudioLaboratorioTableComponent.prototype.preportePdf = function (tabla) { return this.paux(tabla, 16); };
    EstudioLaboratorioTableComponent.prototype.pbuscar = function (tabla) { return this.paux(tabla, 8); };
    EstudioLaboratorioTableComponent.prototype.pacutalizar = function (tabla) { return this.paux(tabla, 4); };
    EstudioLaboratorioTableComponent.prototype.peliminar = function (tabla) { return this.paux(tabla, 2); };
    EstudioLaboratorioTableComponent.prototype.pagregar = function (tabla) { return this.paux(tabla, 1); };
    //******************************************************************************************
    //*******  P E R M I S O S   S O B R E   A T R I B U T O S  ********************************
    //******************************************************************************************
    EstudioLaboratorioTableComponent.prototype.aetiqueta = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo)
                return elemento.etiqueta;
        }
        return "";
    };
    EstudioLaboratorioTableComponent.prototype.avalidacion = function (tabla, atributo) {
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
    EstudioLaboratorioTableComponent.prototype.amensaje = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo) {
                return elemento.mensaje;
            }
        }
        return null;
    };
    EstudioLaboratorioTableComponent.prototype.aeditable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 8) == 8)
                return true;
        }
        return false;
    };
    EstudioLaboratorioTableComponent.prototype.arequerido = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 4) == 4)
                return true;
        }
        return false;
    };
    EstudioLaboratorioTableComponent.prototype.avisible = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 2) == 2)
                return true;
        }
        return false;
    };
    EstudioLaboratorioTableComponent.prototype.aenable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 1) == 1)
                return true;
        }
        return false;
    };
    EstudioLaboratorioTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-estudio-laboratorio-table',
            template: __webpack_require__(/*! ./estudio-laboratorio-table.component.html */ "./src/app/estudio-laboratorios/estudio-laboratorio-table/estudio-laboratorio-table.component.html"),
            styles: [__webpack_require__(/*! ./estudio-laboratorio-table.component.css */ "./src/app/estudio-laboratorios/estudio-laboratorio-table/estudio-laboratorio-table.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
                _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
                _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
            _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
            _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            _shared_url_provider__WEBPACK_IMPORTED_MODULE_3__["URLProvider"]])
    ], EstudioLaboratorioTableComponent);
    return EstudioLaboratorioTableComponent;
}());



/***/ }),

/***/ "./src/app/estudio-laboratorios/estudio-laboratorio.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/estudio-laboratorios/estudio-laboratorio.module.ts ***!
  \********************************************************************/
/*! exports provided: EstudioLaboratorioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstudioLaboratorioModule", function() { return EstudioLaboratorioModule; });
/* harmony import */ var _recepcion_solicitud_evaluaciones_recepcion_solicitud_evaluacion_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion.module */ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _estudio_laboratorio_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./estudio-laboratorio-routing.module */ "./src/app/estudio-laboratorios/estudio-laboratorio-routing.module.ts");
/* harmony import */ var _estudio_laboratorio_list_kendo_estudio_laboratorio_list_kendo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./estudio-laboratorio-list-kendo/estudio-laboratorio-list-kendo.component */ "./src/app/estudio-laboratorios/estudio-laboratorio-list-kendo/estudio-laboratorio-list-kendo.component.ts");
/* harmony import */ var _estudio_laboratorio_crud_estudio_laboratorio_crud_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./estudio-laboratorio-crud/estudio-laboratorio-crud.component */ "./src/app/estudio-laboratorios/estudio-laboratorio-crud/estudio-laboratorio-crud.component.ts");
/* harmony import */ var _estudio_laboratorio_conjunto_estudio_laboratorio_conjunto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./estudio-laboratorio-conjunto/estudio-laboratorio-conjunto.component */ "./src/app/estudio-laboratorios/estudio-laboratorio-conjunto/estudio-laboratorio-conjunto.component.ts");
/* harmony import */ var _estudio_laboratorio_estudio_laboratorio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./estudio-laboratorio/estudio-laboratorio.component */ "./src/app/estudio-laboratorios/estudio-laboratorio/estudio-laboratorio.component.ts");
/* harmony import */ var _estudio_laboratorio_table_estudio_laboratorio_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./estudio-laboratorio-table/estudio-laboratorio-table.component */ "./src/app/estudio-laboratorios/estudio-laboratorio-table/estudio-laboratorio-table.component.ts");
/* harmony import */ var _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/usuario-perfil.module */ "./src/app/shared/usuario-perfil.module.ts");
/* harmony import */ var _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/componentes-personalizados/personalizados.module */ "./src/app/core/componentes-personalizados/personalizados.module.ts");
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












var EstudioLaboratorioModule = /** @class */ (function () {
    function EstudioLaboratorioModule(parentModule) {
        if (parentModule) {
            throw new Error('EstudioLaboratorioModule is already loaded. Import it in the AppModule only');
        }
    }
    EstudioLaboratorioModule_1 = EstudioLaboratorioModule;
    EstudioLaboratorioModule.forRoot = function () {
        return {
            ngModule: EstudioLaboratorioModule_1,
            providers: []
        };
    };
    var EstudioLaboratorioModule_1;
    EstudioLaboratorioModule = EstudioLaboratorioModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_11__["PersonalizadosModule"], _estudio_laboratorio_routing_module__WEBPACK_IMPORTED_MODULE_4__["EstudioLaboratorioRoutingModule"],
                _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_10__["UsuarioPerfilModule"].forRoot()
                // , EvaluacionSolicitudModule
                ,
                _recepcion_solicitud_evaluaciones_recepcion_solicitud_evaluacion_module__WEBPACK_IMPORTED_MODULE_0__["RecepcionSolicitudEvaluacionModule"]
            ],
            declarations: [
                _estudio_laboratorio_list_kendo_estudio_laboratorio_list_kendo_component__WEBPACK_IMPORTED_MODULE_5__["EstudioLaboratorioListKendoComponent"],
                _estudio_laboratorio_estudio_laboratorio_component__WEBPACK_IMPORTED_MODULE_8__["EstudioLaboratorioComponent"],
                _estudio_laboratorio_crud_estudio_laboratorio_crud_component__WEBPACK_IMPORTED_MODULE_6__["EstudioLaboratorioCrudComponent"],
                _estudio_laboratorio_conjunto_estudio_laboratorio_conjunto_component__WEBPACK_IMPORTED_MODULE_7__["EstudioLaboratorioConjuntoComponent"],
                _estudio_laboratorio_table_estudio_laboratorio_table_component__WEBPACK_IMPORTED_MODULE_9__["EstudioLaboratorioTableComponent"],
            ],
            exports: [
                _estudio_laboratorio_list_kendo_estudio_laboratorio_list_kendo_component__WEBPACK_IMPORTED_MODULE_5__["EstudioLaboratorioListKendoComponent"],
                _estudio_laboratorio_estudio_laboratorio_component__WEBPACK_IMPORTED_MODULE_8__["EstudioLaboratorioComponent"],
                _estudio_laboratorio_crud_estudio_laboratorio_crud_component__WEBPACK_IMPORTED_MODULE_6__["EstudioLaboratorioCrudComponent"],
                _estudio_laboratorio_conjunto_estudio_laboratorio_conjunto_component__WEBPACK_IMPORTED_MODULE_7__["EstudioLaboratorioConjuntoComponent"],
                _estudio_laboratorio_table_estudio_laboratorio_table_component__WEBPACK_IMPORTED_MODULE_9__["EstudioLaboratorioTableComponent"],
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        __metadata("design:paramtypes", [EstudioLaboratorioModule])
    ], EstudioLaboratorioModule);
    return EstudioLaboratorioModule;
}());



/***/ }),

/***/ "./src/app/estudio-laboratorios/estudio-laboratorio/estudio-laboratorio.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/estudio-laboratorios/estudio-laboratorio/estudio-laboratorio.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/estudio-laboratorios/estudio-laboratorio/estudio-laboratorio.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/estudio-laboratorios/estudio-laboratorio/estudio-laboratorio.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [hidden]=\"!usuariologueado\" #formaGeneral=\"ngForm\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <h4>{{ etiquetaGeneral }}</h4>\n        </div>\n        <div class=\"panel-body\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"control-label\">Presentación de Cicatrices o Leucomas:</label\n                  >\n                </div>\n              </div>\n              <label class=\"radio-inline\">\n                <input\n                [attr.disabled]=\"enable? null: false\"\n                  type=\"radio\"\n                  name=\"cicatriceLeucoma\"\n                  class=\"form-checkbox-input\"\n                  [value]=\"1\"\n                  [(ngModel)]=\"estudioLaboratorio.cicatriceLeucoma\"\n                />\n                SÍ\n              </label>\n                                    <label class=\"radio-inline\">\n                <input\n                [attr.disabled]=\"enable? null: false\"\n                  type=\"radio\"\n                  name=\"cicatriceLeucoma\"\n                  [value]=\"0\"\n                  class=\"form-checkbox-input\"\n                  [(ngModel)]=\"estudioLaboratorio.cicatriceLeucoma\"\n                />\n                NO\n              </label>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12\">\n                                            <label class=\"control-label\">Brillo Corneal:</label>\n                                        </div>\n                                    </div>\n                                    <label class=\"radio-inline\">\n                <input\n                [attr.disabled]=\"enable? null: false\"\n                  type=\"radio\"\n                  name=\"brilloCorneal\"\n                  class=\"form-checkbox-input\"\n                  [value]=\"1\"\n                  [(ngModel)]=\"estudioLaboratorio.brilloCorneal\"\n                />\n                BUENO\n              </label>\n                                    <label class=\"radio-inline\">\n                <input\n                [attr.disabled]=\"enable? null: false\"\n                  type=\"radio\"\n                  name=\"brilloCorneal\"\n                  [value]=\"0\"\n                  class=\"form-checkbox-input\"\n                  [(ngModel)]=\"estudioLaboratorio.brilloCorneal\"\n                />\n                OPACO\n              </label>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12\">\n                                            <label class=\"control-label\">Presencia de Cuerpos Extraños:</label\n                  >\n                </div>\n              </div>\n              <label class=\"radio-inline\">\n                <input\n                [attr.disabled]=\"enable? null: false\"\n                  type=\"radio\"\n                  name=\"cuerpoExtrano\"\n                  class=\"form-checkbox-input\"\n                  [value]=\"1\"\n                  [(ngModel)]=\"estudioLaboratorio.cuerpoExtrano\"\n                />\n                SÍ\n              </label>\n                                            <label class=\"radio-inline\">\n                <input\n                [attr.disabled]=\"enable? null: false\"\n                  type=\"radio\"\n                  name=\"cuerpoExtrano\"\n                  [value]=\"0\"\n                  class=\"form-checkbox-input\"\n                  [(ngModel)]=\"estudioLaboratorio.cuerpoExtrano\"\n                />\n                NO\n              </label>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12\">\n                                            <div class=\"row\">\n                                                <div class=\"col-md-12\">\n                                                    <label class=\"control-label\">Erosiones o Úlceras corneales (Herida Infectada):</label\n                  >\n                </div>\n              </div>\n              <label class=\"radio-inline\">\n                <input\n                [attr.disabled]=\"enable? null: false\"\n                  type=\"radio\"\n                  name=\"erocioneUlcera\"\n                  class=\"form-checkbox-input\"\n                  [value]=\"1\"\n                  [(ngModel)]=\"estudioLaboratorio.erocioneUlcera\"\n                />\n                SÍ\n              </label>\n                                                    <label class=\"radio-inline\">\n                <input\n                [attr.disabled]=\"enable? null: false\"\n                  type=\"radio\"\n                  name=\"erocioneUlcera\"\n                  [value]=\"0\"\n                  class=\"form-checkbox-input\"\n                  [(ngModel)]=\"estudioLaboratorio.erocioneUlcera\"\n                />\n                NO\n              </label>\n                                                </div>\n                                            </div>\n                                            <div class=\"row\">\n                                                <div class=\"col-md-12\">\n                                                    <div class=\"row\">\n                                                        <div class=\"col-md-12\">\n                                                            <label class=\"control-label\">Valoración:</label>\n                                                        </div>\n                                                    </div>\n                                                    <label class=\"radio-inline\">\n                <input\n                [attr.disabled]=\"enable? null: false\"\n                  type=\"radio\"\n                  name=\"valoracion\"\n                  class=\"form-checkbox-input\"\n                  [value]=\"1\"\n                  [(ngModel)]=\"estudioLaboratorio.valoracion\"\n                />\n                APTA\n              </label>\n                                                    <label class=\"radio-inline\">\n                <input\n                [attr.disabled]=\"enable? null: false\"\n                  type=\"radio\"\n                  name=\"valoracion\"\n                  [value]=\"0\"\n                  class=\"form-checkbox-input\"\n                  [(ngModel)]=\"estudioLaboratorio.valoracion\"\n                />\n                NO APTA\n              </label>\n                                                </div>\n                                            </div>\n                                            <app-componente-cadena-larga [componente]=\"'estudioLaboratorio'\" [atributo]=\"'observacion'\" [buscar]=\"estudioLaboratorioBuscar\" [permisosAtributos]=\"permisosAtributos\" [(valido)]=\"validosEstudioLaboratorio['observacion']\" [(dato)]=\"estudioLaboratorio.observacion\"\n                                                class=\"w-100\" [enable]=\"enable\">\n                                            </app-componente-cadena-larga>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n</form>"

/***/ }),

/***/ "./src/app/estudio-laboratorios/estudio-laboratorio/estudio-laboratorio.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/estudio-laboratorios/estudio-laboratorio/estudio-laboratorio.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: EstudioLaboratorioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstudioLaboratorioComponent", function() { return EstudioLaboratorioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/estudio-laboratorio */ "./src/app/estudio-laboratorios/shared/estudio-laboratorio.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EstudioLaboratorioComponent = /** @class */ (function () {
    function EstudioLaboratorioComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.estudioLaboratorioChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovEstudioLaboratorioUsuarioEditar = false;
        this.idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitudEditar = false;
    }
    EstudioLaboratorioComponent.prototype.actualizarEstudioLaboratorio = function () {
        if (this.estudioLaboratorio.id == null) {
            this.estudioLaboratorioService.guardarEstudioLaboratorio(this.estudioLaboratorio, this.evtGuardar, this);
        }
        else {
            this.estudioLaboratorioService.actualizarEstudioLaboratorio(this.estudioLaboratorio, this.evtActualiza, this);
        }
    };
    EstudioLaboratorioComponent.prototype.evtGuardar = function (estudioLaboratorio, obj) {
        obj.estudioLaboratorio = estudioLaboratorio;
        obj.estudioLaboratorioChange.emit(obj.estudioLaboratorio);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    };
    EstudioLaboratorioComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.estudioLaboratorioChange.emit(obj.estudioLaboratorio);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    EstudioLaboratorioComponent.prototype.ngOnChanges = function (changes) {
        if (changes.opcion && changes.opcion.currentValue != null) {
            if (changes.opcion.currentValue == 1) {
                this.opcion = 1;
                this.actualizarEstudioLaboratorio();
            }
        }
    };
    EstudioLaboratorioComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EstudioLaboratorioComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EstudioLaboratorioComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EstudioLaboratorioComponent.prototype, "estudioLaboratorioBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EstudioLaboratorioComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EstudioLaboratorioComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EstudioLaboratorioComponent.prototype, "validosEstudioLaboratorio", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_1__["EstudioLaboratorio"])
    ], EstudioLaboratorioComponent.prototype, "estudioLaboratorio", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EstudioLaboratorioComponent.prototype, "estudioLaboratorioService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], EstudioLaboratorioComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EstudioLaboratorioComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EstudioLaboratorioComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EstudioLaboratorioComponent.prototype, "estudioLaboratorioChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EstudioLaboratorioComponent.prototype, "ocultarConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EstudioLaboratorioComponent.prototype, "lista_usuarioUltMovEstudioLaboratorioUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EstudioLaboratorioComponent.prototype, "lista_idevaluacionSolicitudEstudioLaboratorioEvaluacionSolicitud", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EstudioLaboratorioComponent.prototype, "enable", void 0);
    EstudioLaboratorioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-estudio-laboratorio",
            template: __webpack_require__(/*! ./estudio-laboratorio.component.html */ "./src/app/estudio-laboratorios/estudio-laboratorio/estudio-laboratorio.component.html"),
            styles: [__webpack_require__(/*! ./estudio-laboratorio.component.css */ "./src/app/estudio-laboratorios/estudio-laboratorio/estudio-laboratorio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EstudioLaboratorioComponent);
    return EstudioLaboratorioComponent;
}());



/***/ }),

/***/ "./src/app/estudio-laboratorios/shared/configurar-estudio-laboratorio.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/estudio-laboratorios/shared/configurar-estudio-laboratorio.ts ***!
  \*******************************************************************************/
/*! exports provided: ConfigurarEstudioLaboratorio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurarEstudioLaboratorio", function() { return ConfigurarEstudioLaboratorio; });
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");

var ConfigurarEstudioLaboratorio = /** @class */ (function () {
    //   rutaAgregar:string;
    function ConfigurarEstudioLaboratorio() {
        this.urlprovider = new _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__["URLProvider"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "estudioLaboratorio";
        this.rutaLista = this.crudServiceBaseUrl + "/getEstudioLaboratorios";
        this.rutaAgregar = this.crudServiceBaseUrl + "/guardarEstudioLaboratorio";
        this.rutaActualizar = this.crudServiceBaseUrl + "/actualizarEstudioLaboratorio";
        this.rutaEliminar = this.crudServiceBaseUrl + "/eliminarEstudioLaboratorio";
        this.titulo = "Catálogo EstudioLaboratorio";
        this.permisosAtributos = null;
        this.permisosTabla = null;
        this.estudioLaboratorioConsulta = null;
        this.campoAgEl = null;
        this.tipocampoAgEl = null;
        this.altoComponente = 500;
    }
    ConfigurarEstudioLaboratorio.prototype.lectura = function () {
        return {
            url: this.rutaLista,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarEstudioLaboratorio.prototype.lecturaP = function (evt, dat) {
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
    ConfigurarEstudioLaboratorio.prototype.eliminar = function () {
        return {
            url: this.rutaEliminar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarEstudioLaboratorio.prototype.eliminarP = function (evt, dat) {
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
    ConfigurarEstudioLaboratorio.prototype.agregar = function () {
        return {
            url: this.rutaAgregar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarEstudioLaboratorio.prototype.agregarP = function (evt, dat) {
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
    return ConfigurarEstudioLaboratorio;
}());



/***/ }),

/***/ "./src/app/estudio-laboratorios/shared/estudio-laboratorio.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/estudio-laboratorios/shared/estudio-laboratorio.service.ts ***!
  \****************************************************************************/
/*! exports provided: EstudioLaboratorioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstudioLaboratorioService", function() { return EstudioLaboratorioService; });
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


var EstudioLaboratorioService = /** @class */ (function () {
    function EstudioLaboratorioService(globalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }
    EstudioLaboratorioService.prototype.setEstudioLaboratorio = function (estudioLaboratorio) {
        this.estudioLaboratorio = estudioLaboratorio;
    };
    EstudioLaboratorioService.prototype.getEstudioLaboratorio = function () {
        return this.estudioLaboratorio;
    };
    EstudioLaboratorioService.prototype.guardarEstudioLaboratorio = function (estudioLaboratorio, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(estudioLaboratorio, 'estudioLaboratorio/guardarEstudioLaboratorio')
            .subscribe(function (data) {
            _evento(_this.estudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.estudioLaboratorio);
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
    EstudioLaboratorioService.prototype.guardarListaEstudioLaboratorio = function (estudioLaboratorio, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(estudioLaboratorio, 'estudioLaboratorio/guardarListaEstudioLaboratorio')
            .subscribe(function (data) {
            _evento(_this.globalesService.util.jsonOk(data), objeto);
            (_this.estudioLaboratorio);
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
    EstudioLaboratorioService.prototype.actualizarEstudioLaboratorio = function (estudioLaboratorio, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(estudioLaboratorio, 'estudioLaboratorio/actualizarEstudioLaboratorio')
            .subscribe(function (data) {
            _evento(_this.estudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.estudioLaboratorio);
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
    EstudioLaboratorioService.prototype.actualizarListaEstudioLaboratorio = function (estudioLaboratorio, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(estudioLaboratorio, 'estudioLaboratorio/actualizarListaEstudioLaboratorio')
            .subscribe(function (data) {
            _evento(_this.globalesService.util.jsonOk(data), objeto);
            (_this.estudioLaboratorio);
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
    EstudioLaboratorioService.prototype.eliminarEstudioLaboratorio = function (estudioLaboratorio, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(estudioLaboratorio, 'estudioLaboratorio/eliminarEstudioLaboratorio')
            .subscribe(function (data) {
            _evento(_this.estudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.estudioLaboratorio);
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
    EstudioLaboratorioService.prototype.getEstudioLaboratoriodb = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'estudioLaboratorio/getEstudioLaboratorio')
            .subscribe(function (data) {
            _evento(_this.estudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.estudioLaboratorio);
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
    EstudioLaboratorioService.prototype.getEstudioLaboratorios = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'estudioLaboratorio/getEstudioLaboratorios')
            .subscribe(function (data) {
            _evento(_this.listaEstudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEstudioLaboratorio);
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
    EstudioLaboratorioService.prototype.getEstudioLaboratoriosActivos = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'estudioLaboratorio/getEstudioLaboratoriosActivos')
            .subscribe(function (data) {
            _evento(_this.listaEstudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEstudioLaboratorio);
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
    EstudioLaboratorioService.prototype.lazyEstudioLaboratorio = function (estudioLaboratorio, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(estudioLaboratorio, 'estudioLaboratorio/lazyEstudioLaboratorio')
            .subscribe(function (data) {
            _evento(_this.estudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.estudioLaboratorio);
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
    EstudioLaboratorioService.prototype.getEstudioLaboratorioById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'estudioLaboratorio/getEstudioLaboratorioById')
            .subscribe(function (data) {
            _evento(_this.estudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.estudioLaboratorio);
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
    EstudioLaboratorioService.prototype.getEstudioLaboratoriosById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'estudioLaboratorio/getEstudioLaboratoriosById')
            .subscribe(function (data) {
            _evento(_this.listaEstudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEstudioLaboratorio);
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
    EstudioLaboratorioService.prototype.getEstudioLaboratorioByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'estudioLaboratorio/getEstudioLaboratorioByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.estudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.estudioLaboratorio);
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
    EstudioLaboratorioService.prototype.getEstudioLaboratoriosByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'estudioLaboratorio/getEstudioLaboratoriosByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.listaEstudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEstudioLaboratorio);
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
    EstudioLaboratorioService.prototype.getEstudioLaboratorioByBrilloCorneal = function (brilloCorneal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(brilloCorneal, 'estudioLaboratorio/getEstudioLaboratorioByBrilloCorneal')
            .subscribe(function (data) {
            _evento(_this.estudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.estudioLaboratorio);
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
    EstudioLaboratorioService.prototype.getEstudioLaboratoriosByBrilloCorneal = function (brilloCorneal, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(brilloCorneal, 'estudioLaboratorio/getEstudioLaboratoriosByBrilloCorneal')
            .subscribe(function (data) {
            _evento(_this.listaEstudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEstudioLaboratorio);
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
    EstudioLaboratorioService.prototype.getEstudioLaboratorioByCicatriceLeucoma = function (cicatriceLeucoma, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(cicatriceLeucoma, 'estudioLaboratorio/getEstudioLaboratorioByCicatriceLeucoma')
            .subscribe(function (data) {
            _evento(_this.estudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.estudioLaboratorio);
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
    EstudioLaboratorioService.prototype.getEstudioLaboratoriosByCicatriceLeucoma = function (cicatriceLeucoma, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(cicatriceLeucoma, 'estudioLaboratorio/getEstudioLaboratoriosByCicatriceLeucoma')
            .subscribe(function (data) {
            _evento(_this.listaEstudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEstudioLaboratorio);
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
    EstudioLaboratorioService.prototype.getEstudioLaboratorioByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'estudioLaboratorio/getEstudioLaboratorioByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.estudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.estudioLaboratorio);
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
    EstudioLaboratorioService.prototype.getEstudioLaboratoriosByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'estudioLaboratorio/getEstudioLaboratoriosByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.listaEstudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEstudioLaboratorio);
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
    EstudioLaboratorioService.prototype.getEstudioLaboratorioByErocioneUlcera = function (erocioneUlcera, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(erocioneUlcera, 'estudioLaboratorio/getEstudioLaboratorioByErocioneUlcera')
            .subscribe(function (data) {
            _evento(_this.estudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.estudioLaboratorio);
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
    EstudioLaboratorioService.prototype.getEstudioLaboratoriosByErocioneUlcera = function (erocioneUlcera, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(erocioneUlcera, 'estudioLaboratorio/getEstudioLaboratoriosByErocioneUlcera')
            .subscribe(function (data) {
            _evento(_this.listaEstudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEstudioLaboratorio);
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
    EstudioLaboratorioService.prototype.getEstudioLaboratorioByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'estudioLaboratorio/getEstudioLaboratorioByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.estudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.estudioLaboratorio);
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
    EstudioLaboratorioService.prototype.getEstudioLaboratoriosByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'estudioLaboratorio/getEstudioLaboratoriosByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.listaEstudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEstudioLaboratorio);
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
    EstudioLaboratorioService.prototype.getEstudioLaboratorioByValoracion = function (valoracion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(valoracion, 'estudioLaboratorio/getEstudioLaboratorioByValoracion')
            .subscribe(function (data) {
            _evento(_this.estudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.estudioLaboratorio);
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
    EstudioLaboratorioService.prototype.getEstudioLaboratoriosByValoracion = function (valoracion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(valoracion, 'estudioLaboratorio/getEstudioLaboratoriosByValoracion')
            .subscribe(function (data) {
            _evento(_this.listaEstudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEstudioLaboratorio);
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
    EstudioLaboratorioService.prototype.getEstudioLaboratorioByCuerpoExtrano = function (cuerpoExtrano, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(cuerpoExtrano, 'estudioLaboratorio/getEstudioLaboratorioByCuerpoExtrano')
            .subscribe(function (data) {
            _evento(_this.estudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.estudioLaboratorio);
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
    EstudioLaboratorioService.prototype.getEstudioLaboratoriosByCuerpoExtrano = function (cuerpoExtrano, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(cuerpoExtrano, 'estudioLaboratorio/getEstudioLaboratoriosByCuerpoExtrano')
            .subscribe(function (data) {
            _evento(_this.listaEstudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEstudioLaboratorio);
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
    EstudioLaboratorioService.prototype.getEstudioLaboratorioByTipoCornea = function (tipoCornea, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(tipoCornea, 'estudioLaboratorio/getEstudioLaboratorioByTipoCornea')
            .subscribe(function (data) {
            _evento(_this.estudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.estudioLaboratorio);
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
    EstudioLaboratorioService.prototype.getEstudioLaboratoriosByTipoCornea = function (tipoCornea, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(tipoCornea, 'estudioLaboratorio/getEstudioLaboratoriosByTipoCornea')
            .subscribe(function (data) {
            _evento(_this.listaEstudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEstudioLaboratorio);
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
    EstudioLaboratorioService.prototype.getEstudioLaboratorioByObservacion = function (observacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(observacion, 'estudioLaboratorio/getEstudioLaboratorioByObservacion')
            .subscribe(function (data) {
            _evento(_this.estudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.estudioLaboratorio);
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
    EstudioLaboratorioService.prototype.getEstudioLaboratoriosByObservacion = function (observacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(observacion, 'estudioLaboratorio/getEstudioLaboratoriosByObservacion')
            .subscribe(function (data) {
            _evento(_this.listaEstudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEstudioLaboratorio);
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
    EstudioLaboratorioService.prototype.getEstudioLaboratorioByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'estudioLaboratorio/getEstudioLaboratorioByStatus')
            .subscribe(function (data) {
            _evento(_this.estudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.estudioLaboratorio);
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
    EstudioLaboratorioService.prototype.getEstudioLaboratoriosByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'estudioLaboratorio/getEstudioLaboratoriosByStatus')
            .subscribe(function (data) {
            _evento(_this.listaEstudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEstudioLaboratorio);
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
    EstudioLaboratorioService.prototype.getEstudioLaboratorioByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'estudioLaboratorio/getEstudioLaboratorioByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.estudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.estudioLaboratorio);
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
    EstudioLaboratorioService.prototype.getEstudioLaboratoriosByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'estudioLaboratorio/getEstudioLaboratoriosByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.listaEstudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEstudioLaboratorio);
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
    EstudioLaboratorioService.prototype.getEstudioLaboratorioByIdevaluacionSolicitud = function (idevaluacionSolicitud, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idevaluacionSolicitud, 'estudioLaboratorio/getEstudioLaboratorioByIdevaluacionSolicitud')
            .subscribe(function (data) {
            _evento(_this.estudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.estudioLaboratorio);
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
    EstudioLaboratorioService.prototype.getEstudioLaboratoriosByIdevaluacionSolicitud = function (idevaluacionSolicitud, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idevaluacionSolicitud, 'estudioLaboratorio/getEstudioLaboratoriosByIdevaluacionSolicitud')
            .subscribe(function (data) {
            _evento(_this.listaEstudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEstudioLaboratorio);
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
    EstudioLaboratorioService.prototype.custom = function (consulta, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(consulta, 'estudioLaboratorio/custom')
            .subscribe(function (data) {
            _evento(_this.listaEstudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEstudioLaboratorio);
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
    EstudioLaboratorioService.prototype.getEstudioLaboratoriosByDto = function (p_estudioLaboratorio, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(p_estudioLaboratorio, 'estudioLaboratorio/getEstudioLaboratoriosByDto')
            .subscribe(function (data) {
            _evento(_this.listaEstudioLaboratorio = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaEstudioLaboratorio);
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
    EstudioLaboratorioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"]])
    ], EstudioLaboratorioService);
    return EstudioLaboratorioService;
}());



/***/ }),

/***/ "./src/app/estudio-laboratorios/shared/estudio-laboratorio.ts":
/*!********************************************************************!*\
  !*** ./src/app/estudio-laboratorios/shared/estudio-laboratorio.ts ***!
  \********************************************************************/
/*! exports provided: EstudioLaboratorio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstudioLaboratorio", function() { return EstudioLaboratorio; });
/**
 *
 * @author IstmoSoft
 */
var EstudioLaboratorio = /** @class */ (function () {
    // atributos fin
    function EstudioLaboratorio(source) {
        if (source === void 0) { source = null; }
        // ids inicio
        this.id = null;
        // ids fin
        // atributos inicio
        this.fechaBaja = null;
        this.brilloCorneal = null;
        this.cicatriceLeucoma = null;
        this.fechaRegistro = null;
        this.erocioneUlcera = null;
        this.fechaActualizacion = null;
        this.valoracion = null;
        this.cuerpoExtrano = null;
        this.tipoCornea = null;
        this.observacion = null;
        this.status = null;
        this.usuarioUltMov = null;
        this.idevaluacionSolicitud = null;
        if (source !== null)
            this.from(source);
    }
    EstudioLaboratorio.prototype.from = function (source) {
        if (source.id)
            this.id = source.id;
        if (source.fechaBaja)
            this.fechaBaja = source.fechaBaja;
        if (source.brilloCorneal)
            this.brilloCorneal = source.brilloCorneal;
        if (source.cicatriceLeucoma)
            this.cicatriceLeucoma = source.cicatriceLeucoma;
        if (source.fechaRegistro)
            this.fechaRegistro = source.fechaRegistro;
        if (source.erocioneUlcera)
            this.erocioneUlcera = source.erocioneUlcera;
        if (source.fechaActualizacion)
            this.fechaActualizacion = source.fechaActualizacion;
        if (source.valoracion)
            this.valoracion = source.valoracion;
        if (source.cuerpoExtrano)
            this.cuerpoExtrano = source.cuerpoExtrano;
        if (source.tipoCornea)
            this.tipoCornea = source.tipoCornea;
        if (source.observacion)
            this.observacion = source.observacion;
        if (source.status)
            this.status = source.status;
        if (source.usuarioUltMov)
            this.usuarioUltMov = source.usuarioUltMov;
        if (source.idevaluacionSolicitud)
            this.idevaluacionSolicitud = source.idevaluacionSolicitud;
    };
    EstudioLaboratorio.prototype.isOk = function () {
        if (this.id)
            return true;
        if (this.fechaBaja)
            return true;
        if (this.brilloCorneal)
            return true;
        if (this.cicatriceLeucoma)
            return true;
        if (this.fechaRegistro)
            return true;
        if (this.erocioneUlcera)
            return true;
        if (this.fechaActualizacion)
            return true;
        if (this.valoracion)
            return true;
        if (this.cuerpoExtrano)
            return true;
        if (this.tipoCornea)
            return true;
        if (this.observacion)
            return true;
        if (this.status)
            return true;
        if (this.usuarioUltMov)
            return true;
        if (this.idevaluacionSolicitud)
            return true;
        return false;
    };
    EstudioLaboratorio.prototype.toDto = function () {
        if (this.id != null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '') == "")
            this.id = null;
        if (this.fechaBaja != null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '') == "")
            this.fechaBaja = null;
        if (this.brilloCorneal != null && typeof this.brilloCorneal === 'string' && this.brilloCorneal.replace(/^\s+|\s+$/g, '') == "")
            this.brilloCorneal = null;
        if (this.cicatriceLeucoma != null && typeof this.cicatriceLeucoma === 'string' && this.cicatriceLeucoma.replace(/^\s+|\s+$/g, '') == "")
            this.cicatriceLeucoma = null;
        if (this.fechaRegistro != null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '') == "")
            this.fechaRegistro = null;
        if (this.erocioneUlcera != null && typeof this.erocioneUlcera === 'string' && this.erocioneUlcera.replace(/^\s+|\s+$/g, '') == "")
            this.erocioneUlcera = null;
        if (this.fechaActualizacion != null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '') == "")
            this.fechaActualizacion = null;
        if (this.valoracion != null && typeof this.valoracion === 'string' && this.valoracion.replace(/^\s+|\s+$/g, '') == "")
            this.valoracion = null;
        if (this.cuerpoExtrano != null && typeof this.cuerpoExtrano === 'string' && this.cuerpoExtrano.replace(/^\s+|\s+$/g, '') == "")
            this.cuerpoExtrano = null;
        if (this.tipoCornea != null && typeof this.tipoCornea === 'string' && this.tipoCornea.replace(/^\s+|\s+$/g, '') == "")
            this.tipoCornea = null;
        if (this.observacion != null && typeof this.observacion === 'string' && this.observacion.replace(/^\s+|\s+$/g, '') == "")
            this.observacion = null;
        if (this.status != null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '') == "")
            this.status = null;
        if (this.usuarioUltMov != null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '') == "")
            this.usuarioUltMov = null;
        if (this.idevaluacionSolicitud != null && typeof this.idevaluacionSolicitud === 'string' && this.idevaluacionSolicitud.replace(/^\s+|\s+$/g, '') == "")
            this.idevaluacionSolicitud = null;
        return this;
    };
    return EstudioLaboratorio;
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
//# sourceMappingURL=default~app-conteo-celulares-conteo-celular-module~app-desglose-corneas-desglose-cornea-module~app-e~72967aa3.js.map