(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-conteo-celulares-conteo-celular-module~app-desglose-corneas-desglose-cornea-module~app-e~67573ad3"],{

/***/ "./src/app/conteo-celulares/conteo-celular-conjunto/conteo-celular-conjunto.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/conteo-celulares/conteo-celular-conjunto/conteo-celular-conjunto.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/conteo-celulares/conteo-celular-conjunto/conteo-celular-conjunto.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/conteo-celulares/conteo-celular-conjunto/conteo-celular-conjunto.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\"  >\n    <li *ngFor =  \"let conteoCelular of listaConteoCelular \" [ngClass]=\"{ 'active':idSeleccionado=== 'I-'+conteoCelular.id}\"\n        (click)=\"elegir(conteoCelular,'I' )\" >\n        <a data-toggle=\"tab\" href=\"#tab-I-{{conteoCelular.id}}\">{{conteoCelular.id}}</a>\n    </li>\n    <li *ngFor =  \"let conteoCelular of listaConteoCelularN \" [ngClass]=\"{ 'active':idSeleccionado=== 'N-'+conteoCelular.id}\"\n        (click)=\"elegir(conteoCelular, 'N')\" >\n        <a data-toggle=\"tab\" href=\"#tab-N-{{conteoCelular.id}}\">T-{{conteoCelular.id}}</a>\n    </li>\n</ul>\n<div class=\"panel panel-default\"  >\n     <div  class=\"tab-content\">\n        <div *ngFor = \"let conteoCelular of listaConteoCelular ; let i = index \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='I-'+conteoCelular.id}\" id=\"tab-I-{{conteoCelular.id}}\">\n\t\t\t<app-conteo-celular [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [conteoCelularBuscar]=\"conteoCelularBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosConteoCelular]=\"validosConteoCelular\"  \n\t\t\t\t\t\t  [conteoCelularService]=\"conteoCelularService\" [(opcion)]=\"opcionConteoCelular\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(conteoCelular)]=\"listaConteoCelular[i]\"  [ocultarConjuntos]=\"ocultarConjuntosConteoCelular\"\n                           [lista_usuarioUltMovConteoCelularUsuario]=\"lista_usuarioUltMovConteoCelularUsuario\" \n                           [lista_idevaluacionSolicitudConteoCelularEvaluacionSolicitud]=\"lista_idevaluacionSolicitudConteoCelularEvaluacionSolicitud\" \n\n\t\t\t\t\t  >\n\t\t\t</app-conteo-celular>\n        </div>\n        <div *ngFor = \"let conteoCelular of listaConteoCelularN;  let i = index  \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='N-'+conteoCelular.id}\" id=\"tab-N-{{conteoCelular.id}}\">\n\t\t\t<app-conteo-celular [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [conteoCelularBuscar]=\"conteoCelularBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosConteoCelular]=\"validosConteoCelular\"  \n\t\t\t\t\t\t  [conteoCelularService]=\"conteoCelularService\" [(opcion)]=\"opcionConteoCelular\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(conteoCelular)]=\"listaConteoCelularN[i]\"  [ocultarConjuntos]=\"ocultarConjuntosConteoCelular\"\n                           [lista_usuarioUltMovConteoCelularUsuario]=\"lista_usuarioUltMovConteoCelularUsuario\" \n                           [lista_idevaluacionSolicitudConteoCelularEvaluacionSolicitud]=\"lista_idevaluacionSolicitudConteoCelularEvaluacionSolicitud\" \n\n\t\t\t\t\t  >\n\t\t\t</app-conteo-celular>  \n        </div>\n\n    </div>\n    <div class=\"panel-footer\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"agregarNuevo()\">\n            <span class=\"fa fa-plus-circle\" aria-hidden=\"true\" style=\"font-size:36px\"></span> AGREGAR\n        </button>\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"actualizaTodo()\">\n            <span class=\"fa fa-reply-all\" aria-hidden=\"true\" style=\"font-size:36px\"></span> ACTUALIZAR TODO\n        </button>\n    </div>\n</div>\t\t\t\n"

/***/ }),

/***/ "./src/app/conteo-celulares/conteo-celular-conjunto/conteo-celular-conjunto.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/conteo-celulares/conteo-celular-conjunto/conteo-celular-conjunto.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ConteoCelularConjuntoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConteoCelularConjuntoComponent", function() { return ConteoCelularConjuntoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_conteo_celular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/conteo-celular */ "./src/app/conteo-celulares/shared/conteo-celular.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConteoCelularConjuntoComponent = /** @class */ (function () {
    function ConteoCelularConjuntoComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovConteoCelularUsuarioEditar = false;
        this.idevaluacionSolicitudConteoCelularEvaluacionSolicitudEditar = false;
        this.listaConteoCelularN = [];
        this.listaConteoCelular = [];
        this.listaConteoCelularChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.conteoCelularN = new _shared_conteo_celular__WEBPACK_IMPORTED_MODULE_1__["ConteoCelular"]();
        this.conteoCelularNChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.agregados = 0;
        this.actualizados = 0;
        this.idSeleccionado = "N-0";
    }
    ConteoCelularConjuntoComponent.prototype.elegir = function (conteoCelular, tipo) {
        this.idSeleccionado = tipo + "-" + conteoCelular.id;
        this.conteoCelularN = conteoCelular;
    };
    ConteoCelularConjuntoComponent.prototype.ngOnInit = function () {
        this.conteoCelularN.id = 0;
        this.listaConteoCelularN.push(Object.assign({}, this.conteoCelularN));
        this.usuariologueado = this.globalesService.dameUsuario();
    };
    ConteoCelularConjuntoComponent.prototype.agregarNuevo = function () {
        var pg = new _shared_conteo_celular__WEBPACK_IMPORTED_MODULE_1__["ConteoCelular"]();
        pg.id = this.listaConteoCelularN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaConteoCelularN.push(pg);
    };
    ConteoCelularConjuntoComponent.prototype.actualizaTodo = function () {
        this.agregados = 0;
        this.actualizados = 0;
        for (var _i = 0, _a = this.listaConteoCelular; _i < _a.length; _i++) {
            var conteoCelular = _a[_i];
            this.conteoCelularService.actualizarConteoCelular(conteoCelular, this.evtActualiza, this);
        }
        for (var _b = 0, _c = this.listaConteoCelularN; _b < _c.length; _b++) {
            var conteoCelular = _c[_b];
            conteoCelular.id = null;
            this.conteoCelularService.guardarConteoCelular(conteoCelular, this.evtGuardar, this);
        }
    };
    ConteoCelularConjuntoComponent.prototype.evtGuardar = function (conteoCelular, obj) {
        obj.agregados++;
        obj.listaConteoCelular.push(conteoCelular);
        if (obj.agregados >= obj.listaConteoCelularN.length) {
            obj.conteoCelularN = new _shared_conteo_celular__WEBPACK_IMPORTED_MODULE_1__["ConteoCelular"]();
            obj.listaConteoCelularN = [];
            obj.conteoCelularN.id = 0;
            obj.idSeleccionado = "N-" + obj.conteoCelularN.id;
            obj.listaConteoCelularN.push(Object.assign({}, obj.conteoCelularN));
            obj.listaConteoCelularChange.emit(obj.listaConteoCelular);
        }
        if (obj.agregados >= obj.listaConteoCelularN.length &&
            obj.actualizados >= obj.listaConteoCelular.length) {
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    ConteoCelularConjuntoComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.actualizados++;
            if (obj.agregados >= obj.listaConteoCelularN.length &&
                obj.actualizados >= obj.listaConteoCelular.length) {
                obj.opcion = 0;
                obj.opcion.emit(obj.opcion);
            }
        }
    };
    ConteoCelularConjuntoComponent.prototype.ngOnChanges = function (changes) {
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
    ], ConteoCelularConjuntoComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConteoCelularConjuntoComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConteoCelularConjuntoComponent.prototype, "conteoCelularBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConteoCelularConjuntoComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConteoCelularConjuntoComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConteoCelularConjuntoComponent.prototype, "validosConteoCelular", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConteoCelularConjuntoComponent.prototype, "ocultarConjuntosConteoCelular", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConteoCelularConjuntoComponent.prototype, "conteoCelularService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ConteoCelularConjuntoComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ConteoCelularConjuntoComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConteoCelularConjuntoComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConteoCelularConjuntoComponent.prototype, "lista_usuarioUltMovConteoCelularUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConteoCelularConjuntoComponent.prototype, "lista_idevaluacionSolicitudConteoCelularEvaluacionSolicitud", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ConteoCelularConjuntoComponent.prototype, "listaConteoCelular", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ConteoCelularConjuntoComponent.prototype, "listaConteoCelularChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_conteo_celular__WEBPACK_IMPORTED_MODULE_1__["ConteoCelular"])
    ], ConteoCelularConjuntoComponent.prototype, "conteoCelularN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ConteoCelularConjuntoComponent.prototype, "conteoCelularNChange", void 0);
    ConteoCelularConjuntoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-conteo-celular-conjunto',
            template: __webpack_require__(/*! ./conteo-celular-conjunto.component.html */ "./src/app/conteo-celulares/conteo-celular-conjunto/conteo-celular-conjunto.component.html"),
            styles: [__webpack_require__(/*! ./conteo-celular-conjunto.component.css */ "./src/app/conteo-celulares/conteo-celular-conjunto/conteo-celular-conjunto.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], ConteoCelularConjuntoComponent);
    return ConteoCelularConjuntoComponent;
}());



/***/ }),

/***/ "./src/app/conteo-celulares/conteo-celular-crud/conteo-celular-crud.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/conteo-celulares/conteo-celular-crud/conteo-celular-crud.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/conteo-celulares/conteo-celular-crud/conteo-celular-crud.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/conteo-celulares/conteo-celular-crud/conteo-celular-crud.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <!-- <div class=\"panel-footer\" style=\"text-align: right\" *ngIf=\"!viewModeEvaluacion\">\n        <div style=\"display: inline-block;width: 90%; margin-right: 10%;\">\n        </div>\n    </div> -->\n  <app-lampara-hendidura-crud [viewModeEvaluacion]=\"true\"></app-lampara-hendidura-crud>\n  <div class=\"panel-footer\" style=\"text-align: center;\">\n    <h4>APLICACIÓN DE CALIDAD / CONTEO CELULAR</h4>\n  </div>\n  <div class=\"panel-footer\" style=\"text-align: left;\">\n    <h4>Revisión en Analizador de Córneas:</h4>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <app-conteo-celular [usuariologueado]=\"usuariologueado\"\n        [etiquetaGeneral]=\"'Parámetros en Monocapa Endotelial CÓRNEA IZQUIERDA (CI)'\" [conteoCelularBuscar]=\"conteoCelularBuscar\"\n        [permisosAtributos]=\"permisosAtributos\" [permisosConjuntos]=\"permisosConjuntos\"\n        [validosConteoCelular]=\"validosConteoCelular\" [conteoCelularService]=\"conteoCelular_service\"\n        [(opcion)]=\"opcionConteoCelular\" [globalesService]=\"globalesService\" [(conteoCelular)]=\"conteoCelular\"\n        [ocultarConjuntos]=\"ocultarConjuntosConteoCelular\" [lista_usuarioUltMovConteoCelularUsuario]=\"\n      lista_usuarioUltMovConteoCelularUsuario\n    \" [lista_idevaluacionSolicitudConteoCelularEvaluacionSolicitud]=\"\n      lista_idevaluacionSolicitudConteoCelularEvaluacionSolicitud\n    \" [enable]=\"\n      evaluacionSolicitud?.idrecepcionSolicitudEvaluacion?.idbtcCi !=\n        null &&\n      !viewModeEvaluacion &&\n      !evaluacionSolicitud.almacenEvaluacion\n    \" [desgloseCornea]=\"desgloseCorneaIzquierda\" (saveDesgloseCorneaEvent)=\"saveDesgloseCorneaIzquierda()\"\n        [listaDesgloseCornea]=\"listaDesgloseCorneaIzquierda\">\n      </app-conteo-celular>\n    </div>\n    <div class=\"col-md-6\">\n      <app-conteo-celular [usuariologueado]=\"usuariologueado\"\n        [etiquetaGeneral]=\"'Parámetros en Monocapa Endotelial CÓRNEA DERECHA (CD)'\" [conteoCelularBuscar]=\"conteoCelularBuscar\"\n        [permisosAtributos]=\"permisosAtributos\" [permisosConjuntos]=\"permisosConjuntos\"\n        [validosConteoCelular]=\"validosConteoCelular\" [conteoCelularService]=\"conteoCelular_service\"\n        [(opcion)]=\"opcionConteoCelular\" [globalesService]=\"globalesService\" [(conteoCelular)]=\"conteoCelularDerecha\"\n        [ocultarConjuntos]=\"ocultarConjuntosConteoCelular\" [lista_usuarioUltMovConteoCelularUsuario]=\"\n          lista_usuarioUltMovConteoCelularUsuario\n        \" [lista_idevaluacionSolicitudConteoCelularEvaluacionSolicitud]=\"\n          lista_idevaluacionSolicitudConteoCelularEvaluacionSolicitud\n        \" [enable]=\"\n          evaluacionSolicitud?.idrecepcionSolicitudEvaluacion?.idbtcCd !=\n            null &&\n          !viewModeEvaluacion &&\n          !evaluacionSolicitud.almacenEvaluacion\n        \" [desgloseCornea]=\"desgloseCorneaDerecha\" (saveDesgloseCorneaEvent)=\"saveDesgloseCorneaDerecha()\"\n        [listaDesgloseCornea]=\"listaDesgloseCorneaDerecha\">\n      </app-conteo-celular>\n    </div>\n  </div>\n\n  <div class=\"panel-footer\" style=\"text-align: right\" *ngIf=\"!viewModeEvaluacion\">\n    <div style=\"display: inline-block;width: 90%; margin-right: 10%;\">\n      <button style=\"margin-right: 10px;\" type=\"button\" class=\"btn  btn-primary btn-guardar\" [disabled]=\"\n            !(\n              evaluacionSolicitud.lamparasHendidura?.length > 0 &&\n              evaluacionSolicitud.estudiosLaboratorio?.length > 0 &&\n              !evaluacionSolicitud.almacenEvaluacion\n            )\n          \" (click)=\"doSave()\">\n        <span class=\"glyphicon glyphicon-floppy-disk\" aria-hidden=\"true\"></span>\n      </button>\n      <button style=\"margin-right: 10px;\" type=\"button\" class=\"btn btn-primary btn-guardar\"\n        [routerLink]=\"['/lampara-hendidura-crud/', evaluacionSolicitud.id]\">\n        <span class=\"fa fa-floppy-disk\"></span>Atrás\n      </button>\n      <button type=\"button\" class=\"btn btn-primary btn-guardar\" style=\"margin-right: 10px;\" [disabled]=\"\n          !(\n            evaluacionSolicitud.lamparasHendidura?.length > 0 &&\n            evaluacionSolicitud.estudiosLaboratorio?.length > 0 &&\n            evaluacionSolicitud.conteosCelular?.length > 0\n          )\n        \" (click)=\"doImprimir()\">\n        <span class=\"fa fa-floppy-disk\"></span>Imprimir\n      </button>\n      <button type=\"button\" class=\"btn btn-primary btn-guardar\" style=\"margin-right: 10px;\"\n        (click)=\"doOpenModalEnviarNotificacion()\">\n        <span class=\"fa fa-floppy-disk\"></span>Enviar notificación\n      </button>\n      <button (click)=\"doEnviar()\" type=\"button\" class=\"btn btn-success \" [disabled]=\"\n          !(\n            evaluacionSolicitud.lamparasHendidura?.length > 0 &&\n            evaluacionSolicitud.estudiosLaboratorio?.length > 0 &&\n            evaluacionSolicitud.conteosCelular?.length > 0 &&\n            !evaluacionSolicitud.almacenEvaluacion\n          )\n        \">\n        <span class=\"fa fa-floppy-disk\"></span>Enviar\n      </button>\n    </div>\n  </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n<kendo-dialog *ngIf=\"modalActive\" (close)=\"closeModal()\" [width]=\"600\">\n  <kendo-dialog-titlebar>\n    Enviar Notificación\n  </kendo-dialog-titlebar>\n\n  <form novalidate>\n    <div class=\"form-group container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <label class=\"control-label\">Tipo de Notificación:</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"tipoNotificacion\" class=\"form-checkbox-input\" [value]=\"1\"\n              [(ngModel)]=\"tipoNotificacion\" />\n            Notificación #1\n          </label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"tipoNotificacion\" [value]=\"2\" class=\"form-checkbox-input\"\n              [(ngModel)]=\"tipoNotificacion\" />\n            Notificación #2\n          </label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"tipoNotificacion\" [value]=\"3\" class=\"form-checkbox-input\"\n              [(ngModel)]=\"tipoNotificacion\" />\n            Notificación #3\n          </label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"tipoNotificacion\" [value]=\"4\" class=\"form-checkbox-input\"\n              [(ngModel)]=\"tipoNotificacion\" />\n            Notificación #4\n          </label>\n        </div>\n      </div>\n    </div>\n  </form>\n\n  <kendo-dialog-actions>\n    <button class=\"k-button\" (click)=\"closeModal()\">Cancelar</button>\n    <button class=\"k-button k-primary\" (click)=\"doEnviarNotificacion()\" [disabled]=\"!tipoNotificacion\">\n      Enviar\n    </button>\n  </kendo-dialog-actions>\n</kendo-dialog>\n"

/***/ }),

/***/ "./src/app/conteo-celulares/conteo-celular-crud/conteo-celular-crud.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/conteo-celulares/conteo-celular-crud/conteo-celular-crud.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ConteoCelularCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConteoCelularCrudComponent", function() { return ConteoCelularCrudComponent; });
/* harmony import */ var _almacen_evaluaciones_shared_almacen_evaluacion_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../almacen-evaluaciones/shared/almacen-evaluacion.service */ "./src/app/almacen-evaluaciones/shared/almacen-evaluacion.service.ts");
/* harmony import */ var _desglose_corneas_shared_desglose_cornea_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../desglose-corneas/shared/desglose-cornea.service */ "./src/app/desglose-corneas/shared/desglose-cornea.service.ts");
/* harmony import */ var _desglose_corneas_shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../desglose-corneas/shared/desglose-cornea */ "./src/app/desglose-corneas/shared/desglose-cornea.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_core_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/core.service */ "./src/app/shared/core.service.ts");
/* harmony import */ var _shared_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/file.service */ "./src/app/shared/file.service.ts");
/* harmony import */ var _shared_conteo_celular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/conteo-celular */ "./src/app/conteo-celulares/shared/conteo-celular.ts");
/* harmony import */ var _shared_conteo_celular_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/conteo-celular.service */ "./src/app/conteo-celulares/shared/conteo-celular.service.ts");
/* harmony import */ var _shared_configurar_conteo_celular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/configurar-conteo-celular */ "./src/app/conteo-celulares/shared/configurar-conteo-celular.ts");
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../usuarios/shared/usuario.service */ "./src/app/usuarios/shared/usuario.service.ts");
/* harmony import */ var _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../usuario-btcs/shared/usuario-btc.service */ "./src/app/usuario-btcs/shared/usuario-btc.service.ts");
/* harmony import */ var _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../perfil-red-issstes/shared/perfil-red-issste.service */ "./src/app/perfil-red-issstes/shared/perfil-red-issste.service.ts");
/* harmony import */ var _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hospitales/shared/hospital.service */ "./src/app/hospitales/shared/hospital.service.ts");
/* harmony import */ var _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../entidad-federativas/shared/entidad-federativa.service */ "./src/app/entidad-federativas/shared/entidad-federativa.service.ts");
/* harmony import */ var _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../perfiles/shared/perfil.service */ "./src/app/perfiles/shared/perfil.service.ts");
/* harmony import */ var _evaluacion_solicitudes_shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../evaluacion-solicitudes/shared/evaluacion-solicitud */ "./src/app/evaluacion-solicitudes/shared/evaluacion-solicitud.ts");
/* harmony import */ var _evaluacion_solicitudes_shared_evaluacion_solicitud_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../evaluacion-solicitudes/shared/evaluacion-solicitud.service */ "./src/app/evaluacion-solicitudes/shared/evaluacion-solicitud.service.ts");
/* harmony import */ var _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service */ "./src/app/recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service.ts");
/* harmony import */ var _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service */ "./src/app/solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service.ts");
/* harmony import */ var _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../causa-muertes/shared/causa-muerte.service */ "./src/app/causa-muertes/shared/causa-muerte.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _almacen_evaluaciones_shared_almacen_evaluacion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../almacen-evaluaciones/shared/almacen-evaluacion */ "./src/app/almacen-evaluaciones/shared/almacen-evaluacion.ts");
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










var ConteoCelularCrudComponent = /** @class */ (function () {
    function ConteoCelularCrudComponent(globalesService, zone, fileservice, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    conteoCelular_service, usuario_service, usuarioBtc_service, perfilRedIssste_service, 
    //                public perfilBtc_service: PerfilBtcService,
    hospital_service, entidadFederativa_service, perfil_service, evaluacionSolicitud_service, recepcionSolicitudEvaluacion_service, solicitudEvaluacionCorneal_service, causaMuerte_service, activatedRoute, desgloseCorneaService, almacenEvaluacionService) {
        this.globalesService = globalesService;
        this.zone = zone;
        this.fileservice = fileservice;
        this.coreService = coreService;
        this.conteoCelular_service = conteoCelular_service;
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
        this.desgloseCorneaService = desgloseCorneaService;
        this.almacenEvaluacionService = almacenEvaluacionService;
        this.opcionConteoCelular = 0;
        this.validosConteoCelular = {
            id: false,
            idnumeroCelula: false,
            fechaBaja: false,
            discontinuidad: false,
            normalMenor33: false,
            numeroCampo: false,
            gutta: false,
            hexagonalidad: false,
            responsableMicroscopio: false,
            paquimetria: false,
            homogeneidad: false,
            zonaCelular: false,
            cvtamano: false,
            otraDescripcion: true,
            plemorfismo: false,
            numeroCelular: false,
            otra: false,
            pliegue: false,
            fechaRegistro: false,
            mayor60: false,
            deposito: false,
            observacionCd: false,
            idpaquimetria: false,
            valoracionCi: false,
            polimegatismo: false,
            fechaActualizacion: false,
            estriaRotura: false,
            valoracionFinalEndotelioCd: false,
            valoracionCd: false,
            valoracionFinalEndotelioCi: false,
            status: false,
            usuarioUltMov: false,
            idevaluacionSolicitud: false
        };
        this.ocultarConjuntosConteoCelular = false;
        this.idEvaluacion = null;
        this.nombre = "";
        this.permisosTabla = { tabla: "conteoCelular", permiso: 0, etiqueta: "" };
        this.permisosAtributos = [];
        this.permisosConjuntos = [];
        //  public perfil: Perfil;
        this.accion = 0;
        this.conteoCelularLazy = false;
        this.conteoCelularPermisos = false;
        this.validaciones = false;
        this.validacionesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.conteoCelular = new _shared_conteo_celular__WEBPACK_IMPORTED_MODULE_7__["ConteoCelular"]();
        this.conteoCelularChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.conteoCelularTablaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.lista_conteoCelulares = [];
        this.usuarioUltMovConteoCelularUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_10__["Usuario"]();
        this.lista_usuarioUltMovConteoCelularUsuario = [];
        this.usuarioUltMovConteoCelularUsuarioEditar = false;
        this.idevaluacionSolicitudConteoCelularEvaluacionSolicitudEleccion = new _evaluacion_solicitudes_shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_17__["EvaluacionSolicitud"]();
        this.lista_idevaluacionSolicitudConteoCelularEvaluacionSolicitud = [];
        this.idevaluacionSolicitudConteoCelularEvaluacionSolicitudEditar = false;
        this.evaluacionSolicitud = new _evaluacion_solicitudes_shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_17__["EvaluacionSolicitud"]();
        this.conteoCelularDerecha = new _shared_conteo_celular__WEBPACK_IMPORTED_MODULE_7__["ConteoCelular"]();
        this.desgloseCorneaIzquierda = new _desglose_corneas_shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_2__["DesgloseCornea"]();
        this.desgloseCorneaDerecha = new _desglose_corneas_shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_2__["DesgloseCornea"]();
        this.listaDesgloseCorneaIzquierda = [];
        this.listaDesgloseCorneaDerecha = [];
        this.modalActive = false;
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                this.obtenerPermisos();
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
            }
        }
        this.conteoCelularSeleccion = this.conteoCelularCancelar = this.conteoCelularGuardar = this.conteoCelularBuscar = this.conteoCelularAgregar = this.conteoCelularActualizar = this.conteoCelularEliminar = false;
        this.configuracionConteoCelular = new _shared_configurar_conteo_celular__WEBPACK_IMPORTED_MODULE_9__["ConfigurarConteoCelular"]();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovConteoCelularUsuario, this);
        this.evaluacionSolicitud_service.getEvaluacionSolicitudesActivos(this.evtGetIdevaluacionSolicitudConteoCelularEvaluacionSolicitud, this);
        this.limpiarCampos();
    }
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "conteoCelularOcultarConjuntos", {
        get: function () {
            if (this.ocultarConjuntosConteoCelular)
                return true;
            return !this.conteoCelularActualizar;
        },
        enumerable: true,
        configurable: true
    });
    ConteoCelularCrudComponent.prototype.ngOnChanges = function (changes) {
        if (changes.idEvaluacion && changes.idEvaluacion.currentValue != null) {
            this.viewModeEvaluacion = true;
            this.actualizaConteo(changes.idEvaluacion.currentValue);
        }
        if (changes.conteoCelular &&
            changes.conteoCelular.currentValue == null &&
            this.conteoCelular == null)
            this.conteoCelular = new _shared_conteo_celular__WEBPACK_IMPORTED_MODULE_7__["ConteoCelular"]();
        else {
            var aux = new _shared_conteo_celular__WEBPACK_IMPORTED_MODULE_7__["ConteoCelular"]();
            if (this.conteoCelular)
                aux.from(this.conteoCelular);
            if (aux.isOk && aux.isOk()) {
                this.accion = 7;
                this.conteoCelularBuscar = this.conteoCelularAgregar = this.conteoCelularSeleccion = this.conteoCelularGuardar = false;
                this.conteoCelularActualizar = this.conteoCelularEliminar = this.conteoCelularCancelar = true;
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
                this.conteoCelularSeleccion = this.conteoCelularAgregar = this.conteoCelularBuscar = this.conteoCelularActualizar = this.conteoCelularEliminar = false;
                this.conteoCelularGuardar = this.conteoCelularCancelar = true;
            }
        }
    };
    ConteoCelularCrudComponent.prototype.obtenerPermisos = function () {
        var id_expe = -1;
        var tablas = [
            "conteoCelular",
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
            "causaMuerte"
        ];
        var parametros = {
            id_usu: this.usuariologueado.id,
            tablas: tablas,
            id_exp: id_expe
        };
        this.conteoCelularPermisos = false;
        this.coreService.permisos(parametros, this.evtCorePermisos, this);
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    ConteoCelularCrudComponent.prototype.evtCorePermisos = function (permisos, obj) {
        obj.conteoCelularPermisos = true;
        if (permisos &&
            permisos.conteoCelular &&
            permisos.conteoCelular.PermisoAtributo &&
            permisos.conteoCelular.PermisoAtributo.length > 0) {
            obj.permisosAtributos = permisos.conteoCelular.PermisoAtributo;
        }
        else {
            obj.usuariologueado = undefined;
        }
        if (permisos &&
            permisos.conteoCelular &&
            permisos.conteoCelular.PermisoConjunto &&
            permisos.conteoCelular.PermisoConjunto.length > 0) {
            obj.permisosConjuntos = permisos.conteoCelular.PermisoConjunto;
        }
        if (permisos &&
            permisos.conteoCelular &&
            permisos.conteoCelular.PermisoTabla &&
            permisos.conteoCelular.PermisoTabla.length > 0) {
            obj.permisosTabla = permisos.conteoCelular.PermisoTabla[0];
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
            permisos.evaluacionSolicitud &&
            permisos.evaluacionSolicitud.PermisoAtributo &&
            permisos.evaluacionSolicitud.PermisoAtributo.length > 0) {
            //obj.configuracion$1=
            permisos.evaluacionSolicitud.PermisoAtributo;
            obj.permisosAtributos.push(permisos.evaluacionSolicitud.PermisoAtributo);
        }
        if (permisos &&
            permisos.evaluacionSolicitud &&
            permisos.evaluacionSolicitud.PermisoAtributo &&
            permisos.evaluacionSolicitud.PermisoConjunto.length > 0) {
            obj.permisosConjuntos.push(permisos.evaluacionSolicitud.PermisoConjunto);
        }
        if (permisos &&
            permisos.evaluacionSolicitud &&
            permisos.evaluacionSolicitud.PermisoTabla &&
            permisos.evaluacionSolicitud.PermisoTabla.length > 0) {
            //obj.configuracion$1=
            permisos.evaluacionSolicitud.PermisoTabla[0];
            // obj.permisosTabla.push(permisos.evaluacionSolicitud.PermisoTabla[0]);
        }
        if (obj.configurarTablasConjuntos)
            obj.configurarTablasConjuntos();
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    ConteoCelularCrudComponent.prototype.evtGetUsuarioUltMovConteoCelularUsuario = function (lista_usuarioUltMovConteoCelularUsuario, obj) {
        obj.lista_usuarioUltMovConteoCelularUsuario = lista_usuarioUltMovConteoCelularUsuario;
        obj.actualizar_UsuarioUltMovConteoCelularUsuario();
    };
    ConteoCelularCrudComponent.prototype.evtGetIdevaluacionSolicitudConteoCelularEvaluacionSolicitud = function (lista_idevaluacionSolicitudConteoCelularEvaluacionSolicitud, obj) {
        obj.lista_idevaluacionSolicitudConteoCelularEvaluacionSolicitud = lista_idevaluacionSolicitudConteoCelularEvaluacionSolicitud;
        obj.actualizar_IdevaluacionSolicitudConteoCelularEvaluacionSolicitud();
    };
    ConteoCelularCrudComponent.prototype.actualizar_UsuarioUltMovConteoCelularUsuario = function () {
        if (this.usuarioUltMovConteoCelularUsuarioEleccion)
            for (var _i = 0, _a = this.lista_usuarioUltMovConteoCelularUsuario; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.usuarioUltMovConteoCelularUsuarioEleccion.id) {
                    this.usuarioUltMovConteoCelularUsuarioEleccion = eleme;
                    break;
                }
            }
    };
    ConteoCelularCrudComponent.prototype.actualizar_IdevaluacionSolicitudConteoCelularEvaluacionSolicitud = function () {
        if (this.idevaluacionSolicitudConteoCelularEvaluacionSolicitudEleccion)
            for (var _i = 0, _a = this
                .lista_idevaluacionSolicitudConteoCelularEvaluacionSolicitud; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id ==
                    this.idevaluacionSolicitudConteoCelularEvaluacionSolicitudEleccion.id) {
                    this.idevaluacionSolicitudConteoCelularEvaluacionSolicitudEleccion = eleme;
                    break;
                }
            }
    };
    ConteoCelularCrudComponent.prototype.ngDoCheck = function () { };
    ConteoCelularCrudComponent.prototype.validaAcciones = function (vall) {
        return (this.accion == 0 ||
            this.accion == 1 ||
            this.accion == 4 ||
            this.accion == 6 ||
            (this.accion == 7 && vall) ||
            (this.accion == 2 && vall) ||
            (this.accion == 3 && vall) ||
            (this.accion == 5 && vall));
    };
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaId", {
        get: function () {
            return this.validosConteoCelular["id"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaIds", {
        get: function () {
            return this.validosConteoCelular["id"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaIdnumeroCelula", {
        get: function () {
            return this.validosConteoCelular["idnumeroCelula"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaFechaBaja", {
        get: function () {
            return this.validosConteoCelular["fechaBaja"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaDiscontinuidad", {
        get: function () {
            return this.validosConteoCelular["discontinuidad"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaNormalMenor33", {
        get: function () {
            return this.validosConteoCelular["normalMenor33"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaNumeroCampo", {
        get: function () {
            return this.validosConteoCelular["numeroCampo"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaGutta", {
        get: function () {
            return this.validosConteoCelular["gutta"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaHexagonalidad", {
        get: function () {
            return this.validosConteoCelular["hexagonalidad"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaResponsableMicroscopio", {
        get: function () {
            return this.validosConteoCelular["responsableMicroscopio"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaPaquimetria", {
        get: function () {
            return this.validosConteoCelular["paquimetria"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaHomogeneidad", {
        get: function () {
            return this.validosConteoCelular["homogeneidad"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaZonaCelular", {
        get: function () {
            return this.validosConteoCelular["zonaCelular"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaCvtamano", {
        get: function () {
            return this.validosConteoCelular["cvtamano"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaOtraDescripcion", {
        get: function () {
            return this.validosConteoCelular["otraDescripcion"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaPlemorfismo", {
        get: function () {
            return this.validosConteoCelular["plemorfismo"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaNumeroCelular", {
        get: function () {
            return this.validosConteoCelular["numeroCelular"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaOtra", {
        get: function () {
            return this.validosConteoCelular["otra"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaPliegue", {
        get: function () {
            return this.validosConteoCelular["pliegue"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaFechaRegistro", {
        get: function () {
            return this.validosConteoCelular["fechaRegistro"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaMayor60", {
        get: function () {
            return this.validosConteoCelular["mayor60"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaDeposito", {
        get: function () {
            return this.validosConteoCelular["deposito"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaObservacionCd", {
        get: function () {
            return this.validosConteoCelular["observacionCd"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaIdpaquimetria", {
        get: function () {
            return this.validosConteoCelular["idpaquimetria"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaValoracionCi", {
        get: function () {
            return this.validosConteoCelular["valoracionCi"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaPolimegatismo", {
        get: function () {
            return this.validosConteoCelular["polimegatismo"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaFechaActualizacion", {
        get: function () {
            return this.validosConteoCelular["fechaActualizacion"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaEstriaRotura", {
        get: function () {
            return this.validosConteoCelular["estriaRotura"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaValoracionFinalEndotelioCd", {
        get: function () {
            return this.validosConteoCelular["valoracionFinalEndotelioCd"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaValoracionCd", {
        get: function () {
            return this.validosConteoCelular["valoracionCd"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaValoracionFinalEndotelioCi", {
        get: function () {
            return this.validosConteoCelular["valoracionFinalEndotelioCi"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaStatus", {
        get: function () {
            return this.validosConteoCelular["status"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaUsuarioUltMov", {
        get: function () {
            return this.validosConteoCelular["usuarioUltMov"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaIdevaluacionSolicitud", {
        get: function () {
            return this.validosConteoCelular["idevaluacionSolicitud"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "validaTodosc", {
        get: function () {
            var salida = this.validaId &&
                this.validaIdnumeroCelula &&
                this.validaFechaBaja &&
                this.validaDiscontinuidad &&
                this.validaNormalMenor33 &&
                this.validaNumeroCampo &&
                this.validaGutta &&
                this.validaHexagonalidad &&
                this.validaResponsableMicroscopio &&
                this.validaPaquimetria &&
                this.validaHomogeneidad &&
                this.validaZonaCelular &&
                this.validaCvtamano &&
                this.validaOtraDescripcion &&
                this.validaPlemorfismo &&
                this.validaNumeroCelular &&
                this.validaOtra &&
                this.validaPliegue &&
                this.validaFechaRegistro &&
                this.validaMayor60 &&
                this.validaDeposito &&
                this.validaObservacionCd &&
                this.validaIdpaquimetria &&
                this.validaValoracionCi &&
                this.validaPolimegatismo &&
                this.validaFechaActualizacion &&
                this.validaEstriaRotura &&
                this.validaValoracionFinalEndotelioCd &&
                this.validaValoracionCd &&
                this.validaValoracionFinalEndotelioCi &&
                this.validaStatus &&
                this.validaUsuarioUltMov &&
                this.validaIdevaluacionSolicitud;
            if (salida != this.validaciones)
                this.validacionesChange.emit(salida);
            return salida;
        },
        enumerable: true,
        configurable: true
    });
    ConteoCelularCrudComponent.prototype.obtenerConteoCelulares = function (lista, objeto) {
        objeto.lista_conteoCelulares = lista;
        if (lista && lista.length > 0) {
            objeto.conteoCelular.from(lista[0]);
            objeto.evtConteoCelularSeleccionado(objeto.conteoCelular);
            if (objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    };
    ConteoCelularCrudComponent.prototype.evn_lazy_conteoCelular = function (conteoCelular, objeto) {
        objeto.conteoCelular = conteoCelular;
        objeto.conteoCelularChange.emit(objeto.conteoCelular);
        objeto.configuarCombosObjetos();
        objeto.conteoCelularLazy = true;
    };
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "datosReporteConteoCelularWord", {
        /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
        get: function () {
            return !(this.conteoCelularActualizar &&
                this.conteoCelularLazy &&
                this.globalesService.preporteWord(this, "conteoCelular"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "datosReporteConteoCelularExcel", {
        get: function () {
            return !(this.conteoCelularActualizar &&
                this.conteoCelularLazy &&
                this.globalesService.preporteExcel(this, "conteoCelular"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConteoCelularCrudComponent.prototype, "datosReporteConteoCelularPdf", {
        get: function () {
            return !(this.conteoCelularActualizar &&
                this.conteoCelularLazy &&
                this.globalesService.preportePdf(this, "conteoCelular"));
        },
        enumerable: true,
        configurable: true
    });
    ConteoCelularCrudComponent.prototype.reporteConteoCelularExcel = function (form) {
        var nombre = "ConteoCelular.xlsx";
        var path = "file/reporteExcel";
        var parametros = {};
        parametros["entradas"] = { conteoCelular: this.conteoCelular };
        parametros["plantilla"] = "ConteoCelular.xlsx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    ConteoCelularCrudComponent.prototype.reporteConteoCelularWord = function (form) {
        var nombre = "ConteoCelular.docx";
        var path = "file/reporteWord";
        var parametros = {};
        parametros["entradas"] = { conteoCelular: this.conteoCelular };
        parametros["plantilla"] = "ConteoCelular.docx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    ConteoCelularCrudComponent.prototype.reporteConteoCelularPdf = function (form) {
        var nombre = "ConteoCelular.docx";
        var path = "file/reportePdf";
        var parametros = {};
        parametros["entradas"] = { conteoCelular: this.conteoCelular };
        parametros["plantilla"] = "ConteoCelular.docx";
        parametros["salida"] = "ConteoCelular.pdf";
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */
    ConteoCelularCrudComponent.prototype.accionesBuscar = function () {
        this.accion = 1;
        this.conteoCelularGuardar = this.conteoCelularActualizar = this.conteoCelularEliminar = false;
        this.conteoCelularBuscar = this.conteoCelularAgregar = this.conteoCelularCancelar = true;
    };
    ConteoCelularCrudComponent.prototype.buscarConteoCelularFront = function (form) {
        this.accionesBuscar();
        var vconteoCelular = new _shared_conteo_celular__WEBPACK_IMPORTED_MODULE_7__["ConteoCelular"]();
        vconteoCelular.from(this.conteoCelular);
        this.configuracionConteoCelular = new _shared_configurar_conteo_celular__WEBPACK_IMPORTED_MODULE_9__["ConfigurarConteoCelular"]();
        this.configuracionConteoCelular.permisosTabla = {
            tabla: "conteoCelular",
            permiso: 8
        };
        this.configuracionConteoCelular.titulo =
            "Buscar " + this.permisosTabla.etiqueta;
        this.configuracionConteoCelular.conteoCelularConsulta = vconteoCelular;
        this.permisosacciones();
        $("#buscarConteoCelular_" + this.nombre).modal();
    };
    ConteoCelularCrudComponent.prototype.buscarConteoCelularBack = function (conteoCelular) {
        this.conteoCelular_service.getConteoCelularesByDto(conteoCelular, this.eventoSrvConteoCelularBuscar, this);
    };
    ConteoCelularCrudComponent.prototype.eventoSrvConteoCelularBuscar = function (lista, objeto) {
        objeto.lista_conteoCelulares = lista;
        if (lista && lista.length > 0) {
            objeto.conteoCelular = lista[0];
            objeto.conteoCelularLazy = false;
            objeto.conteoCelular_service.lazyConteoCelular(objeto.conteoCelular, objeto.evn_lazy_conteoCelular, objeto);
        }
    };
    ConteoCelularCrudComponent.prototype.guardarConteoCelularFront = function (form) {
        this.accion = 5; // ********************************************************************************************** maquina
        this.guardarConteoCelularBack(this.conteoCelular);
        this.accionesBuscar(); // ********************************************************************************* maquina
        this.permisosacciones();
    };
    ConteoCelularCrudComponent.prototype.guardarConteoCelularBack = function (conteoCelular) {
        if (conteoCelular.usuarioUltMov == null)
            conteoCelular.usuarioUltMov = this.globalesService.dameUsuario();
        if (conteoCelular.status == null || conteoCelular.status == "")
            conteoCelular.status = 1;
        this.conteoCelular_service.guardarConteoCelular(conteoCelular, this.eventoSrvConteoCelularGuardar, this);
    };
    ConteoCelularCrudComponent.prototype.eventoSrvConteoCelularGuardar = function (conteoCelular, obj) {
        obj.conteoCelular = conteoCelular;
        bootbox.alert("Datos guardados con éxito");
        var aux = new _shared_conteo_celular__WEBPACK_IMPORTED_MODULE_7__["ConteoCelular"]();
        aux.from(conteoCelular);
        obj.conteoCelularChange.emit(aux);
        obj.conteoCelularTablaChange.emit(aux);
        obj.conteoCelularLazy = false;
        obj.conteoCelular_service.lazyConteoCelular(obj.conteoCelular, obj.evn_lazy_conteoCelular, obj);
        obj.accionesActualizar();
    };
    ConteoCelularCrudComponent.prototype.actualizarConteoCelularFront = function (form) {
        this.accion = 3; // ************************************************************************************* maquina
        this.actualizarConteoCelularBack(this.conteoCelular);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    };
    ConteoCelularCrudComponent.prototype.actualizarConteoCelularBack = function (conteoCelular) {
        conteoCelular.usuarioUltMov = this.globalesService.dameUsuario();
        this.conteoCelular_service.actualizarConteoCelular(conteoCelular, this.eventoSrvConteoCelularActualizar, this);
    };
    ConteoCelularCrudComponent.prototype.eventoSrvConteoCelularActualizar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux = new _shared_conteo_celular__WEBPACK_IMPORTED_MODULE_7__["ConteoCelular"]();
            // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.conteoCelularLazy = false;
            obj.conteoCelular_service.lazyConteoCelular(obj.conteoCelular, obj.evn_lazy_conteoCelular, obj);
            // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.conteoCelular);
            obj.conteoCelularChange.emit(aux);
            obj.conteoCelularTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    };
    ConteoCelularCrudComponent.prototype.eliminarConteoCelularFront = function (form) {
        this.accion = 4;
        this.eliminarConteoCelularBack(this.conteoCelular);
        this.permisosacciones();
        this.accionesBuscar();
    };
    ConteoCelularCrudComponent.prototype.eliminarConteoCelularBack = function (conteoCelular) {
        conteoCelular.usuarioUltMov = this.globalesService.dameUsuario();
        this.conteoCelular_service.eliminarConteoCelular(conteoCelular, this.eventoSrvConteoCelularEliminar, this);
    };
    ConteoCelularCrudComponent.prototype.eventoSrvConteoCelularEliminar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.conteoCelular = new _shared_conteo_celular__WEBPACK_IMPORTED_MODULE_7__["ConteoCelular"]();
            obj.conteoCelularChange.emit(obj.conteoCelular);
            obj.conteoCelularTablaChange.emit(obj.conteoCelular);
            obj.limpiarCampos();
        }
    };
    ConteoCelularCrudComponent.prototype.cancelarConteoCelularFront = function (form) {
        this.accion = 6;
        this.conteoCelularCancelar = this.conteoCelularGuardar = this.conteoCelularActualizar = this.conteoCelularEliminar = false;
        this.conteoCelularBuscar = this.conteoCelularAgregar = true;
        this.permisosacciones();
    };
    ConteoCelularCrudComponent.prototype.nuevoConteoCelularFront = function (form) {
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
                this.conteoCelularSeleccion = this.conteoCelularAgregar = this.conteoCelularBuscar = this.conteoCelularActualizar = this.conteoCelularEliminar = false;
                this.conteoCelularGuardar = this.conteoCelularCancelar = true;
            }.bind(this)
        });
    };
    ConteoCelularCrudComponent.prototype.configuarCombosObjetos = function () {
        this.lista_usuarioUltMovConteoCelularUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovConteoCelularUsuario, this);
        this.lista_idevaluacionSolicitudConteoCelularEvaluacionSolicitud = [];
        this.evaluacionSolicitud_service.getEvaluacionSolicitudesActivos(this.evtGetIdevaluacionSolicitudConteoCelularEvaluacionSolicitud, this);
    };
    ConteoCelularCrudComponent.prototype.configurarTablasConjuntos = function () { };
    ConteoCelularCrudComponent.prototype.accionesActualizar = function () {
        this.accion = 7;
        this.conteoCelularBuscar = this.conteoCelularAgregar = this.conteoCelularSeleccion = this.conteoCelularGuardar = false;
        this.conteoCelularActualizar = this.conteoCelularEliminar = this.conteoCelularCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    };
    ConteoCelularCrudComponent.prototype.evtConteoCelularSeleccionado = function (conteoCelular) {
        this.conteoCelular = new _shared_conteo_celular__WEBPACK_IMPORTED_MODULE_7__["ConteoCelular"]();
        this.conteoCelular.from(conteoCelular);
        this.conteoCelularLazy = false;
        this.conteoCelular_service.lazyConteoCelular(this.conteoCelular, this.evn_lazy_conteoCelular, this);
        this.accion = 7;
        this.conteoCelularBuscar = this.conteoCelularAgregar = this.conteoCelularSeleccion = this.conteoCelularGuardar = false;
        this.conteoCelularActualizar = this.conteoCelularEliminar = this.conteoCelularCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarConteoCelular_" + this.nombre).modal("hide");
    };
    ConteoCelularCrudComponent.prototype.ngOnInit = function () {
        this.accion = 0; // *********************************************************************************************************** maquina
        this.conteoCelularSeleccion = this.conteoCelularCancelar = this.conteoCelularGuardar = this.conteoCelularActualizar = this.conteoCelularEliminar = false; // ******************** maquina
        this.conteoCelularBuscar = this.conteoCelularAgregar = true; // ************************************************************************************* maquina
        this.permisosacciones();
        var id = this.activatedRoute.snapshot.paramMap.get("id");
        this.actualizaConteo(id);
    };
    ConteoCelularCrudComponent.prototype.actualizaConteo = function (id) {
        if (id != null) {
            this.evaluacionSolicitud.id = id;
            this.evaluacionSolicitud_service.lazyEvaluacionSolicitud(this.evaluacionSolicitud, this.evn_lazy_evaluacionSolicitud, this);
        }
    };
    ConteoCelularCrudComponent.prototype.permisosacciones = function () {
        if (this.conteoCelularBuscar)
            this.conteoCelularBuscar = this.globalesService.pbuscar(this, "conteoCelular");
        if (this.conteoCelularActualizar)
            this.conteoCelularActualizar =
                this.globalesService.pacutalizar(this, "conteoCelular") &&
                    this.globalesService.pbuscar(this, "conteoCelular");
        if (this.conteoCelularEliminar)
            this.conteoCelularEliminar =
                this.globalesService.peliminar(this, "conteoCelular") &&
                    this.globalesService.pbuscar(this, "conteoCelular");
        if (this.conteoCelularAgregar)
            this.conteoCelularAgregar = this.globalesService.pagregar(this, "conteoCelular");
    };
    ConteoCelularCrudComponent.prototype.permisosaccionesInicio = function () {
        this.conteoCelularSeleccion = this.conteoCelularCancelar = this.conteoCelularGuardar = this.conteoCelularActualizar = this.conteoCelularEliminar = false; // *************************** maquina
        this.conteoCelularBuscar = this.conteoCelularAgregar = true; // ************************************************************************************* maquina
        this.accion = 0; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    ConteoCelularCrudComponent.prototype.limpiarCampos = function () {
        this.conteoCelular = new _shared_conteo_celular__WEBPACK_IMPORTED_MODULE_7__["ConteoCelular"]();
        this.usuarioUltMovConteoCelularUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_10__["Usuario"]();
        this.idevaluacionSolicitudConteoCelularEvaluacionSolicitudEleccion = new _evaluacion_solicitudes_shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_17__["EvaluacionSolicitud"]();
        this.conteoCelularChange.emit(this.conteoCelular);
        this.conteoCelularSeleccion = this.conteoCelularCancelar = this.conteoCelularGuardar = this.conteoCelularActualizar = this.conteoCelularEliminar = false; // *************************** maquina
        this.conteoCelularBuscar = this.conteoCelularAgregar = true; // ************************************************************************************* maquina
        this.accion = 6; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    ConteoCelularCrudComponent.prototype.evn_lazy_evaluacionSolicitud = function (evaluacionSolicitud, objeto) {
        (evaluacionSolicitud);
        objeto.evaluacionSolicitud = evaluacionSolicitud;
        if (evaluacionSolicitud.conteosCelular) {
            evaluacionSolicitud.conteosCelular.forEach(function (element) {
                if (element.tipoCornea === 1) {
                    objeto.conteoCelular = element;
                }
                else if (element.tipoCornea === 2) {
                    objeto.conteoCelularDerecha = element;
                }
            });
        }
        if (evaluacionSolicitud.desgloseCorneas) {
            objeto.listaDesgloseCorneaIzquierda = [];
            objeto.listaDesgloseCorneaDerecha = [];
            evaluacionSolicitud.desgloseCorneas.forEach(function (element) {
                if (element.tipoCornea === 1) {
                    objeto.listaDesgloseCorneaIzquierda.push(element);
                }
                else {
                    objeto.listaDesgloseCorneaDerecha.push(element);
                }
            });
        }
    };
    ConteoCelularCrudComponent.prototype.doSave = function () {
        bootbox.confirm({
            message: "¿Desea hacer un guardado parcial?",
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
                    var conteos = [];
                    var isUpdate = false;
                    if (this.evaluacionSolicitud.idrecepcionSolicitudEvaluacion.idbtcCd) {
                        this.conteoCelularDerecha.numeroCampo = +this.conteoCelularDerecha
                            .numeroCampo;
                        this.conteoCelularDerecha.tipoCornea = 2;
                        this.conteoCelularDerecha.idevaluacionSolicitud = {};
                        this.conteoCelularDerecha.idevaluacionSolicitud.id = this.evaluacionSolicitud.id;
                        this.conteoCelularDerecha.usuarioUltMov = {};
                        this.conteoCelularDerecha.usuarioUltMov.id = this.globalesService.dameUsuario().id;
                        if (this.conteoCelularDerecha.mayor60 === true) {
                            this.conteoCelularDerecha.mayor60 = 1;
                        }
                        else {
                            this.conteoCelularDerecha.mayor60 = 0;
                        }
                        if (this.conteoCelularDerecha.id) {
                            isUpdate = true;
                        }
                        if (this.conteoCelularDerecha.normalMenor33 === true) {
                            this.conteoCelularDerecha.normalMenor33 = 1;
                        }
                        else {
                            this.conteoCelularDerecha.normalMenor33 = 0;
                        }
                        if (this.conteoCelularDerecha.gutta === true) {
                            this.conteoCelularDerecha.gutta = 1;
                        }
                        else {
                            this.conteoCelularDerecha.gutta = 0;
                        }
                        if (this.conteoCelularDerecha.pliegue === true) {
                            this.conteoCelularDerecha.pliegue = 1;
                        }
                        else {
                            this.conteoCelularDerecha.pliegue = 0;
                        }
                        if (this.conteoCelularDerecha.estriaRotura === true) {
                            this.conteoCelularDerecha.estriaRotura = 1;
                        }
                        else {
                            this.conteoCelularDerecha.estriaRotura = 0;
                        }
                        if (this.conteoCelularDerecha.deposito === true) {
                            this.conteoCelularDerecha.deposito = 1;
                        }
                        else {
                            this.conteoCelularDerecha.deposito = 0;
                        }
                        conteos.push(this.conteoCelularDerecha);
                    }
                    if (this.evaluacionSolicitud.idrecepcionSolicitudEvaluacion.idbtcCi) {
                        this.conteoCelular.numeroCampo = +this.conteoCelular.numeroCampo;
                        this.conteoCelular.tipoCornea = 1;
                        this.conteoCelular.idevaluacionSolicitud = {};
                        this.conteoCelular.idevaluacionSolicitud.id = this.evaluacionSolicitud.id;
                        this.conteoCelular.usuarioUltMov = {};
                        this.conteoCelular.usuarioUltMov.id = this.globalesService.dameUsuario().id;
                        if (this.conteoCelular.id) {
                            isUpdate = true;
                        }
                        if (this.conteoCelular.mayor60 === true) {
                            this.conteoCelular.mayor60 = 1;
                        }
                        else {
                            this.conteoCelular.mayor60 = 0;
                        }
                        if (this.conteoCelular.normalMenor33 === true) {
                            this.conteoCelular.normalMenor33 = 1;
                        }
                        else {
                            this.conteoCelular.normalMenor33 = 0;
                        }
                        if (this.conteoCelular.gutta === true) {
                            this.conteoCelular.gutta = 1;
                        }
                        else {
                            this.conteoCelular.gutta = 0;
                        }
                        if (this.conteoCelular.pliegue === true) {
                            this.conteoCelular.pliegue = 1;
                        }
                        else {
                            this.conteoCelular.pliegue = 0;
                        }
                        if (this.conteoCelular.estriaRotura === true) {
                            this.conteoCelular.estriaRotura = 1;
                        }
                        else {
                            this.conteoCelular.estriaRotura = 0;
                        }
                        if (this.conteoCelular.deposito === true) {
                            this.conteoCelular.deposito = 1;
                        }
                        else {
                            this.conteoCelular.deposito = 0;
                        }
                        conteos.push(this.conteoCelular);
                    }
                    (conteos);
                    if (isUpdate) {
                        this.conteoCelular_service.actualizarListaConteoCelular(conteos, this.evn_guardarConteos, this);
                    }
                    else {
                        this.conteoCelular_service.guardarListaConteoCelular(conteos, this.evn_guardarConteos, this);
                    }
                }
            }.bind(this)
        });
    };
    ConteoCelularCrudComponent.prototype.evn_guardarConteos = function (ev, objeto) {
        var id = objeto.activatedRoute.snapshot.paramMap.get("id");
        if (id) {
            var ev_1 = new _evaluacion_solicitudes_shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_17__["EvaluacionSolicitud"]();
            ev_1.id = id;
            objeto.evaluacionSolicitud_service.lazyEvaluacionSolicitud(ev_1, objeto.evn_lazy_evaluacionSolicitud, objeto);
        }
        bootbox.alert("Datos guardados con éxito");
    };
    ConteoCelularCrudComponent.prototype.saveDesgloseCorneaIzquierda = function () {
        this.desgloseCorneaIzquierda.tipoCornea = 1;
        this.desgloseCorneaIzquierda.idevaluacionSolicitud = {};
        this.desgloseCorneaIzquierda.idevaluacionSolicitud.id = this.evaluacionSolicitud.id;
        this.desgloseCorneaIzquierda.idevaluacionSolicitud.idrecepcionSolicitudEvaluacion = {
            idbtcCi: this.evaluacionSolicitud.idrecepcionSolicitudEvaluacion.idbtcCi
        };
        this.desgloseCorneaIzquierda.usuarioUltMov = {};
        this.desgloseCorneaIzquierda.usuarioUltMov.id = this.globalesService.dameUsuario().id;
        this.desgloseCorneaService.guardarDesgloseCornea(this.desgloseCorneaIzquierda, this.evn_guardarDesglose, this);
        (this.desgloseCorneaIzquierda);
        this.desgloseCorneaIzquierda = new _desglose_corneas_shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_2__["DesgloseCornea"]();
    };
    ConteoCelularCrudComponent.prototype.saveDesgloseCorneaDerecha = function () {
        this.desgloseCorneaDerecha.tipoCornea = 2;
        this.desgloseCorneaDerecha.idevaluacionSolicitud = {};
        this.desgloseCorneaDerecha.idevaluacionSolicitud.id = this.evaluacionSolicitud.id;
        this.desgloseCorneaDerecha.idevaluacionSolicitud.idrecepcionSolicitudEvaluacion = {
            idbtcCd: this.evaluacionSolicitud.idrecepcionSolicitudEvaluacion.idbtcCd
        };
        this.desgloseCorneaDerecha.usuarioUltMov = {};
        this.desgloseCorneaDerecha.usuarioUltMov.id = this.globalesService.dameUsuario().id;
        this.desgloseCorneaService.guardarDesgloseCornea(this.desgloseCorneaDerecha, this.evn_guardarDesglose, this);
        (this.desgloseCorneaDerecha);
        this.desgloseCorneaDerecha = new _desglose_corneas_shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_2__["DesgloseCornea"]();
    };
    ConteoCelularCrudComponent.prototype.evn_guardarDesglose = function (ev, objeto) {
        var id = objeto.activatedRoute.snapshot.paramMap.get("id");
        if (id) {
            var ev_2 = new _evaluacion_solicitudes_shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_17__["EvaluacionSolicitud"]();
            ev_2.id = id;
            objeto.evaluacionSolicitud_service.lazyEvaluacionSolicitud(ev_2, objeto.evn_lazy_evaluacionSolicitud, objeto);
        }
        bootbox.alert("Id generado con éxito");
    };
    ConteoCelularCrudComponent.prototype.doEnviar = function () {
        bootbox.confirm({
            message: "¿Deseas enviar la solicitud de evaluación de tejido?",
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
                    var almacenEvaluacion = new _almacen_evaluaciones_shared_almacen_evaluacion__WEBPACK_IMPORTED_MODULE_23__["AlmacenEvaluacion"]();
                    almacenEvaluacion.evaluacionSolicitud = new _evaluacion_solicitudes_shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_17__["EvaluacionSolicitud"]();
                    almacenEvaluacion.evaluacionSolicitud.id = this.evaluacionSolicitud.id;
                    almacenEvaluacion.usuarioUltMov = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_10__["Usuario"]();
                    almacenEvaluacion.usuarioUltMov.id = this.globalesService.dameUsuario().id;
                    almacenEvaluacion.status = 1;
                    almacenEvaluacion.estatusProceso = 1;
                    this.almacenEvaluacionService.guardarAlmacenEvaluacion(almacenEvaluacion, this.evn_guardarAlmacen, this);
                }
            }.bind(this)
        });
    };
    ConteoCelularCrudComponent.prototype.evn_guardarAlmacen = function (ev, objeto) {
        var id = objeto.activatedRoute.snapshot.paramMap.get("id");
        if (id) {
            var ev_3 = new _evaluacion_solicitudes_shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_17__["EvaluacionSolicitud"]();
            ev_3.id = id;
            objeto.evaluacionSolicitud_service.lazyEvaluacionSolicitud(ev_3, objeto.evn_lazy_evaluacionSolicitud, objeto);
        }
        bootbox.alert("Solicitud Enviada a Almacén.");
    };
    ConteoCelularCrudComponent.prototype.doOpenModalEnviarNotificacion = function () {
        this.tipoNotificacion = null;
        this.modalActive = true;
    };
    ConteoCelularCrudComponent.prototype.doEnviarNotificacion = function () {
        this.modalActive = false;
        var notificacion = { tipoNotificacion: this.tipoNotificacion, evaluacionSolicitud: this.evaluacionSolicitud };
        this.conteoCelular_service.notificacionHospitalProcurador(notificacion, this.evn_notificacionHospital, this);
    };
    ConteoCelularCrudComponent.prototype.closeModal = function () {
        this.modalActive = false;
    };
    ConteoCelularCrudComponent.prototype.evn_notificacionHospital = function (ev, objeto) {
        bootbox.alert("Notificación enviada.");
    };
    ConteoCelularCrudComponent.prototype.doImprimir = function () {
        var path = 'file/registroRecepcion';
        var otros = 'registroRecepcion';
        var parametros = { id: this.evaluacionSolicitud.idrecepcionSolicitudEvaluacion.idsolicitudEvaluacionCorneal.id, tipoCornea: 2 };
        var nombre = 'registroRecepcion.pdf';
        this.fileservice.downloadFile(nombre, otros, path, parametros);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", Boolean)
    ], ConteoCelularCrudComponent.prototype, "ocultarConjuntosConteoCelular", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", Object)
    ], ConteoCelularCrudComponent.prototype, "idEvaluacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", String)
    ], ConteoCelularCrudComponent.prototype, "nombre", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", Boolean)
    ], ConteoCelularCrudComponent.prototype, "validaciones", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        __metadata("design:type", Object)
    ], ConteoCelularCrudComponent.prototype, "validacionesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", _shared_conteo_celular__WEBPACK_IMPORTED_MODULE_7__["ConteoCelular"])
    ], ConteoCelularCrudComponent.prototype, "conteoCelular", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        __metadata("design:type", Object)
    ], ConteoCelularCrudComponent.prototype, "conteoCelularChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        __metadata("design:type", Object)
    ], ConteoCelularCrudComponent.prototype, "conteoCelularTablaChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", Boolean)
    ], ConteoCelularCrudComponent.prototype, "viewModeEvaluacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", _shared_conteo_celular__WEBPACK_IMPORTED_MODULE_7__["ConteoCelular"])
    ], ConteoCelularCrudComponent.prototype, "conteoCelularDerecha", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", Array)
    ], ConteoCelularCrudComponent.prototype, "listaDesgloseCorneaIzquierda", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        __metadata("design:type", Array)
    ], ConteoCelularCrudComponent.prototype, "listaDesgloseCorneaDerecha", void 0);
    ConteoCelularCrudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-conteo-celular-crud",
            template: __webpack_require__(/*! ./conteo-celular-crud.component.html */ "./src/app/conteo-celulares/conteo-celular-crud/conteo-celular-crud.component.html"),
            styles: [__webpack_require__(/*! ./conteo-celular-crud.component.css */ "./src/app/conteo-celulares/conteo-celular-crud/conteo-celular-crud.component.css")],
            providers: [
                _shared_globales_service__WEBPACK_IMPORTED_MODULE_4__["GlobalesService"],
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_file_service__WEBPACK_IMPORTED_MODULE_6__["FileService"],
                _shared_conteo_celular_service__WEBPACK_IMPORTED_MODULE_8__["ConteoCelularService"],
                _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_11__["UsuarioService"],
                _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_15__["EntidadFederativaService"],
                _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_13__["PerfilRedIsssteService"],
                //                PerfilBtcService,
                _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_14__["HospitalService"],
                _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_12__["UsuarioBtcService"],
                _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_16__["PerfilService"],
                _evaluacion_solicitudes_shared_evaluacion_solicitud_service__WEBPACK_IMPORTED_MODULE_18__["EvaluacionSolicitudService"],
                _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_21__["CausaMuerteService"],
                _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_20__["SolicitudEvaluacionCornealService"],
                _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_19__["RecepcionSolicitudEvaluacionService"],
                _desglose_corneas_shared_desglose_cornea_service__WEBPACK_IMPORTED_MODULE_1__["DesgloseCorneaService"]
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_4__["GlobalesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
            _shared_file_service__WEBPACK_IMPORTED_MODULE_6__["FileService"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            _shared_conteo_celular_service__WEBPACK_IMPORTED_MODULE_8__["ConteoCelularService"],
            _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_11__["UsuarioService"],
            _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_12__["UsuarioBtcService"],
            _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_13__["PerfilRedIsssteService"],
            _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_14__["HospitalService"],
            _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_15__["EntidadFederativaService"],
            _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_16__["PerfilService"],
            _evaluacion_solicitudes_shared_evaluacion_solicitud_service__WEBPACK_IMPORTED_MODULE_18__["EvaluacionSolicitudService"],
            _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_19__["RecepcionSolicitudEvaluacionService"],
            _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_20__["SolicitudEvaluacionCornealService"],
            _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_21__["CausaMuerteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_22__["ActivatedRoute"],
            _desglose_corneas_shared_desglose_cornea_service__WEBPACK_IMPORTED_MODULE_1__["DesgloseCorneaService"],
            _almacen_evaluaciones_shared_almacen_evaluacion_service__WEBPACK_IMPORTED_MODULE_0__["AlmacenEvaluacionService"]])
    ], ConteoCelularCrudComponent);
    return ConteoCelularCrudComponent;
}());



/***/ }),

/***/ "./src/app/conteo-celulares/conteo-celular-list-kendo/conteo-celular-list-kendo.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/conteo-celulares/conteo-celular-list-kendo/conteo-celular-list-kendo.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Tipos para conteoCelular-list-kendo*/\nh3 { text-transform: uppercase;} \n"

/***/ }),

/***/ "./src/app/conteo-celulares/conteo-celular-list-kendo/conteo-celular-list-kendo.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/conteo-celulares/conteo-celular-list-kendo/conteo-celular-list-kendo.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!usuariologueado\" >\n    <div class=\"card\">\n        <div align=\"center\" class=\"card-header\"><h3>{{configuracionConteoCelular.titulo}}</h3></div>\n        <div class=\"card-body\">\n            <div id=\"div_conteoCelular_{{nombregrid}}\">\n                <div id=\"grid_conteoCelular_{{nombregrid}}\"></div>\n            </div>\n        </div>\t\t\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/conteo-celulares/conteo-celular-list-kendo/conteo-celular-list-kendo.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/conteo-celulares/conteo-celular-list-kendo/conteo-celular-list-kendo.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ConteoCelularListKendoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConteoCelularListKendoComponent", function() { return ConteoCelularListKendoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_conteo_celular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/conteo-celular */ "./src/app/conteo-celulares/shared/conteo-celular.ts");
/* harmony import */ var _shared_configurar_conteo_celular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/configurar-conteo-celular */ "./src/app/conteo-celulares/shared/configurar-conteo-celular.ts");
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
var ConteoCelularListKendoComponent = /** @class */ (function () {
    function ConteoCelularListKendoComponent(urlprovider, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    globalesService) {
        this.urlprovider = urlprovider;
        this.coreService = coreService;
        this.globalesService = globalesService;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "", "permiso": 0, "etiqueta": "" };
        this.conteoCelularSeleccionado = new _shared_conteo_celular__WEBPACK_IMPORTED_MODULE_3__["ConteoCelular"]();
        this.configuracionConteoCelular = new _shared_configurar_conteo_celular__WEBPACK_IMPORTED_MODULE_4__["ConfigurarConteoCelular"]();
        this.nombregrid = "";
        this.evtConteoCelularSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "conteoCelular";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'conteoCelular'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'conteoCelular'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }
    ConteoCelularListKendoComponent.prototype.actualizaTituloInicial = function () {
        if (this.configuracionConteoCelular.titulo.indexOf("Catálogo") != -1) {
            this.configuracionConteoCelular.titulo = "Catálogo " + this.permisosTabla.etiqueta;
        }
    };
    ConteoCelularListKendoComponent.prototype.ngOnChanges = function (changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionConteoCelular && changes.configuracionConteoCelular.currentValue &&
            (changes.configuracionConteoCelular.previousValue instanceof _shared_configurar_conteo_celular__WEBPACK_IMPORTED_MODULE_4__["ConfigurarConteoCelular"])) {
            if (changes.configuracionConteoCelular.currentValue.permisosAtributos)
                this.permisosAtributos = changes.configuracionConteoCelular.currentValue.permisosAtributos;
            if (changes.configuracionConteoCelular.currentValue.permisosTabla)
                this.permisosTabla = changes.configuracionConteoCelular.currentValue.permisosTabla;
            if ($("#grid_conteoCelular_" + this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    };
    ConteoCelularListKendoComponent.prototype.ngOnInit = function () {
        self["grid_conteoCelular_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var ejecutarpermisos = true;
        if (this.configuracionConteoCelular.permisosAtributos &&
            this.configuracionConteoCelular.permisosTabla)
            ejecutarpermisos = false;
        if (this.usuariologueado && ejecutarpermisos) {
            if (this.usuariologueado.perfil) {
                var tablas = [
                    "conteoCelular",
                ];
                var parametros = {
                    "id_usu": this.usuariologueado.id,
                    "tablas": tablas,
                    "id_exp": -1
                };
                this.coreService.permisos(parametros, this.evtCorePermisos, this);
                //                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                //                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'ConteoCelular'";
                //                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'ConteoCelular'";
                //                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'ConteoCelular'";
                //                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
                //                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
                //                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
            }
        }
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        if (this.configuracionConteoCelular.permisosAtributos)
            this.permisosAtributos = this.configuracionConteoCelular.permisosAtributos;
        if (this.configuracionConteoCelular.permisosTabla)
            this.permisosTabla = this.configuracionConteoCelular.permisosTabla;
        this.configuraGrid();
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    ConteoCelularListKendoComponent.prototype.evtCorePermisos = function (permisos, obj) {
        if (permisos && permisos.conteoCelular && permisos.conteoCelular.PermisoAtributo && permisos.conteoCelular.PermisoAtributo.length > 0
            && !obj.configuracionConteoCelular.permisosAtributos) {
            obj.globalesService.evtAtributos(permisos.conteoCelular.PermisoAtributo, obj);
            //            obj.permisosAtributos = permisos.ConteoCelular.PermisoAtributo ;
        }
        if (permisos && permisos.conteoCelular && permisos.conteoCelular.PermisoTabla && permisos.conteoCelular.PermisoTabla.length > 0
            && !obj.configuracionConteoCelular.permisosTabla) {
            obj.globalesService.evtTablas(permisos.conteoCelular.PermisoTabla, obj);
            //            obj.permisosTabla = permisos.ConteoCelular.PermisoTabla[0] ;
            //            obj.permisosaccionesInicio();
        }
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    ConteoCelularListKendoComponent.prototype.configuraGrid = function () {
        var _this = this;
        if ($("#grid_conteoCelular_" + this.nombregrid).data("kendoGrid")) {
        }
        else {
            setTimeout(function () {
                _this.inicializaGrid();
                _this.configuraGrid();
            }, 300);
        }
    };
    ConteoCelularListKendoComponent.prototype.sourcegrid = function () {
        function completar(e) {
            (e);
        }
        ;
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        if (this.configuracionConteoCelular.campoAgEl != null
            && this.configuracionConteoCelular.conteoCelularConsulta
            && this.configuracionConteoCelular.conteoCelularConsulta.isOk
            && !this.configuracionConteoCelular.conteoCelularConsulta.isOk())
            return;
        if (this.configuracionConteoCelular.conteoCelularConsulta) {
            if (!this.configuracionConteoCelular.campoAgEl && this.configuracionConteoCelular.conteoCelularConsulta instanceof _shared_conteo_celular__WEBPACK_IMPORTED_MODULE_3__["ConteoCelular"])
                this.configuracionConteoCelular.rutaLista = this.crudServiceBaseUrl + "/getConteoCelularesByDto";
            this.lista = this.configuracionConteoCelular.lecturaP(completar, this.configuracionConteoCelular.conteoCelularConsulta);
            if (this.configuracionConteoCelular.campoAgEl) {
                this.rutaAgregar = this.configuracionConteoCelular.agregarP(function () { }, this.configuracionConteoCelular.campoAgEl);
                this.rutaEliminar = this.configuracionConteoCelular.eliminarP(function () { }, this.configuracionConteoCelular.campoAgEl);
            }
            else {
                this.rutaAgregar = this.configuracionConteoCelular.agregarP(completar, this.configuracionConteoCelular.conteoCelularConsulta);
                this.rutaEliminar = this.configuracionConteoCelular.eliminarP(completar, this.configuracionConteoCelular.conteoCelularConsulta);
            }
        }
        else {
            this.lista = this.configuracionConteoCelular.lectura();
            this.rutaAgregar = this.configuracionConteoCelular.agregar();
            this.rutaEliminar = this.configuracionConteoCelular.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this, "conteoCelular", "id")) {
            modelo["id"] = "id";
        }
        var campos = {};
        if (this.globalesService.avisible(this, "conteoCelular", "id")) {
            campos["id"] = { editable: false, nullable: true, type: "number" };
        }
        if (this.globalesService.avisible(this, "conteoCelular", "idevaluacionSolicitud")) {
            campos["idevaluacionSolicitud"] = { editable: this.globalesService.aenable(this, "conteoCelular", "idevaluacionSolicitud"), nullable: true, type: "object", defaultValue: { "id": "", "status": "" } };
        }
        if (this.globalesService.avisible(this, "conteoCelular", "numeroCelular")) {
            campos["numeroCelular"] = { editable: this.globalesService.aenable(this, "conteoCelular", "numeroCelular"), nullable: true };
        }
        if (this.globalesService.avisible(this, "conteoCelular", "idnumeroCelula")) {
            campos["idnumeroCelula"] = { editable: this.globalesService.aenable(this, "conteoCelular", "idnumeroCelula"), nullable: true };
        }
        if (this.globalesService.avisible(this, "conteoCelular", "hexagonalidad")) {
            campos["hexagonalidad"] = { editable: this.globalesService.aenable(this, "conteoCelular", "hexagonalidad"), nullable: true };
        }
        if (this.globalesService.avisible(this, "conteoCelular", "mayor60")) {
            campos["mayor60"] = { editable: this.globalesService.aenable(this, "conteoCelular", "mayor60"), nullable: true };
        }
        if (this.globalesService.avisible(this, "conteoCelular", "plemorfismo")) {
            campos["plemorfismo"] = { editable: this.globalesService.aenable(this, "conteoCelular", "plemorfismo"), nullable: true };
        }
        if (this.globalesService.avisible(this, "conteoCelular", "cvtamano")) {
            campos["cvtamano"] = { editable: this.globalesService.aenable(this, "conteoCelular", "cvtamano"), nullable: true };
        }
        if (this.globalesService.avisible(this, "conteoCelular", "normalMenor33")) {
            campos["normalMenor33"] = { editable: this.globalesService.aenable(this, "conteoCelular", "normalMenor33"), nullable: true };
        }
        if (this.globalesService.avisible(this, "conteoCelular", "polimegatismo")) {
            campos["polimegatismo"] = { editable: this.globalesService.aenable(this, "conteoCelular", "polimegatismo"), nullable: true };
        }
        if (this.globalesService.avisible(this, "conteoCelular", "paquimetria")) {
            campos["paquimetria"] = { editable: this.globalesService.aenable(this, "conteoCelular", "paquimetria"), nullable: true };
        }
        if (this.globalesService.avisible(this, "conteoCelular", "idpaquimetria")) {
            campos["idpaquimetria"] = { editable: this.globalesService.aenable(this, "conteoCelular", "idpaquimetria"), nullable: true };
        }
        if (this.globalesService.avisible(this, "conteoCelular", "homogeneidad")) {
            campos["homogeneidad"] = { editable: this.globalesService.aenable(this, "conteoCelular", "homogeneidad"), nullable: true };
        }
        if (this.globalesService.avisible(this, "conteoCelular", "numeroCampo")) {
            campos["numeroCampo"] = { editable: this.globalesService.aenable(this, "conteoCelular", "numeroCampo"), nullable: true };
        }
        if (this.globalesService.avisible(this, "conteoCelular", "gutta")) {
            campos["gutta"] = { editable: this.globalesService.aenable(this, "conteoCelular", "gutta"), nullable: true };
        }
        if (this.globalesService.avisible(this, "conteoCelular", "pliegue")) {
            campos["pliegue"] = { editable: this.globalesService.aenable(this, "conteoCelular", "pliegue"), nullable: true };
        }
        if (this.globalesService.avisible(this, "conteoCelular", "estriaRotura")) {
            campos["estriaRotura"] = { editable: this.globalesService.aenable(this, "conteoCelular", "estriaRotura"), nullable: true };
        }
        if (this.globalesService.avisible(this, "conteoCelular", "deposito")) {
            campos["deposito"] = { editable: this.globalesService.aenable(this, "conteoCelular", "deposito"), nullable: true };
        }
        if (this.globalesService.avisible(this, "conteoCelular", "discontinuidad")) {
            campos["discontinuidad"] = { editable: this.globalesService.aenable(this, "conteoCelular", "discontinuidad"), nullable: true };
        }
        if (this.globalesService.avisible(this, "conteoCelular", "otra")) {
            campos["otra"] = { editable: this.globalesService.aenable(this, "conteoCelular", "otra"), nullable: true };
        }
        if (this.globalesService.avisible(this, "conteoCelular", "otraDescripcion")) {
            campos["otraDescripcion"] = { editable: this.globalesService.aenable(this, "conteoCelular", "otraDescripcion"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "conteoCelular", "zonaCelular")) {
            campos["zonaCelular"] = { editable: this.globalesService.aenable(this, "conteoCelular", "zonaCelular"), nullable: true };
        }
        if (this.globalesService.avisible(this, "conteoCelular", "valoracionCi")) {
            campos["valoracionCi"] = { editable: this.globalesService.aenable(this, "conteoCelular", "valoracionCi"), nullable: true };
        }
        if (this.globalesService.avisible(this, "conteoCelular", "valoracionCd")) {
            campos["valoracionCd"] = { editable: this.globalesService.aenable(this, "conteoCelular", "valoracionCd"), nullable: true };
        }
        if (this.globalesService.avisible(this, "conteoCelular", "observacionCd")) {
            campos["observacionCd"] = { editable: this.globalesService.aenable(this, "conteoCelular", "observacionCd"), nullable: true };
        }
        if (this.globalesService.avisible(this, "conteoCelular", "valoracionFinalEndotelioCi")) {
            campos["valoracionFinalEndotelioCi"] = { editable: this.globalesService.aenable(this, "conteoCelular", "valoracionFinalEndotelioCi"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "conteoCelular", "valoracionFinalEndotelioCd")) {
            campos["valoracionFinalEndotelioCd"] = { editable: this.globalesService.aenable(this, "conteoCelular", "valoracionFinalEndotelioCd"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "conteoCelular", "responsableMicroscopio")) {
            campos["responsableMicroscopio"] = { editable: this.globalesService.aenable(this, "conteoCelular", "responsableMicroscopio"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "conteoCelular", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this, "conteoCelular", "fechaRegistro"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "conteoCelular", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this, "conteoCelular", "fechaActualizacion"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "conteoCelular", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this, "conteoCelular", "fechaBaja"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "conteoCelular", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this, "conteoCelular", "usuarioUltMov"), nullable: true, type: "object", defaultValue: { "id": "", "password": "" } };
        }
        if (this.globalesService.avisible(this, "conteoCelular", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this, "conteoCelular", "status"), nullable: true, type: "string", defaultValue: "1" };
        }
        modelo["fields"] = campos;
        var slf = this;
        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionConteoCelular.rutaActualizar,
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
            if (self.configuracionConteoCelular.campoAgEl) {
                if (self.configuracionConteoCelular.tipocampoAgEl == "ConteoCelularConteoCelular")
                    self.configuracionConteoCelular.campoAgEl.conteoCelular2 = options.models[0];
                else
                    self.configuracionConteoCelular.campoAgEl.conteoCelular = options.models[0];
                return JSON.stringify(self.configuracionConteoCelular.campoAgEl);
            }
            else if (est.options[operation].data.models.conteoCelular) {
                est.options[operation].data.models.conteoCelular2 = options.models[0];
                return JSON.stringify(est.options[operation].data.models);
            }
            return JSON.stringify(options.models[0]);
        }
    };
    ConteoCelularListKendoComponent.prototype.inicializaGrid = function () {
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        this.sourcegrid();
        var columnas = [];
        if (this.globalesService.avisible(this, "conteoCelular", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this, "conteoCelular", "id"), editor: this.globalesService.txtNumero });
        }
        if (this.globalesService.avisible(this, "conteoCelular", "idevaluacionSolicitud")) {
            columnas.push({ field: "idevaluacionSolicitud", title: this.globalesService.aetiqueta(this, "conteoCelular", "idevaluacionSolicitud"), editor: idevaluacionSolicitudDropDownEditor, template: " #if (idevaluacionSolicitud){#   #=idevaluacionSolicitud.status# # } # " });
        }
        if (this.globalesService.avisible(this, "conteoCelular", "numeroCelular")) {
            columnas.push({ field: "numeroCelular", title: this.globalesService.aetiqueta(this, "conteoCelular", "numeroCelular") });
        }
        if (this.globalesService.avisible(this, "conteoCelular", "idnumeroCelula")) {
            columnas.push({ field: "idnumeroCelula", title: this.globalesService.aetiqueta(this, "conteoCelular", "idnumeroCelula") });
        }
        if (this.globalesService.avisible(this, "conteoCelular", "hexagonalidad")) {
            columnas.push({ field: "hexagonalidad", title: this.globalesService.aetiqueta(this, "conteoCelular", "hexagonalidad") });
        }
        if (this.globalesService.avisible(this, "conteoCelular", "mayor60")) {
            columnas.push({ field: "mayor60", title: this.globalesService.aetiqueta(this, "conteoCelular", "mayor60") });
        }
        if (this.globalesService.avisible(this, "conteoCelular", "plemorfismo")) {
            columnas.push({ field: "plemorfismo", title: this.globalesService.aetiqueta(this, "conteoCelular", "plemorfismo") });
        }
        if (this.globalesService.avisible(this, "conteoCelular", "cvtamano")) {
            columnas.push({ field: "cvtamano", title: this.globalesService.aetiqueta(this, "conteoCelular", "cvtamano") });
        }
        if (this.globalesService.avisible(this, "conteoCelular", "normalMenor33")) {
            columnas.push({ field: "normalMenor33", title: this.globalesService.aetiqueta(this, "conteoCelular", "normalMenor33") });
        }
        if (this.globalesService.avisible(this, "conteoCelular", "polimegatismo")) {
            columnas.push({ field: "polimegatismo", title: this.globalesService.aetiqueta(this, "conteoCelular", "polimegatismo") });
        }
        if (this.globalesService.avisible(this, "conteoCelular", "paquimetria")) {
            columnas.push({ field: "paquimetria", title: this.globalesService.aetiqueta(this, "conteoCelular", "paquimetria") });
        }
        if (this.globalesService.avisible(this, "conteoCelular", "idpaquimetria")) {
            columnas.push({ field: "idpaquimetria", title: this.globalesService.aetiqueta(this, "conteoCelular", "idpaquimetria") });
        }
        if (this.globalesService.avisible(this, "conteoCelular", "homogeneidad")) {
            columnas.push({ field: "homogeneidad", title: this.globalesService.aetiqueta(this, "conteoCelular", "homogeneidad") });
        }
        if (this.globalesService.avisible(this, "conteoCelular", "numeroCampo")) {
            columnas.push({ field: "numeroCampo", title: this.globalesService.aetiqueta(this, "conteoCelular", "numeroCampo") });
        }
        if (this.globalesService.avisible(this, "conteoCelular", "gutta")) {
            columnas.push({ field: "gutta", title: this.globalesService.aetiqueta(this, "conteoCelular", "gutta") });
        }
        if (this.globalesService.avisible(this, "conteoCelular", "pliegue")) {
            columnas.push({ field: "pliegue", title: this.globalesService.aetiqueta(this, "conteoCelular", "pliegue") });
        }
        if (this.globalesService.avisible(this, "conteoCelular", "estriaRotura")) {
            columnas.push({ field: "estriaRotura", title: this.globalesService.aetiqueta(this, "conteoCelular", "estriaRotura") });
        }
        if (this.globalesService.avisible(this, "conteoCelular", "deposito")) {
            columnas.push({ field: "deposito", title: this.globalesService.aetiqueta(this, "conteoCelular", "deposito") });
        }
        if (this.globalesService.avisible(this, "conteoCelular", "discontinuidad")) {
            columnas.push({ field: "discontinuidad", title: this.globalesService.aetiqueta(this, "conteoCelular", "discontinuidad") });
        }
        if (this.globalesService.avisible(this, "conteoCelular", "otra")) {
            columnas.push({ field: "otra", title: this.globalesService.aetiqueta(this, "conteoCelular", "otra") });
        }
        if (this.globalesService.avisible(this, "conteoCelular", "otraDescripcion")) {
            columnas.push({ field: "otraDescripcion", title: this.globalesService.aetiqueta(this, "conteoCelular", "otraDescripcion"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "conteoCelular", "zonaCelular")) {
            columnas.push({ field: "zonaCelular", title: this.globalesService.aetiqueta(this, "conteoCelular", "zonaCelular") });
        }
        if (this.globalesService.avisible(this, "conteoCelular", "valoracionCi")) {
            columnas.push({ field: "valoracionCi", title: this.globalesService.aetiqueta(this, "conteoCelular", "valoracionCi") });
        }
        if (this.globalesService.avisible(this, "conteoCelular", "valoracionCd")) {
            columnas.push({ field: "valoracionCd", title: this.globalesService.aetiqueta(this, "conteoCelular", "valoracionCd") });
        }
        if (this.globalesService.avisible(this, "conteoCelular", "observacionCd")) {
            columnas.push({ field: "observacionCd", title: this.globalesService.aetiqueta(this, "conteoCelular", "observacionCd") });
        }
        if (this.globalesService.avisible(this, "conteoCelular", "valoracionFinalEndotelioCi")) {
            columnas.push({ field: "valoracionFinalEndotelioCi", title: this.globalesService.aetiqueta(this, "conteoCelular", "valoracionFinalEndotelioCi"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "conteoCelular", "valoracionFinalEndotelioCd")) {
            columnas.push({ field: "valoracionFinalEndotelioCd", title: this.globalesService.aetiqueta(this, "conteoCelular", "valoracionFinalEndotelioCd"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "conteoCelular", "responsableMicroscopio")) {
            columnas.push({ field: "responsableMicroscopio", title: this.globalesService.aetiqueta(this, "conteoCelular", "responsableMicroscopio"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "conteoCelular", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this, "conteoCelular", "fechaRegistro"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "conteoCelular", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this, "conteoCelular", "fechaActualizacion"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "conteoCelular", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this, "conteoCelular", "fechaBaja"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "conteoCelular", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this, "conteoCelular", "usuarioUltMov"), editor: usuarioUltMovDropDownEditor, template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # " });
        }
        if (this.globalesService.avisible(this, "conteoCelular", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this, "conteoCelular", "status"), editor: this.globalesService.estadoDropDownEditor,
                template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this, "conteoCelular"))
            op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this, "conteoCelular")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this, "conteoCelular")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this, "conteoCelular") && this.configuracionConteoCelular.conteoCelularConsulta != null) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid)
            $("#grid_conteoCelular_" + this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_conteoCelular_" + this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionConteoCelular.altoComponente,
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
        this.grid = $("#grid_conteoCelular_" + this.nombregrid).data("kendoGrid");
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
    ConteoCelularListKendoComponent.prototype.showDetails = function (e) {
        e.preventDefault();
        //        this.grid = $("#grid_conteoCelular_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        var gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.conteoCelularSeleccionado = new _shared_conteo_celular__WEBPACK_IMPORTED_MODULE_3__["ConteoCelular"]();
        gridac.conteoCelularSeleccionado.from(dataItem);
        gridac.evtConteoCelularSeleccionado.emit(gridac.conteoCelularSeleccionado);
        (gridac.conteoCelularSeleccionado);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_configurar_conteo_celular__WEBPACK_IMPORTED_MODULE_4__["ConfigurarConteoCelular"])
    ], ConteoCelularListKendoComponent.prototype, "configuracionConteoCelular", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConteoCelularListKendoComponent.prototype, "nombregrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("conteoCelularSeleccionado"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ConteoCelularListKendoComponent.prototype, "evtConteoCelularSeleccionado", void 0);
    ConteoCelularListKendoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-conteo-celular-list-kendo',
            template: __webpack_require__(/*! ./conteo-celular-list-kendo.component.html */ "./src/app/conteo-celulares/conteo-celular-list-kendo/conteo-celular-list-kendo.component.html"),
            styles: [__webpack_require__(/*! ./conteo-celular-list-kendo.component.css */ "./src/app/conteo-celulares/conteo-celular-list-kendo/conteo-celular-list-kendo.component.css")],
            providers: [
                //             PermisoTablaService,
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_url_provider__WEBPACK_IMPORTED_MODULE_1__["URLProvider"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"]])
    ], ConteoCelularListKendoComponent);
    return ConteoCelularListKendoComponent;
}());



/***/ }),

/***/ "./src/app/conteo-celulares/conteo-celular-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/conteo-celulares/conteo-celular-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ConteoCelularRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConteoCelularRoutingModule", function() { return ConteoCelularRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _conteo_celulares_conteo_celular_list_kendo_conteo_celular_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../conteo-celulares/conteo-celular-list-kendo/conteo-celular-list-kendo.component */ "./src/app/conteo-celulares/conteo-celular-list-kendo/conteo-celular-list-kendo.component.ts");
/* harmony import */ var _conteo_celulares_conteo_celular_crud_conteo_celular_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../conteo-celulares/conteo-celular-crud/conteo-celular-crud.component */ "./src/app/conteo-celulares/conteo-celular-crud/conteo-celular-crud.component.ts");
/* harmony import */ var _conteo_celulares_conteo_celular_table_conteo_celular_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../conteo-celulares/conteo-celular-table/conteo-celular-table.component */ "./src/app/conteo-celulares/conteo-celular-table/conteo-celular-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'conteo-celular-list-kendo', component: _conteo_celulares_conteo_celular_list_kendo_conteo_celular_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__["ConteoCelularListKendoComponent"] },
    { path: 'conteo-celular-crud/:id', component: _conteo_celulares_conteo_celular_crud_conteo_celular_crud_component__WEBPACK_IMPORTED_MODULE_3__["ConteoCelularCrudComponent"] },
    { path: 'conteo-celular-table', component: _conteo_celulares_conteo_celular_table_conteo_celular_table_component__WEBPACK_IMPORTED_MODULE_4__["ConteoCelularTableComponent"] },
];
var ConteoCelularRoutingModule = /** @class */ (function () {
    function ConteoCelularRoutingModule() {
    }
    ConteoCelularRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ConteoCelularRoutingModule);
    return ConteoCelularRoutingModule;
}());



/***/ }),

/***/ "./src/app/conteo-celulares/conteo-celular-table/conteo-celular-table.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/conteo-celulares/conteo-celular-table/conteo-celular-table.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/conteo-celulares/conteo-celular-table/conteo-celular-table.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/conteo-celulares/conteo-celular-table/conteo-celular-table.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"usuariologueado\" >\n<div class=\"card\">\n<div class=\"card-header\"><h1>Busqueda {{permisosTabla?.etiqueta}}</h1></div>\n<div class=\"card-body\">\n<div class=\"container-fluid\" >    \n\n<table *ngIf=\"muestraTabla\" id=\"tabla_conteoCelular\" class=\"table \" cellspacing=\"0\" width=\"100%\">\n    <thead>\n        <tr>\n            <th [class.hidden]=\"!avisible('conteoCelular','id')\" >{{aetiqueta('conteoCelular','id')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','idevaluacionSolicitud')\" >{{aetiqueta('conteoCelular','idevaluacionSolicitud')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','numeroCelular')\" >{{aetiqueta('conteoCelular','numeroCelular')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','idnumeroCelula')\" >{{aetiqueta('conteoCelular','idnumeroCelula')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','hexagonalidad')\" >{{aetiqueta('conteoCelular','hexagonalidad')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','mayor60')\" >{{aetiqueta('conteoCelular','mayor60')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','plemorfismo')\" >{{aetiqueta('conteoCelular','plemorfismo')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','cvtamano')\" >{{aetiqueta('conteoCelular','cvtamano')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','normalMenor33')\" >{{aetiqueta('conteoCelular','normalMenor33')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','polimegatismo')\" >{{aetiqueta('conteoCelular','polimegatismo')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','paquimetria')\" >{{aetiqueta('conteoCelular','paquimetria')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','idpaquimetria')\" >{{aetiqueta('conteoCelular','idpaquimetria')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','homogeneidad')\" >{{aetiqueta('conteoCelular','homogeneidad')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','numeroCampo')\" >{{aetiqueta('conteoCelular','numeroCampo')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','gutta')\" >{{aetiqueta('conteoCelular','gutta')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','pliegue')\" >{{aetiqueta('conteoCelular','pliegue')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','estriaRotura')\" >{{aetiqueta('conteoCelular','estriaRotura')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','deposito')\" >{{aetiqueta('conteoCelular','deposito')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','discontinuidad')\" >{{aetiqueta('conteoCelular','discontinuidad')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','otra')\" >{{aetiqueta('conteoCelular','otra')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','otraDescripcion')\" >{{aetiqueta('conteoCelular','otraDescripcion')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','zonaCelular')\" >{{aetiqueta('conteoCelular','zonaCelular')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','valoracionCi')\" >{{aetiqueta('conteoCelular','valoracionCi')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','valoracionCd')\" >{{aetiqueta('conteoCelular','valoracionCd')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','observacionCd')\" >{{aetiqueta('conteoCelular','observacionCd')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','valoracionFinalEndotelioCi')\" >{{aetiqueta('conteoCelular','valoracionFinalEndotelioCi')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','valoracionFinalEndotelioCd')\" >{{aetiqueta('conteoCelular','valoracionFinalEndotelioCd')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','responsableMicroscopio')\" >{{aetiqueta('conteoCelular','responsableMicroscopio')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','fechaRegistro')\" >{{aetiqueta('conteoCelular','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','fechaActualizacion')\" >{{aetiqueta('conteoCelular','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','fechaBaja')\" >{{aetiqueta('conteoCelular','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','usuarioUltMov')\" >{{aetiqueta('conteoCelular','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','status')\" >{{aetiqueta('conteoCelular','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </thead>\n    <tfoot>\n        <tr>\n            <th [class.hidden]=\"!avisible('conteoCelular','id')\" >{{aetiqueta('conteoCelular','id')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','idevaluacionSolicitud')\" >{{aetiqueta('conteoCelular','idevaluacionSolicitud')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','numeroCelular')\" >{{aetiqueta('conteoCelular','numeroCelular')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','idnumeroCelula')\" >{{aetiqueta('conteoCelular','idnumeroCelula')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','hexagonalidad')\" >{{aetiqueta('conteoCelular','hexagonalidad')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','mayor60')\" >{{aetiqueta('conteoCelular','mayor60')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','plemorfismo')\" >{{aetiqueta('conteoCelular','plemorfismo')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','cvtamano')\" >{{aetiqueta('conteoCelular','cvtamano')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','normalMenor33')\" >{{aetiqueta('conteoCelular','normalMenor33')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','polimegatismo')\" >{{aetiqueta('conteoCelular','polimegatismo')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','paquimetria')\" >{{aetiqueta('conteoCelular','paquimetria')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','idpaquimetria')\" >{{aetiqueta('conteoCelular','idpaquimetria')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','homogeneidad')\" >{{aetiqueta('conteoCelular','homogeneidad')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','numeroCampo')\" >{{aetiqueta('conteoCelular','numeroCampo')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','gutta')\" >{{aetiqueta('conteoCelular','gutta')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','pliegue')\" >{{aetiqueta('conteoCelular','pliegue')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','estriaRotura')\" >{{aetiqueta('conteoCelular','estriaRotura')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','deposito')\" >{{aetiqueta('conteoCelular','deposito')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','discontinuidad')\" >{{aetiqueta('conteoCelular','discontinuidad')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','otra')\" >{{aetiqueta('conteoCelular','otra')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','otraDescripcion')\" >{{aetiqueta('conteoCelular','otraDescripcion')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','zonaCelular')\" >{{aetiqueta('conteoCelular','zonaCelular')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','valoracionCi')\" >{{aetiqueta('conteoCelular','valoracionCi')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','valoracionCd')\" >{{aetiqueta('conteoCelular','valoracionCd')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','observacionCd')\" >{{aetiqueta('conteoCelular','observacionCd')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','valoracionFinalEndotelioCi')\" >{{aetiqueta('conteoCelular','valoracionFinalEndotelioCi')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','valoracionFinalEndotelioCd')\" >{{aetiqueta('conteoCelular','valoracionFinalEndotelioCd')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','responsableMicroscopio')\" >{{aetiqueta('conteoCelular','responsableMicroscopio')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','fechaRegistro')\" >{{aetiqueta('conteoCelular','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','fechaActualizacion')\" >{{aetiqueta('conteoCelular','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','fechaBaja')\" >{{aetiqueta('conteoCelular','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','usuarioUltMov')\" >{{aetiqueta('conteoCelular','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('conteoCelular','status')\" >{{aetiqueta('conteoCelular','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </tfoot>\n</table>\n</div>\n<app-conteo-celular [class.hidden]=\"primero\" [(conteoCelular)]=\"conteoCelularSeleccionado\" (conteoCelularTablaChange)=\"cambio_conteoCelular($event)\"> </app-conteo-celular>    \n</div>\n</div>\n</div>\n\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/conteo-celulares/conteo-celular-table/conteo-celular-table.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/conteo-celulares/conteo-celular-table/conteo-celular-table.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ConteoCelularTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConteoCelularTableComponent", function() { return ConteoCelularTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_conteo_celular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/conteo-celular */ "./src/app/conteo-celulares/shared/conteo-celular.ts");
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






var ConteoCelularTableComponent = /** @class */ (function () {
    function ConteoCelularTableComponent(globalesService, permisoAtributoService, permisoTablaService, urlProvider) {
        this.globalesService = globalesService;
        this.permisoAtributoService = permisoAtributoService;
        this.permisoTablaService = permisoTablaService;
        this.urlProvider = urlProvider;
        this.primero = true;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "conteoCelular", "permiso": 0, "etiqueta": "" };
        this.ptabla = false;
        this.pattr = false;
        this.conteoCelularSeleccionado = new _shared_conteo_celular__WEBPACK_IMPORTED_MODULE_1__["ConteoCelular"]();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                discon = "with perfil.id = " + this.usuariologueado.perfil.id;
                var cadena2 = "select pa from PermisoTabla as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'conteoCelular'";
                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
            }
        }
    }
    ConteoCelularTableComponent.prototype.evtTablas = function (lista, obj) {
        if (lista.length >= 0) {
            obj.permisosTabla = lista[0];
            obj.ptabla = true;
            var discon = "with perfil.id = " + obj.usuariologueado.perfil.id;
            var cadena1 = "select pa from PermisoAtributo as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'conteoCelular'";
            obj.permisoAtributoService.custom(cadena1, obj.evtAtributos, obj);
        }
    };
    ConteoCelularTableComponent.prototype.evtAtributos = function (lista, obj) {
        obj.permisosAtributos = lista;
        obj.pattr = true;
        if (obj.ptabla && obj.pattr) {
            setTimeout(function () { obj.getColumnas(obj); }, 500);
        }
    };
    Object.defineProperty(ConteoCelularTableComponent.prototype, "muestraTabla", {
        get: function () {
            return this.ptabla && this.pattr;
        },
        enumerable: true,
        configurable: true
    });
    ConteoCelularTableComponent.prototype.getColumnas = function (obj) {
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        if (!this.avisible("conteoCelular", "id"))
            columnasNoVisibles.push(0);
        columnas.push({ "data": "id" });
        if (!this.avisible("conteoCelular", "idevaluacionSolicitud"))
            columnasNoVisibles.push(1);
        columnas.push({
            "data": function (oObj) {
                if (oObj.idevaluacionSolicitud)
                    return "<span style=\"cursor: pointer\">" + oObj.idevaluacionSolicitud.status + "</span>";
                return "";
            }
        });
        if (!this.avisible("conteoCelular", "numeroCelular"))
            columnasNoVisibles.push(2);
        columnas.push({ "data": "numeroCelular" });
        if (!this.avisible("conteoCelular", "idnumeroCelula"))
            columnasNoVisibles.push(3);
        columnas.push({ "data": "idnumeroCelula" });
        if (!this.avisible("conteoCelular", "hexagonalidad"))
            columnasNoVisibles.push(4);
        columnas.push({ "data": "hexagonalidad" });
        if (!this.avisible("conteoCelular", "mayor60"))
            columnasNoVisibles.push(5);
        columnas.push({ "data": "mayor60" });
        if (!this.avisible("conteoCelular", "plemorfismo"))
            columnasNoVisibles.push(6);
        columnas.push({ "data": "plemorfismo" });
        if (!this.avisible("conteoCelular", "cvtamano"))
            columnasNoVisibles.push(7);
        columnas.push({ "data": "cvtamano" });
        if (!this.avisible("conteoCelular", "normalMenor33"))
            columnasNoVisibles.push(8);
        columnas.push({ "data": "normalMenor33" });
        if (!this.avisible("conteoCelular", "polimegatismo"))
            columnasNoVisibles.push(9);
        columnas.push({ "data": "polimegatismo" });
        if (!this.avisible("conteoCelular", "paquimetria"))
            columnasNoVisibles.push(10);
        columnas.push({ "data": "paquimetria" });
        if (!this.avisible("conteoCelular", "idpaquimetria"))
            columnasNoVisibles.push(11);
        columnas.push({ "data": "idpaquimetria" });
        if (!this.avisible("conteoCelular", "homogeneidad"))
            columnasNoVisibles.push(12);
        columnas.push({ "data": "homogeneidad" });
        if (!this.avisible("conteoCelular", "numeroCampo"))
            columnasNoVisibles.push(13);
        columnas.push({ "data": "numeroCampo" });
        if (!this.avisible("conteoCelular", "gutta"))
            columnasNoVisibles.push(14);
        columnas.push({ "data": "gutta" });
        if (!this.avisible("conteoCelular", "pliegue"))
            columnasNoVisibles.push(15);
        columnas.push({ "data": "pliegue" });
        if (!this.avisible("conteoCelular", "estriaRotura"))
            columnasNoVisibles.push(16);
        columnas.push({ "data": "estriaRotura" });
        if (!this.avisible("conteoCelular", "deposito"))
            columnasNoVisibles.push(17);
        columnas.push({ "data": "deposito" });
        if (!this.avisible("conteoCelular", "discontinuidad"))
            columnasNoVisibles.push(18);
        columnas.push({ "data": "discontinuidad" });
        if (!this.avisible("conteoCelular", "otra"))
            columnasNoVisibles.push(19);
        columnas.push({ "data": "otra" });
        if (!this.avisible("conteoCelular", "otraDescripcion"))
            columnasNoVisibles.push(20);
        columnas.push({ "data": "otraDescripcion" });
        if (!this.avisible("conteoCelular", "zonaCelular"))
            columnasNoVisibles.push(21);
        columnas.push({ "data": "zonaCelular" });
        if (!this.avisible("conteoCelular", "valoracionCi"))
            columnasNoVisibles.push(22);
        columnas.push({ "data": "valoracionCi" });
        if (!this.avisible("conteoCelular", "valoracionCd"))
            columnasNoVisibles.push(23);
        columnas.push({ "data": "valoracionCd" });
        if (!this.avisible("conteoCelular", "observacionCd"))
            columnasNoVisibles.push(24);
        columnas.push({ "data": "observacionCd" });
        if (!this.avisible("conteoCelular", "valoracionFinalEndotelioCi"))
            columnasNoVisibles.push(25);
        columnas.push({ "data": "valoracionFinalEndotelioCi" });
        if (!this.avisible("conteoCelular", "valoracionFinalEndotelioCd"))
            columnasNoVisibles.push(26);
        columnas.push({ "data": "valoracionFinalEndotelioCd" });
        if (!this.avisible("conteoCelular", "responsableMicroscopio"))
            columnasNoVisibles.push(27);
        columnas.push({ "data": "responsableMicroscopio" });
        if (!this.avisible("conteoCelular", "fechaRegistro"))
            columnasNoVisibles.push(28);
        columnas.push({ "data": "fechaRegistro" });
        if (!this.avisible("conteoCelular", "fechaActualizacion"))
            columnasNoVisibles.push(29);
        columnas.push({ "data": "fechaActualizacion" });
        if (!this.avisible("conteoCelular", "fechaBaja"))
            columnasNoVisibles.push(30);
        columnas.push({ "data": "fechaBaja" });
        if (!this.avisible("conteoCelular", "usuarioUltMov"))
            columnasNoVisibles.push(31);
        columnas.push({
            "data": function (oObj) {
                if (oObj.usuarioUltMov)
                    return "<span style=\"cursor: pointer\">" + oObj.usuarioUltMov.username + "</span>";
                return "";
            }
        });
        if (!this.avisible("conteoCelular", "status"))
            columnasNoVisibles.push(32);
        columnas.push({ "data": "status" });
        if (self.pacutalizar("conteoCelular"))
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
        var tabla = $('#tabla_conteoCelular').DataTable({
            "columnDefs": novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            "initComplete": function (settings, json) {
                var xs = $("#tabla_conteoCelular_wrapper").find(".row");
                $($(xs[0]).find(".col-sm-6")[0]).
                    find(".dataTables_length").
                    append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function () {
                    self.conteoCelularSeleccionado = new _shared_conteo_celular__WEBPACK_IMPORTED_MODULE_1__["ConteoCelular"]();
                    self.primero = false;
                });
            },
            "ajax": {
                "url": self.urlProvider.serverURL + "conteoCelular/getConteoCelulares",
                "type": "POST",
                "contentType": "application/json",
                "datatype": 'json',
                "dataSrc": "",
            },
            "columns": columnas,
        });
        $('#tabla_conteoCelular tbody').on('click', 'td', function () {
            if (this.cellIndex == $(this).parent().find("td").length - 1) {
                var data = $('#tabla_conteoCelular').DataTable().row(this).data();
                self.conteoCelularSeleccionado = new _shared_conteo_celular__WEBPACK_IMPORTED_MODULE_1__["ConteoCelular"]();
                self.conteoCelularSeleccionado.from(data);
                self.primero = false;
                if ($(this).parent().hasClass('selected')) {
                    $(this).parent().removeClass('selected');
                }
                else {
                    $('#tabla_conteoCelular').DataTable().$('tr.selected').removeClass('selected');
                    $(this).parent().addClass('selected');
                }
            }
        });
    };
    ConteoCelularTableComponent.prototype.ngOnInit = function () {
    };
    ConteoCelularTableComponent.prototype.cambio_conteoCelular = function (conteoCelular) {
        $('#tabla_conteoCelular').DataTable().ajax.reload(null, false);
        this.primero = true;
    };
    // **********************************************************************************
    // **********************************************************************************
    // **           I N I C I A N   P E R M I S O S   P A R A   P E R F I L E S  
    // **********************************************************************************
    // **********************************************************************************
    ConteoCelularTableComponent.prototype.paux = function (tabla, permiso) {
        if (this.permisosTabla.tabla == tabla && (this.permisosTabla.permiso & permiso) == permiso)
            return true;
        return false;
    };
    ConteoCelularTableComponent.prototype.preporteWord = function (tabla) { return this.paux(tabla, 64); };
    ConteoCelularTableComponent.prototype.preporteExcel = function (tabla) { return this.paux(tabla, 32); };
    ConteoCelularTableComponent.prototype.preportePdf = function (tabla) { return this.paux(tabla, 16); };
    ConteoCelularTableComponent.prototype.pbuscar = function (tabla) { return this.paux(tabla, 8); };
    ConteoCelularTableComponent.prototype.pacutalizar = function (tabla) { return this.paux(tabla, 4); };
    ConteoCelularTableComponent.prototype.peliminar = function (tabla) { return this.paux(tabla, 2); };
    ConteoCelularTableComponent.prototype.pagregar = function (tabla) { return this.paux(tabla, 1); };
    //******************************************************************************************
    //*******  P E R M I S O S   S O B R E   A T R I B U T O S  ********************************
    //******************************************************************************************
    ConteoCelularTableComponent.prototype.aetiqueta = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo)
                return elemento.etiqueta;
        }
        return "";
    };
    ConteoCelularTableComponent.prototype.avalidacion = function (tabla, atributo) {
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
    ConteoCelularTableComponent.prototype.amensaje = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo) {
                return elemento.mensaje;
            }
        }
        return null;
    };
    ConteoCelularTableComponent.prototype.aeditable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 8) == 8)
                return true;
        }
        return false;
    };
    ConteoCelularTableComponent.prototype.arequerido = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 4) == 4)
                return true;
        }
        return false;
    };
    ConteoCelularTableComponent.prototype.avisible = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 2) == 2)
                return true;
        }
        return false;
    };
    ConteoCelularTableComponent.prototype.aenable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 1) == 1)
                return true;
        }
        return false;
    };
    ConteoCelularTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-conteo-celular-table',
            template: __webpack_require__(/*! ./conteo-celular-table.component.html */ "./src/app/conteo-celulares/conteo-celular-table/conteo-celular-table.component.html"),
            styles: [__webpack_require__(/*! ./conteo-celular-table.component.css */ "./src/app/conteo-celulares/conteo-celular-table/conteo-celular-table.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
                _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
                _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
            _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
            _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            _shared_url_provider__WEBPACK_IMPORTED_MODULE_3__["URLProvider"]])
    ], ConteoCelularTableComponent);
    return ConteoCelularTableComponent;
}());



/***/ }),

/***/ "./src/app/conteo-celulares/conteo-celular.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/conteo-celulares/conteo-celular.module.ts ***!
  \***********************************************************/
/*! exports provided: ConteoCelularModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConteoCelularModule", function() { return ConteoCelularModule; });
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/dist/fesm5/index.js");
/* harmony import */ var _lampara_hendiduras_lampara_hendidura_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../lampara-hendiduras/lampara-hendidura.module */ "./src/app/lampara-hendiduras/lampara-hendidura.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _conteo_celular_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./conteo-celular-routing.module */ "./src/app/conteo-celulares/conteo-celular-routing.module.ts");
/* harmony import */ var _conteo_celular_list_kendo_conteo_celular_list_kendo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conteo-celular-list-kendo/conteo-celular-list-kendo.component */ "./src/app/conteo-celulares/conteo-celular-list-kendo/conteo-celular-list-kendo.component.ts");
/* harmony import */ var _conteo_celular_crud_conteo_celular_crud_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./conteo-celular-crud/conteo-celular-crud.component */ "./src/app/conteo-celulares/conteo-celular-crud/conteo-celular-crud.component.ts");
/* harmony import */ var _conteo_celular_conjunto_conteo_celular_conjunto_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./conteo-celular-conjunto/conteo-celular-conjunto.component */ "./src/app/conteo-celulares/conteo-celular-conjunto/conteo-celular-conjunto.component.ts");
/* harmony import */ var _conteo_celular_conteo_celular_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./conteo-celular/conteo-celular.component */ "./src/app/conteo-celulares/conteo-celular/conteo-celular.component.ts");
/* harmony import */ var _conteo_celular_table_conteo_celular_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./conteo-celular-table/conteo-celular-table.component */ "./src/app/conteo-celulares/conteo-celular-table/conteo-celular-table.component.ts");
/* harmony import */ var _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/usuario-perfil.module */ "./src/app/shared/usuario-perfil.module.ts");
/* harmony import */ var _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/componentes-personalizados/personalizados.module */ "./src/app/core/componentes-personalizados/personalizados.module.ts");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm5/index.js");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/dist/fesm5/index.js");
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















var ConteoCelularModule = /** @class */ (function () {
    function ConteoCelularModule(parentModule) {
        if (parentModule) {
            throw new Error('ConteoCelularModule is already loaded. Import it in the AppModule only');
        }
    }
    ConteoCelularModule_1 = ConteoCelularModule;
    ConteoCelularModule.forRoot = function () {
        return {
            ngModule: ConteoCelularModule_1,
            providers: []
        };
    };
    var ConteoCelularModule_1;
    ConteoCelularModule = ConteoCelularModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_12__["PersonalizadosModule"], _conteo_celular_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConteoCelularRoutingModule"],
                _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_11__["UsuarioPerfilModule"].forRoot()
                // , EvaluacionSolicitudModule
                ,
                _lampara_hendiduras_lampara_hendidura_module__WEBPACK_IMPORTED_MODULE_1__["LamparaHendiduraModule"],
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_13__["GridModule"],
                _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_14__["DialogsModule"],
                _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_0__["InputsModule"]
            ],
            declarations: [
                _conteo_celular_list_kendo_conteo_celular_list_kendo_component__WEBPACK_IMPORTED_MODULE_6__["ConteoCelularListKendoComponent"],
                _conteo_celular_conteo_celular_component__WEBPACK_IMPORTED_MODULE_9__["ConteoCelularComponent"],
                _conteo_celular_crud_conteo_celular_crud_component__WEBPACK_IMPORTED_MODULE_7__["ConteoCelularCrudComponent"],
                _conteo_celular_conjunto_conteo_celular_conjunto_component__WEBPACK_IMPORTED_MODULE_8__["ConteoCelularConjuntoComponent"],
                _conteo_celular_table_conteo_celular_table_component__WEBPACK_IMPORTED_MODULE_10__["ConteoCelularTableComponent"],
            ],
            exports: [
                _conteo_celular_list_kendo_conteo_celular_list_kendo_component__WEBPACK_IMPORTED_MODULE_6__["ConteoCelularListKendoComponent"],
                _conteo_celular_conteo_celular_component__WEBPACK_IMPORTED_MODULE_9__["ConteoCelularComponent"],
                _conteo_celular_crud_conteo_celular_crud_component__WEBPACK_IMPORTED_MODULE_7__["ConteoCelularCrudComponent"],
                _conteo_celular_conjunto_conteo_celular_conjunto_component__WEBPACK_IMPORTED_MODULE_8__["ConteoCelularConjuntoComponent"],
                _conteo_celular_table_conteo_celular_table_component__WEBPACK_IMPORTED_MODULE_10__["ConteoCelularTableComponent"],
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"])()),
        __metadata("design:paramtypes", [ConteoCelularModule])
    ], ConteoCelularModule);
    return ConteoCelularModule;
}());



/***/ }),

/***/ "./src/app/conteo-celulares/conteo-celular/conteo-celular.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/conteo-celulares/conteo-celular/conteo-celular.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/conteo-celulares/conteo-celular/conteo-celular.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/conteo-celulares/conteo-celular/conteo-celular.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [hidden]=\"!usuariologueado\" #formaGeneral=\"ngForm\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <h4>{{ etiquetaGeneral }}</h4>\n        </div>\n        <div class=\"panel-body\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <!--  <app-componente-cadena [componente]=\"'conteoCelular'\"\n                                                   [atributo]=\"'numeroCelular'\"\n                                                   [buscar]=\"conteoCelularBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosConteoCelular['numeroCelular']\"\n                                                   [(dato)]=\"conteoCelular.numeroCelular\"   class=\"w-100\" >\n                    </app-componente-cadena > -->\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"control-label\">No. de Células mm2:</label\n                  >\n                <kendo-numerictextbox\n                #numeroCelularComponent=\"ngModel\"\n               [format]=\"'n0'\"\n               [step]=\"1\"\n               [min]=\"0\"\n               [autoCorrect]=\"true\"\n               class=\"form-control\"\n               name=\"numeroCelular\"\n               [(ngModel)]=\"conteoCelular.numeroCelular\"\n               [disabled]=\"!enable\"\n             ></kendo-numerictextbox>\n              </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <label class=\"radio-inline\">\n                    <input\n                      [attr.disabled]=\"enable ? null : false\"\n                      type=\"radio\"\n                      name=\"idnumeroCelula\"\n                      class=\"form-checkbox-input\"\n                      [value]=\"1\"\n                      [(ngModel)]=\"conteoCelular.idnumeroCelula\"\n                    />\n                    ≤ 1000 No apta\n                  </label>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"radio-inline\">\n                    <input\n                      [attr.disabled]=\"enable ? null : false\"\n                      type=\"radio\"\n                      name=\"idnumeroCelula\"\n                      [value]=\"2\"\n                      class=\"form-checkbox-input\"\n                      [(ngModel)]=\"conteoCelular.idnumeroCelula\"\n                    />\n                    1000 ≤ 2000 o Guttas: Mejora Tectónica/DALK\n                  </label>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"radio-inline\">\n                    <input\n                      [attr.disabled]=\"enable ? null : false\"\n                      type=\"radio\"\n                      name=\"idnumeroCelula\"\n                      [value]=\"3\"\n                      class=\"form-checkbox-input\"\n                      [(ngModel)]=\"conteoCelular.idnumeroCelula\"\n                    />\n                    2000 - 2400: QP\n                  </label>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"radio-inline\">\n                    <input\n                      [attr.disabled]=\"enable ? null : false\"\n                      type=\"radio\"\n                      name=\"idnumeroCelula\"\n                      [value]=\"4\"\n                      class=\"form-checkbox-input\"\n                      [(ngModel)]=\"conteoCelular.idnumeroCelula\"\n                    />\n                    ≥ 2400 QP, DSAEK, DMEK (Edad Donante)\n                  </label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!--           <app-componente-cadena\n            [componente]=\"'conteoCelular'\"\n            [atributo]=\"'hexagonalidad'\"\n            [buscar]=\"conteoCelularBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosConteoCelular['hexagonalidad']\"\n            [(dato)]=\"conteoCelular.hexagonalidad\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena> -->\n\n                    <hr />\n\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"control-label\">Hexagonalidad(Forma):</label\n                  >\n                  <kendo-numerictextbox\n                #hexagonalidadComponent=\"ngModel\"\n               [format]=\"'n0'\"\n               [step]=\"1\"\n               [min]=\"0\"\n               [autoCorrect]=\"true\"\n               class=\"form-control\"\n               name=\"hexagonalidad\"\n               [(ngModel)]=\"conteoCelular.hexagonalidad\"\n               [disabled]=\"!enable\"\n             ></kendo-numerictextbox>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <label class=\"radio-inline\">\n                    <input\n                      [attr.disabled]=\"enable ? null : false\"\n                      type=\"checkbox\"\n                      name=\"mayor60\"\n                      class=\"form-checkbox-input\"\n                      [value]=\"1\"\n                      [(ngModel)]=\"conteoCelular.mayor60\"\n                    />\n                    Normal (≥ 60%)\n                  </label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"control-label\">Plemomorfismo:</label>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"radio-inline\">\n                    <input\n                      [attr.disabled]=\"enable ? null : false\"\n                      type=\"radio\"\n                      name=\"plemorfismo\"\n                      class=\"form-checkbox-input\"\n                      [value]=\"1\"\n                      [(ngModel)]=\"conteoCelular.plemorfismo\"\n                    />\n                    Leve (>55%)\n                  </label>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"radio-inline\">\n                    <input\n                      [attr.disabled]=\"enable ? null : false\"\n                      type=\"radio\"\n                      name=\"plemorfismo\"\n                      [value]=\"2\"\n                      class=\"form-checkbox-input\"\n                      [(ngModel)]=\"conteoCelular.plemorfismo\"\n                    />\n                    Moderado (>50%)\n                  </label>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"radio-inline\">\n                    <input\n                      [attr.disabled]=\"enable ? null : false\"\n                      type=\"radio\"\n                      name=\"plemorfismo\"\n                      [value]=\"3\"\n                      class=\"form-checkbox-input\"\n                      [(ngModel)]=\"conteoCelular.plemorfismo\"\n                    />\n                    Grave (≤48%)\n                  </label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!--           <app-componente-cadena\n            [componente]=\"'conteoCelular'\"\n            [atributo]=\"'cvtamano'\"\n            [buscar]=\"conteoCelularBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosConteoCelular['cvtamano']\"\n            [(dato)]=\"conteoCelular.cvtamano\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena> -->\n                    <!--           <app-componente-cadena\n            [componente]=\"'conteoCelular'\"\n            [atributo]=\"'normalMenor33'\"\n            [buscar]=\"conteoCelularBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosConteoCelular['normalMenor33']\"\n            [(dato)]=\"conteoCelular.normalMenor33\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena> -->\n\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"control-label\">CV(Tamaño):</label\n                  >\n                  <kendo-numerictextbox\n                #cvtamanoComponent=\"ngModel\"\n               [format]=\"'n0'\"\n               [step]=\"1\"\n               [min]=\"0\"\n               [autoCorrect]=\"true\"\n               class=\"form-control\"\n               name=\"cvtamano\"\n               [(ngModel)]=\"conteoCelular.cvtamano\"\n               [disabled]=\"!enable\"\n             ></kendo-numerictextbox>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <label class=\"radio-inline\">\n                    <input\n                      [attr.disabled]=\"enable ? null : false\"\n                      type=\"checkbox\"\n                      name=\"normalMenor33\"\n                      class=\"form-checkbox-input\"\n                      [value]=\"1\"\n                      [(ngModel)]=\"conteoCelular.normalMenor33\"\n                    />\n                    Normal (≤33%)\n                  </label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!--           <app-componente-cadena\n            [componente]=\"'conteoCelular'\"\n            [atributo]=\"'polimegatismo'\"\n            [buscar]=\"conteoCelularBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosConteoCelular['polimegatismo']\"\n            [(dato)]=\"conteoCelular.polimegatismo\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena> -->\n\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"control-label\">Polimegatismo:</label>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"radio-inline\">\n                    <input\n                      [attr.disabled]=\"enable ? null : false\"\n                      type=\"radio\"\n                      name=\"polimegatismo\"\n                      class=\"form-checkbox-input\"\n                      [value]=\"1\"\n                      [(ngModel)]=\"conteoCelular.polimegatismo\"\n                    />\n                    Leve (<35%)\n                  </label>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"radio-inline\">\n                    <input\n                      [attr.disabled]=\"enable ? null : false\"\n                      type=\"radio\"\n                      name=\"polimegatismo\"\n                      [value]=\"2\"\n                      class=\"form-checkbox-input\"\n                      [(ngModel)]=\"conteoCelular.polimegatismo\"\n                    />\n                    Moderado (<38%)\n                  </label>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"radio-inline\">\n                    <input\n                      [attr.disabled]=\"enable ? null : false\"\n                      type=\"radio\"\n                      name=\"polimegatismo\"\n                      [value]=\"3\"\n                      class=\"form-checkbox-input\"\n                      [(ngModel)]=\"conteoCelular.polimegatismo\"\n                    />\n                    Grave (<48%)\n                  </label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!--           <app-componente-cadena\n            [componente]=\"'conteoCelular'\"\n            [atributo]=\"'paquimetria'\"\n            [buscar]=\"conteoCelularBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosConteoCelular['paquimetria']\"\n            [(dato)]=\"conteoCelular.paquimetria\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena>\n          <app-componente-cadena\n            [componente]=\"'conteoCelular'\"\n            [atributo]=\"'idpaquimetria'\"\n            [buscar]=\"conteoCelularBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosConteoCelular['idpaquimetria']\"\n            [(dato)]=\"conteoCelular.idpaquimetria\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena> -->\n\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"control-label\">Paquimetría:</label>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"radio-inline\">\n                    <input\n                      [attr.disabled]=\"enable ? null : false\"\n                      type=\"radio\"\n                      name=\"idpaquimetria\"\n                      class=\"form-checkbox-input\"\n                      [value]=\"1\"\n                      [(ngModel)]=\"conteoCelular.idpaquimetria\"\n                    />\n                    Normal (540-575)\n                  </label>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"radio-inline\">\n                    <input\n                      [attr.disabled]=\"enable ? null : false\"\n                      type=\"radio\"\n                      name=\"idpaquimetria\"\n                      [value]=\"2\"\n                      class=\"form-checkbox-input\"\n                      [(ngModel)]=\"conteoCelular.idpaquimetria\"\n                    />\n                    Cir. Refractiva (<500, excluye QP)\n                  </label>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"radio-inline\">\n                    <input\n                      [attr.disabled]=\"enable ? null : false\"\n                      type=\"radio\"\n                      name=\"idpaquimetria\"\n                      [value]=\"3\"\n                      class=\"form-checkbox-input\"\n                      [(ngModel)]=\"conteoCelular.idpaquimetria\"\n                    />\n                    Edema (>600)\n                  </label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <hr />\n\n                    <!--           <app-componente-cadena\n            [componente]=\"'conteoCelular'\"\n            [atributo]=\"'homogeneidad'\"\n            [buscar]=\"conteoCelularBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosConteoCelular['homogeneidad']\"\n            [(dato)]=\"conteoCelular.homogeneidad\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena> -->\n\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <label class=\"control-label\">Homogeneidad:</label>\n                            <label class=\"radio-inline\" style=\"margin-left: 15px;\">\n                <input\n                  [attr.disabled]=\"enable ? null : false\"\n                  type=\"radio\"\n                  name=\"homogeneidad\"\n                  class=\"form-checkbox-input\"\n                  [value]=\"1\"\n                  [(ngModel)]=\"conteoCelular.homogeneidad\"\n                />\n                SÍ\n              </label>\n                            <label class=\"radio-inline\">\n                <input\n                  [attr.disabled]=\"enable ? null : false\"\n                  type=\"radio\"\n                  name=\"homogeneidad\"\n                  [value]=\"0\"\n                  class=\"form-checkbox-input\"\n                  [(ngModel)]=\"conteoCelular.homogeneidad\"\n                />\n                NO\n              </label>\n                        </div>\n                    </div>\n\n                    <!-- <app-componente-cadena [componente]=\"'conteoCelular'\" [atributo]=\"'numeroCampo'\" [buscar]=\"conteoCelularBuscar\" [permisosAtributos]=\"permisosAtributos\" [(valido)]=\"validosConteoCelular['numeroCampo']\" [(dato)]=\"conteoCelular.numeroCampo\" class=\"w-100\"\n                        [enable]=\"enable\">\n                    </app-componente-cadena> -->\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"email-01\">Número de campos:</label>\n                        <kendo-numerictextbox\n                        #numeroCampoComponent=\"ngModel\"\n                       [format]=\"'n0'\"\n                       [step]=\"1\"\n                       [min]=\"0\"\n                       [autoCorrect]=\"true\"\n                       class=\"form-control\"\n                       name=\"numeroCampo\"\n                       [(ngModel)]=\"conteoCelular.numeroCampo\"\n                       [disabled]=\"!enable\"\n                     ></kendo-numerictextbox>\n                      </div>\n                    <!-- <app-componente-cadena\n            [componente]=\"'conteoCelular'\"\n            [atributo]=\"'gutta'\"\n            [buscar]=\"conteoCelularBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosConteoCelular['gutta']\"\n            [(dato)]=\"conteoCelular.gutta\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena>\n          <app-componente-cadena\n            [componente]=\"'conteoCelular'\"\n            [atributo]=\"'pliegue'\"\n            [buscar]=\"conteoCelularBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosConteoCelular['pliegue']\"\n            [(dato)]=\"conteoCelular.pliegue\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena>\n          <app-componente-cadena\n            [componente]=\"'conteoCelular'\"\n            [atributo]=\"'estriaRotura'\"\n            [buscar]=\"conteoCelularBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosConteoCelular['estriaRotura']\"\n            [(dato)]=\"conteoCelular.estriaRotura\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena>\n          <app-componente-cadena\n            [componente]=\"'conteoCelular'\"\n            [atributo]=\"'deposito'\"\n            [buscar]=\"conteoCelularBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosConteoCelular['deposito']\"\n            [(dato)]=\"conteoCelular.deposito\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena> -->\n\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"control-label\">Definir discontinuidades:</label>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"radio-inline\">\n                    <input\n                      [attr.disabled]=\"enable ? null : false\"\n                      type=\"checkbox\"\n                      name=\"gutta\"\n                      class=\"form-checkbox-input\"\n                      [value]=\"1\"\n                      [(ngModel)]=\"conteoCelular.gutta\"\n                    />\n                    Guttas\n                  </label>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"radio-inline\">\n                    <input\n                      [attr.disabled]=\"enable ? null : false\"\n                      type=\"checkbox\"\n                      name=\"pliegue\"\n                      [value]=\"1\"\n                      class=\"form-checkbox-input\"\n                      [(ngModel)]=\"conteoCelular.pliegue\"\n                    />\n                    Pliegues\n                  </label>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"radio-inline\">\n                    <input\n                      [attr.disabled]=\"enable ? null : false\"\n                      type=\"checkbox\"\n                      name=\"estriaRotura\"\n                      [value]=\"1\"\n                      class=\"form-checkbox-input\"\n                      [(ngModel)]=\"conteoCelular.estriaRotura\"\n                    />\n                    Estrias, roturas\n                  </label>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"radio-inline\">\n                    <input\n                      [attr.disabled]=\"enable ? null : false\"\n                      type=\"checkbox\"\n                      name=\"deposito\"\n                      [value]=\"1\"\n                      class=\"form-checkbox-input\"\n                      [(ngModel)]=\"conteoCelular.deposito\"\n                    />\n                    Depósitos\n                  </label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!--           <app-componente-cadena\n            [componente]=\"'conteoCelular'\"\n            [atributo]=\"'discontinuidad'\"\n            [buscar]=\"conteoCelularBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosConteoCelular['discontinuidad']\"\n            [(dato)]=\"conteoCelular.discontinuidad\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena>\n          <app-componente-cadena\n            [componente]=\"'conteoCelular'\"\n            [atributo]=\"'otra'\"\n            [buscar]=\"conteoCelularBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosConteoCelular['otra']\"\n            [(dato)]=\"conteoCelular.otra\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena>\n          <app-componente-cadena-larga\n            [componente]=\"'conteoCelular'\"\n            [atributo]=\"'otraDescripcion'\"\n            [buscar]=\"conteoCelularBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosConteoCelular['otraDescripcion']\"\n            [(dato)]=\"conteoCelular.otraDescripcion\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena-larga>\n          <app-componente-cadena\n            [componente]=\"'conteoCelular'\"\n            [atributo]=\"'zonaCelular'\"\n            [buscar]=\"conteoCelularBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosConteoCelular['zonaCelular']\"\n            [(dato)]=\"conteoCelular.zonaCelular\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena> -->\n\n                    <hr>\n\n                    <!--           <app-componente-cadena\n            [componente]=\"'conteoCelular'\"\n            [atributo]=\"'valoracionCi'\"\n            [buscar]=\"conteoCelularBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosConteoCelular['valoracionCi']\"\n            [(dato)]=\"conteoCelular.valoracionCi\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena> -->\n                    <!--           <app-componente-cadena\n            [componente]=\"'conteoCelular'\"\n            [atributo]=\"'valoracionCd'\"\n            [buscar]=\"conteoCelularBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosConteoCelular['valoracionCd']\"\n            [(dato)]=\"conteoCelular.valoracionCd\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena> -->\n\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <label class=\"control-label\">Valoraciones:</label>\n                            <label class=\"radio-inline\" style=\"margin-left: 15px;\">\n                <input\n                  [attr.disabled]=\"enable ? null : false\"\n                  type=\"radio\"\n                  name=\"valoracion\"\n                  class=\"form-checkbox-input\"\n                  [value]=\"1\"\n                  [(ngModel)]=\"conteoCelular.valoracion\"\n                />\n                Apta\n              </label>\n                            <label class=\"radio-inline\">\n                <input\n                  [attr.disabled]=\"enable ? null : false\"\n                  type=\"radio\"\n                  name=\"valoracion\"\n                  [value]=\"0\"\n                  class=\"form-checkbox-input\"\n                  [(ngModel)]=\"conteoCelular.valoracion\"\n                />\n                No apta\n              </label>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <label class=\"control-label\">Observaciones</label>\n\n                            <app-componente-cadena [componente]=\"'conteoCelular'\" [atributo]=\"'observacion'\" [buscar]=\"conteoCelularBuscar\" [permisosAtributos]=\"permisosAtributos\" [(valido)]=\"validosConteoCelular['observacion']\" [(dato)]=\"conteoCelular.observacion\" class=\"w-100\"\n                                [enable]=\"enable\">\n                            </app-componente-cadena>\n\n                        </div>\n                    </div>\n\n\n\n                    <app-componente-cadena [componente]=\"'conteoCelular'\" [atributo]=\"'responsableMicroscopio'\" [buscar]=\"conteoCelularBuscar\" [permisosAtributos]=\"permisosAtributos\" [(valido)]=\"validosConteoCelular['responsableMicroscopio']\" [(dato)]=\"conteoCelular.responsableMicroscopio\"\n                        class=\"w-100\" [enable]=\"enable\">\n                    </app-componente-cadena>\n\n                    <!--           <app-componente-cadena-larga\n            [componente]=\"'conteoCelular'\"\n            [atributo]=\"'valoracionFinalEndotelioCi'\"\n            [buscar]=\"conteoCelularBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosConteoCelular['valoracionFinalEndotelioCi']\"\n            [(dato)]=\"conteoCelular.valoracionFinalEndotelioCi\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena-larga> -->\n                    <!--           <app-componente-cadena-larga\n            [componente]=\"'conteoCelular'\"\n            [atributo]=\"'valoracionFinalEndotelioCd'\"\n            [buscar]=\"conteoCelularBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosConteoCelular['valoracionFinalEndotelioCd']\"\n            [(dato)]=\"conteoCelular.valoracionFinalEndotelioCd\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena-larga> -->\n\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <label class=\"control-label\">VALORACIÓN FINAL DEL ENDOTELIO CORNEAL:</label>\n                            <label class=\"radio-inline\" style=\"margin-left: 15px;\">\n                <input\n                  [attr.disabled]=\"enable ? null : false\"\n                  type=\"radio\"\n                  name=\"valoracionFinalEndotelio\"\n                  class=\"form-checkbox-input\"\n                  [value]=\"1\"\n                  [(ngModel)]=\"conteoCelular.valoracionFinalEndotelio\"\n                />\n                Apta\n              </label>\n                            <label class=\"radio-inline\">\n                <input\n                  [attr.disabled]=\"enable ? null : false\"\n                  type=\"radio\"\n                  name=\"valoracionFinalEndotelio\"\n                  [value]=\"0\"\n                  class=\"form-checkbox-input\"\n                  [(ngModel)]=\"conteoCelular.valoracionFinalEndotelio\"\n                />\n                No apta\n              </label>\n                        </div>\n                    </div>\n                    <hr>\n                    <h4>ID Adicional</h4>\n                    <kendo-grid [data]=\"listaDesgloseCornea\" [height]=\"200\" (add)=\"onSaveDesgloseCornea()\">\n                        <ng-template kendoGridToolbarTemplate>\n                            <button kendoGridAddCommand [disabled]=\"!enable\"><span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span></button>\n                        </ng-template>\n                        <kendo-grid-column field=\"idadicional\" title=\"Id Adicional\">\n                        </kendo-grid-column>\n                        <ng-template kendoGridNoRecordsTemplate>\n                            Sin registros.\n                        </ng-template>\n                    </kendo-grid>\n                    <kendo-dialog *ngIf=\"modalActive\" (close)=\"closeModal()\" [width]=\"400\">\n                        <kendo-dialog-titlebar>\n                            Agregar Id Adicional\n                        </kendo-dialog-titlebar>\n\n                        <form novalidate>\n                            <div class=\"form-group\">\n                                <label class=\"control-label\">Descripción:</label>\n                                <input [(ngModel)]=\"desgloseCornea.descripcion\" name=\"descripcion\" class=\"form-control\" placeholder=\"Descripción\" type=\"text\" style=\"width: 90%; height: 25px;\">\n                            </div>\n                        </form>\n\n                        <kendo-dialog-actions>\n                            <button class=\"k-button\" (click)=\"closeModal()\">Cancelar</button>\n                            <button class=\"k-button k-primary\" (click)=\"onSaveDesgloseCornea($event)\" [disabled]=\"!desgloseCornea.descripcion\">Guardar</button>\n                        </kendo-dialog-actions>\n                    </kendo-dialog>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/conteo-celulares/conteo-celular/conteo-celular.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/conteo-celulares/conteo-celular/conteo-celular.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ConteoCelularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConteoCelularComponent", function() { return ConteoCelularComponent; });
/* harmony import */ var _desglose_corneas_shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../desglose-corneas/shared/desglose-cornea */ "./src/app/desglose-corneas/shared/desglose-cornea.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_conteo_celular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/conteo-celular */ "./src/app/conteo-celulares/shared/conteo-celular.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConteoCelularComponent = /** @class */ (function () {
    function ConteoCelularComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.conteoCelularChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.usuarioUltMovConteoCelularUsuarioEditar = false;
        this.idevaluacionSolicitudConteoCelularEvaluacionSolicitudEditar = false;
        this.saveDesgloseCorneaEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.listaDesgloseCornea = [];
        this.modalActive = false;
    }
    ConteoCelularComponent.prototype.actualizarConteoCelular = function () {
        if (this.conteoCelular.id == null) {
            this.conteoCelularService.guardarConteoCelular(this.conteoCelular, this.evtGuardar, this);
        }
        else {
            this.conteoCelularService.actualizarConteoCelular(this.conteoCelular, this.evtActualiza, this);
        }
    };
    ConteoCelularComponent.prototype.evtGuardar = function (conteoCelular, obj) {
        obj.conteoCelular = conteoCelular;
        obj.conteoCelularChange.emit(obj.conteoCelular);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    };
    ConteoCelularComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.conteoCelularChange.emit(obj.conteoCelular);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    ConteoCelularComponent.prototype.ngOnChanges = function (changes) {
        if (changes.opcion && changes.opcion.currentValue != null) {
            if (changes.opcion.currentValue == 1) {
                this.opcion = 1;
                this.actualizarConteoCelular();
            }
        }
    };
    ConteoCelularComponent.prototype.ngOnInit = function () {
    };
    ConteoCelularComponent.prototype.addHandler = function () {
        this.modalActive = true;
    };
    ConteoCelularComponent.prototype.closeModal = function () {
        this.modalActive = false;
    };
    ConteoCelularComponent.prototype.onSaveDesgloseCornea = function () {
        this.saveDesgloseCorneaEvent.emit();
        this.closeModal();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], ConteoCelularComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], ConteoCelularComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], ConteoCelularComponent.prototype, "conteoCelularBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], ConteoCelularComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], ConteoCelularComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], ConteoCelularComponent.prototype, "validosConteoCelular", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _shared_conteo_celular__WEBPACK_IMPORTED_MODULE_2__["ConteoCelular"])
    ], ConteoCelularComponent.prototype, "conteoCelular", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], ConteoCelularComponent.prototype, "conteoCelularService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Number)
    ], ConteoCelularComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], ConteoCelularComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], ConteoCelularComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], ConteoCelularComponent.prototype, "conteoCelularChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], ConteoCelularComponent.prototype, "ocultarConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], ConteoCelularComponent.prototype, "lista_usuarioUltMovConteoCelularUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], ConteoCelularComponent.prototype, "lista_idevaluacionSolicitudConteoCelularEvaluacionSolicitud", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], ConteoCelularComponent.prototype, "enable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _desglose_corneas_shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_0__["DesgloseCornea"])
    ], ConteoCelularComponent.prototype, "desgloseCornea", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], ConteoCelularComponent.prototype, "saveDesgloseCorneaEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array)
    ], ConteoCelularComponent.prototype, "listaDesgloseCornea", void 0);
    ConteoCelularComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-conteo-celular',
            template: __webpack_require__(/*! ./conteo-celular.component.html */ "./src/app/conteo-celulares/conteo-celular/conteo-celular.component.html"),
            styles: [__webpack_require__(/*! ./conteo-celular.component.css */ "./src/app/conteo-celulares/conteo-celular/conteo-celular.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], ConteoCelularComponent);
    return ConteoCelularComponent;
}());



/***/ }),

/***/ "./src/app/conteo-celulares/shared/configurar-conteo-celular.ts":
/*!**********************************************************************!*\
  !*** ./src/app/conteo-celulares/shared/configurar-conteo-celular.ts ***!
  \**********************************************************************/
/*! exports provided: ConfigurarConteoCelular */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurarConteoCelular", function() { return ConfigurarConteoCelular; });
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");

var ConfigurarConteoCelular = /** @class */ (function () {
    //   rutaAgregar:string;
    function ConfigurarConteoCelular() {
        this.urlprovider = new _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__["URLProvider"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "conteoCelular";
        this.rutaLista = this.crudServiceBaseUrl + "/getConteoCelulares";
        this.rutaAgregar = this.crudServiceBaseUrl + "/guardarConteoCelular";
        this.rutaActualizar = this.crudServiceBaseUrl + "/actualizarConteoCelular";
        this.rutaEliminar = this.crudServiceBaseUrl + "/eliminarConteoCelular";
        this.titulo = "Catálogo ConteoCelular";
        this.permisosAtributos = null;
        this.permisosTabla = null;
        this.conteoCelularConsulta = null;
        this.campoAgEl = null;
        this.tipocampoAgEl = null;
        this.altoComponente = 500;
    }
    ConfigurarConteoCelular.prototype.lectura = function () {
        return {
            url: this.rutaLista,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarConteoCelular.prototype.lecturaP = function (evt, dat) {
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
    ConfigurarConteoCelular.prototype.eliminar = function () {
        return {
            url: this.rutaEliminar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarConteoCelular.prototype.eliminarP = function (evt, dat) {
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
    ConfigurarConteoCelular.prototype.agregar = function () {
        return {
            url: this.rutaAgregar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarConteoCelular.prototype.agregarP = function (evt, dat) {
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
    return ConfigurarConteoCelular;
}());



/***/ }),

/***/ "./src/app/conteo-celulares/shared/conteo-celular.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/conteo-celulares/shared/conteo-celular.service.ts ***!
  \*******************************************************************/
/*! exports provided: ConteoCelularService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConteoCelularService", function() { return ConteoCelularService; });
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


var ConteoCelularService = /** @class */ (function () {
    function ConteoCelularService(globalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }
    ConteoCelularService.prototype.setConteoCelular = function (conteoCelular) {
        this.conteoCelular = conteoCelular;
    };
    ConteoCelularService.prototype.getConteoCelular = function () {
        return this.conteoCelular;
    };
    ConteoCelularService.prototype.guardarConteoCelular = function (conteoCelular, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(conteoCelular, 'conteoCelular/guardarConteoCelular')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.guardarListaConteoCelular = function (conteoCelular, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(conteoCelular, 'conteoCelular/guardarListaConteoCelular')
            .subscribe(function (data) {
            _evento(_this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.actualizarConteoCelular = function (conteoCelular, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(conteoCelular, 'conteoCelular/actualizarConteoCelular')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.actualizarListaConteoCelular = function (conteoCelular, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(conteoCelular, 'conteoCelular/actualizarListaConteoCelular')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.eliminarConteoCelular = function (conteoCelular, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(conteoCelular, 'conteoCelular/eliminarConteoCelular')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelulardb = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'conteoCelular/getConteoCelular')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelulares = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'conteoCelular/getConteoCelulares')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesActivos = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'conteoCelular/getConteoCelularesActivos')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.lazyConteoCelular = function (conteoCelular, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(conteoCelular, 'conteoCelular/lazyConteoCelular')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'conteoCelular/getConteoCelularById')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'conteoCelular/getConteoCelularesById')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularByIdnumeroCelula = function (idnumeroCelula, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idnumeroCelula, 'conteoCelular/getConteoCelularByIdnumeroCelula')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByIdnumeroCelula = function (idnumeroCelula, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idnumeroCelula, 'conteoCelular/getConteoCelularesByIdnumeroCelula')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'conteoCelular/getConteoCelularByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'conteoCelular/getConteoCelularesByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularByDiscontinuidad = function (discontinuidad, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(discontinuidad, 'conteoCelular/getConteoCelularByDiscontinuidad')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByDiscontinuidad = function (discontinuidad, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(discontinuidad, 'conteoCelular/getConteoCelularesByDiscontinuidad')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularByNormalMenor33 = function (normalMenor33, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(normalMenor33, 'conteoCelular/getConteoCelularByNormalMenor33')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByNormalMenor33 = function (normalMenor33, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(normalMenor33, 'conteoCelular/getConteoCelularesByNormalMenor33')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularByNumeroCampo = function (numeroCampo, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(numeroCampo, 'conteoCelular/getConteoCelularByNumeroCampo')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByNumeroCampo = function (numeroCampo, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(numeroCampo, 'conteoCelular/getConteoCelularesByNumeroCampo')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularByGutta = function (gutta, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(gutta, 'conteoCelular/getConteoCelularByGutta')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByGutta = function (gutta, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(gutta, 'conteoCelular/getConteoCelularesByGutta')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularByHexagonalidad = function (hexagonalidad, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(hexagonalidad, 'conteoCelular/getConteoCelularByHexagonalidad')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByHexagonalidad = function (hexagonalidad, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(hexagonalidad, 'conteoCelular/getConteoCelularesByHexagonalidad')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularByResponsableMicroscopio = function (responsableMicroscopio, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(responsableMicroscopio, 'conteoCelular/getConteoCelularByResponsableMicroscopio')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByResponsableMicroscopio = function (responsableMicroscopio, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(responsableMicroscopio, 'conteoCelular/getConteoCelularesByResponsableMicroscopio')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularByPaquimetria = function (paquimetria, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(paquimetria, 'conteoCelular/getConteoCelularByPaquimetria')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByPaquimetria = function (paquimetria, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(paquimetria, 'conteoCelular/getConteoCelularesByPaquimetria')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularByHomogeneidad = function (homogeneidad, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(homogeneidad, 'conteoCelular/getConteoCelularByHomogeneidad')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByHomogeneidad = function (homogeneidad, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(homogeneidad, 'conteoCelular/getConteoCelularesByHomogeneidad')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularByZonaCelular = function (zonaCelular, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(zonaCelular, 'conteoCelular/getConteoCelularByZonaCelular')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByZonaCelular = function (zonaCelular, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(zonaCelular, 'conteoCelular/getConteoCelularesByZonaCelular')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularByCvtamano = function (cvtamano, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(cvtamano, 'conteoCelular/getConteoCelularByCvtamano')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByCvtamano = function (cvtamano, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(cvtamano, 'conteoCelular/getConteoCelularesByCvtamano')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularByOtraDescripcion = function (otraDescripcion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(otraDescripcion, 'conteoCelular/getConteoCelularByOtraDescripcion')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByOtraDescripcion = function (otraDescripcion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(otraDescripcion, 'conteoCelular/getConteoCelularesByOtraDescripcion')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularByPlemorfismo = function (plemorfismo, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(plemorfismo, 'conteoCelular/getConteoCelularByPlemorfismo')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByPlemorfismo = function (plemorfismo, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(plemorfismo, 'conteoCelular/getConteoCelularesByPlemorfismo')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularByNumeroCelular = function (numeroCelular, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(numeroCelular, 'conteoCelular/getConteoCelularByNumeroCelular')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByNumeroCelular = function (numeroCelular, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(numeroCelular, 'conteoCelular/getConteoCelularesByNumeroCelular')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularByOtra = function (otra, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(otra, 'conteoCelular/getConteoCelularByOtra')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByOtra = function (otra, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(otra, 'conteoCelular/getConteoCelularesByOtra')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularByPliegue = function (pliegue, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(pliegue, 'conteoCelular/getConteoCelularByPliegue')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByPliegue = function (pliegue, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(pliegue, 'conteoCelular/getConteoCelularesByPliegue')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'conteoCelular/getConteoCelularByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'conteoCelular/getConteoCelularesByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularByMayor60 = function (mayor60, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(mayor60, 'conteoCelular/getConteoCelularByMayor60')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByMayor60 = function (mayor60, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(mayor60, 'conteoCelular/getConteoCelularesByMayor60')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularByDeposito = function (deposito, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(deposito, 'conteoCelular/getConteoCelularByDeposito')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByDeposito = function (deposito, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(deposito, 'conteoCelular/getConteoCelularesByDeposito')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularByObservacionCd = function (observacionCd, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(observacionCd, 'conteoCelular/getConteoCelularByObservacionCd')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByObservacionCd = function (observacionCd, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(observacionCd, 'conteoCelular/getConteoCelularesByObservacionCd')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularByIdpaquimetria = function (idpaquimetria, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idpaquimetria, 'conteoCelular/getConteoCelularByIdpaquimetria')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByIdpaquimetria = function (idpaquimetria, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idpaquimetria, 'conteoCelular/getConteoCelularesByIdpaquimetria')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularByValoracionCi = function (valoracionCi, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(valoracionCi, 'conteoCelular/getConteoCelularByValoracionCi')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByValoracionCi = function (valoracionCi, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(valoracionCi, 'conteoCelular/getConteoCelularesByValoracionCi')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularByPolimegatismo = function (polimegatismo, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(polimegatismo, 'conteoCelular/getConteoCelularByPolimegatismo')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByPolimegatismo = function (polimegatismo, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(polimegatismo, 'conteoCelular/getConteoCelularesByPolimegatismo')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'conteoCelular/getConteoCelularByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'conteoCelular/getConteoCelularesByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularByEstriaRotura = function (estriaRotura, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(estriaRotura, 'conteoCelular/getConteoCelularByEstriaRotura')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByEstriaRotura = function (estriaRotura, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(estriaRotura, 'conteoCelular/getConteoCelularesByEstriaRotura')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularByValoracionFinalEndotelioCd = function (valoracionFinalEndotelioCd, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(valoracionFinalEndotelioCd, 'conteoCelular/getConteoCelularByValoracionFinalEndotelioCd')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByValoracionFinalEndotelioCd = function (valoracionFinalEndotelioCd, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(valoracionFinalEndotelioCd, 'conteoCelular/getConteoCelularesByValoracionFinalEndotelioCd')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularByValoracionCd = function (valoracionCd, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(valoracionCd, 'conteoCelular/getConteoCelularByValoracionCd')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByValoracionCd = function (valoracionCd, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(valoracionCd, 'conteoCelular/getConteoCelularesByValoracionCd')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularByValoracionFinalEndotelioCi = function (valoracionFinalEndotelioCi, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(valoracionFinalEndotelioCi, 'conteoCelular/getConteoCelularByValoracionFinalEndotelioCi')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByValoracionFinalEndotelioCi = function (valoracionFinalEndotelioCi, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(valoracionFinalEndotelioCi, 'conteoCelular/getConteoCelularesByValoracionFinalEndotelioCi')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'conteoCelular/getConteoCelularByStatus')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'conteoCelular/getConteoCelularesByStatus')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'conteoCelular/getConteoCelularByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'conteoCelular/getConteoCelularesByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularByIdevaluacionSolicitud = function (idevaluacionSolicitud, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idevaluacionSolicitud, 'conteoCelular/getConteoCelularByIdevaluacionSolicitud')
            .subscribe(function (data) {
            _evento(_this.conteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.conteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByIdevaluacionSolicitud = function (idevaluacionSolicitud, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idevaluacionSolicitud, 'conteoCelular/getConteoCelularesByIdevaluacionSolicitud')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.custom = function (consulta, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(consulta, 'conteoCelular/custom')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.getConteoCelularesByDto = function (p_conteoCelular, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(p_conteoCelular, 'conteoCelular/getConteoCelularesByDto')
            .subscribe(function (data) {
            _evento(_this.listaConteoCelular = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService.prototype.notificacionHospitalProcurador = function (p_conteoCelular, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(p_conteoCelular, 'conteoCelular/notificacionHospitalProcurador')
            .subscribe(function (data) {
            _evento(_this.globalesService.util.jsonOk(data), objeto);
            (_this.listaConteoCelular);
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
    ConteoCelularService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"]])
    ], ConteoCelularService);
    return ConteoCelularService;
}());



/***/ }),

/***/ "./src/app/desglose-corneas/shared/desglose-cornea.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/desglose-corneas/shared/desglose-cornea.service.ts ***!
  \********************************************************************/
/*! exports provided: DesgloseCorneaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesgloseCorneaService", function() { return DesgloseCorneaService; });
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


var DesgloseCorneaService = /** @class */ (function () {
    function DesgloseCorneaService(globalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }
    DesgloseCorneaService.prototype.setDesgloseCornea = function (desgloseCornea) {
        this.desgloseCornea = desgloseCornea;
    };
    DesgloseCorneaService.prototype.getDesgloseCornea = function () {
        return this.desgloseCornea;
    };
    DesgloseCorneaService.prototype.guardarDesgloseCornea = function (desgloseCornea, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(desgloseCornea, 'desgloseCornea/guardarDesgloseCornea')
            .subscribe(function (data) {
            _evento(_this.desgloseCornea = _this.globalesService.util.jsonOk(data), objeto);
            (_this.desgloseCornea);
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
    DesgloseCorneaService.prototype.actualizarDesgloseCornea = function (desgloseCornea, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(desgloseCornea, 'desgloseCornea/actualizarDesgloseCornea')
            .subscribe(function (data) {
            _evento(_this.desgloseCornea = _this.globalesService.util.jsonOk(data), objeto);
            (_this.desgloseCornea);
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
    DesgloseCorneaService.prototype.eliminarDesgloseCornea = function (desgloseCornea, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(desgloseCornea, 'desgloseCornea/eliminarDesgloseCornea')
            .subscribe(function (data) {
            _evento(_this.desgloseCornea = _this.globalesService.util.jsonOk(data), objeto);
            (_this.desgloseCornea);
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
    DesgloseCorneaService.prototype.getDesgloseCorneadb = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'desgloseCornea/getDesgloseCornea')
            .subscribe(function (data) {
            _evento(_this.desgloseCornea = _this.globalesService.util.jsonOk(data), objeto);
            (_this.desgloseCornea);
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
    DesgloseCorneaService.prototype.getDesgloseCorneas = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'desgloseCornea/getDesgloseCorneas')
            .subscribe(function (data) {
            _evento(_this.listaDesgloseCornea = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDesgloseCornea);
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
    DesgloseCorneaService.prototype.getDesgloseCorneasActivos = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'desgloseCornea/getDesgloseCorneasActivos')
            .subscribe(function (data) {
            _evento(_this.listaDesgloseCornea = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDesgloseCornea);
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
    DesgloseCorneaService.prototype.lazyDesgloseCornea = function (desgloseCornea, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(desgloseCornea, 'desgloseCornea/lazyDesgloseCornea')
            .subscribe(function (data) {
            _evento(_this.desgloseCornea = _this.globalesService.util.jsonOk(data), objeto);
            (_this.desgloseCornea);
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
    DesgloseCorneaService.prototype.getDesgloseCorneaById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'desgloseCornea/getDesgloseCorneaById')
            .subscribe(function (data) {
            _evento(_this.desgloseCornea = _this.globalesService.util.jsonOk(data), objeto);
            (_this.desgloseCornea);
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
    DesgloseCorneaService.prototype.getDesgloseCorneasById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'desgloseCornea/getDesgloseCorneasById')
            .subscribe(function (data) {
            _evento(_this.listaDesgloseCornea = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDesgloseCornea);
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
    DesgloseCorneaService.prototype.getDesgloseCorneaByDescripcion = function (descripcion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(descripcion, 'desgloseCornea/getDesgloseCorneaByDescripcion')
            .subscribe(function (data) {
            _evento(_this.desgloseCornea = _this.globalesService.util.jsonOk(data), objeto);
            (_this.desgloseCornea);
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
    DesgloseCorneaService.prototype.getDesgloseCorneasByDescripcion = function (descripcion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(descripcion, 'desgloseCornea/getDesgloseCorneasByDescripcion')
            .subscribe(function (data) {
            _evento(_this.listaDesgloseCornea = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDesgloseCornea);
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
    DesgloseCorneaService.prototype.getDesgloseCorneaByIdadicional = function (idadicional, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idadicional, 'desgloseCornea/getDesgloseCorneaByIdadicional')
            .subscribe(function (data) {
            _evento(_this.desgloseCornea = _this.globalesService.util.jsonOk(data), objeto);
            (_this.desgloseCornea);
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
    DesgloseCorneaService.prototype.getDesgloseCorneasByIdadicional = function (idadicional, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idadicional, 'desgloseCornea/getDesgloseCorneasByIdadicional')
            .subscribe(function (data) {
            _evento(_this.listaDesgloseCornea = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDesgloseCornea);
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
    DesgloseCorneaService.prototype.getDesgloseCorneaByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'desgloseCornea/getDesgloseCorneaByStatus')
            .subscribe(function (data) {
            _evento(_this.desgloseCornea = _this.globalesService.util.jsonOk(data), objeto);
            (_this.desgloseCornea);
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
    DesgloseCorneaService.prototype.getDesgloseCorneasByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'desgloseCornea/getDesgloseCorneasByStatus')
            .subscribe(function (data) {
            _evento(_this.listaDesgloseCornea = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDesgloseCornea);
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
    DesgloseCorneaService.prototype.getDesgloseCorneaByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'desgloseCornea/getDesgloseCorneaByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.desgloseCornea = _this.globalesService.util.jsonOk(data), objeto);
            (_this.desgloseCornea);
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
    DesgloseCorneaService.prototype.getDesgloseCorneasByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'desgloseCornea/getDesgloseCorneasByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.listaDesgloseCornea = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDesgloseCornea);
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
    DesgloseCorneaService.prototype.getDesgloseCorneaByIdevaluacionSolicitud = function (idevaluacionSolicitud, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idevaluacionSolicitud, 'desgloseCornea/getDesgloseCorneaByIdevaluacionSolicitud')
            .subscribe(function (data) {
            _evento(_this.desgloseCornea = _this.globalesService.util.jsonOk(data), objeto);
            (_this.desgloseCornea);
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
    DesgloseCorneaService.prototype.getDesgloseCorneasByIdevaluacionSolicitud = function (idevaluacionSolicitud, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idevaluacionSolicitud, 'desgloseCornea/getDesgloseCorneasByIdevaluacionSolicitud')
            .subscribe(function (data) {
            _evento(_this.listaDesgloseCornea = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDesgloseCornea);
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
    DesgloseCorneaService.prototype.custom = function (consulta, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(consulta, 'desgloseCornea/custom')
            .subscribe(function (data) {
            _evento(_this.listaDesgloseCornea = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDesgloseCornea);
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
    DesgloseCorneaService.prototype.getDesgloseCorneasByDto = function (p_desgloseCornea, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(p_desgloseCornea, 'desgloseCornea/getDesgloseCorneasByDto')
            .subscribe(function (data) {
            _evento(_this.listaDesgloseCornea = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDesgloseCornea);
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
    DesgloseCorneaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"]])
    ], DesgloseCorneaService);
    return DesgloseCorneaService;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-conteo-celulares-conteo-celular-module~app-desglose-corneas-desglose-cornea-module~app-e~67573ad3.js.map