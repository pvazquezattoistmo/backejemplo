(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-caracteristica-donaciones-caracteristica-donacion-module~app-oficio-donaciones-oficio-do~6ae2b066"],{

/***/ "./src/app/caracteristica-donaciones/caracteristica-donacion-conjunto/caracteristica-donacion-conjunto.component.css":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/caracteristica-donaciones/caracteristica-donacion-conjunto/caracteristica-donacion-conjunto.component.css ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/caracteristica-donaciones/caracteristica-donacion-conjunto/caracteristica-donacion-conjunto.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/caracteristica-donaciones/caracteristica-donacion-conjunto/caracteristica-donacion-conjunto.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\"  >\n    <li *ngFor =  \"let caracteristicaDonacion of listaCaracteristicaDonacion \" [ngClass]=\"{ 'active':idSeleccionado=== 'I-'+caracteristicaDonacion.id}\"\n        (click)=\"elegir(caracteristicaDonacion,'I' )\" >\n        <a data-toggle=\"tab\" href=\"#tab-I-{{caracteristicaDonacion.id}}\">{{caracteristicaDonacion.id}}</a>\n    </li>\n    <li *ngFor =  \"let caracteristicaDonacion of listaCaracteristicaDonacionN \" [ngClass]=\"{ 'active':idSeleccionado=== 'N-'+caracteristicaDonacion.id}\"\n        (click)=\"elegir(caracteristicaDonacion, 'N')\" >\n        <a data-toggle=\"tab\" href=\"#tab-N-{{caracteristicaDonacion.id}}\">T-{{caracteristicaDonacion.id}}</a>\n    </li>\n</ul>\n<div class=\"panel panel-default\"  >\n     <div  class=\"tab-content\">\n        <div *ngFor = \"let caracteristicaDonacion of listaCaracteristicaDonacion ; let i = index \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='I-'+caracteristicaDonacion.id}\" id=\"tab-I-{{caracteristicaDonacion.id}}\">\n\t\t\t<app-caracteristica-donacion [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [caracteristicaDonacionBuscar]=\"caracteristicaDonacionBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosCaracteristicaDonacion]=\"validosCaracteristicaDonacion\"  \n\t\t\t\t\t\t  [caracteristicaDonacionService]=\"caracteristicaDonacionService\" [(opcion)]=\"opcionCaracteristicaDonacion\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(caracteristicaDonacion)]=\"listaCaracteristicaDonacion[i]\"  [ocultarConjuntos]=\"ocultarConjuntosCaracteristicaDonacion\"\n                           [lista_usuarioUltMovCaracteristicaDonacionUsuario]=\"lista_usuarioUltMovCaracteristicaDonacionUsuario\" \n                           [lista_idoficioDonacionCaracteristicaDonacionOficioDonacion]=\"lista_idoficioDonacionCaracteristicaDonacionOficioDonacion\" \n\n\t\t\t\t\t  >\n\t\t\t</app-caracteristica-donacion>\n        </div>\n        <div *ngFor = \"let caracteristicaDonacion of listaCaracteristicaDonacionN;  let i = index  \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='N-'+caracteristicaDonacion.id}\" id=\"tab-N-{{caracteristicaDonacion.id}}\">\n\t\t\t<app-caracteristica-donacion [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [caracteristicaDonacionBuscar]=\"caracteristicaDonacionBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosCaracteristicaDonacion]=\"validosCaracteristicaDonacion\"  \n\t\t\t\t\t\t  [caracteristicaDonacionService]=\"caracteristicaDonacionService\" [(opcion)]=\"opcionCaracteristicaDonacion\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(caracteristicaDonacion)]=\"listaCaracteristicaDonacionN[i]\"  [ocultarConjuntos]=\"ocultarConjuntosCaracteristicaDonacion\"\n                           [lista_usuarioUltMovCaracteristicaDonacionUsuario]=\"lista_usuarioUltMovCaracteristicaDonacionUsuario\" \n                           [lista_idoficioDonacionCaracteristicaDonacionOficioDonacion]=\"lista_idoficioDonacionCaracteristicaDonacionOficioDonacion\" \n\n\t\t\t\t\t  >\n\t\t\t</app-caracteristica-donacion>  \n        </div>\n\n    </div>\n    <div class=\"panel-footer\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"agregarNuevo()\">\n            <span class=\"fa fa-plus-circle\" aria-hidden=\"true\" style=\"font-size:36px\"></span> AGREGAR\n        </button>\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"actualizaTodo()\">\n            <span class=\"fa fa-reply-all\" aria-hidden=\"true\" style=\"font-size:36px\"></span> ACTUALIZAR TODO\n        </button>\n    </div>\n</div>\t\t\t\n"

/***/ }),

/***/ "./src/app/caracteristica-donaciones/caracteristica-donacion-conjunto/caracteristica-donacion-conjunto.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/caracteristica-donaciones/caracteristica-donacion-conjunto/caracteristica-donacion-conjunto.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: CaracteristicaDonacionConjuntoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaracteristicaDonacionConjuntoComponent", function() { return CaracteristicaDonacionConjuntoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/caracteristica-donacion */ "./src/app/caracteristica-donaciones/shared/caracteristica-donacion.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CaracteristicaDonacionConjuntoComponent = /** @class */ (function () {
    function CaracteristicaDonacionConjuntoComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovCaracteristicaDonacionUsuarioEditar = false;
        this.idoficioDonacionCaracteristicaDonacionOficioDonacionEditar = false;
        this.listaCaracteristicaDonacionN = [];
        this.listaCaracteristicaDonacion = [];
        this.listaCaracteristicaDonacionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.caracteristicaDonacionN = new _shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_1__["CaracteristicaDonacion"]();
        this.caracteristicaDonacionNChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.agregados = 0;
        this.actualizados = 0;
        this.idSeleccionado = "N-0";
    }
    CaracteristicaDonacionConjuntoComponent.prototype.elegir = function (caracteristicaDonacion, tipo) {
        this.idSeleccionado = tipo + "-" + caracteristicaDonacion.id;
        this.caracteristicaDonacionN = caracteristicaDonacion;
    };
    CaracteristicaDonacionConjuntoComponent.prototype.ngOnInit = function () {
        this.caracteristicaDonacionN.id = 0;
        this.listaCaracteristicaDonacionN.push(Object.assign({}, this.caracteristicaDonacionN));
        this.usuariologueado = this.globalesService.dameUsuario();
    };
    CaracteristicaDonacionConjuntoComponent.prototype.agregarNuevo = function () {
        var pg = new _shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_1__["CaracteristicaDonacion"]();
        pg.id = this.listaCaracteristicaDonacionN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaCaracteristicaDonacionN.push(pg);
    };
    CaracteristicaDonacionConjuntoComponent.prototype.actualizaTodo = function () {
        this.agregados = 0;
        this.actualizados = 0;
        for (var _i = 0, _a = this.listaCaracteristicaDonacion; _i < _a.length; _i++) {
            var caracteristicaDonacion = _a[_i];
            this.caracteristicaDonacionService.actualizarCaracteristicaDonacion(caracteristicaDonacion, this.evtActualiza, this);
        }
        for (var _b = 0, _c = this.listaCaracteristicaDonacionN; _b < _c.length; _b++) {
            var caracteristicaDonacion = _c[_b];
            caracteristicaDonacion.id = null;
            this.caracteristicaDonacionService.guardarCaracteristicaDonacion(caracteristicaDonacion, this.evtGuardar, this);
        }
    };
    CaracteristicaDonacionConjuntoComponent.prototype.evtGuardar = function (caracteristicaDonacion, obj) {
        obj.agregados++;
        obj.listaCaracteristicaDonacion.push(caracteristicaDonacion);
        if (obj.agregados >= obj.listaCaracteristicaDonacionN.length) {
            obj.caracteristicaDonacionN = new _shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_1__["CaracteristicaDonacion"]();
            obj.listaCaracteristicaDonacionN = [];
            obj.caracteristicaDonacionN.id = 0;
            obj.idSeleccionado = "N-" + obj.caracteristicaDonacionN.id;
            obj.listaCaracteristicaDonacionN.push(Object.assign({}, obj.caracteristicaDonacionN));
            obj.listaCaracteristicaDonacionChange.emit(obj.listaCaracteristicaDonacion);
        }
        if (obj.agregados >= obj.listaCaracteristicaDonacionN.length &&
            obj.actualizados >= obj.listaCaracteristicaDonacion.length) {
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    CaracteristicaDonacionConjuntoComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.actualizados++;
            if (obj.agregados >= obj.listaCaracteristicaDonacionN.length &&
                obj.actualizados >= obj.listaCaracteristicaDonacion.length) {
                obj.opcion = 0;
                obj.opcion.emit(obj.opcion);
            }
        }
    };
    CaracteristicaDonacionConjuntoComponent.prototype.ngOnChanges = function (changes) {
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
    ], CaracteristicaDonacionConjuntoComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CaracteristicaDonacionConjuntoComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CaracteristicaDonacionConjuntoComponent.prototype, "caracteristicaDonacionBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CaracteristicaDonacionConjuntoComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CaracteristicaDonacionConjuntoComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CaracteristicaDonacionConjuntoComponent.prototype, "validosCaracteristicaDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CaracteristicaDonacionConjuntoComponent.prototype, "ocultarConjuntosCaracteristicaDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CaracteristicaDonacionConjuntoComponent.prototype, "caracteristicaDonacionService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CaracteristicaDonacionConjuntoComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CaracteristicaDonacionConjuntoComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CaracteristicaDonacionConjuntoComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CaracteristicaDonacionConjuntoComponent.prototype, "lista_usuarioUltMovCaracteristicaDonacionUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CaracteristicaDonacionConjuntoComponent.prototype, "lista_idoficioDonacionCaracteristicaDonacionOficioDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CaracteristicaDonacionConjuntoComponent.prototype, "listaCaracteristicaDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CaracteristicaDonacionConjuntoComponent.prototype, "listaCaracteristicaDonacionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_1__["CaracteristicaDonacion"])
    ], CaracteristicaDonacionConjuntoComponent.prototype, "caracteristicaDonacionN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CaracteristicaDonacionConjuntoComponent.prototype, "caracteristicaDonacionNChange", void 0);
    CaracteristicaDonacionConjuntoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-caracteristica-donacion-conjunto',
            template: __webpack_require__(/*! ./caracteristica-donacion-conjunto.component.html */ "./src/app/caracteristica-donaciones/caracteristica-donacion-conjunto/caracteristica-donacion-conjunto.component.html"),
            styles: [__webpack_require__(/*! ./caracteristica-donacion-conjunto.component.css */ "./src/app/caracteristica-donaciones/caracteristica-donacion-conjunto/caracteristica-donacion-conjunto.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], CaracteristicaDonacionConjuntoComponent);
    return CaracteristicaDonacionConjuntoComponent;
}());



/***/ }),

/***/ "./src/app/caracteristica-donaciones/caracteristica-donacion-crud/caracteristica-donacion-crud.component.css":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/caracteristica-donaciones/caracteristica-donacion-crud/caracteristica-donacion-crud.component.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/caracteristica-donaciones/caracteristica-donacion-crud/caracteristica-donacion-crud.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/caracteristica-donaciones/caracteristica-donacion-crud/caracteristica-donacion-crud.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"panel panel-default\">\n        <app-caracteristica-donacion [usuariologueado]=\"usuariologueado\"\n                           [etiquetaGeneral]=\"'2. Características de la Donación'\"\n                           [caracteristicaDonacionBuscar]=\"caracteristicaDonacionBuscar\"\n                           [permisosAtributos]=\"permisosAtributos\"\n                           [permisosConjuntos]=\"permisosConjuntos\"\n                           [validosCaracteristicaDonacion]=\"validosCaracteristicaDonacion\"\n                           [caracteristicaDonacionService]=\"caracteristicaDonacion_service\"\n                           [(opcion)]=\"opcionCaracteristicaDonacion\"\n                           [globalesService]=\"globalesService\"\n                           [(caracteristicaDonacion)]=\"caracteristicaDonacion\"\n                           [ocultarConjuntos]=\"ocultarConjuntosCaracteristicaDonacion\"\n                           [lista_usuarioUltMovCaracteristicaDonacionUsuario]=\"lista_usuarioUltMovCaracteristicaDonacionUsuario\"\n                           [lista_idoficioDonacionCaracteristicaDonacionOficioDonacion]=\"lista_idoficioDonacionCaracteristicaDonacionOficioDonacion\"\n                           [enable]=\"enable\"\n                           [recepcionSolicitudEvaluacion]=\"recepcionSolicitudEvaluacion\"\n\t\t\t\t\t  >\n\n        </app-caracteristica-donacion>\n\n        <!-- <div class=\"panel-footer\" style=\"text-align: center\">\n\t\t  <div style=\"display: inline-block;width: 90%;\">\n            <button type=\"button\" class=\"btn btn-primary btn-buscar\" [class.hidden]=\"!caracteristicaDonacionBuscar\" (click)=\"buscarCaracteristicaDonacionFront(formaGeneral)\"><span class=\"fa fa-search\"></span> Buscar</button>\n            <button type=\"button\" class=\"btn btn-success btn-agregar\" [class.hidden]=\"!caracteristicaDonacionAgregar\" (click)=\"nuevoCaracteristicaDonacionFront(formaGeneral)\" ><span class=\"fa fa-newspaper\"></span>Nuevo </button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"!caracteristicaDonacionActualizar\" (click)=\"actualizarCaracteristicaDonacionFront(formaGeneral)\"><span class=\"fa fa-arrow-up\"></span> Actualizar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-eliminar\"  [class.hidden]=\"!caracteristicaDonacionEliminar\" (click)=\"eliminarCaracteristicaDonacionFront(formaGeneral)\"> <span class=\"fa fa-trash\"></span>Eliminar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-guardar\"  [disabled]=\"!validaTodosc\" [class.hidden]=\"!caracteristicaDonacionGuardar\" (click)=\"guardarCaracteristicaDonacionFront(formaGeneral)\"><span class=\"fa fa-floppy-disk\"></span>Guardar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-cancelar\"  [class.hidden]=\"!caracteristicaDonacionCancelar\" (click)=\"cancelarCaracteristicaDonacionFront(formaGeneral)\"><span class=\"fa fa-remove\"></span>Cancelar</button>\n            <button type=\"button\" class=\"btn btn-primary btn-limpiar\"  (click)=\"limpiarCampos()\">Limpiar Campos</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteCaracteristicaDonacionWord\" (click)=\"reporteCaracteristicaDonacionWord(formaGeneral)\"> <span class=\"fa fa-download-alt\"></span>Word</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteCaracteristicaDonacionExcel\" (click)=\"reporteCaracteristicaDonacionExcel(formaGeneral)\"> <span class=\"fa fa-download-alt\"></span> Excel</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteCaracteristicaDonacionPdf\" (click)=\"reporteCaracteristicaDonacionPdf(formaGeneral)\"><span class=\"fa fa-download-alt\"></span> PDF</button>\n          </div>\n\n        </div> -->\n    </div>\n    <!-- <div class=\"modal fade\" id=\"buscarCaracteristicaDonacion_{{nombre}}\" role=\"dialog\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n                <div class=\"modal-body\">\n                    <app-caracteristica-donacion-list-kendo [nombregrid]=\"'buscar_'+nombre\"  [configuracionCaracteristicaDonacion]=\"configuracionCaracteristicaDonacion\"  (caracteristicaDonacionSeleccionado) =\"evtCaracteristicaDonacionSeleccionado($event)\">  </app-caracteristica-donacion-list-kendo>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                </div>\n            </div>\n\n        </div>\n    </div> -->\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/caracteristica-donaciones/caracteristica-donacion-crud/caracteristica-donacion-crud.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/caracteristica-donaciones/caracteristica-donacion-crud/caracteristica-donacion-crud.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: CaracteristicaDonacionCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaracteristicaDonacionCrudComponent", function() { return CaracteristicaDonacionCrudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/core.service */ "./src/app/shared/core.service.ts");
/* harmony import */ var _shared_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/file.service */ "./src/app/shared/file.service.ts");
/* harmony import */ var _shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/caracteristica-donacion */ "./src/app/caracteristica-donaciones/shared/caracteristica-donacion.ts");
/* harmony import */ var _shared_caracteristica_donacion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/caracteristica-donacion.service */ "./src/app/caracteristica-donaciones/shared/caracteristica-donacion.service.ts");
/* harmony import */ var _shared_configurar_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/configurar-caracteristica-donacion */ "./src/app/caracteristica-donaciones/shared/configurar-caracteristica-donacion.ts");
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









var CaracteristicaDonacionCrudComponent = /** @class */ (function () {
    function CaracteristicaDonacionCrudComponent(globalesService, zone, fileservice, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    caracteristicaDonacion_service, usuario_service, usuarioBtc_service, perfilRedIssste_service, 
    //                public perfilBtc_service: PerfilBtcService,
    hospital_service, entidadFederativa_service, perfil_service, oficioDonacion_service, recepcionSolicitudEvaluacion_service, solicitudEvaluacionCorneal_service, causaMuerte_service) {
        this.globalesService = globalesService;
        this.zone = zone;
        this.fileservice = fileservice;
        this.coreService = coreService;
        this.caracteristicaDonacion_service = caracteristicaDonacion_service;
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
        this.opcionCaracteristicaDonacion = 0;
        this.validosCaracteristicaDonacion = {
            id: false,
            fechaBaja: false,
            oiciCultivo: false,
            oici: false,
            odcdCultivo: false,
            odcd: false,
            fechaRegistro: false,
            fechaActualizacion: false,
            tiempoIsquemia: false,
            observacion: true,
            status: false,
            usuarioUltMov: false,
            idoficioDonacion: false,
        };
        this.ocultarConjuntosCaracteristicaDonacion = false;
        this.nombre = "";
        this.permisosTabla = { "tabla": "caracteristicaDonacion", "permiso": 0, "etiqueta": "" };
        this.permisosAtributos = [];
        this.permisosConjuntos = [];
        //  public perfil: Perfil;
        this.accion = 0;
        this.caracteristicaDonacionLazy = false;
        this.caracteristicaDonacionPermisos = false;
        this.validaciones = false;
        this.validacionesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.caracteristicaDonacion = new _shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_4__["CaracteristicaDonacion"]();
        this.caracteristicaDonacionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.caracteristicaDonacionTablaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lista_caracteristicaDonaciones = [];
        this.usuarioUltMovCaracteristicaDonacionUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.lista_usuarioUltMovCaracteristicaDonacionUsuario = [];
        this.usuarioUltMovCaracteristicaDonacionUsuarioEditar = false;
        this.idoficioDonacionCaracteristicaDonacionOficioDonacionEleccion = new _oficio_donaciones_shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_14__["OficioDonacion"]();
        this.lista_idoficioDonacionCaracteristicaDonacionOficioDonacion = [];
        this.idoficioDonacionCaracteristicaDonacionOficioDonacionEditar = false;
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                this.obtenerPermisos();
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
            }
        }
        this.caracteristicaDonacionSeleccion = this.caracteristicaDonacionCancelar = this.caracteristicaDonacionGuardar = this.caracteristicaDonacionBuscar = this.caracteristicaDonacionAgregar = this.caracteristicaDonacionActualizar = this.caracteristicaDonacionEliminar = false;
        this.configuracionCaracteristicaDonacion = new _shared_configurar_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_6__["ConfigurarCaracteristicaDonacion"]();
        //this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovCaracteristicaDonacionUsuario, this);
        //this.oficioDonacion_service.getOficioDonacionesActivos(this.evtGetIdoficioDonacionCaracteristicaDonacionOficioDonacion, this);
        this.limpiarCampos();
    }
    Object.defineProperty(CaracteristicaDonacionCrudComponent.prototype, "caracteristicaDonacionOcultarConjuntos", {
        get: function () {
            if (this.ocultarConjuntosCaracteristicaDonacion)
                return true;
            return !this.caracteristicaDonacionActualizar;
        },
        enumerable: true,
        configurable: true
    });
    CaracteristicaDonacionCrudComponent.prototype.ngOnChanges = function (changes) {
        if (changes.caracteristicaDonacion && changes.caracteristicaDonacion.currentValue == null &&
            this.caracteristicaDonacion == null)
            this.caracteristicaDonacion = new _shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_4__["CaracteristicaDonacion"]();
        else {
            var aux = new _shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_4__["CaracteristicaDonacion"]();
            if (this.caracteristicaDonacion)
                aux.from(this.caracteristicaDonacion);
            if (aux.isOk && aux.isOk()) {
                this.accion = 7;
                this.caracteristicaDonacionBuscar = this.caracteristicaDonacionAgregar = this.caracteristicaDonacionSeleccion = this.caracteristicaDonacionGuardar = false;
                this.caracteristicaDonacionActualizar = this.caracteristicaDonacionEliminar = this.caracteristicaDonacionCancelar = true;
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
                this.caracteristicaDonacionSeleccion = this.caracteristicaDonacionAgregar = this.caracteristicaDonacionBuscar = this.caracteristicaDonacionActualizar = this.caracteristicaDonacionEliminar = false;
                this.caracteristicaDonacionGuardar = this.caracteristicaDonacionCancelar = true;
            }
        }
    };
    CaracteristicaDonacionCrudComponent.prototype.obtenerPermisos = function () {
        var id_expe = -1;
        var tablas = [
            "caracteristicaDonacion",
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
        this.caracteristicaDonacionPermisos = false;
        this.coreService.permisos(parametros, this.evtCorePermisos, this);
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    CaracteristicaDonacionCrudComponent.prototype.evtCorePermisos = function (permisos, obj) {
        obj.caracteristicaDonacionPermisos = true;
        if (permisos && permisos.caracteristicaDonacion && permisos.caracteristicaDonacion.PermisoAtributo && permisos.caracteristicaDonacion.PermisoAtributo.length > 0) {
            obj.permisosAtributos = permisos.caracteristicaDonacion.PermisoAtributo;
        }
        else {
            obj.usuariologueado = undefined;
        }
        if (permisos && permisos.caracteristicaDonacion && permisos.caracteristicaDonacion.PermisoConjunto && permisos.caracteristicaDonacion.PermisoConjunto.length > 0) {
            obj.permisosConjuntos = permisos.caracteristicaDonacion.PermisoConjunto;
        }
        if (permisos && permisos.caracteristicaDonacion && permisos.caracteristicaDonacion.PermisoTabla && permisos.caracteristicaDonacion.PermisoTabla.length > 0) {
            obj.permisosTabla = permisos.caracteristicaDonacion.PermisoTabla[0];
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
    CaracteristicaDonacionCrudComponent.prototype.evtGetUsuarioUltMovCaracteristicaDonacionUsuario = function (lista_usuarioUltMovCaracteristicaDonacionUsuario, obj) {
        obj.lista_usuarioUltMovCaracteristicaDonacionUsuario = lista_usuarioUltMovCaracteristicaDonacionUsuario;
        obj.actualizar_UsuarioUltMovCaracteristicaDonacionUsuario();
    };
    CaracteristicaDonacionCrudComponent.prototype.evtGetIdoficioDonacionCaracteristicaDonacionOficioDonacion = function (lista_idoficioDonacionCaracteristicaDonacionOficioDonacion, obj) {
        obj.lista_idoficioDonacionCaracteristicaDonacionOficioDonacion = lista_idoficioDonacionCaracteristicaDonacionOficioDonacion;
        obj.actualizar_IdoficioDonacionCaracteristicaDonacionOficioDonacion();
    };
    CaracteristicaDonacionCrudComponent.prototype.actualizar_UsuarioUltMovCaracteristicaDonacionUsuario = function () {
        if (this.usuarioUltMovCaracteristicaDonacionUsuarioEleccion)
            for (var _i = 0, _a = this.lista_usuarioUltMovCaracteristicaDonacionUsuario; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.usuarioUltMovCaracteristicaDonacionUsuarioEleccion.id) {
                    this.usuarioUltMovCaracteristicaDonacionUsuarioEleccion = eleme;
                    break;
                }
            }
    };
    CaracteristicaDonacionCrudComponent.prototype.actualizar_IdoficioDonacionCaracteristicaDonacionOficioDonacion = function () {
        if (this.idoficioDonacionCaracteristicaDonacionOficioDonacionEleccion)
            for (var _i = 0, _a = this.lista_idoficioDonacionCaracteristicaDonacionOficioDonacion; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.idoficioDonacionCaracteristicaDonacionOficioDonacionEleccion.id) {
                    this.idoficioDonacionCaracteristicaDonacionOficioDonacionEleccion = eleme;
                    break;
                }
            }
    };
    CaracteristicaDonacionCrudComponent.prototype.ngDoCheck = function () {
    };
    CaracteristicaDonacionCrudComponent.prototype.validaAcciones = function (vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    };
    Object.defineProperty(CaracteristicaDonacionCrudComponent.prototype, "validaId", {
        get: function () {
            return this.validosCaracteristicaDonacion['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaracteristicaDonacionCrudComponent.prototype, "validaIds", {
        get: function () {
            return this.validosCaracteristicaDonacion['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaracteristicaDonacionCrudComponent.prototype, "validaFechaBaja", {
        get: function () {
            return this.validosCaracteristicaDonacion['fechaBaja'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaracteristicaDonacionCrudComponent.prototype, "validaOiciCultivo", {
        get: function () {
            return this.validosCaracteristicaDonacion['oiciCultivo'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaracteristicaDonacionCrudComponent.prototype, "validaOici", {
        get: function () {
            return this.validosCaracteristicaDonacion['oici'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaracteristicaDonacionCrudComponent.prototype, "validaOdcdCultivo", {
        get: function () {
            return this.validosCaracteristicaDonacion['odcdCultivo'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaracteristicaDonacionCrudComponent.prototype, "validaOdcd", {
        get: function () {
            return this.validosCaracteristicaDonacion['odcd'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaracteristicaDonacionCrudComponent.prototype, "validaFechaRegistro", {
        get: function () {
            return this.validosCaracteristicaDonacion['fechaRegistro'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaracteristicaDonacionCrudComponent.prototype, "validaFechaActualizacion", {
        get: function () {
            return this.validosCaracteristicaDonacion['fechaActualizacion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaracteristicaDonacionCrudComponent.prototype, "validaTiempoIsquemia", {
        get: function () {
            return this.validosCaracteristicaDonacion['tiempoIsquemia'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaracteristicaDonacionCrudComponent.prototype, "validaObservacion", {
        get: function () {
            return this.validosCaracteristicaDonacion['observacion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaracteristicaDonacionCrudComponent.prototype, "validaStatus", {
        get: function () {
            return this.validosCaracteristicaDonacion['status'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaracteristicaDonacionCrudComponent.prototype, "validaUsuarioUltMov", {
        get: function () {
            return this.validosCaracteristicaDonacion['usuarioUltMov'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaracteristicaDonacionCrudComponent.prototype, "validaIdoficioDonacion", {
        get: function () {
            return this.validosCaracteristicaDonacion['idoficioDonacion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaracteristicaDonacionCrudComponent.prototype, "validaTodosc", {
        get: function () {
            var salida = this.validaId && this.validaFechaBaja && this.validaOiciCultivo && this.validaOici && this.validaOdcdCultivo && this.validaOdcd && this.validaFechaRegistro && this.validaFechaActualizacion && this.validaTiempoIsquemia && this.validaObservacion && this.validaStatus && this.validaUsuarioUltMov && this.validaIdoficioDonacion;
            if (salida != this.validaciones)
                this.validacionesChange.emit(salida);
            return salida;
        },
        enumerable: true,
        configurable: true
    });
    CaracteristicaDonacionCrudComponent.prototype.obtenerCaracteristicaDonaciones = function (lista, objeto) {
        objeto.lista_caracteristicaDonaciones = lista;
        if (lista && lista.length > 0) {
            objeto.caracteristicaDonacion.from(lista[0]);
            objeto.evtCaracteristicaDonacionSeleccionado(objeto.caracteristicaDonacion);
            if (objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    };
    CaracteristicaDonacionCrudComponent.prototype.evn_lazy_caracteristicaDonacion = function (caracteristicaDonacion, objeto) {
        objeto.caracteristicaDonacion = caracteristicaDonacion;
        objeto.caracteristicaDonacionChange.emit(objeto.caracteristicaDonacion);
        objeto.configuarCombosObjetos();
        objeto.caracteristicaDonacionLazy = true;
    };
    Object.defineProperty(CaracteristicaDonacionCrudComponent.prototype, "datosReporteCaracteristicaDonacionWord", {
        /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
        get: function () {
            return !(this.caracteristicaDonacionActualizar && this.caracteristicaDonacionLazy && this.globalesService.preporteWord(this, "caracteristicaDonacion"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaracteristicaDonacionCrudComponent.prototype, "datosReporteCaracteristicaDonacionExcel", {
        get: function () {
            return !(this.caracteristicaDonacionActualizar && this.caracteristicaDonacionLazy && this.globalesService.preporteExcel(this, "caracteristicaDonacion"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaracteristicaDonacionCrudComponent.prototype, "datosReporteCaracteristicaDonacionPdf", {
        get: function () {
            return !(this.caracteristicaDonacionActualizar && this.caracteristicaDonacionLazy && this.globalesService.preportePdf(this, "caracteristicaDonacion"));
        },
        enumerable: true,
        configurable: true
    });
    CaracteristicaDonacionCrudComponent.prototype.reporteCaracteristicaDonacionExcel = function (form) {
        var nombre = "CaracteristicaDonacion.xlsx";
        var path = "file/reporteExcel";
        var parametros = {};
        parametros["entradas"] = { "caracteristicaDonacion": this.caracteristicaDonacion };
        parametros["plantilla"] = "CaracteristicaDonacion.xlsx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    CaracteristicaDonacionCrudComponent.prototype.reporteCaracteristicaDonacionWord = function (form) {
        var nombre = "CaracteristicaDonacion.docx";
        var path = "file/reporteWord";
        var parametros = {};
        parametros["entradas"] = { "caracteristicaDonacion": this.caracteristicaDonacion };
        parametros["plantilla"] = "CaracteristicaDonacion.docx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    CaracteristicaDonacionCrudComponent.prototype.reporteCaracteristicaDonacionPdf = function (form) {
        var nombre = "CaracteristicaDonacion.docx";
        var path = "file/reportePdf";
        var parametros = {};
        parametros["entradas"] = { "caracteristicaDonacion": this.caracteristicaDonacion };
        parametros["plantilla"] = "CaracteristicaDonacion.docx";
        parametros["salida"] = "CaracteristicaDonacion.pdf";
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */
    CaracteristicaDonacionCrudComponent.prototype.accionesBuscar = function () {
        this.accion = 1;
        this.caracteristicaDonacionGuardar = this.caracteristicaDonacionActualizar = this.caracteristicaDonacionEliminar = false;
        this.caracteristicaDonacionBuscar = this.caracteristicaDonacionAgregar = this.caracteristicaDonacionCancelar = true;
    };
    CaracteristicaDonacionCrudComponent.prototype.buscarCaracteristicaDonacionFront = function (form) {
        this.accionesBuscar();
        var vcaracteristicaDonacion = new _shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_4__["CaracteristicaDonacion"]();
        vcaracteristicaDonacion.from(this.caracteristicaDonacion);
        this.configuracionCaracteristicaDonacion = new _shared_configurar_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_6__["ConfigurarCaracteristicaDonacion"]();
        this.configuracionCaracteristicaDonacion.permisosTabla = { "tabla": "caracteristicaDonacion", "permiso": 8 };
        this.configuracionCaracteristicaDonacion.titulo = "Buscar " + this.permisosTabla.etiqueta;
        this.configuracionCaracteristicaDonacion.caracteristicaDonacionConsulta = vcaracteristicaDonacion;
        this.permisosacciones();
        $("#buscarCaracteristicaDonacion_" + this.nombre).modal();
    };
    CaracteristicaDonacionCrudComponent.prototype.buscarCaracteristicaDonacionBack = function (caracteristicaDonacion) {
        this.caracteristicaDonacion_service.getCaracteristicaDonacionesByDto(caracteristicaDonacion, this.eventoSrvCaracteristicaDonacionBuscar, this);
    };
    CaracteristicaDonacionCrudComponent.prototype.eventoSrvCaracteristicaDonacionBuscar = function (lista, objeto) {
        objeto.lista_caracteristicaDonaciones = lista;
        if (lista && lista.length > 0) {
            objeto.caracteristicaDonacion = lista[0];
            objeto.caracteristicaDonacionLazy = false;
            objeto.caracteristicaDonacion_service.lazyCaracteristicaDonacion(objeto.caracteristicaDonacion, objeto.evn_lazy_caracteristicaDonacion, objeto);
        }
    };
    CaracteristicaDonacionCrudComponent.prototype.guardarCaracteristicaDonacionFront = function (form) {
        this.accion = 5; // ********************************************************************************************** maquina
        this.guardarCaracteristicaDonacionBack(this.caracteristicaDonacion);
        this.accionesBuscar(); // ********************************************************************************* maquina
        this.permisosacciones();
    };
    CaracteristicaDonacionCrudComponent.prototype.guardarCaracteristicaDonacionBack = function (caracteristicaDonacion) {
        if (caracteristicaDonacion.usuarioUltMov == null)
            caracteristicaDonacion.usuarioUltMov = this.globalesService.dameUsuario();
        if (caracteristicaDonacion.status == null || caracteristicaDonacion.status == "")
            caracteristicaDonacion.status = 1;
        this.caracteristicaDonacion_service.guardarCaracteristicaDonacion(caracteristicaDonacion, this.eventoSrvCaracteristicaDonacionGuardar, this);
    };
    CaracteristicaDonacionCrudComponent.prototype.eventoSrvCaracteristicaDonacionGuardar = function (caracteristicaDonacion, obj) {
        obj.caracteristicaDonacion = caracteristicaDonacion;
        bootbox.alert("Datos guardados con éxito");
        var aux = new _shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_4__["CaracteristicaDonacion"]();
        aux.from(caracteristicaDonacion);
        obj.caracteristicaDonacionChange.emit(aux);
        obj.caracteristicaDonacionTablaChange.emit(aux);
        obj.caracteristicaDonacionLazy = false;
        obj.caracteristicaDonacion_service.lazyCaracteristicaDonacion(obj.caracteristicaDonacion, obj.evn_lazy_caracteristicaDonacion, obj);
        obj.accionesActualizar();
    };
    CaracteristicaDonacionCrudComponent.prototype.actualizarCaracteristicaDonacionFront = function (form) {
        this.accion = 3; // ************************************************************************************* maquina
        this.actualizarCaracteristicaDonacionBack(this.caracteristicaDonacion);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    };
    CaracteristicaDonacionCrudComponent.prototype.actualizarCaracteristicaDonacionBack = function (caracteristicaDonacion) {
        caracteristicaDonacion.usuarioUltMov = this.globalesService.dameUsuario();
        this.caracteristicaDonacion_service.actualizarCaracteristicaDonacion(caracteristicaDonacion, this.eventoSrvCaracteristicaDonacionActualizar, this);
    };
    CaracteristicaDonacionCrudComponent.prototype.eventoSrvCaracteristicaDonacionActualizar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux = new _shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_4__["CaracteristicaDonacion"]();
            // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.caracteristicaDonacionLazy = false;
            obj.caracteristicaDonacion_service.lazyCaracteristicaDonacion(obj.caracteristicaDonacion, obj.evn_lazy_caracteristicaDonacion, obj);
            // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.caracteristicaDonacion);
            obj.caracteristicaDonacionChange.emit(aux);
            obj.caracteristicaDonacionTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    };
    CaracteristicaDonacionCrudComponent.prototype.eliminarCaracteristicaDonacionFront = function (form) {
        this.accion = 4;
        this.eliminarCaracteristicaDonacionBack(this.caracteristicaDonacion);
        this.permisosacciones();
        this.accionesBuscar();
    };
    CaracteristicaDonacionCrudComponent.prototype.eliminarCaracteristicaDonacionBack = function (caracteristicaDonacion) {
        caracteristicaDonacion.usuarioUltMov = this.globalesService.dameUsuario();
        this.caracteristicaDonacion_service.eliminarCaracteristicaDonacion(caracteristicaDonacion, this.eventoSrvCaracteristicaDonacionEliminar, this);
    };
    CaracteristicaDonacionCrudComponent.prototype.eventoSrvCaracteristicaDonacionEliminar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.caracteristicaDonacion = new _shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_4__["CaracteristicaDonacion"]();
            obj.caracteristicaDonacionChange.emit(obj.caracteristicaDonacion);
            obj.caracteristicaDonacionTablaChange.emit(obj.caracteristicaDonacion);
            obj.limpiarCampos();
        }
    };
    CaracteristicaDonacionCrudComponent.prototype.cancelarCaracteristicaDonacionFront = function (form) {
        this.accion = 6;
        this.caracteristicaDonacionCancelar = this.caracteristicaDonacionGuardar = this.caracteristicaDonacionActualizar = this.caracteristicaDonacionEliminar = false;
        this.caracteristicaDonacionBuscar = this.caracteristicaDonacionAgregar = true;
        this.permisosacciones();
    };
    CaracteristicaDonacionCrudComponent.prototype.nuevoCaracteristicaDonacionFront = function (form) {
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
                this.caracteristicaDonacionSeleccion = this.caracteristicaDonacionAgregar = this.caracteristicaDonacionBuscar = this.caracteristicaDonacionActualizar = this.caracteristicaDonacionEliminar = false;
                this.caracteristicaDonacionGuardar = this.caracteristicaDonacionCancelar = true;
            }.bind(this)
        });
    };
    CaracteristicaDonacionCrudComponent.prototype.configuarCombosObjetos = function () {
        this.lista_usuarioUltMovCaracteristicaDonacionUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovCaracteristicaDonacionUsuario, this);
        this.lista_idoficioDonacionCaracteristicaDonacionOficioDonacion = [];
        this.oficioDonacion_service.getOficioDonacionesActivos(this.evtGetIdoficioDonacionCaracteristicaDonacionOficioDonacion, this);
    };
    CaracteristicaDonacionCrudComponent.prototype.configurarTablasConjuntos = function () {
    };
    CaracteristicaDonacionCrudComponent.prototype.accionesActualizar = function () {
        this.accion = 7;
        this.caracteristicaDonacionBuscar = this.caracteristicaDonacionAgregar = this.caracteristicaDonacionSeleccion = this.caracteristicaDonacionGuardar = false;
        this.caracteristicaDonacionActualizar = this.caracteristicaDonacionEliminar = this.caracteristicaDonacionCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    };
    CaracteristicaDonacionCrudComponent.prototype.evtCaracteristicaDonacionSeleccionado = function (caracteristicaDonacion) {
        this.caracteristicaDonacion = new _shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_4__["CaracteristicaDonacion"]();
        this.caracteristicaDonacion.from(caracteristicaDonacion);
        this.caracteristicaDonacionLazy = false;
        this.caracteristicaDonacion_service.lazyCaracteristicaDonacion(this.caracteristicaDonacion, this.evn_lazy_caracteristicaDonacion, this);
        this.accion = 7;
        this.caracteristicaDonacionBuscar = this.caracteristicaDonacionAgregar = this.caracteristicaDonacionSeleccion = this.caracteristicaDonacionGuardar = false;
        this.caracteristicaDonacionActualizar = this.caracteristicaDonacionEliminar = this.caracteristicaDonacionCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarCaracteristicaDonacion_" + this.nombre).modal("hide");
    };
    CaracteristicaDonacionCrudComponent.prototype.ngOnInit = function () {
        this.accion = 0; // *********************************************************************************************************** maquina
        this.caracteristicaDonacionSeleccion = this.caracteristicaDonacionCancelar = this.caracteristicaDonacionGuardar = this.caracteristicaDonacionActualizar = this.caracteristicaDonacionEliminar = false; // ******************** maquina
        this.caracteristicaDonacionBuscar = this.caracteristicaDonacionAgregar = true; // ************************************************************************************* maquina
        this.permisosacciones();
    };
    CaracteristicaDonacionCrudComponent.prototype.permisosacciones = function () {
        if (this.caracteristicaDonacionBuscar)
            this.caracteristicaDonacionBuscar = this.globalesService.pbuscar(this, "caracteristicaDonacion");
        if (this.caracteristicaDonacionActualizar)
            this.caracteristicaDonacionActualizar = (this.globalesService.pacutalizar(this, "caracteristicaDonacion") && this.globalesService.pbuscar(this, "caracteristicaDonacion"));
        if (this.caracteristicaDonacionEliminar)
            this.caracteristicaDonacionEliminar = (this.globalesService.peliminar(this, "caracteristicaDonacion") && this.globalesService.pbuscar(this, "caracteristicaDonacion"));
        if (this.caracteristicaDonacionAgregar)
            this.caracteristicaDonacionAgregar = this.globalesService.pagregar(this, "caracteristicaDonacion");
    };
    CaracteristicaDonacionCrudComponent.prototype.permisosaccionesInicio = function () {
        this.caracteristicaDonacionSeleccion = this.caracteristicaDonacionCancelar = this.caracteristicaDonacionGuardar = this.caracteristicaDonacionActualizar = this.caracteristicaDonacionEliminar = false; // *************************** maquina
        this.caracteristicaDonacionBuscar = this.caracteristicaDonacionAgregar = true; // ************************************************************************************* maquina
        this.accion = 0; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    CaracteristicaDonacionCrudComponent.prototype.limpiarCampos = function () {
        this.caracteristicaDonacion = new _shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_4__["CaracteristicaDonacion"]();
        this.usuarioUltMovCaracteristicaDonacionUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.idoficioDonacionCaracteristicaDonacionOficioDonacionEleccion = new _oficio_donaciones_shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_14__["OficioDonacion"]();
        this.caracteristicaDonacionChange.emit(this.caracteristicaDonacion);
        this.caracteristicaDonacionSeleccion = this.caracteristicaDonacionCancelar = this.caracteristicaDonacionGuardar = this.caracteristicaDonacionActualizar = this.caracteristicaDonacionEliminar = false; // *************************** maquina
        this.caracteristicaDonacionBuscar = this.caracteristicaDonacionAgregar = true; // ************************************************************************************* maquina
        this.accion = 6; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CaracteristicaDonacionCrudComponent.prototype, "ocultarConjuntosCaracteristicaDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CaracteristicaDonacionCrudComponent.prototype, "nombre", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CaracteristicaDonacionCrudComponent.prototype, "validaciones", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CaracteristicaDonacionCrudComponent.prototype, "validacionesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_4__["CaracteristicaDonacion"])
    ], CaracteristicaDonacionCrudComponent.prototype, "caracteristicaDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CaracteristicaDonacionCrudComponent.prototype, "caracteristicaDonacionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CaracteristicaDonacionCrudComponent.prototype, "caracteristicaDonacionTablaChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CaracteristicaDonacionCrudComponent.prototype, "enable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_17__["RecepcionSolicitudEvaluacion"])
    ], CaracteristicaDonacionCrudComponent.prototype, "recepcionSolicitudEvaluacion", void 0);
    CaracteristicaDonacionCrudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-caracteristica-donacion-crud',
            template: __webpack_require__(/*! ./caracteristica-donacion-crud.component.html */ "./src/app/caracteristica-donaciones/caracteristica-donacion-crud/caracteristica-donacion-crud.component.html"),
            styles: [__webpack_require__(/*! ./caracteristica-donacion-crud.component.css */ "./src/app/caracteristica-donaciones/caracteristica-donacion-crud/caracteristica-donacion-crud.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
                _shared_caracteristica_donacion_service__WEBPACK_IMPORTED_MODULE_5__["CaracteristicaDonacionService"],
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
            _shared_caracteristica_donacion_service__WEBPACK_IMPORTED_MODULE_5__["CaracteristicaDonacionService"],
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
    ], CaracteristicaDonacionCrudComponent);
    return CaracteristicaDonacionCrudComponent;
}());



/***/ }),

/***/ "./src/app/caracteristica-donaciones/caracteristica-donacion-list-kendo/caracteristica-donacion-list-kendo.component.css":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/caracteristica-donaciones/caracteristica-donacion-list-kendo/caracteristica-donacion-list-kendo.component.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Tipos para caracteristicaDonacion-list-kendo*/\nh3 { text-transform: uppercase;} \n"

/***/ }),

/***/ "./src/app/caracteristica-donaciones/caracteristica-donacion-list-kendo/caracteristica-donacion-list-kendo.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/caracteristica-donaciones/caracteristica-donacion-list-kendo/caracteristica-donacion-list-kendo.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!usuariologueado\" >\n    <div class=\"card\">\n        <div align=\"center\" class=\"card-header\"><h3>{{configuracionCaracteristicaDonacion.titulo}}</h3></div>\n        <div class=\"card-body\">\n            <div id=\"div_caracteristicaDonacion_{{nombregrid}}\">\n                <div id=\"grid_caracteristicaDonacion_{{nombregrid}}\"></div>\n            </div>\n        </div>\t\t\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/caracteristica-donaciones/caracteristica-donacion-list-kendo/caracteristica-donacion-list-kendo.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/caracteristica-donaciones/caracteristica-donacion-list-kendo/caracteristica-donacion-list-kendo.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: CaracteristicaDonacionListKendoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaracteristicaDonacionListKendoComponent", function() { return CaracteristicaDonacionListKendoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/caracteristica-donacion */ "./src/app/caracteristica-donaciones/shared/caracteristica-donacion.ts");
/* harmony import */ var _shared_configurar_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/configurar-caracteristica-donacion */ "./src/app/caracteristica-donaciones/shared/configurar-caracteristica-donacion.ts");
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
var CaracteristicaDonacionListKendoComponent = /** @class */ (function () {
    function CaracteristicaDonacionListKendoComponent(urlprovider, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    globalesService) {
        this.urlprovider = urlprovider;
        this.coreService = coreService;
        this.globalesService = globalesService;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "", "permiso": 0, "etiqueta": "" };
        this.caracteristicaDonacionSeleccionado = new _shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_3__["CaracteristicaDonacion"]();
        this.configuracionCaracteristicaDonacion = new _shared_configurar_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_4__["ConfigurarCaracteristicaDonacion"]();
        this.nombregrid = "";
        this.evtCaracteristicaDonacionSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "caracteristicaDonacion";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'caracteristicaDonacion'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'caracteristicaDonacion'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }
    CaracteristicaDonacionListKendoComponent.prototype.actualizaTituloInicial = function () {
        if (this.configuracionCaracteristicaDonacion.titulo.indexOf("Catálogo") != -1) {
            this.configuracionCaracteristicaDonacion.titulo = "Catálogo " + this.permisosTabla.etiqueta;
        }
    };
    CaracteristicaDonacionListKendoComponent.prototype.ngOnChanges = function (changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionCaracteristicaDonacion && changes.configuracionCaracteristicaDonacion.currentValue &&
            (changes.configuracionCaracteristicaDonacion.previousValue instanceof _shared_configurar_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_4__["ConfigurarCaracteristicaDonacion"])) {
            if (changes.configuracionCaracteristicaDonacion.currentValue.permisosAtributos)
                this.permisosAtributos = changes.configuracionCaracteristicaDonacion.currentValue.permisosAtributos;
            if (changes.configuracionCaracteristicaDonacion.currentValue.permisosTabla)
                this.permisosTabla = changes.configuracionCaracteristicaDonacion.currentValue.permisosTabla;
            if ($("#grid_caracteristicaDonacion_" + this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    };
    CaracteristicaDonacionListKendoComponent.prototype.ngOnInit = function () {
        self["grid_caracteristicaDonacion_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var ejecutarpermisos = true;
        if (this.configuracionCaracteristicaDonacion.permisosAtributos &&
            this.configuracionCaracteristicaDonacion.permisosTabla)
            ejecutarpermisos = false;
        if (this.usuariologueado && ejecutarpermisos) {
            if (this.usuariologueado.perfil) {
                var tablas = [
                    "caracteristicaDonacion",
                ];
                var parametros = {
                    "id_usu": this.usuariologueado.id,
                    "tablas": tablas,
                    "id_exp": -1
                };
                this.coreService.permisos(parametros, this.evtCorePermisos, this);
                //                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                //                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'CaracteristicaDonacion'";
                //                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'CaracteristicaDonacion'";
                //                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'CaracteristicaDonacion'";
                //                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
                //                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
                //                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
            }
        }
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        if (this.configuracionCaracteristicaDonacion.permisosAtributos)
            this.permisosAtributos = this.configuracionCaracteristicaDonacion.permisosAtributos;
        if (this.configuracionCaracteristicaDonacion.permisosTabla)
            this.permisosTabla = this.configuracionCaracteristicaDonacion.permisosTabla;
        this.configuraGrid();
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    CaracteristicaDonacionListKendoComponent.prototype.evtCorePermisos = function (permisos, obj) {
        if (permisos && permisos.caracteristicaDonacion && permisos.caracteristicaDonacion.PermisoAtributo && permisos.caracteristicaDonacion.PermisoAtributo.length > 0
            && !obj.configuracionCaracteristicaDonacion.permisosAtributos) {
            obj.globalesService.evtAtributos(permisos.caracteristicaDonacion.PermisoAtributo, obj);
            //            obj.permisosAtributos = permisos.CaracteristicaDonacion.PermisoAtributo ;
        }
        if (permisos && permisos.caracteristicaDonacion && permisos.caracteristicaDonacion.PermisoTabla && permisos.caracteristicaDonacion.PermisoTabla.length > 0
            && !obj.configuracionCaracteristicaDonacion.permisosTabla) {
            obj.globalesService.evtTablas(permisos.caracteristicaDonacion.PermisoTabla, obj);
            //            obj.permisosTabla = permisos.CaracteristicaDonacion.PermisoTabla[0] ;
            //            obj.permisosaccionesInicio();
        }
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    CaracteristicaDonacionListKendoComponent.prototype.configuraGrid = function () {
        var _this = this;
        if ($("#grid_caracteristicaDonacion_" + this.nombregrid).data("kendoGrid")) {
        }
        else {
            setTimeout(function () {
                _this.inicializaGrid();
                _this.configuraGrid();
            }, 300);
        }
    };
    CaracteristicaDonacionListKendoComponent.prototype.sourcegrid = function () {
        function completar(e) {
            (e);
        }
        ;
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        if (this.configuracionCaracteristicaDonacion.campoAgEl != null
            && this.configuracionCaracteristicaDonacion.caracteristicaDonacionConsulta
            && this.configuracionCaracteristicaDonacion.caracteristicaDonacionConsulta.isOk
            && !this.configuracionCaracteristicaDonacion.caracteristicaDonacionConsulta.isOk())
            return;
        if (this.configuracionCaracteristicaDonacion.caracteristicaDonacionConsulta) {
            if (!this.configuracionCaracteristicaDonacion.campoAgEl && this.configuracionCaracteristicaDonacion.caracteristicaDonacionConsulta instanceof _shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_3__["CaracteristicaDonacion"])
                this.configuracionCaracteristicaDonacion.rutaLista = this.crudServiceBaseUrl + "/getCaracteristicaDonacionesByDto";
            this.lista = this.configuracionCaracteristicaDonacion.lecturaP(completar, this.configuracionCaracteristicaDonacion.caracteristicaDonacionConsulta);
            if (this.configuracionCaracteristicaDonacion.campoAgEl) {
                this.rutaAgregar = this.configuracionCaracteristicaDonacion.agregarP(function () { }, this.configuracionCaracteristicaDonacion.campoAgEl);
                this.rutaEliminar = this.configuracionCaracteristicaDonacion.eliminarP(function () { }, this.configuracionCaracteristicaDonacion.campoAgEl);
            }
            else {
                this.rutaAgregar = this.configuracionCaracteristicaDonacion.agregarP(completar, this.configuracionCaracteristicaDonacion.caracteristicaDonacionConsulta);
                this.rutaEliminar = this.configuracionCaracteristicaDonacion.eliminarP(completar, this.configuracionCaracteristicaDonacion.caracteristicaDonacionConsulta);
            }
        }
        else {
            this.lista = this.configuracionCaracteristicaDonacion.lectura();
            this.rutaAgregar = this.configuracionCaracteristicaDonacion.agregar();
            this.rutaEliminar = this.configuracionCaracteristicaDonacion.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this, "caracteristicaDonacion", "id")) {
            modelo["id"] = "id";
        }
        var campos = {};
        if (this.globalesService.avisible(this, "caracteristicaDonacion", "id")) {
            campos["id"] = { editable: false, nullable: true, type: "number" };
        }
        if (this.globalesService.avisible(this, "caracteristicaDonacion", "idoficioDonacion")) {
            campos["idoficioDonacion"] = { editable: this.globalesService.aenable(this, "caracteristicaDonacion", "idoficioDonacion"), nullable: true, type: "object", defaultValue: { "id": "", "fechaBaja": "" } };
        }
        if (this.globalesService.avisible(this, "caracteristicaDonacion", "tiempoIsquemia")) {
            campos["tiempoIsquemia"] = { editable: this.globalesService.aenable(this, "caracteristicaDonacion", "tiempoIsquemia"), nullable: true };
        }
        if (this.globalesService.avisible(this, "caracteristicaDonacion", "odcd")) {
            campos["odcd"] = { editable: this.globalesService.aenable(this, "caracteristicaDonacion", "odcd"), nullable: true };
        }
        if (this.globalesService.avisible(this, "caracteristicaDonacion", "oici")) {
            campos["oici"] = { editable: this.globalesService.aenable(this, "caracteristicaDonacion", "oici"), nullable: true };
        }
        if (this.globalesService.avisible(this, "caracteristicaDonacion", "odcdCultivo")) {
            campos["odcdCultivo"] = { editable: this.globalesService.aenable(this, "caracteristicaDonacion", "odcdCultivo"), nullable: true };
        }
        if (this.globalesService.avisible(this, "caracteristicaDonacion", "oiciCultivo")) {
            campos["oiciCultivo"] = { editable: this.globalesService.aenable(this, "caracteristicaDonacion", "oiciCultivo"), nullable: true };
        }
        if (this.globalesService.avisible(this, "caracteristicaDonacion", "observacion")) {
            campos["observacion"] = { editable: this.globalesService.aenable(this, "caracteristicaDonacion", "observacion"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "caracteristicaDonacion", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this, "caracteristicaDonacion", "fechaRegistro"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "caracteristicaDonacion", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this, "caracteristicaDonacion", "fechaActualizacion"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "caracteristicaDonacion", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this, "caracteristicaDonacion", "fechaBaja"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "caracteristicaDonacion", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this, "caracteristicaDonacion", "usuarioUltMov"), nullable: true, type: "object", defaultValue: { "id": "", "password": "" } };
        }
        if (this.globalesService.avisible(this, "caracteristicaDonacion", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this, "caracteristicaDonacion", "status"), nullable: true, type: "string", defaultValue: "1" };
        }
        modelo["fields"] = campos;
        var slf = this;
        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionCaracteristicaDonacion.rutaActualizar,
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
            if (self.configuracionCaracteristicaDonacion.campoAgEl) {
                if (self.configuracionCaracteristicaDonacion.tipocampoAgEl == "CaracteristicaDonacionCaracteristicaDonacion")
                    self.configuracionCaracteristicaDonacion.campoAgEl.caracteristicaDonacion2 = options.models[0];
                else
                    self.configuracionCaracteristicaDonacion.campoAgEl.caracteristicaDonacion = options.models[0];
                return JSON.stringify(self.configuracionCaracteristicaDonacion.campoAgEl);
            }
            else if (est.options[operation].data.models.caracteristicaDonacion) {
                est.options[operation].data.models.caracteristicaDonacion2 = options.models[0];
                return JSON.stringify(est.options[operation].data.models);
            }
            return JSON.stringify(options.models[0]);
        }
    };
    CaracteristicaDonacionListKendoComponent.prototype.inicializaGrid = function () {
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        this.sourcegrid();
        var columnas = [];
        if (this.globalesService.avisible(this, "caracteristicaDonacion", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this, "caracteristicaDonacion", "id"), editor: this.globalesService.txtNumero });
        }
        if (this.globalesService.avisible(this, "caracteristicaDonacion", "idoficioDonacion")) {
            columnas.push({ field: "idoficioDonacion", title: this.globalesService.aetiqueta(this, "caracteristicaDonacion", "idoficioDonacion"), editor: idoficioDonacionDropDownEditor, template: " #if (idoficioDonacion){#   #=idoficioDonacion.fechaBaja# # } # " });
        }
        if (this.globalesService.avisible(this, "caracteristicaDonacion", "tiempoIsquemia")) {
            columnas.push({ field: "tiempoIsquemia", title: this.globalesService.aetiqueta(this, "caracteristicaDonacion", "tiempoIsquemia") });
        }
        if (this.globalesService.avisible(this, "caracteristicaDonacion", "odcd")) {
            columnas.push({ field: "odcd", title: this.globalesService.aetiqueta(this, "caracteristicaDonacion", "odcd") });
        }
        if (this.globalesService.avisible(this, "caracteristicaDonacion", "oici")) {
            columnas.push({ field: "oici", title: this.globalesService.aetiqueta(this, "caracteristicaDonacion", "oici") });
        }
        if (this.globalesService.avisible(this, "caracteristicaDonacion", "odcdCultivo")) {
            columnas.push({ field: "odcdCultivo", title: this.globalesService.aetiqueta(this, "caracteristicaDonacion", "odcdCultivo") });
        }
        if (this.globalesService.avisible(this, "caracteristicaDonacion", "oiciCultivo")) {
            columnas.push({ field: "oiciCultivo", title: this.globalesService.aetiqueta(this, "caracteristicaDonacion", "oiciCultivo") });
        }
        if (this.globalesService.avisible(this, "caracteristicaDonacion", "observacion")) {
            columnas.push({ field: "observacion", title: this.globalesService.aetiqueta(this, "caracteristicaDonacion", "observacion"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "caracteristicaDonacion", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this, "caracteristicaDonacion", "fechaRegistro"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "caracteristicaDonacion", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this, "caracteristicaDonacion", "fechaActualizacion"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "caracteristicaDonacion", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this, "caracteristicaDonacion", "fechaBaja"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "caracteristicaDonacion", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this, "caracteristicaDonacion", "usuarioUltMov"), editor: usuarioUltMovDropDownEditor, template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # " });
        }
        if (this.globalesService.avisible(this, "caracteristicaDonacion", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this, "caracteristicaDonacion", "status"), editor: this.globalesService.estadoDropDownEditor,
                template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this, "caracteristicaDonacion"))
            op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this, "caracteristicaDonacion")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this, "caracteristicaDonacion")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this, "caracteristicaDonacion") && this.configuracionCaracteristicaDonacion.caracteristicaDonacionConsulta != null) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid)
            $("#grid_caracteristicaDonacion_" + this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_caracteristicaDonacion_" + this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionCaracteristicaDonacion.altoComponente,
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
        this.grid = $("#grid_caracteristicaDonacion_" + this.nombregrid).data("kendoGrid");
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
    CaracteristicaDonacionListKendoComponent.prototype.showDetails = function (e) {
        e.preventDefault();
        //        this.grid = $("#grid_caracteristicaDonacion_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        var gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.caracteristicaDonacionSeleccionado = new _shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_3__["CaracteristicaDonacion"]();
        gridac.caracteristicaDonacionSeleccionado.from(dataItem);
        gridac.evtCaracteristicaDonacionSeleccionado.emit(gridac.caracteristicaDonacionSeleccionado);
        (gridac.caracteristicaDonacionSeleccionado);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_configurar_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_4__["ConfigurarCaracteristicaDonacion"])
    ], CaracteristicaDonacionListKendoComponent.prototype, "configuracionCaracteristicaDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CaracteristicaDonacionListKendoComponent.prototype, "nombregrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("caracteristicaDonacionSeleccionado"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CaracteristicaDonacionListKendoComponent.prototype, "evtCaracteristicaDonacionSeleccionado", void 0);
    CaracteristicaDonacionListKendoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-caracteristica-donacion-list-kendo',
            template: __webpack_require__(/*! ./caracteristica-donacion-list-kendo.component.html */ "./src/app/caracteristica-donaciones/caracteristica-donacion-list-kendo/caracteristica-donacion-list-kendo.component.html"),
            styles: [__webpack_require__(/*! ./caracteristica-donacion-list-kendo.component.css */ "./src/app/caracteristica-donaciones/caracteristica-donacion-list-kendo/caracteristica-donacion-list-kendo.component.css")],
            providers: [
                //             PermisoTablaService,
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_url_provider__WEBPACK_IMPORTED_MODULE_1__["URLProvider"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"]])
    ], CaracteristicaDonacionListKendoComponent);
    return CaracteristicaDonacionListKendoComponent;
}());



/***/ }),

/***/ "./src/app/caracteristica-donaciones/caracteristica-donacion-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/caracteristica-donaciones/caracteristica-donacion-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: CaracteristicaDonacionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaracteristicaDonacionRoutingModule", function() { return CaracteristicaDonacionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _caracteristica_donaciones_caracteristica_donacion_list_kendo_caracteristica_donacion_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../caracteristica-donaciones/caracteristica-donacion-list-kendo/caracteristica-donacion-list-kendo.component */ "./src/app/caracteristica-donaciones/caracteristica-donacion-list-kendo/caracteristica-donacion-list-kendo.component.ts");
/* harmony import */ var _caracteristica_donaciones_caracteristica_donacion_crud_caracteristica_donacion_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../caracteristica-donaciones/caracteristica-donacion-crud/caracteristica-donacion-crud.component */ "./src/app/caracteristica-donaciones/caracteristica-donacion-crud/caracteristica-donacion-crud.component.ts");
/* harmony import */ var _caracteristica_donaciones_caracteristica_donacion_table_caracteristica_donacion_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../caracteristica-donaciones/caracteristica-donacion-table/caracteristica-donacion-table.component */ "./src/app/caracteristica-donaciones/caracteristica-donacion-table/caracteristica-donacion-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'caracteristica-donacion-list-kendo', component: _caracteristica_donaciones_caracteristica_donacion_list_kendo_caracteristica_donacion_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__["CaracteristicaDonacionListKendoComponent"] },
    { path: 'caracteristica-donacion-crud', component: _caracteristica_donaciones_caracteristica_donacion_crud_caracteristica_donacion_crud_component__WEBPACK_IMPORTED_MODULE_3__["CaracteristicaDonacionCrudComponent"] },
    { path: 'caracteristica-donacion-table', component: _caracteristica_donaciones_caracteristica_donacion_table_caracteristica_donacion_table_component__WEBPACK_IMPORTED_MODULE_4__["CaracteristicaDonacionTableComponent"] },
];
var CaracteristicaDonacionRoutingModule = /** @class */ (function () {
    function CaracteristicaDonacionRoutingModule() {
    }
    CaracteristicaDonacionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CaracteristicaDonacionRoutingModule);
    return CaracteristicaDonacionRoutingModule;
}());



/***/ }),

/***/ "./src/app/caracteristica-donaciones/caracteristica-donacion-table/caracteristica-donacion-table.component.css":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/caracteristica-donaciones/caracteristica-donacion-table/caracteristica-donacion-table.component.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/caracteristica-donaciones/caracteristica-donacion-table/caracteristica-donacion-table.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/caracteristica-donaciones/caracteristica-donacion-table/caracteristica-donacion-table.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"usuariologueado\" >\n<div class=\"card\">\n<div class=\"card-header\"><h1>Busqueda {{permisosTabla?.etiqueta}}</h1></div>\n<div class=\"card-body\">\n<div class=\"container-fluid\" >    \n\n<table *ngIf=\"muestraTabla\" id=\"tabla_caracteristicaDonacion\" class=\"table \" cellspacing=\"0\" width=\"100%\">\n    <thead>\n        <tr>\n            <th [class.hidden]=\"!avisible('caracteristicaDonacion','id')\" >{{aetiqueta('caracteristicaDonacion','id')}}</th>\n            <th [class.hidden]=\"!avisible('caracteristicaDonacion','idoficioDonacion')\" >{{aetiqueta('caracteristicaDonacion','idoficioDonacion')}}</th>\n            <th [class.hidden]=\"!avisible('caracteristicaDonacion','tiempoIsquemia')\" >{{aetiqueta('caracteristicaDonacion','tiempoIsquemia')}}</th>\n            <th [class.hidden]=\"!avisible('caracteristicaDonacion','odcd')\" >{{aetiqueta('caracteristicaDonacion','odcd')}}</th>\n            <th [class.hidden]=\"!avisible('caracteristicaDonacion','oici')\" >{{aetiqueta('caracteristicaDonacion','oici')}}</th>\n            <th [class.hidden]=\"!avisible('caracteristicaDonacion','odcdCultivo')\" >{{aetiqueta('caracteristicaDonacion','odcdCultivo')}}</th>\n            <th [class.hidden]=\"!avisible('caracteristicaDonacion','oiciCultivo')\" >{{aetiqueta('caracteristicaDonacion','oiciCultivo')}}</th>\n            <th [class.hidden]=\"!avisible('caracteristicaDonacion','observacion')\" >{{aetiqueta('caracteristicaDonacion','observacion')}}</th>\n            <th [class.hidden]=\"!avisible('caracteristicaDonacion','fechaRegistro')\" >{{aetiqueta('caracteristicaDonacion','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('caracteristicaDonacion','fechaActualizacion')\" >{{aetiqueta('caracteristicaDonacion','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('caracteristicaDonacion','fechaBaja')\" >{{aetiqueta('caracteristicaDonacion','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('caracteristicaDonacion','usuarioUltMov')\" >{{aetiqueta('caracteristicaDonacion','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('caracteristicaDonacion','status')\" >{{aetiqueta('caracteristicaDonacion','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </thead>\n    <tfoot>\n        <tr>\n            <th [class.hidden]=\"!avisible('caracteristicaDonacion','id')\" >{{aetiqueta('caracteristicaDonacion','id')}}</th>\n            <th [class.hidden]=\"!avisible('caracteristicaDonacion','idoficioDonacion')\" >{{aetiqueta('caracteristicaDonacion','idoficioDonacion')}}</th>\n            <th [class.hidden]=\"!avisible('caracteristicaDonacion','tiempoIsquemia')\" >{{aetiqueta('caracteristicaDonacion','tiempoIsquemia')}}</th>\n            <th [class.hidden]=\"!avisible('caracteristicaDonacion','odcd')\" >{{aetiqueta('caracteristicaDonacion','odcd')}}</th>\n            <th [class.hidden]=\"!avisible('caracteristicaDonacion','oici')\" >{{aetiqueta('caracteristicaDonacion','oici')}}</th>\n            <th [class.hidden]=\"!avisible('caracteristicaDonacion','odcdCultivo')\" >{{aetiqueta('caracteristicaDonacion','odcdCultivo')}}</th>\n            <th [class.hidden]=\"!avisible('caracteristicaDonacion','oiciCultivo')\" >{{aetiqueta('caracteristicaDonacion','oiciCultivo')}}</th>\n            <th [class.hidden]=\"!avisible('caracteristicaDonacion','observacion')\" >{{aetiqueta('caracteristicaDonacion','observacion')}}</th>\n            <th [class.hidden]=\"!avisible('caracteristicaDonacion','fechaRegistro')\" >{{aetiqueta('caracteristicaDonacion','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('caracteristicaDonacion','fechaActualizacion')\" >{{aetiqueta('caracteristicaDonacion','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('caracteristicaDonacion','fechaBaja')\" >{{aetiqueta('caracteristicaDonacion','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('caracteristicaDonacion','usuarioUltMov')\" >{{aetiqueta('caracteristicaDonacion','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('caracteristicaDonacion','status')\" >{{aetiqueta('caracteristicaDonacion','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </tfoot>\n</table>\n</div>\n<app-caracteristica-donacion [class.hidden]=\"primero\" [(caracteristicaDonacion)]=\"caracteristicaDonacionSeleccionado\" (caracteristicaDonacionTablaChange)=\"cambio_caracteristicaDonacion($event)\"> </app-caracteristica-donacion>    \n</div>\n</div>\n</div>\n\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/caracteristica-donaciones/caracteristica-donacion-table/caracteristica-donacion-table.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/caracteristica-donaciones/caracteristica-donacion-table/caracteristica-donacion-table.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: CaracteristicaDonacionTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaracteristicaDonacionTableComponent", function() { return CaracteristicaDonacionTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/caracteristica-donacion */ "./src/app/caracteristica-donaciones/shared/caracteristica-donacion.ts");
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






var CaracteristicaDonacionTableComponent = /** @class */ (function () {
    function CaracteristicaDonacionTableComponent(globalesService, permisoAtributoService, permisoTablaService, urlProvider) {
        this.globalesService = globalesService;
        this.permisoAtributoService = permisoAtributoService;
        this.permisoTablaService = permisoTablaService;
        this.urlProvider = urlProvider;
        this.primero = true;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "caracteristicaDonacion", "permiso": 0, "etiqueta": "" };
        this.ptabla = false;
        this.pattr = false;
        this.caracteristicaDonacionSeleccionado = new _shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_1__["CaracteristicaDonacion"]();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                discon = "with perfil.id = " + this.usuariologueado.perfil.id;
                var cadena2 = "select pa from PermisoTabla as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'caracteristicaDonacion'";
                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
            }
        }
    }
    CaracteristicaDonacionTableComponent.prototype.evtTablas = function (lista, obj) {
        if (lista.length >= 0) {
            obj.permisosTabla = lista[0];
            obj.ptabla = true;
            var discon = "with perfil.id = " + obj.usuariologueado.perfil.id;
            var cadena1 = "select pa from PermisoAtributo as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'caracteristicaDonacion'";
            obj.permisoAtributoService.custom(cadena1, obj.evtAtributos, obj);
        }
    };
    CaracteristicaDonacionTableComponent.prototype.evtAtributos = function (lista, obj) {
        obj.permisosAtributos = lista;
        obj.pattr = true;
        if (obj.ptabla && obj.pattr) {
            setTimeout(function () { obj.getColumnas(obj); }, 500);
        }
    };
    Object.defineProperty(CaracteristicaDonacionTableComponent.prototype, "muestraTabla", {
        get: function () {
            return this.ptabla && this.pattr;
        },
        enumerable: true,
        configurable: true
    });
    CaracteristicaDonacionTableComponent.prototype.getColumnas = function (obj) {
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        if (!this.avisible("caracteristicaDonacion", "id"))
            columnasNoVisibles.push(0);
        columnas.push({ "data": "id" });
        if (!this.avisible("caracteristicaDonacion", "idoficioDonacion"))
            columnasNoVisibles.push(1);
        columnas.push({
            "data": function (oObj) {
                if (oObj.idoficioDonacion)
                    return "<span style=\"cursor: pointer\">" + oObj.idoficioDonacion.botonCorneal + "</span>";
                return "";
            }
        });
        if (!this.avisible("caracteristicaDonacion", "tiempoIsquemia"))
            columnasNoVisibles.push(2);
        columnas.push({ "data": "tiempoIsquemia" });
        if (!this.avisible("caracteristicaDonacion", "odcd"))
            columnasNoVisibles.push(3);
        columnas.push({ "data": "odcd" });
        if (!this.avisible("caracteristicaDonacion", "oici"))
            columnasNoVisibles.push(4);
        columnas.push({ "data": "oici" });
        if (!this.avisible("caracteristicaDonacion", "odcdCultivo"))
            columnasNoVisibles.push(5);
        columnas.push({ "data": "odcdCultivo" });
        if (!this.avisible("caracteristicaDonacion", "oiciCultivo"))
            columnasNoVisibles.push(6);
        columnas.push({ "data": "oiciCultivo" });
        if (!this.avisible("caracteristicaDonacion", "observacion"))
            columnasNoVisibles.push(7);
        columnas.push({ "data": "observacion" });
        if (!this.avisible("caracteristicaDonacion", "fechaRegistro"))
            columnasNoVisibles.push(8);
        columnas.push({ "data": "fechaRegistro" });
        if (!this.avisible("caracteristicaDonacion", "fechaActualizacion"))
            columnasNoVisibles.push(9);
        columnas.push({ "data": "fechaActualizacion" });
        if (!this.avisible("caracteristicaDonacion", "fechaBaja"))
            columnasNoVisibles.push(10);
        columnas.push({ "data": "fechaBaja" });
        if (!this.avisible("caracteristicaDonacion", "usuarioUltMov"))
            columnasNoVisibles.push(11);
        columnas.push({
            "data": function (oObj) {
                if (oObj.usuarioUltMov)
                    return "<span style=\"cursor: pointer\">" + oObj.usuarioUltMov.username + "</span>";
                return "";
            }
        });
        if (!this.avisible("caracteristicaDonacion", "status"))
            columnasNoVisibles.push(12);
        columnas.push({ "data": "status" });
        if (self.pacutalizar("caracteristicaDonacion"))
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
        var tabla = $('#tabla_caracteristicaDonacion').DataTable({
            "columnDefs": novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            "initComplete": function (settings, json) {
                var xs = $("#tabla_caracteristicaDonacion_wrapper").find(".row");
                $($(xs[0]).find(".col-sm-6")[0]).
                    find(".dataTables_length").
                    append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function () {
                    self.caracteristicaDonacionSeleccionado = new _shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_1__["CaracteristicaDonacion"]();
                    self.primero = false;
                });
            },
            "ajax": {
                "url": self.urlProvider.serverURL + "caracteristicaDonacion/getCaracteristicaDonaciones",
                "type": "POST",
                "contentType": "application/json",
                "datatype": 'json',
                "dataSrc": "",
            },
            "columns": columnas,
        });
        $('#tabla_caracteristicaDonacion tbody').on('click', 'td', function () {
            if (this.cellIndex == $(this).parent().find("td").length - 1) {
                var data = $('#tabla_caracteristicaDonacion').DataTable().row(this).data();
                self.caracteristicaDonacionSeleccionado = new _shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_1__["CaracteristicaDonacion"]();
                self.caracteristicaDonacionSeleccionado.from(data);
                self.primero = false;
                if ($(this).parent().hasClass('selected')) {
                    $(this).parent().removeClass('selected');
                }
                else {
                    $('#tabla_caracteristicaDonacion').DataTable().$('tr.selected').removeClass('selected');
                    $(this).parent().addClass('selected');
                }
            }
        });
    };
    CaracteristicaDonacionTableComponent.prototype.ngOnInit = function () {
    };
    CaracteristicaDonacionTableComponent.prototype.cambio_caracteristicaDonacion = function (caracteristicaDonacion) {
        $('#tabla_caracteristicaDonacion').DataTable().ajax.reload(null, false);
        this.primero = true;
    };
    // **********************************************************************************
    // **********************************************************************************
    // **           I N I C I A N   P E R M I S O S   P A R A   P E R F I L E S  
    // **********************************************************************************
    // **********************************************************************************
    CaracteristicaDonacionTableComponent.prototype.paux = function (tabla, permiso) {
        if (this.permisosTabla.tabla == tabla && (this.permisosTabla.permiso & permiso) == permiso)
            return true;
        return false;
    };
    CaracteristicaDonacionTableComponent.prototype.preporteWord = function (tabla) { return this.paux(tabla, 64); };
    CaracteristicaDonacionTableComponent.prototype.preporteExcel = function (tabla) { return this.paux(tabla, 32); };
    CaracteristicaDonacionTableComponent.prototype.preportePdf = function (tabla) { return this.paux(tabla, 16); };
    CaracteristicaDonacionTableComponent.prototype.pbuscar = function (tabla) { return this.paux(tabla, 8); };
    CaracteristicaDonacionTableComponent.prototype.pacutalizar = function (tabla) { return this.paux(tabla, 4); };
    CaracteristicaDonacionTableComponent.prototype.peliminar = function (tabla) { return this.paux(tabla, 2); };
    CaracteristicaDonacionTableComponent.prototype.pagregar = function (tabla) { return this.paux(tabla, 1); };
    //******************************************************************************************
    //*******  P E R M I S O S   S O B R E   A T R I B U T O S  ********************************
    //******************************************************************************************
    CaracteristicaDonacionTableComponent.prototype.aetiqueta = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo)
                return elemento.etiqueta;
        }
        return "";
    };
    CaracteristicaDonacionTableComponent.prototype.avalidacion = function (tabla, atributo) {
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
    CaracteristicaDonacionTableComponent.prototype.amensaje = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo) {
                return elemento.mensaje;
            }
        }
        return null;
    };
    CaracteristicaDonacionTableComponent.prototype.aeditable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 8) == 8)
                return true;
        }
        return false;
    };
    CaracteristicaDonacionTableComponent.prototype.arequerido = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 4) == 4)
                return true;
        }
        return false;
    };
    CaracteristicaDonacionTableComponent.prototype.avisible = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 2) == 2)
                return true;
        }
        return false;
    };
    CaracteristicaDonacionTableComponent.prototype.aenable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 1) == 1)
                return true;
        }
        return false;
    };
    CaracteristicaDonacionTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-caracteristica-donacion-table',
            template: __webpack_require__(/*! ./caracteristica-donacion-table.component.html */ "./src/app/caracteristica-donaciones/caracteristica-donacion-table/caracteristica-donacion-table.component.html"),
            styles: [__webpack_require__(/*! ./caracteristica-donacion-table.component.css */ "./src/app/caracteristica-donaciones/caracteristica-donacion-table/caracteristica-donacion-table.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
                _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
                _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
            _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
            _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            _shared_url_provider__WEBPACK_IMPORTED_MODULE_3__["URLProvider"]])
    ], CaracteristicaDonacionTableComponent);
    return CaracteristicaDonacionTableComponent;
}());



/***/ }),

/***/ "./src/app/caracteristica-donaciones/caracteristica-donacion.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/caracteristica-donaciones/caracteristica-donacion.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CaracteristicaDonacionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaracteristicaDonacionModule", function() { return CaracteristicaDonacionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _caracteristica_donacion_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./caracteristica-donacion-routing.module */ "./src/app/caracteristica-donaciones/caracteristica-donacion-routing.module.ts");
/* harmony import */ var _caracteristica_donacion_list_kendo_caracteristica_donacion_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./caracteristica-donacion-list-kendo/caracteristica-donacion-list-kendo.component */ "./src/app/caracteristica-donaciones/caracteristica-donacion-list-kendo/caracteristica-donacion-list-kendo.component.ts");
/* harmony import */ var _caracteristica_donacion_crud_caracteristica_donacion_crud_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./caracteristica-donacion-crud/caracteristica-donacion-crud.component */ "./src/app/caracteristica-donaciones/caracteristica-donacion-crud/caracteristica-donacion-crud.component.ts");
/* harmony import */ var _caracteristica_donacion_conjunto_caracteristica_donacion_conjunto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./caracteristica-donacion-conjunto/caracteristica-donacion-conjunto.component */ "./src/app/caracteristica-donaciones/caracteristica-donacion-conjunto/caracteristica-donacion-conjunto.component.ts");
/* harmony import */ var _caracteristica_donacion_caracteristica_donacion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./caracteristica-donacion/caracteristica-donacion.component */ "./src/app/caracteristica-donaciones/caracteristica-donacion/caracteristica-donacion.component.ts");
/* harmony import */ var _caracteristica_donacion_table_caracteristica_donacion_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./caracteristica-donacion-table/caracteristica-donacion-table.component */ "./src/app/caracteristica-donaciones/caracteristica-donacion-table/caracteristica-donacion-table.component.ts");
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

var CaracteristicaDonacionModule = /** @class */ (function () {
    function CaracteristicaDonacionModule(parentModule) {
        if (parentModule) {
            throw new Error('CaracteristicaDonacionModule is already loaded. Import it in the AppModule only');
        }
    }
    CaracteristicaDonacionModule_1 = CaracteristicaDonacionModule;
    CaracteristicaDonacionModule.forRoot = function () {
        return {
            ngModule: CaracteristicaDonacionModule_1,
            providers: []
        };
    };
    var CaracteristicaDonacionModule_1;
    CaracteristicaDonacionModule = CaracteristicaDonacionModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_10__["PersonalizadosModule"], _caracteristica_donacion_routing_module__WEBPACK_IMPORTED_MODULE_3__["CaracteristicaDonacionRoutingModule"],
                _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_9__["UsuarioPerfilModule"].forRoot()
                //, OficioDonacionModule
            ],
            declarations: [
                _caracteristica_donacion_list_kendo_caracteristica_donacion_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["CaracteristicaDonacionListKendoComponent"],
                _caracteristica_donacion_caracteristica_donacion_component__WEBPACK_IMPORTED_MODULE_7__["CaracteristicaDonacionComponent"],
                _caracteristica_donacion_crud_caracteristica_donacion_crud_component__WEBPACK_IMPORTED_MODULE_5__["CaracteristicaDonacionCrudComponent"],
                _caracteristica_donacion_conjunto_caracteristica_donacion_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["CaracteristicaDonacionConjuntoComponent"],
                _caracteristica_donacion_table_caracteristica_donacion_table_component__WEBPACK_IMPORTED_MODULE_8__["CaracteristicaDonacionTableComponent"],
            ],
            exports: [
                _caracteristica_donacion_list_kendo_caracteristica_donacion_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["CaracteristicaDonacionListKendoComponent"],
                _caracteristica_donacion_caracteristica_donacion_component__WEBPACK_IMPORTED_MODULE_7__["CaracteristicaDonacionComponent"],
                _caracteristica_donacion_crud_caracteristica_donacion_crud_component__WEBPACK_IMPORTED_MODULE_5__["CaracteristicaDonacionCrudComponent"],
                _caracteristica_donacion_conjunto_caracteristica_donacion_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["CaracteristicaDonacionConjuntoComponent"],
                _caracteristica_donacion_table_caracteristica_donacion_table_component__WEBPACK_IMPORTED_MODULE_8__["CaracteristicaDonacionTableComponent"],
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CaracteristicaDonacionModule])
    ], CaracteristicaDonacionModule);
    return CaracteristicaDonacionModule;
}());



/***/ }),

/***/ "./src/app/caracteristica-donaciones/caracteristica-donacion/caracteristica-donacion.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/caracteristica-donaciones/caracteristica-donacion/caracteristica-donacion.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/caracteristica-donaciones/caracteristica-donacion/caracteristica-donacion.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/caracteristica-donaciones/caracteristica-donacion/caracteristica-donacion.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [hidden]=\"!usuariologueado\" #formaGeneral=\"ngForm\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <h4>{{ etiquetaGeneral }}</h4>\n        </div>\n        <div class=\"panel-body\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <!-- <app-componente-identificador [componente]=\"'caracteristicaDonacion'\"\n                                                   [atributo]=\"'id'\"\n                                                   [buscar]=\"caracteristicaDonacionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosCaracteristicaDonacion['id']\"\n                                                   [(dato)]=\"caracteristicaDonacion.id\"   class=\"w-100\" >\n                    </app-componente-identificador >\n                    <div>\n                        <app-componente-objeto [componente]=\"'caracteristicaDonacion'\"\n                                               [atributo]=\"'idoficioDonacion'\"\n                                               [buscar]=\"caracteristicaDonacionBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosCaracteristicaDonacion['idoficioDonacion']\"\n                                               [(dato)]=\"caracteristicaDonacion.idoficioDonacion\"  class=\"w-100\"\n                                               [ocultarConjuntos]=\"ocultarConjuntosCaracteristicaDonacion\"\n                                               [opciones]=\"lista_idoficioDonacionCaracteristicaDonacion\"\n                                               [atributoVisible]=\"'botonCorneal'\" [(objetoEdicion)]=\"idoficioDonacionCaracteristicaDonacionEditar\">\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!idoficioDonacionEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'caracteristicaDonacion','idoficioDonacion')\" >\n                                   <app-oficio-donacion-crud [nombre]=\"'idoficioDonacion'\" [oficioDonacion]=\"caracteristicaDonacion.idoficioDonacion\" (oficioDonacionChange)=\"evtIdoficioDonacion($event)\"\n                                                           [ocultarConjuntosOficioDonacion]=\"'true'\" [class.hidden]=\"!idoficioDonacionEditar\" ></app-oficio-donacion-crud>\n                            </div>\n                        </div>\n                    </div> -->\n\n                    <label class=\"control-label\">Tiempo de Isquemia Válido:</label>\n                    <label class=\"radio-inline\" style=\"margin-left: 30px;\">\n            <input\n              type=\"radio\"\n              name=\"tiempoIsquemia\"\n              class=\"form-checkbox-input\"\n              [value]=\"1\"\n              [(ngModel)]=\"caracteristicaDonacion.tiempoIsquemia\"\n              [attr.disabled]=\"enable ? null : false\"\n            />\n            SÍ\n          </label>\n                    <label class=\"radio-inline\">\n            <input\n              type=\"radio\"\n              name=\"tiempoIsquemia\"\n              [value]=\"0\"\n              class=\"form-checkbox-input\"\n              [(ngModel)]=\"caracteristicaDonacion.tiempoIsquemia\"\n              [attr.disabled]=\"enable ? null : false\"\n            />\n            NO\n          </label>\n\n                    <div class=\"row\">\n                        <div class=\"col-md-8\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\" style=\"text-align: center;\">\n                                    <h5 class=\"text-left\">Microbiología</h5>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"control-label\">OI/CI:</label\n                  >\n                  <label class=\"radio-inline\" style=\"margin-left: 45px;\">\n                    <input\n                      type=\"radio\"\n                      name=\"oici\"\n                      class=\"form-checkbox-input\"\n                      [value]=\"0\"\n                      [(ngModel)]=\"caracteristicaDonacion.oici\"\n                      [attr.disabled]=\"enable && recepcionSolicitudEvaluacion.idbtcCi != null ? null : false\"\n                    />\n                    Negativo\n                  </label>\n                                    <label class=\"radio-inline\">\n                    <input\n                      type=\"radio\"\n                      name=\"oici\"\n                      [value]=\"1\"\n                      class=\"form-checkbox-input\"\n                      [(ngModel)]=\"caracteristicaDonacion.oici\"\n                      [attr.disabled]=\"enable && recepcionSolicitudEvaluacion.idbtcCi != null ? null : false\"\n                    />\n                    Positivo\n                  </label>\n                                    <label class=\"radio-inline\">\n                      <input\n                        type=\"radio\"\n                        name=\"oici\"\n                        [value]=\"2\"\n                        class=\"form-checkbox-input\"\n                        [(ngModel)]=\"caracteristicaDonacion.oici\"\n                        [attr.disabled]=\"enable && recepcionSolicitudEvaluacion.idbtcCi != null ? null : false\"\n                      />\n                      NO realizada\n                    </label>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"control-label\">OD/CD:</label\n                    >\n                    <label class=\"radio-inline\" style=\"margin-left: 30px;\">\n                      <input\n                        type=\"radio\"\n                        name=\"odcd\"\n                        class=\"form-checkbox-input\"\n                        [value]=\"0\"\n                        [(ngModel)]=\"caracteristicaDonacion.odcd\"\n                        [attr.disabled]=\"enable && recepcionSolicitudEvaluacion.idbtcCd != null ? null : false\"\n                      />\n                      Negativo\n                    </label>\n                                    <label class=\"radio-inline\">\n                      <input\n                        type=\"radio\"\n                        name=\"odcd\"\n                        [value]=\"1\"\n                        class=\"form-checkbox-input\"\n                        [(ngModel)]=\"caracteristicaDonacion.odcd\"\n                        [attr.disabled]=\"enable && recepcionSolicitudEvaluacion.idbtcCd != null ? null : false\"\n                      />\n                      Positivo\n                    </label>\n                                    <label class=\"radio-inline\">\n                        <input\n                          type=\"radio\"\n                          name=\"odcd\"\n                          [value]=\"2\"\n                          class=\"form-checkbox-input\"\n                          [(ngModel)]=\"caracteristicaDonacion.odcd\"\n                          [attr.disabled]=\"enable && recepcionSolicitudEvaluacion.idbtcCd != null ? null : false\"\n                        />\n                        NO realizada\n                      </label>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\" style=\"text-align: left;\">\n                                    <h5>Cultivo</h5>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"radio-inline\" style=\"margin-left\">\n                      <input\n                        type=\"radio\"\n                        name=\"oiciCultivo\"\n                        class=\"form-checkbox-input\"\n                        [value]=\"1\"\n                        [(ngModel)]=\"caracteristicaDonacion.oiciCultivo\"\n                        [attr.disabled]=\"enable && recepcionSolicitudEvaluacion.idbtcCi != null ? null : false\"\n                      />\n                      SÍ\n                    </label>\n                                    <label class=\"radio-inline\">\n                      <input\n                        type=\"radio\"\n                        name=\"oiciCultivo\"\n                        [value]=\"0\"\n                        class=\"form-checkbox-input\"\n                        [(ngModel)]=\"caracteristicaDonacion.oiciCultivo\"\n                        [attr.disabled]=\"enable && recepcionSolicitudEvaluacion.idbtcCi != null ? null : false\"\n                      />\n                      NO\n                    </label>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"radio-inline\" style=\"margin-left\">\n                        <input\n                          type=\"radio\"\n                          name=\"odcdCultivo\"\n                          class=\"form-checkbox-input\"\n                          [value]=\"1\"\n                          [(ngModel)]=\"caracteristicaDonacion.odcdCultivo\"\n                          [attr.disabled]=\"enable && recepcionSolicitudEvaluacion.idbtcCd != null ? null : false\"\n                        />\n                        SÍ\n                      </label>\n                                    <label class=\"radio-inline\">\n                        <input\n                          type=\"radio\"\n                          name=\"odcdCultivo\"\n                          [value]=\"0\"\n                          class=\"form-checkbox-input\"\n                          [(ngModel)]=\"caracteristicaDonacion.odcdCultivo\"\n                          [attr.disabled]=\"enable && recepcionSolicitudEvaluacion.idbtcCd != null ? null : false\"\n                        />\n                        NO\n                      </label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!-- <app-componente-cadena\n            [componente]=\"'caracteristicaDonacion'\"\n            [atributo]=\"'tiempoIsquemia'\"\n            [buscar]=\"caracteristicaDonacionBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosCaracteristicaDonacion['tiempoIsquemia']\"\n            [(dato)]=\"caracteristicaDonacion.tiempoIsquemia\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena> -->\n                    <!-- <app-componente-cadena\n            [componente]=\"'caracteristicaDonacion'\"\n            [atributo]=\"'odcd'\"\n            [buscar]=\"caracteristicaDonacionBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosCaracteristicaDonacion['odcd']\"\n            [(dato)]=\"caracteristicaDonacion.odcd\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena>\n          <app-componente-cadena\n            [componente]=\"'caracteristicaDonacion'\"\n            [atributo]=\"'oici'\"\n            [buscar]=\"caracteristicaDonacionBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosCaracteristicaDonacion['oici']\"\n            [(dato)]=\"caracteristicaDonacion.oici\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena>\n          <app-componente-cadena\n            [componente]=\"'caracteristicaDonacion'\"\n            [atributo]=\"'odcdCultivo'\"\n            [buscar]=\"caracteristicaDonacionBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosCaracteristicaDonacion['odcdCultivo']\"\n            [(dato)]=\"caracteristicaDonacion.odcdCultivo\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena>\n          <app-componente-cadena\n            [componente]=\"'caracteristicaDonacion'\"\n            [atributo]=\"'oiciCultivo'\"\n            [buscar]=\"caracteristicaDonacionBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosCaracteristicaDonacion['oiciCultivo']\"\n            [(dato)]=\"caracteristicaDonacion.oiciCultivo\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena> -->\n                    <app-componente-cadena-larga [componente]=\"'caracteristicaDonacion'\" [atributo]=\"'observacion'\" [buscar]=\"caracteristicaDonacionBuscar\" [permisosAtributos]=\"permisosAtributos\" [(valido)]=\"validosCaracteristicaDonacion['observacion']\" [(dato)]=\"caracteristicaDonacion.observacion\"\n                        class=\"w-100\">\n                    </app-componente-cadena-larga>\n                    <!-- <app-componente-fecha [componente]=\"'caracteristicaDonacion'\"\n                                                   [atributo]=\"'fechaRegistro'\"\n                                                   [buscar]=\"caracteristicaDonacionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosCaracteristicaDonacion['fechaRegistro']\"\n                                                   [(dato)]=\"caracteristicaDonacion.fechaRegistro\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                     <app-componente-fecha [componente]=\"'caracteristicaDonacion'\"\n                                                   [atributo]=\"'fechaActualizacion'\"\n                                                   [buscar]=\"caracteristicaDonacionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosCaracteristicaDonacion['fechaActualizacion']\"\n                                                   [(dato)]=\"caracteristicaDonacion.fechaActualizacion\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                     <app-componente-fecha [componente]=\"'caracteristicaDonacion'\"\n                                                   [atributo]=\"'fechaBaja'\"\n                                                   [buscar]=\"caracteristicaDonacionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosCaracteristicaDonacion['fechaBaja']\"\n                                                   [(dato)]=\"caracteristicaDonacion.fechaBaja\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                    <div>\n                        <app-componente-objeto [componente]=\"'caracteristicaDonacion'\"\n                                               [atributo]=\"'usuarioUltMov'\"\n                                               [buscar]=\"caracteristicaDonacionBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosCaracteristicaDonacion['usuarioUltMov']\"\n                                               [(dato)]=\"caracteristicaDonacion.usuarioUltMov\"  class=\"w-100\"\n                                               [ocultarConjuntos]=\"ocultarConjuntosCaracteristicaDonacion\"\n                                               [opciones]=\"lista_usuarioUltMovCaracteristicaDonacion\"\n                                               [atributoVisible]=\"'username'\" [(objetoEdicion)]=\"usuarioUltMovCaracteristicaDonacionEditar\">\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!usuarioUltMovEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'caracteristicaDonacion','usuarioUltMov')\" >\n                                   <app-usuario-crud [nombre]=\"'usuarioUltMov'\" [usuario]=\"caracteristicaDonacion.usuarioUltMov\" (usuarioChange)=\"evtUsuarioUltMov($event)\"\n                                                           [ocultarConjuntosUsuario]=\"'true'\" [class.hidden]=\"!usuarioUltMovEditar\" ></app-usuario-crud>\n                            </div>\n                        </div>\n                    </div>\n                     <app-componente-radio [componente]=\"'caracteristicaDonacion'\"\n                                                   [atributo]=\"'status'\"\n                                                   [buscar]=\"caracteristicaDonacionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosCaracteristicaDonacion['status']\"\n                                                   [(dato)]=\"caracteristicaDonacion.status\"   class=\"w-100\" >\n                    </app-componente-radio >  -->\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/caracteristica-donaciones/caracteristica-donacion/caracteristica-donacion.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/caracteristica-donaciones/caracteristica-donacion/caracteristica-donacion.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: CaracteristicaDonacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaracteristicaDonacionComponent", function() { return CaracteristicaDonacionComponent; });
/* harmony import */ var _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion */ "./src/app/recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/caracteristica-donacion */ "./src/app/caracteristica-donaciones/shared/caracteristica-donacion.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CaracteristicaDonacionComponent = /** @class */ (function () {
    function CaracteristicaDonacionComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.caracteristicaDonacionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.usuarioUltMovCaracteristicaDonacionUsuarioEditar = false;
        this.idoficioDonacionCaracteristicaDonacionOficioDonacionEditar = false;
    }
    CaracteristicaDonacionComponent.prototype.actualizarCaracteristicaDonacion = function () {
        if (this.caracteristicaDonacion.id == null) {
            this.caracteristicaDonacionService.guardarCaracteristicaDonacion(this.caracteristicaDonacion, this.evtGuardar, this);
        }
        else {
            this.caracteristicaDonacionService.actualizarCaracteristicaDonacion(this.caracteristicaDonacion, this.evtActualiza, this);
        }
    };
    CaracteristicaDonacionComponent.prototype.evtGuardar = function (caracteristicaDonacion, obj) {
        obj.caracteristicaDonacion = caracteristicaDonacion;
        obj.caracteristicaDonacionChange.emit(obj.caracteristicaDonacion);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    };
    CaracteristicaDonacionComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.caracteristicaDonacionChange.emit(obj.caracteristicaDonacion);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    CaracteristicaDonacionComponent.prototype.ngOnChanges = function (changes) {
        if (changes.opcion && changes.opcion.currentValue != null) {
            if (changes.opcion.currentValue == 1) {
                this.opcion = 1;
                this.actualizarCaracteristicaDonacion();
            }
        }
        if (changes.permisosAtributos && changes.permisosAtributos.currentValue && !this.enable) {
            changes.permisosAtributos.currentValue.forEach(function (element) {
                element.permiso = 2;
                return element;
            });
        }
    };
    CaracteristicaDonacionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], CaracteristicaDonacionComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], CaracteristicaDonacionComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], CaracteristicaDonacionComponent.prototype, "caracteristicaDonacionBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], CaracteristicaDonacionComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], CaracteristicaDonacionComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], CaracteristicaDonacionComponent.prototype, "validosCaracteristicaDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_2__["CaracteristicaDonacion"])
    ], CaracteristicaDonacionComponent.prototype, "caracteristicaDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], CaracteristicaDonacionComponent.prototype, "caracteristicaDonacionService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Number)
    ], CaracteristicaDonacionComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], CaracteristicaDonacionComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], CaracteristicaDonacionComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], CaracteristicaDonacionComponent.prototype, "caracteristicaDonacionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], CaracteristicaDonacionComponent.prototype, "ocultarConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], CaracteristicaDonacionComponent.prototype, "lista_usuarioUltMovCaracteristicaDonacionUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], CaracteristicaDonacionComponent.prototype, "lista_idoficioDonacionCaracteristicaDonacionOficioDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], CaracteristicaDonacionComponent.prototype, "enable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_0__["RecepcionSolicitudEvaluacion"])
    ], CaracteristicaDonacionComponent.prototype, "recepcionSolicitudEvaluacion", void 0);
    CaracteristicaDonacionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-caracteristica-donacion',
            template: __webpack_require__(/*! ./caracteristica-donacion.component.html */ "./src/app/caracteristica-donaciones/caracteristica-donacion/caracteristica-donacion.component.html"),
            styles: [__webpack_require__(/*! ./caracteristica-donacion.component.css */ "./src/app/caracteristica-donaciones/caracteristica-donacion/caracteristica-donacion.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], CaracteristicaDonacionComponent);
    return CaracteristicaDonacionComponent;
}());



/***/ }),

/***/ "./src/app/caracteristica-donaciones/shared/caracteristica-donacion.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/caracteristica-donaciones/shared/caracteristica-donacion.service.ts ***!
  \*************************************************************************************/
/*! exports provided: CaracteristicaDonacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaracteristicaDonacionService", function() { return CaracteristicaDonacionService; });
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


var CaracteristicaDonacionService = /** @class */ (function () {
    function CaracteristicaDonacionService(globalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }
    CaracteristicaDonacionService.prototype.setCaracteristicaDonacion = function (caracteristicaDonacion) {
        this.caracteristicaDonacion = caracteristicaDonacion;
    };
    CaracteristicaDonacionService.prototype.getCaracteristicaDonacion = function () {
        return this.caracteristicaDonacion;
    };
    CaracteristicaDonacionService.prototype.guardarCaracteristicaDonacion = function (caracteristicaDonacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(caracteristicaDonacion, 'caracteristicaDonacion/guardarCaracteristicaDonacion')
            .subscribe(function (data) {
            _evento(_this.caracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.caracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService.prototype.actualizarCaracteristicaDonacion = function (caracteristicaDonacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(caracteristicaDonacion, 'caracteristicaDonacion/actualizarCaracteristicaDonacion')
            .subscribe(function (data) {
            _evento(_this.caracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.caracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService.prototype.eliminarCaracteristicaDonacion = function (caracteristicaDonacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(caracteristicaDonacion, 'caracteristicaDonacion/eliminarCaracteristicaDonacion')
            .subscribe(function (data) {
            _evento(_this.caracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.caracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService.prototype.getCaracteristicaDonaciondb = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'caracteristicaDonacion/getCaracteristicaDonacion')
            .subscribe(function (data) {
            _evento(_this.caracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.caracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService.prototype.getCaracteristicaDonaciones = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'caracteristicaDonacion/getCaracteristicaDonaciones')
            .subscribe(function (data) {
            _evento(_this.listaCaracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCaracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService.prototype.getCaracteristicaDonacionesActivos = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'caracteristicaDonacion/getCaracteristicaDonacionesActivos')
            .subscribe(function (data) {
            _evento(_this.listaCaracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCaracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService.prototype.lazyCaracteristicaDonacion = function (caracteristicaDonacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(caracteristicaDonacion, 'caracteristicaDonacion/lazyCaracteristicaDonacion')
            .subscribe(function (data) {
            _evento(_this.caracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.caracteristicaDonacion);
        }, function (err) {
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
    CaracteristicaDonacionService.prototype.getCaracteristicaDonacionById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'caracteristicaDonacion/getCaracteristicaDonacionById')
            .subscribe(function (data) {
            _evento(_this.caracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.caracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService.prototype.getCaracteristicaDonacionesById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'caracteristicaDonacion/getCaracteristicaDonacionesById')
            .subscribe(function (data) {
            _evento(_this.listaCaracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCaracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService.prototype.getCaracteristicaDonacionByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'caracteristicaDonacion/getCaracteristicaDonacionByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.caracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.caracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService.prototype.getCaracteristicaDonacionesByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'caracteristicaDonacion/getCaracteristicaDonacionesByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.listaCaracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCaracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService.prototype.getCaracteristicaDonacionByOiciCultivo = function (oiciCultivo, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(oiciCultivo, 'caracteristicaDonacion/getCaracteristicaDonacionByOiciCultivo')
            .subscribe(function (data) {
            _evento(_this.caracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.caracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService.prototype.getCaracteristicaDonacionesByOiciCultivo = function (oiciCultivo, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(oiciCultivo, 'caracteristicaDonacion/getCaracteristicaDonacionesByOiciCultivo')
            .subscribe(function (data) {
            _evento(_this.listaCaracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCaracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService.prototype.getCaracteristicaDonacionByOici = function (oici, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(oici, 'caracteristicaDonacion/getCaracteristicaDonacionByOici')
            .subscribe(function (data) {
            _evento(_this.caracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.caracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService.prototype.getCaracteristicaDonacionesByOici = function (oici, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(oici, 'caracteristicaDonacion/getCaracteristicaDonacionesByOici')
            .subscribe(function (data) {
            _evento(_this.listaCaracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCaracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService.prototype.getCaracteristicaDonacionByOdcdCultivo = function (odcdCultivo, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(odcdCultivo, 'caracteristicaDonacion/getCaracteristicaDonacionByOdcdCultivo')
            .subscribe(function (data) {
            _evento(_this.caracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.caracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService.prototype.getCaracteristicaDonacionesByOdcdCultivo = function (odcdCultivo, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(odcdCultivo, 'caracteristicaDonacion/getCaracteristicaDonacionesByOdcdCultivo')
            .subscribe(function (data) {
            _evento(_this.listaCaracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCaracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService.prototype.getCaracteristicaDonacionByOdcd = function (odcd, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(odcd, 'caracteristicaDonacion/getCaracteristicaDonacionByOdcd')
            .subscribe(function (data) {
            _evento(_this.caracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.caracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService.prototype.getCaracteristicaDonacionesByOdcd = function (odcd, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(odcd, 'caracteristicaDonacion/getCaracteristicaDonacionesByOdcd')
            .subscribe(function (data) {
            _evento(_this.listaCaracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCaracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService.prototype.getCaracteristicaDonacionByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'caracteristicaDonacion/getCaracteristicaDonacionByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.caracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.caracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService.prototype.getCaracteristicaDonacionesByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'caracteristicaDonacion/getCaracteristicaDonacionesByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.listaCaracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCaracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService.prototype.getCaracteristicaDonacionByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'caracteristicaDonacion/getCaracteristicaDonacionByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.caracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.caracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService.prototype.getCaracteristicaDonacionesByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'caracteristicaDonacion/getCaracteristicaDonacionesByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.listaCaracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCaracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService.prototype.getCaracteristicaDonacionByTiempoIsquemia = function (tiempoIsquemia, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(tiempoIsquemia, 'caracteristicaDonacion/getCaracteristicaDonacionByTiempoIsquemia')
            .subscribe(function (data) {
            _evento(_this.caracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.caracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService.prototype.getCaracteristicaDonacionesByTiempoIsquemia = function (tiempoIsquemia, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(tiempoIsquemia, 'caracteristicaDonacion/getCaracteristicaDonacionesByTiempoIsquemia')
            .subscribe(function (data) {
            _evento(_this.listaCaracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCaracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService.prototype.getCaracteristicaDonacionByObservacion = function (observacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(observacion, 'caracteristicaDonacion/getCaracteristicaDonacionByObservacion')
            .subscribe(function (data) {
            _evento(_this.caracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.caracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService.prototype.getCaracteristicaDonacionesByObservacion = function (observacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(observacion, 'caracteristicaDonacion/getCaracteristicaDonacionesByObservacion')
            .subscribe(function (data) {
            _evento(_this.listaCaracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCaracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService.prototype.getCaracteristicaDonacionByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'caracteristicaDonacion/getCaracteristicaDonacionByStatus')
            .subscribe(function (data) {
            _evento(_this.caracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.caracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService.prototype.getCaracteristicaDonacionesByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'caracteristicaDonacion/getCaracteristicaDonacionesByStatus')
            .subscribe(function (data) {
            _evento(_this.listaCaracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCaracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService.prototype.getCaracteristicaDonacionByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'caracteristicaDonacion/getCaracteristicaDonacionByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.caracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.caracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService.prototype.getCaracteristicaDonacionesByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'caracteristicaDonacion/getCaracteristicaDonacionesByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.listaCaracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCaracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService.prototype.getCaracteristicaDonacionByIdoficioDonacion = function (idoficioDonacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idoficioDonacion, 'caracteristicaDonacion/getCaracteristicaDonacionByIdoficioDonacion')
            .subscribe(function (data) {
            _evento(_this.caracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.caracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService.prototype.getCaracteristicaDonacionesByIdoficioDonacion = function (idoficioDonacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idoficioDonacion, 'caracteristicaDonacion/getCaracteristicaDonacionesByIdoficioDonacion')
            .subscribe(function (data) {
            _evento(_this.listaCaracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCaracteristicaDonacion);
        }, function (err) {
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
    CaracteristicaDonacionService.prototype.custom = function (consulta, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(consulta, 'caracteristicaDonacion/custom')
            .subscribe(function (data) {
            _evento(_this.listaCaracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCaracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService.prototype.getCaracteristicaDonacionesByDto = function (p_caracteristicaDonacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(p_caracteristicaDonacion, 'caracteristicaDonacion/getCaracteristicaDonacionesByDto')
            .subscribe(function (data) {
            _evento(_this.listaCaracteristicaDonacion = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaCaracteristicaDonacion);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    CaracteristicaDonacionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"]])
    ], CaracteristicaDonacionService);
    return CaracteristicaDonacionService;
}());



/***/ }),

/***/ "./src/app/caracteristica-donaciones/shared/configurar-caracteristica-donacion.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/caracteristica-donaciones/shared/configurar-caracteristica-donacion.ts ***!
  \****************************************************************************************/
/*! exports provided: ConfigurarCaracteristicaDonacion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurarCaracteristicaDonacion", function() { return ConfigurarCaracteristicaDonacion; });
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");

var ConfigurarCaracteristicaDonacion = /** @class */ (function () {
    //   rutaAgregar:string;
    function ConfigurarCaracteristicaDonacion() {
        this.urlprovider = new _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__["URLProvider"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "caracteristicaDonacion";
        this.rutaLista = this.crudServiceBaseUrl + "/getCaracteristicaDonaciones";
        this.rutaAgregar = this.crudServiceBaseUrl + "/guardarCaracteristicaDonacion";
        this.rutaActualizar = this.crudServiceBaseUrl + "/actualizarCaracteristicaDonacion";
        this.rutaEliminar = this.crudServiceBaseUrl + "/eliminarCaracteristicaDonacion";
        this.titulo = "Catálogo CaracteristicaDonacion";
        this.permisosAtributos = null;
        this.permisosTabla = null;
        this.caracteristicaDonacionConsulta = null;
        this.campoAgEl = null;
        this.tipocampoAgEl = null;
        this.altoComponente = 500;
    }
    ConfigurarCaracteristicaDonacion.prototype.lectura = function () {
        return {
            url: this.rutaLista,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarCaracteristicaDonacion.prototype.lecturaP = function (evt, dat) {
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
    ConfigurarCaracteristicaDonacion.prototype.eliminar = function () {
        return {
            url: this.rutaEliminar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarCaracteristicaDonacion.prototype.eliminarP = function (evt, dat) {
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
    ConfigurarCaracteristicaDonacion.prototype.agregar = function () {
        return {
            url: this.rutaAgregar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarCaracteristicaDonacion.prototype.agregarP = function (evt, dat) {
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
    return ConfigurarCaracteristicaDonacion;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-caracteristica-donaciones-caracteristica-donacion-module~app-oficio-donaciones-oficio-do~6ae2b066.js.map