(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-doctor-procuradores-doctor-procurador-module"],{

/***/ "./src/app/doctor-procuradores/doctor-procurador-conjunto/doctor-procurador-conjunto.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/doctor-procuradores/doctor-procurador-conjunto/doctor-procurador-conjunto.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/doctor-procuradores/doctor-procurador-conjunto/doctor-procurador-conjunto.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/doctor-procuradores/doctor-procurador-conjunto/doctor-procurador-conjunto.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\"  >\n    <li *ngFor =  \"let doctorProcurador of listaDoctorProcurador \" [ngClass]=\"{ 'active':idSeleccionado=== 'I-'+doctorProcurador.id}\"\n        (click)=\"elegir(doctorProcurador,'I' )\" >\n        <a data-toggle=\"tab\" href=\"#tab-I-{{doctorProcurador.id}}\">{{doctorProcurador.id}}</a>\n    </li>\n    <li *ngFor =  \"let doctorProcurador of listaDoctorProcuradorN \" [ngClass]=\"{ 'active':idSeleccionado=== 'N-'+doctorProcurador.id}\"\n        (click)=\"elegir(doctorProcurador, 'N')\" >\n        <a data-toggle=\"tab\" href=\"#tab-N-{{doctorProcurador.id}}\">T-{{doctorProcurador.id}}</a>\n    </li>\n</ul>\n<div class=\"panel panel-default\"  >\n     <div  class=\"tab-content\">\n        <div *ngFor = \"let doctorProcurador of listaDoctorProcurador ; let i = index \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='I-'+doctorProcurador.id}\" id=\"tab-I-{{doctorProcurador.id}}\">\n\t\t\t<app-doctor-procurador [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [doctorProcuradorBuscar]=\"doctorProcuradorBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosDoctorProcurador]=\"validosDoctorProcurador\"  \n\t\t\t\t\t\t  [doctorProcuradorService]=\"doctorProcuradorService\" [(opcion)]=\"opcionDoctorProcurador\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(doctorProcurador)]=\"listaDoctorProcurador[i]\"  [ocultarConjuntos]=\"ocultarConjuntosDoctorProcurador\"\n                           [lista_usuarioUltMovDoctorProcuradorUsuario]=\"lista_usuarioUltMovDoctorProcuradorUsuario\" \n                           [lista_idhospitalDoctorProcuradorHospital]=\"lista_idhospitalDoctorProcuradorHospital\" \n\n\t\t\t\t\t  >\n\t\t\t</app-doctor-procurador>\n        </div>\n        <div *ngFor = \"let doctorProcurador of listaDoctorProcuradorN;  let i = index  \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='N-'+doctorProcurador.id}\" id=\"tab-N-{{doctorProcurador.id}}\">\n\t\t\t<app-doctor-procurador [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [doctorProcuradorBuscar]=\"doctorProcuradorBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosDoctorProcurador]=\"validosDoctorProcurador\"  \n\t\t\t\t\t\t  [doctorProcuradorService]=\"doctorProcuradorService\" [(opcion)]=\"opcionDoctorProcurador\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(doctorProcurador)]=\"listaDoctorProcuradorN[i]\"  [ocultarConjuntos]=\"ocultarConjuntosDoctorProcurador\"\n                           [lista_usuarioUltMovDoctorProcuradorUsuario]=\"lista_usuarioUltMovDoctorProcuradorUsuario\" \n                           [lista_idhospitalDoctorProcuradorHospital]=\"lista_idhospitalDoctorProcuradorHospital\" \n\n\t\t\t\t\t  >\n\t\t\t</app-doctor-procurador>  \n        </div>\n\n    </div>\n    <div class=\"panel-footer\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"agregarNuevo()\">\n            <span class=\"fa fa-plus-circle\" aria-hidden=\"true\" style=\"font-size:36px\"></span> AGREGAR\n        </button>\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"actualizaTodo()\">\n            <span class=\"fa fa-reply-all\" aria-hidden=\"true\" style=\"font-size:36px\"></span> ACTUALIZAR TODO\n        </button>\n    </div>\n</div>\t\t\t\n"

/***/ }),

/***/ "./src/app/doctor-procuradores/doctor-procurador-conjunto/doctor-procurador-conjunto.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/doctor-procuradores/doctor-procurador-conjunto/doctor-procurador-conjunto.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: DoctorProcuradorConjuntoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorProcuradorConjuntoComponent", function() { return DoctorProcuradorConjuntoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_doctor_procurador__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/doctor-procurador */ "./src/app/doctor-procuradores/shared/doctor-procurador.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DoctorProcuradorConjuntoComponent = /** @class */ (function () {
    function DoctorProcuradorConjuntoComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovDoctorProcuradorUsuarioEditar = false;
        this.idhospitalDoctorProcuradorHospitalEditar = false;
        this.listaDoctorProcuradorN = [];
        this.listaDoctorProcurador = [];
        this.listaDoctorProcuradorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.doctorProcuradorN = new _shared_doctor_procurador__WEBPACK_IMPORTED_MODULE_1__["DoctorProcurador"]();
        this.doctorProcuradorNChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.agregados = 0;
        this.actualizados = 0;
        this.idSeleccionado = "N-0";
    }
    DoctorProcuradorConjuntoComponent.prototype.elegir = function (doctorProcurador, tipo) {
        this.idSeleccionado = tipo + "-" + doctorProcurador.id;
        this.doctorProcuradorN = doctorProcurador;
    };
    DoctorProcuradorConjuntoComponent.prototype.ngOnInit = function () {
        this.doctorProcuradorN.id = 0;
        this.listaDoctorProcuradorN.push(Object.assign({}, this.doctorProcuradorN));
        this.usuariologueado = this.globalesService.dameUsuario();
    };
    DoctorProcuradorConjuntoComponent.prototype.agregarNuevo = function () {
        var pg = new _shared_doctor_procurador__WEBPACK_IMPORTED_MODULE_1__["DoctorProcurador"]();
        pg.id = this.listaDoctorProcuradorN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaDoctorProcuradorN.push(pg);
    };
    DoctorProcuradorConjuntoComponent.prototype.actualizaTodo = function () {
        this.agregados = 0;
        this.actualizados = 0;
        for (var _i = 0, _a = this.listaDoctorProcurador; _i < _a.length; _i++) {
            var doctorProcurador = _a[_i];
            this.doctorProcuradorService.actualizarDoctorProcurador(doctorProcurador, this.evtActualiza, this);
        }
        for (var _b = 0, _c = this.listaDoctorProcuradorN; _b < _c.length; _b++) {
            var doctorProcurador = _c[_b];
            doctorProcurador.id = null;
            this.doctorProcuradorService.guardarDoctorProcurador(doctorProcurador, this.evtGuardar, this);
        }
    };
    DoctorProcuradorConjuntoComponent.prototype.evtGuardar = function (doctorProcurador, obj) {
        obj.agregados++;
        obj.listaDoctorProcurador.push(doctorProcurador);
        if (obj.agregados >= obj.listaDoctorProcuradorN.length) {
            obj.doctorProcuradorN = new _shared_doctor_procurador__WEBPACK_IMPORTED_MODULE_1__["DoctorProcurador"]();
            obj.listaDoctorProcuradorN = [];
            obj.doctorProcuradorN.id = 0;
            obj.idSeleccionado = "N-" + obj.doctorProcuradorN.id;
            obj.listaDoctorProcuradorN.push(Object.assign({}, obj.doctorProcuradorN));
            obj.listaDoctorProcuradorChange.emit(obj.listaDoctorProcurador);
        }
        if (obj.agregados >= obj.listaDoctorProcuradorN.length &&
            obj.actualizados >= obj.listaDoctorProcurador.length) {
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    DoctorProcuradorConjuntoComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.actualizados++;
            if (obj.agregados >= obj.listaDoctorProcuradorN.length &&
                obj.actualizados >= obj.listaDoctorProcurador.length) {
                obj.opcion = 0;
                obj.opcion.emit(obj.opcion);
            }
        }
    };
    DoctorProcuradorConjuntoComponent.prototype.ngOnChanges = function (changes) {
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
    ], DoctorProcuradorConjuntoComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorProcuradorConjuntoComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorProcuradorConjuntoComponent.prototype, "doctorProcuradorBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorProcuradorConjuntoComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorProcuradorConjuntoComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorProcuradorConjuntoComponent.prototype, "validosDoctorProcurador", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorProcuradorConjuntoComponent.prototype, "ocultarConjuntosDoctorProcurador", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorProcuradorConjuntoComponent.prototype, "doctorProcuradorService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DoctorProcuradorConjuntoComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DoctorProcuradorConjuntoComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorProcuradorConjuntoComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorProcuradorConjuntoComponent.prototype, "lista_usuarioUltMovDoctorProcuradorUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorProcuradorConjuntoComponent.prototype, "lista_idhospitalDoctorProcuradorHospital", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DoctorProcuradorConjuntoComponent.prototype, "listaDoctorProcurador", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DoctorProcuradorConjuntoComponent.prototype, "listaDoctorProcuradorChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_doctor_procurador__WEBPACK_IMPORTED_MODULE_1__["DoctorProcurador"])
    ], DoctorProcuradorConjuntoComponent.prototype, "doctorProcuradorN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DoctorProcuradorConjuntoComponent.prototype, "doctorProcuradorNChange", void 0);
    DoctorProcuradorConjuntoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-doctor-procurador-conjunto',
            template: __webpack_require__(/*! ./doctor-procurador-conjunto.component.html */ "./src/app/doctor-procuradores/doctor-procurador-conjunto/doctor-procurador-conjunto.component.html"),
            styles: [__webpack_require__(/*! ./doctor-procurador-conjunto.component.css */ "./src/app/doctor-procuradores/doctor-procurador-conjunto/doctor-procurador-conjunto.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], DoctorProcuradorConjuntoComponent);
    return DoctorProcuradorConjuntoComponent;
}());



/***/ }),

/***/ "./src/app/doctor-procuradores/doctor-procurador-crud/doctor-procurador-crud.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/doctor-procuradores/doctor-procurador-crud/doctor-procurador-crud.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/doctor-procuradores/doctor-procurador-crud/doctor-procurador-crud.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/doctor-procuradores/doctor-procurador-crud/doctor-procurador-crud.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n    <app-doctor-procurador [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\"\n        [doctorProcuradorBuscar]=\"doctorProcuradorBuscar\" [permisosAtributos]=\"permisosAtributos\"\n        [permisosConjuntos]=\"permisosConjuntos\" [validosDoctorProcurador]=\"validosDoctorProcurador\"\n        [doctorProcuradorService]=\"doctorProcurador_service\" [(opcion)]=\"opcionDoctorProcurador\"\n        [globalesService]=\"globalesService\" [(doctorProcurador)]=\"doctorProcurador\"\n        [ocultarConjuntos]=\"ocultarConjuntosDoctorProcurador\"\n        [lista_usuarioUltMovDoctorProcuradorUsuario]=\"lista_usuarioUltMovDoctorProcuradorUsuario\"\n        [lista_idhospitalDoctorProcuradorHospital]=\"lista_idhospitalDoctorProcuradorHospital\">\n\n    </app-doctor-procurador>\n\n    <div class=\"panel-footer\" style=\"text-align: center\">\n        <div style=\"display: inline-block;width: 90%;\">\n            <button type=\"button\" class=\"btn btn-primary btn-buscar\" [class.hidden]=\"!doctorProcuradorBuscar\"\n                (click)=\"buscarDoctorProcuradorFront()\"><span class=\"fa fa-search\"></span> Buscar</button>\n            <button type=\"button\" class=\"btn btn-success btn-agregar\" [class.hidden]=\"!doctorProcuradorAgregar\"\n                (click)=\"nuevoDoctorProcuradorFront()\"><span class=\"fa fa-newspaper\"></span>Nuevo </button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\"\n                [class.hidden]=\"!doctorProcuradorActualizar\"\n                (click)=\"actualizarDoctorProcuradorFront()\"><span class=\"fa fa-arrow-up\"></span>\n                Actualizar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-eliminar\" [class.hidden]=\"!doctorProcuradorEliminar\"\n                (click)=\"eliminarDoctorProcuradorFront()\"> <span\n                    class=\"fa fa-trash\"></span>Eliminar</button>\n\n            <button type=\"button\" class=\"btn btn-danger btn-guardar\" [disabled]=\"!validaTodosc\"\n                [class.hidden]=\"!doctorProcuradorGuardar\" (click)=\"guardarDoctorProcuradorFront()\"><span\n                    class=\"fa fa-floppy-disk\"></span>Guardar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-cancelar\" [class.hidden]=\"!doctorProcuradorCancelar\"\n                (click)=\"cancelarDoctorProcuradorFront()\"><span\n                    class=\"fa fa-remove\"></span>Cancelar</button>\n            <button type=\"button\" class=\"btn btn-primary btn-limpiar\" (click)=\"limpiarCampos()\">Limpiar Campos</button>\n\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\"\n                [class.hidden]=\"datosReporteDoctorProcuradorWord\" (click)=\"reporteDoctorProcuradorWord()\">\n                <span class=\"fa fa-download-alt\"></span>Word</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\"\n                [class.hidden]=\"datosReporteDoctorProcuradorExcel\" (click)=\"reporteDoctorProcuradorExcel()\">\n                <span class=\"fa fa-download-alt\"></span> Excel</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\"\n                [class.hidden]=\"datosReporteDoctorProcuradorPdf\"\n                (click)=\"reporteDoctorProcuradorPdf()\"><span class=\"fa fa-download-alt\"></span> PDF</button>\n\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"buscarDoctorProcurador_{{nombre}}\" role=\"dialog\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n            <div class=\"modal-body\">\n                <app-doctor-procurador-list-kendo [nombregrid]=\"'buscar_'+nombre\"\n                    [configuracionDoctorProcurador]=\"configuracionDoctorProcurador\"\n                    (doctorProcuradorSeleccionado)=\"evtDoctorProcuradorSeleccionado($event)\">\n                </app-doctor-procurador-list-kendo>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/doctor-procuradores/doctor-procurador-crud/doctor-procurador-crud.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/doctor-procuradores/doctor-procurador-crud/doctor-procurador-crud.component.ts ***!
  \************************************************************************************************/
/*! exports provided: DoctorProcuradorCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorProcuradorCrudComponent", function() { return DoctorProcuradorCrudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/core.service */ "./src/app/shared/core.service.ts");
/* harmony import */ var _shared_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/file.service */ "./src/app/shared/file.service.ts");
/* harmony import */ var _shared_doctor_procurador__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/doctor-procurador */ "./src/app/doctor-procuradores/shared/doctor-procurador.ts");
/* harmony import */ var _shared_doctor_procurador_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/doctor-procurador.service */ "./src/app/doctor-procuradores/shared/doctor-procurador.service.ts");
/* harmony import */ var _shared_configurar_doctor_procurador__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/configurar-doctor-procurador */ "./src/app/doctor-procuradores/shared/configurar-doctor-procurador.ts");
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../usuarios/shared/usuario.service */ "./src/app/usuarios/shared/usuario.service.ts");
/* harmony import */ var _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../usuario-btcs/shared/usuario-btc.service */ "./src/app/usuario-btcs/shared/usuario-btc.service.ts");
/* harmony import */ var _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../perfil-red-issstes/shared/perfil-red-issste.service */ "./src/app/perfil-red-issstes/shared/perfil-red-issste.service.ts");
/* harmony import */ var _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hospitales/shared/hospital.service */ "./src/app/hospitales/shared/hospital.service.ts");
/* harmony import */ var _hospitales_shared_hospital__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hospitales/shared/hospital */ "./src/app/hospitales/shared/hospital.ts");
/* harmony import */ var _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../entidad-federativas/shared/entidad-federativa.service */ "./src/app/entidad-federativas/shared/entidad-federativa.service.ts");
/* harmony import */ var _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../perfiles/shared/perfil.service */ "./src/app/perfiles/shared/perfil.service.ts");
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




var DoctorProcuradorCrudComponent = /** @class */ (function () {
    function DoctorProcuradorCrudComponent(globalesService, zone, fileservice, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    doctorProcurador_service, usuario_service, usuarioBtc_service, perfilRedIssste_service, 
    //                public perfilBtc_service: PerfilBtcService,
    hospital_service, entidadFederativa_service, perfil_service) {
        this.globalesService = globalesService;
        this.zone = zone;
        this.fileservice = fileservice;
        this.coreService = coreService;
        this.doctorProcurador_service = doctorProcurador_service;
        this.usuario_service = usuario_service;
        this.usuarioBtc_service = usuarioBtc_service;
        this.perfilRedIssste_service = perfilRedIssste_service;
        this.hospital_service = hospital_service;
        this.entidadFederativa_service = entidadFederativa_service;
        this.perfil_service = perfil_service;
        this.opcionDoctorProcurador = 0;
        this.validosDoctorProcurador = {
            id: false,
            fechaBaja: false,
            primerApellido: false,
            fechaRegistro: false,
            segundoApellido: false,
            fechaActualizacion: false,
            nombre: false,
            correoElectronico: false,
            status: false,
            usuarioUltMov: false,
            idhospital: false,
        };
        this.ocultarConjuntosDoctorProcurador = false;
        this.nombre = "";
        this.permisosTabla = { "tabla": "doctorProcurador", "permiso": 0, "etiqueta": "" };
        this.permisosAtributos = [];
        this.permisosConjuntos = [];
        //  public perfil: Perfil;
        this.accion = 0;
        this.doctorProcuradorLazy = false;
        this.doctorProcuradorPermisos = false;
        this.validaciones = false;
        this.validacionesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.doctorProcurador = new _shared_doctor_procurador__WEBPACK_IMPORTED_MODULE_4__["DoctorProcurador"]();
        this.doctorProcuradorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.doctorProcuradorTablaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lista_doctorProcuradores = [];
        this.usuarioUltMovDoctorProcuradorUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.lista_usuarioUltMovDoctorProcuradorUsuario = [];
        this.usuarioUltMovDoctorProcuradorUsuarioEditar = false;
        this.idhospitalDoctorProcuradorHospitalEleccion = new _hospitales_shared_hospital__WEBPACK_IMPORTED_MODULE_12__["Hospital"]();
        this.lista_idhospitalDoctorProcuradorHospital = [];
        this.idhospitalDoctorProcuradorHospitalEditar = false;
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                this.obtenerPermisos();
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
            }
        }
        this.doctorProcuradorSeleccion = this.doctorProcuradorCancelar = this.doctorProcuradorGuardar = this.doctorProcuradorBuscar = this.doctorProcuradorAgregar = this.doctorProcuradorActualizar = this.doctorProcuradorEliminar = false;
        this.configuracionDoctorProcurador = new _shared_configurar_doctor_procurador__WEBPACK_IMPORTED_MODULE_6__["ConfigurarDoctorProcurador"]();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovDoctorProcuradorUsuario, this);
        this.hospital_service.getHospitalesActivos(this.evtGetIdhospitalDoctorProcuradorHospital, this);
        this.limpiarCampos();
    }
    Object.defineProperty(DoctorProcuradorCrudComponent.prototype, "doctorProcuradorOcultarConjuntos", {
        get: function () {
            if (this.ocultarConjuntosDoctorProcurador)
                return true;
            return !this.doctorProcuradorActualizar;
        },
        enumerable: true,
        configurable: true
    });
    DoctorProcuradorCrudComponent.prototype.ngOnChanges = function (changes) {
        if (changes.doctorProcurador && changes.doctorProcurador.currentValue == null &&
            this.doctorProcurador == null)
            this.doctorProcurador = new _shared_doctor_procurador__WEBPACK_IMPORTED_MODULE_4__["DoctorProcurador"]();
        else {
            var aux = new _shared_doctor_procurador__WEBPACK_IMPORTED_MODULE_4__["DoctorProcurador"]();
            if (this.doctorProcurador)
                aux.from(this.doctorProcurador);
            if (aux.isOk && aux.isOk()) {
                this.accion = 7;
                this.doctorProcuradorBuscar = this.doctorProcuradorAgregar = this.doctorProcuradorSeleccion = this.doctorProcuradorGuardar = false;
                this.doctorProcuradorActualizar = this.doctorProcuradorEliminar = this.doctorProcuradorCancelar = true;
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
                this.doctorProcuradorSeleccion = this.doctorProcuradorAgregar = this.doctorProcuradorBuscar = this.doctorProcuradorActualizar = this.doctorProcuradorEliminar = false;
                this.doctorProcuradorGuardar = this.doctorProcuradorCancelar = true;
            }
        }
    };
    DoctorProcuradorCrudComponent.prototype.obtenerPermisos = function () {
        var id_expe = -1;
        var tablas = [
            "doctorProcurador",
            "usuario",
            "usuarioBtc",
            "perfilRedIssste",
            "perfilBtc",
            "hospital",
            "entidadFederativa",
            "perfil",
        ];
        var parametros = {
            "id_usu": this.usuariologueado.id,
            "tablas": tablas,
            "id_exp": id_expe
        };
        this.doctorProcuradorPermisos = false;
        this.coreService.permisos(parametros, this.evtCorePermisos, this);
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    DoctorProcuradorCrudComponent.prototype.evtCorePermisos = function (permisos, obj) {
        obj.doctorProcuradorPermisos = true;
        if (permisos && permisos.doctorProcurador && permisos.doctorProcurador.PermisoAtributo && permisos.doctorProcurador.PermisoAtributo.length > 0) {
            obj.permisosAtributos = permisos.doctorProcurador.PermisoAtributo;
        }
        else {
            obj.usuariologueado = undefined;
        }
        if (permisos && permisos.doctorProcurador && permisos.doctorProcurador.PermisoConjunto && permisos.doctorProcurador.PermisoConjunto.length > 0) {
            obj.permisosConjuntos = permisos.doctorProcurador.PermisoConjunto;
        }
        if (permisos && permisos.doctorProcurador && permisos.doctorProcurador.PermisoTabla && permisos.doctorProcurador.PermisoTabla.length > 0) {
            obj.permisosTabla = permisos.doctorProcurador.PermisoTabla[0];
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
        if (permisos && permisos.hospital && permisos.hospital.PermisoAtributo && permisos.hospital.PermisoAtributo.length > 0) {
            //obj.configuracion$1= permisos.hospital.PermisoAtributo ;
            obj.permisosAtributos.push(permisos.hospital.PermisoAtributo);
        }
        if (permisos && permisos.hospital && permisos.hospital.PermisoAtributo && permisos.hospital.PermisoConjunto.length > 0) {
            obj.permisosConjuntos.push(permisos.hospital.PermisoConjunto);
        }
        if (permisos && permisos.hospital && permisos.hospital.PermisoTabla && permisos.hospital.PermisoTabla.length > 0) {
            //obj.configuracion$1= permisos.hospital.PermisoTabla[0] ;
            // obj.permisosTabla.push(permisos.hospital.PermisoTabla[0] );
        }
        if (obj.configurarTablasConjuntos)
            obj.configurarTablasConjuntos();
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    DoctorProcuradorCrudComponent.prototype.evtGetUsuarioUltMovDoctorProcuradorUsuario = function (lista_usuarioUltMovDoctorProcuradorUsuario, obj) {
        obj.lista_usuarioUltMovDoctorProcuradorUsuario = lista_usuarioUltMovDoctorProcuradorUsuario;
        obj.actualizar_UsuarioUltMovDoctorProcuradorUsuario();
    };
    DoctorProcuradorCrudComponent.prototype.evtGetIdhospitalDoctorProcuradorHospital = function (lista_idhospitalDoctorProcuradorHospital, obj) {
        obj.lista_idhospitalDoctorProcuradorHospital = lista_idhospitalDoctorProcuradorHospital;
        obj.actualizar_IdhospitalDoctorProcuradorHospital();
    };
    DoctorProcuradorCrudComponent.prototype.actualizar_UsuarioUltMovDoctorProcuradorUsuario = function () {
        if (this.usuarioUltMovDoctorProcuradorUsuarioEleccion)
            for (var _i = 0, _a = this.lista_usuarioUltMovDoctorProcuradorUsuario; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.usuarioUltMovDoctorProcuradorUsuarioEleccion.id) {
                    this.usuarioUltMovDoctorProcuradorUsuarioEleccion = eleme;
                    break;
                }
            }
    };
    DoctorProcuradorCrudComponent.prototype.actualizar_IdhospitalDoctorProcuradorHospital = function () {
        if (this.idhospitalDoctorProcuradorHospitalEleccion)
            for (var _i = 0, _a = this.lista_idhospitalDoctorProcuradorHospital; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.idhospitalDoctorProcuradorHospitalEleccion.id) {
                    this.idhospitalDoctorProcuradorHospitalEleccion = eleme;
                    break;
                }
            }
    };
    DoctorProcuradorCrudComponent.prototype.ngDoCheck = function () {
    };
    DoctorProcuradorCrudComponent.prototype.validaAcciones = function (vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    };
    Object.defineProperty(DoctorProcuradorCrudComponent.prototype, "validaId", {
        get: function () {
            return this.validosDoctorProcurador['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorProcuradorCrudComponent.prototype, "validaIds", {
        get: function () {
            return this.validosDoctorProcurador['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorProcuradorCrudComponent.prototype, "validaFechaBaja", {
        get: function () {
            return this.validosDoctorProcurador['fechaBaja'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorProcuradorCrudComponent.prototype, "validaPrimerApellido", {
        get: function () {
            return this.validosDoctorProcurador['primerApellido'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorProcuradorCrudComponent.prototype, "validaFechaRegistro", {
        get: function () {
            return this.validosDoctorProcurador['fechaRegistro'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorProcuradorCrudComponent.prototype, "validaSegundoApellido", {
        get: function () {
            return this.validosDoctorProcurador['segundoApellido'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorProcuradorCrudComponent.prototype, "validaFechaActualizacion", {
        get: function () {
            return this.validosDoctorProcurador['fechaActualizacion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorProcuradorCrudComponent.prototype, "validaNombre", {
        get: function () {
            return this.validosDoctorProcurador['nombre'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorProcuradorCrudComponent.prototype, "validaCorreoElectronico", {
        get: function () {
            return this.validosDoctorProcurador['correoElectronico'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorProcuradorCrudComponent.prototype, "validaStatus", {
        get: function () {
            return this.validosDoctorProcurador['status'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorProcuradorCrudComponent.prototype, "validaUsuarioUltMov", {
        get: function () {
            return this.validosDoctorProcurador['usuarioUltMov'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorProcuradorCrudComponent.prototype, "validaIdhospital", {
        get: function () {
            return this.validosDoctorProcurador['idhospital'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorProcuradorCrudComponent.prototype, "validaTodosc", {
        get: function () {
            var _this = this;
            //var salida =  this.validaId && this.validaFechaBaja && this.validaPrimerApellido && this.validaFechaRegistro && this.validaSegundoApellido && this.validaFechaActualizacion && this.validaNombre && this.validaCorreoElectronico && this.validaStatus && this.validaUsuarioUltMov && this.validaIdhospital;
            //var salida =  this.validaId && this.validaPrimerApellido && this.validaSegundoApellido && this.validaNombre && this.validaCorreoElectronico && this.validaStatus && this.validaUsuarioUltMov && this.validaIdhospital;
            var salida = this.validaPrimerApellido && this.validaSegundoApellido && this.validaNombre && this.validaCorreoElectronico && this.doctorProcurador.idhospital !== null;
            if (salida != this.validaciones) {
                setTimeout(function () {
                    _this.validacionesChange.emit(salida);
                    _this.validaciones = salida;
                    return salida;
                });
            }
            return this.validaciones;
        },
        enumerable: true,
        configurable: true
    });
    DoctorProcuradorCrudComponent.prototype.obtenerDoctorProcuradores = function (lista, objeto) {
        objeto.lista_doctorProcuradores = lista;
        if (lista && lista.length > 0) {
            objeto.doctorProcurador.from(lista[0]);
            objeto.evtDoctorProcuradorSeleccionado(objeto.doctorProcurador);
            if (objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    };
    DoctorProcuradorCrudComponent.prototype.evn_lazy_doctorProcurador = function (doctorProcurador, objeto) {
        objeto.doctorProcurador = doctorProcurador;
        objeto.doctorProcuradorChange.emit(objeto.doctorProcurador);
        objeto.configuarCombosObjetos();
        objeto.doctorProcuradorLazy = true;
    };
    Object.defineProperty(DoctorProcuradorCrudComponent.prototype, "datosReporteDoctorProcuradorWord", {
        /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
        get: function () {
            return !(this.doctorProcuradorActualizar && this.doctorProcuradorLazy && this.globalesService.preporteWord(this, "doctorProcurador"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorProcuradorCrudComponent.prototype, "datosReporteDoctorProcuradorExcel", {
        get: function () {
            return !(this.doctorProcuradorActualizar && this.doctorProcuradorLazy && this.globalesService.preporteExcel(this, "doctorProcurador"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoctorProcuradorCrudComponent.prototype, "datosReporteDoctorProcuradorPdf", {
        get: function () {
            return !(this.doctorProcuradorActualizar && this.doctorProcuradorLazy && this.globalesService.preportePdf(this, "doctorProcurador"));
        },
        enumerable: true,
        configurable: true
    });
    DoctorProcuradorCrudComponent.prototype.reporteDoctorProcuradorExcel = function () {
        var nombre = "DoctorProcurador.xlsx";
        var path = "file/reporteExcel";
        var parametros = {};
        parametros["entradas"] = { "doctorProcurador": this.doctorProcurador };
        parametros["plantilla"] = "DoctorProcurador.xlsx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    DoctorProcuradorCrudComponent.prototype.reporteDoctorProcuradorWord = function () {
        var nombre = "DoctorProcurador.docx";
        var path = "file/reporteWord";
        var parametros = {};
        parametros["entradas"] = { "doctorProcurador": this.doctorProcurador };
        parametros["plantilla"] = "DoctorProcurador.docx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    DoctorProcuradorCrudComponent.prototype.reporteDoctorProcuradorPdf = function () {
        var nombre = "DoctorProcurador.docx";
        var path = "file/reportePdf";
        var parametros = {};
        parametros["entradas"] = { "doctorProcurador": this.doctorProcurador };
        parametros["plantilla"] = "DoctorProcurador.docx";
        parametros["salida"] = "DoctorProcurador.pdf";
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */
    DoctorProcuradorCrudComponent.prototype.accionesBuscar = function () {
        this.accion = 1;
        this.doctorProcuradorGuardar = this.doctorProcuradorActualizar = this.doctorProcuradorEliminar = this.doctorProcuradorCancelar = false;
        this.doctorProcuradorBuscar = this.doctorProcuradorAgregar = true;
        //this.doctorProcuradorBuscar = this.doctorProcuradorAgregar = this.doctorProcuradorCancelar = true;
    };
    DoctorProcuradorCrudComponent.prototype.buscarDoctorProcuradorFront = function () {
        this.accionesBuscar();
        var vdoctorProcurador = new _shared_doctor_procurador__WEBPACK_IMPORTED_MODULE_4__["DoctorProcurador"]();
        vdoctorProcurador.from(this.doctorProcurador);
        vdoctorProcurador.status = 1;
        this.configuracionDoctorProcurador = new _shared_configurar_doctor_procurador__WEBPACK_IMPORTED_MODULE_6__["ConfigurarDoctorProcurador"]();
        this.configuracionDoctorProcurador.permisosTabla = { "tabla": "doctorProcurador", "permiso": 8 };
        this.configuracionDoctorProcurador.titulo = "Buscar " + this.permisosTabla.etiqueta;
        this.configuracionDoctorProcurador.doctorProcuradorConsulta = vdoctorProcurador;
        this.permisosacciones();
        $("#buscarDoctorProcurador_" + this.nombre).modal();
    };
    DoctorProcuradorCrudComponent.prototype.buscarDoctorProcuradorBack = function (doctorProcurador) {
        this.doctorProcurador_service.getDoctorProcuradoresByDto(new _shared_doctor_procurador__WEBPACK_IMPORTED_MODULE_4__["DoctorProcurador"](doctorProcurador), this.eventoSrvDoctorProcuradorBuscar, this);
    };
    DoctorProcuradorCrudComponent.prototype.eventoSrvDoctorProcuradorBuscar = function (lista, objeto) {
        objeto.lista_doctorProcuradores = lista;
        if (lista && lista.length > 0) {
            objeto.doctorProcurador = lista[0];
            objeto.doctorProcuradorLazy = false;
            objeto.doctorProcurador_service.lazyDoctorProcurador(objeto.doctorProcurador, objeto.evn_lazy_doctorProcurador, objeto);
        }
    };
    DoctorProcuradorCrudComponent.prototype.guardarDoctorProcuradorFront = function () {
        bootbox.confirm({
            message: "¿Deseas guardar el registro?",
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
                if (result) {
                    this.accion = 5; // ********************************************************************************************** maquina
                    this.guardarDoctorProcuradorBack(this.doctorProcurador);
                    this.accionesBuscar(); // ********************************************************************************* maquina
                    this.permisosacciones();
                }
            }.bind(this)
        });
        // this.accion = 5;  // ********************************************************************************************** maquina
        // this.guardarDoctorProcuradorBack(this.doctorProcurador);
        // this.accionesBuscar();    // ********************************************************************************* maquina
        // this.permisosacciones();
    };
    DoctorProcuradorCrudComponent.prototype.guardarDoctorProcuradorBack = function (doctorProcurador) {
        if (doctorProcurador.usuarioUltMov == null)
            doctorProcurador.usuarioUltMov = this.globalesService.dameUsuario();
        if (doctorProcurador.status == null || doctorProcurador.status == "")
            doctorProcurador.status = 1;
        doctorProcurador.fechaRegistro = new Date();
        this.doctorProcurador_service.guardarDoctorProcurador(new _shared_doctor_procurador__WEBPACK_IMPORTED_MODULE_4__["DoctorProcurador"](doctorProcurador), this.eventoSrvDoctorProcuradorGuardar, this);
    };
    DoctorProcuradorCrudComponent.prototype.eventoSrvDoctorProcuradorGuardar = function (doctorProcurador, obj) {
        obj.doctorProcurador = doctorProcurador;
        bootbox.alert("Datos guardados con éxito");
        var aux = new _shared_doctor_procurador__WEBPACK_IMPORTED_MODULE_4__["DoctorProcurador"]();
        aux.from(doctorProcurador);
        obj.doctorProcuradorChange.emit(aux);
        obj.doctorProcuradorTablaChange.emit(aux);
        obj.doctorProcuradorLazy = false;
        obj.doctorProcurador_service.lazyDoctorProcurador(new _shared_doctor_procurador__WEBPACK_IMPORTED_MODULE_4__["DoctorProcurador"](obj.doctorProcurador), obj.evn_lazy_doctorProcurador, obj);
        obj.accionesActualizar();
    };
    DoctorProcuradorCrudComponent.prototype.actualizarDoctorProcuradorFront = function () {
        bootbox.confirm({
            message: "¿Deseas actualizar el registro?",
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
                if (result) {
                    this.accion = 3; // ************************************************************************************* maquina
                    this.actualizarDoctorProcuradorBack(this.doctorProcurador);
                    this.accionesBuscar(); // ***************************************************************************** maquina
                    this.permisosacciones();
                }
            }.bind(this)
        });
        // this.accion = 3;         // ************************************************************************************* maquina
        // this.actualizarDoctorProcuradorBack(this.doctorProcurador);
        // this.accionesBuscar(); // ***************************************************************************** maquina
        // this.permisosacciones();
    };
    DoctorProcuradorCrudComponent.prototype.actualizarDoctorProcuradorBack = function (doctorProcurador) {
        doctorProcurador.usuarioUltMov = this.globalesService.dameUsuario();
        doctorProcurador.fechaActualizacion = new Date();
        this.doctorProcurador_service.actualizarDoctorProcurador(new _shared_doctor_procurador__WEBPACK_IMPORTED_MODULE_4__["DoctorProcurador"](doctorProcurador), this.eventoSrvDoctorProcuradorActualizar, this);
    };
    DoctorProcuradorCrudComponent.prototype.eventoSrvDoctorProcuradorActualizar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux = new _shared_doctor_procurador__WEBPACK_IMPORTED_MODULE_4__["DoctorProcurador"]();
            // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.doctorProcuradorLazy = false;
            obj.doctorProcurador_service.lazyDoctorProcurador(new _shared_doctor_procurador__WEBPACK_IMPORTED_MODULE_4__["DoctorProcurador"](obj.doctorProcurador), obj.evn_lazy_doctorProcurador, obj);
            // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.doctorProcurador);
            obj.doctorProcuradorChange.emit(aux);
            obj.doctorProcuradorTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    };
    DoctorProcuradorCrudComponent.prototype.eliminarDoctorProcuradorFront = function () {
        bootbox.confirm({
            message: "¿Deseas eliminar el registro?",
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
                if (result) {
                    this.accion = 4;
                    this.eliminarDoctorProcuradorBack(this.doctorProcurador);
                    this.permisosacciones();
                    this.accionesBuscar();
                }
            }.bind(this)
        });
        // this.accion = 4;
        // this.eliminarDoctorProcuradorBack(this.doctorProcurador);
        // this.permisosacciones();
        // this.accionesBuscar();
    };
    DoctorProcuradorCrudComponent.prototype.eliminarDoctorProcuradorBack = function (doctorProcurador) {
        doctorProcurador.usuarioUltMov = this.globalesService.dameUsuario();
        doctorProcurador.fechaBaja = new Date();
        doctorProcurador.status = 0;
        this.doctorProcurador_service.actualizarDoctorProcurador(new _shared_doctor_procurador__WEBPACK_IMPORTED_MODULE_4__["DoctorProcurador"](doctorProcurador), this.eventoSrvDoctorProcuradorEliminar, this);
        //this.doctorProcurador_service.eliminarDoctorProcurador(doctorProcurador, this.eventoSrvDoctorProcuradorEliminar, this);
    };
    DoctorProcuradorCrudComponent.prototype.eventoSrvDoctorProcuradorEliminar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.doctorProcurador = new _shared_doctor_procurador__WEBPACK_IMPORTED_MODULE_4__["DoctorProcurador"]();
            obj.doctorProcuradorChange.emit(obj.doctorProcurador);
            obj.doctorProcuradorTablaChange.emit(obj.doctorProcurador);
            obj.limpiarCampos();
        }
    };
    DoctorProcuradorCrudComponent.prototype.cancelarDoctorProcuradorFront = function () {
        this.accion = 6;
        this.doctorProcuradorCancelar = this.doctorProcuradorGuardar = this.doctorProcuradorActualizar = this.doctorProcuradorEliminar = false;
        this.doctorProcuradorBuscar = this.doctorProcuradorAgregar = true;
        this.permisosacciones();
    };
    DoctorProcuradorCrudComponent.prototype.nuevoDoctorProcuradorFront = function () {
        this.accion = 2;
        this.doctorProcuradorSeleccion = this.doctorProcuradorAgregar = this.doctorProcuradorBuscar = this.doctorProcuradorActualizar = this.doctorProcuradorEliminar = false;
        this.doctorProcuradorGuardar = this.doctorProcuradorCancelar = true;
        // bootbox.confirm({
        //     message: "¿Deseas limpiar los campos de ingreso?",
        //     buttons: {
        //         confirm: {
        //             label: 'Si',
        //             className: 'btn-success'
        //         },
        //         cancel: {
        //             label: 'No',
        //             className: 'btn-danger'
        //         }
        //     },
        //     callback: function(result) {
        //         if (result)
        //             this.limpiarCampos();
        //         this.doctorProcuradorSeleccion = this.doctorProcuradorAgregar = this.doctorProcuradorBuscar = this.doctorProcuradorActualizar = this.doctorProcuradorEliminar = false;
        //         this.doctorProcuradorGuardar = this.doctorProcuradorCancelar = true;
        //     }.bind(this)
        // });
    };
    DoctorProcuradorCrudComponent.prototype.configuarCombosObjetos = function () {
        this.lista_usuarioUltMovDoctorProcuradorUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovDoctorProcuradorUsuario, this);
        this.lista_idhospitalDoctorProcuradorHospital = [];
        this.hospital_service.getHospitalesActivos(this.evtGetIdhospitalDoctorProcuradorHospital, this);
    };
    DoctorProcuradorCrudComponent.prototype.configurarTablasConjuntos = function () {
    };
    DoctorProcuradorCrudComponent.prototype.accionesActualizar = function () {
        this.accion = 7;
        this.doctorProcuradorBuscar = this.doctorProcuradorAgregar = this.doctorProcuradorSeleccion = this.doctorProcuradorGuardar = false;
        this.doctorProcuradorActualizar = this.doctorProcuradorEliminar = this.doctorProcuradorCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    };
    DoctorProcuradorCrudComponent.prototype.evtDoctorProcuradorSeleccionado = function (doctorProcurador) {
        this.doctorProcurador = new _shared_doctor_procurador__WEBPACK_IMPORTED_MODULE_4__["DoctorProcurador"]();
        this.doctorProcurador.from(doctorProcurador);
        this.doctorProcuradorLazy = false;
        this.doctorProcurador_service.lazyDoctorProcurador(this.doctorProcurador, this.evn_lazy_doctorProcurador, this);
        this.accion = 7;
        this.doctorProcuradorBuscar = this.doctorProcuradorAgregar = this.doctorProcuradorSeleccion = this.doctorProcuradorGuardar = false;
        this.doctorProcuradorActualizar = this.doctorProcuradorEliminar = this.doctorProcuradorCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarDoctorProcurador_" + this.nombre).modal("hide");
    };
    DoctorProcuradorCrudComponent.prototype.ngOnInit = function () {
        this.accion = 0; // *********************************************************************************************************** maquina
        this.doctorProcuradorSeleccion = this.doctorProcuradorCancelar = this.doctorProcuradorGuardar = this.doctorProcuradorActualizar = this.doctorProcuradorEliminar = false; // ******************** maquina
        this.doctorProcuradorBuscar = this.doctorProcuradorAgregar = true; // ************************************************************************************* maquina
        this.permisosacciones();
    };
    DoctorProcuradorCrudComponent.prototype.permisosacciones = function () {
        if (this.doctorProcuradorBuscar)
            this.doctorProcuradorBuscar = this.globalesService.pbuscar(this, "doctorProcurador");
        if (this.doctorProcuradorActualizar)
            this.doctorProcuradorActualizar = (this.globalesService.pacutalizar(this, "doctorProcurador") && this.globalesService.pbuscar(this, "doctorProcurador"));
        if (this.doctorProcuradorEliminar)
            this.doctorProcuradorEliminar = (this.globalesService.peliminar(this, "doctorProcurador") && this.globalesService.pbuscar(this, "doctorProcurador"));
        if (this.doctorProcuradorAgregar)
            this.doctorProcuradorAgregar = this.globalesService.pagregar(this, "doctorProcurador");
    };
    DoctorProcuradorCrudComponent.prototype.permisosaccionesInicio = function () {
        this.doctorProcuradorSeleccion = this.doctorProcuradorCancelar = this.doctorProcuradorGuardar = this.doctorProcuradorActualizar = this.doctorProcuradorEliminar = false; // *************************** maquina
        this.doctorProcuradorBuscar = this.doctorProcuradorAgregar = true; // ************************************************************************************* maquina
        this.accion = 0; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    DoctorProcuradorCrudComponent.prototype.limpiarCampos = function () {
        this.doctorProcurador = new _shared_doctor_procurador__WEBPACK_IMPORTED_MODULE_4__["DoctorProcurador"]();
        this.usuarioUltMovDoctorProcuradorUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.idhospitalDoctorProcuradorHospitalEleccion = new _hospitales_shared_hospital__WEBPACK_IMPORTED_MODULE_12__["Hospital"]();
        this.doctorProcuradorChange.emit(this.doctorProcurador);
        this.doctorProcuradorSeleccion = this.doctorProcuradorCancelar = this.doctorProcuradorGuardar = this.doctorProcuradorActualizar = this.doctorProcuradorEliminar = false; // *************************** maquina
        this.doctorProcuradorBuscar = this.doctorProcuradorAgregar = true; // ************************************************************************************* maquina
        this.accion = 6; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DoctorProcuradorCrudComponent.prototype, "ocultarConjuntosDoctorProcurador", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DoctorProcuradorCrudComponent.prototype, "nombre", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DoctorProcuradorCrudComponent.prototype, "validaciones", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DoctorProcuradorCrudComponent.prototype, "validacionesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_doctor_procurador__WEBPACK_IMPORTED_MODULE_4__["DoctorProcurador"])
    ], DoctorProcuradorCrudComponent.prototype, "doctorProcurador", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DoctorProcuradorCrudComponent.prototype, "doctorProcuradorChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DoctorProcuradorCrudComponent.prototype, "doctorProcuradorTablaChange", void 0);
    DoctorProcuradorCrudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-doctor-procurador-crud',
            template: __webpack_require__(/*! ./doctor-procurador-crud.component.html */ "./src/app/doctor-procuradores/doctor-procurador-crud/doctor-procurador-crud.component.html"),
            styles: [__webpack_require__(/*! ./doctor-procurador-crud.component.css */ "./src/app/doctor-procuradores/doctor-procurador-crud/doctor-procurador-crud.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
                _shared_doctor_procurador_service__WEBPACK_IMPORTED_MODULE_5__["DoctorProcuradorService"],
                _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
                _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_13__["EntidadFederativaService"],
                _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__["PerfilRedIsssteService"],
                //                PerfilBtcService,
                _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"],
                _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcService"],
                _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_14__["PerfilService"]
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
            _shared_doctor_procurador_service__WEBPACK_IMPORTED_MODULE_5__["DoctorProcuradorService"],
            _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
            _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcService"],
            _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__["PerfilRedIsssteService"],
            _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"],
            _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_13__["EntidadFederativaService"],
            _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_14__["PerfilService"]])
    ], DoctorProcuradorCrudComponent);
    return DoctorProcuradorCrudComponent;
}());



/***/ }),

/***/ "./src/app/doctor-procuradores/doctor-procurador-list-kendo/doctor-procurador-list-kendo.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/doctor-procuradores/doctor-procurador-list-kendo/doctor-procurador-list-kendo.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Tipos para doctorProcurador-list-kendo*/\nh3 { text-transform: uppercase;} \n"

/***/ }),

/***/ "./src/app/doctor-procuradores/doctor-procurador-list-kendo/doctor-procurador-list-kendo.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/doctor-procuradores/doctor-procurador-list-kendo/doctor-procurador-list-kendo.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!usuariologueado\" >\n    <div class=\"card\">\n        <div align=\"center\" class=\"card-header\"><h3>{{configuracionDoctorProcurador.titulo}}</h3></div>\n        <div class=\"card-body\">\n            <div id=\"div_doctorProcurador_{{nombregrid}}\">\n                <div id=\"grid_doctorProcurador_{{nombregrid}}\"></div>\n            </div>\n        </div>\t\t\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/doctor-procuradores/doctor-procurador-list-kendo/doctor-procurador-list-kendo.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/doctor-procuradores/doctor-procurador-list-kendo/doctor-procurador-list-kendo.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: DoctorProcuradorListKendoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorProcuradorListKendoComponent", function() { return DoctorProcuradorListKendoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_doctor_procurador__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/doctor-procurador */ "./src/app/doctor-procuradores/shared/doctor-procurador.ts");
/* harmony import */ var _shared_configurar_doctor_procurador__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/configurar-doctor-procurador */ "./src/app/doctor-procuradores/shared/configurar-doctor-procurador.ts");
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
var DoctorProcuradorListKendoComponent = /** @class */ (function () {
    function DoctorProcuradorListKendoComponent(urlprovider, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    globalesService) {
        this.urlprovider = urlprovider;
        this.coreService = coreService;
        this.globalesService = globalesService;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "", "permiso": 0, "etiqueta": "" };
        this.doctorProcuradorSeleccionado = new _shared_doctor_procurador__WEBPACK_IMPORTED_MODULE_3__["DoctorProcurador"]();
        this.configuracionDoctorProcurador = new _shared_configurar_doctor_procurador__WEBPACK_IMPORTED_MODULE_4__["ConfigurarDoctorProcurador"]();
        this.nombregrid = "";
        this.evtDoctorProcuradorSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "doctorProcurador";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'doctorProcurador'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'doctorProcurador'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }
    DoctorProcuradorListKendoComponent.prototype.actualizaTituloInicial = function () {
        if (this.configuracionDoctorProcurador.titulo.indexOf("Catálogo") != -1) {
            this.configuracionDoctorProcurador.titulo = "Catálogo " + this.permisosTabla.etiqueta;
        }
    };
    DoctorProcuradorListKendoComponent.prototype.ngOnChanges = function (changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionDoctorProcurador && changes.configuracionDoctorProcurador.currentValue &&
            (changes.configuracionDoctorProcurador.previousValue instanceof _shared_configurar_doctor_procurador__WEBPACK_IMPORTED_MODULE_4__["ConfigurarDoctorProcurador"])) {
            if (changes.configuracionDoctorProcurador.currentValue.permisosAtributos)
                this.permisosAtributos = changes.configuracionDoctorProcurador.currentValue.permisosAtributos;
            if (changes.configuracionDoctorProcurador.currentValue.permisosTabla)
                this.permisosTabla = changes.configuracionDoctorProcurador.currentValue.permisosTabla;
            if ($("#grid_doctorProcurador_" + this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    };
    DoctorProcuradorListKendoComponent.prototype.ngOnInit = function () {
        self["grid_doctorProcurador_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var ejecutarpermisos = true;
        if (this.configuracionDoctorProcurador.permisosAtributos &&
            this.configuracionDoctorProcurador.permisosTabla)
            ejecutarpermisos = false;
        if (this.usuariologueado && ejecutarpermisos) {
            if (this.usuariologueado.perfil) {
                var tablas = [
                    "doctorProcurador",
                ];
                var parametros = {
                    "id_usu": this.usuariologueado.id,
                    "tablas": tablas,
                    "id_exp": -1
                };
                this.coreService.permisos(parametros, this.evtCorePermisos, this);
                //                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                //                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DoctorProcurador'";
                //                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DoctorProcurador'";
                //                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'DoctorProcurador'";
                //                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
                //                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
                //                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
            }
        }
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        if (this.configuracionDoctorProcurador.permisosAtributos)
            this.permisosAtributos = this.configuracionDoctorProcurador.permisosAtributos;
        if (this.configuracionDoctorProcurador.permisosTabla)
            this.permisosTabla = this.configuracionDoctorProcurador.permisosTabla;
        this.configuraGrid();
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    DoctorProcuradorListKendoComponent.prototype.evtCorePermisos = function (permisos, obj) {
        if (permisos && permisos.doctorProcurador && permisos.doctorProcurador.PermisoAtributo && permisos.doctorProcurador.PermisoAtributo.length > 0
            && !obj.configuracionDoctorProcurador.permisosAtributos) {
            obj.globalesService.evtAtributos(permisos.doctorProcurador.PermisoAtributo, obj);
            //            obj.permisosAtributos = permisos.DoctorProcurador.PermisoAtributo ;
        }
        if (permisos && permisos.doctorProcurador && permisos.doctorProcurador.PermisoTabla && permisos.doctorProcurador.PermisoTabla.length > 0
            && !obj.configuracionDoctorProcurador.permisosTabla) {
            obj.globalesService.evtTablas(permisos.doctorProcurador.PermisoTabla, obj);
            //            obj.permisosTabla = permisos.DoctorProcurador.PermisoTabla[0] ;
            //            obj.permisosaccionesInicio();
        }
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    DoctorProcuradorListKendoComponent.prototype.configuraGrid = function () {
        var _this = this;
        if ($("#grid_doctorProcurador_" + this.nombregrid).data("kendoGrid")) {
        }
        else {
            setTimeout(function () {
                _this.inicializaGrid();
                _this.configuraGrid();
            }, 300);
        }
    };
    DoctorProcuradorListKendoComponent.prototype.sourcegrid = function () {
        function completar(e) {
            (e);
        }
        ;
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        if (this.configuracionDoctorProcurador.campoAgEl != null
            && this.configuracionDoctorProcurador.doctorProcuradorConsulta
            && this.configuracionDoctorProcurador.doctorProcuradorConsulta.isOk
            && !this.configuracionDoctorProcurador.doctorProcuradorConsulta.isOk())
            return;
        if (this.configuracionDoctorProcurador.doctorProcuradorConsulta) {
            if (!this.configuracionDoctorProcurador.campoAgEl && this.configuracionDoctorProcurador.doctorProcuradorConsulta instanceof _shared_doctor_procurador__WEBPACK_IMPORTED_MODULE_3__["DoctorProcurador"])
                this.configuracionDoctorProcurador.rutaLista = this.crudServiceBaseUrl + "/getDoctorProcuradoresByDto";
            this.lista = this.configuracionDoctorProcurador.lecturaP(completar, this.configuracionDoctorProcurador.doctorProcuradorConsulta);
            if (this.configuracionDoctorProcurador.campoAgEl) {
                this.rutaAgregar = this.configuracionDoctorProcurador.agregarP(function () { }, this.configuracionDoctorProcurador.campoAgEl);
                this.rutaEliminar = this.configuracionDoctorProcurador.eliminarP(function () { }, this.configuracionDoctorProcurador.campoAgEl);
            }
            else {
                this.rutaAgregar = this.configuracionDoctorProcurador.agregarP(completar, this.configuracionDoctorProcurador.doctorProcuradorConsulta);
                this.rutaEliminar = this.configuracionDoctorProcurador.eliminarP(completar, this.configuracionDoctorProcurador.doctorProcuradorConsulta);
            }
        }
        else {
            this.lista = this.configuracionDoctorProcurador.lectura();
            this.rutaAgregar = this.configuracionDoctorProcurador.agregar();
            this.rutaEliminar = this.configuracionDoctorProcurador.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this, "doctorProcurador", "id")) {
            modelo["id"] = "id";
        }
        var campos = {};
        if (this.globalesService.avisible(this, "doctorProcurador", "id")) {
            campos["id"] = { editable: false, nullable: true, type: "number" };
        }
        if (this.globalesService.avisible(this, "doctorProcurador", "idhospital")) {
            campos["idhospital"] = { editable: this.globalesService.aenable(this, "doctorProcurador", "idhospital"), nullable: true, type: "object", defaultValue: { "id": "", "rnt": "" } };
        }
        if (this.globalesService.avisible(this, "doctorProcurador", "nombre")) {
            campos["nombre"] = { editable: this.globalesService.aenable(this, "doctorProcurador", "nombre"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "doctorProcurador", "primerApellido")) {
            campos["primerApellido"] = { editable: this.globalesService.aenable(this, "doctorProcurador", "primerApellido"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "doctorProcurador", "segundoApellido")) {
            campos["segundoApellido"] = { editable: this.globalesService.aenable(this, "doctorProcurador", "segundoApellido"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "doctorProcurador", "correoElectronico")) {
            campos["correoElectronico"] = { editable: this.globalesService.aenable(this, "doctorProcurador", "correoElectronico"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "doctorProcurador", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this, "doctorProcurador", "fechaRegistro"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "doctorProcurador", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this, "doctorProcurador", "fechaActualizacion"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "doctorProcurador", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this, "doctorProcurador", "fechaBaja"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "doctorProcurador", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this, "doctorProcurador", "usuarioUltMov"), nullable: true, type: "object", defaultValue: { "id": "", "password": "" } };
        }
        if (this.globalesService.avisible(this, "doctorProcurador", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this, "doctorProcurador", "status"), nullable: true, type: "string", defaultValue: "1" };
        }
        modelo["fields"] = campos;
        var slf = this;
        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionDoctorProcurador.rutaActualizar,
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
            if (self.configuracionDoctorProcurador.campoAgEl) {
                if (self.configuracionDoctorProcurador.tipocampoAgEl == "DoctorProcuradorDoctorProcurador")
                    self.configuracionDoctorProcurador.campoAgEl.doctorProcurador2 = options.models[0];
                else
                    self.configuracionDoctorProcurador.campoAgEl.doctorProcurador = options.models[0];
                return JSON.stringify(self.configuracionDoctorProcurador.campoAgEl);
            }
            else if (est.options[operation].data.models.doctorProcurador) {
                est.options[operation].data.models.doctorProcurador2 = options.models[0];
                return JSON.stringify(est.options[operation].data.models);
            }
            return JSON.stringify(options.models[0]);
        }
    };
    DoctorProcuradorListKendoComponent.prototype.inicializaGrid = function () {
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        this.sourcegrid();
        var columnas = [];
        if (this.globalesService.avisible(this, "doctorProcurador", "id")) {
            columnas.push({ field: "id", title: "ID", width: 40, editor: this.globalesService.txtNumero });
        }
        if (this.globalesService.avisible(this, "doctorProcurador", "idhospital")) {
            columnas.push({ field: "idhospital", title: "RNT Procedente", width: 65, editor: idhospitalDropDownEditor, template: " #if (idhospital){#   #=idhospital.rnt# # } # " });
        }
        if (this.globalesService.avisible(this, "doctorProcurador", "nombre")) {
            columnas.push({ field: "nombre", title: "Nombre", width: 130, editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "doctorProcurador", "primerApellido")) {
            columnas.push({ field: "primerApellido", title: "Primer Apellido", width: 150, editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "doctorProcurador", "segundoApellido")) {
            columnas.push({ field: "segundoApellido", title: "Segundo Apellido", width: 160, editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "doctorProcurador", "correoElectronico")) {
            columnas.push({ field: "correoElectronico", title: "Correo Electrónico", width: 170, editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "doctorProcurador", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this, "doctorProcurador", "fechaRegistro"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "doctorProcurador", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this, "doctorProcurador", "fechaActualizacion"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "doctorProcurador", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this, "doctorProcurador", "fechaBaja"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "doctorProcurador", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this, "doctorProcurador", "usuarioUltMov"), editor: usuarioUltMovDropDownEditor, template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # " });
        }
        if (this.globalesService.avisible(this, "doctorProcurador", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this, "doctorProcurador", "status"), editor: this.globalesService.estadoDropDownEditor,
                template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this, "doctorProcurador"))
            op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this, "doctorProcurador")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this, "doctorProcurador")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this, "doctorProcurador") && this.configuracionDoctorProcurador.doctorProcuradorConsulta != null) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: 90
        });
        if (this.grid)
            $("#grid_doctorProcurador_" + this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_doctorProcurador_" + this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionDoctorProcurador.altoComponente,
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
        this.grid = $("#grid_doctorProcurador_" + this.nombregrid).data("kendoGrid");
        this.grid.refresh();
        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutaidhospital = this.urlprovider.serverURL + "hospital/getHospitalesActivos";
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
        function idhospitalDropDownEditor(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                autoBind: false,
                dataTextField: "redIssste",
                dataValueField: "id",
                filter: "contains",
                minLength: 5, dataSource: {
                    transport: {
                        read: {
                            url: rutaidhospital,
                            contentType: "application/json",
                            type: "POST",
                        }
                    }
                }
            });
        }
    };
    DoctorProcuradorListKendoComponent.prototype.showDetails = function (e) {
        e.preventDefault();
        //        this.grid = $("#grid_doctorProcurador_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        var gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.doctorProcuradorSeleccionado = new _shared_doctor_procurador__WEBPACK_IMPORTED_MODULE_3__["DoctorProcurador"]();
        gridac.doctorProcuradorSeleccionado.from(dataItem);
        gridac.evtDoctorProcuradorSeleccionado.emit(gridac.doctorProcuradorSeleccionado);
        (gridac.doctorProcuradorSeleccionado);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_configurar_doctor_procurador__WEBPACK_IMPORTED_MODULE_4__["ConfigurarDoctorProcurador"])
    ], DoctorProcuradorListKendoComponent.prototype, "configuracionDoctorProcurador", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DoctorProcuradorListKendoComponent.prototype, "nombregrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("doctorProcuradorSeleccionado"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DoctorProcuradorListKendoComponent.prototype, "evtDoctorProcuradorSeleccionado", void 0);
    DoctorProcuradorListKendoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-doctor-procurador-list-kendo',
            template: __webpack_require__(/*! ./doctor-procurador-list-kendo.component.html */ "./src/app/doctor-procuradores/doctor-procurador-list-kendo/doctor-procurador-list-kendo.component.html"),
            styles: [__webpack_require__(/*! ./doctor-procurador-list-kendo.component.css */ "./src/app/doctor-procuradores/doctor-procurador-list-kendo/doctor-procurador-list-kendo.component.css")],
            providers: [
                //             PermisoTablaService,
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_url_provider__WEBPACK_IMPORTED_MODULE_1__["URLProvider"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"]])
    ], DoctorProcuradorListKendoComponent);
    return DoctorProcuradorListKendoComponent;
}());



/***/ }),

/***/ "./src/app/doctor-procuradores/doctor-procurador-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/doctor-procuradores/doctor-procurador-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: DoctorProcuradorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorProcuradorRoutingModule", function() { return DoctorProcuradorRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _doctor_procuradores_doctor_procurador_list_kendo_doctor_procurador_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../doctor-procuradores/doctor-procurador-list-kendo/doctor-procurador-list-kendo.component */ "./src/app/doctor-procuradores/doctor-procurador-list-kendo/doctor-procurador-list-kendo.component.ts");
/* harmony import */ var _doctor_procuradores_doctor_procurador_crud_doctor_procurador_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../doctor-procuradores/doctor-procurador-crud/doctor-procurador-crud.component */ "./src/app/doctor-procuradores/doctor-procurador-crud/doctor-procurador-crud.component.ts");
/* harmony import */ var _doctor_procuradores_doctor_procurador_table_doctor_procurador_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../doctor-procuradores/doctor-procurador-table/doctor-procurador-table.component */ "./src/app/doctor-procuradores/doctor-procurador-table/doctor-procurador-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'doctor-procurador-list-kendo', component: _doctor_procuradores_doctor_procurador_list_kendo_doctor_procurador_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__["DoctorProcuradorListKendoComponent"] },
    { path: 'doctor-procurador-crud', component: _doctor_procuradores_doctor_procurador_crud_doctor_procurador_crud_component__WEBPACK_IMPORTED_MODULE_3__["DoctorProcuradorCrudComponent"] },
    { path: 'doctor-procurador-table', component: _doctor_procuradores_doctor_procurador_table_doctor_procurador_table_component__WEBPACK_IMPORTED_MODULE_4__["DoctorProcuradorTableComponent"] },
];
var DoctorProcuradorRoutingModule = /** @class */ (function () {
    function DoctorProcuradorRoutingModule() {
    }
    DoctorProcuradorRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DoctorProcuradorRoutingModule);
    return DoctorProcuradorRoutingModule;
}());



/***/ }),

/***/ "./src/app/doctor-procuradores/doctor-procurador-table/doctor-procurador-table.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/doctor-procuradores/doctor-procurador-table/doctor-procurador-table.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/doctor-procuradores/doctor-procurador-table/doctor-procurador-table.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/doctor-procuradores/doctor-procurador-table/doctor-procurador-table.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"usuariologueado\" >\n<div class=\"card\">\n<div class=\"card-header\"><h1>Busqueda {{permisosTabla?.etiqueta}}</h1></div>\n<div class=\"card-body\">\n<div class=\"container-fluid\" >    \n\n<table *ngIf=\"muestraTabla\" id=\"tabla_doctorProcurador\" class=\"table \" cellspacing=\"0\" width=\"100%\">\n    <thead>\n        <tr>\n            <th [class.hidden]=\"!avisible('doctorProcurador','id')\" >{{aetiqueta('doctorProcurador','id')}}</th>\n            <th [class.hidden]=\"!avisible('doctorProcurador','idhospital')\" >{{aetiqueta('doctorProcurador','idhospital')}}</th>\n            <th [class.hidden]=\"!avisible('doctorProcurador','nombre')\" >{{aetiqueta('doctorProcurador','nombre')}}</th>\n            <th [class.hidden]=\"!avisible('doctorProcurador','primerApellido')\" >{{aetiqueta('doctorProcurador','primerApellido')}}</th>\n            <th [class.hidden]=\"!avisible('doctorProcurador','segundoApellido')\" >{{aetiqueta('doctorProcurador','segundoApellido')}}</th>\n            <th [class.hidden]=\"!avisible('doctorProcurador','correoElectronico')\" >{{aetiqueta('doctorProcurador','correoElectronico')}}</th>\n            <th [class.hidden]=\"!avisible('doctorProcurador','fechaRegistro')\" >{{aetiqueta('doctorProcurador','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('doctorProcurador','fechaActualizacion')\" >{{aetiqueta('doctorProcurador','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('doctorProcurador','fechaBaja')\" >{{aetiqueta('doctorProcurador','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('doctorProcurador','usuarioUltMov')\" >{{aetiqueta('doctorProcurador','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('doctorProcurador','status')\" >{{aetiqueta('doctorProcurador','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </thead>\n    <tfoot>\n        <tr>\n            <th [class.hidden]=\"!avisible('doctorProcurador','id')\" >{{aetiqueta('doctorProcurador','id')}}</th>\n            <th [class.hidden]=\"!avisible('doctorProcurador','idhospital')\" >{{aetiqueta('doctorProcurador','idhospital')}}</th>\n            <th [class.hidden]=\"!avisible('doctorProcurador','nombre')\" >{{aetiqueta('doctorProcurador','nombre')}}</th>\n            <th [class.hidden]=\"!avisible('doctorProcurador','primerApellido')\" >{{aetiqueta('doctorProcurador','primerApellido')}}</th>\n            <th [class.hidden]=\"!avisible('doctorProcurador','segundoApellido')\" >{{aetiqueta('doctorProcurador','segundoApellido')}}</th>\n            <th [class.hidden]=\"!avisible('doctorProcurador','correoElectronico')\" >{{aetiqueta('doctorProcurador','correoElectronico')}}</th>\n            <th [class.hidden]=\"!avisible('doctorProcurador','fechaRegistro')\" >{{aetiqueta('doctorProcurador','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('doctorProcurador','fechaActualizacion')\" >{{aetiqueta('doctorProcurador','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('doctorProcurador','fechaBaja')\" >{{aetiqueta('doctorProcurador','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('doctorProcurador','usuarioUltMov')\" >{{aetiqueta('doctorProcurador','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('doctorProcurador','status')\" >{{aetiqueta('doctorProcurador','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </tfoot>\n</table>\n</div>\n<app-doctor-procurador [class.hidden]=\"primero\" [(doctorProcurador)]=\"doctorProcuradorSeleccionado\" (doctorProcuradorTablaChange)=\"cambio_doctorProcurador($event)\"> </app-doctor-procurador>    \n</div>\n</div>\n</div>\n\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/doctor-procuradores/doctor-procurador-table/doctor-procurador-table.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/doctor-procuradores/doctor-procurador-table/doctor-procurador-table.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: DoctorProcuradorTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorProcuradorTableComponent", function() { return DoctorProcuradorTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_doctor_procurador__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/doctor-procurador */ "./src/app/doctor-procuradores/shared/doctor-procurador.ts");
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






var DoctorProcuradorTableComponent = /** @class */ (function () {
    function DoctorProcuradorTableComponent(globalesService, permisoAtributoService, permisoTablaService, urlProvider) {
        this.globalesService = globalesService;
        this.permisoAtributoService = permisoAtributoService;
        this.permisoTablaService = permisoTablaService;
        this.urlProvider = urlProvider;
        this.primero = true;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "doctorProcurador", "permiso": 0, "etiqueta": "" };
        this.ptabla = false;
        this.pattr = false;
        this.doctorProcuradorSeleccionado = new _shared_doctor_procurador__WEBPACK_IMPORTED_MODULE_1__["DoctorProcurador"]();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                discon = "with perfil.id = " + this.usuariologueado.perfil.id;
                var cadena2 = "select pa from PermisoTabla as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'doctorProcurador'";
                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
            }
        }
    }
    DoctorProcuradorTableComponent.prototype.evtTablas = function (lista, obj) {
        if (lista.length >= 0) {
            obj.permisosTabla = lista[0];
            obj.ptabla = true;
            var discon = "with perfil.id = " + obj.usuariologueado.perfil.id;
            var cadena1 = "select pa from PermisoAtributo as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'doctorProcurador'";
            obj.permisoAtributoService.custom(cadena1, obj.evtAtributos, obj);
        }
    };
    DoctorProcuradorTableComponent.prototype.evtAtributos = function (lista, obj) {
        obj.permisosAtributos = lista;
        obj.pattr = true;
        if (obj.ptabla && obj.pattr) {
            setTimeout(function () { obj.getColumnas(obj); }, 500);
        }
    };
    Object.defineProperty(DoctorProcuradorTableComponent.prototype, "muestraTabla", {
        get: function () {
            return this.ptabla && this.pattr;
        },
        enumerable: true,
        configurable: true
    });
    DoctorProcuradorTableComponent.prototype.getColumnas = function (obj) {
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        if (!this.avisible("doctorProcurador", "id"))
            columnasNoVisibles.push(0);
        columnas.push({ "data": "id" });
        if (!this.avisible("doctorProcurador", "idhospital"))
            columnasNoVisibles.push(1);
        columnas.push({
            "data": function (oObj) {
                if (oObj.idhospital)
                    return "<span style=\"cursor: pointer\">" + oObj.idhospital.redIssste + "</span>";
                return "";
            }
        });
        if (!this.avisible("doctorProcurador", "nombre"))
            columnasNoVisibles.push(2);
        columnas.push({ "data": "nombre" });
        if (!this.avisible("doctorProcurador", "primerApellido"))
            columnasNoVisibles.push(3);
        columnas.push({ "data": "primerApellido" });
        if (!this.avisible("doctorProcurador", "segundoApellido"))
            columnasNoVisibles.push(4);
        columnas.push({ "data": "segundoApellido" });
        if (!this.avisible("doctorProcurador", "correoElectronico"))
            columnasNoVisibles.push(5);
        columnas.push({ "data": "correoElectronico" });
        if (!this.avisible("doctorProcurador", "fechaRegistro"))
            columnasNoVisibles.push(6);
        columnas.push({ "data": "fechaRegistro" });
        if (!this.avisible("doctorProcurador", "fechaActualizacion"))
            columnasNoVisibles.push(7);
        columnas.push({ "data": "fechaActualizacion" });
        if (!this.avisible("doctorProcurador", "fechaBaja"))
            columnasNoVisibles.push(8);
        columnas.push({ "data": "fechaBaja" });
        if (!this.avisible("doctorProcurador", "usuarioUltMov"))
            columnasNoVisibles.push(9);
        columnas.push({
            "data": function (oObj) {
                if (oObj.usuarioUltMov)
                    return "<span style=\"cursor: pointer\">" + oObj.usuarioUltMov.username + "</span>";
                return "";
            }
        });
        if (!this.avisible("doctorProcurador", "status"))
            columnasNoVisibles.push(10);
        columnas.push({ "data": "status" });
        if (self.pacutalizar("doctorProcurador"))
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
        var tabla = $('#tabla_doctorProcurador').DataTable({
            "columnDefs": novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            "initComplete": function (settings, json) {
                var xs = $("#tabla_doctorProcurador_wrapper").find(".row");
                $($(xs[0]).find(".col-sm-6")[0]).
                    find(".dataTables_length").
                    append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function () {
                    self.doctorProcuradorSeleccionado = new _shared_doctor_procurador__WEBPACK_IMPORTED_MODULE_1__["DoctorProcurador"]();
                    self.primero = false;
                });
            },
            "ajax": {
                "url": self.urlProvider.serverURL + "doctorProcurador/getDoctorProcuradores",
                "type": "POST",
                "contentType": "application/json",
                "datatype": 'json',
                "dataSrc": "",
            },
            "columns": columnas,
        });
        $('#tabla_doctorProcurador tbody').on('click', 'td', function () {
            if (this.cellIndex == $(this).parent().find("td").length - 1) {
                var data = $('#tabla_doctorProcurador').DataTable().row(this).data();
                self.doctorProcuradorSeleccionado = new _shared_doctor_procurador__WEBPACK_IMPORTED_MODULE_1__["DoctorProcurador"]();
                self.doctorProcuradorSeleccionado.from(data);
                self.primero = false;
                if ($(this).parent().hasClass('selected')) {
                    $(this).parent().removeClass('selected');
                }
                else {
                    $('#tabla_doctorProcurador').DataTable().$('tr.selected').removeClass('selected');
                    $(this).parent().addClass('selected');
                }
            }
        });
    };
    DoctorProcuradorTableComponent.prototype.ngOnInit = function () {
    };
    DoctorProcuradorTableComponent.prototype.cambio_doctorProcurador = function (doctorProcurador) {
        $('#tabla_doctorProcurador').DataTable().ajax.reload(null, false);
        this.primero = true;
    };
    // **********************************************************************************
    // **********************************************************************************
    // **           I N I C I A N   P E R M I S O S   P A R A   P E R F I L E S  
    // **********************************************************************************
    // **********************************************************************************
    DoctorProcuradorTableComponent.prototype.paux = function (tabla, permiso) {
        if (this.permisosTabla.tabla == tabla && (this.permisosTabla.permiso & permiso) == permiso)
            return true;
        return false;
    };
    DoctorProcuradorTableComponent.prototype.preporteWord = function (tabla) { return this.paux(tabla, 64); };
    DoctorProcuradorTableComponent.prototype.preporteExcel = function (tabla) { return this.paux(tabla, 32); };
    DoctorProcuradorTableComponent.prototype.preportePdf = function (tabla) { return this.paux(tabla, 16); };
    DoctorProcuradorTableComponent.prototype.pbuscar = function (tabla) { return this.paux(tabla, 8); };
    DoctorProcuradorTableComponent.prototype.pacutalizar = function (tabla) { return this.paux(tabla, 4); };
    DoctorProcuradorTableComponent.prototype.peliminar = function (tabla) { return this.paux(tabla, 2); };
    DoctorProcuradorTableComponent.prototype.pagregar = function (tabla) { return this.paux(tabla, 1); };
    //******************************************************************************************
    //*******  P E R M I S O S   S O B R E   A T R I B U T O S  ********************************
    //******************************************************************************************
    DoctorProcuradorTableComponent.prototype.aetiqueta = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo)
                return elemento.etiqueta;
        }
        return "";
    };
    DoctorProcuradorTableComponent.prototype.avalidacion = function (tabla, atributo) {
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
    DoctorProcuradorTableComponent.prototype.amensaje = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo) {
                return elemento.mensaje;
            }
        }
        return null;
    };
    DoctorProcuradorTableComponent.prototype.aeditable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 8) == 8)
                return true;
        }
        return false;
    };
    DoctorProcuradorTableComponent.prototype.arequerido = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 4) == 4)
                return true;
        }
        return false;
    };
    DoctorProcuradorTableComponent.prototype.avisible = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 2) == 2)
                return true;
        }
        return false;
    };
    DoctorProcuradorTableComponent.prototype.aenable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 1) == 1)
                return true;
        }
        return false;
    };
    DoctorProcuradorTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-doctor-procurador-table',
            template: __webpack_require__(/*! ./doctor-procurador-table.component.html */ "./src/app/doctor-procuradores/doctor-procurador-table/doctor-procurador-table.component.html"),
            styles: [__webpack_require__(/*! ./doctor-procurador-table.component.css */ "./src/app/doctor-procuradores/doctor-procurador-table/doctor-procurador-table.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
                _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
                _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
            _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
            _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            _shared_url_provider__WEBPACK_IMPORTED_MODULE_3__["URLProvider"]])
    ], DoctorProcuradorTableComponent);
    return DoctorProcuradorTableComponent;
}());



/***/ }),

/***/ "./src/app/doctor-procuradores/doctor-procurador.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/doctor-procuradores/doctor-procurador.module.ts ***!
  \*****************************************************************/
/*! exports provided: DoctorProcuradorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorProcuradorModule", function() { return DoctorProcuradorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _doctor_procurador_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doctor-procurador-routing.module */ "./src/app/doctor-procuradores/doctor-procurador-routing.module.ts");
/* harmony import */ var _doctor_procurador_list_kendo_doctor_procurador_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./doctor-procurador-list-kendo/doctor-procurador-list-kendo.component */ "./src/app/doctor-procuradores/doctor-procurador-list-kendo/doctor-procurador-list-kendo.component.ts");
/* harmony import */ var _doctor_procurador_crud_doctor_procurador_crud_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./doctor-procurador-crud/doctor-procurador-crud.component */ "./src/app/doctor-procuradores/doctor-procurador-crud/doctor-procurador-crud.component.ts");
/* harmony import */ var _doctor_procurador_conjunto_doctor_procurador_conjunto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./doctor-procurador-conjunto/doctor-procurador-conjunto.component */ "./src/app/doctor-procuradores/doctor-procurador-conjunto/doctor-procurador-conjunto.component.ts");
/* harmony import */ var _doctor_procurador_doctor_procurador_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./doctor-procurador/doctor-procurador.component */ "./src/app/doctor-procuradores/doctor-procurador/doctor-procurador.component.ts");
/* harmony import */ var _doctor_procurador_table_doctor_procurador_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./doctor-procurador-table/doctor-procurador-table.component */ "./src/app/doctor-procuradores/doctor-procurador-table/doctor-procurador-table.component.ts");
/* harmony import */ var _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/usuario-perfil.module */ "./src/app/shared/usuario-perfil.module.ts");
/* harmony import */ var _shared_entidad_federativa_usuario_usuario_btc_hospital_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/entidad-federativa-usuario-usuario-btc-hospital.module */ "./src/app/shared/entidad-federativa-usuario-usuario-btc-hospital.module.ts");
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












var DoctorProcuradorModule = /** @class */ (function () {
    function DoctorProcuradorModule(parentModule) {
        if (parentModule) {
            throw new Error('DoctorProcuradorModule is already loaded. Import it in the AppModule only');
        }
    }
    DoctorProcuradorModule_1 = DoctorProcuradorModule;
    DoctorProcuradorModule.forRoot = function () {
        return {
            ngModule: DoctorProcuradorModule_1,
            providers: []
        };
    };
    var DoctorProcuradorModule_1;
    DoctorProcuradorModule = DoctorProcuradorModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_11__["PersonalizadosModule"], _doctor_procurador_routing_module__WEBPACK_IMPORTED_MODULE_3__["DoctorProcuradorRoutingModule"],
                _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_9__["UsuarioPerfilModule"].forRoot(),
                _shared_entidad_federativa_usuario_usuario_btc_hospital_module__WEBPACK_IMPORTED_MODULE_10__["EntidadFederativaUsuarioUsuarioBtcHospitalModule"].forRoot()
            ],
            declarations: [
                _doctor_procurador_list_kendo_doctor_procurador_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["DoctorProcuradorListKendoComponent"],
                _doctor_procurador_doctor_procurador_component__WEBPACK_IMPORTED_MODULE_7__["DoctorProcuradorComponent"],
                _doctor_procurador_crud_doctor_procurador_crud_component__WEBPACK_IMPORTED_MODULE_5__["DoctorProcuradorCrudComponent"],
                _doctor_procurador_conjunto_doctor_procurador_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["DoctorProcuradorConjuntoComponent"],
                _doctor_procurador_table_doctor_procurador_table_component__WEBPACK_IMPORTED_MODULE_8__["DoctorProcuradorTableComponent"],
            ],
            exports: [
                _doctor_procurador_list_kendo_doctor_procurador_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["DoctorProcuradorListKendoComponent"],
                _doctor_procurador_doctor_procurador_component__WEBPACK_IMPORTED_MODULE_7__["DoctorProcuradorComponent"],
                _doctor_procurador_crud_doctor_procurador_crud_component__WEBPACK_IMPORTED_MODULE_5__["DoctorProcuradorCrudComponent"],
                _doctor_procurador_conjunto_doctor_procurador_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["DoctorProcuradorConjuntoComponent"],
                _doctor_procurador_table_doctor_procurador_table_component__WEBPACK_IMPORTED_MODULE_8__["DoctorProcuradorTableComponent"],
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [DoctorProcuradorModule])
    ], DoctorProcuradorModule);
    return DoctorProcuradorModule;
}());



/***/ }),

/***/ "./src/app/doctor-procuradores/doctor-procurador/doctor-procurador.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/doctor-procuradores/doctor-procurador/doctor-procurador.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/doctor-procuradores/doctor-procurador/doctor-procurador.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/doctor-procuradores/doctor-procurador/doctor-procurador.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [hidden]=\"!usuariologueado\" #formaGeneral=\"ngForm\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <h3>{{etiquetaGeneral}}</h3>\n        </div>\n        <div class=\"panel-body\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"col-lg-6\"></div>\n                    <div class=\"col-lg-6\">\n                        <app-componente-identificador [componente]=\"'doctorProcurador'\" [atributo]=\"'id'\"\n                            [buscar]=\"doctorProcuradorBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                            [(valido)]=\"validosDoctorProcurador['id']\" [(dato)]=\"doctorProcurador.id\" class=\"w-100\">\n                        </app-componente-identificador>\n                    </div>\n                </div>\n\n                <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"\n                    [class.hidden]=\"!idhospitalEditar\">\n                    <div class=\"form-group\"\n                        [class.hidden]=\"!globalesService.aeditable(this,'doctorProcurador','idhospital')\">\n                        <app-hospital-crud [nombre]=\"'idhospital'\" [hospital]=\"doctorProcurador.idhospital\"\n                            (hospitalChange)=\"evtIdhospital($event)\" [ocultarConjuntosHospital]=\"'true'\"\n                            [class.hidden]=\"!idhospitalEditar\"></app-hospital-crud>\n                    </div>\n                </div>\n\n                <app-componente-cadena [componente]=\"'doctorProcurador'\" [atributo]=\"'nombre'\"\n                    [buscar]=\"doctorProcuradorBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                    [(valido)]=\"validosDoctorProcurador['nombre']\" [(dato)]=\"doctorProcurador.nombre\" class=\"w-100\"\n                    [maxlength]=\"255\">\n                </app-componente-cadena>\n                <app-componente-cadena [componente]=\"'doctorProcurador'\" [atributo]=\"'primerApellido'\"\n                    [buscar]=\"doctorProcuradorBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                    [(valido)]=\"validosDoctorProcurador['primerApellido']\" [(dato)]=\"doctorProcurador.primerApellido\"\n                    class=\"w-100\" [maxlength]=\"255\">\n                </app-componente-cadena>\n                <app-componente-cadena [componente]=\"'doctorProcurador'\" [atributo]=\"'segundoApellido'\"\n                    [buscar]=\"doctorProcuradorBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                    [(valido)]=\"validosDoctorProcurador['segundoApellido']\" [(dato)]=\"doctorProcurador.segundoApellido\"\n                    class=\"w-100\" [maxlength]=\"255\">\n                </app-componente-cadena>\n                <app-componente-cadena [componente]=\"'doctorProcurador'\" [atributo]=\"'correoElectronico'\"\n                    [buscar]=\"doctorProcuradorBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                    [(valido)]=\"validosDoctorProcurador['correoElectronico']\"\n                    [(dato)]=\"doctorProcurador.correoElectronico\" class=\"w-100\" [maxlength]=\"255\">\n                </app-componente-cadena>\n                <app-componente-objeto [componente]=\"'doctorProcurador'\" [atributo]=\"'idhospital'\"\n                    [buscar]=\"doctorProcuradorBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                    [(valido)]=\"validosDoctorProcurador['idhospital']\" [(dato)]=\"doctorProcurador.idhospital\"\n                    class=\"w-100\" [ocultarConjuntos]=\"ocultarConjuntos\"\n                    [opciones]=\"lista_idhospitalDoctorProcuradorHospital\" [atributoVisible]=\"'nombre'\"\n                    [(objetoEdicion)]=\"idhospitalDoctorProcuradorHospitalEditar\">\n                </app-componente-objeto>\n                <app-componente-fecha [componente]=\"'doctorProcurador'\" [atributo]=\"'fechaRegistro'\"\n                    [buscar]=\"doctorProcuradorBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                    [(valido)]=\"validosDoctorProcurador['fechaRegistro']\" [(dato)]=\"doctorProcurador.fechaRegistro\"\n                    class=\"w-100\">\n                </app-componente-fecha>\n                <app-componente-fecha [componente]=\"'doctorProcurador'\" [atributo]=\"'fechaActualizacion'\"\n                    [buscar]=\"doctorProcuradorBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                    [(valido)]=\"validosDoctorProcurador['fechaActualizacion']\"\n                    [(dato)]=\"doctorProcurador.fechaActualizacion\" class=\"w-100\">\n                </app-componente-fecha>\n                <app-componente-fecha [componente]=\"'doctorProcurador'\" [atributo]=\"'fechaBaja'\"\n                    [buscar]=\"doctorProcuradorBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                    [(valido)]=\"validosDoctorProcurador['fechaBaja']\" [(dato)]=\"doctorProcurador.fechaBaja\"\n                    class=\"w-100\">\n                </app-componente-fecha>\n                <div>\n                    <app-componente-objeto [componente]=\"'doctorProcurador'\" [atributo]=\"'usuarioUltMov'\"\n                        [buscar]=\"doctorProcuradorBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                        [(valido)]=\"validosDoctorProcurador['usuarioUltMov']\" [(dato)]=\"doctorProcurador.usuarioUltMov\"\n                        class=\"w-100\" [ocultarConjuntos]=\"ocultarConjuntos\"\n                        [opciones]=\"lista_usuarioUltMovDoctorProcuradorUsuario\" [atributoVisible]=\"'username'\"\n                        [(objetoEdicion)]=\"usuarioUltMovDoctorProcuradorUsuarioEditar\">\n                    </app-componente-objeto>\n                    <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"\n                        [class.hidden]=\"!usuarioUltMovEditar\">\n                        <div class=\"form-group\"\n                            [class.hidden]=\"!globalesService.aeditable(this,'doctorProcurador','usuarioUltMov')\">\n                            <!--app-usuario-crud [nombre]=\"'usuarioUltMov'\" [usuario]=\"doctorProcurador.usuarioUltMov\" (usuarioChange)=\"evtUsuarioUltMov($event)\"\n                                                           [ocultarConjuntosUsuario]=\"'true'\" [class.hidden]=\"!usuarioUltMovEditar\" ></app-usuario-crud-->\n                        </div>\n                    </div>\n                </div>\n                <app-componente-radio [componente]=\"'doctorProcurador'\" [atributo]=\"'status'\"\n                    [buscar]=\"doctorProcuradorBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                    [(valido)]=\"validosDoctorProcurador['status']\" [(dato)]=\"doctorProcurador.status\" class=\"w-100\">\n                </app-componente-radio>\n\n            </div>\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/doctor-procuradores/doctor-procurador/doctor-procurador.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/doctor-procuradores/doctor-procurador/doctor-procurador.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DoctorProcuradorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorProcuradorComponent", function() { return DoctorProcuradorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_doctor_procurador__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/doctor-procurador */ "./src/app/doctor-procuradores/shared/doctor-procurador.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DoctorProcuradorComponent = /** @class */ (function () {
    function DoctorProcuradorComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.doctorProcuradorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovDoctorProcuradorUsuarioEditar = false;
        this.idhospitalDoctorProcuradorHospitalEditar = false;
    }
    DoctorProcuradorComponent.prototype.actualizarDoctorProcurador = function () {
        if (this.doctorProcurador.id == null) {
            this.doctorProcuradorService.guardarDoctorProcurador(this.doctorProcurador, this.evtGuardar, this);
        }
        else {
            this.doctorProcuradorService.actualizarDoctorProcurador(this.doctorProcurador, this.evtActualiza, this);
        }
    };
    DoctorProcuradorComponent.prototype.evtGuardar = function (doctorProcurador, obj) {
        obj.doctorProcurador = doctorProcurador;
        obj.doctorProcuradorChange.emit(obj.doctorProcurador);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    };
    DoctorProcuradorComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.doctorProcuradorChange.emit(obj.doctorProcurador);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    DoctorProcuradorComponent.prototype.ngOnChanges = function (changes) {
        if (changes.opcion && changes.opcion.currentValue != null) {
            if (changes.opcion.currentValue == 1) {
                this.opcion = 1;
                this.actualizarDoctorProcurador();
            }
        }
    };
    DoctorProcuradorComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorProcuradorComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorProcuradorComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorProcuradorComponent.prototype, "doctorProcuradorBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorProcuradorComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorProcuradorComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorProcuradorComponent.prototype, "validosDoctorProcurador", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_doctor_procurador__WEBPACK_IMPORTED_MODULE_1__["DoctorProcurador"])
    ], DoctorProcuradorComponent.prototype, "doctorProcurador", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorProcuradorComponent.prototype, "doctorProcuradorService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DoctorProcuradorComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DoctorProcuradorComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorProcuradorComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DoctorProcuradorComponent.prototype, "doctorProcuradorChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorProcuradorComponent.prototype, "ocultarConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorProcuradorComponent.prototype, "lista_usuarioUltMovDoctorProcuradorUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoctorProcuradorComponent.prototype, "lista_idhospitalDoctorProcuradorHospital", void 0);
    DoctorProcuradorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-doctor-procurador',
            template: __webpack_require__(/*! ./doctor-procurador.component.html */ "./src/app/doctor-procuradores/doctor-procurador/doctor-procurador.component.html"),
            styles: [__webpack_require__(/*! ./doctor-procurador.component.css */ "./src/app/doctor-procuradores/doctor-procurador/doctor-procurador.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], DoctorProcuradorComponent);
    return DoctorProcuradorComponent;
}());



/***/ }),

/***/ "./src/app/doctor-procuradores/shared/configurar-doctor-procurador.ts":
/*!****************************************************************************!*\
  !*** ./src/app/doctor-procuradores/shared/configurar-doctor-procurador.ts ***!
  \****************************************************************************/
/*! exports provided: ConfigurarDoctorProcurador */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurarDoctorProcurador", function() { return ConfigurarDoctorProcurador; });
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");

var ConfigurarDoctorProcurador = /** @class */ (function () {
    //   rutaAgregar:string;
    function ConfigurarDoctorProcurador() {
        this.urlprovider = new _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__["URLProvider"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "doctorProcurador";
        this.rutaLista = this.crudServiceBaseUrl + "/getDoctorProcuradores";
        this.rutaAgregar = this.crudServiceBaseUrl + "/guardarDoctorProcurador";
        this.rutaActualizar = this.crudServiceBaseUrl + "/actualizarDoctorProcurador";
        this.rutaEliminar = this.crudServiceBaseUrl + "/eliminarDoctorProcurador";
        this.titulo = "Catálogo DoctorProcurador";
        this.permisosAtributos = null;
        this.permisosTabla = null;
        this.doctorProcuradorConsulta = null;
        this.campoAgEl = null;
        this.tipocampoAgEl = null;
        this.altoComponente = 500;
    }
    ConfigurarDoctorProcurador.prototype.lectura = function () {
        return {
            url: this.rutaLista,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarDoctorProcurador.prototype.lecturaP = function (evt, dat) {
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
    ConfigurarDoctorProcurador.prototype.eliminar = function () {
        return {
            url: this.rutaEliminar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarDoctorProcurador.prototype.eliminarP = function (evt, dat) {
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
    ConfigurarDoctorProcurador.prototype.agregar = function () {
        return {
            url: this.rutaAgregar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarDoctorProcurador.prototype.agregarP = function (evt, dat) {
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
    return ConfigurarDoctorProcurador;
}());



/***/ }),

/***/ "./src/app/doctor-procuradores/shared/doctor-procurador.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/doctor-procuradores/shared/doctor-procurador.service.ts ***!
  \*************************************************************************/
/*! exports provided: DoctorProcuradorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorProcuradorService", function() { return DoctorProcuradorService; });
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


var DoctorProcuradorService = /** @class */ (function () {
    function DoctorProcuradorService(globalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }
    DoctorProcuradorService.prototype.setDoctorProcurador = function (doctorProcurador) {
        this.doctorProcurador = doctorProcurador;
    };
    DoctorProcuradorService.prototype.getDoctorProcurador = function () {
        return this.doctorProcurador;
    };
    DoctorProcuradorService.prototype.guardarDoctorProcurador = function (doctorProcurador, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(doctorProcurador, 'doctorProcurador/guardarDoctorProcurador')
            .subscribe(function (data) {
            _evento(_this.doctorProcurador = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorProcurador);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorProcuradorService.prototype.actualizarDoctorProcurador = function (doctorProcurador, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(doctorProcurador, 'doctorProcurador/actualizarDoctorProcurador')
            .subscribe(function (data) {
            _evento(_this.doctorProcurador = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorProcurador);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorProcuradorService.prototype.eliminarDoctorProcurador = function (doctorProcurador, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(doctorProcurador, 'doctorProcurador/eliminarDoctorProcurador')
            .subscribe(function (data) {
            _evento(_this.doctorProcurador = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorProcurador);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorProcuradorService.prototype.getDoctorProcuradordb = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'doctorProcurador/getDoctorProcurador')
            .subscribe(function (data) {
            _evento(_this.doctorProcurador = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorProcurador);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorProcuradorService.prototype.getDoctorProcuradores = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'doctorProcurador/getDoctorProcuradores')
            .subscribe(function (data) {
            _evento(_this.listaDoctorProcurador = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDoctorProcurador);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorProcuradorService.prototype.getDoctorProcuradoresActivos = function (_evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar("", 'doctorProcurador/getDoctorProcuradoresActivos')
            .subscribe(function (data) {
            _evento(_this.listaDoctorProcurador = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDoctorProcurador);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorProcuradorService.prototype.lazyDoctorProcurador = function (doctorProcurador, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(doctorProcurador, 'doctorProcurador/lazyDoctorProcurador')
            .subscribe(function (data) {
            _evento(_this.doctorProcurador = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorProcurador);
        }, function (err) {
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
    DoctorProcuradorService.prototype.getDoctorProcuradorById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'doctorProcurador/getDoctorProcuradorById')
            .subscribe(function (data) {
            _evento(_this.doctorProcurador = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorProcurador);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorProcuradorService.prototype.getDoctorProcuradoresById = function (id, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(id, 'doctorProcurador/getDoctorProcuradoresById')
            .subscribe(function (data) {
            _evento(_this.listaDoctorProcurador = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDoctorProcurador);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorProcuradorService.prototype.getDoctorProcuradorByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'doctorProcurador/getDoctorProcuradorByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.doctorProcurador = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorProcurador);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorProcuradorService.prototype.getDoctorProcuradoresByFechaBaja = function (fechaBaja, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'doctorProcurador/getDoctorProcuradoresByFechaBaja')
            .subscribe(function (data) {
            _evento(_this.listaDoctorProcurador = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDoctorProcurador);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorProcuradorService.prototype.getDoctorProcuradorByPrimerApellido = function (primerApellido, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(primerApellido, 'doctorProcurador/getDoctorProcuradorByPrimerApellido')
            .subscribe(function (data) {
            _evento(_this.doctorProcurador = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorProcurador);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorProcuradorService.prototype.getDoctorProcuradoresByPrimerApellido = function (primerApellido, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(primerApellido, 'doctorProcurador/getDoctorProcuradoresByPrimerApellido')
            .subscribe(function (data) {
            _evento(_this.listaDoctorProcurador = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDoctorProcurador);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorProcuradorService.prototype.getDoctorProcuradorByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'doctorProcurador/getDoctorProcuradorByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.doctorProcurador = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorProcurador);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorProcuradorService.prototype.getDoctorProcuradoresByFechaRegistro = function (fechaRegistro, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'doctorProcurador/getDoctorProcuradoresByFechaRegistro')
            .subscribe(function (data) {
            _evento(_this.listaDoctorProcurador = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDoctorProcurador);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorProcuradorService.prototype.getDoctorProcuradorBySegundoApellido = function (segundoApellido, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(segundoApellido, 'doctorProcurador/getDoctorProcuradorBySegundoApellido')
            .subscribe(function (data) {
            _evento(_this.doctorProcurador = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorProcurador);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorProcuradorService.prototype.getDoctorProcuradoresBySegundoApellido = function (segundoApellido, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(segundoApellido, 'doctorProcurador/getDoctorProcuradoresBySegundoApellido')
            .subscribe(function (data) {
            _evento(_this.listaDoctorProcurador = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDoctorProcurador);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorProcuradorService.prototype.getDoctorProcuradorByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'doctorProcurador/getDoctorProcuradorByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.doctorProcurador = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorProcurador);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorProcuradorService.prototype.getDoctorProcuradoresByFechaActualizacion = function (fechaActualizacion, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'doctorProcurador/getDoctorProcuradoresByFechaActualizacion')
            .subscribe(function (data) {
            _evento(_this.listaDoctorProcurador = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDoctorProcurador);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorProcuradorService.prototype.getDoctorProcuradorByNombre = function (nombre, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(nombre, 'doctorProcurador/getDoctorProcuradorByNombre')
            .subscribe(function (data) {
            _evento(_this.doctorProcurador = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorProcurador);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorProcuradorService.prototype.getDoctorProcuradoresByNombre = function (nombre, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(nombre, 'doctorProcurador/getDoctorProcuradoresByNombre')
            .subscribe(function (data) {
            _evento(_this.listaDoctorProcurador = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDoctorProcurador);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorProcuradorService.prototype.getDoctorProcuradorByCorreoElectronico = function (correoElectronico, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(correoElectronico, 'doctorProcurador/getDoctorProcuradorByCorreoElectronico')
            .subscribe(function (data) {
            _evento(_this.doctorProcurador = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorProcurador);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorProcuradorService.prototype.getDoctorProcuradoresByCorreoElectronico = function (correoElectronico, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(correoElectronico, 'doctorProcurador/getDoctorProcuradoresByCorreoElectronico')
            .subscribe(function (data) {
            _evento(_this.listaDoctorProcurador = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDoctorProcurador);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorProcuradorService.prototype.getDoctorProcuradorByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'doctorProcurador/getDoctorProcuradorByStatus')
            .subscribe(function (data) {
            _evento(_this.doctorProcurador = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorProcurador);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorProcuradorService.prototype.getDoctorProcuradoresByStatus = function (status, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(status, 'doctorProcurador/getDoctorProcuradoresByStatus')
            .subscribe(function (data) {
            _evento(_this.listaDoctorProcurador = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDoctorProcurador);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorProcuradorService.prototype.getDoctorProcuradorByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'doctorProcurador/getDoctorProcuradorByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.doctorProcurador = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorProcurador);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorProcuradorService.prototype.getDoctorProcuradoresByUsuarioUltMov = function (usuarioUltMov, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'doctorProcurador/getDoctorProcuradoresByUsuarioUltMov')
            .subscribe(function (data) {
            _evento(_this.listaDoctorProcurador = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDoctorProcurador);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorProcuradorService.prototype.getDoctorProcuradorByIdhospital = function (idhospital, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idhospital, 'doctorProcurador/getDoctorProcuradorByIdhospital')
            .subscribe(function (data) {
            _evento(_this.doctorProcurador = _this.globalesService.util.jsonOk(data), objeto);
            (_this.doctorProcurador);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorProcuradorService.prototype.getDoctorProcuradoresByIdhospital = function (idhospital, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(idhospital, 'doctorProcurador/getDoctorProcuradoresByIdhospital')
            .subscribe(function (data) {
            _evento(_this.listaDoctorProcurador = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDoctorProcurador);
        }, function (err) {
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
    DoctorProcuradorService.prototype.custom = function (consulta, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(consulta, 'doctorProcurador/custom')
            .subscribe(function (data) {
            _evento(_this.listaDoctorProcurador = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDoctorProcurador);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorProcuradorService.prototype.getDoctorProcuradoresByDto = function (p_doctorProcurador, _evento, objeto) {
        var _this = this;
        this.error = false;
        return this.globalesService.util.enviar(p_doctorProcurador, 'doctorProcurador/getDoctorProcuradoresByDto')
            .subscribe(function (data) {
            _evento(_this.listaDoctorProcurador = _this.globalesService.util.jsonOk(data), objeto);
            (_this.listaDoctorProcurador);
        }, function (err) {
            ("no " + err);
            _this.error = true;
            _this.cad_err = err;
            setTimeout(function () {
                _this.error = false;
                _this.cad_err = "";
            }, 2000);
        });
    };
    DoctorProcuradorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"]])
    ], DoctorProcuradorService);
    return DoctorProcuradorService;
}());



/***/ }),

/***/ "./src/app/doctor-procuradores/shared/doctor-procurador.ts":
/*!*****************************************************************!*\
  !*** ./src/app/doctor-procuradores/shared/doctor-procurador.ts ***!
  \*****************************************************************/
/*! exports provided: DoctorProcurador */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorProcurador", function() { return DoctorProcurador; });
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _hospitales_shared_hospital__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../hospitales/shared/hospital */ "./src/app/hospitales/shared/hospital.ts");


/**
 *
 * @author IstmoSoft
 */
var DoctorProcurador = /** @class */ (function () {
    // atributos fin
    function DoctorProcurador(entrada) {
        if (entrada === void 0) { entrada = null; }
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
        this.correoElectronico = null;
        this.status = null;
        this.usuarioUltMov = null;
        this.idhospital = null;
        if (entrada !== null) {
            this.from(entrada);
        }
    }
    DoctorProcurador.prototype.from = function (source) {
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
        if (source.correoElectronico)
            this.correoElectronico = source.correoElectronico;
        if (source.status)
            this.status = source.status;
        if (source.usuarioUltMov)
            this.usuarioUltMov = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_0__["Usuario"](source.usuarioUltMov);
        if (source.idhospital)
            this.idhospital = new _hospitales_shared_hospital__WEBPACK_IMPORTED_MODULE_1__["Hospital"](source.idhospital);
    };
    DoctorProcurador.prototype.isOk = function () {
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
        if (this.correoElectronico)
            return true;
        if (this.status)
            return true;
        if (this.usuarioUltMov)
            return true;
        if (this.idhospital)
            return true;
        return false;
    };
    DoctorProcurador.prototype.toDto = function () {
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
        if (this.correoElectronico != null && typeof this.correoElectronico === 'string' && this.correoElectronico.replace(/^\s+|\s+$/g, '') == "")
            this.correoElectronico = null;
        if (this.status != null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '') == "")
            this.status = null;
        if (this.usuarioUltMov != null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '') == "")
            this.usuarioUltMov = null;
        if (this.idhospital != null && typeof this.idhospital === 'string' && this.idhospital.replace(/^\s+|\s+$/g, '') == "")
            this.idhospital = null;
        return this;
    };
    return DoctorProcurador;
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
//# sourceMappingURL=app-doctor-procuradores-doctor-procurador-module.js.map