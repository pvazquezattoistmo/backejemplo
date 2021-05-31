(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-gestion-muestra-microbiologias-gestion-muestra-microbiologia-module~app-oficio-donacione~a72cb3b2"],{

/***/ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-conjunto/gestion-muestra-microbiologia-conjunto.component.css":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-conjunto/gestion-muestra-microbiologia-conjunto.component.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-conjunto/gestion-muestra-microbiologia-conjunto.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-conjunto/gestion-muestra-microbiologia-conjunto.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\"  >\n    <li *ngFor =  \"let gestionMuestraMicrobiologia of listaGestionMuestraMicrobiologia \" [ngClass]=\"{ 'active':idSeleccionado=== 'I-'+gestionMuestraMicrobiologia.id}\"\n        (click)=\"elegir(gestionMuestraMicrobiologia,'I' )\" >\n        <a data-toggle=\"tab\" href=\"#tab-I-{{gestionMuestraMicrobiologia.id}}\">{{gestionMuestraMicrobiologia.id}}</a>\n    </li>\n    <li *ngFor =  \"let gestionMuestraMicrobiologia of listaGestionMuestraMicrobiologiaN \" [ngClass]=\"{ 'active':idSeleccionado=== 'N-'+gestionMuestraMicrobiologia.id}\"\n        (click)=\"elegir(gestionMuestraMicrobiologia, 'N')\" >\n        <a data-toggle=\"tab\" href=\"#tab-N-{{gestionMuestraMicrobiologia.id}}\">T-{{gestionMuestraMicrobiologia.id}}</a>\n    </li>\n</ul>\n<div class=\"panel panel-default\"  >\n     <div  class=\"tab-content\">\n        <div *ngFor = \"let gestionMuestraMicrobiologia of listaGestionMuestraMicrobiologia ; let i = index \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='I-'+gestionMuestraMicrobiologia.id}\" id=\"tab-I-{{gestionMuestraMicrobiologia.id}}\">\n\t\t\t<app-gestion-muestra-microbiologia [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [gestionMuestraMicrobiologiaBuscar]=\"gestionMuestraMicrobiologiaBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosGestionMuestraMicrobiologia]=\"validosGestionMuestraMicrobiologia\"  \n\t\t\t\t\t\t  [gestionMuestraMicrobiologiaService]=\"gestionMuestraMicrobiologiaService\" [(opcion)]=\"opcionGestionMuestraMicrobiologia\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(gestionMuestraMicrobiologia)]=\"listaGestionMuestraMicrobiologia[i]\"  [ocultarConjuntos]=\"ocultarConjuntosGestionMuestraMicrobiologia\"\n                           [lista_usuarioUltMovGestionMuestraMicrobiologiaUsuario]=\"lista_usuarioUltMovGestionMuestraMicrobiologiaUsuario\" \n                           [lista_idoficioDonacionGestionMuestraMicrobiologiaOficioDonacion]=\"lista_idoficioDonacionGestionMuestraMicrobiologiaOficioDonacion\" \n\n\t\t\t\t\t  >\n\t\t\t</app-gestion-muestra-microbiologia>\n        </div>\n        <div *ngFor = \"let gestionMuestraMicrobiologia of listaGestionMuestraMicrobiologiaN;  let i = index  \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='N-'+gestionMuestraMicrobiologia.id}\" id=\"tab-N-{{gestionMuestraMicrobiologia.id}}\">\n\t\t\t<app-gestion-muestra-microbiologia [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [gestionMuestraMicrobiologiaBuscar]=\"gestionMuestraMicrobiologiaBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosGestionMuestraMicrobiologia]=\"validosGestionMuestraMicrobiologia\"  \n\t\t\t\t\t\t  [gestionMuestraMicrobiologiaService]=\"gestionMuestraMicrobiologiaService\" [(opcion)]=\"opcionGestionMuestraMicrobiologia\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(gestionMuestraMicrobiologia)]=\"listaGestionMuestraMicrobiologiaN[i]\"  [ocultarConjuntos]=\"ocultarConjuntosGestionMuestraMicrobiologia\"\n                           [lista_usuarioUltMovGestionMuestraMicrobiologiaUsuario]=\"lista_usuarioUltMovGestionMuestraMicrobiologiaUsuario\" \n                           [lista_idoficioDonacionGestionMuestraMicrobiologiaOficioDonacion]=\"lista_idoficioDonacionGestionMuestraMicrobiologiaOficioDonacion\" \n\n\t\t\t\t\t  >\n\t\t\t</app-gestion-muestra-microbiologia>  \n        </div>\n\n    </div>\n    <div class=\"panel-footer\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"agregarNuevo()\">\n            <span class=\"fa fa-plus-circle\" aria-hidden=\"true\" style=\"font-size:36px\"></span> AGREGAR\n        </button>\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"actualizaTodo()\">\n            <span class=\"fa fa-reply-all\" aria-hidden=\"true\" style=\"font-size:36px\"></span> ACTUALIZAR TODO\n        </button>\n    </div>\n</div>\t\t\t\n"

/***/ }),

/***/ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-conjunto/gestion-muestra-microbiologia-conjunto.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-conjunto/gestion-muestra-microbiologia-conjunto.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: GestionMuestraMicrobiologiaConjuntoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionMuestraMicrobiologiaConjuntoComponent", function() { return GestionMuestraMicrobiologiaConjuntoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/gestion-muestra-microbiologia */ "./src/app/gestion-muestra-microbiologias/shared/gestion-muestra-microbiologia.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GestionMuestraMicrobiologiaConjuntoComponent = /** @class */ (function () {
    function GestionMuestraMicrobiologiaConjuntoComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovGestionMuestraMicrobiologiaUsuarioEditar = false;
        this.idoficioDonacionGestionMuestraMicrobiologiaOficioDonacionEditar = false;
        this.listaGestionMuestraMicrobiologiaN = [];
        this.listaGestionMuestraMicrobiologia = [];
        this.listaGestionMuestraMicrobiologiaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.gestionMuestraMicrobiologiaN = new _shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_1__["GestionMuestraMicrobiologia"]();
        this.gestionMuestraMicrobiologiaNChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.agregados = 0;
        this.actualizados = 0;
        this.idSeleccionado = "N-0";
    }
    GestionMuestraMicrobiologiaConjuntoComponent.prototype.elegir = function (gestionMuestraMicrobiologia, tipo) {
        this.idSeleccionado = tipo + "-" + gestionMuestraMicrobiologia.id;
        this.gestionMuestraMicrobiologiaN = gestionMuestraMicrobiologia;
    };
    GestionMuestraMicrobiologiaConjuntoComponent.prototype.ngOnInit = function () {
        this.gestionMuestraMicrobiologiaN.id = 0;
        this.listaGestionMuestraMicrobiologiaN.push(Object.assign({}, this.gestionMuestraMicrobiologiaN));
        this.usuariologueado = this.globalesService.dameUsuario();
    };
    GestionMuestraMicrobiologiaConjuntoComponent.prototype.agregarNuevo = function () {
        var pg = new _shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_1__["GestionMuestraMicrobiologia"]();
        pg.id = this.listaGestionMuestraMicrobiologiaN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaGestionMuestraMicrobiologiaN.push(pg);
    };
    GestionMuestraMicrobiologiaConjuntoComponent.prototype.actualizaTodo = function () {
        this.agregados = 0;
        this.actualizados = 0;
        for (var _i = 0, _a = this.listaGestionMuestraMicrobiologia; _i < _a.length; _i++) {
            var gestionMuestraMicrobiologia = _a[_i];
            this.gestionMuestraMicrobiologiaService.actualizarGestionMuestraMicrobiologia(gestionMuestraMicrobiologia, this.evtActualiza, this);
        }
        for (var _b = 0, _c = this.listaGestionMuestraMicrobiologiaN; _b < _c.length; _b++) {
            var gestionMuestraMicrobiologia = _c[_b];
            gestionMuestraMicrobiologia.id = null;
            this.gestionMuestraMicrobiologiaService.guardarGestionMuestraMicrobiologia(gestionMuestraMicrobiologia, this.evtGuardar, this);
        }
    };
    GestionMuestraMicrobiologiaConjuntoComponent.prototype.evtGuardar = function (gestionMuestraMicrobiologia, obj) {
        obj.agregados++;
        obj.listaGestionMuestraMicrobiologia.push(gestionMuestraMicrobiologia);
        if (obj.agregados >= obj.listaGestionMuestraMicrobiologiaN.length) {
            obj.gestionMuestraMicrobiologiaN = new _shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_1__["GestionMuestraMicrobiologia"]();
            obj.listaGestionMuestraMicrobiologiaN = [];
            obj.gestionMuestraMicrobiologiaN.id = 0;
            obj.idSeleccionado = "N-" + obj.gestionMuestraMicrobiologiaN.id;
            obj.listaGestionMuestraMicrobiologiaN.push(Object.assign({}, obj.gestionMuestraMicrobiologiaN));
            obj.listaGestionMuestraMicrobiologiaChange.emit(obj.listaGestionMuestraMicrobiologia);
        }
        if (obj.agregados >= obj.listaGestionMuestraMicrobiologiaN.length &&
            obj.actualizados >= obj.listaGestionMuestraMicrobiologia.length) {
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    GestionMuestraMicrobiologiaConjuntoComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.actualizados++;
            if (obj.agregados >= obj.listaGestionMuestraMicrobiologiaN.length &&
                obj.actualizados >= obj.listaGestionMuestraMicrobiologia.length) {
                obj.opcion = 0;
                obj.opcion.emit(obj.opcion);
            }
        }
    };
    GestionMuestraMicrobiologiaConjuntoComponent.prototype.ngOnChanges = function (changes) {
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
    ], GestionMuestraMicrobiologiaConjuntoComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GestionMuestraMicrobiologiaConjuntoComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GestionMuestraMicrobiologiaConjuntoComponent.prototype, "gestionMuestraMicrobiologiaBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GestionMuestraMicrobiologiaConjuntoComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GestionMuestraMicrobiologiaConjuntoComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GestionMuestraMicrobiologiaConjuntoComponent.prototype, "validosGestionMuestraMicrobiologia", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GestionMuestraMicrobiologiaConjuntoComponent.prototype, "ocultarConjuntosGestionMuestraMicrobiologia", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GestionMuestraMicrobiologiaConjuntoComponent.prototype, "gestionMuestraMicrobiologiaService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], GestionMuestraMicrobiologiaConjuntoComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GestionMuestraMicrobiologiaConjuntoComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GestionMuestraMicrobiologiaConjuntoComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GestionMuestraMicrobiologiaConjuntoComponent.prototype, "lista_usuarioUltMovGestionMuestraMicrobiologiaUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GestionMuestraMicrobiologiaConjuntoComponent.prototype, "lista_idoficioDonacionGestionMuestraMicrobiologiaOficioDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], GestionMuestraMicrobiologiaConjuntoComponent.prototype, "listaGestionMuestraMicrobiologia", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GestionMuestraMicrobiologiaConjuntoComponent.prototype, "listaGestionMuestraMicrobiologiaChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_1__["GestionMuestraMicrobiologia"])
    ], GestionMuestraMicrobiologiaConjuntoComponent.prototype, "gestionMuestraMicrobiologiaN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GestionMuestraMicrobiologiaConjuntoComponent.prototype, "gestionMuestraMicrobiologiaNChange", void 0);
    GestionMuestraMicrobiologiaConjuntoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gestion-muestra-microbiologia-conjunto',
            template: __webpack_require__(/*! ./gestion-muestra-microbiologia-conjunto.component.html */ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-conjunto/gestion-muestra-microbiologia-conjunto.component.html"),
            styles: [__webpack_require__(/*! ./gestion-muestra-microbiologia-conjunto.component.css */ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-conjunto/gestion-muestra-microbiologia-conjunto.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], GestionMuestraMicrobiologiaConjuntoComponent);
    return GestionMuestraMicrobiologiaConjuntoComponent;
}());



/***/ }),

/***/ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-crud/gestion-muestra-microbiologia-crud.component.css":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-crud/gestion-muestra-microbiologia-crud.component.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-crud/gestion-muestra-microbiologia-crud.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-crud/gestion-muestra-microbiologia-crud.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n    <app-gestion-muestra-microbiologia [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"'C. Gestión de Muestras de Microbiología: Revisión, Almacén, Envío'\" [gestionMuestraMicrobiologiaBuscar]=\"gestionMuestraMicrobiologiaBuscar\" [permisosAtributos]=\"permisosAtributos\"\n        [permisosConjuntos]=\"permisosConjuntos\" [validosGestionMuestraMicrobiologia]=\"validosGestionMuestraMicrobiologia\" [gestionMuestraMicrobiologiaService]=\"gestionMuestraMicrobiologia_service\" [(opcion)]=\"opcionGestionMuestraMicrobiologia\" [globalesService]=\"globalesService\"\n        [(gestionMuestraMicrobiologia)]=\"gestionMuestraMicrobiologia\" [ocultarConjuntos]=\"ocultarConjuntosGestionMuestraMicrobiologia\" [lista_usuarioUltMovGestionMuestraMicrobiologiaUsuario]=\"lista_usuarioUltMovGestionMuestraMicrobiologiaUsuario\" [lista_idoficioDonacionGestionMuestraMicrobiologiaOficioDonacion]=\"lista_idoficioDonacionGestionMuestraMicrobiologiaOficioDonacion\"\n        [enable]=\"enable\">\n\n    </app-gestion-muestra-microbiologia>\n\n    <!-- <div class=\"panel-footer\" style=\"text-align: center\">\n\t\t  <div style=\"display: inline-block;width: 90%;\">\n            <button type=\"button\" class=\"btn btn-primary btn-buscar\" [class.hidden]=\"!gestionMuestraMicrobiologiaBuscar\" (click)=\"buscarGestionMuestraMicrobiologiaFront(formaGeneral)\"><span class=\"fa fa-search\"></span> Buscar</button>\n            <button type=\"button\" class=\"btn btn-success btn-agregar\" [class.hidden]=\"!gestionMuestraMicrobiologiaAgregar\" (click)=\"nuevoGestionMuestraMicrobiologiaFront(formaGeneral)\" ><span class=\"fa fa-newspaper\"></span>Nuevo </button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"!gestionMuestraMicrobiologiaActualizar\" (click)=\"actualizarGestionMuestraMicrobiologiaFront(formaGeneral)\"><span class=\"fa fa-arrow-up\"></span> Actualizar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-eliminar\"  [class.hidden]=\"!gestionMuestraMicrobiologiaEliminar\" (click)=\"eliminarGestionMuestraMicrobiologiaFront(formaGeneral)\"> <span class=\"fa fa-trash\"></span>Eliminar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-guardar\"  [disabled]=\"!validaTodosc\" [class.hidden]=\"!gestionMuestraMicrobiologiaGuardar\" (click)=\"guardarGestionMuestraMicrobiologiaFront(formaGeneral)\"><span class=\"fa fa-floppy-disk\"></span>Guardar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-cancelar\"  [class.hidden]=\"!gestionMuestraMicrobiologiaCancelar\" (click)=\"cancelarGestionMuestraMicrobiologiaFront(formaGeneral)\"><span class=\"fa fa-remove\"></span>Cancelar</button>\n            <button type=\"button\" class=\"btn btn-primary btn-limpiar\"  (click)=\"limpiarCampos()\">Limpiar Campos</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteGestionMuestraMicrobiologiaWord\" (click)=\"reporteGestionMuestraMicrobiologiaWord(formaGeneral)\"> <span class=\"fa fa-download-alt\"></span>Word</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteGestionMuestraMicrobiologiaExcel\" (click)=\"reporteGestionMuestraMicrobiologiaExcel(formaGeneral)\"> <span class=\"fa fa-download-alt\"></span> Excel</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteGestionMuestraMicrobiologiaPdf\" (click)=\"reporteGestionMuestraMicrobiologiaPdf(formaGeneral)\"><span class=\"fa fa-download-alt\"></span> PDF</button>\n          </div>\n\n        </div> -->\n</div>\n<div class=\"modal fade\" id=\"buscarGestionMuestraMicrobiologia_{{nombre}}\" role=\"dialog\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n            <div class=\"modal-body\">\n                <app-gestion-muestra-microbiologia-list-kendo [nombregrid]=\"'buscar_'+nombre\" [configuracionGestionMuestraMicrobiologia]=\"configuracionGestionMuestraMicrobiologia\" (gestionMuestraMicrobiologiaSeleccionado)=\"evtGestionMuestraMicrobiologiaSeleccionado($event)\">\n                </app-gestion-muestra-microbiologia-list-kendo>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>"

/***/ }),

/***/ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-crud/gestion-muestra-microbiologia-crud.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-crud/gestion-muestra-microbiologia-crud.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: GestionMuestraMicrobiologiaCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionMuestraMicrobiologiaCrudComponent", function() { return GestionMuestraMicrobiologiaCrudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/core.service */ "./src/app/shared/core.service.ts");
/* harmony import */ var _shared_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/file.service */ "./src/app/shared/file.service.ts");
/* harmony import */ var _shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/gestion-muestra-microbiologia */ "./src/app/gestion-muestra-microbiologias/shared/gestion-muestra-microbiologia.ts");
/* harmony import */ var _shared_gestion_muestra_microbiologia_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/gestion-muestra-microbiologia.service */ "./src/app/gestion-muestra-microbiologias/shared/gestion-muestra-microbiologia.service.ts");
/* harmony import */ var _shared_configurar_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/configurar-gestion-muestra-microbiologia */ "./src/app/gestion-muestra-microbiologias/shared/configurar-gestion-muestra-microbiologia.ts");
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








var GestionMuestraMicrobiologiaCrudComponent = /** @class */ (function () {
    function GestionMuestraMicrobiologiaCrudComponent(globalesService, zone, fileservice, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    gestionMuestraMicrobiologia_service, usuario_service, usuarioBtc_service, perfilRedIssste_service, 
    //                public perfilBtc_service: PerfilBtcService,
    hospital_service, entidadFederativa_service, perfil_service, oficioDonacion_service, recepcionSolicitudEvaluacion_service, solicitudEvaluacionCorneal_service, causaMuerte_service) {
        this.globalesService = globalesService;
        this.zone = zone;
        this.fileservice = fileservice;
        this.coreService = coreService;
        this.gestionMuestraMicrobiologia_service = gestionMuestraMicrobiologia_service;
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
        this.opcionGestionMuestraMicrobiologia = 0;
        this.validosGestionMuestraMicrobiologia = {
            id: false,
            envio: false,
            horaInicioRevision: false,
            fechaBaja: false,
            fechaInicioRevision: false,
            fechaRegistro: false,
            almacenHora: false,
            fechaActualizacion: false,
            comentario: true,
            almacenMuestra: false,
            revision: false,
            status: false,
            usuarioUltMov: false,
            idoficioDonacion: false,
        };
        this.ocultarConjuntosGestionMuestraMicrobiologia = false;
        this.nombre = "";
        this.permisosTabla = { "tabla": "gestionMuestraMicrobiologia", "permiso": 0, "etiqueta": "" };
        this.permisosAtributos = [];
        this.permisosConjuntos = [];
        //  public perfil: Perfil;
        this.accion = 0;
        this.gestionMuestraMicrobiologiaLazy = false;
        this.gestionMuestraMicrobiologiaPermisos = false;
        this.validaciones = false;
        this.validacionesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.gestionMuestraMicrobiologia = new _shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_4__["GestionMuestraMicrobiologia"]();
        this.gestionMuestraMicrobiologiaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.gestionMuestraMicrobiologiaTablaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lista_gestionMuestraMicrobiologias = [];
        this.usuarioUltMovGestionMuestraMicrobiologiaUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.lista_usuarioUltMovGestionMuestraMicrobiologiaUsuario = [];
        this.usuarioUltMovGestionMuestraMicrobiologiaUsuarioEditar = false;
        this.idoficioDonacionGestionMuestraMicrobiologiaOficioDonacionEleccion = new _oficio_donaciones_shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_14__["OficioDonacion"]();
        this.lista_idoficioDonacionGestionMuestraMicrobiologiaOficioDonacion = [];
        this.idoficioDonacionGestionMuestraMicrobiologiaOficioDonacionEditar = false;
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                this.obtenerPermisos();
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
            }
        }
        this.gestionMuestraMicrobiologiaSeleccion = this.gestionMuestraMicrobiologiaCancelar = this.gestionMuestraMicrobiologiaGuardar = this.gestionMuestraMicrobiologiaBuscar = this.gestionMuestraMicrobiologiaAgregar = this.gestionMuestraMicrobiologiaActualizar = this.gestionMuestraMicrobiologiaEliminar = false;
        this.configuracionGestionMuestraMicrobiologia = new _shared_configurar_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_6__["ConfigurarGestionMuestraMicrobiologia"]();
        //this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovGestionMuestraMicrobiologiaUsuario, this);
        //this.oficioDonacion_service.getOficioDonacionesActivos(this.evtGetIdoficioDonacionGestionMuestraMicrobiologiaOficioDonacion, this);
        this.limpiarCampos();
    }
    Object.defineProperty(GestionMuestraMicrobiologiaCrudComponent.prototype, "gestionMuestraMicrobiologiaOcultarConjuntos", {
        get: function () {
            if (this.ocultarConjuntosGestionMuestraMicrobiologia)
                return true;
            return !this.gestionMuestraMicrobiologiaActualizar;
        },
        enumerable: true,
        configurable: true
    });
    GestionMuestraMicrobiologiaCrudComponent.prototype.ngOnChanges = function (changes) {
        if (changes.gestionMuestraMicrobiologia && changes.gestionMuestraMicrobiologia.currentValue == null &&
            this.gestionMuestraMicrobiologia == null)
            this.gestionMuestraMicrobiologia = new _shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_4__["GestionMuestraMicrobiologia"]();
        else {
            var aux = new _shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_4__["GestionMuestraMicrobiologia"]();
            if (this.gestionMuestraMicrobiologia)
                aux.from(this.gestionMuestraMicrobiologia);
            if (aux.isOk && aux.isOk()) {
                this.accion = 7;
                this.gestionMuestraMicrobiologiaBuscar = this.gestionMuestraMicrobiologiaAgregar = this.gestionMuestraMicrobiologiaSeleccion = this.gestionMuestraMicrobiologiaGuardar = false;
                this.gestionMuestraMicrobiologiaActualizar = this.gestionMuestraMicrobiologiaEliminar = this.gestionMuestraMicrobiologiaCancelar = true;
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
                this.gestionMuestraMicrobiologiaSeleccion = this.gestionMuestraMicrobiologiaAgregar = this.gestionMuestraMicrobiologiaBuscar = this.gestionMuestraMicrobiologiaActualizar = this.gestionMuestraMicrobiologiaEliminar = false;
                this.gestionMuestraMicrobiologiaGuardar = this.gestionMuestraMicrobiologiaCancelar = true;
            }
        }
    };
    GestionMuestraMicrobiologiaCrudComponent.prototype.obtenerPermisos = function () {
        var id_expe = -1;
        var tablas = [
            "gestionMuestraMicrobiologia",
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
        this.gestionMuestraMicrobiologiaPermisos = false;
        this.coreService.permisos(parametros, this.evtCorePermisos, this);
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    GestionMuestraMicrobiologiaCrudComponent.prototype.evtCorePermisos = function (permisos, obj) {
        obj.gestionMuestraMicrobiologiaPermisos = true;
        if (permisos && permisos.gestionMuestraMicrobiologia && permisos.gestionMuestraMicrobiologia.PermisoAtributo && permisos.gestionMuestraMicrobiologia.PermisoAtributo.length > 0) {
            obj.permisosAtributos = permisos.gestionMuestraMicrobiologia.PermisoAtributo;
        }
        else {
            obj.usuariologueado = undefined;
        }
        if (permisos && permisos.gestionMuestraMicrobiologia && permisos.gestionMuestraMicrobiologia.PermisoConjunto && permisos.gestionMuestraMicrobiologia.PermisoConjunto.length > 0) {
            obj.permisosConjuntos = permisos.gestionMuestraMicrobiologia.PermisoConjunto;
        }
        if (permisos && permisos.gestionMuestraMicrobiologia && permisos.gestionMuestraMicrobiologia.PermisoTabla && permisos.gestionMuestraMicrobiologia.PermisoTabla.length > 0) {
            obj.permisosTabla = permisos.gestionMuestraMicrobiologia.PermisoTabla[0];
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
    GestionMuestraMicrobiologiaCrudComponent.prototype.evtGetUsuarioUltMovGestionMuestraMicrobiologiaUsuario = function (lista_usuarioUltMovGestionMuestraMicrobiologiaUsuario, obj) {
        obj.lista_usuarioUltMovGestionMuestraMicrobiologiaUsuario = lista_usuarioUltMovGestionMuestraMicrobiologiaUsuario;
        obj.actualizar_UsuarioUltMovGestionMuestraMicrobiologiaUsuario();
    };
    GestionMuestraMicrobiologiaCrudComponent.prototype.evtGetIdoficioDonacionGestionMuestraMicrobiologiaOficioDonacion = function (lista_idoficioDonacionGestionMuestraMicrobiologiaOficioDonacion, obj) {
        obj.lista_idoficioDonacionGestionMuestraMicrobiologiaOficioDonacion = lista_idoficioDonacionGestionMuestraMicrobiologiaOficioDonacion;
        obj.actualizar_IdoficioDonacionGestionMuestraMicrobiologiaOficioDonacion();
    };
    GestionMuestraMicrobiologiaCrudComponent.prototype.actualizar_UsuarioUltMovGestionMuestraMicrobiologiaUsuario = function () {
        if (this.usuarioUltMovGestionMuestraMicrobiologiaUsuarioEleccion)
            for (var _i = 0, _a = this.lista_usuarioUltMovGestionMuestraMicrobiologiaUsuario; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.usuarioUltMovGestionMuestraMicrobiologiaUsuarioEleccion.id) {
                    this.usuarioUltMovGestionMuestraMicrobiologiaUsuarioEleccion = eleme;
                    break;
                }
            }
    };
    GestionMuestraMicrobiologiaCrudComponent.prototype.actualizar_IdoficioDonacionGestionMuestraMicrobiologiaOficioDonacion = function () {
        if (this.idoficioDonacionGestionMuestraMicrobiologiaOficioDonacionEleccion)
            for (var _i = 0, _a = this.lista_idoficioDonacionGestionMuestraMicrobiologiaOficioDonacion; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.idoficioDonacionGestionMuestraMicrobiologiaOficioDonacionEleccion.id) {
                    this.idoficioDonacionGestionMuestraMicrobiologiaOficioDonacionEleccion = eleme;
                    break;
                }
            }
    };
    GestionMuestraMicrobiologiaCrudComponent.prototype.ngDoCheck = function () {
    };
    GestionMuestraMicrobiologiaCrudComponent.prototype.validaAcciones = function (vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    };
    Object.defineProperty(GestionMuestraMicrobiologiaCrudComponent.prototype, "validaId", {
        get: function () {
            return this.validosGestionMuestraMicrobiologia['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GestionMuestraMicrobiologiaCrudComponent.prototype, "validaIds", {
        get: function () {
            return this.validosGestionMuestraMicrobiologia['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GestionMuestraMicrobiologiaCrudComponent.prototype, "validaEnvio", {
        get: function () {
            return this.validosGestionMuestraMicrobiologia['envio'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GestionMuestraMicrobiologiaCrudComponent.prototype, "validaHoraInicioRevision", {
        get: function () {
            return this.validosGestionMuestraMicrobiologia['horaInicioRevision'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GestionMuestraMicrobiologiaCrudComponent.prototype, "validaFechaBaja", {
        get: function () {
            return this.validosGestionMuestraMicrobiologia['fechaBaja'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GestionMuestraMicrobiologiaCrudComponent.prototype, "validaFechaInicioRevision", {
        get: function () {
            return this.validosGestionMuestraMicrobiologia['fechaInicioRevision'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GestionMuestraMicrobiologiaCrudComponent.prototype, "validaFechaRegistro", {
        get: function () {
            return this.validosGestionMuestraMicrobiologia['fechaRegistro'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GestionMuestraMicrobiologiaCrudComponent.prototype, "validaAlmacenHora", {
        get: function () {
            return this.validosGestionMuestraMicrobiologia['almacenHora'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GestionMuestraMicrobiologiaCrudComponent.prototype, "validaFechaActualizacion", {
        get: function () {
            return this.validosGestionMuestraMicrobiologia['fechaActualizacion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GestionMuestraMicrobiologiaCrudComponent.prototype, "validaComentario", {
        get: function () {
            return this.validosGestionMuestraMicrobiologia['comentario'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GestionMuestraMicrobiologiaCrudComponent.prototype, "validaAlmacenMuestra", {
        get: function () {
            return this.validosGestionMuestraMicrobiologia['almacenMuestra'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GestionMuestraMicrobiologiaCrudComponent.prototype, "validaRevision", {
        get: function () {
            return this.validosGestionMuestraMicrobiologia['revision'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GestionMuestraMicrobiologiaCrudComponent.prototype, "validaStatus", {
        get: function () {
            return this.validosGestionMuestraMicrobiologia['status'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GestionMuestraMicrobiologiaCrudComponent.prototype, "validaUsuarioUltMov", {
        get: function () {
            return this.validosGestionMuestraMicrobiologia['usuarioUltMov'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GestionMuestraMicrobiologiaCrudComponent.prototype, "validaIdoficioDonacion", {
        get: function () {
            return this.validosGestionMuestraMicrobiologia['idoficioDonacion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GestionMuestraMicrobiologiaCrudComponent.prototype, "validaTodosc", {
        get: function () {
            var salida = this.validaId && this.validaEnvio && this.validaHoraInicioRevision && this.validaFechaBaja && this.validaFechaInicioRevision && this.validaFechaRegistro && this.validaAlmacenHora && this.validaFechaActualizacion && this.validaComentario && this.validaAlmacenMuestra && this.validaRevision && this.validaStatus && this.validaUsuarioUltMov && this.validaIdoficioDonacion;
            if (salida != this.validaciones)
                this.validacionesChange.emit(salida);
            return salida;
        },
        enumerable: true,
        configurable: true
    });
    GestionMuestraMicrobiologiaCrudComponent.prototype.obtenerGestionMuestraMicrobiologias = function (lista, objeto) {
        objeto.lista_gestionMuestraMicrobiologias = lista;
        if (lista && lista.length > 0) {
            objeto.gestionMuestraMicrobiologia.from(lista[0]);
            objeto.evtGestionMuestraMicrobiologiaSeleccionado(objeto.gestionMuestraMicrobiologia);
            if (objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    };
    GestionMuestraMicrobiologiaCrudComponent.prototype.evn_lazy_gestionMuestraMicrobiologia = function (gestionMuestraMicrobiologia, objeto) {
        objeto.gestionMuestraMicrobiologia = gestionMuestraMicrobiologia;
        objeto.gestionMuestraMicrobiologiaChange.emit(objeto.gestionMuestraMicrobiologia);
        objeto.configuarCombosObjetos();
        objeto.gestionMuestraMicrobiologiaLazy = true;
    };
    Object.defineProperty(GestionMuestraMicrobiologiaCrudComponent.prototype, "datosReporteGestionMuestraMicrobiologiaWord", {
        /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
        get: function () {
            return !(this.gestionMuestraMicrobiologiaActualizar && this.gestionMuestraMicrobiologiaLazy && this.globalesService.preporteWord(this, "gestionMuestraMicrobiologia"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GestionMuestraMicrobiologiaCrudComponent.prototype, "datosReporteGestionMuestraMicrobiologiaExcel", {
        get: function () {
            return !(this.gestionMuestraMicrobiologiaActualizar && this.gestionMuestraMicrobiologiaLazy && this.globalesService.preporteExcel(this, "gestionMuestraMicrobiologia"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GestionMuestraMicrobiologiaCrudComponent.prototype, "datosReporteGestionMuestraMicrobiologiaPdf", {
        get: function () {
            return !(this.gestionMuestraMicrobiologiaActualizar && this.gestionMuestraMicrobiologiaLazy && this.globalesService.preportePdf(this, "gestionMuestraMicrobiologia"));
        },
        enumerable: true,
        configurable: true
    });
    GestionMuestraMicrobiologiaCrudComponent.prototype.reporteGestionMuestraMicrobiologiaExcel = function (form) {
        var nombre = "GestionMuestraMicrobiologia.xlsx";
        var path = "file/reporteExcel";
        var parametros = {};
        parametros["entradas"] = { "gestionMuestraMicrobiologia": this.gestionMuestraMicrobiologia };
        parametros["plantilla"] = "GestionMuestraMicrobiologia.xlsx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    GestionMuestraMicrobiologiaCrudComponent.prototype.reporteGestionMuestraMicrobiologiaWord = function (form) {
        var nombre = "GestionMuestraMicrobiologia.docx";
        var path = "file/reporteWord";
        var parametros = {};
        parametros["entradas"] = { "gestionMuestraMicrobiologia": this.gestionMuestraMicrobiologia };
        parametros["plantilla"] = "GestionMuestraMicrobiologia.docx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    GestionMuestraMicrobiologiaCrudComponent.prototype.reporteGestionMuestraMicrobiologiaPdf = function (form) {
        var nombre = "GestionMuestraMicrobiologia.docx";
        var path = "file/reportePdf";
        var parametros = {};
        parametros["entradas"] = { "gestionMuestraMicrobiologia": this.gestionMuestraMicrobiologia };
        parametros["plantilla"] = "GestionMuestraMicrobiologia.docx";
        parametros["salida"] = "GestionMuestraMicrobiologia.pdf";
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */
    GestionMuestraMicrobiologiaCrudComponent.prototype.accionesBuscar = function () {
        this.accion = 1;
        this.gestionMuestraMicrobiologiaGuardar = this.gestionMuestraMicrobiologiaActualizar = this.gestionMuestraMicrobiologiaEliminar = false;
        this.gestionMuestraMicrobiologiaBuscar = this.gestionMuestraMicrobiologiaAgregar = this.gestionMuestraMicrobiologiaCancelar = true;
    };
    GestionMuestraMicrobiologiaCrudComponent.prototype.buscarGestionMuestraMicrobiologiaFront = function (form) {
        this.accionesBuscar();
        var vgestionMuestraMicrobiologia = new _shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_4__["GestionMuestraMicrobiologia"]();
        vgestionMuestraMicrobiologia.from(this.gestionMuestraMicrobiologia);
        this.configuracionGestionMuestraMicrobiologia = new _shared_configurar_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_6__["ConfigurarGestionMuestraMicrobiologia"]();
        this.configuracionGestionMuestraMicrobiologia.permisosTabla = { "tabla": "gestionMuestraMicrobiologia", "permiso": 8 };
        this.configuracionGestionMuestraMicrobiologia.titulo = "Buscar " + this.permisosTabla.etiqueta;
        this.configuracionGestionMuestraMicrobiologia.gestionMuestraMicrobiologiaConsulta = vgestionMuestraMicrobiologia;
        this.permisosacciones();
        $("#buscarGestionMuestraMicrobiologia_" + this.nombre).modal();
    };
    GestionMuestraMicrobiologiaCrudComponent.prototype.buscarGestionMuestraMicrobiologiaBack = function (gestionMuestraMicrobiologia) {
        this.gestionMuestraMicrobiologia_service.getGestionMuestraMicrobiologiasByDto(gestionMuestraMicrobiologia, this.eventoSrvGestionMuestraMicrobiologiaBuscar, this);
    };
    GestionMuestraMicrobiologiaCrudComponent.prototype.eventoSrvGestionMuestraMicrobiologiaBuscar = function (lista, objeto) {
        objeto.lista_gestionMuestraMicrobiologias = lista;
        if (lista && lista.length > 0) {
            objeto.gestionMuestraMicrobiologia = lista[0];
            objeto.gestionMuestraMicrobiologiaLazy = false;
            objeto.gestionMuestraMicrobiologia_service.lazyGestionMuestraMicrobiologia(objeto.gestionMuestraMicrobiologia, objeto.evn_lazy_gestionMuestraMicrobiologia, objeto);
        }
    };
    GestionMuestraMicrobiologiaCrudComponent.prototype.guardarGestionMuestraMicrobiologiaFront = function (form) {
        this.accion = 5; // ********************************************************************************************** maquina
        this.guardarGestionMuestraMicrobiologiaBack(this.gestionMuestraMicrobiologia);
        this.accionesBuscar(); // ********************************************************************************* maquina
        this.permisosacciones();
    };
    GestionMuestraMicrobiologiaCrudComponent.prototype.guardarGestionMuestraMicrobiologiaBack = function (gestionMuestraMicrobiologia) {
        if (gestionMuestraMicrobiologia.usuarioUltMov == null)
            gestionMuestraMicrobiologia.usuarioUltMov = this.globalesService.dameUsuario();
        if (gestionMuestraMicrobiologia.status == null || gestionMuestraMicrobiologia.status == "")
            gestionMuestraMicrobiologia.status = 1;
        this.gestionMuestraMicrobiologia_service.guardarGestionMuestraMicrobiologia(gestionMuestraMicrobiologia, this.eventoSrvGestionMuestraMicrobiologiaGuardar, this);
    };
    GestionMuestraMicrobiologiaCrudComponent.prototype.eventoSrvGestionMuestraMicrobiologiaGuardar = function (gestionMuestraMicrobiologia, obj) {
        obj.gestionMuestraMicrobiologia = gestionMuestraMicrobiologia;
        bootbox.alert("Datos guardados con éxito");
        var aux = new _shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_4__["GestionMuestraMicrobiologia"]();
        aux.from(gestionMuestraMicrobiologia);
        obj.gestionMuestraMicrobiologiaChange.emit(aux);
        obj.gestionMuestraMicrobiologiaTablaChange.emit(aux);
        obj.gestionMuestraMicrobiologiaLazy = false;
        obj.gestionMuestraMicrobiologia_service.lazyGestionMuestraMicrobiologia(obj.gestionMuestraMicrobiologia, obj.evn_lazy_gestionMuestraMicrobiologia, obj);
        obj.accionesActualizar();
    };
    GestionMuestraMicrobiologiaCrudComponent.prototype.actualizarGestionMuestraMicrobiologiaFront = function (form) {
        this.accion = 3; // ************************************************************************************* maquina
        this.actualizarGestionMuestraMicrobiologiaBack(this.gestionMuestraMicrobiologia);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    };
    GestionMuestraMicrobiologiaCrudComponent.prototype.actualizarGestionMuestraMicrobiologiaBack = function (gestionMuestraMicrobiologia) {
        gestionMuestraMicrobiologia.usuarioUltMov = this.globalesService.dameUsuario();
        this.gestionMuestraMicrobiologia_service.actualizarGestionMuestraMicrobiologia(gestionMuestraMicrobiologia, this.eventoSrvGestionMuestraMicrobiologiaActualizar, this);
    };
    GestionMuestraMicrobiologiaCrudComponent.prototype.eventoSrvGestionMuestraMicrobiologiaActualizar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux = new _shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_4__["GestionMuestraMicrobiologia"]();
            // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.gestionMuestraMicrobiologiaLazy = false;
            obj.gestionMuestraMicrobiologia_service.lazyGestionMuestraMicrobiologia(obj.gestionMuestraMicrobiologia, obj.evn_lazy_gestionMuestraMicrobiologia, obj);
            // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.gestionMuestraMicrobiologia);
            obj.gestionMuestraMicrobiologiaChange.emit(aux);
            obj.gestionMuestraMicrobiologiaTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    };
    GestionMuestraMicrobiologiaCrudComponent.prototype.eliminarGestionMuestraMicrobiologiaFront = function (form) {
        this.accion = 4;
        this.eliminarGestionMuestraMicrobiologiaBack(this.gestionMuestraMicrobiologia);
        this.permisosacciones();
        this.accionesBuscar();
    };
    GestionMuestraMicrobiologiaCrudComponent.prototype.eliminarGestionMuestraMicrobiologiaBack = function (gestionMuestraMicrobiologia) {
        gestionMuestraMicrobiologia.usuarioUltMov = this.globalesService.dameUsuario();
        this.gestionMuestraMicrobiologia_service.eliminarGestionMuestraMicrobiologia(gestionMuestraMicrobiologia, this.eventoSrvGestionMuestraMicrobiologiaEliminar, this);
    };
    GestionMuestraMicrobiologiaCrudComponent.prototype.eventoSrvGestionMuestraMicrobiologiaEliminar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.gestionMuestraMicrobiologia = new _shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_4__["GestionMuestraMicrobiologia"]();
            obj.gestionMuestraMicrobiologiaChange.emit(obj.gestionMuestraMicrobiologia);
            obj.gestionMuestraMicrobiologiaTablaChange.emit(obj.gestionMuestraMicrobiologia);
            obj.limpiarCampos();
        }
    };
    GestionMuestraMicrobiologiaCrudComponent.prototype.cancelarGestionMuestraMicrobiologiaFront = function (form) {
        this.accion = 6;
        this.gestionMuestraMicrobiologiaCancelar = this.gestionMuestraMicrobiologiaGuardar = this.gestionMuestraMicrobiologiaActualizar = this.gestionMuestraMicrobiologiaEliminar = false;
        this.gestionMuestraMicrobiologiaBuscar = this.gestionMuestraMicrobiologiaAgregar = true;
        this.permisosacciones();
    };
    GestionMuestraMicrobiologiaCrudComponent.prototype.nuevoGestionMuestraMicrobiologiaFront = function (form) {
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
                this.gestionMuestraMicrobiologiaSeleccion = this.gestionMuestraMicrobiologiaAgregar = this.gestionMuestraMicrobiologiaBuscar = this.gestionMuestraMicrobiologiaActualizar = this.gestionMuestraMicrobiologiaEliminar = false;
                this.gestionMuestraMicrobiologiaGuardar = this.gestionMuestraMicrobiologiaCancelar = true;
            }.bind(this)
        });
    };
    GestionMuestraMicrobiologiaCrudComponent.prototype.configuarCombosObjetos = function () {
        this.lista_usuarioUltMovGestionMuestraMicrobiologiaUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovGestionMuestraMicrobiologiaUsuario, this);
        this.lista_idoficioDonacionGestionMuestraMicrobiologiaOficioDonacion = [];
        this.oficioDonacion_service.getOficioDonacionesActivos(this.evtGetIdoficioDonacionGestionMuestraMicrobiologiaOficioDonacion, this);
    };
    GestionMuestraMicrobiologiaCrudComponent.prototype.configurarTablasConjuntos = function () {
    };
    GestionMuestraMicrobiologiaCrudComponent.prototype.accionesActualizar = function () {
        this.accion = 7;
        this.gestionMuestraMicrobiologiaBuscar = this.gestionMuestraMicrobiologiaAgregar = this.gestionMuestraMicrobiologiaSeleccion = this.gestionMuestraMicrobiologiaGuardar = false;
        this.gestionMuestraMicrobiologiaActualizar = this.gestionMuestraMicrobiologiaEliminar = this.gestionMuestraMicrobiologiaCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    };
    GestionMuestraMicrobiologiaCrudComponent.prototype.evtGestionMuestraMicrobiologiaSeleccionado = function (gestionMuestraMicrobiologia) {
        this.gestionMuestraMicrobiologia = new _shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_4__["GestionMuestraMicrobiologia"]();
        this.gestionMuestraMicrobiologia.from(gestionMuestraMicrobiologia);
        this.gestionMuestraMicrobiologiaLazy = false;
        this.gestionMuestraMicrobiologia_service.lazyGestionMuestraMicrobiologia(this.gestionMuestraMicrobiologia, this.evn_lazy_gestionMuestraMicrobiologia, this);
        this.accion = 7;
        this.gestionMuestraMicrobiologiaBuscar = this.gestionMuestraMicrobiologiaAgregar = this.gestionMuestraMicrobiologiaSeleccion = this.gestionMuestraMicrobiologiaGuardar = false;
        this.gestionMuestraMicrobiologiaActualizar = this.gestionMuestraMicrobiologiaEliminar = this.gestionMuestraMicrobiologiaCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarGestionMuestraMicrobiologia_" + this.nombre).modal("hide");
    };
    GestionMuestraMicrobiologiaCrudComponent.prototype.ngOnInit = function () {
        this.accion = 0; // *********************************************************************************************************** maquina
        this.gestionMuestraMicrobiologiaSeleccion = this.gestionMuestraMicrobiologiaCancelar = this.gestionMuestraMicrobiologiaGuardar = this.gestionMuestraMicrobiologiaActualizar = this.gestionMuestraMicrobiologiaEliminar = false; // ******************** maquina
        this.gestionMuestraMicrobiologiaBuscar = this.gestionMuestraMicrobiologiaAgregar = true; // ************************************************************************************* maquina
        this.permisosacciones();
    };
    GestionMuestraMicrobiologiaCrudComponent.prototype.permisosacciones = function () {
        if (this.gestionMuestraMicrobiologiaBuscar)
            this.gestionMuestraMicrobiologiaBuscar = this.globalesService.pbuscar(this, "gestionMuestraMicrobiologia");
        if (this.gestionMuestraMicrobiologiaActualizar)
            this.gestionMuestraMicrobiologiaActualizar = (this.globalesService.pacutalizar(this, "gestionMuestraMicrobiologia") && this.globalesService.pbuscar(this, "gestionMuestraMicrobiologia"));
        if (this.gestionMuestraMicrobiologiaEliminar)
            this.gestionMuestraMicrobiologiaEliminar = (this.globalesService.peliminar(this, "gestionMuestraMicrobiologia") && this.globalesService.pbuscar(this, "gestionMuestraMicrobiologia"));
        if (this.gestionMuestraMicrobiologiaAgregar)
            this.gestionMuestraMicrobiologiaAgregar = this.globalesService.pagregar(this, "gestionMuestraMicrobiologia");
    };
    GestionMuestraMicrobiologiaCrudComponent.prototype.permisosaccionesInicio = function () {
        this.gestionMuestraMicrobiologiaSeleccion = this.gestionMuestraMicrobiologiaCancelar = this.gestionMuestraMicrobiologiaGuardar = this.gestionMuestraMicrobiologiaActualizar = this.gestionMuestraMicrobiologiaEliminar = false; // *************************** maquina
        this.gestionMuestraMicrobiologiaBuscar = this.gestionMuestraMicrobiologiaAgregar = true; // ************************************************************************************* maquina
        this.accion = 0; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    GestionMuestraMicrobiologiaCrudComponent.prototype.limpiarCampos = function () {
        this.gestionMuestraMicrobiologia = new _shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_4__["GestionMuestraMicrobiologia"]();
        this.usuarioUltMovGestionMuestraMicrobiologiaUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.idoficioDonacionGestionMuestraMicrobiologiaOficioDonacionEleccion = new _oficio_donaciones_shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_14__["OficioDonacion"]();
        this.gestionMuestraMicrobiologiaChange.emit(this.gestionMuestraMicrobiologia);
        this.gestionMuestraMicrobiologiaSeleccion = this.gestionMuestraMicrobiologiaCancelar = this.gestionMuestraMicrobiologiaGuardar = this.gestionMuestraMicrobiologiaActualizar = this.gestionMuestraMicrobiologiaEliminar = false; // *************************** maquina
        this.gestionMuestraMicrobiologiaBuscar = this.gestionMuestraMicrobiologiaAgregar = true; // ************************************************************************************* maquina
        this.accion = 6; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], GestionMuestraMicrobiologiaCrudComponent.prototype, "ocultarConjuntosGestionMuestraMicrobiologia", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GestionMuestraMicrobiologiaCrudComponent.prototype, "nombre", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], GestionMuestraMicrobiologiaCrudComponent.prototype, "validaciones", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GestionMuestraMicrobiologiaCrudComponent.prototype, "validacionesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_4__["GestionMuestraMicrobiologia"])
    ], GestionMuestraMicrobiologiaCrudComponent.prototype, "gestionMuestraMicrobiologia", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GestionMuestraMicrobiologiaCrudComponent.prototype, "gestionMuestraMicrobiologiaChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GestionMuestraMicrobiologiaCrudComponent.prototype, "gestionMuestraMicrobiologiaTablaChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], GestionMuestraMicrobiologiaCrudComponent.prototype, "enable", void 0);
    GestionMuestraMicrobiologiaCrudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gestion-muestra-microbiologia-crud',
            template: __webpack_require__(/*! ./gestion-muestra-microbiologia-crud.component.html */ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-crud/gestion-muestra-microbiologia-crud.component.html"),
            styles: [__webpack_require__(/*! ./gestion-muestra-microbiologia-crud.component.css */ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-crud/gestion-muestra-microbiologia-crud.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
                _shared_gestion_muestra_microbiologia_service__WEBPACK_IMPORTED_MODULE_5__["GestionMuestraMicrobiologiaService"],
                _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
                _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__["EntidadFederativaService"],
                _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__["PerfilRedIsssteService"],
                //                PerfilBtcService,
                _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"],
                _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcService"],
                _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__["PerfilService"],
                _oficio_donaciones_shared_oficio_donacion_service__WEBPACK_IMPORTED_MODULE_15__["OficioDonacionService"],
                _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_18__["CausaMuerteService"],
                _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_17__["SolicitudEvaluacionCornealService"],
                _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_16__["RecepcionSolicitudEvaluacionService"]
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
            _shared_gestion_muestra_microbiologia_service__WEBPACK_IMPORTED_MODULE_5__["GestionMuestraMicrobiologiaService"],
            _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
            _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcService"],
            _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__["PerfilRedIsssteService"],
            _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"],
            _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__["EntidadFederativaService"],
            _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__["PerfilService"],
            _oficio_donaciones_shared_oficio_donacion_service__WEBPACK_IMPORTED_MODULE_15__["OficioDonacionService"],
            _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_16__["RecepcionSolicitudEvaluacionService"],
            _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_17__["SolicitudEvaluacionCornealService"],
            _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_18__["CausaMuerteService"]])
    ], GestionMuestraMicrobiologiaCrudComponent);
    return GestionMuestraMicrobiologiaCrudComponent;
}());



/***/ }),

/***/ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-list-kendo/gestion-muestra-microbiologia-list-kendo.component.css":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-list-kendo/gestion-muestra-microbiologia-list-kendo.component.css ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Tipos para gestionMuestraMicrobiologia-list-kendo*/\nh3 { text-transform: uppercase;} \n"

/***/ }),

/***/ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-list-kendo/gestion-muestra-microbiologia-list-kendo.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-list-kendo/gestion-muestra-microbiologia-list-kendo.component.html ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!usuariologueado\" >\n    <div class=\"card\">\n        <div align=\"center\" class=\"card-header\"><h3>{{configuracionGestionMuestraMicrobiologia.titulo}}</h3></div>\n        <div class=\"card-body\">\n            <div id=\"div_gestionMuestraMicrobiologia_{{nombregrid}}\">\n                <div id=\"grid_gestionMuestraMicrobiologia_{{nombregrid}}\"></div>\n            </div>\n        </div>\t\t\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-list-kendo/gestion-muestra-microbiologia-list-kendo.component.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-list-kendo/gestion-muestra-microbiologia-list-kendo.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: GestionMuestraMicrobiologiaListKendoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionMuestraMicrobiologiaListKendoComponent", function() { return GestionMuestraMicrobiologiaListKendoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/gestion-muestra-microbiologia */ "./src/app/gestion-muestra-microbiologias/shared/gestion-muestra-microbiologia.ts");
/* harmony import */ var _shared_configurar_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/configurar-gestion-muestra-microbiologia */ "./src/app/gestion-muestra-microbiologias/shared/configurar-gestion-muestra-microbiologia.ts");
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
var GestionMuestraMicrobiologiaListKendoComponent = /** @class */ (function () {
    function GestionMuestraMicrobiologiaListKendoComponent(urlprovider, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    globalesService) {
        this.urlprovider = urlprovider;
        this.coreService = coreService;
        this.globalesService = globalesService;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "", "permiso": 0, "etiqueta": "" };
        this.gestionMuestraMicrobiologiaSeleccionado = new _shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_3__["GestionMuestraMicrobiologia"]();
        this.configuracionGestionMuestraMicrobiologia = new _shared_configurar_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_4__["ConfigurarGestionMuestraMicrobiologia"]();
        this.nombregrid = "";
        this.evtGestionMuestraMicrobiologiaSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "gestionMuestraMicrobiologia";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'gestionMuestraMicrobiologia'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'gestionMuestraMicrobiologia'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }
    GestionMuestraMicrobiologiaListKendoComponent.prototype.actualizaTituloInicial = function () {
        if (this.configuracionGestionMuestraMicrobiologia.titulo.indexOf("Catálogo") != -1) {
            this.configuracionGestionMuestraMicrobiologia.titulo = "Catálogo " + this.permisosTabla.etiqueta;
        }
    };
    GestionMuestraMicrobiologiaListKendoComponent.prototype.ngOnChanges = function (changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionGestionMuestraMicrobiologia && changes.configuracionGestionMuestraMicrobiologia.currentValue &&
            (changes.configuracionGestionMuestraMicrobiologia.previousValue instanceof _shared_configurar_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_4__["ConfigurarGestionMuestraMicrobiologia"])) {
            if (changes.configuracionGestionMuestraMicrobiologia.currentValue.permisosAtributos)
                this.permisosAtributos = changes.configuracionGestionMuestraMicrobiologia.currentValue.permisosAtributos;
            if (changes.configuracionGestionMuestraMicrobiologia.currentValue.permisosTabla)
                this.permisosTabla = changes.configuracionGestionMuestraMicrobiologia.currentValue.permisosTabla;
            if ($("#grid_gestionMuestraMicrobiologia_" + this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    };
    GestionMuestraMicrobiologiaListKendoComponent.prototype.ngOnInit = function () {
        self["grid_gestionMuestraMicrobiologia_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var ejecutarpermisos = true;
        if (this.configuracionGestionMuestraMicrobiologia.permisosAtributos &&
            this.configuracionGestionMuestraMicrobiologia.permisosTabla)
            ejecutarpermisos = false;
        if (this.usuariologueado && ejecutarpermisos) {
            if (this.usuariologueado.perfil) {
                var tablas = [
                    "gestionMuestraMicrobiologia",
                ];
                var parametros = {
                    "id_usu": this.usuariologueado.id,
                    "tablas": tablas,
                    "id_exp": -1
                };
                this.coreService.permisos(parametros, this.evtCorePermisos, this);
                //                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                //                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'GestionMuestraMicrobiologia'";
                //                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'GestionMuestraMicrobiologia'";
                //                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'GestionMuestraMicrobiologia'";
                //                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
                //                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
                //                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
            }
        }
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        if (this.configuracionGestionMuestraMicrobiologia.permisosAtributos)
            this.permisosAtributos = this.configuracionGestionMuestraMicrobiologia.permisosAtributos;
        if (this.configuracionGestionMuestraMicrobiologia.permisosTabla)
            this.permisosTabla = this.configuracionGestionMuestraMicrobiologia.permisosTabla;
        this.configuraGrid();
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    GestionMuestraMicrobiologiaListKendoComponent.prototype.evtCorePermisos = function (permisos, obj) {
        if (permisos && permisos.gestionMuestraMicrobiologia && permisos.gestionMuestraMicrobiologia.PermisoAtributo && permisos.gestionMuestraMicrobiologia.PermisoAtributo.length > 0
            && !obj.configuracionGestionMuestraMicrobiologia.permisosAtributos) {
            obj.globalesService.evtAtributos(permisos.gestionMuestraMicrobiologia.PermisoAtributo, obj);
            //            obj.permisosAtributos = permisos.GestionMuestraMicrobiologia.PermisoAtributo ;
        }
        if (permisos && permisos.gestionMuestraMicrobiologia && permisos.gestionMuestraMicrobiologia.PermisoTabla && permisos.gestionMuestraMicrobiologia.PermisoTabla.length > 0
            && !obj.configuracionGestionMuestraMicrobiologia.permisosTabla) {
            obj.globalesService.evtTablas(permisos.gestionMuestraMicrobiologia.PermisoTabla, obj);
            //            obj.permisosTabla = permisos.GestionMuestraMicrobiologia.PermisoTabla[0] ;
            //            obj.permisosaccionesInicio();
        }
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    GestionMuestraMicrobiologiaListKendoComponent.prototype.configuraGrid = function () {
        var _this = this;
        if ($("#grid_gestionMuestraMicrobiologia_" + this.nombregrid).data("kendoGrid")) {
        }
        else {
            setTimeout(function () {
                _this.inicializaGrid();
                _this.configuraGrid();
            }, 300);
        }
    };
    GestionMuestraMicrobiologiaListKendoComponent.prototype.sourcegrid = function () {
        function completar(e) {
            (e);
        }
        ;
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        if (this.configuracionGestionMuestraMicrobiologia.campoAgEl != null
            && this.configuracionGestionMuestraMicrobiologia.gestionMuestraMicrobiologiaConsulta
            && this.configuracionGestionMuestraMicrobiologia.gestionMuestraMicrobiologiaConsulta.isOk
            && !this.configuracionGestionMuestraMicrobiologia.gestionMuestraMicrobiologiaConsulta.isOk())
            return;
        if (this.configuracionGestionMuestraMicrobiologia.gestionMuestraMicrobiologiaConsulta) {
            if (!this.configuracionGestionMuestraMicrobiologia.campoAgEl && this.configuracionGestionMuestraMicrobiologia.gestionMuestraMicrobiologiaConsulta instanceof _shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_3__["GestionMuestraMicrobiologia"])
                this.configuracionGestionMuestraMicrobiologia.rutaLista = this.crudServiceBaseUrl + "/getGestionMuestraMicrobiologiasByDto";
            this.lista = this.configuracionGestionMuestraMicrobiologia.lecturaP(completar, this.configuracionGestionMuestraMicrobiologia.gestionMuestraMicrobiologiaConsulta);
            if (this.configuracionGestionMuestraMicrobiologia.campoAgEl) {
                this.rutaAgregar = this.configuracionGestionMuestraMicrobiologia.agregarP(function () { }, this.configuracionGestionMuestraMicrobiologia.campoAgEl);
                this.rutaEliminar = this.configuracionGestionMuestraMicrobiologia.eliminarP(function () { }, this.configuracionGestionMuestraMicrobiologia.campoAgEl);
            }
            else {
                this.rutaAgregar = this.configuracionGestionMuestraMicrobiologia.agregarP(completar, this.configuracionGestionMuestraMicrobiologia.gestionMuestraMicrobiologiaConsulta);
                this.rutaEliminar = this.configuracionGestionMuestraMicrobiologia.eliminarP(completar, this.configuracionGestionMuestraMicrobiologia.gestionMuestraMicrobiologiaConsulta);
            }
        }
        else {
            this.lista = this.configuracionGestionMuestraMicrobiologia.lectura();
            this.rutaAgregar = this.configuracionGestionMuestraMicrobiologia.agregar();
            this.rutaEliminar = this.configuracionGestionMuestraMicrobiologia.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this, "gestionMuestraMicrobiologia", "id")) {
            modelo["id"] = "id";
        }
        var campos = {};
        if (this.globalesService.avisible(this, "gestionMuestraMicrobiologia", "id")) {
            campos["id"] = { editable: false, nullable: true, type: "number" };
        }
        if (this.globalesService.avisible(this, "gestionMuestraMicrobiologia", "idoficioDonacion")) {
            campos["idoficioDonacion"] = { editable: this.globalesService.aenable(this, "gestionMuestraMicrobiologia", "idoficioDonacion"), nullable: true, type: "object", defaultValue: { "id": "", "fechaBaja": "" } };
        }
        if (this.globalesService.avisible(this, "gestionMuestraMicrobiologia", "revision")) {
            campos["revision"] = { editable: this.globalesService.aenable(this, "gestionMuestraMicrobiologia", "revision"), nullable: true };
        }
        if (this.globalesService.avisible(this, "gestionMuestraMicrobiologia", "almacenMuestra")) {
            campos["almacenMuestra"] = { editable: this.globalesService.aenable(this, "gestionMuestraMicrobiologia", "almacenMuestra"), nullable: true };
        }
        if (this.globalesService.avisible(this, "gestionMuestraMicrobiologia", "almacenHora")) {
            campos["almacenHora"] = { editable: this.globalesService.aenable(this, "gestionMuestraMicrobiologia", "almacenHora"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "gestionMuestraMicrobiologia", "envio")) {
            campos["envio"] = { editable: this.globalesService.aenable(this, "gestionMuestraMicrobiologia", "envio"), nullable: true };
        }
        if (this.globalesService.avisible(this, "gestionMuestraMicrobiologia", "fechaInicioRevision")) {
            campos["fechaInicioRevision"] = { editable: this.globalesService.aenable(this, "gestionMuestraMicrobiologia", "fechaInicioRevision"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "gestionMuestraMicrobiologia", "horaInicioRevision")) {
            campos["horaInicioRevision"] = { editable: this.globalesService.aenable(this, "gestionMuestraMicrobiologia", "horaInicioRevision"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "gestionMuestraMicrobiologia", "comentario")) {
            campos["comentario"] = { editable: this.globalesService.aenable(this, "gestionMuestraMicrobiologia", "comentario"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "gestionMuestraMicrobiologia", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this, "gestionMuestraMicrobiologia", "fechaRegistro"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "gestionMuestraMicrobiologia", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this, "gestionMuestraMicrobiologia", "fechaActualizacion"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "gestionMuestraMicrobiologia", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this, "gestionMuestraMicrobiologia", "fechaBaja"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "gestionMuestraMicrobiologia", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this, "gestionMuestraMicrobiologia", "usuarioUltMov"), nullable: true, type: "object", defaultValue: { "id": "", "password": "" } };
        }
        if (this.globalesService.avisible(this, "gestionMuestraMicrobiologia", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this, "gestionMuestraMicrobiologia", "status"), nullable: true, type: "string", defaultValue: "1" };
        }
        modelo["fields"] = campos;
        var slf = this;
        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionGestionMuestraMicrobiologia.rutaActualizar,
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
                        if (elem.horaInicioRevision && typeof elem.horaInicioRevision === "number") {
                            elem.horaInicioRevision = kendo.parseDate(new Date(elem.horaInicioRevision), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.fechaBaja && typeof elem.fechaBaja === "number") {
                            elem.fechaBaja = kendo.parseDate(new Date(elem.fechaBaja), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.fechaInicioRevision && typeof elem.fechaInicioRevision === "number") {
                            elem.fechaInicioRevision = kendo.parseDate(new Date(elem.fechaInicioRevision), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.fechaRegistro && typeof elem.fechaRegistro === "number") {
                            elem.fechaRegistro = kendo.parseDate(new Date(elem.fechaRegistro), "yyyy-MM-ddTHH:mm:ss.fffZ");
                        }
                        if (elem.almacenHora && typeof elem.almacenHora === "number") {
                            elem.almacenHora = kendo.parseDate(new Date(elem.almacenHora), "yyyy-MM-ddTHH:mm:ss.fffZ");
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
            if (self.configuracionGestionMuestraMicrobiologia.campoAgEl) {
                if (self.configuracionGestionMuestraMicrobiologia.tipocampoAgEl == "GestionMuestraMicrobiologiaGestionMuestraMicrobiologia")
                    self.configuracionGestionMuestraMicrobiologia.campoAgEl.gestionMuestraMicrobiologia2 = options.models[0];
                else
                    self.configuracionGestionMuestraMicrobiologia.campoAgEl.gestionMuestraMicrobiologia = options.models[0];
                return JSON.stringify(self.configuracionGestionMuestraMicrobiologia.campoAgEl);
            }
            else if (est.options[operation].data.models.gestionMuestraMicrobiologia) {
                est.options[operation].data.models.gestionMuestraMicrobiologia2 = options.models[0];
                return JSON.stringify(est.options[operation].data.models);
            }
            return JSON.stringify(options.models[0]);
        }
    };
    GestionMuestraMicrobiologiaListKendoComponent.prototype.inicializaGrid = function () {
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        this.sourcegrid();
        var columnas = [];
        if (this.globalesService.avisible(this, "gestionMuestraMicrobiologia", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this, "gestionMuestraMicrobiologia", "id"), editor: this.globalesService.txtNumero });
        }
        if (this.globalesService.avisible(this, "gestionMuestraMicrobiologia", "idoficioDonacion")) {
            columnas.push({ field: "idoficioDonacion", title: this.globalesService.aetiqueta(this, "gestionMuestraMicrobiologia", "idoficioDonacion"), editor: idoficioDonacionDropDownEditor, template: " #if (idoficioDonacion){#   #=idoficioDonacion.fechaBaja# # } # " });
        }
        if (this.globalesService.avisible(this, "gestionMuestraMicrobiologia", "revision")) {
            columnas.push({ field: "revision", title: this.globalesService.aetiqueta(this, "gestionMuestraMicrobiologia", "revision") });
        }
        if (this.globalesService.avisible(this, "gestionMuestraMicrobiologia", "almacenMuestra")) {
            columnas.push({ field: "almacenMuestra", title: this.globalesService.aetiqueta(this, "gestionMuestraMicrobiologia", "almacenMuestra") });
        }
        if (this.globalesService.avisible(this, "gestionMuestraMicrobiologia", "almacenHora")) {
            columnas.push({ field: "almacenHora", title: this.globalesService.aetiqueta(this, "gestionMuestraMicrobiologia", "almacenHora"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "gestionMuestraMicrobiologia", "envio")) {
            columnas.push({ field: "envio", title: this.globalesService.aetiqueta(this, "gestionMuestraMicrobiologia", "envio") });
        }
        if (this.globalesService.avisible(this, "gestionMuestraMicrobiologia", "fechaInicioRevision")) {
            columnas.push({ field: "fechaInicioRevision", title: this.globalesService.aetiqueta(this, "gestionMuestraMicrobiologia", "fechaInicioRevision"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "gestionMuestraMicrobiologia", "horaInicioRevision")) {
            columnas.push({ field: "horaInicioRevision", title: this.globalesService.aetiqueta(this, "gestionMuestraMicrobiologia", "horaInicioRevision"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "gestionMuestraMicrobiologia", "comentario")) {
            columnas.push({ field: "comentario", title: this.globalesService.aetiqueta(this, "gestionMuestraMicrobiologia", "comentario"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "gestionMuestraMicrobiologia", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this, "gestionMuestraMicrobiologia", "fechaRegistro"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "gestionMuestraMicrobiologia", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this, "gestionMuestraMicrobiologia", "fechaActualizacion"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "gestionMuestraMicrobiologia", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this, "gestionMuestraMicrobiologia", "fechaBaja"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "gestionMuestraMicrobiologia", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this, "gestionMuestraMicrobiologia", "usuarioUltMov"), editor: usuarioUltMovDropDownEditor, template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # " });
        }
        if (this.globalesService.avisible(this, "gestionMuestraMicrobiologia", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this, "gestionMuestraMicrobiologia", "status"), editor: this.globalesService.estadoDropDownEditor,
                template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this, "gestionMuestraMicrobiologia"))
            op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this, "gestionMuestraMicrobiologia")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this, "gestionMuestraMicrobiologia")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this, "gestionMuestraMicrobiologia") && this.configuracionGestionMuestraMicrobiologia.gestionMuestraMicrobiologiaConsulta != null) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid)
            $("#grid_gestionMuestraMicrobiologia_" + this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_gestionMuestraMicrobiologia_" + this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionGestionMuestraMicrobiologia.altoComponente,
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
        this.grid = $("#grid_gestionMuestraMicrobiologia_" + this.nombregrid).data("kendoGrid");
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
    GestionMuestraMicrobiologiaListKendoComponent.prototype.showDetails = function (e) {
        e.preventDefault();
        //        this.grid = $("#grid_gestionMuestraMicrobiologia_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        var gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.gestionMuestraMicrobiologiaSeleccionado = new _shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_3__["GestionMuestraMicrobiologia"]();
        gridac.gestionMuestraMicrobiologiaSeleccionado.from(dataItem);
        gridac.evtGestionMuestraMicrobiologiaSeleccionado.emit(gridac.gestionMuestraMicrobiologiaSeleccionado);
        (gridac.gestionMuestraMicrobiologiaSeleccionado);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_configurar_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_4__["ConfigurarGestionMuestraMicrobiologia"])
    ], GestionMuestraMicrobiologiaListKendoComponent.prototype, "configuracionGestionMuestraMicrobiologia", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GestionMuestraMicrobiologiaListKendoComponent.prototype, "nombregrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("gestionMuestraMicrobiologiaSeleccionado"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GestionMuestraMicrobiologiaListKendoComponent.prototype, "evtGestionMuestraMicrobiologiaSeleccionado", void 0);
    GestionMuestraMicrobiologiaListKendoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gestion-muestra-microbiologia-list-kendo',
            template: __webpack_require__(/*! ./gestion-muestra-microbiologia-list-kendo.component.html */ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-list-kendo/gestion-muestra-microbiologia-list-kendo.component.html"),
            styles: [__webpack_require__(/*! ./gestion-muestra-microbiologia-list-kendo.component.css */ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-list-kendo/gestion-muestra-microbiologia-list-kendo.component.css")],
            providers: [
                //             PermisoTablaService,
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_url_provider__WEBPACK_IMPORTED_MODULE_1__["URLProvider"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"]])
    ], GestionMuestraMicrobiologiaListKendoComponent);
    return GestionMuestraMicrobiologiaListKendoComponent;
}());



/***/ }),

/***/ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-routing.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: GestionMuestraMicrobiologiaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionMuestraMicrobiologiaRoutingModule", function() { return GestionMuestraMicrobiologiaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gestion_muestra_microbiologias_gestion_muestra_microbiologia_list_kendo_gestion_muestra_microbiologia_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gestion-muestra-microbiologias/gestion-muestra-microbiologia-list-kendo/gestion-muestra-microbiologia-list-kendo.component */ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-list-kendo/gestion-muestra-microbiologia-list-kendo.component.ts");
/* harmony import */ var _gestion_muestra_microbiologias_gestion_muestra_microbiologia_crud_gestion_muestra_microbiologia_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gestion-muestra-microbiologias/gestion-muestra-microbiologia-crud/gestion-muestra-microbiologia-crud.component */ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-crud/gestion-muestra-microbiologia-crud.component.ts");
/* harmony import */ var _gestion_muestra_microbiologias_gestion_muestra_microbiologia_table_gestion_muestra_microbiologia_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gestion-muestra-microbiologias/gestion-muestra-microbiologia-table/gestion-muestra-microbiologia-table.component */ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-table/gestion-muestra-microbiologia-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'gestion-muestra-microbiologia-list-kendo', component: _gestion_muestra_microbiologias_gestion_muestra_microbiologia_list_kendo_gestion_muestra_microbiologia_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__["GestionMuestraMicrobiologiaListKendoComponent"] },
    { path: 'gestion-muestra-microbiologia-crud', component: _gestion_muestra_microbiologias_gestion_muestra_microbiologia_crud_gestion_muestra_microbiologia_crud_component__WEBPACK_IMPORTED_MODULE_3__["GestionMuestraMicrobiologiaCrudComponent"] },
    { path: 'gestion-muestra-microbiologia-table', component: _gestion_muestra_microbiologias_gestion_muestra_microbiologia_table_gestion_muestra_microbiologia_table_component__WEBPACK_IMPORTED_MODULE_4__["GestionMuestraMicrobiologiaTableComponent"] },
];
var GestionMuestraMicrobiologiaRoutingModule = /** @class */ (function () {
    function GestionMuestraMicrobiologiaRoutingModule() {
    }
    GestionMuestraMicrobiologiaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], GestionMuestraMicrobiologiaRoutingModule);
    return GestionMuestraMicrobiologiaRoutingModule;
}());



/***/ }),

/***/ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-table/gestion-muestra-microbiologia-table.component.css":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-table/gestion-muestra-microbiologia-table.component.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-table/gestion-muestra-microbiologia-table.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-table/gestion-muestra-microbiologia-table.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"usuariologueado\" >\n<div class=\"card\">\n<div class=\"card-header\"><h1>Busqueda {{permisosTabla?.etiqueta}}</h1></div>\n<div class=\"card-body\">\n<div class=\"container-fluid\" >    \n\n<table *ngIf=\"muestraTabla\" id=\"tabla_gestionMuestraMicrobiologia\" class=\"table \" cellspacing=\"0\" width=\"100%\">\n    <thead>\n        <tr>\n            <th [class.hidden]=\"!avisible('gestionMuestraMicrobiologia','id')\" >{{aetiqueta('gestionMuestraMicrobiologia','id')}}</th>\n            <th [class.hidden]=\"!avisible('gestionMuestraMicrobiologia','idoficioDonacion')\" >{{aetiqueta('gestionMuestraMicrobiologia','idoficioDonacion')}}</th>\n            <th [class.hidden]=\"!avisible('gestionMuestraMicrobiologia','revision')\" >{{aetiqueta('gestionMuestraMicrobiologia','revision')}}</th>\n            <th [class.hidden]=\"!avisible('gestionMuestraMicrobiologia','almacenMuestra')\" >{{aetiqueta('gestionMuestraMicrobiologia','almacenMuestra')}}</th>\n            <th [class.hidden]=\"!avisible('gestionMuestraMicrobiologia','almacenHora')\" >{{aetiqueta('gestionMuestraMicrobiologia','almacenHora')}}</th>\n            <th [class.hidden]=\"!avisible('gestionMuestraMicrobiologia','envio')\" >{{aetiqueta('gestionMuestraMicrobiologia','envio')}}</th>\n            <th [class.hidden]=\"!avisible('gestionMuestraMicrobiologia','fechaInicioRevision')\" >{{aetiqueta('gestionMuestraMicrobiologia','fechaInicioRevision')}}</th>\n            <th [class.hidden]=\"!avisible('gestionMuestraMicrobiologia','horaInicioRevision')\" >{{aetiqueta('gestionMuestraMicrobiologia','horaInicioRevision')}}</th>\n            <th [class.hidden]=\"!avisible('gestionMuestraMicrobiologia','comentario')\" >{{aetiqueta('gestionMuestraMicrobiologia','comentario')}}</th>\n            <th [class.hidden]=\"!avisible('gestionMuestraMicrobiologia','fechaRegistro')\" >{{aetiqueta('gestionMuestraMicrobiologia','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('gestionMuestraMicrobiologia','fechaActualizacion')\" >{{aetiqueta('gestionMuestraMicrobiologia','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('gestionMuestraMicrobiologia','fechaBaja')\" >{{aetiqueta('gestionMuestraMicrobiologia','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('gestionMuestraMicrobiologia','usuarioUltMov')\" >{{aetiqueta('gestionMuestraMicrobiologia','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('gestionMuestraMicrobiologia','status')\" >{{aetiqueta('gestionMuestraMicrobiologia','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </thead>\n    <tfoot>\n        <tr>\n            <th [class.hidden]=\"!avisible('gestionMuestraMicrobiologia','id')\" >{{aetiqueta('gestionMuestraMicrobiologia','id')}}</th>\n            <th [class.hidden]=\"!avisible('gestionMuestraMicrobiologia','idoficioDonacion')\" >{{aetiqueta('gestionMuestraMicrobiologia','idoficioDonacion')}}</th>\n            <th [class.hidden]=\"!avisible('gestionMuestraMicrobiologia','revision')\" >{{aetiqueta('gestionMuestraMicrobiologia','revision')}}</th>\n            <th [class.hidden]=\"!avisible('gestionMuestraMicrobiologia','almacenMuestra')\" >{{aetiqueta('gestionMuestraMicrobiologia','almacenMuestra')}}</th>\n            <th [class.hidden]=\"!avisible('gestionMuestraMicrobiologia','almacenHora')\" >{{aetiqueta('gestionMuestraMicrobiologia','almacenHora')}}</th>\n            <th [class.hidden]=\"!avisible('gestionMuestraMicrobiologia','envio')\" >{{aetiqueta('gestionMuestraMicrobiologia','envio')}}</th>\n            <th [class.hidden]=\"!avisible('gestionMuestraMicrobiologia','fechaInicioRevision')\" >{{aetiqueta('gestionMuestraMicrobiologia','fechaInicioRevision')}}</th>\n            <th [class.hidden]=\"!avisible('gestionMuestraMicrobiologia','horaInicioRevision')\" >{{aetiqueta('gestionMuestraMicrobiologia','horaInicioRevision')}}</th>\n            <th [class.hidden]=\"!avisible('gestionMuestraMicrobiologia','comentario')\" >{{aetiqueta('gestionMuestraMicrobiologia','comentario')}}</th>\n            <th [class.hidden]=\"!avisible('gestionMuestraMicrobiologia','fechaRegistro')\" >{{aetiqueta('gestionMuestraMicrobiologia','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('gestionMuestraMicrobiologia','fechaActualizacion')\" >{{aetiqueta('gestionMuestraMicrobiologia','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('gestionMuestraMicrobiologia','fechaBaja')\" >{{aetiqueta('gestionMuestraMicrobiologia','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('gestionMuestraMicrobiologia','usuarioUltMov')\" >{{aetiqueta('gestionMuestraMicrobiologia','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('gestionMuestraMicrobiologia','status')\" >{{aetiqueta('gestionMuestraMicrobiologia','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </tfoot>\n</table>\n</div>\n<app-gestion-muestra-microbiologia [class.hidden]=\"primero\" [(gestionMuestraMicrobiologia)]=\"gestionMuestraMicrobiologiaSeleccionado\" (gestionMuestraMicrobiologiaTablaChange)=\"cambio_gestionMuestraMicrobiologia($event)\"> </app-gestion-muestra-microbiologia>    \n</div>\n</div>\n</div>\n\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-table/gestion-muestra-microbiologia-table.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-table/gestion-muestra-microbiologia-table.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: GestionMuestraMicrobiologiaTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionMuestraMicrobiologiaTableComponent", function() { return GestionMuestraMicrobiologiaTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/gestion-muestra-microbiologia */ "./src/app/gestion-muestra-microbiologias/shared/gestion-muestra-microbiologia.ts");
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






var GestionMuestraMicrobiologiaTableComponent = /** @class */ (function () {
    function GestionMuestraMicrobiologiaTableComponent(globalesService, permisoAtributoService, permisoTablaService, urlProvider) {
        this.globalesService = globalesService;
        this.permisoAtributoService = permisoAtributoService;
        this.permisoTablaService = permisoTablaService;
        this.urlProvider = urlProvider;
        this.primero = true;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "gestionMuestraMicrobiologia", "permiso": 0, "etiqueta": "" };
        this.ptabla = false;
        this.pattr = false;
        this.gestionMuestraMicrobiologiaSeleccionado = new _shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_1__["GestionMuestraMicrobiologia"]();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                discon = "with perfil.id = " + this.usuariologueado.perfil.id;
                var cadena2 = "select pa from PermisoTabla as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'gestionMuestraMicrobiologia'";
                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
            }
        }
    }
    GestionMuestraMicrobiologiaTableComponent.prototype.evtTablas = function (lista, obj) {
        if (lista.length >= 0) {
            obj.permisosTabla = lista[0];
            obj.ptabla = true;
            var discon = "with perfil.id = " + obj.usuariologueado.perfil.id;
            var cadena1 = "select pa from PermisoAtributo as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'gestionMuestraMicrobiologia'";
            obj.permisoAtributoService.custom(cadena1, obj.evtAtributos, obj);
        }
    };
    GestionMuestraMicrobiologiaTableComponent.prototype.evtAtributos = function (lista, obj) {
        obj.permisosAtributos = lista;
        obj.pattr = true;
        if (obj.ptabla && obj.pattr) {
            setTimeout(function () { obj.getColumnas(obj); }, 500);
        }
    };
    Object.defineProperty(GestionMuestraMicrobiologiaTableComponent.prototype, "muestraTabla", {
        get: function () {
            return this.ptabla && this.pattr;
        },
        enumerable: true,
        configurable: true
    });
    GestionMuestraMicrobiologiaTableComponent.prototype.getColumnas = function (obj) {
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        if (!this.avisible("gestionMuestraMicrobiologia", "id"))
            columnasNoVisibles.push(0);
        columnas.push({ "data": "id" });
        if (!this.avisible("gestionMuestraMicrobiologia", "idoficioDonacion"))
            columnasNoVisibles.push(1);
        columnas.push({
            "data": function (oObj) {
                if (oObj.idoficioDonacion)
                    return "<span style=\"cursor: pointer\">" + oObj.idoficioDonacion.botonCorneal + "</span>";
                return "";
            }
        });
        if (!this.avisible("gestionMuestraMicrobiologia", "revision"))
            columnasNoVisibles.push(2);
        columnas.push({ "data": "revision" });
        if (!this.avisible("gestionMuestraMicrobiologia", "almacenMuestra"))
            columnasNoVisibles.push(3);
        columnas.push({ "data": "almacenMuestra" });
        if (!this.avisible("gestionMuestraMicrobiologia", "almacenHora"))
            columnasNoVisibles.push(4);
        columnas.push({ "data": "almacenHora" });
        if (!this.avisible("gestionMuestraMicrobiologia", "envio"))
            columnasNoVisibles.push(5);
        columnas.push({ "data": "envio" });
        if (!this.avisible("gestionMuestraMicrobiologia", "fechaInicioRevision"))
            columnasNoVisibles.push(6);
        columnas.push({ "data": "fechaInicioRevision" });
        if (!this.avisible("gestionMuestraMicrobiologia", "horaInicioRevision"))
            columnasNoVisibles.push(7);
        columnas.push({ "data": "horaInicioRevision" });
        if (!this.avisible("gestionMuestraMicrobiologia", "comentario"))
            columnasNoVisibles.push(8);
        columnas.push({ "data": "comentario" });
        if (!this.avisible("gestionMuestraMicrobiologia", "fechaRegistro"))
            columnasNoVisibles.push(9);
        columnas.push({ "data": "fechaRegistro" });
        if (!this.avisible("gestionMuestraMicrobiologia", "fechaActualizacion"))
            columnasNoVisibles.push(10);
        columnas.push({ "data": "fechaActualizacion" });
        if (!this.avisible("gestionMuestraMicrobiologia", "fechaBaja"))
            columnasNoVisibles.push(11);
        columnas.push({ "data": "fechaBaja" });
        if (!this.avisible("gestionMuestraMicrobiologia", "usuarioUltMov"))
            columnasNoVisibles.push(12);
        columnas.push({
            "data": function (oObj) {
                if (oObj.usuarioUltMov)
                    return "<span style=\"cursor: pointer\">" + oObj.usuarioUltMov.username + "</span>";
                return "";
            }
        });
        if (!this.avisible("gestionMuestraMicrobiologia", "status"))
            columnasNoVisibles.push(13);
        columnas.push({ "data": "status" });
        if (self.pacutalizar("gestionMuestraMicrobiologia"))
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
        var tabla = $('#tabla_gestionMuestraMicrobiologia').DataTable({
            "columnDefs": novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            "initComplete": function (settings, json) {
                var xs = $("#tabla_gestionMuestraMicrobiologia_wrapper").find(".row");
                $($(xs[0]).find(".col-sm-6")[0]).
                    find(".dataTables_length").
                    append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function () {
                    self.gestionMuestraMicrobiologiaSeleccionado = new _shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_1__["GestionMuestraMicrobiologia"]();
                    self.primero = false;
                });
            },
            "ajax": {
                "url": self.urlProvider.serverURL + "gestionMuestraMicrobiologia/getGestionMuestraMicrobiologias",
                "type": "POST",
                "contentType": "application/json",
                "datatype": 'json',
                "dataSrc": "",
            },
            "columns": columnas,
        });
        $('#tabla_gestionMuestraMicrobiologia tbody').on('click', 'td', function () {
            if (this.cellIndex == $(this).parent().find("td").length - 1) {
                var data = $('#tabla_gestionMuestraMicrobiologia').DataTable().row(this).data();
                self.gestionMuestraMicrobiologiaSeleccionado = new _shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_1__["GestionMuestraMicrobiologia"]();
                self.gestionMuestraMicrobiologiaSeleccionado.from(data);
                self.primero = false;
                if ($(this).parent().hasClass('selected')) {
                    $(this).parent().removeClass('selected');
                }
                else {
                    $('#tabla_gestionMuestraMicrobiologia').DataTable().$('tr.selected').removeClass('selected');
                    $(this).parent().addClass('selected');
                }
            }
        });
    };
    GestionMuestraMicrobiologiaTableComponent.prototype.ngOnInit = function () {
    };
    GestionMuestraMicrobiologiaTableComponent.prototype.cambio_gestionMuestraMicrobiologia = function (gestionMuestraMicrobiologia) {
        $('#tabla_gestionMuestraMicrobiologia').DataTable().ajax.reload(null, false);
        this.primero = true;
    };
    // **********************************************************************************
    // **********************************************************************************
    // **           I N I C I A N   P E R M I S O S   P A R A   P E R F I L E S  
    // **********************************************************************************
    // **********************************************************************************
    GestionMuestraMicrobiologiaTableComponent.prototype.paux = function (tabla, permiso) {
        if (this.permisosTabla.tabla == tabla && (this.permisosTabla.permiso & permiso) == permiso)
            return true;
        return false;
    };
    GestionMuestraMicrobiologiaTableComponent.prototype.preporteWord = function (tabla) { return this.paux(tabla, 64); };
    GestionMuestraMicrobiologiaTableComponent.prototype.preporteExcel = function (tabla) { return this.paux(tabla, 32); };
    GestionMuestraMicrobiologiaTableComponent.prototype.preportePdf = function (tabla) { return this.paux(tabla, 16); };
    GestionMuestraMicrobiologiaTableComponent.prototype.pbuscar = function (tabla) { return this.paux(tabla, 8); };
    GestionMuestraMicrobiologiaTableComponent.prototype.pacutalizar = function (tabla) { return this.paux(tabla, 4); };
    GestionMuestraMicrobiologiaTableComponent.prototype.peliminar = function (tabla) { return this.paux(tabla, 2); };
    GestionMuestraMicrobiologiaTableComponent.prototype.pagregar = function (tabla) { return this.paux(tabla, 1); };
    //******************************************************************************************
    //*******  P E R M I S O S   S O B R E   A T R I B U T O S  ********************************
    //******************************************************************************************
    GestionMuestraMicrobiologiaTableComponent.prototype.aetiqueta = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo)
                return elemento.etiqueta;
        }
        return "";
    };
    GestionMuestraMicrobiologiaTableComponent.prototype.avalidacion = function (tabla, atributo) {
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
    GestionMuestraMicrobiologiaTableComponent.prototype.amensaje = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo) {
                return elemento.mensaje;
            }
        }
        return null;
    };
    GestionMuestraMicrobiologiaTableComponent.prototype.aeditable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 8) == 8)
                return true;
        }
        return false;
    };
    GestionMuestraMicrobiologiaTableComponent.prototype.arequerido = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 4) == 4)
                return true;
        }
        return false;
    };
    GestionMuestraMicrobiologiaTableComponent.prototype.avisible = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 2) == 2)
                return true;
        }
        return false;
    };
    GestionMuestraMicrobiologiaTableComponent.prototype.aenable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 1) == 1)
                return true;
        }
        return false;
    };
    GestionMuestraMicrobiologiaTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gestion-muestra-microbiologia-table',
            template: __webpack_require__(/*! ./gestion-muestra-microbiologia-table.component.html */ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-table/gestion-muestra-microbiologia-table.component.html"),
            styles: [__webpack_require__(/*! ./gestion-muestra-microbiologia-table.component.css */ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-table/gestion-muestra-microbiologia-table.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
                _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
                _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
            _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
            _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            _shared_url_provider__WEBPACK_IMPORTED_MODULE_3__["URLProvider"]])
    ], GestionMuestraMicrobiologiaTableComponent);
    return GestionMuestraMicrobiologiaTableComponent;
}());



/***/ }),

/***/ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia.module.ts ***!
  \****************************************************************************************/
/*! exports provided: GestionMuestraMicrobiologiaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionMuestraMicrobiologiaModule", function() { return GestionMuestraMicrobiologiaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _gestion_muestra_microbiologia_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gestion-muestra-microbiologia-routing.module */ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-routing.module.ts");
/* harmony import */ var _gestion_muestra_microbiologia_list_kendo_gestion_muestra_microbiologia_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gestion-muestra-microbiologia-list-kendo/gestion-muestra-microbiologia-list-kendo.component */ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-list-kendo/gestion-muestra-microbiologia-list-kendo.component.ts");
/* harmony import */ var _gestion_muestra_microbiologia_crud_gestion_muestra_microbiologia_crud_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gestion-muestra-microbiologia-crud/gestion-muestra-microbiologia-crud.component */ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-crud/gestion-muestra-microbiologia-crud.component.ts");
/* harmony import */ var _gestion_muestra_microbiologia_conjunto_gestion_muestra_microbiologia_conjunto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gestion-muestra-microbiologia-conjunto/gestion-muestra-microbiologia-conjunto.component */ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-conjunto/gestion-muestra-microbiologia-conjunto.component.ts");
/* harmony import */ var _gestion_muestra_microbiologia_gestion_muestra_microbiologia_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gestion-muestra-microbiologia/gestion-muestra-microbiologia.component */ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia/gestion-muestra-microbiologia.component.ts");
/* harmony import */ var _gestion_muestra_microbiologia_table_gestion_muestra_microbiologia_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gestion-muestra-microbiologia-table/gestion-muestra-microbiologia-table.component */ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia-table/gestion-muestra-microbiologia-table.component.ts");
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











var GestionMuestraMicrobiologiaModule = /** @class */ (function () {
    function GestionMuestraMicrobiologiaModule(parentModule) {
        if (parentModule) {
            throw new Error('GestionMuestraMicrobiologiaModule is already loaded. Import it in the AppModule only');
        }
    }
    GestionMuestraMicrobiologiaModule_1 = GestionMuestraMicrobiologiaModule;
    GestionMuestraMicrobiologiaModule.forRoot = function () {
        return {
            ngModule: GestionMuestraMicrobiologiaModule_1,
            providers: []
        };
    };
    var GestionMuestraMicrobiologiaModule_1;
    GestionMuestraMicrobiologiaModule = GestionMuestraMicrobiologiaModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_10__["PersonalizadosModule"], _gestion_muestra_microbiologia_routing_module__WEBPACK_IMPORTED_MODULE_3__["GestionMuestraMicrobiologiaRoutingModule"],
                _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_9__["UsuarioPerfilModule"].forRoot()
                //, OficioDonacionModule
            ],
            declarations: [
                _gestion_muestra_microbiologia_list_kendo_gestion_muestra_microbiologia_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["GestionMuestraMicrobiologiaListKendoComponent"],
                _gestion_muestra_microbiologia_gestion_muestra_microbiologia_component__WEBPACK_IMPORTED_MODULE_7__["GestionMuestraMicrobiologiaComponent"],
                _gestion_muestra_microbiologia_crud_gestion_muestra_microbiologia_crud_component__WEBPACK_IMPORTED_MODULE_5__["GestionMuestraMicrobiologiaCrudComponent"],
                _gestion_muestra_microbiologia_conjunto_gestion_muestra_microbiologia_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["GestionMuestraMicrobiologiaConjuntoComponent"],
                _gestion_muestra_microbiologia_table_gestion_muestra_microbiologia_table_component__WEBPACK_IMPORTED_MODULE_8__["GestionMuestraMicrobiologiaTableComponent"],
            ],
            exports: [
                _gestion_muestra_microbiologia_list_kendo_gestion_muestra_microbiologia_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["GestionMuestraMicrobiologiaListKendoComponent"],
                _gestion_muestra_microbiologia_gestion_muestra_microbiologia_component__WEBPACK_IMPORTED_MODULE_7__["GestionMuestraMicrobiologiaComponent"],
                _gestion_muestra_microbiologia_crud_gestion_muestra_microbiologia_crud_component__WEBPACK_IMPORTED_MODULE_5__["GestionMuestraMicrobiologiaCrudComponent"],
                _gestion_muestra_microbiologia_conjunto_gestion_muestra_microbiologia_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["GestionMuestraMicrobiologiaConjuntoComponent"],
                _gestion_muestra_microbiologia_table_gestion_muestra_microbiologia_table_component__WEBPACK_IMPORTED_MODULE_8__["GestionMuestraMicrobiologiaTableComponent"],
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [GestionMuestraMicrobiologiaModule])
    ], GestionMuestraMicrobiologiaModule);
    return GestionMuestraMicrobiologiaModule;
}());



/***/ }),

/***/ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia/gestion-muestra-microbiologia.component.css":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia/gestion-muestra-microbiologia.component.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia/gestion-muestra-microbiologia.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia/gestion-muestra-microbiologia.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [hidden]=\"!usuariologueado\" #formaGeneral=\"ngForm\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <h4>{{ etiquetaGeneral }}</h4>\n        </div>\n        <div class=\"panel-body\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <!-- <app-componente-identificador [componente]=\"'gestionMuestraMicrobiologia'\"\n                                                   [atributo]=\"'id'\"\n                                                   [buscar]=\"gestionMuestraMicrobiologiaBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosGestionMuestraMicrobiologia['id']\"\n                                                   [(dato)]=\"gestionMuestraMicrobiologia.id\"   class=\"w-100\" >\n                    </app-componente-identificador >\n                    <div>\n                        <app-componente-objeto [componente]=\"'gestionMuestraMicrobiologia'\"\n                                               [atributo]=\"'idoficioDonacion'\"\n                                               [buscar]=\"gestionMuestraMicrobiologiaBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosGestionMuestraMicrobiologia['idoficioDonacion']\"\n                                               [(dato)]=\"gestionMuestraMicrobiologia.idoficioDonacion\"  class=\"w-100\"\n                                               [ocultarConjuntos]=\"ocultarConjuntosGestionMuestraMicrobiologia\"\n                                               [opciones]=\"lista_idoficioDonacionGestionMuestraMicrobiologia\"\n                                               [atributoVisible]=\"'botonCorneal'\" [(objetoEdicion)]=\"idoficioDonacionGestionMuestraMicrobiologiaEditar\">\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!idoficioDonacionEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'gestionMuestraMicrobiologia','idoficioDonacion')\" >\n                                   <app-oficio-donacion-crud [nombre]=\"'idoficioDonacion'\" [oficioDonacion]=\"gestionMuestraMicrobiologia.idoficioDonacion\" (oficioDonacionChange)=\"evtIdoficioDonacion($event)\"\n                                                           [ocultarConjuntosOficioDonacion]=\"'true'\" [class.hidden]=\"!idoficioDonacionEditar\" ></app-oficio-donacion-crud>\n                            </div>\n                        </div>\n                    </div> -->\n\n                    <div class=\"row\">\n                        <div class=\"col-md-2\"><label class=\"control-label\">Muestras Microbiología Córneas</label></div>\n                        <div class=\"col-md-10\">\n                            <div class=\"row\">\n                                <div class=\"col-md-2\">\n                                    <div class=\"row\">\n                                        <label class=\"control-label\">Revisión</label>\n                                    </div>\n                                    <div class=\"row\">\n                                        <label class=\"radio-inline\">\n                      <input\n                        type=\"radio\"\n                        name=\"revision\"\n                        class=\"form-checkbox-input\"\n                        [value]=\"1\"\n                        [(ngModel)]=\"gestionMuestraMicrobiologia.revision\"\n                        [attr.disabled]=\"enable ? null : false\"\n                      />\n                      SÍ\n                    </label>\n                                        <label class=\"radio-inline\">\n                      <input\n                        type=\"radio\"\n                        name=\"revision\"\n                        [value]=\"0\"\n                        class=\"form-checkbox-input\"\n                        [(ngModel)]=\"gestionMuestraMicrobiologia.revision\"\n                        [attr.disabled]=\"enable ? null : false\"\n                      />\n                      NO\n                    </label>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-7\">\n                                    <div class=\"row\" style=\"text-align: left;\">\n                                        <label class=\"control-label\">Almacén Muestras</label>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-4\">\n                                            <label class=\"radio-inline\">\n                        <input\n                          type=\"radio\"\n                          name=\"almacenMuestra\"\n                          class=\"form-checkbox-input\"\n                          [value]=\"1\"\n                          [(ngModel)]=\"\n                            gestionMuestraMicrobiologia.almacenMuestra\n                          \"\n                          [attr.disabled]=\"enable ? null : false\"\n                        />\n                        SÍ\n                      </label>\n                                            <label class=\"radio-inline\">\n                        <input\n                          type=\"radio\"\n                          name=\"almacenMuestra\"\n                          [value]=\"0\"\n                          class=\"form-checkbox-input\"\n                          [(ngModel)]=\"\n                            gestionMuestraMicrobiologia.almacenMuestra\n                          \"\n                          [attr.disabled]=\"enable ? null : false\"\n                        />\n                        NO\n                      </label>\n                                        </div>\n                                        <div class=\"col-md-8\">\n                                            <div class=\"row\">\n                                                <div class=\"col-md-2\">Hora:</div>\n                                                <div class=\"col-md-10\">\n                                                    <app-componente-hora [componente]=\"'gestionMuestraMicrobiologia'\" [atributo]=\"'almacenHora'\" [buscar]=\"gestionMuestraMicrobiologiaBuscar\" [permisosAtributos]=\"permisosAtributos\" [(valido)]=\"\n                              validosGestionMuestraMicrobiologia['almacenHora']\n                            \" [(dato)]=\"gestionMuestraMicrobiologia.almacenHora\" class=\"w-100\" [isVisibleLB]=\"false\" [enabled]=\"enable\">\n                                                    </app-componente-hora>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-3\">\n                                    <div class=\"row\">\n                                        <label class=\"control-label\">Envío</label>\n                                    </div>\n                                    <div class=\"row\">\n                                        <label class=\"radio-inline\">\n                      <input\n                        type=\"radio\"\n                        name=\"envio\"\n                        class=\"form-checkbox-input\"\n                        [value]=\"1\"\n                        [(ngModel)]=\"gestionMuestraMicrobiologia.envio\"\n                        [attr.disabled]=\"enable ? null : false\"\n                      />\n                      SÍ\n                    </label>\n                                        <label class=\"radio-inline\">\n                      <input\n                        type=\"radio\"\n                        name=\"envio\"\n                        [value]=\"0\"\n                        class=\"form-checkbox-input\"\n                        [(ngModel)]=\"gestionMuestraMicrobiologia.envio\"\n                        [attr.disabled]=\"enable ? null : false\"\n                      />\n                      NO\n                    </label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!-- <app-componente-cadena\n            [componente]=\"'gestionMuestraMicrobiologia'\"\n            [atributo]=\"'revision'\"\n            [buscar]=\"gestionMuestraMicrobiologiaBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosGestionMuestraMicrobiologia['revision']\"\n            [(dato)]=\"gestionMuestraMicrobiologia.revision\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena>\n          <app-componente-cadena\n            [componente]=\"'gestionMuestraMicrobiologia'\"\n            [atributo]=\"'almacenMuestra'\"\n            [buscar]=\"gestionMuestraMicrobiologiaBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosGestionMuestraMicrobiologia['almacenMuestra']\"\n            [(dato)]=\"gestionMuestraMicrobiologia.almacenMuestra\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena> -->\n\n                    <!-- <app-componente-cadena\n            [componente]=\"'gestionMuestraMicrobiologia'\"\n            [atributo]=\"'envio'\"\n            [buscar]=\"gestionMuestraMicrobiologiaBuscar\"\n            [permisosAtributos]=\"permisosAtributos\"\n            [(valido)]=\"validosGestionMuestraMicrobiologia['envio']\"\n            [(dato)]=\"gestionMuestraMicrobiologia.envio\"\n            class=\"w-100\"\n          >\n          </app-componente-cadena> -->\n\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <app-componente-fecha [componente]=\"'gestionMuestraMicrobiologia'\" [atributo]=\"'fechaInicioRevision'\" [buscar]=\"gestionMuestraMicrobiologiaBuscar\" [permisosAtributos]=\"permisosAtributos\" [(valido)]=\"\n                  validosGestionMuestraMicrobiologia['fechaInicioRevision']\n                \" [(dato)]=\"gestionMuestraMicrobiologia.fechaInicioRevision\" class=\"w-100\" [enabled]=\"enable\">\n                            </app-componente-fecha>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <app-componente-hora [componente]=\"'gestionMuestraMicrobiologia'\" [atributo]=\"'horaInicioRevision'\" [buscar]=\"gestionMuestraMicrobiologiaBuscar\" [permisosAtributos]=\"permisosAtributos\" [(valido)]=\"\n                  validosGestionMuestraMicrobiologia['horaInicioRevision']\n                \" [(dato)]=\"gestionMuestraMicrobiologia.horaInicioRevision\" class=\"w-100\" [enabled]=\"enable\">\n                            </app-componente-hora>\n                        </div>\n                    </div>\n                    <app-componente-cadena-larga [componente]=\"'gestionMuestraMicrobiologia'\" [atributo]=\"'comentario'\" [buscar]=\"gestionMuestraMicrobiologiaBuscar\" [permisosAtributos]=\"permisosAtributos\" [(valido)]=\"validosGestionMuestraMicrobiologia['comentario']\" [(dato)]=\"gestionMuestraMicrobiologia.comentario\"\n                        class=\"w-100\">\n                    </app-componente-cadena-larga>\n                    <!-- <app-componente-fecha [componente]=\"'gestionMuestraMicrobiologia'\"\n                                                   [atributo]=\"'fechaRegistro'\"\n                                                   [buscar]=\"gestionMuestraMicrobiologiaBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosGestionMuestraMicrobiologia['fechaRegistro']\"\n                                                   [(dato)]=\"gestionMuestraMicrobiologia.fechaRegistro\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                     <app-componente-fecha [componente]=\"'gestionMuestraMicrobiologia'\"\n                                                   [atributo]=\"'fechaActualizacion'\"\n                                                   [buscar]=\"gestionMuestraMicrobiologiaBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosGestionMuestraMicrobiologia['fechaActualizacion']\"\n                                                   [(dato)]=\"gestionMuestraMicrobiologia.fechaActualizacion\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                     <app-componente-fecha [componente]=\"'gestionMuestraMicrobiologia'\"\n                                                   [atributo]=\"'fechaBaja'\"\n                                                   [buscar]=\"gestionMuestraMicrobiologiaBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosGestionMuestraMicrobiologia['fechaBaja']\"\n                                                   [(dato)]=\"gestionMuestraMicrobiologia.fechaBaja\"   class=\"w-100\" >\n                    </app-componente-fecha > -->\n                    <!--                     <div>\n                        <app-componente-objeto [componente]=\"'gestionMuestraMicrobiologia'\"\n                                               [atributo]=\"'usuarioUltMov'\"\n                                               [buscar]=\"gestionMuestraMicrobiologiaBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosGestionMuestraMicrobiologia['usuarioUltMov']\"\n                                               [(dato)]=\"gestionMuestraMicrobiologia.usuarioUltMov\"  class=\"w-100\"\n                                               [ocultarConjuntos]=\"ocultarConjuntosGestionMuestraMicrobiologia\"\n                                               [opciones]=\"lista_usuarioUltMovGestionMuestraMicrobiologia\"\n                                               [atributoVisible]=\"'username'\" [(objetoEdicion)]=\"usuarioUltMovGestionMuestraMicrobiologiaEditar\">\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!usuarioUltMovEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'gestionMuestraMicrobiologia','usuarioUltMov')\" >\n                                   <app-usuario-crud [nombre]=\"'usuarioUltMov'\" [usuario]=\"gestionMuestraMicrobiologia.usuarioUltMov\" (usuarioChange)=\"evtUsuarioUltMov($event)\"\n                                                           [ocultarConjuntosUsuario]=\"'true'\" [class.hidden]=\"!usuarioUltMovEditar\" ></app-usuario-crud>\n                            </div>\n                        </div>\n                    </div> -->\n                    <!-- <app-componente-radio [componente]=\"'gestionMuestraMicrobiologia'\"\n                                                   [atributo]=\"'status'\"\n                                                   [buscar]=\"gestionMuestraMicrobiologiaBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosGestionMuestraMicrobiologia['status']\"\n                                                   [(dato)]=\"gestionMuestraMicrobiologia.status\"   class=\"w-100\" >\n                    </app-componente-radio > -->\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia/gestion-muestra-microbiologia.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia/gestion-muestra-microbiologia.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: GestionMuestraMicrobiologiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionMuestraMicrobiologiaComponent", function() { return GestionMuestraMicrobiologiaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/gestion-muestra-microbiologia */ "./src/app/gestion-muestra-microbiologias/shared/gestion-muestra-microbiologia.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GestionMuestraMicrobiologiaComponent = /** @class */ (function () {
    function GestionMuestraMicrobiologiaComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.gestionMuestraMicrobiologiaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovGestionMuestraMicrobiologiaUsuarioEditar = false;
        this.idoficioDonacionGestionMuestraMicrobiologiaOficioDonacionEditar = false;
    }
    GestionMuestraMicrobiologiaComponent.prototype.actualizarGestionMuestraMicrobiologia = function () {
        if (this.gestionMuestraMicrobiologia.id == null) {
            this.gestionMuestraMicrobiologiaService.guardarGestionMuestraMicrobiologia(this.gestionMuestraMicrobiologia, this.evtGuardar, this);
        }
        else {
            this.gestionMuestraMicrobiologiaService.actualizarGestionMuestraMicrobiologia(this.gestionMuestraMicrobiologia, this.evtActualiza, this);
        }
    };
    GestionMuestraMicrobiologiaComponent.prototype.evtGuardar = function (gestionMuestraMicrobiologia, obj) {
        obj.gestionMuestraMicrobiologia = gestionMuestraMicrobiologia;
        obj.gestionMuestraMicrobiologiaChange.emit(obj.gestionMuestraMicrobiologia);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    };
    GestionMuestraMicrobiologiaComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.gestionMuestraMicrobiologiaChange.emit(obj.gestionMuestraMicrobiologia);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    GestionMuestraMicrobiologiaComponent.prototype.ngOnChanges = function (changes) {
        if (changes.opcion && changes.opcion.currentValue != null) {
            if (changes.opcion.currentValue == 1) {
                this.opcion = 1;
                this.actualizarGestionMuestraMicrobiologia();
            }
        }
        if (changes.permisosAtributos && changes.permisosAtributos.currentValue && !this.enable) {
            changes.permisosAtributos.currentValue.forEach(function (element) {
                element.permiso = 2;
                return element;
            });
        }
    };
    GestionMuestraMicrobiologiaComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GestionMuestraMicrobiologiaComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GestionMuestraMicrobiologiaComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GestionMuestraMicrobiologiaComponent.prototype, "gestionMuestraMicrobiologiaBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GestionMuestraMicrobiologiaComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GestionMuestraMicrobiologiaComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GestionMuestraMicrobiologiaComponent.prototype, "validosGestionMuestraMicrobiologia", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_1__["GestionMuestraMicrobiologia"])
    ], GestionMuestraMicrobiologiaComponent.prototype, "gestionMuestraMicrobiologia", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GestionMuestraMicrobiologiaComponent.prototype, "gestionMuestraMicrobiologiaService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], GestionMuestraMicrobiologiaComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GestionMuestraMicrobiologiaComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GestionMuestraMicrobiologiaComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GestionMuestraMicrobiologiaComponent.prototype, "gestionMuestraMicrobiologiaChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GestionMuestraMicrobiologiaComponent.prototype, "ocultarConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GestionMuestraMicrobiologiaComponent.prototype, "lista_usuarioUltMovGestionMuestraMicrobiologiaUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GestionMuestraMicrobiologiaComponent.prototype, "lista_idoficioDonacionGestionMuestraMicrobiologiaOficioDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], GestionMuestraMicrobiologiaComponent.prototype, "enable", void 0);
    GestionMuestraMicrobiologiaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gestion-muestra-microbiologia',
            template: __webpack_require__(/*! ./gestion-muestra-microbiologia.component.html */ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia/gestion-muestra-microbiologia.component.html"),
            styles: [__webpack_require__(/*! ./gestion-muestra-microbiologia.component.css */ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia/gestion-muestra-microbiologia.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], GestionMuestraMicrobiologiaComponent);
    return GestionMuestraMicrobiologiaComponent;
}());



/***/ }),

/***/ "./src/app/gestion-muestra-microbiologias/shared/configurar-gestion-muestra-microbiologia.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/gestion-muestra-microbiologias/shared/configurar-gestion-muestra-microbiologia.ts ***!
  \***************************************************************************************************/
/*! exports provided: ConfigurarGestionMuestraMicrobiologia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurarGestionMuestraMicrobiologia", function() { return ConfigurarGestionMuestraMicrobiologia; });
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");

var ConfigurarGestionMuestraMicrobiologia = /** @class */ (function () {
    //   rutaAgregar:string;
    function ConfigurarGestionMuestraMicrobiologia() {
        this.urlprovider = new _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__["URLProvider"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "gestionMuestraMicrobiologia";
        this.rutaLista = this.crudServiceBaseUrl + "/getGestionMuestraMicrobiologias";
        this.rutaAgregar = this.crudServiceBaseUrl + "/guardarGestionMuestraMicrobiologia";
        this.rutaActualizar = this.crudServiceBaseUrl + "/actualizarGestionMuestraMicrobiologia";
        this.rutaEliminar = this.crudServiceBaseUrl + "/eliminarGestionMuestraMicrobiologia";
        this.titulo = "Catálogo GestionMuestraMicrobiologia";
        this.permisosAtributos = null;
        this.permisosTabla = null;
        this.gestionMuestraMicrobiologiaConsulta = null;
        this.campoAgEl = null;
        this.tipocampoAgEl = null;
        this.altoComponente = 500;
    }
    ConfigurarGestionMuestraMicrobiologia.prototype.lectura = function () {
        return {
            url: this.rutaLista,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarGestionMuestraMicrobiologia.prototype.lecturaP = function (evt, dat) {
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
    ConfigurarGestionMuestraMicrobiologia.prototype.eliminar = function () {
        return {
            url: this.rutaEliminar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarGestionMuestraMicrobiologia.prototype.eliminarP = function (evt, dat) {
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
    ConfigurarGestionMuestraMicrobiologia.prototype.agregar = function () {
        return {
            url: this.rutaAgregar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarGestionMuestraMicrobiologia.prototype.agregarP = function (evt, dat) {
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
    return ConfigurarGestionMuestraMicrobiologia;
}());



/***/ }),

/***/ "./src/app/gestion-muestra-microbiologias/shared/gestion-muestra-microbiologia.service.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/gestion-muestra-microbiologias/shared/gestion-muestra-microbiologia.service.ts ***!
  \************************************************************************************************/
/*! exports provided: GestionMuestraMicrobiologiaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionMuestraMicrobiologiaService", function() { return GestionMuestraMicrobiologiaService; });
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


var GestionMuestraMicrobiologiaService = /** @class */ (function () {
    function GestionMuestraMicrobiologiaService(globalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }
    GestionMuestraMicrobiologiaService.prototype.setGestionMuestraMicrobiologia = function (gestionMuestraMicrobiologia) {
        this.gestionMuestraMicrobiologia = gestionMuestraMicrobiologia;
    };
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologia = function () {
        return this.gestionMuestraMicrobiologia;
    };
    GestionMuestraMicrobiologiaService.prototype.guardarGestionMuestraMicrobiologia = function (gestionMuestraMicrobiologia, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(gestionMuestraMicrobiologia, 'gestionMuestraMicrobiologia/guardarGestionMuestraMicrobiologia')
            .subscribe(function (data) {
            _evento(_this.gestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.gestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.actualizarGestionMuestraMicrobiologia = function (gestionMuestraMicrobiologia, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(gestionMuestraMicrobiologia, 'gestionMuestraMicrobiologia/actualizarGestionMuestraMicrobiologia')
            .subscribe(function (data) {
            _evento(_this.gestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.gestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.eliminarGestionMuestraMicrobiologia = function (gestionMuestraMicrobiologia, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(gestionMuestraMicrobiologia, 'gestionMuestraMicrobiologia/eliminarGestionMuestraMicrobiologia')
            .subscribe(function (data) {
            _evento(_this.gestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.gestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologiadb = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologia')
            .subscribe(function (data) {
            _evento(_this.gestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.gestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologias = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologias')
            .subscribe(function (data) {
            _evento(_this.listaGestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaGestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologiasActivos = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiasActivos')
            .subscribe(function (data) {
            _evento(_this.listaGestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaGestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.lazyGestionMuestraMicrobiologia = function (gestionMuestraMicrobiologia, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(gestionMuestraMicrobiologia, 'gestionMuestraMicrobiologia/lazyGestionMuestraMicrobiologia')
            .subscribe(function (data) {
            _evento(_this.gestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.gestionMuestraMicrobiologia);
        }, function (err) {
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
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologiaById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiaById')
            .subscribe(function (data) {
            _evento(_this.gestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.gestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologiasById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiasById')
            .subscribe(function (data) {
            _evento(_this.listaGestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaGestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologiaByEnvio = function (envio, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(envio, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiaByEnvio')
            .subscribe(function (data) {
            _evento(_this.gestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.gestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologiasByEnvio = function (envio, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(envio, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiasByEnvio')
            .subscribe(function (data) {
            _evento(_this.listaGestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaGestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologiaByHoraInicioRevision = function (horaInicioRevision, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(horaInicioRevision, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiaByHoraInicioRevision')
            .subscribe(function (data) {
            _evento(_this.gestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.gestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologiasByHoraInicioRevision = function (horaInicioRevision, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(horaInicioRevision, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiasByHoraInicioRevision')
            .subscribe(function (data) {
            _evento(_this.listaGestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaGestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologiaByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiaByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.gestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.gestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologiasByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiasByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.listaGestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaGestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologiaByFechaInicioRevision = function (fechaInicioRevision, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaInicioRevision, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiaByFechaInicioRevision')
            .subscribe(function (data) {
            _evento(_this.gestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.gestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologiasByFechaInicioRevision = function (fechaInicioRevision, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaInicioRevision, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiasByFechaInicioRevision')
            .subscribe(function (data) {
            _evento(_this.listaGestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaGestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologiaByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiaByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.gestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.gestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologiasByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiasByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.listaGestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaGestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologiaByAlmacenHora = function (almacenHora, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(almacenHora, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiaByAlmacenHora')
            .subscribe(function (data) {
            _evento(_this.gestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.gestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologiasByAlmacenHora = function (almacenHora, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(almacenHora, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiasByAlmacenHora')
            .subscribe(function (data) {
            _evento(_this.listaGestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaGestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologiaByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiaByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.gestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.gestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologiasByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiasByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.listaGestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaGestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologiaByComentario = function (comentario, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(comentario, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiaByComentario')
            .subscribe(function (data) {
            _evento(_this.gestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.gestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologiasByComentario = function (comentario, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(comentario, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiasByComentario')
            .subscribe(function (data) {
            _evento(_this.listaGestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaGestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologiaByAlmacenMuestra = function (almacenMuestra, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(almacenMuestra, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiaByAlmacenMuestra')
            .subscribe(function (data) {
            _evento(_this.gestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.gestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologiasByAlmacenMuestra = function (almacenMuestra, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(almacenMuestra, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiasByAlmacenMuestra')
            .subscribe(function (data) {
            _evento(_this.listaGestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaGestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologiaByRevision = function (revision, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(revision, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiaByRevision')
            .subscribe(function (data) {
            _evento(_this.gestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.gestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologiasByRevision = function (revision, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(revision, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiasByRevision')
            .subscribe(function (data) {
            _evento(_this.listaGestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaGestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologiaByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiaByStatus')
            .subscribe(function (data) {
            _evento(_this.gestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.gestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologiasByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiasByStatus')
            .subscribe(function (data) {
            _evento(_this.listaGestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaGestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologiaByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiaByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.gestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.gestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologiasByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiasByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.listaGestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaGestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologiaByIdoficioDonacion = function (idoficioDonacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idoficioDonacion, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiaByIdoficioDonacion')
            .subscribe(function (data) {
            _evento(_this.gestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.gestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologiasByIdoficioDonacion = function (idoficioDonacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idoficioDonacion, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiasByIdoficioDonacion')
            .subscribe(function (data) {
            _evento(_this.listaGestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaGestionMuestraMicrobiologia);
        }, function (err) {
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
    GestionMuestraMicrobiologiaService.prototype.custom = function (consulta, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(consulta, 'gestionMuestraMicrobiologia/custom')
            .subscribe(function (data) {
            _evento(_this.listaGestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaGestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService.prototype.getGestionMuestraMicrobiologiasByDto = function (p_gestionMuestraMicrobiologia, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(p_gestionMuestraMicrobiologia, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiasByDto')
            .subscribe(function (data) {
            _evento(_this.listaGestionMuestraMicrobiologia = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaGestionMuestraMicrobiologia);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    GestionMuestraMicrobiologiaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"]])
    ], GestionMuestraMicrobiologiaService);
    return GestionMuestraMicrobiologiaService;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-gestion-muestra-microbiologias-gestion-muestra-microbiologia-module~app-oficio-donacione~a72cb3b2.js.map