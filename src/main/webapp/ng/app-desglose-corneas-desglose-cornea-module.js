(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-desglose-corneas-desglose-cornea-module"],{

/***/ "./src/app/desglose-corneas/desglose-cornea-conjunto/desglose-cornea-conjunto.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/desglose-corneas/desglose-cornea-conjunto/desglose-cornea-conjunto.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/desglose-corneas/desglose-cornea-conjunto/desglose-cornea-conjunto.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/desglose-corneas/desglose-cornea-conjunto/desglose-cornea-conjunto.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\"  >\n    <li *ngFor =  \"let desgloseCornea of listaDesgloseCornea \" [ngClass]=\"{ 'active':idSeleccionado=== 'I-'+desgloseCornea.id}\"\n        (click)=\"elegir(desgloseCornea,'I' )\" >\n        <a data-toggle=\"tab\" href=\"#tab-I-{{desgloseCornea.id}}\">{{desgloseCornea.id}}</a>\n    </li>\n    <li *ngFor =  \"let desgloseCornea of listaDesgloseCorneaN \" [ngClass]=\"{ 'active':idSeleccionado=== 'N-'+desgloseCornea.id}\"\n        (click)=\"elegir(desgloseCornea, 'N')\" >\n        <a data-toggle=\"tab\" href=\"#tab-N-{{desgloseCornea.id}}\">T-{{desgloseCornea.id}}</a>\n    </li>\n</ul>\n<div class=\"panel panel-default\"  >\n     <div  class=\"tab-content\">\n        <div *ngFor = \"let desgloseCornea of listaDesgloseCornea ; let i = index \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='I-'+desgloseCornea.id}\" id=\"tab-I-{{desgloseCornea.id}}\">\n\t\t\t<app-desglose-cornea [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [desgloseCorneaBuscar]=\"desgloseCorneaBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosDesgloseCornea]=\"validosDesgloseCornea\"  \n\t\t\t\t\t\t  [desgloseCorneaService]=\"desgloseCorneaService\" [(opcion)]=\"opcionDesgloseCornea\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(desgloseCornea)]=\"listaDesgloseCornea[i]\"  [ocultarConjuntos]=\"ocultarConjuntosDesgloseCornea\"\n                           [lista_usuarioUltMovDesgloseCorneaUsuario]=\"lista_usuarioUltMovDesgloseCorneaUsuario\" \n                           [lista_idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitud]=\"lista_idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitud\" \n\n\t\t\t\t\t  >\n\t\t\t</app-desglose-cornea>\n        </div>\n        <div *ngFor = \"let desgloseCornea of listaDesgloseCorneaN;  let i = index  \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='N-'+desgloseCornea.id}\" id=\"tab-N-{{desgloseCornea.id}}\">\n\t\t\t<app-desglose-cornea [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [desgloseCorneaBuscar]=\"desgloseCorneaBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosDesgloseCornea]=\"validosDesgloseCornea\"  \n\t\t\t\t\t\t  [desgloseCorneaService]=\"desgloseCorneaService\" [(opcion)]=\"opcionDesgloseCornea\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(desgloseCornea)]=\"listaDesgloseCorneaN[i]\"  [ocultarConjuntos]=\"ocultarConjuntosDesgloseCornea\"\n                           [lista_usuarioUltMovDesgloseCorneaUsuario]=\"lista_usuarioUltMovDesgloseCorneaUsuario\" \n                           [lista_idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitud]=\"lista_idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitud\" \n\n\t\t\t\t\t  >\n\t\t\t</app-desglose-cornea>  \n        </div>\n\n    </div>\n    <div class=\"panel-footer\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"agregarNuevo()\">\n            <span class=\"fa fa-plus-circle\" aria-hidden=\"true\" style=\"font-size:36px\"></span> AGREGAR\n        </button>\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"actualizaTodo()\">\n            <span class=\"fa fa-reply-all\" aria-hidden=\"true\" style=\"font-size:36px\"></span> ACTUALIZAR TODO\n        </button>\n    </div>\n</div>\t\t\t\n"

/***/ }),

/***/ "./src/app/desglose-corneas/desglose-cornea-conjunto/desglose-cornea-conjunto.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/desglose-corneas/desglose-cornea-conjunto/desglose-cornea-conjunto.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: DesgloseCorneaConjuntoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesgloseCorneaConjuntoComponent", function() { return DesgloseCorneaConjuntoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/desglose-cornea */ "./src/app/desglose-corneas/shared/desglose-cornea.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DesgloseCorneaConjuntoComponent = /** @class */ (function () {
    function DesgloseCorneaConjuntoComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovDesgloseCorneaUsuarioEditar = false;
        this.idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitudEditar = false;
        this.listaDesgloseCorneaN = [];
        this.listaDesgloseCornea = [];
        this.listaDesgloseCorneaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.desgloseCorneaN = new _shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_1__["DesgloseCornea"]();
        this.desgloseCorneaNChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.agregados = 0;
        this.actualizados = 0;
        this.idSeleccionado = "N-0";
    }
    DesgloseCorneaConjuntoComponent.prototype.elegir = function (desgloseCornea, tipo) {
        this.idSeleccionado = tipo + "-" + desgloseCornea.id;
        this.desgloseCorneaN = desgloseCornea;
    };
    DesgloseCorneaConjuntoComponent.prototype.ngOnInit = function () {
        this.desgloseCorneaN.id = 0;
        this.listaDesgloseCorneaN.push(Object.assign({}, this.desgloseCorneaN));
        this.usuariologueado = this.globalesService.dameUsuario();
    };
    DesgloseCorneaConjuntoComponent.prototype.agregarNuevo = function () {
        var pg = new _shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_1__["DesgloseCornea"]();
        pg.id = this.listaDesgloseCorneaN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaDesgloseCorneaN.push(pg);
    };
    DesgloseCorneaConjuntoComponent.prototype.actualizaTodo = function () {
        this.agregados = 0;
        this.actualizados = 0;
        for (var _i = 0, _a = this.listaDesgloseCornea; _i < _a.length; _i++) {
            var desgloseCornea = _a[_i];
            this.desgloseCorneaService.actualizarDesgloseCornea(desgloseCornea, this.evtActualiza, this);
        }
        for (var _b = 0, _c = this.listaDesgloseCorneaN; _b < _c.length; _b++) {
            var desgloseCornea = _c[_b];
            desgloseCornea.id = null;
            this.desgloseCorneaService.guardarDesgloseCornea(desgloseCornea, this.evtGuardar, this);
        }
    };
    DesgloseCorneaConjuntoComponent.prototype.evtGuardar = function (desgloseCornea, obj) {
        obj.agregados++;
        obj.listaDesgloseCornea.push(desgloseCornea);
        if (obj.agregados >= obj.listaDesgloseCorneaN.length) {
            obj.desgloseCorneaN = new _shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_1__["DesgloseCornea"]();
            obj.listaDesgloseCorneaN = [];
            obj.desgloseCorneaN.id = 0;
            obj.idSeleccionado = "N-" + obj.desgloseCorneaN.id;
            obj.listaDesgloseCorneaN.push(Object.assign({}, obj.desgloseCorneaN));
            obj.listaDesgloseCorneaChange.emit(obj.listaDesgloseCornea);
        }
        if (obj.agregados >= obj.listaDesgloseCorneaN.length &&
            obj.actualizados >= obj.listaDesgloseCornea.length) {
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    DesgloseCorneaConjuntoComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.actualizados++;
            if (obj.agregados >= obj.listaDesgloseCorneaN.length &&
                obj.actualizados >= obj.listaDesgloseCornea.length) {
                obj.opcion = 0;
                obj.opcion.emit(obj.opcion);
            }
        }
    };
    DesgloseCorneaConjuntoComponent.prototype.ngOnChanges = function (changes) {
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
    ], DesgloseCorneaConjuntoComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DesgloseCorneaConjuntoComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DesgloseCorneaConjuntoComponent.prototype, "desgloseCorneaBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DesgloseCorneaConjuntoComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DesgloseCorneaConjuntoComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DesgloseCorneaConjuntoComponent.prototype, "validosDesgloseCornea", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DesgloseCorneaConjuntoComponent.prototype, "ocultarConjuntosDesgloseCornea", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DesgloseCorneaConjuntoComponent.prototype, "desgloseCorneaService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DesgloseCorneaConjuntoComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DesgloseCorneaConjuntoComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DesgloseCorneaConjuntoComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DesgloseCorneaConjuntoComponent.prototype, "lista_usuarioUltMovDesgloseCorneaUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DesgloseCorneaConjuntoComponent.prototype, "lista_idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitud", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DesgloseCorneaConjuntoComponent.prototype, "listaDesgloseCornea", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DesgloseCorneaConjuntoComponent.prototype, "listaDesgloseCorneaChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_1__["DesgloseCornea"])
    ], DesgloseCorneaConjuntoComponent.prototype, "desgloseCorneaN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DesgloseCorneaConjuntoComponent.prototype, "desgloseCorneaNChange", void 0);
    DesgloseCorneaConjuntoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-desglose-cornea-conjunto',
            template: __webpack_require__(/*! ./desglose-cornea-conjunto.component.html */ "./src/app/desglose-corneas/desglose-cornea-conjunto/desglose-cornea-conjunto.component.html"),
            styles: [__webpack_require__(/*! ./desglose-cornea-conjunto.component.css */ "./src/app/desglose-corneas/desglose-cornea-conjunto/desglose-cornea-conjunto.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], DesgloseCorneaConjuntoComponent);
    return DesgloseCorneaConjuntoComponent;
}());



/***/ }),

/***/ "./src/app/desglose-corneas/desglose-cornea-crud/desglose-cornea-crud.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/desglose-corneas/desglose-cornea-crud/desglose-cornea-crud.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/desglose-corneas/desglose-cornea-crud/desglose-cornea-crud.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/desglose-corneas/desglose-cornea-crud/desglose-cornea-crud.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"panel panel-default\">\n        <app-desglose-cornea [usuariologueado]=\"usuariologueado\"\n                           [etiquetaGeneral]=\"permisosTabla?.etiqueta\"\n                           [desgloseCorneaBuscar]=\"desgloseCorneaBuscar\"\n                           [permisosAtributos]=\"permisosAtributos\"\n                           [permisosConjuntos]=\"permisosConjuntos\"\n                           [validosDesgloseCornea]=\"validosDesgloseCornea\"\n                           [desgloseCorneaService]=\"desgloseCornea_service\"\n                           [(opcion)]=\"opcionDesgloseCornea\"\n                           [globalesService]=\"globalesService\"\n                           [(desgloseCornea)]=\"desgloseCornea\"\n                           [ocultarConjuntos]=\"ocultarConjuntosDesgloseCornea\"\n                           [lista_usuarioUltMovDesgloseCorneaUsuario]=\"lista_usuarioUltMovDesgloseCorneaUsuario\"\n                           [lista_idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitud]=\"lista_idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitud\"\n\n\t\t\t\t\t  >\n\n        </app-desglose-cornea>\n\n        <div class=\"panel-footer\" style=\"text-align: center\">\n\t\t  <div style=\"display: inline-block;width: 90%;\">\n            <button type=\"button\" class=\"btn btn-primary btn-buscar\" [class.hidden]=\"!desgloseCorneaBuscar\" (click)=\"buscarDesgloseCorneaFront()\"><span class=\"fa fa-search\"></span> Buscar</button>\n            <button type=\"button\" class=\"btn btn-success btn-agregar\" [class.hidden]=\"!desgloseCorneaAgregar\" (click)=\"nuevoDesgloseCorneaFront()\" ><span class=\"fa fa-newspaper\"></span>Nuevo </button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"!desgloseCorneaActualizar\" (click)=\"actualizarDesgloseCorneaFront()\"><span class=\"fa fa-arrow-up\"></span> Actualizar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-eliminar\"  [class.hidden]=\"!desgloseCorneaEliminar\" (click)=\"eliminarDesgloseCorneaFront()\"> <span class=\"fa fa-trash\"></span>Eliminar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-guardar\"  [disabled]=\"!validaTodosc\" [class.hidden]=\"!desgloseCorneaGuardar\" (click)=\"guardarDesgloseCorneaFront()\"><span class=\"fa fa-floppy-disk\"></span>Guardar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-cancelar\"  [class.hidden]=\"!desgloseCorneaCancelar\" (click)=\"cancelarDesgloseCorneaFront()\"><span class=\"fa fa-remove\"></span>Cancelar</button>\n            <button type=\"button\" class=\"btn btn-primary btn-limpiar\"  (click)=\"limpiarCampos()\">Limpiar Campos</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteDesgloseCorneaWord\" (click)=\"reporteDesgloseCorneaWord()\"> <span class=\"fa fa-download-alt\"></span>Word</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteDesgloseCorneaExcel\" (click)=\"reporteDesgloseCorneaExcel()\"> <span class=\"fa fa-download-alt\"></span> Excel</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteDesgloseCorneaPdf\" (click)=\"reporteDesgloseCorneaPdf()\"><span class=\"fa fa-download-alt\"></span> PDF</button>\n          </div>\n\n        </div>\n    </div>\n    <div class=\"modal fade\" id=\"buscarDesgloseCornea_{{nombre}}\" role=\"dialog\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n                <div class=\"modal-body\">\n                    <app-desglose-cornea-list-kendo [nombregrid]=\"'buscar_'+nombre\"  [configuracionDesgloseCornea]=\"configuracionDesgloseCornea\"  (desgloseCorneaSeleccionado) =\"evtDesgloseCorneaSeleccionado($event)\">  </app-desglose-cornea-list-kendo>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                </div>\n            </div>\n\n        </div>\n    </div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/desglose-corneas/desglose-cornea-crud/desglose-cornea-crud.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/desglose-corneas/desglose-cornea-crud/desglose-cornea-crud.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DesgloseCorneaCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesgloseCorneaCrudComponent", function() { return DesgloseCorneaCrudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/core.service */ "./src/app/shared/core.service.ts");
/* harmony import */ var _shared_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/file.service */ "./src/app/shared/file.service.ts");
/* harmony import */ var _shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/desglose-cornea */ "./src/app/desglose-corneas/shared/desglose-cornea.ts");
/* harmony import */ var _shared_desglose_cornea_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/desglose-cornea.service */ "./src/app/desglose-corneas/shared/desglose-cornea.service.ts");
/* harmony import */ var _shared_configurar_desglose_cornea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/configurar-desglose-cornea */ "./src/app/desglose-corneas/shared/configurar-desglose-cornea.ts");
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../usuarios/shared/usuario.service */ "./src/app/usuarios/shared/usuario.service.ts");
/* harmony import */ var _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../usuario-btcs/shared/usuario-btc.service */ "./src/app/usuario-btcs/shared/usuario-btc.service.ts");
/* harmony import */ var _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../perfil-red-issstes/shared/perfil-red-issste.service */ "./src/app/perfil-red-issstes/shared/perfil-red-issste.service.ts");
/* harmony import */ var _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hospitales/shared/hospital.service */ "./src/app/hospitales/shared/hospital.service.ts");
/* harmony import */ var _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../entidad-federativas/shared/entidad-federativa.service */ "./src/app/entidad-federativas/shared/entidad-federativa.service.ts");
/* harmony import */ var _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../perfiles/shared/perfil.service */ "./src/app/perfiles/shared/perfil.service.ts");
/* harmony import */ var _evaluacion_solicitudes_shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../evaluacion-solicitudes/shared/evaluacion-solicitud */ "./src/app/evaluacion-solicitudes/shared/evaluacion-solicitud.ts");
/* harmony import */ var _evaluacion_solicitudes_shared_evaluacion_solicitud_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../evaluacion-solicitudes/shared/evaluacion-solicitud.service */ "./src/app/evaluacion-solicitudes/shared/evaluacion-solicitud.service.ts");
/* harmony import */ var _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service */ "./src/app/recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service.ts");
/* harmony import */ var _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service */ "./src/app/solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service.ts");
/* harmony import */ var _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../causa-muertes/shared/causa-muerte.service */ "./src/app/causa-muertes/shared/causa-muerte.service.ts");
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








var DesgloseCorneaCrudComponent = /** @class */ (function () {
    function DesgloseCorneaCrudComponent(globalesService, zone, fileservice, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    desgloseCornea_service, usuario_service, usuarioBtc_service, perfilRedIssste_service, 
    //                public perfilBtc_service: PerfilBtcService,
    hospital_service, entidadFederativa_service, perfil_service, evaluacionSolicitud_service, recepcionSolicitudEvaluacion_service, solicitudEvaluacionCorneal_service, causaMuerte_service) {
        this.globalesService = globalesService;
        this.zone = zone;
        this.fileservice = fileservice;
        this.coreService = coreService;
        this.desgloseCornea_service = desgloseCornea_service;
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
        this.opcionDesgloseCornea = 0;
        this.validosDesgloseCornea = {
            id: false,
            descripcion: true,
            idadicional: true,
            status: false,
            usuarioUltMov: false,
            idevaluacionSolicitud: false,
        };
        this.ocultarConjuntosDesgloseCornea = false;
        this.nombre = "";
        this.permisosTabla = { "tabla": "desgloseCornea", "permiso": 0, "etiqueta": "" };
        this.permisosAtributos = [];
        this.permisosConjuntos = [];
        //  public perfil: Perfil;
        this.accion = 0;
        this.desgloseCorneaLazy = false;
        this.desgloseCorneaPermisos = false;
        this.validaciones = false;
        this.validacionesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.desgloseCornea = new _shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_4__["DesgloseCornea"]();
        this.desgloseCorneaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.desgloseCorneaTablaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lista_desgloseCorneas = [];
        this.usuarioUltMovDesgloseCorneaUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.lista_usuarioUltMovDesgloseCorneaUsuario = [];
        this.usuarioUltMovDesgloseCorneaUsuarioEditar = false;
        this.idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitudEleccion = new _evaluacion_solicitudes_shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_14__["EvaluacionSolicitud"]();
        this.lista_idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitud = [];
        this.idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitudEditar = false;
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                this.obtenerPermisos();
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
            }
        }
        this.desgloseCorneaSeleccion = this.desgloseCorneaCancelar = this.desgloseCorneaGuardar = this.desgloseCorneaBuscar = this.desgloseCorneaAgregar = this.desgloseCorneaActualizar = this.desgloseCorneaEliminar = false;
        this.configuracionDesgloseCornea = new _shared_configurar_desglose_cornea__WEBPACK_IMPORTED_MODULE_6__["ConfigurarDesgloseCornea"]();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovDesgloseCorneaUsuario, this);
        this.evaluacionSolicitud_service.getEvaluacionSolicitudesActivos(this.evtGetIdevaluacionSolicitudDesgloseCorneaEvaluacionSolicitud, this);
        this.limpiarCampos();
    }
    Object.defineProperty(DesgloseCorneaCrudComponent.prototype, "desgloseCorneaOcultarConjuntos", {
        get: function () {
            if (this.ocultarConjuntosDesgloseCornea)
                return true;
            return !this.desgloseCorneaActualizar;
        },
        enumerable: true,
        configurable: true
    });
    DesgloseCorneaCrudComponent.prototype.ngOnChanges = function (changes) {
        if (changes.desgloseCornea && changes.desgloseCornea.currentValue == null &&
            this.desgloseCornea == null)
            this.desgloseCornea = new _shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_4__["DesgloseCornea"]();
        else {
            var aux = new _shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_4__["DesgloseCornea"]();
            if (this.desgloseCornea)
                aux.from(this.desgloseCornea);
            if (aux.isOk && aux.isOk()) {
                this.accion = 7;
                this.desgloseCorneaBuscar = this.desgloseCorneaAgregar = this.desgloseCorneaSeleccion = this.desgloseCorneaGuardar = false;
                this.desgloseCorneaActualizar = this.desgloseCorneaEliminar = this.desgloseCorneaCancelar = true;
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
                this.desgloseCorneaSeleccion = this.desgloseCorneaAgregar = this.desgloseCorneaBuscar = this.desgloseCorneaActualizar = this.desgloseCorneaEliminar = false;
                this.desgloseCorneaGuardar = this.desgloseCorneaCancelar = true;
            }
        }
    };
    DesgloseCorneaCrudComponent.prototype.obtenerPermisos = function () {
        var id_expe = -1;
        var tablas = [
            "desgloseCornea",
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
        this.desgloseCorneaPermisos = false;
        this.coreService.permisos(parametros, this.evtCorePermisos, this);
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    DesgloseCorneaCrudComponent.prototype.evtCorePermisos = function (permisos, obj) {
        obj.desgloseCorneaPermisos = true;
        if (permisos && permisos.desgloseCornea && permisos.desgloseCornea.PermisoAtributo && permisos.desgloseCornea.PermisoAtributo.length > 0) {
            obj.permisosAtributos = permisos.desgloseCornea.PermisoAtributo;
        }
        else {
            obj.usuariologueado = undefined;
        }
        if (permisos && permisos.desgloseCornea && permisos.desgloseCornea.PermisoConjunto && permisos.desgloseCornea.PermisoConjunto.length > 0) {
            obj.permisosConjuntos = permisos.desgloseCornea.PermisoConjunto;
        }
        if (permisos && permisos.desgloseCornea && permisos.desgloseCornea.PermisoTabla && permisos.desgloseCornea.PermisoTabla.length > 0) {
            obj.permisosTabla = permisos.desgloseCornea.PermisoTabla[0];
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
    DesgloseCorneaCrudComponent.prototype.evtGetUsuarioUltMovDesgloseCorneaUsuario = function (lista_usuarioUltMovDesgloseCorneaUsuario, obj) {
        obj.lista_usuarioUltMovDesgloseCorneaUsuario = lista_usuarioUltMovDesgloseCorneaUsuario;
        obj.actualizar_UsuarioUltMovDesgloseCorneaUsuario();
    };
    DesgloseCorneaCrudComponent.prototype.evtGetIdevaluacionSolicitudDesgloseCorneaEvaluacionSolicitud = function (lista_idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitud, obj) {
        obj.lista_idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitud = lista_idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitud;
        obj.actualizar_IdevaluacionSolicitudDesgloseCorneaEvaluacionSolicitud();
    };
    DesgloseCorneaCrudComponent.prototype.actualizar_UsuarioUltMovDesgloseCorneaUsuario = function () {
        if (this.usuarioUltMovDesgloseCorneaUsuarioEleccion)
            for (var _i = 0, _a = this.lista_usuarioUltMovDesgloseCorneaUsuario; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.usuarioUltMovDesgloseCorneaUsuarioEleccion.id) {
                    this.usuarioUltMovDesgloseCorneaUsuarioEleccion = eleme;
                    break;
                }
            }
    };
    DesgloseCorneaCrudComponent.prototype.actualizar_IdevaluacionSolicitudDesgloseCorneaEvaluacionSolicitud = function () {
        if (this.idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitudEleccion)
            for (var _i = 0, _a = this.lista_idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitud; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitudEleccion.id) {
                    this.idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitudEleccion = eleme;
                    break;
                }
            }
    };
    DesgloseCorneaCrudComponent.prototype.ngDoCheck = function () {
    };
    DesgloseCorneaCrudComponent.prototype.validaAcciones = function (vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    };
    Object.defineProperty(DesgloseCorneaCrudComponent.prototype, "validaId", {
        get: function () {
            return this.validosDesgloseCornea['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DesgloseCorneaCrudComponent.prototype, "validaIds", {
        get: function () {
            return this.validosDesgloseCornea['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DesgloseCorneaCrudComponent.prototype, "validaDescripcion", {
        get: function () {
            return this.validosDesgloseCornea['descripcion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DesgloseCorneaCrudComponent.prototype, "validaIdadicional", {
        get: function () {
            return this.validosDesgloseCornea['idadicional'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DesgloseCorneaCrudComponent.prototype, "validaStatus", {
        get: function () {
            return this.validosDesgloseCornea['status'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DesgloseCorneaCrudComponent.prototype, "validaUsuarioUltMov", {
        get: function () {
            return this.validosDesgloseCornea['usuarioUltMov'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DesgloseCorneaCrudComponent.prototype, "validaIdevaluacionSolicitud", {
        get: function () {
            return this.validosDesgloseCornea['idevaluacionSolicitud'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DesgloseCorneaCrudComponent.prototype, "validaTodosc", {
        get: function () {
            var salida = this.validaId && this.validaDescripcion && this.validaIdadicional && this.validaStatus && this.validaUsuarioUltMov && this.validaIdevaluacionSolicitud;
            if (salida != this.validaciones)
                this.validacionesChange.emit(salida);
            return salida;
        },
        enumerable: true,
        configurable: true
    });
    DesgloseCorneaCrudComponent.prototype.obtenerDesgloseCorneas = function (lista, objeto) {
        objeto.lista_desgloseCorneas = lista;
        if (lista && lista.length > 0) {
            objeto.desgloseCornea.from(lista[0]);
            objeto.evtDesgloseCorneaSeleccionado(objeto.desgloseCornea);
            if (objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    };
    DesgloseCorneaCrudComponent.prototype.evn_lazy_desgloseCornea = function (desgloseCornea, objeto) {
        objeto.desgloseCornea = desgloseCornea;
        objeto.desgloseCorneaChange.emit(objeto.desgloseCornea);
        objeto.configuarCombosObjetos();
        objeto.desgloseCorneaLazy = true;
    };
    Object.defineProperty(DesgloseCorneaCrudComponent.prototype, "datosReporteDesgloseCorneaWord", {
        /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
        get: function () {
            return !(this.desgloseCorneaActualizar && this.desgloseCorneaLazy && this.globalesService.preporteWord(this, "desgloseCornea"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DesgloseCorneaCrudComponent.prototype, "datosReporteDesgloseCorneaExcel", {
        get: function () {
            return !(this.desgloseCorneaActualizar && this.desgloseCorneaLazy && this.globalesService.preporteExcel(this, "desgloseCornea"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DesgloseCorneaCrudComponent.prototype, "datosReporteDesgloseCorneaPdf", {
        get: function () {
            return !(this.desgloseCorneaActualizar && this.desgloseCorneaLazy && this.globalesService.preportePdf(this, "desgloseCornea"));
        },
        enumerable: true,
        configurable: true
    });
    DesgloseCorneaCrudComponent.prototype.reporteDesgloseCorneaExcel = function () {
        var nombre = "DesgloseCornea.xlsx";
        var path = "file/reporteExcel";
        var parametros = {};
        parametros["entradas"] = { "desgloseCornea": this.desgloseCornea };
        parametros["plantilla"] = "DesgloseCornea.xlsx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    DesgloseCorneaCrudComponent.prototype.reporteDesgloseCorneaWord = function () {
        var nombre = "DesgloseCornea.docx";
        var path = "file/reporteWord";
        var parametros = {};
        parametros["entradas"] = { "desgloseCornea": this.desgloseCornea };
        parametros["plantilla"] = "DesgloseCornea.docx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    DesgloseCorneaCrudComponent.prototype.reporteDesgloseCorneaPdf = function () {
        var nombre = "DesgloseCornea.docx";
        var path = "file/reportePdf";
        var parametros = {};
        parametros["entradas"] = { "desgloseCornea": this.desgloseCornea };
        parametros["plantilla"] = "DesgloseCornea.docx";
        parametros["salida"] = "DesgloseCornea.pdf";
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */
    DesgloseCorneaCrudComponent.prototype.accionesBuscar = function () {
        this.accion = 1;
        this.desgloseCorneaGuardar = this.desgloseCorneaActualizar = this.desgloseCorneaEliminar = false;
        this.desgloseCorneaBuscar = this.desgloseCorneaAgregar = this.desgloseCorneaCancelar = true;
    };
    DesgloseCorneaCrudComponent.prototype.buscarDesgloseCorneaFront = function () {
        this.accionesBuscar();
        var vdesgloseCornea = new _shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_4__["DesgloseCornea"]();
        vdesgloseCornea.from(this.desgloseCornea);
        this.configuracionDesgloseCornea = new _shared_configurar_desglose_cornea__WEBPACK_IMPORTED_MODULE_6__["ConfigurarDesgloseCornea"]();
        this.configuracionDesgloseCornea.permisosTabla = { "tabla": "desgloseCornea", "permiso": 8 };
        this.configuracionDesgloseCornea.titulo = "Buscar " + this.permisosTabla.etiqueta;
        this.configuracionDesgloseCornea.desgloseCorneaConsulta = vdesgloseCornea;
        this.permisosacciones();
        $("#buscarDesgloseCornea_" + this.nombre).modal();
    };
    DesgloseCorneaCrudComponent.prototype.buscarDesgloseCorneaBack = function (desgloseCornea) {
        this.desgloseCornea_service.getDesgloseCorneasByDto(desgloseCornea, this.eventoSrvDesgloseCorneaBuscar, this);
    };
    DesgloseCorneaCrudComponent.prototype.eventoSrvDesgloseCorneaBuscar = function (lista, objeto) {
        objeto.lista_desgloseCorneas = lista;
        if (lista && lista.length > 0) {
            objeto.desgloseCornea = lista[0];
            objeto.desgloseCorneaLazy = false;
            objeto.desgloseCornea_service.lazyDesgloseCornea(objeto.desgloseCornea, objeto.evn_lazy_desgloseCornea, objeto);
        }
    };
    DesgloseCorneaCrudComponent.prototype.guardarDesgloseCorneaFront = function () {
        this.accion = 5; // ********************************************************************************************** maquina
        this.guardarDesgloseCorneaBack(this.desgloseCornea);
        this.accionesBuscar(); // ********************************************************************************* maquina
        this.permisosacciones();
    };
    DesgloseCorneaCrudComponent.prototype.guardarDesgloseCorneaBack = function (desgloseCornea) {
        if (desgloseCornea.usuarioUltMov == null)
            desgloseCornea.usuarioUltMov = this.globalesService.dameUsuario();
        if (desgloseCornea.status == null || desgloseCornea.status == "")
            desgloseCornea.status = 1;
        this.desgloseCornea_service.guardarDesgloseCornea(desgloseCornea, this.eventoSrvDesgloseCorneaGuardar, this);
    };
    DesgloseCorneaCrudComponent.prototype.eventoSrvDesgloseCorneaGuardar = function (desgloseCornea, obj) {
        obj.desgloseCornea = desgloseCornea;
        bootbox.alert("Datos guardados con éxito");
        var aux = new _shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_4__["DesgloseCornea"]();
        aux.from(desgloseCornea);
        obj.desgloseCorneaChange.emit(aux);
        obj.desgloseCorneaTablaChange.emit(aux);
        obj.desgloseCorneaLazy = false;
        obj.desgloseCornea_service.lazyDesgloseCornea(obj.desgloseCornea, obj.evn_lazy_desgloseCornea, obj);
        obj.accionesActualizar();
    };
    DesgloseCorneaCrudComponent.prototype.actualizarDesgloseCorneaFront = function () {
        this.accion = 3; // ************************************************************************************* maquina
        this.actualizarDesgloseCorneaBack(this.desgloseCornea);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    };
    DesgloseCorneaCrudComponent.prototype.actualizarDesgloseCorneaBack = function (desgloseCornea) {
        desgloseCornea.usuarioUltMov = this.globalesService.dameUsuario();
        this.desgloseCornea_service.actualizarDesgloseCornea(desgloseCornea, this.eventoSrvDesgloseCorneaActualizar, this);
    };
    DesgloseCorneaCrudComponent.prototype.eventoSrvDesgloseCorneaActualizar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux = new _shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_4__["DesgloseCornea"]();
            // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.desgloseCorneaLazy = false;
            obj.desgloseCornea_service.lazyDesgloseCornea(obj.desgloseCornea, obj.evn_lazy_desgloseCornea, obj);
            // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.desgloseCornea);
            obj.desgloseCorneaChange.emit(aux);
            obj.desgloseCorneaTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    };
    DesgloseCorneaCrudComponent.prototype.eliminarDesgloseCorneaFront = function () {
        this.accion = 4;
        this.eliminarDesgloseCorneaBack(this.desgloseCornea);
        this.permisosacciones();
        this.accionesBuscar();
    };
    DesgloseCorneaCrudComponent.prototype.eliminarDesgloseCorneaBack = function (desgloseCornea) {
        desgloseCornea.usuarioUltMov = this.globalesService.dameUsuario();
        this.desgloseCornea_service.eliminarDesgloseCornea(desgloseCornea, this.eventoSrvDesgloseCorneaEliminar, this);
    };
    DesgloseCorneaCrudComponent.prototype.eventoSrvDesgloseCorneaEliminar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.desgloseCornea = new _shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_4__["DesgloseCornea"]();
            obj.desgloseCorneaChange.emit(obj.desgloseCornea);
            obj.desgloseCorneaTablaChange.emit(obj.desgloseCornea);
            obj.limpiarCampos();
        }
    };
    DesgloseCorneaCrudComponent.prototype.cancelarDesgloseCorneaFront = function () {
        this.accion = 6;
        this.desgloseCorneaCancelar = this.desgloseCorneaGuardar = this.desgloseCorneaActualizar = this.desgloseCorneaEliminar = false;
        this.desgloseCorneaBuscar = this.desgloseCorneaAgregar = true;
        this.permisosacciones();
    };
    DesgloseCorneaCrudComponent.prototype.nuevoDesgloseCorneaFront = function () {
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
                this.desgloseCorneaSeleccion = this.desgloseCorneaAgregar = this.desgloseCorneaBuscar = this.desgloseCorneaActualizar = this.desgloseCorneaEliminar = false;
                this.desgloseCorneaGuardar = this.desgloseCorneaCancelar = true;
            }.bind(this)
        });
    };
    DesgloseCorneaCrudComponent.prototype.configuarCombosObjetos = function () {
        this.lista_usuarioUltMovDesgloseCorneaUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovDesgloseCorneaUsuario, this);
        this.lista_idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitud = [];
        this.evaluacionSolicitud_service.getEvaluacionSolicitudesActivos(this.evtGetIdevaluacionSolicitudDesgloseCorneaEvaluacionSolicitud, this);
    };
    DesgloseCorneaCrudComponent.prototype.configurarTablasConjuntos = function () {
    };
    DesgloseCorneaCrudComponent.prototype.accionesActualizar = function () {
        this.accion = 7;
        this.desgloseCorneaBuscar = this.desgloseCorneaAgregar = this.desgloseCorneaSeleccion = this.desgloseCorneaGuardar = false;
        this.desgloseCorneaActualizar = this.desgloseCorneaEliminar = this.desgloseCorneaCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    };
    DesgloseCorneaCrudComponent.prototype.evtDesgloseCorneaSeleccionado = function (desgloseCornea) {
        this.desgloseCornea = new _shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_4__["DesgloseCornea"]();
        this.desgloseCornea.from(desgloseCornea);
        this.desgloseCorneaLazy = false;
        this.desgloseCornea_service.lazyDesgloseCornea(this.desgloseCornea, this.evn_lazy_desgloseCornea, this);
        this.accion = 7;
        this.desgloseCorneaBuscar = this.desgloseCorneaAgregar = this.desgloseCorneaSeleccion = this.desgloseCorneaGuardar = false;
        this.desgloseCorneaActualizar = this.desgloseCorneaEliminar = this.desgloseCorneaCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarDesgloseCornea_" + this.nombre).modal("hide");
    };
    DesgloseCorneaCrudComponent.prototype.ngOnInit = function () {
        this.accion = 0; // *********************************************************************************************************** maquina
        this.desgloseCorneaSeleccion = this.desgloseCorneaCancelar = this.desgloseCorneaGuardar = this.desgloseCorneaActualizar = this.desgloseCorneaEliminar = false; // ******************** maquina
        this.desgloseCorneaBuscar = this.desgloseCorneaAgregar = true; // ************************************************************************************* maquina
        this.permisosacciones();
    };
    DesgloseCorneaCrudComponent.prototype.permisosacciones = function () {
        if (this.desgloseCorneaBuscar)
            this.desgloseCorneaBuscar = this.globalesService.pbuscar(this, "desgloseCornea");
        if (this.desgloseCorneaActualizar)
            this.desgloseCorneaActualizar = (this.globalesService.pacutalizar(this, "desgloseCornea") && this.globalesService.pbuscar(this, "desgloseCornea"));
        if (this.desgloseCorneaEliminar)
            this.desgloseCorneaEliminar = (this.globalesService.peliminar(this, "desgloseCornea") && this.globalesService.pbuscar(this, "desgloseCornea"));
        if (this.desgloseCorneaAgregar)
            this.desgloseCorneaAgregar = this.globalesService.pagregar(this, "desgloseCornea");
    };
    DesgloseCorneaCrudComponent.prototype.permisosaccionesInicio = function () {
        this.desgloseCorneaSeleccion = this.desgloseCorneaCancelar = this.desgloseCorneaGuardar = this.desgloseCorneaActualizar = this.desgloseCorneaEliminar = false; // *************************** maquina
        this.desgloseCorneaBuscar = this.desgloseCorneaAgregar = true; // ************************************************************************************* maquina
        this.accion = 0; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    DesgloseCorneaCrudComponent.prototype.limpiarCampos = function () {
        this.desgloseCornea = new _shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_4__["DesgloseCornea"]();
        this.usuarioUltMovDesgloseCorneaUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitudEleccion = new _evaluacion_solicitudes_shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_14__["EvaluacionSolicitud"]();
        this.desgloseCorneaChange.emit(this.desgloseCornea);
        this.desgloseCorneaSeleccion = this.desgloseCorneaCancelar = this.desgloseCorneaGuardar = this.desgloseCorneaActualizar = this.desgloseCorneaEliminar = false; // *************************** maquina
        this.desgloseCorneaBuscar = this.desgloseCorneaAgregar = true; // ************************************************************************************* maquina
        this.accion = 6; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DesgloseCorneaCrudComponent.prototype, "ocultarConjuntosDesgloseCornea", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DesgloseCorneaCrudComponent.prototype, "nombre", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DesgloseCorneaCrudComponent.prototype, "validaciones", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DesgloseCorneaCrudComponent.prototype, "validacionesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_4__["DesgloseCornea"])
    ], DesgloseCorneaCrudComponent.prototype, "desgloseCornea", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DesgloseCorneaCrudComponent.prototype, "desgloseCorneaChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DesgloseCorneaCrudComponent.prototype, "desgloseCorneaTablaChange", void 0);
    DesgloseCorneaCrudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-desglose-cornea-crud',
            template: __webpack_require__(/*! ./desglose-cornea-crud.component.html */ "./src/app/desglose-corneas/desglose-cornea-crud/desglose-cornea-crud.component.html"),
            styles: [__webpack_require__(/*! ./desglose-cornea-crud.component.css */ "./src/app/desglose-corneas/desglose-cornea-crud/desglose-cornea-crud.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
                _shared_desglose_cornea_service__WEBPACK_IMPORTED_MODULE_5__["DesgloseCorneaService"],
                _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
                _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__["EntidadFederativaService"],
                _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__["PerfilRedIsssteService"],
                //                PerfilBtcService,
                _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"],
                _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcService"],
                _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__["PerfilService"],
                _evaluacion_solicitudes_shared_evaluacion_solicitud_service__WEBPACK_IMPORTED_MODULE_15__["EvaluacionSolicitudService"],
                _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_18__["CausaMuerteService"],
                _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_17__["SolicitudEvaluacionCornealService"],
                _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_16__["RecepcionSolicitudEvaluacionService"]
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
            _shared_desglose_cornea_service__WEBPACK_IMPORTED_MODULE_5__["DesgloseCorneaService"],
            _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
            _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcService"],
            _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__["PerfilRedIsssteService"],
            _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"],
            _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__["EntidadFederativaService"],
            _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__["PerfilService"],
            _evaluacion_solicitudes_shared_evaluacion_solicitud_service__WEBPACK_IMPORTED_MODULE_15__["EvaluacionSolicitudService"],
            _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_16__["RecepcionSolicitudEvaluacionService"],
            _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_17__["SolicitudEvaluacionCornealService"],
            _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_18__["CausaMuerteService"]])
    ], DesgloseCorneaCrudComponent);
    return DesgloseCorneaCrudComponent;
}());



/***/ }),

/***/ "./src/app/desglose-corneas/desglose-cornea-list-kendo/desglose-cornea-list-kendo.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/desglose-corneas/desglose-cornea-list-kendo/desglose-cornea-list-kendo.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Tipos para desgloseCornea-list-kendo*/\nh3 { text-transform: uppercase;} \n"

/***/ }),

/***/ "./src/app/desglose-corneas/desglose-cornea-list-kendo/desglose-cornea-list-kendo.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/desglose-corneas/desglose-cornea-list-kendo/desglose-cornea-list-kendo.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!usuariologueado\" >\n    <div class=\"card\">\n        <div align=\"center\" class=\"card-header\"><h3>{{configuracionDesgloseCornea.titulo}}</h3></div>\n        <div class=\"card-body\">\n            <div id=\"div_desgloseCornea_{{nombregrid}}\">\n                <div id=\"grid_desgloseCornea_{{nombregrid}}\"></div>\n            </div>\n        </div>\t\t\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/desglose-corneas/desglose-cornea-list-kendo/desglose-cornea-list-kendo.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/desglose-corneas/desglose-cornea-list-kendo/desglose-cornea-list-kendo.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DesgloseCorneaListKendoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesgloseCorneaListKendoComponent", function() { return DesgloseCorneaListKendoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/desglose-cornea */ "./src/app/desglose-corneas/shared/desglose-cornea.ts");
/* harmony import */ var _shared_configurar_desglose_cornea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/configurar-desglose-cornea */ "./src/app/desglose-corneas/shared/configurar-desglose-cornea.ts");
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
var DesgloseCorneaListKendoComponent = /** @class */ (function () {
    function DesgloseCorneaListKendoComponent(urlprovider, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    globalesService) {
        this.urlprovider = urlprovider;
        this.coreService = coreService;
        this.globalesService = globalesService;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "", "permiso": 0, "etiqueta": "" };
        this.desgloseCorneaSeleccionado = new _shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_3__["DesgloseCornea"]();
        this.configuracionDesgloseCornea = new _shared_configurar_desglose_cornea__WEBPACK_IMPORTED_MODULE_4__["ConfigurarDesgloseCornea"]();
        this.nombregrid = "";
        this.evtDesgloseCorneaSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "desgloseCornea";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'desgloseCornea'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'desgloseCornea'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }
    DesgloseCorneaListKendoComponent.prototype.actualizaTituloInicial = function () {
        if (this.configuracionDesgloseCornea.titulo.indexOf("Catálogo") != -1) {
            this.configuracionDesgloseCornea.titulo = "Catálogo " + this.permisosTabla.etiqueta;
        }
    };
    DesgloseCorneaListKendoComponent.prototype.ngOnChanges = function (changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionDesgloseCornea && changes.configuracionDesgloseCornea.currentValue &&
            (changes.configuracionDesgloseCornea.previousValue instanceof _shared_configurar_desglose_cornea__WEBPACK_IMPORTED_MODULE_4__["ConfigurarDesgloseCornea"])) {
            if (changes.configuracionDesgloseCornea.currentValue.permisosAtributos)
                this.permisosAtributos = changes.configuracionDesgloseCornea.currentValue.permisosAtributos;
            if (changes.configuracionDesgloseCornea.currentValue.permisosTabla)
                this.permisosTabla = changes.configuracionDesgloseCornea.currentValue.permisosTabla;
            if ($("#grid_desgloseCornea_" + this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    };
    DesgloseCorneaListKendoComponent.prototype.ngOnInit = function () {
        self["grid_desgloseCornea_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var ejecutarpermisos = true;
        if (this.configuracionDesgloseCornea.permisosAtributos &&
            this.configuracionDesgloseCornea.permisosTabla)
            ejecutarpermisos = false;
        if (this.usuariologueado && ejecutarpermisos) {
            if (this.usuariologueado.perfil) {
                var tablas = [
                    "desgloseCornea",
                ];
                var parametros = {
                    "id_usu": this.usuariologueado.id,
                    "tablas": tablas,
                    "id_exp": -1
                };
                this.coreService.permisos(parametros, this.evtCorePermisos, this);
                //                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                //                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DesgloseCornea'";
                //                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DesgloseCornea'";
                //                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DesgloseCornea'";
                //                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
                //                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
                //                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
            }
        }
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        if (this.configuracionDesgloseCornea.permisosAtributos)
            this.permisosAtributos = this.configuracionDesgloseCornea.permisosAtributos;
        if (this.configuracionDesgloseCornea.permisosTabla)
            this.permisosTabla = this.configuracionDesgloseCornea.permisosTabla;
        this.configuraGrid();
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    DesgloseCorneaListKendoComponent.prototype.evtCorePermisos = function (permisos, obj) {
        if (permisos && permisos.desgloseCornea && permisos.desgloseCornea.PermisoAtributo && permisos.desgloseCornea.PermisoAtributo.length > 0
            && !obj.configuracionDesgloseCornea.permisosAtributos) {
            obj.globalesService.evtAtributos(permisos.desgloseCornea.PermisoAtributo, obj);
            //            obj.permisosAtributos = permisos.DesgloseCornea.PermisoAtributo ;
        }
        if (permisos && permisos.desgloseCornea && permisos.desgloseCornea.PermisoTabla && permisos.desgloseCornea.PermisoTabla.length > 0
            && !obj.configuracionDesgloseCornea.permisosTabla) {
            obj.globalesService.evtTablas(permisos.desgloseCornea.PermisoTabla, obj);
            //            obj.permisosTabla = permisos.DesgloseCornea.PermisoTabla[0] ;
            //            obj.permisosaccionesInicio();
        }
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    DesgloseCorneaListKendoComponent.prototype.configuraGrid = function () {
        var _this = this;
        if ($("#grid_desgloseCornea_" + this.nombregrid).data("kendoGrid")) {
        }
        else {
            setTimeout(function () {
                _this.inicializaGrid();
                _this.configuraGrid();
            }, 300);
        }
    };
    DesgloseCorneaListKendoComponent.prototype.sourcegrid = function () {
        function completar(e) {
            (e);
        }
        ;
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        if (this.configuracionDesgloseCornea.campoAgEl != null
            && this.configuracionDesgloseCornea.desgloseCorneaConsulta
            && this.configuracionDesgloseCornea.desgloseCorneaConsulta.isOk
            && !this.configuracionDesgloseCornea.desgloseCorneaConsulta.isOk())
            return;
        if (this.configuracionDesgloseCornea.desgloseCorneaConsulta) {
            if (!this.configuracionDesgloseCornea.campoAgEl && this.configuracionDesgloseCornea.desgloseCorneaConsulta instanceof _shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_3__["DesgloseCornea"])
                this.configuracionDesgloseCornea.rutaLista = this.crudServiceBaseUrl + "/getDesgloseCorneasByDto";
            this.lista = this.configuracionDesgloseCornea.lecturaP(completar, this.configuracionDesgloseCornea.desgloseCorneaConsulta);
            if (this.configuracionDesgloseCornea.campoAgEl) {
                this.rutaAgregar = this.configuracionDesgloseCornea.agregarP(function () { }, this.configuracionDesgloseCornea.campoAgEl);
                this.rutaEliminar = this.configuracionDesgloseCornea.eliminarP(function () { }, this.configuracionDesgloseCornea.campoAgEl);
            }
            else {
                this.rutaAgregar = this.configuracionDesgloseCornea.agregarP(completar, this.configuracionDesgloseCornea.desgloseCorneaConsulta);
                this.rutaEliminar = this.configuracionDesgloseCornea.eliminarP(completar, this.configuracionDesgloseCornea.desgloseCorneaConsulta);
            }
        }
        else {
            this.lista = this.configuracionDesgloseCornea.lectura();
            this.rutaAgregar = this.configuracionDesgloseCornea.agregar();
            this.rutaEliminar = this.configuracionDesgloseCornea.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this, "desgloseCornea", "id")) {
            modelo["id"] = "id";
        }
        var campos = {};
        if (this.globalesService.avisible(this, "desgloseCornea", "id")) {
            campos["id"] = { editable: false, nullable: true, type: "number" };
        }
        if (this.globalesService.avisible(this, "desgloseCornea", "idevaluacionSolicitud")) {
            campos["idevaluacionSolicitud"] = { editable: this.globalesService.aenable(this, "desgloseCornea", "idevaluacionSolicitud"), nullable: true, type: "object", defaultValue: { "id": "", "status": "" } };
        }
        if (this.globalesService.avisible(this, "desgloseCornea", "descripcion")) {
            campos["descripcion"] = { editable: this.globalesService.aenable(this, "desgloseCornea", "descripcion"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "desgloseCornea", "idadicional")) {
            campos["idadicional"] = { editable: this.globalesService.aenable(this, "desgloseCornea", "idadicional"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "desgloseCornea", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this, "desgloseCornea", "usuarioUltMov"), nullable: true, type: "object", defaultValue: { "id": "", "password": "" } };
        }
        if (this.globalesService.avisible(this, "desgloseCornea", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this, "desgloseCornea", "status"), nullable: true, type: "string", defaultValue: "1" };
        }
        modelo["fields"] = campos;
        var slf = this;
        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionDesgloseCornea.rutaActualizar,
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
            if (self.configuracionDesgloseCornea.campoAgEl) {
                if (self.configuracionDesgloseCornea.tipocampoAgEl == "DesgloseCorneaDesgloseCornea")
                    self.configuracionDesgloseCornea.campoAgEl.desgloseCornea2 = options.models[0];
                else
                    self.configuracionDesgloseCornea.campoAgEl.desgloseCornea = options.models[0];
                return JSON.stringify(self.configuracionDesgloseCornea.campoAgEl);
            }
            else if (est.options[operation].data.models.desgloseCornea) {
                est.options[operation].data.models.desgloseCornea2 = options.models[0];
                return JSON.stringify(est.options[operation].data.models);
            }
            return JSON.stringify(options.models[0]);
        }
    };
    DesgloseCorneaListKendoComponent.prototype.inicializaGrid = function () {
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        this.sourcegrid();
        var columnas = [];
        if (this.globalesService.avisible(this, "desgloseCornea", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this, "desgloseCornea", "id"), editor: this.globalesService.txtNumero });
        }
        if (this.globalesService.avisible(this, "desgloseCornea", "idevaluacionSolicitud")) {
            columnas.push({ field: "idevaluacionSolicitud", title: this.globalesService.aetiqueta(this, "desgloseCornea", "idevaluacionSolicitud"), editor: idevaluacionSolicitudDropDownEditor, template: " #if (idevaluacionSolicitud){#   #=idevaluacionSolicitud.status# # } # " });
        }
        if (this.globalesService.avisible(this, "desgloseCornea", "descripcion")) {
            columnas.push({ field: "descripcion", title: this.globalesService.aetiqueta(this, "desgloseCornea", "descripcion"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "desgloseCornea", "idadicional")) {
            columnas.push({ field: "idadicional", title: this.globalesService.aetiqueta(this, "desgloseCornea", "idadicional"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "desgloseCornea", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this, "desgloseCornea", "usuarioUltMov"), editor: usuarioUltMovDropDownEditor, template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # " });
        }
        if (this.globalesService.avisible(this, "desgloseCornea", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this, "desgloseCornea", "status"), editor: this.globalesService.estadoDropDownEditor,
                template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this, "desgloseCornea"))
            op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this, "desgloseCornea")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this, "desgloseCornea")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this, "desgloseCornea") && this.configuracionDesgloseCornea.desgloseCorneaConsulta != null) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid)
            $("#grid_desgloseCornea_" + this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_desgloseCornea_" + this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionDesgloseCornea.altoComponente,
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
        this.grid = $("#grid_desgloseCornea_" + this.nombregrid).data("kendoGrid");
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
    DesgloseCorneaListKendoComponent.prototype.showDetails = function (e) {
        e.preventDefault();
        //        this.grid = $("#grid_desgloseCornea_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        var gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.desgloseCorneaSeleccionado = new _shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_3__["DesgloseCornea"]();
        gridac.desgloseCorneaSeleccionado.from(dataItem);
        gridac.evtDesgloseCorneaSeleccionado.emit(gridac.desgloseCorneaSeleccionado);
        (gridac.desgloseCorneaSeleccionado);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_configurar_desglose_cornea__WEBPACK_IMPORTED_MODULE_4__["ConfigurarDesgloseCornea"])
    ], DesgloseCorneaListKendoComponent.prototype, "configuracionDesgloseCornea", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DesgloseCorneaListKendoComponent.prototype, "nombregrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("desgloseCorneaSeleccionado"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DesgloseCorneaListKendoComponent.prototype, "evtDesgloseCorneaSeleccionado", void 0);
    DesgloseCorneaListKendoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-desglose-cornea-list-kendo',
            template: __webpack_require__(/*! ./desglose-cornea-list-kendo.component.html */ "./src/app/desglose-corneas/desglose-cornea-list-kendo/desglose-cornea-list-kendo.component.html"),
            styles: [__webpack_require__(/*! ./desglose-cornea-list-kendo.component.css */ "./src/app/desglose-corneas/desglose-cornea-list-kendo/desglose-cornea-list-kendo.component.css")],
            providers: [
                //             PermisoTablaService,
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_url_provider__WEBPACK_IMPORTED_MODULE_1__["URLProvider"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"]])
    ], DesgloseCorneaListKendoComponent);
    return DesgloseCorneaListKendoComponent;
}());



/***/ }),

/***/ "./src/app/desglose-corneas/desglose-cornea-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/desglose-corneas/desglose-cornea-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: DesgloseCorneaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesgloseCorneaRoutingModule", function() { return DesgloseCorneaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _desglose_corneas_desglose_cornea_list_kendo_desglose_cornea_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../desglose-corneas/desglose-cornea-list-kendo/desglose-cornea-list-kendo.component */ "./src/app/desglose-corneas/desglose-cornea-list-kendo/desglose-cornea-list-kendo.component.ts");
/* harmony import */ var _desglose_corneas_desglose_cornea_crud_desglose_cornea_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../desglose-corneas/desglose-cornea-crud/desglose-cornea-crud.component */ "./src/app/desglose-corneas/desglose-cornea-crud/desglose-cornea-crud.component.ts");
/* harmony import */ var _desglose_corneas_desglose_cornea_table_desglose_cornea_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../desglose-corneas/desglose-cornea-table/desglose-cornea-table.component */ "./src/app/desglose-corneas/desglose-cornea-table/desglose-cornea-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'desglose-cornea-list-kendo', component: _desglose_corneas_desglose_cornea_list_kendo_desglose_cornea_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__["DesgloseCorneaListKendoComponent"] },
    { path: 'desglose-cornea-crud', component: _desglose_corneas_desglose_cornea_crud_desglose_cornea_crud_component__WEBPACK_IMPORTED_MODULE_3__["DesgloseCorneaCrudComponent"] },
    { path: 'desglose-cornea-table', component: _desglose_corneas_desglose_cornea_table_desglose_cornea_table_component__WEBPACK_IMPORTED_MODULE_4__["DesgloseCorneaTableComponent"] },
];
var DesgloseCorneaRoutingModule = /** @class */ (function () {
    function DesgloseCorneaRoutingModule() {
    }
    DesgloseCorneaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DesgloseCorneaRoutingModule);
    return DesgloseCorneaRoutingModule;
}());



/***/ }),

/***/ "./src/app/desglose-corneas/desglose-cornea-table/desglose-cornea-table.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/desglose-corneas/desglose-cornea-table/desglose-cornea-table.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/desglose-corneas/desglose-cornea-table/desglose-cornea-table.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/desglose-corneas/desglose-cornea-table/desglose-cornea-table.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"usuariologueado\" >\n<div class=\"card\">\n<div class=\"card-header\"><h1>Busqueda {{permisosTabla?.etiqueta}}</h1></div>\n<div class=\"card-body\">\n<div class=\"container-fluid\" >    \n\n<table *ngIf=\"muestraTabla\" id=\"tabla_desgloseCornea\" class=\"table \" cellspacing=\"0\" width=\"100%\">\n    <thead>\n        <tr>\n            <th [class.hidden]=\"!avisible('desgloseCornea','id')\" >{{aetiqueta('desgloseCornea','id')}}</th>\n            <th [class.hidden]=\"!avisible('desgloseCornea','idevaluacionSolicitud')\" >{{aetiqueta('desgloseCornea','idevaluacionSolicitud')}}</th>\n            <th [class.hidden]=\"!avisible('desgloseCornea','descripcion')\" >{{aetiqueta('desgloseCornea','descripcion')}}</th>\n            <th [class.hidden]=\"!avisible('desgloseCornea','idadicional')\" >{{aetiqueta('desgloseCornea','idadicional')}}</th>\n            <th [class.hidden]=\"!avisible('desgloseCornea','usuarioUltMov')\" >{{aetiqueta('desgloseCornea','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('desgloseCornea','status')\" >{{aetiqueta('desgloseCornea','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </thead>\n    <tfoot>\n        <tr>\n            <th [class.hidden]=\"!avisible('desgloseCornea','id')\" >{{aetiqueta('desgloseCornea','id')}}</th>\n            <th [class.hidden]=\"!avisible('desgloseCornea','idevaluacionSolicitud')\" >{{aetiqueta('desgloseCornea','idevaluacionSolicitud')}}</th>\n            <th [class.hidden]=\"!avisible('desgloseCornea','descripcion')\" >{{aetiqueta('desgloseCornea','descripcion')}}</th>\n            <th [class.hidden]=\"!avisible('desgloseCornea','idadicional')\" >{{aetiqueta('desgloseCornea','idadicional')}}</th>\n            <th [class.hidden]=\"!avisible('desgloseCornea','usuarioUltMov')\" >{{aetiqueta('desgloseCornea','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('desgloseCornea','status')\" >{{aetiqueta('desgloseCornea','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </tfoot>\n</table>\n</div>\n<app-desglose-cornea [class.hidden]=\"primero\" [(desgloseCornea)]=\"desgloseCorneaSeleccionado\" (desgloseCorneaTablaChange)=\"cambio_desgloseCornea($event)\"> </app-desglose-cornea>    \n</div>\n</div>\n</div>\n\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/desglose-corneas/desglose-cornea-table/desglose-cornea-table.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/desglose-corneas/desglose-cornea-table/desglose-cornea-table.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DesgloseCorneaTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesgloseCorneaTableComponent", function() { return DesgloseCorneaTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/desglose-cornea */ "./src/app/desglose-corneas/shared/desglose-cornea.ts");
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






var DesgloseCorneaTableComponent = /** @class */ (function () {
    function DesgloseCorneaTableComponent(globalesService, permisoAtributoService, permisoTablaService, urlProvider) {
        this.globalesService = globalesService;
        this.permisoAtributoService = permisoAtributoService;
        this.permisoTablaService = permisoTablaService;
        this.urlProvider = urlProvider;
        this.primero = true;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "desgloseCornea", "permiso": 0, "etiqueta": "" };
        this.ptabla = false;
        this.pattr = false;
        this.desgloseCorneaSeleccionado = new _shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_1__["DesgloseCornea"]();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                discon = "with perfil.id = " + this.usuariologueado.perfil.id;
                var cadena2 = "select pa from PermisoTabla as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'desgloseCornea'";
                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
            }
        }
    }
    DesgloseCorneaTableComponent.prototype.evtTablas = function (lista, obj) {
        if (lista.length >= 0) {
            obj.permisosTabla = lista[0];
            obj.ptabla = true;
            var discon = "with perfil.id = " + obj.usuariologueado.perfil.id;
            var cadena1 = "select pa from PermisoAtributo as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'desgloseCornea'";
            obj.permisoAtributoService.custom(cadena1, obj.evtAtributos, obj);
        }
    };
    DesgloseCorneaTableComponent.prototype.evtAtributos = function (lista, obj) {
        obj.permisosAtributos = lista;
        obj.pattr = true;
        if (obj.ptabla && obj.pattr) {
            setTimeout(function () { obj.getColumnas(obj); }, 500);
        }
    };
    Object.defineProperty(DesgloseCorneaTableComponent.prototype, "muestraTabla", {
        get: function () {
            return this.ptabla && this.pattr;
        },
        enumerable: true,
        configurable: true
    });
    DesgloseCorneaTableComponent.prototype.getColumnas = function (obj) {
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        if (!this.avisible("desgloseCornea", "id"))
            columnasNoVisibles.push(0);
        columnas.push({ "data": "id" });
        if (!this.avisible("desgloseCornea", "idevaluacionSolicitud"))
            columnasNoVisibles.push(1);
        columnas.push({
            "data": function (oObj) {
                if (oObj.idevaluacionSolicitud)
                    return "<span style=\"cursor: pointer\">" + oObj.idevaluacionSolicitud.status + "</span>";
                return "";
            }
        });
        if (!this.avisible("desgloseCornea", "descripcion"))
            columnasNoVisibles.push(2);
        columnas.push({ "data": "descripcion" });
        if (!this.avisible("desgloseCornea", "idadicional"))
            columnasNoVisibles.push(3);
        columnas.push({ "data": "idadicional" });
        if (!this.avisible("desgloseCornea", "usuarioUltMov"))
            columnasNoVisibles.push(4);
        columnas.push({
            "data": function (oObj) {
                if (oObj.usuarioUltMov)
                    return "<span style=\"cursor: pointer\">" + oObj.usuarioUltMov.username + "</span>";
                return "";
            }
        });
        if (!this.avisible("desgloseCornea", "status"))
            columnasNoVisibles.push(5);
        columnas.push({ "data": "status" });
        if (self.pacutalizar("desgloseCornea"))
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
        var tabla = $('#tabla_desgloseCornea').DataTable({
            "columnDefs": novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            "initComplete": function (settings, json) {
                var xs = $("#tabla_desgloseCornea_wrapper").find(".row");
                $($(xs[0]).find(".col-sm-6")[0]).
                    find(".dataTables_length").
                    append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function () {
                    self.desgloseCorneaSeleccionado = new _shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_1__["DesgloseCornea"]();
                    self.primero = false;
                });
            },
            "ajax": {
                "url": self.urlProvider.serverURL + "desgloseCornea/getDesgloseCorneas",
                "type": "POST",
                "contentType": "application/json",
                "datatype": 'json',
                "dataSrc": "",
            },
            "columns": columnas,
        });
        $('#tabla_desgloseCornea tbody').on('click', 'td', function () {
            if (this.cellIndex == $(this).parent().find("td").length - 1) {
                var data = $('#tabla_desgloseCornea').DataTable().row(this).data();
                self.desgloseCorneaSeleccionado = new _shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_1__["DesgloseCornea"]();
                self.desgloseCorneaSeleccionado.from(data);
                self.primero = false;
                if ($(this).parent().hasClass('selected')) {
                    $(this).parent().removeClass('selected');
                }
                else {
                    $('#tabla_desgloseCornea').DataTable().$('tr.selected').removeClass('selected');
                    $(this).parent().addClass('selected');
                }
            }
        });
    };
    DesgloseCorneaTableComponent.prototype.ngOnInit = function () {
    };
    DesgloseCorneaTableComponent.prototype.cambio_desgloseCornea = function (desgloseCornea) {
        $('#tabla_desgloseCornea').DataTable().ajax.reload(null, false);
        this.primero = true;
    };
    // **********************************************************************************
    // **********************************************************************************
    // **           I N I C I A N   P E R M I S O S   P A R A   P E R F I L E S  
    // **********************************************************************************
    // **********************************************************************************
    DesgloseCorneaTableComponent.prototype.paux = function (tabla, permiso) {
        if (this.permisosTabla.tabla == tabla && (this.permisosTabla.permiso & permiso) == permiso)
            return true;
        return false;
    };
    DesgloseCorneaTableComponent.prototype.preporteWord = function (tabla) { return this.paux(tabla, 64); };
    DesgloseCorneaTableComponent.prototype.preporteExcel = function (tabla) { return this.paux(tabla, 32); };
    DesgloseCorneaTableComponent.prototype.preportePdf = function (tabla) { return this.paux(tabla, 16); };
    DesgloseCorneaTableComponent.prototype.pbuscar = function (tabla) { return this.paux(tabla, 8); };
    DesgloseCorneaTableComponent.prototype.pacutalizar = function (tabla) { return this.paux(tabla, 4); };
    DesgloseCorneaTableComponent.prototype.peliminar = function (tabla) { return this.paux(tabla, 2); };
    DesgloseCorneaTableComponent.prototype.pagregar = function (tabla) { return this.paux(tabla, 1); };
    //******************************************************************************************
    //*******  P E R M I S O S   S O B R E   A T R I B U T O S  ********************************
    //******************************************************************************************
    DesgloseCorneaTableComponent.prototype.aetiqueta = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo)
                return elemento.etiqueta;
        }
        return "";
    };
    DesgloseCorneaTableComponent.prototype.avalidacion = function (tabla, atributo) {
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
    DesgloseCorneaTableComponent.prototype.amensaje = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo) {
                return elemento.mensaje;
            }
        }
        return null;
    };
    DesgloseCorneaTableComponent.prototype.aeditable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 8) == 8)
                return true;
        }
        return false;
    };
    DesgloseCorneaTableComponent.prototype.arequerido = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 4) == 4)
                return true;
        }
        return false;
    };
    DesgloseCorneaTableComponent.prototype.avisible = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 2) == 2)
                return true;
        }
        return false;
    };
    DesgloseCorneaTableComponent.prototype.aenable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 1) == 1)
                return true;
        }
        return false;
    };
    DesgloseCorneaTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-desglose-cornea-table',
            template: __webpack_require__(/*! ./desglose-cornea-table.component.html */ "./src/app/desglose-corneas/desglose-cornea-table/desglose-cornea-table.component.html"),
            styles: [__webpack_require__(/*! ./desglose-cornea-table.component.css */ "./src/app/desglose-corneas/desglose-cornea-table/desglose-cornea-table.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
                _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
                _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
            _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
            _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            _shared_url_provider__WEBPACK_IMPORTED_MODULE_3__["URLProvider"]])
    ], DesgloseCorneaTableComponent);
    return DesgloseCorneaTableComponent;
}());



/***/ }),

/***/ "./src/app/desglose-corneas/desglose-cornea.module.ts":
/*!************************************************************!*\
  !*** ./src/app/desglose-corneas/desglose-cornea.module.ts ***!
  \************************************************************/
/*! exports provided: DesgloseCorneaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesgloseCorneaModule", function() { return DesgloseCorneaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _desglose_cornea_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desglose-cornea-routing.module */ "./src/app/desglose-corneas/desglose-cornea-routing.module.ts");
/* harmony import */ var _desglose_cornea_list_kendo_desglose_cornea_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./desglose-cornea-list-kendo/desglose-cornea-list-kendo.component */ "./src/app/desglose-corneas/desglose-cornea-list-kendo/desglose-cornea-list-kendo.component.ts");
/* harmony import */ var _desglose_cornea_crud_desglose_cornea_crud_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./desglose-cornea-crud/desglose-cornea-crud.component */ "./src/app/desglose-corneas/desglose-cornea-crud/desglose-cornea-crud.component.ts");
/* harmony import */ var _desglose_cornea_conjunto_desglose_cornea_conjunto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./desglose-cornea-conjunto/desglose-cornea-conjunto.component */ "./src/app/desglose-corneas/desglose-cornea-conjunto/desglose-cornea-conjunto.component.ts");
/* harmony import */ var _desglose_cornea_desglose_cornea_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./desglose-cornea/desglose-cornea.component */ "./src/app/desglose-corneas/desglose-cornea/desglose-cornea.component.ts");
/* harmony import */ var _desglose_cornea_table_desglose_cornea_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./desglose-cornea-table/desglose-cornea-table.component */ "./src/app/desglose-corneas/desglose-cornea-table/desglose-cornea-table.component.ts");
/* harmony import */ var _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/usuario-perfil.module */ "./src/app/shared/usuario-perfil.module.ts");
/* harmony import */ var _evaluacion_solicitudes_evaluacion_solicitud_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../evaluacion-solicitudes/evaluacion-solicitud.module */ "./src/app/evaluacion-solicitudes/evaluacion-solicitud.module.ts");
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












var DesgloseCorneaModule = /** @class */ (function () {
    function DesgloseCorneaModule(parentModule) {
        if (parentModule) {
            throw new Error('DesgloseCorneaModule is already loaded. Import it in the AppModule only');
        }
    }
    DesgloseCorneaModule_1 = DesgloseCorneaModule;
    DesgloseCorneaModule.forRoot = function () {
        return {
            ngModule: DesgloseCorneaModule_1,
            providers: []
        };
    };
    var DesgloseCorneaModule_1;
    DesgloseCorneaModule = DesgloseCorneaModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_11__["PersonalizadosModule"], _desglose_cornea_routing_module__WEBPACK_IMPORTED_MODULE_3__["DesgloseCorneaRoutingModule"],
                _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_9__["UsuarioPerfilModule"].forRoot(),
                _evaluacion_solicitudes_evaluacion_solicitud_module__WEBPACK_IMPORTED_MODULE_10__["EvaluacionSolicitudModule"]
            ],
            declarations: [
                _desglose_cornea_list_kendo_desglose_cornea_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["DesgloseCorneaListKendoComponent"],
                _desglose_cornea_desglose_cornea_component__WEBPACK_IMPORTED_MODULE_7__["DesgloseCorneaComponent"],
                _desglose_cornea_crud_desglose_cornea_crud_component__WEBPACK_IMPORTED_MODULE_5__["DesgloseCorneaCrudComponent"],
                _desglose_cornea_conjunto_desglose_cornea_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["DesgloseCorneaConjuntoComponent"],
                _desglose_cornea_table_desglose_cornea_table_component__WEBPACK_IMPORTED_MODULE_8__["DesgloseCorneaTableComponent"],
            ],
            exports: [
                _desglose_cornea_list_kendo_desglose_cornea_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["DesgloseCorneaListKendoComponent"],
                _desglose_cornea_desglose_cornea_component__WEBPACK_IMPORTED_MODULE_7__["DesgloseCorneaComponent"],
                _desglose_cornea_crud_desglose_cornea_crud_component__WEBPACK_IMPORTED_MODULE_5__["DesgloseCorneaCrudComponent"],
                _desglose_cornea_conjunto_desglose_cornea_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["DesgloseCorneaConjuntoComponent"],
                _desglose_cornea_table_desglose_cornea_table_component__WEBPACK_IMPORTED_MODULE_8__["DesgloseCorneaTableComponent"],
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [DesgloseCorneaModule])
    ], DesgloseCorneaModule);
    return DesgloseCorneaModule;
}());



/***/ }),

/***/ "./src/app/desglose-corneas/desglose-cornea/desglose-cornea.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/desglose-corneas/desglose-cornea/desglose-cornea.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/desglose-corneas/desglose-cornea/desglose-cornea.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/desglose-corneas/desglose-cornea/desglose-cornea.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [hidden]=\"!usuariologueado\" #formaGeneral=\"ngForm\"     >\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\"><h1>{{etiquetaGeneral}}</h1></div>\n        <div class=\"panel-body\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                     <app-componente-identificador [componente]=\"'desgloseCornea'\"\n                                                   [atributo]=\"'id'\"\n                                                   [buscar]=\"desgloseCorneaBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosDesgloseCornea['id']\"\n                                                   [(dato)]=\"desgloseCornea.id\"   class=\"w-100\" >\n                    </app-componente-identificador >\n                    <div>\n                        <app-componente-objeto [componente]=\"'desgloseCornea'\"\n                                               [atributo]=\"'idevaluacionSolicitud'\"\n                                               [buscar]=\"desgloseCorneaBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosDesgloseCornea['idevaluacionSolicitud']\"\n                                               [(dato)]=\"desgloseCornea.idevaluacionSolicitud\"  class=\"w-100\"\n                                               [atributoVisible]=\"'status'\" >\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!idevaluacionSolicitudEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'desgloseCornea','idevaluacionSolicitud')\" >\n                                   <app-evaluacion-solicitud-crud [nombre]=\"'idevaluacionSolicitud'\" [evaluacionSolicitud]=\"desgloseCornea.idevaluacionSolicitud\" (evaluacionSolicitudChange)=\"evtIdevaluacionSolicitud($event)\"\n                                                           [ocultarConjuntosEvaluacionSolicitud]=\"'true'\" [class.hidden]=\"!idevaluacionSolicitudEditar\" ></app-evaluacion-solicitud-crud>\n                            </div>\n                        </div>\n                    </div>\n                     <app-componente-cadena-larga [componente]=\"'desgloseCornea'\"\n                                                   [atributo]=\"'descripcion'\"\n                                                   [buscar]=\"desgloseCorneaBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosDesgloseCornea['descripcion']\"\n                                                   [(dato)]=\"desgloseCornea.descripcion\"   class=\"w-100\" >\n                    </app-componente-cadena-larga >\n                     <app-componente-cadena-larga [componente]=\"'desgloseCornea'\"\n                                                   [atributo]=\"'idadicional'\"\n                                                   [buscar]=\"desgloseCorneaBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosDesgloseCornea['idadicional']\"\n                                                   [(dato)]=\"desgloseCornea.idadicional\"   class=\"w-100\" >\n                    </app-componente-cadena-larga >\n                    <div>\n                        <app-componente-objeto [componente]=\"'desgloseCornea'\"\n                                               [atributo]=\"'usuarioUltMov'\"\n                                               [buscar]=\"desgloseCorneaBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosDesgloseCornea['usuarioUltMov']\"\n                                               [(dato)]=\"desgloseCornea.usuarioUltMov\"  class=\"w-100\"\n                                               [atributoVisible]=\"'username'\" >\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!usuarioUltMovEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'desgloseCornea','usuarioUltMov')\" >\n                                   <!--app-usuario-crud [nombre]=\"'usuarioUltMov'\" [usuario]=\"desgloseCornea.usuarioUltMov\" (usuarioChange)=\"evtUsuarioUltMov($event)\"\n                                                           [ocultarConjuntosUsuario]=\"'true'\" [class.hidden]=\"!usuarioUltMovEditar\" ></app-usuario-crud-->\n                            </div>\n                        </div>\n                    </div>\n                     <app-componente-radio [componente]=\"'desgloseCornea'\"\n                                                   [atributo]=\"'status'\"\n                                                   [buscar]=\"desgloseCorneaBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosDesgloseCornea['status']\"\n                                                   [(dato)]=\"desgloseCornea.status\"   class=\"w-100\" >\n                    </app-componente-radio >\n\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/desglose-corneas/desglose-cornea/desglose-cornea.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/desglose-corneas/desglose-cornea/desglose-cornea.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DesgloseCorneaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesgloseCorneaComponent", function() { return DesgloseCorneaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/desglose-cornea */ "./src/app/desglose-corneas/shared/desglose-cornea.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DesgloseCorneaComponent = /** @class */ (function () {
    function DesgloseCorneaComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.desgloseCorneaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovDesgloseCorneaUsuarioEditar = false;
        this.idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitudEditar = false;
    }
    DesgloseCorneaComponent.prototype.actualizarDesgloseCornea = function () {
        if (this.desgloseCornea.id == null) {
            this.desgloseCorneaService.guardarDesgloseCornea(this.desgloseCornea, this.evtGuardar, this);
        }
        else {
            this.desgloseCorneaService.actualizarDesgloseCornea(this.desgloseCornea, this.evtActualiza, this);
        }
    };
    DesgloseCorneaComponent.prototype.evtGuardar = function (desgloseCornea, obj) {
        obj.desgloseCornea = desgloseCornea;
        obj.desgloseCorneaChange.emit(obj.desgloseCornea);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    };
    DesgloseCorneaComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.desgloseCorneaChange.emit(obj.desgloseCornea);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    DesgloseCorneaComponent.prototype.ngOnChanges = function (changes) {
        if (changes.opcion && changes.opcion.currentValue != null) {
            if (changes.opcion.currentValue == 1) {
                this.opcion = 1;
                this.actualizarDesgloseCornea();
            }
        }
    };
    DesgloseCorneaComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DesgloseCorneaComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DesgloseCorneaComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DesgloseCorneaComponent.prototype, "desgloseCorneaBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DesgloseCorneaComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DesgloseCorneaComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DesgloseCorneaComponent.prototype, "validosDesgloseCornea", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_1__["DesgloseCornea"])
    ], DesgloseCorneaComponent.prototype, "desgloseCornea", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DesgloseCorneaComponent.prototype, "desgloseCorneaService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DesgloseCorneaComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DesgloseCorneaComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DesgloseCorneaComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DesgloseCorneaComponent.prototype, "desgloseCorneaChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DesgloseCorneaComponent.prototype, "ocultarConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DesgloseCorneaComponent.prototype, "lista_usuarioUltMovDesgloseCorneaUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DesgloseCorneaComponent.prototype, "lista_idevaluacionSolicitudDesgloseCorneaEvaluacionSolicitud", void 0);
    DesgloseCorneaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-desglose-cornea',
            template: __webpack_require__(/*! ./desglose-cornea.component.html */ "./src/app/desglose-corneas/desglose-cornea/desglose-cornea.component.html"),
            styles: [__webpack_require__(/*! ./desglose-cornea.component.css */ "./src/app/desglose-corneas/desglose-cornea/desglose-cornea.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], DesgloseCorneaComponent);
    return DesgloseCorneaComponent;
}());



/***/ }),

/***/ "./src/app/desglose-corneas/shared/configurar-desglose-cornea.ts":
/*!***********************************************************************!*\
  !*** ./src/app/desglose-corneas/shared/configurar-desglose-cornea.ts ***!
  \***********************************************************************/
/*! exports provided: ConfigurarDesgloseCornea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurarDesgloseCornea", function() { return ConfigurarDesgloseCornea; });
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");

var ConfigurarDesgloseCornea = /** @class */ (function () {
    //   rutaAgregar:string;
    function ConfigurarDesgloseCornea() {
        this.urlprovider = new _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__["URLProvider"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "desgloseCornea";
        this.rutaLista = this.crudServiceBaseUrl + "/getDesgloseCorneas";
        this.rutaAgregar = this.crudServiceBaseUrl + "/guardarDesgloseCornea";
        this.rutaActualizar = this.crudServiceBaseUrl + "/actualizarDesgloseCornea";
        this.rutaEliminar = this.crudServiceBaseUrl + "/eliminarDesgloseCornea";
        this.titulo = "Catálogo DesgloseCornea";
        this.permisosAtributos = null;
        this.permisosTabla = null;
        this.desgloseCorneaConsulta = null;
        this.campoAgEl = null;
        this.tipocampoAgEl = null;
        this.altoComponente = 500;
    }
    ConfigurarDesgloseCornea.prototype.lectura = function () {
        return {
            url: this.rutaLista,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarDesgloseCornea.prototype.lecturaP = function (evt, dat) {
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
    ConfigurarDesgloseCornea.prototype.eliminar = function () {
        return {
            url: this.rutaEliminar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarDesgloseCornea.prototype.eliminarP = function (evt, dat) {
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
    ConfigurarDesgloseCornea.prototype.agregar = function () {
        return {
            url: this.rutaAgregar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarDesgloseCornea.prototype.agregarP = function (evt, dat) {
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
    return ConfigurarDesgloseCornea;
}());



/***/ })

}]);
//# sourceMappingURL=app-desglose-corneas-desglose-cornea-module.js.map