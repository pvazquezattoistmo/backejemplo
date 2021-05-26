(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-oficio-donaciones-oficio-donacion-module"],{

/***/ "./src/app/oficio-donaciones/oficio-donacion-conjunto/oficio-donacion-conjunto.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/oficio-donaciones/oficio-donacion-conjunto/oficio-donacion-conjunto.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/oficio-donaciones/oficio-donacion-conjunto/oficio-donacion-conjunto.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/oficio-donaciones/oficio-donacion-conjunto/oficio-donacion-conjunto.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\"  >\n    <li *ngFor =  \"let oficioDonacion of listaOficioDonacion \" [ngClass]=\"{ 'active':idSeleccionado=== 'I-'+oficioDonacion.id}\"\n        (click)=\"elegir(oficioDonacion,'I' )\" >\n        <a data-toggle=\"tab\" href=\"#tab-I-{{oficioDonacion.id}}\">{{oficioDonacion.id}}</a>\n    </li>\n    <li *ngFor =  \"let oficioDonacion of listaOficioDonacionN \" [ngClass]=\"{ 'active':idSeleccionado=== 'N-'+oficioDonacion.id}\"\n        (click)=\"elegir(oficioDonacion, 'N')\" >\n        <a data-toggle=\"tab\" href=\"#tab-N-{{oficioDonacion.id}}\">T-{{oficioDonacion.id}}</a>\n    </li>\n</ul>\n<div class=\"panel panel-default\"  >\n     <div  class=\"tab-content\">\n        <div *ngFor = \"let oficioDonacion of listaOficioDonacion ; let i = index \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='I-'+oficioDonacion.id}\" id=\"tab-I-{{oficioDonacion.id}}\">\n\t\t\t<app-oficio-donacion [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [oficioDonacionBuscar]=\"oficioDonacionBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosOficioDonacion]=\"validosOficioDonacion\"  \n\t\t\t\t\t\t  [oficioDonacionService]=\"oficioDonacionService\" [(opcion)]=\"opcionOficioDonacion\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(oficioDonacion)]=\"listaOficioDonacion[i]\"  [ocultarConjuntos]=\"ocultarConjuntosOficioDonacion\"\n                           [lista_usuarioUltMovOficioDonacionUsuario]=\"lista_usuarioUltMovOficioDonacionUsuario\" \n                           [lista_idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacion]=\"lista_idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacion\" \n\n\t\t\t\t\t  >\n\t\t\t</app-oficio-donacion>\n        </div>\n        <div *ngFor = \"let oficioDonacion of listaOficioDonacionN;  let i = index  \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='N-'+oficioDonacion.id}\" id=\"tab-N-{{oficioDonacion.id}}\">\n\t\t\t<app-oficio-donacion [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [oficioDonacionBuscar]=\"oficioDonacionBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosOficioDonacion]=\"validosOficioDonacion\"  \n\t\t\t\t\t\t  [oficioDonacionService]=\"oficioDonacionService\" [(opcion)]=\"opcionOficioDonacion\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(oficioDonacion)]=\"listaOficioDonacionN[i]\"  [ocultarConjuntos]=\"ocultarConjuntosOficioDonacion\"\n                           [lista_usuarioUltMovOficioDonacionUsuario]=\"lista_usuarioUltMovOficioDonacionUsuario\" \n                           [lista_idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacion]=\"lista_idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacion\" \n\n\t\t\t\t\t  >\n\t\t\t</app-oficio-donacion>  \n        </div>\n\n    </div>\n    <div class=\"panel-footer\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"agregarNuevo()\">\n            <span class=\"fa fa-plus-circle\" aria-hidden=\"true\" style=\"font-size:36px\"></span> AGREGAR\n        </button>\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"actualizaTodo()\">\n            <span class=\"fa fa-reply-all\" aria-hidden=\"true\" style=\"font-size:36px\"></span> ACTUALIZAR TODO\n        </button>\n    </div>\n</div>\t\t\t\n"

/***/ }),

/***/ "./src/app/oficio-donaciones/oficio-donacion-conjunto/oficio-donacion-conjunto.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/oficio-donaciones/oficio-donacion-conjunto/oficio-donacion-conjunto.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: OficioDonacionConjuntoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OficioDonacionConjuntoComponent", function() { return OficioDonacionConjuntoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/oficio-donacion */ "./src/app/oficio-donaciones/shared/oficio-donacion.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OficioDonacionConjuntoComponent = /** @class */ (function () {
    function OficioDonacionConjuntoComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovOficioDonacionUsuarioEditar = false;
        this.idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacionEditar = false;
        this.listaOficioDonacionN = [];
        this.listaOficioDonacion = [];
        this.listaOficioDonacionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.oficioDonacionN = new _shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_1__["OficioDonacion"]();
        this.oficioDonacionNChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.agregados = 0;
        this.actualizados = 0;
        this.idSeleccionado = "N-0";
    }
    OficioDonacionConjuntoComponent.prototype.elegir = function (oficioDonacion, tipo) {
        this.idSeleccionado = tipo + "-" + oficioDonacion.id;
        this.oficioDonacionN = oficioDonacion;
    };
    OficioDonacionConjuntoComponent.prototype.ngOnInit = function () {
        this.oficioDonacionN.id = 0;
        this.listaOficioDonacionN.push(Object.assign({}, this.oficioDonacionN));
        this.usuariologueado = this.globalesService.dameUsuario();
    };
    OficioDonacionConjuntoComponent.prototype.agregarNuevo = function () {
        var pg = new _shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_1__["OficioDonacion"]();
        pg.id = this.listaOficioDonacionN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaOficioDonacionN.push(pg);
    };
    OficioDonacionConjuntoComponent.prototype.actualizaTodo = function () {
        this.agregados = 0;
        this.actualizados = 0;
        for (var _i = 0, _a = this.listaOficioDonacion; _i < _a.length; _i++) {
            var oficioDonacion = _a[_i];
            this.oficioDonacionService.actualizarOficioDonacion(oficioDonacion, this.evtActualiza, this);
        }
        for (var _b = 0, _c = this.listaOficioDonacionN; _b < _c.length; _b++) {
            var oficioDonacion = _c[_b];
            oficioDonacion.id = null;
            this.oficioDonacionService.guardarOficioDonacion(oficioDonacion, this.evtGuardar, this);
        }
    };
    OficioDonacionConjuntoComponent.prototype.evtGuardar = function (oficioDonacion, obj) {
        obj.agregados++;
        obj.listaOficioDonacion.push(oficioDonacion);
        if (obj.agregados >= obj.listaOficioDonacionN.length) {
            obj.oficioDonacionN = new _shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_1__["OficioDonacion"]();
            obj.listaOficioDonacionN = [];
            obj.oficioDonacionN.id = 0;
            obj.idSeleccionado = "N-" + obj.oficioDonacionN.id;
            obj.listaOficioDonacionN.push(Object.assign({}, obj.oficioDonacionN));
            obj.listaOficioDonacionChange.emit(obj.listaOficioDonacion);
        }
        if (obj.agregados >= obj.listaOficioDonacionN.length &&
            obj.actualizados >= obj.listaOficioDonacion.length) {
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    OficioDonacionConjuntoComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.actualizados++;
            if (obj.agregados >= obj.listaOficioDonacionN.length &&
                obj.actualizados >= obj.listaOficioDonacion.length) {
                obj.opcion = 0;
                obj.opcion.emit(obj.opcion);
            }
        }
    };
    OficioDonacionConjuntoComponent.prototype.ngOnChanges = function (changes) {
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
    ], OficioDonacionConjuntoComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OficioDonacionConjuntoComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OficioDonacionConjuntoComponent.prototype, "oficioDonacionBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OficioDonacionConjuntoComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OficioDonacionConjuntoComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OficioDonacionConjuntoComponent.prototype, "validosOficioDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OficioDonacionConjuntoComponent.prototype, "ocultarConjuntosOficioDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OficioDonacionConjuntoComponent.prototype, "oficioDonacionService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], OficioDonacionConjuntoComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OficioDonacionConjuntoComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OficioDonacionConjuntoComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OficioDonacionConjuntoComponent.prototype, "lista_usuarioUltMovOficioDonacionUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OficioDonacionConjuntoComponent.prototype, "lista_idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], OficioDonacionConjuntoComponent.prototype, "listaOficioDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OficioDonacionConjuntoComponent.prototype, "listaOficioDonacionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_1__["OficioDonacion"])
    ], OficioDonacionConjuntoComponent.prototype, "oficioDonacionN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OficioDonacionConjuntoComponent.prototype, "oficioDonacionNChange", void 0);
    OficioDonacionConjuntoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-oficio-donacion-conjunto',
            template: __webpack_require__(/*! ./oficio-donacion-conjunto.component.html */ "./src/app/oficio-donaciones/oficio-donacion-conjunto/oficio-donacion-conjunto.component.html"),
            styles: [__webpack_require__(/*! ./oficio-donacion-conjunto.component.css */ "./src/app/oficio-donaciones/oficio-donacion-conjunto/oficio-donacion-conjunto.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], OficioDonacionConjuntoComponent);
    return OficioDonacionConjuntoComponent;
}());



/***/ }),

/***/ "./src/app/oficio-donaciones/oficio-donacion-crud/oficio-donacion-crud.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/oficio-donaciones/oficio-donacion-crud/oficio-donacion-crud.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}\n"

/***/ }),

/***/ "./src/app/oficio-donaciones/oficio-donacion-crud/oficio-donacion-crud.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/oficio-donaciones/oficio-donacion-crud/oficio-donacion-crud.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n    <!-- <div class=\"panel-footer\" style=\"text-align: right\">\n        <div style=\"display: inline-block;width: 90%; margin-right: 10%;\">\n        </div>\n    </div> -->\n    <app-oficio-donacion [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"'REGISTRO DE OFICIO DE DONACIÓN'\" [oficioDonacionBuscar]=\"oficioDonacionBuscar\" [permisosAtributos]=\"permisosAtributos\" [permisosConjuntos]=\"permisosConjuntos\" [validosOficioDonacion]=\"validosOficioDonacion\"\n        [oficioDonacionService]=\"oficioDonacion_service\" [(opcion)]=\"opcionOficioDonacion\" [globalesService]=\"globalesService\" [(oficioDonacion)]=\"oficioDonacion\" [ocultarConjuntos]=\"ocultarConjuntosOficioDonacion\" [lista_usuarioUltMovOficioDonacionUsuario]=\"\n      lista_usuarioUltMovOficioDonacionUsuario\n    \" [lista_idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacion]=\"\n      lista_idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacion\n    \" [(recepcionSolicitudEvaluacion)]=\"recepcionSolicitudEvaluacion\" [almacenTejido]=\"almacenTejido\" [gestionMuestraMicrobiologia]=\"gestionMuestraMicrobiologia\" [documentacionDonacion]=\"documentacionDonacion\" [caracteristicaDonacion]=\"caracteristicaDonacion\"\n        [enable]=\"recepcionSolicitudEvaluacion?.evaluacionSolicitud?.id == null\">\n    </app-oficio-donacion>\n\n    <div class=\"panel-footer\" style=\"text-align: right\">\n        <div style=\"display: inline-block;width: 90%; margin-right: 10%;\">\n            <button style=\"margin-right: 10px;\" type=\"button\" class=\"btn  btn-primary btn-guardar\" (click)=\"doSave()\" [disabled]=\"recepcionSolicitudEvaluacion?.evaluacionSolicitud?.id !== null\">\n                <span class=\"glyphicon glyphicon-floppy-disk\" aria-hidden=\"true\"></span>\n              </button>\n            <button type=\"button\" class=\"btn btn-success btn-guardar\" [disabled]=\"recepcionSolicitudEvaluacion?.id == null || recepcionSolicitudEvaluacion?.evaluacionSolicitud?.id != null\" (click)=\"doEnviar()\">\n          <span class=\"fa fa-floppy-disk\"></span>Enviar\n        </button>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"buscarOficioDonacion_{{ nombre }}\" role=\"dialog\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n          &times;\n        </button>\n            </div>\n            <div class=\"modal-body\">\n                <app-oficio-donacion-list-kendo [nombregrid]=\"'buscar_' + nombre\" [configuracionOficioDonacion]=\"configuracionOficioDonacion\" (oficioDonacionSeleccionado)=\"evtOficioDonacionSeleccionado($event)\">\n                </app-oficio-donacion-list-kendo>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\n          Close\n        </button>\n            </div>\n        </div>\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/oficio-donaciones/oficio-donacion-crud/oficio-donacion-crud.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/oficio-donaciones/oficio-donacion-crud/oficio-donacion-crud.component.ts ***!
  \******************************************************************************************/
/*! exports provided: OficioDonacionCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OficioDonacionCrudComponent", function() { return OficioDonacionCrudComponent; });
/* harmony import */ var _evaluacion_solicitudes_shared_evaluacion_solicitud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../evaluacion-solicitudes/shared/evaluacion-solicitud.service */ "./src/app/evaluacion-solicitudes/shared/evaluacion-solicitud.service.ts");
/* harmony import */ var _evaluacion_solicitudes_shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../evaluacion-solicitudes/shared/evaluacion-solicitud */ "./src/app/evaluacion-solicitudes/shared/evaluacion-solicitud.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_core_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/core.service */ "./src/app/shared/core.service.ts");
/* harmony import */ var _shared_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/file.service */ "./src/app/shared/file.service.ts");
/* harmony import */ var _shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/oficio-donacion */ "./src/app/oficio-donaciones/shared/oficio-donacion.ts");
/* harmony import */ var _shared_oficio_donacion_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/oficio-donacion.service */ "./src/app/oficio-donaciones/shared/oficio-donacion.service.ts");
/* harmony import */ var _shared_configurar_oficio_donacion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/configurar-oficio-donacion */ "./src/app/oficio-donaciones/shared/configurar-oficio-donacion.ts");
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../usuarios/shared/usuario.service */ "./src/app/usuarios/shared/usuario.service.ts");
/* harmony import */ var _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../usuario-btcs/shared/usuario-btc.service */ "./src/app/usuario-btcs/shared/usuario-btc.service.ts");
/* harmony import */ var _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../perfil-red-issstes/shared/perfil-red-issste.service */ "./src/app/perfil-red-issstes/shared/perfil-red-issste.service.ts");
/* harmony import */ var _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hospitales/shared/hospital.service */ "./src/app/hospitales/shared/hospital.service.ts");
/* harmony import */ var _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../entidad-federativas/shared/entidad-federativa.service */ "./src/app/entidad-federativas/shared/entidad-federativa.service.ts");
/* harmony import */ var _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../perfiles/shared/perfil.service */ "./src/app/perfiles/shared/perfil.service.ts");
/* harmony import */ var _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion */ "./src/app/recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.ts");
/* harmony import */ var _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service */ "./src/app/recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.service.ts");
/* harmony import */ var _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service */ "./src/app/solicitud-evaluacion-corneales/shared/solicitud-evaluacion-corneal.service.ts");
/* harmony import */ var _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../causa-muertes/shared/causa-muerte.service */ "./src/app/causa-muertes/shared/causa-muerte.service.ts");
/* harmony import */ var _almacen_tejidos_shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../almacen-tejidos/shared/almacen-tejido */ "./src/app/almacen-tejidos/shared/almacen-tejido.ts");
/* harmony import */ var _gestion_muestra_microbiologias_shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../gestion-muestra-microbiologias/shared/gestion-muestra-microbiologia */ "./src/app/gestion-muestra-microbiologias/shared/gestion-muestra-microbiologia.ts");
/* harmony import */ var _documentacion_donaciones_shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../documentacion-donaciones/shared/documentacion-donacion */ "./src/app/documentacion-donaciones/shared/documentacion-donacion.ts");
/* harmony import */ var _caracteristica_donaciones_shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../caracteristica-donaciones/shared/caracteristica-donacion */ "./src/app/caracteristica-donaciones/shared/caracteristica-donacion.ts");
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











var OficioDonacionCrudComponent = /** @class */ (function () {
    function OficioDonacionCrudComponent(globalesService, zone, fileservice, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    oficioDonacion_service, usuario_service, usuarioBtc_service, perfilRedIssste_service, 
    //                public perfilBtc_service: PerfilBtcService,
    hospital_service, entidadFederativa_service, perfil_service, recepcionSolicitudEvaluacion_service, solicitudEvaluacionCorneal_service, causaMuerte_service, activatedRoute, evaluacionSolicitudService) {
        this.globalesService = globalesService;
        this.zone = zone;
        this.fileservice = fileservice;
        this.coreService = coreService;
        this.oficioDonacion_service = oficioDonacion_service;
        this.usuario_service = usuario_service;
        this.usuarioBtc_service = usuarioBtc_service;
        this.perfilRedIssste_service = perfilRedIssste_service;
        this.hospital_service = hospital_service;
        this.entidadFederativa_service = entidadFederativa_service;
        this.perfil_service = perfil_service;
        this.recepcionSolicitudEvaluacion_service = recepcionSolicitudEvaluacion_service;
        this.solicitudEvaluacionCorneal_service = solicitudEvaluacionCorneal_service;
        this.causaMuerte_service = causaMuerte_service;
        this.activatedRoute = activatedRoute;
        this.evaluacionSolicitudService = evaluacionSolicitudService;
        this.opcionOficioDonacion = 0;
        this.validosOficioDonacion = {
            id: false,
            fechaBaja: false,
            incidenciaTejido: true,
            botonCorneal: false,
            fechaRegistro: false,
            fechaActualizacion: false,
            microbiologiaCorneal: false,
            status: false,
            usuarioUltMov: false,
            idrecepcionSolicitudEvaluacion: false
        };
        this.ocultarConjuntosOficioDonacion = false;
        this.nombre = "";
        this.permisosTabla = { tabla: "oficioDonacion", permiso: 0, etiqueta: "" };
        this.permisosAtributos = [];
        this.permisosConjuntos = [];
        //  public perfil: Perfil;
        this.accion = 0;
        this.oficioDonacionLazy = false;
        this.oficioDonacionPermisos = false;
        this.validaciones = false;
        this.validacionesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.oficioDonacion = new _shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_7__["OficioDonacion"]();
        this.oficioDonacionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.oficioDonacionTablaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.lista_oficioDonaciones = [];
        this.usuarioUltMovOficioDonacionUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_10__["Usuario"]();
        this.lista_usuarioUltMovOficioDonacionUsuario = [];
        this.usuarioUltMovOficioDonacionUsuarioEditar = false;
        this.idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacionEleccion = new _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_17__["RecepcionSolicitudEvaluacion"]();
        this.lista_idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacion = [];
        this.idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacionEditar = false;
        this.recepcionSolicitudEvaluacion = new _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_17__["RecepcionSolicitudEvaluacion"]();
        this.almacenTejido = new _almacen_tejidos_shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_21__["AlmacenTejido"]();
        this.gestionMuestraMicrobiologia = new _gestion_muestra_microbiologias_shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_22__["GestionMuestraMicrobiologia"]();
        this.documentacionDonacion = new _documentacion_donaciones_shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_23__["DocumentacionDonacion"]();
        this.caracteristicaDonacion = new _caracteristica_donaciones_shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_24__["CaracteristicaDonacion"]();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                this.obtenerPermisos();
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
            }
        }
        this.oficioDonacionSeleccion = this.oficioDonacionCancelar = this.oficioDonacionGuardar = this.oficioDonacionBuscar = this.oficioDonacionAgregar = this.oficioDonacionActualizar = this.oficioDonacionEliminar = false;
        this.configuracionOficioDonacion = new _shared_configurar_oficio_donacion__WEBPACK_IMPORTED_MODULE_9__["ConfigurarOficioDonacion"]();
        //this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovOficioDonacionUsuario, this);
        //this.recepcionSolicitudEvaluacion_service.getRecepcionSolicitudEvaluacionesActivos(this.evtGetIdrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacion, this);
        this.limpiarCampos();
    }
    Object.defineProperty(OficioDonacionCrudComponent.prototype, "oficioDonacionOcultarConjuntos", {
        get: function () {
            if (this.ocultarConjuntosOficioDonacion)
                return true;
            return !this.oficioDonacionActualizar;
        },
        enumerable: true,
        configurable: true
    });
    OficioDonacionCrudComponent.prototype.ngOnChanges = function (changes) {
        if (changes.oficioDonacion &&
            changes.oficioDonacion.currentValue == null &&
            this.oficioDonacion == null)
            this.oficioDonacion = new _shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_7__["OficioDonacion"]();
        else {
            var aux = new _shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_7__["OficioDonacion"]();
            if (this.oficioDonacion)
                aux.from(this.oficioDonacion);
            if (aux.isOk && aux.isOk()) {
                this.accion = 7;
                this.oficioDonacionBuscar = this.oficioDonacionAgregar = this.oficioDonacionSeleccion = this.oficioDonacionGuardar = false;
                this.oficioDonacionActualizar = this.oficioDonacionEliminar = this.oficioDonacionCancelar = true;
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
                this.oficioDonacionSeleccion = this.oficioDonacionAgregar = this.oficioDonacionBuscar = this.oficioDonacionActualizar = this.oficioDonacionEliminar = false;
                this.oficioDonacionGuardar = this.oficioDonacionCancelar = true;
            }
        }
    };
    OficioDonacionCrudComponent.prototype.obtenerPermisos = function () {
        var id_expe = -1;
        var tablas = [
            "oficioDonacion",
            "usuario",
            "usuarioBtc",
            "perfilRedIssste",
            "perfilBtc",
            "hospital",
            "entidadFederativa",
            "perfil",
            "recepcionSolicitudEvaluacion",
            "solicitudEvaluacionCorneal",
            "causaMuerte"
        ];
        var parametros = {
            id_usu: this.usuariologueado.id,
            tablas: tablas,
            id_exp: id_expe
        };
        this.oficioDonacionPermisos = false;
        this.coreService.permisos(parametros, this.evtCorePermisos, this);
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    OficioDonacionCrudComponent.prototype.evtCorePermisos = function (permisos, obj) {
        obj.oficioDonacionPermisos = true;
        if (permisos &&
            permisos.oficioDonacion &&
            permisos.oficioDonacion.PermisoAtributo &&
            permisos.oficioDonacion.PermisoAtributo.length > 0) {
            obj.permisosAtributos = permisos.oficioDonacion.PermisoAtributo;
        }
        else {
            obj.usuariologueado = undefined;
        }
        if (permisos &&
            permisos.oficioDonacion &&
            permisos.oficioDonacion.PermisoConjunto &&
            permisos.oficioDonacion.PermisoConjunto.length > 0) {
            obj.permisosConjuntos = permisos.oficioDonacion.PermisoConjunto;
        }
        if (permisos &&
            permisos.oficioDonacion &&
            permisos.oficioDonacion.PermisoTabla &&
            permisos.oficioDonacion.PermisoTabla.length > 0) {
            obj.permisosTabla = permisos.oficioDonacion.PermisoTabla[0];
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
            permisos.recepcionSolicitudEvaluacion &&
            permisos.recepcionSolicitudEvaluacion.PermisoAtributo &&
            permisos.recepcionSolicitudEvaluacion.PermisoAtributo.length > 0) {
            //obj.configuracion$1=
            permisos.recepcionSolicitudEvaluacion.PermisoAtributo;
            obj.permisosAtributos.push(permisos.recepcionSolicitudEvaluacion.PermisoAtributo);
        }
        if (permisos &&
            permisos.recepcionSolicitudEvaluacion &&
            permisos.recepcionSolicitudEvaluacion.PermisoAtributo &&
            permisos.recepcionSolicitudEvaluacion.PermisoConjunto.length > 0) {
            obj.permisosConjuntos.push(permisos.recepcionSolicitudEvaluacion.PermisoConjunto);
        }
        if (permisos &&
            permisos.recepcionSolicitudEvaluacion &&
            permisos.recepcionSolicitudEvaluacion.PermisoTabla &&
            permisos.recepcionSolicitudEvaluacion.PermisoTabla.length > 0) {
            //obj.configuracion$1=
            permisos.recepcionSolicitudEvaluacion.PermisoTabla[0];
            // obj.permisosTabla.push(
            //        permisos.recepcionSolicitudEvaluacion.PermisoTabla[0]
            //    );
        }
        if (obj.configurarTablasConjuntos)
            obj.configurarTablasConjuntos();
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    OficioDonacionCrudComponent.prototype.evtGetUsuarioUltMovOficioDonacionUsuario = function (lista_usuarioUltMovOficioDonacionUsuario, obj) {
        obj.lista_usuarioUltMovOficioDonacionUsuario = lista_usuarioUltMovOficioDonacionUsuario;
        obj.actualizar_UsuarioUltMovOficioDonacionUsuario();
    };
    OficioDonacionCrudComponent.prototype.evtGetIdrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacion = function (lista_idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacion, obj) {
        obj.lista_idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacion = lista_idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacion;
        obj.actualizar_IdrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacion();
    };
    OficioDonacionCrudComponent.prototype.actualizar_UsuarioUltMovOficioDonacionUsuario = function () {
        if (this.usuarioUltMovOficioDonacionUsuarioEleccion)
            for (var _i = 0, _a = this.lista_usuarioUltMovOficioDonacionUsuario; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.usuarioUltMovOficioDonacionUsuarioEleccion.id) {
                    this.usuarioUltMovOficioDonacionUsuarioEleccion = eleme;
                    break;
                }
            }
    };
    OficioDonacionCrudComponent.prototype.actualizar_IdrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacion = function () {
        if (this
            .idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacionEleccion)
            for (var _i = 0, _a = this
                .lista_idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacion; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id ==
                    this
                        .idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacionEleccion
                        .id) {
                    this.idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacionEleccion = eleme;
                    break;
                }
            }
    };
    OficioDonacionCrudComponent.prototype.ngDoCheck = function () { };
    OficioDonacionCrudComponent.prototype.validaAcciones = function (vall) {
        return (this.accion == 0 ||
            this.accion == 1 ||
            this.accion == 4 ||
            this.accion == 6 ||
            (this.accion == 7 && vall) ||
            (this.accion == 2 && vall) ||
            (this.accion == 3 && vall) ||
            (this.accion == 5 && vall));
    };
    Object.defineProperty(OficioDonacionCrudComponent.prototype, "validaId", {
        get: function () {
            return this.validosOficioDonacion["id"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OficioDonacionCrudComponent.prototype, "validaIds", {
        get: function () {
            return this.validosOficioDonacion["id"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OficioDonacionCrudComponent.prototype, "validaFechaBaja", {
        get: function () {
            return this.validosOficioDonacion["fechaBaja"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OficioDonacionCrudComponent.prototype, "validaIncidenciaTejido", {
        get: function () {
            return this.validosOficioDonacion["incidenciaTejido"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OficioDonacionCrudComponent.prototype, "validaBotonCorneal", {
        get: function () {
            return this.validosOficioDonacion["botonCorneal"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OficioDonacionCrudComponent.prototype, "validaFechaRegistro", {
        get: function () {
            return this.validosOficioDonacion["fechaRegistro"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OficioDonacionCrudComponent.prototype, "validaFechaActualizacion", {
        get: function () {
            return this.validosOficioDonacion["fechaActualizacion"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OficioDonacionCrudComponent.prototype, "validaMicrobiologiaCorneal", {
        get: function () {
            return this.validosOficioDonacion["microbiologiaCorneal"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OficioDonacionCrudComponent.prototype, "validaStatus", {
        get: function () {
            return this.validosOficioDonacion["status"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OficioDonacionCrudComponent.prototype, "validaUsuarioUltMov", {
        get: function () {
            return this.validosOficioDonacion["usuarioUltMov"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OficioDonacionCrudComponent.prototype, "validaIdrecepcionSolicitudEvaluacion", {
        get: function () {
            return this.validosOficioDonacion["idrecepcionSolicitudEvaluacion"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OficioDonacionCrudComponent.prototype, "validaTodosc", {
        get: function () {
            var salida = this.validaId &&
                this.validaFechaBaja &&
                this.validaIncidenciaTejido &&
                this.validaBotonCorneal &&
                this.validaFechaRegistro &&
                this.validaFechaActualizacion &&
                this.validaMicrobiologiaCorneal &&
                this.validaStatus &&
                this.validaUsuarioUltMov &&
                this.validaIdrecepcionSolicitudEvaluacion;
            if (salida != this.validaciones)
                this.validacionesChange.emit(salida);
            return salida;
        },
        enumerable: true,
        configurable: true
    });
    OficioDonacionCrudComponent.prototype.obtenerOficioDonaciones = function (lista, objeto) {
        objeto.lista_oficioDonaciones = lista;
        if (lista && lista.length > 0) {
            objeto.oficioDonacion.from(lista[0]);
            objeto.evtOficioDonacionSeleccionado(objeto.oficioDonacion);
            if (objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    };
    OficioDonacionCrudComponent.prototype.evn_lazy_oficioDonacion = function (oficioDonacion, objeto) {
        objeto.oficioDonacion = oficioDonacion;
        objeto.almacenTejido = oficioDonacion.almacenTejido;
        objeto.gestionMuestraMicrobiologia =
            oficioDonacion.gestionMuestraMicrobiologia;
        objeto.documentacionDonacion = oficioDonacion.documentacionDonacion;
        objeto.caracteristicaDonacion = oficioDonacion.caracteristicaDonacion;
        objeto.oficioDonacionChange.emit(objeto.oficioDonacion);
        var id = objeto.activatedRoute.snapshot.paramMap.get("id");
        if (id) {
            objeto.recepcionSolicitudEvaluacion.id = id;
            objeto.recepcionSolicitudEvaluacion_service.lazyRecepcionSolicitudEvaluacion(objeto.recepcionSolicitudEvaluacion, objeto.evn_lazy_recepcionSolicitudEvaluacion, objeto);
        }
        objeto.configuarCombosObjetos();
        objeto.oficioDonacionLazy = true;
    };
    Object.defineProperty(OficioDonacionCrudComponent.prototype, "datosReporteOficioDonacionWord", {
        /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
        get: function () {
            return !(this.oficioDonacionActualizar &&
                this.oficioDonacionLazy &&
                this.globalesService.preporteWord(this, "oficioDonacion"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OficioDonacionCrudComponent.prototype, "datosReporteOficioDonacionExcel", {
        get: function () {
            return !(this.oficioDonacionActualizar &&
                this.oficioDonacionLazy &&
                this.globalesService.preporteExcel(this, "oficioDonacion"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OficioDonacionCrudComponent.prototype, "datosReporteOficioDonacionPdf", {
        get: function () {
            return !(this.oficioDonacionActualizar &&
                this.oficioDonacionLazy &&
                this.globalesService.preportePdf(this, "oficioDonacion"));
        },
        enumerable: true,
        configurable: true
    });
    OficioDonacionCrudComponent.prototype.reporteOficioDonacionExcel = function (form) {
        var nombre = "OficioDonacion.xlsx";
        var path = "file/reporteExcel";
        var parametros = {};
        parametros["entradas"] = { oficioDonacion: this.oficioDonacion };
        parametros["plantilla"] = "OficioDonacion.xlsx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    OficioDonacionCrudComponent.prototype.reporteOficioDonacionWord = function (form) {
        var nombre = "OficioDonacion.docx";
        var path = "file/reporteWord";
        var parametros = {};
        parametros["entradas"] = { oficioDonacion: this.oficioDonacion };
        parametros["plantilla"] = "OficioDonacion.docx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    OficioDonacionCrudComponent.prototype.reporteOficioDonacionPdf = function (form) {
        var nombre = "OficioDonacion.docx";
        var path = "file/reportePdf";
        var parametros = {};
        parametros["entradas"] = { oficioDonacion: this.oficioDonacion };
        parametros["plantilla"] = "OficioDonacion.docx";
        parametros["salida"] = "OficioDonacion.pdf";
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */
    OficioDonacionCrudComponent.prototype.accionesBuscar = function () {
        this.accion = 1;
        this.oficioDonacionGuardar = this.oficioDonacionActualizar = this.oficioDonacionEliminar = false;
        this.oficioDonacionBuscar = this.oficioDonacionAgregar = this.oficioDonacionCancelar = true;
    };
    OficioDonacionCrudComponent.prototype.buscarOficioDonacionFront = function (form) {
        this.accionesBuscar();
        var voficioDonacion = new _shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_7__["OficioDonacion"]();
        voficioDonacion.from(this.oficioDonacion);
        this.configuracionOficioDonacion = new _shared_configurar_oficio_donacion__WEBPACK_IMPORTED_MODULE_9__["ConfigurarOficioDonacion"]();
        this.configuracionOficioDonacion.permisosTabla = {
            tabla: "oficioDonacion",
            permiso: 8
        };
        this.configuracionOficioDonacion.titulo =
            "Buscar " + this.permisosTabla.etiqueta;
        this.configuracionOficioDonacion.oficioDonacionConsulta = voficioDonacion;
        this.permisosacciones();
        $("#buscarOficioDonacion_" + this.nombre).modal();
    };
    OficioDonacionCrudComponent.prototype.buscarOficioDonacionBack = function (oficioDonacion) {
        this.oficioDonacion_service.getOficioDonacionesByDto(oficioDonacion, this.eventoSrvOficioDonacionBuscar, this);
    };
    OficioDonacionCrudComponent.prototype.eventoSrvOficioDonacionBuscar = function (lista, objeto) {
        objeto.lista_oficioDonaciones = lista;
        if (lista && lista.length > 0) {
            objeto.oficioDonacion = lista[0];
            objeto.oficioDonacionLazy = false;
            objeto.oficioDonacion_service.lazyOficioDonacion(objeto.oficioDonacion, objeto.evn_lazy_oficioDonacion, objeto);
        }
    };
    OficioDonacionCrudComponent.prototype.guardarOficioDonacionFront = function (form) {
        this.accion = 5; // ********************************************************************************************** maquina
        this.guardarOficioDonacionBack(this.oficioDonacion);
        this.accionesBuscar(); // ********************************************************************************* maquina
        this.permisosacciones();
    };
    OficioDonacionCrudComponent.prototype.guardarOficioDonacionBack = function (oficioDonacion) {
        if (oficioDonacion.usuarioUltMov == null)
            oficioDonacion.usuarioUltMov = this.globalesService.dameUsuario();
        if (oficioDonacion.status == null || oficioDonacion.status == "")
            oficioDonacion.status = "1";
        this.oficioDonacion_service.guardarOficioDonacion(oficioDonacion, this.eventoSrvOficioDonacionGuardar, this);
    };
    OficioDonacionCrudComponent.prototype.eventoSrvOficioDonacionGuardar = function (oficioDonacion, obj) {
        obj.oficioDonacion = new _shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_7__["OficioDonacion"](oficioDonacion);
        bootbox.alert("Datos guardados con éxito");
        var aux = new _shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_7__["OficioDonacion"]();
        aux.from(oficioDonacion);
        obj.oficioDonacionChange.emit(aux);
        obj.oficioDonacionTablaChange.emit(aux);
        obj.oficioDonacionLazy = false;
        obj.oficioDonacion_service.lazyOficioDonacion(obj.oficioDonacion, obj.evn_lazy_oficioDonacion, obj);
        obj.accionesActualizar();
    };
    OficioDonacionCrudComponent.prototype.actualizarOficioDonacionFront = function (form) {
        this.accion = 3; // ************************************************************************************* maquina
        this.actualizarOficioDonacionBack(this.oficioDonacion);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    };
    OficioDonacionCrudComponent.prototype.actualizarOficioDonacionBack = function (oficioDonacion) {
        //oficioDonacion.usuarioUltMov = this.globalesService.dameUsuario();
        this.oficioDonacion_service.actualizarOficioDonacion(oficioDonacion, this.eventoSrvOficioDonacionActualizar, this);
    };
    OficioDonacionCrudComponent.prototype.eventoSrvOficioDonacionActualizar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux = new _shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_7__["OficioDonacion"]();
            // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.oficioDonacionLazy = false;
            obj.oficioDonacion_service.lazyOficioDonacion(new _shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_7__["OficioDonacion"](obj.oficioDonacion), obj.evn_lazy_oficioDonacion, obj);
            // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.oficioDonacion);
            obj.oficioDonacionChange.emit(aux);
            obj.oficioDonacionTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    };
    OficioDonacionCrudComponent.prototype.eliminarOficioDonacionFront = function (form) {
        this.accion = 4;
        this.eliminarOficioDonacionBack(this.oficioDonacion);
        this.permisosacciones();
        this.accionesBuscar();
    };
    OficioDonacionCrudComponent.prototype.eliminarOficioDonacionBack = function (oficioDonacion) {
        oficioDonacion.usuarioUltMov = this.globalesService.dameUsuario();
        this.oficioDonacion_service.eliminarOficioDonacion(oficioDonacion, this.eventoSrvOficioDonacionEliminar, this);
    };
    OficioDonacionCrudComponent.prototype.eventoSrvOficioDonacionEliminar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.oficioDonacion = new _shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_7__["OficioDonacion"]();
            obj.oficioDonacionChange.emit(obj.oficioDonacion);
            obj.oficioDonacionTablaChange.emit(obj.oficioDonacion);
            obj.limpiarCampos();
        }
    };
    OficioDonacionCrudComponent.prototype.cancelarOficioDonacionFront = function (form) {
        this.accion = 6;
        this.oficioDonacionCancelar = this.oficioDonacionGuardar = this.oficioDonacionActualizar = this.oficioDonacionEliminar = false;
        this.oficioDonacionBuscar = this.oficioDonacionAgregar = true;
        this.permisosacciones();
    };
    OficioDonacionCrudComponent.prototype.nuevoOficioDonacionFront = function (form) {
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
                this.oficioDonacionSeleccion = this.oficioDonacionAgregar = this.oficioDonacionBuscar = this.oficioDonacionActualizar = this.oficioDonacionEliminar = false;
                this.oficioDonacionGuardar = this.oficioDonacionCancelar = true;
            }.bind(this)
        });
    };
    OficioDonacionCrudComponent.prototype.configuarCombosObjetos = function () {
        this.lista_usuarioUltMovOficioDonacionUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovOficioDonacionUsuario, this);
        this.lista_idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacion = [];
        //this.recepcionSolicitudEvaluacion_service.getRecepcionSolicitudEvaluacionesActivos(this.evtGetIdrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacion, this);
    };
    OficioDonacionCrudComponent.prototype.configurarTablasConjuntos = function () { };
    OficioDonacionCrudComponent.prototype.accionesActualizar = function () {
        this.accion = 7;
        this.oficioDonacionBuscar = this.oficioDonacionAgregar = this.oficioDonacionSeleccion = this.oficioDonacionGuardar = false;
        this.oficioDonacionActualizar = this.oficioDonacionEliminar = this.oficioDonacionCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    };
    OficioDonacionCrudComponent.prototype.evtOficioDonacionSeleccionado = function (oficioDonacion) {
        this.oficioDonacion = new _shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_7__["OficioDonacion"]();
        this.oficioDonacion.from(oficioDonacion);
        this.oficioDonacionLazy = false;
        this.oficioDonacion_service.lazyOficioDonacion(this.oficioDonacion, this.evn_lazy_oficioDonacion, this);
        this.accion = 7;
        this.oficioDonacionBuscar = this.oficioDonacionAgregar = this.oficioDonacionSeleccion = this.oficioDonacionGuardar = false;
        this.oficioDonacionActualizar = this.oficioDonacionEliminar = this.oficioDonacionCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarOficioDonacion_" + this.nombre).modal("hide");
    };
    OficioDonacionCrudComponent.prototype.ngOnInit = function () {
        this.accion = 0; // *********************************************************************************************************** maquina
        this.oficioDonacionSeleccion = this.oficioDonacionCancelar = this.oficioDonacionGuardar = this.oficioDonacionActualizar = this.oficioDonacionEliminar = false; // ******************** maquina
        this.oficioDonacionBuscar = this.oficioDonacionAgregar = true; // ************************************************************************************* maquina
        this.permisosacciones();
        var id = this.activatedRoute.snapshot.paramMap.get("id");
        if (id) {
            this.recepcionSolicitudEvaluacion.id = id;
            this.recepcionSolicitudEvaluacion_service.lazyRecepcionSolicitudEvaluacion(this.recepcionSolicitudEvaluacion, this.evn_lazy_recepcionSolicitudEvaluacion, this);
        }
    };
    OficioDonacionCrudComponent.prototype.permisosacciones = function () {
        if (this.oficioDonacionBuscar)
            this.oficioDonacionBuscar = this.globalesService.pbuscar(this, "oficioDonacion");
        if (this.oficioDonacionActualizar)
            this.oficioDonacionActualizar =
                this.globalesService.pacutalizar(this, "oficioDonacion") &&
                    this.globalesService.pbuscar(this, "oficioDonacion");
        if (this.oficioDonacionEliminar)
            this.oficioDonacionEliminar =
                this.globalesService.peliminar(this, "oficioDonacion") &&
                    this.globalesService.pbuscar(this, "oficioDonacion");
        if (this.oficioDonacionAgregar)
            this.oficioDonacionAgregar = this.globalesService.pagregar(this, "oficioDonacion");
    };
    OficioDonacionCrudComponent.prototype.permisosaccionesInicio = function () {
        this.oficioDonacionSeleccion = this.oficioDonacionCancelar = this.oficioDonacionGuardar = this.oficioDonacionActualizar = this.oficioDonacionEliminar = false; // *************************** maquina
        this.oficioDonacionBuscar = this.oficioDonacionAgregar = true; // ************************************************************************************* maquina
        this.accion = 0; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    OficioDonacionCrudComponent.prototype.limpiarCampos = function () {
        this.oficioDonacion = new _shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_7__["OficioDonacion"]();
        this.usuarioUltMovOficioDonacionUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_10__["Usuario"]();
        this.idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacionEleccion = new _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_17__["RecepcionSolicitudEvaluacion"]();
        this.oficioDonacionChange.emit(this.oficioDonacion);
        this.oficioDonacionSeleccion = this.oficioDonacionCancelar = this.oficioDonacionGuardar = this.oficioDonacionActualizar = this.oficioDonacionEliminar = false; // *************************** maquina
        this.oficioDonacionBuscar = this.oficioDonacionAgregar = true; // ************************************************************************************* maquina
        this.accion = 6; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    OficioDonacionCrudComponent.prototype.evn_lazy_recepcionSolicitudEvaluacion = function (recepcionSolicitudEvaluacion, objeto) {
        objeto.recepcionSolicitudEvaluacion = new _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_17__["RecepcionSolicitudEvaluacion"](recepcionSolicitudEvaluacion);
        objeto.oficioDonacion_service.getOficioDonacionByIdrecepcionSolicitudEvaluacion(objeto.recepcionSolicitudEvaluacion, objeto.evn_getOficioDonacionByIdRecepcion, objeto);
        // objeto.recepcionSolicitudEvaluacionChange.emit(
        //   objeto.recepcionSolicitudEvaluacion
        // );
        // objeto.configuarCombosObjetos();
        // objeto.recepcionSolicitudEvaluacionLazy = true;
    };
    OficioDonacionCrudComponent.prototype.evn_getOficioDonacionByIdRecepcion = function (oficio, objeto) {
        (oficio);
        if (oficio.id) {
            objeto.oficioDonacion = oficio;
            objeto.almacenTejido = oficio.almacenTejido;
            objeto.gestionMuestraMicrobiologia = oficio.gestionMuestraMicrobiologia;
            objeto.documentacionDonacion = oficio.documentacionDonacion;
            objeto.documentacionDonacion.idCenatraCi = objeto.recepcionSolicitudEvaluacion.idbtcCi;
            objeto.caracteristicaDonacion = oficio.caracteristicaDonacion;
        }
        (objeto.recepcionSolicitudEvaluacion.idbtcCi);
        if (objeto.recepcionSolicitudEvaluacion.idbtcCi) {
            var split = objeto.recepcionSolicitudEvaluacion.idbtcCi.split('/');
            objeto.documentacionDonacion.idCenatraCi = split[1];
            (split[1]);
        }
        if (objeto.recepcionSolicitudEvaluacion.idbtcCd) {
            var split = objeto.recepcionSolicitudEvaluacion.idbtcCd.split('/');
            objeto.documentacionDonacion.idCenatraCd = split[1];
        }
    };
    OficioDonacionCrudComponent.prototype.doSave = function () {
        this.oficioDonacion.idrecepcionSolicitudEvaluacion = {};
        this.oficioDonacion.idrecepcionSolicitudEvaluacion.id = this.recepcionSolicitudEvaluacion.id;
        this.oficioDonacion.idrecepcionSolicitudEvaluacion.idbtcCi = this.recepcionSolicitudEvaluacion.idbtcCi;
        this.oficioDonacion.idrecepcionSolicitudEvaluacion.idbtcCd = this.recepcionSolicitudEvaluacion.idbtcCd;
        this.oficioDonacion.documentacionDonacion = this.documentacionDonacion;
        this.oficioDonacion.caracteristicaDonacion = this.caracteristicaDonacion;
        this.oficioDonacion.gestionMuestraMicrobiologia = this.gestionMuestraMicrobiologia;
        this.oficioDonacion.almacenTejido = this.almacenTejido;
        this.oficioDonacion.almacenTejido.temperaturaRefrigeracion = this
            .almacenTejido.temperaturaRefrigeracion
            ? this.almacenTejido.temperaturaRefrigeracion.id
            : null;
        this.oficioDonacion.botonCorneal =
            this.oficioDonacion.botonCorneal != null
                ? this.oficioDonacion.botonCorneal
                    ? 1
                    : 0
                : null;
        this.oficioDonacion.microbiologiaCorneal =
            this.oficioDonacion.microbiologiaCorneal != null
                ? this.oficioDonacion.microbiologiaCorneal
                    ? 1
                    : 0
                : null;
        this.oficioDonacion.usuarioUltMov = {};
        this.oficioDonacion.usuarioUltMov.id = this.globalesService.dameUsuario().id;
        (this.oficioDonacion);
        if (this.oficioDonacion.id == null) {
            this.guardarOficioDonacionBack(this.oficioDonacion);
        }
        else {
            this.actualizarOficioDonacionBack(this.oficioDonacion);
        }
    };
    OficioDonacionCrudComponent.prototype.doEnviar = function () {
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
                    var evaluacion = new _evaluacion_solicitudes_shared_evaluacion_solicitud__WEBPACK_IMPORTED_MODULE_1__["EvaluacionSolicitud"]();
                    evaluacion.idrecepcionSolicitudEvaluacion = this.recepcionSolicitudEvaluacion;
                    evaluacion.usuarioUltMov = {};
                    evaluacion.usuarioUltMov.id = this.globalesService.dameUsuario().id;
                    (evaluacion);
                    this.evaluacionSolicitudService.guardarEvaluacionSolicitud(evaluacion, this.evtEnviarAvaluacion, this);
                }
            }.bind(this)
        });
    };
    OficioDonacionCrudComponent.prototype.evtEnviarAvaluacion = function (evaluacion, obj) {
        (evaluacion);
        obj.recepcionSolicitudEvaluacion.evaluacionSolicitud = evaluacion;
        bootbox.alert("Solicitud Enviada a Evaluación.");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean)
    ], OficioDonacionCrudComponent.prototype, "ocultarConjuntosOficioDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", String)
    ], OficioDonacionCrudComponent.prototype, "nombre", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Boolean)
    ], OficioDonacionCrudComponent.prototype, "validaciones", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", Object)
    ], OficioDonacionCrudComponent.prototype, "validacionesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", _shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_7__["OficioDonacion"])
    ], OficioDonacionCrudComponent.prototype, "oficioDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", Object)
    ], OficioDonacionCrudComponent.prototype, "oficioDonacionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", Object)
    ], OficioDonacionCrudComponent.prototype, "oficioDonacionTablaChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", _almacen_tejidos_shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_21__["AlmacenTejido"])
    ], OficioDonacionCrudComponent.prototype, "almacenTejido", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", _gestion_muestra_microbiologias_shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_22__["GestionMuestraMicrobiologia"])
    ], OficioDonacionCrudComponent.prototype, "gestionMuestraMicrobiologia", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", _documentacion_donaciones_shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_23__["DocumentacionDonacion"])
    ], OficioDonacionCrudComponent.prototype, "documentacionDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", _caracteristica_donaciones_shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_24__["CaracteristicaDonacion"])
    ], OficioDonacionCrudComponent.prototype, "caracteristicaDonacion", void 0);
    OficioDonacionCrudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-oficio-donacion-crud",
            template: __webpack_require__(/*! ./oficio-donacion-crud.component.html */ "./src/app/oficio-donaciones/oficio-donacion-crud/oficio-donacion-crud.component.html"),
            styles: [__webpack_require__(/*! ./oficio-donacion-crud.component.css */ "./src/app/oficio-donaciones/oficio-donacion-crud/oficio-donacion-crud.component.css")],
            providers: [
                _shared_globales_service__WEBPACK_IMPORTED_MODULE_4__["GlobalesService"],
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_file_service__WEBPACK_IMPORTED_MODULE_6__["FileService"],
                _shared_oficio_donacion_service__WEBPACK_IMPORTED_MODULE_8__["OficioDonacionService"],
                _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_11__["UsuarioService"],
                _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_15__["EntidadFederativaService"],
                _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_13__["PerfilRedIsssteService"],
                //                PerfilBtcService,
                _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_14__["HospitalService"],
                _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_12__["UsuarioBtcService"],
                _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_16__["PerfilService"],
                _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_18__["RecepcionSolicitudEvaluacionService"],
                _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_20__["CausaMuerteService"],
                _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_19__["SolicitudEvaluacionCornealService"],
                _evaluacion_solicitudes_shared_evaluacion_solicitud_service__WEBPACK_IMPORTED_MODULE_0__["EvaluacionSolicitudService"]
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_4__["GlobalesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
            _shared_file_service__WEBPACK_IMPORTED_MODULE_6__["FileService"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            _shared_oficio_donacion_service__WEBPACK_IMPORTED_MODULE_8__["OficioDonacionService"],
            _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_11__["UsuarioService"],
            _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_12__["UsuarioBtcService"],
            _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_13__["PerfilRedIsssteService"],
            _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_14__["HospitalService"],
            _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_15__["EntidadFederativaService"],
            _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_16__["PerfilService"],
            _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion_service__WEBPACK_IMPORTED_MODULE_18__["RecepcionSolicitudEvaluacionService"],
            _solicitud_evaluacion_corneales_shared_solicitud_evaluacion_corneal_service__WEBPACK_IMPORTED_MODULE_19__["SolicitudEvaluacionCornealService"],
            _causa_muertes_shared_causa_muerte_service__WEBPACK_IMPORTED_MODULE_20__["CausaMuerteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _evaluacion_solicitudes_shared_evaluacion_solicitud_service__WEBPACK_IMPORTED_MODULE_0__["EvaluacionSolicitudService"]])
    ], OficioDonacionCrudComponent);
    return OficioDonacionCrudComponent;
}());



/***/ }),

/***/ "./src/app/oficio-donaciones/oficio-donacion-list-kendo/oficio-donacion-list-kendo.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/oficio-donaciones/oficio-donacion-list-kendo/oficio-donacion-list-kendo.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Tipos para oficioDonacion-list-kendo*/\nh3 { text-transform: uppercase;} \n"

/***/ }),

/***/ "./src/app/oficio-donaciones/oficio-donacion-list-kendo/oficio-donacion-list-kendo.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/oficio-donaciones/oficio-donacion-list-kendo/oficio-donacion-list-kendo.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!usuariologueado\" >\n    <div class=\"card\">\n        <div align=\"center\" class=\"card-header\"><h3>{{configuracionOficioDonacion.titulo}}</h3></div>\n        <div class=\"card-body\">\n            <div id=\"div_oficioDonacion_{{nombregrid}}\">\n                <div id=\"grid_oficioDonacion_{{nombregrid}}\"></div>\n            </div>\n        </div>\t\t\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/oficio-donaciones/oficio-donacion-list-kendo/oficio-donacion-list-kendo.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/oficio-donaciones/oficio-donacion-list-kendo/oficio-donacion-list-kendo.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: OficioDonacionListKendoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OficioDonacionListKendoComponent", function() { return OficioDonacionListKendoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/oficio-donacion */ "./src/app/oficio-donaciones/shared/oficio-donacion.ts");
/* harmony import */ var _shared_configurar_oficio_donacion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/configurar-oficio-donacion */ "./src/app/oficio-donaciones/shared/configurar-oficio-donacion.ts");
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
var OficioDonacionListKendoComponent = /** @class */ (function () {
    function OficioDonacionListKendoComponent(urlprovider, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    globalesService) {
        this.urlprovider = urlprovider;
        this.coreService = coreService;
        this.globalesService = globalesService;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "", "permiso": 0, "etiqueta": "" };
        this.oficioDonacionSeleccionado = new _shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_3__["OficioDonacion"]();
        this.configuracionOficioDonacion = new _shared_configurar_oficio_donacion__WEBPACK_IMPORTED_MODULE_4__["ConfigurarOficioDonacion"]();
        this.nombregrid = "";
        this.evtOficioDonacionSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "oficioDonacion";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'oficioDonacion'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'oficioDonacion'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }
    OficioDonacionListKendoComponent.prototype.actualizaTituloInicial = function () {
        if (this.configuracionOficioDonacion.titulo.indexOf("Catálogo") != -1) {
            this.configuracionOficioDonacion.titulo = "Catálogo " + this.permisosTabla.etiqueta;
        }
    };
    OficioDonacionListKendoComponent.prototype.ngOnChanges = function (changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionOficioDonacion && changes.configuracionOficioDonacion.currentValue &&
            (changes.configuracionOficioDonacion.previousValue instanceof _shared_configurar_oficio_donacion__WEBPACK_IMPORTED_MODULE_4__["ConfigurarOficioDonacion"])) {
            if (changes.configuracionOficioDonacion.currentValue.permisosAtributos)
                this.permisosAtributos = changes.configuracionOficioDonacion.currentValue.permisosAtributos;
            if (changes.configuracionOficioDonacion.currentValue.permisosTabla)
                this.permisosTabla = changes.configuracionOficioDonacion.currentValue.permisosTabla;
            if ($("#grid_oficioDonacion_" + this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    };
    OficioDonacionListKendoComponent.prototype.ngOnInit = function () {
        self["grid_oficioDonacion_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var ejecutarpermisos = true;
        if (this.configuracionOficioDonacion.permisosAtributos &&
            this.configuracionOficioDonacion.permisosTabla)
            ejecutarpermisos = false;
        if (this.usuariologueado && ejecutarpermisos) {
            if (this.usuariologueado.perfil) {
                var tablas = [
                    "oficioDonacion",
                ];
                var parametros = {
                    "id_usu": this.usuariologueado.id,
                    "tablas": tablas,
                    "id_exp": -1
                };
                this.coreService.permisos(parametros, this.evtCorePermisos, this);
                //                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                //                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'OficioDonacion'";
                //                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'OficioDonacion'";
                //                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'OficioDonacion'";
                //                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
                //                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
                //                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
            }
        }
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        if (this.configuracionOficioDonacion.permisosAtributos)
            this.permisosAtributos = this.configuracionOficioDonacion.permisosAtributos;
        if (this.configuracionOficioDonacion.permisosTabla)
            this.permisosTabla = this.configuracionOficioDonacion.permisosTabla;
        this.configuraGrid();
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    OficioDonacionListKendoComponent.prototype.evtCorePermisos = function (permisos, obj) {
        if (permisos && permisos.oficioDonacion && permisos.oficioDonacion.PermisoAtributo && permisos.oficioDonacion.PermisoAtributo.length > 0
            && !obj.configuracionOficioDonacion.permisosAtributos) {
            obj.globalesService.evtAtributos(permisos.oficioDonacion.PermisoAtributo, obj);
            //            obj.permisosAtributos = permisos.OficioDonacion.PermisoAtributo ;
        }
        if (permisos && permisos.oficioDonacion && permisos.oficioDonacion.PermisoTabla && permisos.oficioDonacion.PermisoTabla.length > 0
            && !obj.configuracionOficioDonacion.permisosTabla) {
            obj.globalesService.evtTablas(permisos.oficioDonacion.PermisoTabla, obj);
            //            obj.permisosTabla = permisos.OficioDonacion.PermisoTabla[0] ;
            //            obj.permisosaccionesInicio();
        }
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    OficioDonacionListKendoComponent.prototype.configuraGrid = function () {
        var _this = this;
        if ($("#grid_oficioDonacion_" + this.nombregrid).data("kendoGrid")) {
        }
        else {
            setTimeout(function () {
                _this.inicializaGrid();
                _this.configuraGrid();
            }, 300);
        }
    };
    OficioDonacionListKendoComponent.prototype.sourcegrid = function () {
        function completar(e) {
            (e);
        }
        ;
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        if (this.configuracionOficioDonacion.campoAgEl != null
            && this.configuracionOficioDonacion.oficioDonacionConsulta
            && this.configuracionOficioDonacion.oficioDonacionConsulta.isOk
            && !this.configuracionOficioDonacion.oficioDonacionConsulta.isOk())
            return;
        if (this.configuracionOficioDonacion.oficioDonacionConsulta) {
            if (!this.configuracionOficioDonacion.campoAgEl && this.configuracionOficioDonacion.oficioDonacionConsulta instanceof _shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_3__["OficioDonacion"])
                this.configuracionOficioDonacion.rutaLista = this.crudServiceBaseUrl + "/getOficioDonacionesByDto";
            this.lista = this.configuracionOficioDonacion.lecturaP(completar, this.configuracionOficioDonacion.oficioDonacionConsulta);
            if (this.configuracionOficioDonacion.campoAgEl) {
                this.rutaAgregar = this.configuracionOficioDonacion.agregarP(function () { }, this.configuracionOficioDonacion.campoAgEl);
                this.rutaEliminar = this.configuracionOficioDonacion.eliminarP(function () { }, this.configuracionOficioDonacion.campoAgEl);
            }
            else {
                this.rutaAgregar = this.configuracionOficioDonacion.agregarP(completar, this.configuracionOficioDonacion.oficioDonacionConsulta);
                this.rutaEliminar = this.configuracionOficioDonacion.eliminarP(completar, this.configuracionOficioDonacion.oficioDonacionConsulta);
            }
        }
        else {
            this.lista = this.configuracionOficioDonacion.lectura();
            this.rutaAgregar = this.configuracionOficioDonacion.agregar();
            this.rutaEliminar = this.configuracionOficioDonacion.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this, "oficioDonacion", "id")) {
            modelo["id"] = "id";
        }
        var campos = {};
        if (this.globalesService.avisible(this, "oficioDonacion", "id")) {
            campos["id"] = { editable: false, nullable: true, type: "number" };
        }
        if (this.globalesService.avisible(this, "oficioDonacion", "idrecepcionSolicitudEvaluacion")) {
            campos["idrecepcionSolicitudEvaluacion"] = { editable: this.globalesService.aenable(this, "oficioDonacion", "idrecepcionSolicitudEvaluacion"), nullable: true, type: "object", defaultValue: { "id": "", "horaRecepcion": "" } };
        }
        if (this.globalesService.avisible(this, "oficioDonacion", "botonCorneal")) {
            campos["botonCorneal"] = { editable: this.globalesService.aenable(this, "oficioDonacion", "botonCorneal"), nullable: true };
        }
        if (this.globalesService.avisible(this, "oficioDonacion", "microbiologiaCorneal")) {
            campos["microbiologiaCorneal"] = { editable: this.globalesService.aenable(this, "oficioDonacion", "microbiologiaCorneal"), nullable: true };
        }
        if (this.globalesService.avisible(this, "oficioDonacion", "incidenciaTejido")) {
            campos["incidenciaTejido"] = { editable: this.globalesService.aenable(this, "oficioDonacion", "incidenciaTejido"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "oficioDonacion", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this, "oficioDonacion", "fechaRegistro"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "oficioDonacion", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this, "oficioDonacion", "fechaActualizacion"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "oficioDonacion", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this, "oficioDonacion", "fechaBaja"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "oficioDonacion", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this, "oficioDonacion", "usuarioUltMov"), nullable: true, type: "object", defaultValue: { "id": "", "password": "" } };
        }
        if (this.globalesService.avisible(this, "oficioDonacion", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this, "oficioDonacion", "status"), nullable: true, type: "string", defaultValue: "1" };
        }
        modelo["fields"] = campos;
        var slf = this;
        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionOficioDonacion.rutaActualizar,
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
            if (self.configuracionOficioDonacion.campoAgEl) {
                if (self.configuracionOficioDonacion.tipocampoAgEl == "OficioDonacionOficioDonacion")
                    self.configuracionOficioDonacion.campoAgEl.oficioDonacion2 = options.models[0];
                else
                    self.configuracionOficioDonacion.campoAgEl.oficioDonacion = options.models[0];
                return JSON.stringify(self.configuracionOficioDonacion.campoAgEl);
            }
            else if (est.options[operation].data.models.oficioDonacion) {
                est.options[operation].data.models.oficioDonacion2 = options.models[0];
                return JSON.stringify(est.options[operation].data.models);
            }
            return JSON.stringify(options.models[0]);
        }
    };
    OficioDonacionListKendoComponent.prototype.inicializaGrid = function () {
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        this.sourcegrid();
        var columnas = [];
        if (this.globalesService.avisible(this, "oficioDonacion", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this, "oficioDonacion", "id"), editor: this.globalesService.txtNumero });
        }
        if (this.globalesService.avisible(this, "oficioDonacion", "idrecepcionSolicitudEvaluacion")) {
            columnas.push({ field: "idrecepcionSolicitudEvaluacion", title: this.globalesService.aetiqueta(this, "oficioDonacion", "idrecepcionSolicitudEvaluacion"), editor: idrecepcionSolicitudEvaluacionDropDownEditor, template: " #if (idrecepcionSolicitudEvaluacion){#   #=idrecepcionSolicitudEvaluacion.horaRecepcion# # } # " });
        }
        if (this.globalesService.avisible(this, "oficioDonacion", "botonCorneal")) {
            columnas.push({ field: "botonCorneal", title: this.globalesService.aetiqueta(this, "oficioDonacion", "botonCorneal") });
        }
        if (this.globalesService.avisible(this, "oficioDonacion", "microbiologiaCorneal")) {
            columnas.push({ field: "microbiologiaCorneal", title: this.globalesService.aetiqueta(this, "oficioDonacion", "microbiologiaCorneal") });
        }
        if (this.globalesService.avisible(this, "oficioDonacion", "incidenciaTejido")) {
            columnas.push({ field: "incidenciaTejido", title: this.globalesService.aetiqueta(this, "oficioDonacion", "incidenciaTejido"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "oficioDonacion", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this, "oficioDonacion", "fechaRegistro"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "oficioDonacion", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this, "oficioDonacion", "fechaActualizacion"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "oficioDonacion", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this, "oficioDonacion", "fechaBaja"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "oficioDonacion", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this, "oficioDonacion", "usuarioUltMov"), editor: usuarioUltMovDropDownEditor, template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # " });
        }
        if (this.globalesService.avisible(this, "oficioDonacion", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this, "oficioDonacion", "status"), editor: this.globalesService.estadoDropDownEditor,
                template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this, "oficioDonacion"))
            op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this, "oficioDonacion")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this, "oficioDonacion")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this, "oficioDonacion") && this.configuracionOficioDonacion.oficioDonacionConsulta != null) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid)
            $("#grid_oficioDonacion_" + this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_oficioDonacion_" + this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionOficioDonacion.altoComponente,
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
        this.grid = $("#grid_oficioDonacion_" + this.nombregrid).data("kendoGrid");
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
    OficioDonacionListKendoComponent.prototype.showDetails = function (e) {
        e.preventDefault();
        //        this.grid = $("#grid_oficioDonacion_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        var gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.oficioDonacionSeleccionado = new _shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_3__["OficioDonacion"]();
        gridac.oficioDonacionSeleccionado.from(dataItem);
        gridac.evtOficioDonacionSeleccionado.emit(gridac.oficioDonacionSeleccionado);
        (gridac.oficioDonacionSeleccionado);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_configurar_oficio_donacion__WEBPACK_IMPORTED_MODULE_4__["ConfigurarOficioDonacion"])
    ], OficioDonacionListKendoComponent.prototype, "configuracionOficioDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OficioDonacionListKendoComponent.prototype, "nombregrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("oficioDonacionSeleccionado"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], OficioDonacionListKendoComponent.prototype, "evtOficioDonacionSeleccionado", void 0);
    OficioDonacionListKendoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-oficio-donacion-list-kendo',
            template: __webpack_require__(/*! ./oficio-donacion-list-kendo.component.html */ "./src/app/oficio-donaciones/oficio-donacion-list-kendo/oficio-donacion-list-kendo.component.html"),
            styles: [__webpack_require__(/*! ./oficio-donacion-list-kendo.component.css */ "./src/app/oficio-donaciones/oficio-donacion-list-kendo/oficio-donacion-list-kendo.component.css")],
            providers: [
                //             PermisoTablaService,
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_url_provider__WEBPACK_IMPORTED_MODULE_1__["URLProvider"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"]])
    ], OficioDonacionListKendoComponent);
    return OficioDonacionListKendoComponent;
}());



/***/ }),

/***/ "./src/app/oficio-donaciones/oficio-donacion-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/oficio-donaciones/oficio-donacion-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: OficioDonacionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OficioDonacionRoutingModule", function() { return OficioDonacionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _oficio_donaciones_oficio_donacion_list_kendo_oficio_donacion_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../oficio-donaciones/oficio-donacion-list-kendo/oficio-donacion-list-kendo.component */ "./src/app/oficio-donaciones/oficio-donacion-list-kendo/oficio-donacion-list-kendo.component.ts");
/* harmony import */ var _oficio_donaciones_oficio_donacion_crud_oficio_donacion_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../oficio-donaciones/oficio-donacion-crud/oficio-donacion-crud.component */ "./src/app/oficio-donaciones/oficio-donacion-crud/oficio-donacion-crud.component.ts");
/* harmony import */ var _oficio_donaciones_oficio_donacion_table_oficio_donacion_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../oficio-donaciones/oficio-donacion-table/oficio-donacion-table.component */ "./src/app/oficio-donaciones/oficio-donacion-table/oficio-donacion-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'oficio-donacion-list-kendo', component: _oficio_donaciones_oficio_donacion_list_kendo_oficio_donacion_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__["OficioDonacionListKendoComponent"] },
    { path: 'oficio-donacion-crud', component: _oficio_donaciones_oficio_donacion_crud_oficio_donacion_crud_component__WEBPACK_IMPORTED_MODULE_3__["OficioDonacionCrudComponent"] },
    { path: 'oficio-donacion-crud/:id', component: _oficio_donaciones_oficio_donacion_crud_oficio_donacion_crud_component__WEBPACK_IMPORTED_MODULE_3__["OficioDonacionCrudComponent"] },
    { path: 'oficio-donacion-table', component: _oficio_donaciones_oficio_donacion_table_oficio_donacion_table_component__WEBPACK_IMPORTED_MODULE_4__["OficioDonacionTableComponent"] },
];
var OficioDonacionRoutingModule = /** @class */ (function () {
    function OficioDonacionRoutingModule() {
    }
    OficioDonacionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], OficioDonacionRoutingModule);
    return OficioDonacionRoutingModule;
}());



/***/ }),

/***/ "./src/app/oficio-donaciones/oficio-donacion-table/oficio-donacion-table.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/oficio-donaciones/oficio-donacion-table/oficio-donacion-table.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/oficio-donaciones/oficio-donacion-table/oficio-donacion-table.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/oficio-donaciones/oficio-donacion-table/oficio-donacion-table.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"usuariologueado\" >\n<div class=\"card\">\n<div class=\"card-header\"><h1>Busqueda {{permisosTabla?.etiqueta}}</h1></div>\n<div class=\"card-body\">\n<div class=\"container-fluid\" >    \n\n<table *ngIf=\"muestraTabla\" id=\"tabla_oficioDonacion\" class=\"table \" cellspacing=\"0\" width=\"100%\">\n    <thead>\n        <tr>\n            <th [class.hidden]=\"!avisible('oficioDonacion','id')\" >{{aetiqueta('oficioDonacion','id')}}</th>\n            <th [class.hidden]=\"!avisible('oficioDonacion','idrecepcionSolicitudEvaluacion')\" >{{aetiqueta('oficioDonacion','idrecepcionSolicitudEvaluacion')}}</th>\n            <th [class.hidden]=\"!avisible('oficioDonacion','botonCorneal')\" >{{aetiqueta('oficioDonacion','botonCorneal')}}</th>\n            <th [class.hidden]=\"!avisible('oficioDonacion','microbiologiaCorneal')\" >{{aetiqueta('oficioDonacion','microbiologiaCorneal')}}</th>\n            <th [class.hidden]=\"!avisible('oficioDonacion','incidenciaTejido')\" >{{aetiqueta('oficioDonacion','incidenciaTejido')}}</th>\n            <th [class.hidden]=\"!avisible('oficioDonacion','fechaRegistro')\" >{{aetiqueta('oficioDonacion','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('oficioDonacion','fechaActualizacion')\" >{{aetiqueta('oficioDonacion','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('oficioDonacion','fechaBaja')\" >{{aetiqueta('oficioDonacion','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('oficioDonacion','usuarioUltMov')\" >{{aetiqueta('oficioDonacion','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('oficioDonacion','status')\" >{{aetiqueta('oficioDonacion','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </thead>\n    <tfoot>\n        <tr>\n            <th [class.hidden]=\"!avisible('oficioDonacion','id')\" >{{aetiqueta('oficioDonacion','id')}}</th>\n            <th [class.hidden]=\"!avisible('oficioDonacion','idrecepcionSolicitudEvaluacion')\" >{{aetiqueta('oficioDonacion','idrecepcionSolicitudEvaluacion')}}</th>\n            <th [class.hidden]=\"!avisible('oficioDonacion','botonCorneal')\" >{{aetiqueta('oficioDonacion','botonCorneal')}}</th>\n            <th [class.hidden]=\"!avisible('oficioDonacion','microbiologiaCorneal')\" >{{aetiqueta('oficioDonacion','microbiologiaCorneal')}}</th>\n            <th [class.hidden]=\"!avisible('oficioDonacion','incidenciaTejido')\" >{{aetiqueta('oficioDonacion','incidenciaTejido')}}</th>\n            <th [class.hidden]=\"!avisible('oficioDonacion','fechaRegistro')\" >{{aetiqueta('oficioDonacion','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('oficioDonacion','fechaActualizacion')\" >{{aetiqueta('oficioDonacion','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('oficioDonacion','fechaBaja')\" >{{aetiqueta('oficioDonacion','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('oficioDonacion','usuarioUltMov')\" >{{aetiqueta('oficioDonacion','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('oficioDonacion','status')\" >{{aetiqueta('oficioDonacion','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </tfoot>\n</table>\n</div>\n<app-oficio-donacion [class.hidden]=\"primero\" [(oficioDonacion)]=\"oficioDonacionSeleccionado\" (oficioDonacionTablaChange)=\"cambio_oficioDonacion($event)\"> </app-oficio-donacion>    \n</div>\n</div>\n</div>\n\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/oficio-donaciones/oficio-donacion-table/oficio-donacion-table.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/oficio-donaciones/oficio-donacion-table/oficio-donacion-table.component.ts ***!
  \********************************************************************************************/
/*! exports provided: OficioDonacionTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OficioDonacionTableComponent", function() { return OficioDonacionTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/oficio-donacion */ "./src/app/oficio-donaciones/shared/oficio-donacion.ts");
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






var OficioDonacionTableComponent = /** @class */ (function () {
    function OficioDonacionTableComponent(globalesService, permisoAtributoService, permisoTablaService, urlProvider) {
        this.globalesService = globalesService;
        this.permisoAtributoService = permisoAtributoService;
        this.permisoTablaService = permisoTablaService;
        this.urlProvider = urlProvider;
        this.primero = true;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "oficioDonacion", "permiso": 0, "etiqueta": "" };
        this.ptabla = false;
        this.pattr = false;
        this.oficioDonacionSeleccionado = new _shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_1__["OficioDonacion"]();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                discon = "with perfil.id = " + this.usuariologueado.perfil.id;
                var cadena2 = "select pa from PermisoTabla as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'oficioDonacion'";
                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
            }
        }
    }
    OficioDonacionTableComponent.prototype.evtTablas = function (lista, obj) {
        if (lista.length >= 0) {
            obj.permisosTabla = lista[0];
            obj.ptabla = true;
            var discon = "with perfil.id = " + obj.usuariologueado.perfil.id;
            var cadena1 = "select pa from PermisoAtributo as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'oficioDonacion'";
            obj.permisoAtributoService.custom(cadena1, obj.evtAtributos, obj);
        }
    };
    OficioDonacionTableComponent.prototype.evtAtributos = function (lista, obj) {
        obj.permisosAtributos = lista;
        obj.pattr = true;
        if (obj.ptabla && obj.pattr) {
            setTimeout(function () { obj.getColumnas(obj); }, 500);
        }
    };
    Object.defineProperty(OficioDonacionTableComponent.prototype, "muestraTabla", {
        get: function () {
            return this.ptabla && this.pattr;
        },
        enumerable: true,
        configurable: true
    });
    OficioDonacionTableComponent.prototype.getColumnas = function (obj) {
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        if (!this.avisible("oficioDonacion", "id"))
            columnasNoVisibles.push(0);
        columnas.push({ "data": "id" });
        if (!this.avisible("oficioDonacion", "idrecepcionSolicitudEvaluacion"))
            columnasNoVisibles.push(1);
        columnas.push({
            "data": function (oObj) {
                if (oObj.idrecepcionSolicitudEvaluacion)
                    return "<span style=\"cursor: pointer\">" + oObj.idrecepcionSolicitudEvaluacion.expedienteFisico + "</span>";
                return "";
            }
        });
        if (!this.avisible("oficioDonacion", "botonCorneal"))
            columnasNoVisibles.push(2);
        columnas.push({ "data": "botonCorneal" });
        if (!this.avisible("oficioDonacion", "microbiologiaCorneal"))
            columnasNoVisibles.push(3);
        columnas.push({ "data": "microbiologiaCorneal" });
        if (!this.avisible("oficioDonacion", "incidenciaTejido"))
            columnasNoVisibles.push(4);
        columnas.push({ "data": "incidenciaTejido" });
        if (!this.avisible("oficioDonacion", "fechaRegistro"))
            columnasNoVisibles.push(5);
        columnas.push({ "data": "fechaRegistro" });
        if (!this.avisible("oficioDonacion", "fechaActualizacion"))
            columnasNoVisibles.push(6);
        columnas.push({ "data": "fechaActualizacion" });
        if (!this.avisible("oficioDonacion", "fechaBaja"))
            columnasNoVisibles.push(7);
        columnas.push({ "data": "fechaBaja" });
        if (!this.avisible("oficioDonacion", "usuarioUltMov"))
            columnasNoVisibles.push(8);
        columnas.push({
            "data": function (oObj) {
                if (oObj.usuarioUltMov)
                    return "<span style=\"cursor: pointer\">" + oObj.usuarioUltMov.username + "</span>";
                return "";
            }
        });
        if (!this.avisible("oficioDonacion", "status"))
            columnasNoVisibles.push(9);
        columnas.push({ "data": "status" });
        if (self.pacutalizar("oficioDonacion"))
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
        var tabla = $('#tabla_oficioDonacion').DataTable({
            "columnDefs": novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            "initComplete": function (settings, json) {
                var xs = $("#tabla_oficioDonacion_wrapper").find(".row");
                $($(xs[0]).find(".col-sm-6")[0]).
                    find(".dataTables_length").
                    append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function () {
                    self.oficioDonacionSeleccionado = new _shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_1__["OficioDonacion"]();
                    self.primero = false;
                });
            },
            "ajax": {
                "url": self.urlProvider.serverURL + "oficioDonacion/getOficioDonaciones",
                "type": "POST",
                "contentType": "application/json",
                "datatype": 'json',
                "dataSrc": "",
            },
            "columns": columnas,
        });
        $('#tabla_oficioDonacion tbody').on('click', 'td', function () {
            if (this.cellIndex == $(this).parent().find("td").length - 1) {
                var data = $('#tabla_oficioDonacion').DataTable().row(this).data();
                self.oficioDonacionSeleccionado = new _shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_1__["OficioDonacion"]();
                self.oficioDonacionSeleccionado.from(data);
                self.primero = false;
                if ($(this).parent().hasClass('selected')) {
                    $(this).parent().removeClass('selected');
                }
                else {
                    $('#tabla_oficioDonacion').DataTable().$('tr.selected').removeClass('selected');
                    $(this).parent().addClass('selected');
                }
            }
        });
    };
    OficioDonacionTableComponent.prototype.ngOnInit = function () {
    };
    OficioDonacionTableComponent.prototype.cambio_oficioDonacion = function (oficioDonacion) {
        $('#tabla_oficioDonacion').DataTable().ajax.reload(null, false);
        this.primero = true;
    };
    // **********************************************************************************
    // **********************************************************************************
    // **           I N I C I A N   P E R M I S O S   P A R A   P E R F I L E S  
    // **********************************************************************************
    // **********************************************************************************
    OficioDonacionTableComponent.prototype.paux = function (tabla, permiso) {
        if (this.permisosTabla.tabla == tabla && (this.permisosTabla.permiso & permiso) == permiso)
            return true;
        return false;
    };
    OficioDonacionTableComponent.prototype.preporteWord = function (tabla) { return this.paux(tabla, 64); };
    OficioDonacionTableComponent.prototype.preporteExcel = function (tabla) { return this.paux(tabla, 32); };
    OficioDonacionTableComponent.prototype.preportePdf = function (tabla) { return this.paux(tabla, 16); };
    OficioDonacionTableComponent.prototype.pbuscar = function (tabla) { return this.paux(tabla, 8); };
    OficioDonacionTableComponent.prototype.pacutalizar = function (tabla) { return this.paux(tabla, 4); };
    OficioDonacionTableComponent.prototype.peliminar = function (tabla) { return this.paux(tabla, 2); };
    OficioDonacionTableComponent.prototype.pagregar = function (tabla) { return this.paux(tabla, 1); };
    //******************************************************************************************
    //*******  P E R M I S O S   S O B R E   A T R I B U T O S  ********************************
    //******************************************************************************************
    OficioDonacionTableComponent.prototype.aetiqueta = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo)
                return elemento.etiqueta;
        }
        return "";
    };
    OficioDonacionTableComponent.prototype.avalidacion = function (tabla, atributo) {
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
    OficioDonacionTableComponent.prototype.amensaje = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo) {
                return elemento.mensaje;
            }
        }
        return null;
    };
    OficioDonacionTableComponent.prototype.aeditable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 8) == 8)
                return true;
        }
        return false;
    };
    OficioDonacionTableComponent.prototype.arequerido = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 4) == 4)
                return true;
        }
        return false;
    };
    OficioDonacionTableComponent.prototype.avisible = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 2) == 2)
                return true;
        }
        return false;
    };
    OficioDonacionTableComponent.prototype.aenable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 1) == 1)
                return true;
        }
        return false;
    };
    OficioDonacionTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-oficio-donacion-table',
            template: __webpack_require__(/*! ./oficio-donacion-table.component.html */ "./src/app/oficio-donaciones/oficio-donacion-table/oficio-donacion-table.component.html"),
            styles: [__webpack_require__(/*! ./oficio-donacion-table.component.css */ "./src/app/oficio-donaciones/oficio-donacion-table/oficio-donacion-table.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
                _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
                _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
            _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
            _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            _shared_url_provider__WEBPACK_IMPORTED_MODULE_3__["URLProvider"]])
    ], OficioDonacionTableComponent);
    return OficioDonacionTableComponent;
}());



/***/ }),

/***/ "./src/app/oficio-donaciones/oficio-donacion.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/oficio-donaciones/oficio-donacion.module.ts ***!
  \*************************************************************/
/*! exports provided: OficioDonacionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OficioDonacionModule", function() { return OficioDonacionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _oficio_donacion_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oficio-donacion-routing.module */ "./src/app/oficio-donaciones/oficio-donacion-routing.module.ts");
/* harmony import */ var _oficio_donacion_list_kendo_oficio_donacion_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oficio-donacion-list-kendo/oficio-donacion-list-kendo.component */ "./src/app/oficio-donaciones/oficio-donacion-list-kendo/oficio-donacion-list-kendo.component.ts");
/* harmony import */ var _oficio_donacion_crud_oficio_donacion_crud_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./oficio-donacion-crud/oficio-donacion-crud.component */ "./src/app/oficio-donaciones/oficio-donacion-crud/oficio-donacion-crud.component.ts");
/* harmony import */ var _oficio_donacion_conjunto_oficio_donacion_conjunto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oficio-donacion-conjunto/oficio-donacion-conjunto.component */ "./src/app/oficio-donaciones/oficio-donacion-conjunto/oficio-donacion-conjunto.component.ts");
/* harmony import */ var _oficio_donacion_oficio_donacion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./oficio-donacion/oficio-donacion.component */ "./src/app/oficio-donaciones/oficio-donacion/oficio-donacion.component.ts");
/* harmony import */ var _oficio_donacion_table_oficio_donacion_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./oficio-donacion-table/oficio-donacion-table.component */ "./src/app/oficio-donaciones/oficio-donacion-table/oficio-donacion-table.component.ts");
/* harmony import */ var _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/usuario-perfil.module */ "./src/app/shared/usuario-perfil.module.ts");
/* harmony import */ var _recepcion_solicitud_evaluaciones_recepcion_solicitud_evaluacion_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion.module */ "./src/app/recepcion-solicitud-evaluaciones/recepcion-solicitud-evaluacion.module.ts");
/* harmony import */ var _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/componentes-personalizados/personalizados.module */ "./src/app/core/componentes-personalizados/personalizados.module.ts");
/* harmony import */ var _gestion_muestra_microbiologias_gestion_muestra_microbiologia_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../gestion-muestra-microbiologias/gestion-muestra-microbiologia.module */ "./src/app/gestion-muestra-microbiologias/gestion-muestra-microbiologia.module.ts");
/* harmony import */ var _almacen_tejidos_almacen_tejido_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../almacen-tejidos/almacen-tejido.module */ "./src/app/almacen-tejidos/almacen-tejido.module.ts");
/* harmony import */ var _documentacion_donaciones_documentacion_donacion_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../documentacion-donaciones/documentacion-donacion.module */ "./src/app/documentacion-donaciones/documentacion-donacion.module.ts");
/* harmony import */ var _caracteristica_donaciones_caracteristica_donacion_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../caracteristica-donaciones/caracteristica-donacion.module */ "./src/app/caracteristica-donaciones/caracteristica-donacion.module.ts");
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
















var OficioDonacionModule = /** @class */ (function () {
    function OficioDonacionModule(parentModule) {
        if (parentModule) {
            throw new Error('OficioDonacionModule is already loaded. Import it in the AppModule only');
        }
    }
    OficioDonacionModule_1 = OficioDonacionModule;
    OficioDonacionModule.forRoot = function () {
        return {
            ngModule: OficioDonacionModule_1,
            providers: []
        };
    };
    var OficioDonacionModule_1;
    OficioDonacionModule = OficioDonacionModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_11__["PersonalizadosModule"], _oficio_donacion_routing_module__WEBPACK_IMPORTED_MODULE_3__["OficioDonacionRoutingModule"],
                _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_9__["UsuarioPerfilModule"].forRoot(),
                _recepcion_solicitud_evaluaciones_recepcion_solicitud_evaluacion_module__WEBPACK_IMPORTED_MODULE_10__["RecepcionSolicitudEvaluacionModule"],
                _gestion_muestra_microbiologias_gestion_muestra_microbiologia_module__WEBPACK_IMPORTED_MODULE_12__["GestionMuestraMicrobiologiaModule"].forRoot(),
                _almacen_tejidos_almacen_tejido_module__WEBPACK_IMPORTED_MODULE_13__["AlmacenTejidoModule"].forRoot(),
                _documentacion_donaciones_documentacion_donacion_module__WEBPACK_IMPORTED_MODULE_14__["DocumentacionDonacionModule"].forRoot(),
                _caracteristica_donaciones_caracteristica_donacion_module__WEBPACK_IMPORTED_MODULE_15__["CaracteristicaDonacionModule"].forRoot()
            ],
            declarations: [
                _oficio_donacion_list_kendo_oficio_donacion_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["OficioDonacionListKendoComponent"],
                _oficio_donacion_oficio_donacion_component__WEBPACK_IMPORTED_MODULE_7__["OficioDonacionComponent"],
                _oficio_donacion_crud_oficio_donacion_crud_component__WEBPACK_IMPORTED_MODULE_5__["OficioDonacionCrudComponent"],
                _oficio_donacion_conjunto_oficio_donacion_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["OficioDonacionConjuntoComponent"],
                _oficio_donacion_table_oficio_donacion_table_component__WEBPACK_IMPORTED_MODULE_8__["OficioDonacionTableComponent"],
            ],
            exports: [
                _oficio_donacion_list_kendo_oficio_donacion_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["OficioDonacionListKendoComponent"],
                _oficio_donacion_oficio_donacion_component__WEBPACK_IMPORTED_MODULE_7__["OficioDonacionComponent"],
                _oficio_donacion_crud_oficio_donacion_crud_component__WEBPACK_IMPORTED_MODULE_5__["OficioDonacionCrudComponent"],
                _oficio_donacion_conjunto_oficio_donacion_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["OficioDonacionConjuntoComponent"],
                _oficio_donacion_table_oficio_donacion_table_component__WEBPACK_IMPORTED_MODULE_8__["OficioDonacionTableComponent"],
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [OficioDonacionModule])
    ], OficioDonacionModule);
    return OficioDonacionModule;
}());



/***/ }),

/***/ "./src/app/oficio-donaciones/oficio-donacion/oficio-donacion.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/oficio-donaciones/oficio-donacion/oficio-donacion.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/oficio-donaciones/oficio-donacion/oficio-donacion.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/oficio-donaciones/oficio-donacion/oficio-donacion.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [hidden]=\"!usuariologueado\" #formaGeneral=\"ngForm\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <h2>{{ etiquetaGeneral }}</h2>\n        </div>\n        <div class=\"panel-body\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <!--                      <app-componente-identificador [componente]=\"'oficioDonacion'\"\n                                                   [atributo]=\"'id'\"\n                                                   [buscar]=\"oficioDonacionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosOficioDonacion['id']\"\n                                                   [(dato)]=\"oficioDonacion.id\"   class=\"w-100\" >\n                    </app-componente-identificador >\n                    <div>\n                        <app-componente-objeto [componente]=\"'oficioDonacion'\"\n                                               [atributo]=\"'idrecepcionSolicitudEvaluacion'\"\n                                               [buscar]=\"oficioDonacionBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosOficioDonacion['idrecepcionSolicitudEvaluacion']\"\n                                               [(dato)]=\"oficioDonacion.idrecepcionSolicitudEvaluacion\"  class=\"w-100\"\n                                               [ocultarConjuntos]=\"ocultarConjuntosOficioDonacion\"\n                                               [opciones]=\"lista_idrecepcionSolicitudEvaluacionOficioDonacion\"\n                                               [atributoVisible]=\"'expedienteFisico'\" [(objetoEdicion)]=\"idrecepcionSolicitudEvaluacionOficioDonacionEditar\">\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!idrecepcionSolicitudEvaluacionEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'oficioDonacion','idrecepcionSolicitudEvaluacion')\" >\n                                   <app-recepcion-solicitud-evaluacion-crud [nombre]=\"'idrecepcionSolicitudEvaluacion'\" [recepcionSolicitudEvaluacion]=\"oficioDonacion.idrecepcionSolicitudEvaluacion\" (recepcionSolicitudEvaluacionChange)=\"evtIdrecepcionSolicitudEvaluacion($event)\"\n                                                           [ocultarConjuntosRecepcionSolicitudEvaluacion]=\"'true'\" [class.hidden]=\"!idrecepcionSolicitudEvaluacionEditar\" ></app-recepcion-solicitud-evaluacion-crud>\n                            </div>\n                        </div>\n                    </div> -->\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <h4 style=\"color:black\">A. Identificación de la Donación</h4>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"row\">\n                                <label class=\"control-label\">ID CI del BTC:</label>\n                                <input class=\"form-control\" type=\"text\" [disabled]=\"true\" [value]=\"recepcionSolicitudEvaluacion.idbtcCi\" />\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"control-label\">ID CD del BTC:</label>\n                                <input class=\"form-control\" type=\"text\" [disabled]=\"true\" [value]=\"recepcionSolicitudEvaluacion.idbtcCd\" />\n                            </div>\n                        </div>\n                    </div>\n                    <hr />\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <label class=\"control-label\">Donante Cadáver:</label>\n                            <label class=\"radio-inline\" style=\"margin-left: 30px;\">\n                <input\n                  type=\"radio\"\n                  name=\"donanteCadaver\"\n                  class=\"form-checkbox-input\"\n                  [value]=\"1\"\n                  [(ngModel)]=\"donanteCadaver\"\n                />\n                PC\n              </label>\n                            <label class=\"radio-inline\">\n                <input\n                  type=\"radio\"\n                  name=\"donanteCadaver\"\n                  [value]=\"0\"\n                  class=\"form-checkbox-input\"\n                  [(ngModel)]=\"donanteCadaver\"\n                  [disabled]=\"true\"\n                />\n                ME\n              </label>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <h4>Recibidos</h4>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <label class=\"radio-inline\" style=\"margin-right: 10px;\">\n                <input\n                  type=\"checkbox\"\n                  class=\"form-checkbox-input\"\n                  name=\"expedienteFisico\"\n                  [(ngModel)]=\"oficioDonacion.botonCorneal\"\n                  [attr.disabled]=\"enable ? null : false\"\n                />\n              </label>\n                            <label class=\"control-label\">Botón Corneal (Córnea)</label>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <label class=\"radio-inline\" style=\"margin-right: 10px;\">\n                <input\n                  type=\"checkbox\"\n                  class=\"form-checkbox-input\"\n                  name=\"microbiologiaCorneal\"\n                  [(ngModel)]=\"oficioDonacion.microbiologiaCorneal\"\n                  [attr.disabled]=\"enable ? null : false\"\n                />\n              </label>\n                            <label class=\"control-label\">Microbiología Corneal</label>\n                        </div>\n                    </div>\n\n                    <app-componente-cadena-larga [componente]=\"'oficioDonacion'\" [atributo]=\"'incidenciaTejido'\" [buscar]=\"oficioDonacionBuscar\" [permisosAtributos]=\"permisosAtributos\" [(valido)]=\"validosOficioDonacion['incidenciaTejido']\" [(dato)]=\"oficioDonacion.incidenciaTejido\"\n                        class=\"w-100\">\n                    </app-componente-cadena-larga>\n\n                    <app-almacen-tejido-crud [almacenTejido]=\"almacenTejido\" [enable]=\"enable\"></app-almacen-tejido-crud>\n                    <app-gestion-muestra-microbiologia-crud [gestionMuestraMicrobiologia]=\"gestionMuestraMicrobiologia\" [enable]=\"enable\"></app-gestion-muestra-microbiologia-crud>\n                    <app-documentacion-donacion-crud [documentacionDonacion]=\"documentacionDonacion\" [recepcionSolicitudEvaluacion]=\"recepcionSolicitudEvaluacion\" [enable]=\"enable\"></app-documentacion-donacion-crud>\n                    <app-caracteristica-donacion-crud [caracteristicaDonacion]=\"caracteristicaDonacion\" [recepcionSolicitudEvaluacion]=\"recepcionSolicitudEvaluacion\" [enable]=\"enable\"></app-caracteristica-donacion-crud>\n                    <!-- <app-componente-fecha [componente]=\"'oficioDonacion'\"\n                                                   [atributo]=\"'fechaRegistro'\"\n                                                   [buscar]=\"oficioDonacionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosOficioDonacion['fechaRegistro']\"\n                                                   [(dato)]=\"oficioDonacion.fechaRegistro\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                     <app-componente-fecha [componente]=\"'oficioDonacion'\"\n                                                   [atributo]=\"'fechaActualizacion'\"\n                                                   [buscar]=\"oficioDonacionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosOficioDonacion['fechaActualizacion']\"\n                                                   [(dato)]=\"oficioDonacion.fechaActualizacion\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                     <app-componente-fecha [componente]=\"'oficioDonacion'\"\n                                                   [atributo]=\"'fechaBaja'\"\n                                                   [buscar]=\"oficioDonacionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosOficioDonacion['fechaBaja']\"\n                                                   [(dato)]=\"oficioDonacion.fechaBaja\"   class=\"w-100\" >\n                    </app-componente-fecha >  -->\n                    <!--                     <div>\n                        <app-componente-objeto [componente]=\"'oficioDonacion'\"\n                                               [atributo]=\"'usuarioUltMov'\"\n                                               [buscar]=\"oficioDonacionBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosOficioDonacion['usuarioUltMov']\"\n                                               [(dato)]=\"oficioDonacion.usuarioUltMov\"  class=\"w-100\"\n                                               [ocultarConjuntos]=\"ocultarConjuntosOficioDonacion\"\n                                               [opciones]=\"lista_usuarioUltMovOficioDonacion\"\n                                               [atributoVisible]=\"'username'\" [(objetoEdicion)]=\"usuarioUltMovOficioDonacionEditar\">\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!usuarioUltMovEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'oficioDonacion','usuarioUltMov')\" >\n                                   <app-usuario-crud [nombre]=\"'usuarioUltMov'\" [usuario]=\"oficioDonacion.usuarioUltMov\" (usuarioChange)=\"evtUsuarioUltMov($event)\"\n                                                           [ocultarConjuntosUsuario]=\"'true'\" [class.hidden]=\"!usuarioUltMovEditar\" ></app-usuario-crud>\n                            </div>\n                        </div>\n                    </div> -->\n                    <!--                      <app-componente-radio [componente]=\"'oficioDonacion'\"\n                                                   [atributo]=\"'status'\"\n                                                   [buscar]=\"oficioDonacionBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosOficioDonacion['status']\"\n                                                   [(dato)]=\"oficioDonacion.status\"   class=\"w-100\" >\n                    </app-componente-radio >  -->\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/oficio-donaciones/oficio-donacion/oficio-donacion.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/oficio-donaciones/oficio-donacion/oficio-donacion.component.ts ***!
  \********************************************************************************/
/*! exports provided: OficioDonacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OficioDonacionComponent", function() { return OficioDonacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/oficio-donacion */ "./src/app/oficio-donaciones/shared/oficio-donacion.ts");
/* harmony import */ var _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion */ "./src/app/recepcion-solicitud-evaluaciones/shared/recepcion-solicitud-evaluacion.ts");
/* harmony import */ var _almacen_tejidos_shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../almacen-tejidos/shared/almacen-tejido */ "./src/app/almacen-tejidos/shared/almacen-tejido.ts");
/* harmony import */ var _gestion_muestra_microbiologias_shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../gestion-muestra-microbiologias/shared/gestion-muestra-microbiologia */ "./src/app/gestion-muestra-microbiologias/shared/gestion-muestra-microbiologia.ts");
/* harmony import */ var _documentacion_donaciones_shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../documentacion-donaciones/shared/documentacion-donacion */ "./src/app/documentacion-donaciones/shared/documentacion-donacion.ts");
/* harmony import */ var _caracteristica_donaciones_shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../caracteristica-donaciones/shared/caracteristica-donacion */ "./src/app/caracteristica-donaciones/shared/caracteristica-donacion.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OficioDonacionComponent = /** @class */ (function () {
    function OficioDonacionComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.oficioDonacionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovOficioDonacionUsuarioEditar = false;
        this.idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacionEditar = false;
    }
    OficioDonacionComponent.prototype.actualizarOficioDonacion = function () {
        if (this.oficioDonacion.id == null) {
            this.oficioDonacionService.guardarOficioDonacion(this.oficioDonacion, this.evtGuardar, this);
        }
        else {
            this.oficioDonacionService.actualizarOficioDonacion(this.oficioDonacion, this.evtActualiza, this);
        }
    };
    OficioDonacionComponent.prototype.evtGuardar = function (oficioDonacion, obj) {
        obj.oficioDonacion = oficioDonacion;
        obj.oficioDonacionChange.emit(obj.oficioDonacion);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    };
    OficioDonacionComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.oficioDonacionChange.emit(obj.oficioDonacion);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    OficioDonacionComponent.prototype.ngOnChanges = function (changes) {
        if (changes.opcion && changes.opcion.currentValue != null) {
            if (changes.opcion.currentValue == 1) {
                this.opcion = 1;
                this.actualizarOficioDonacion();
            }
        }
        if (changes.recepcionSolicitudEvaluacion && changes.recepcionSolicitudEvaluacion.currentValue.idsolicitudEvaluacionCorneal) {
            (changes.recepcionSolicitudEvaluacion.currentValue.idsolicitudEvaluacionCorneal.idcausaMuerte.tipoCausaMuerte);
            this.donanteCadaver = changes.recepcionSolicitudEvaluacion.currentValue.idsolicitudEvaluacionCorneal.idcausaMuerte.tipoCausaMuerte == 1 ? 1 : 0;
        }
        if (changes.permisosAtributos && changes.permisosAtributos.currentValue && !this.enable) {
            changes.permisosAtributos.currentValue.forEach(function (element) {
                element.permiso = 2;
                return element;
            });
        }
    };
    OficioDonacionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OficioDonacionComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OficioDonacionComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OficioDonacionComponent.prototype, "oficioDonacionBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OficioDonacionComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OficioDonacionComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OficioDonacionComponent.prototype, "validosOficioDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_oficio_donacion__WEBPACK_IMPORTED_MODULE_1__["OficioDonacion"])
    ], OficioDonacionComponent.prototype, "oficioDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OficioDonacionComponent.prototype, "oficioDonacionService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], OficioDonacionComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OficioDonacionComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OficioDonacionComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OficioDonacionComponent.prototype, "oficioDonacionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OficioDonacionComponent.prototype, "ocultarConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OficioDonacionComponent.prototype, "lista_usuarioUltMovOficioDonacionUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OficioDonacionComponent.prototype, "lista_idrecepcionSolicitudEvaluacionOficioDonacionRecepcionSolicitudEvaluacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _recepcion_solicitud_evaluaciones_shared_recepcion_solicitud_evaluacion__WEBPACK_IMPORTED_MODULE_2__["RecepcionSolicitudEvaluacion"])
    ], OficioDonacionComponent.prototype, "recepcionSolicitudEvaluacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _almacen_tejidos_shared_almacen_tejido__WEBPACK_IMPORTED_MODULE_3__["AlmacenTejido"])
    ], OficioDonacionComponent.prototype, "almacenTejido", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _gestion_muestra_microbiologias_shared_gestion_muestra_microbiologia__WEBPACK_IMPORTED_MODULE_4__["GestionMuestraMicrobiologia"])
    ], OficioDonacionComponent.prototype, "gestionMuestraMicrobiologia", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _documentacion_donaciones_shared_documentacion_donacion__WEBPACK_IMPORTED_MODULE_5__["DocumentacionDonacion"])
    ], OficioDonacionComponent.prototype, "documentacionDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _caracteristica_donaciones_shared_caracteristica_donacion__WEBPACK_IMPORTED_MODULE_6__["CaracteristicaDonacion"])
    ], OficioDonacionComponent.prototype, "caracteristicaDonacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], OficioDonacionComponent.prototype, "enable", void 0);
    OficioDonacionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-oficio-donacion',
            template: __webpack_require__(/*! ./oficio-donacion.component.html */ "./src/app/oficio-donaciones/oficio-donacion/oficio-donacion.component.html"),
            styles: [__webpack_require__(/*! ./oficio-donacion.component.css */ "./src/app/oficio-donaciones/oficio-donacion/oficio-donacion.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], OficioDonacionComponent);
    return OficioDonacionComponent;
}());



/***/ }),

/***/ "./src/app/oficio-donaciones/shared/configurar-oficio-donacion.ts":
/*!************************************************************************!*\
  !*** ./src/app/oficio-donaciones/shared/configurar-oficio-donacion.ts ***!
  \************************************************************************/
/*! exports provided: ConfigurarOficioDonacion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurarOficioDonacion", function() { return ConfigurarOficioDonacion; });
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");

var ConfigurarOficioDonacion = /** @class */ (function () {
    //   rutaAgregar:string;
    function ConfigurarOficioDonacion() {
        this.urlprovider = new _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__["URLProvider"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "oficioDonacion";
        this.rutaLista = this.crudServiceBaseUrl + "/getOficioDonaciones";
        this.rutaAgregar = this.crudServiceBaseUrl + "/guardarOficioDonacion";
        this.rutaActualizar = this.crudServiceBaseUrl + "/actualizarOficioDonacion";
        this.rutaEliminar = this.crudServiceBaseUrl + "/eliminarOficioDonacion";
        this.titulo = "Catálogo OficioDonacion";
        this.permisosAtributos = null;
        this.permisosTabla = null;
        this.oficioDonacionConsulta = null;
        this.campoAgEl = null;
        this.tipocampoAgEl = null;
        this.altoComponente = 500;
    }
    ConfigurarOficioDonacion.prototype.lectura = function () {
        return {
            url: this.rutaLista,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarOficioDonacion.prototype.lecturaP = function (evt, dat) {
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
    ConfigurarOficioDonacion.prototype.eliminar = function () {
        return {
            url: this.rutaEliminar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarOficioDonacion.prototype.eliminarP = function (evt, dat) {
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
    ConfigurarOficioDonacion.prototype.agregar = function () {
        return {
            url: this.rutaAgregar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarOficioDonacion.prototype.agregarP = function (evt, dat) {
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
    return ConfigurarOficioDonacion;
}());



/***/ })

}]);
//# sourceMappingURL=app-oficio-donaciones-oficio-donacion-module.js.map