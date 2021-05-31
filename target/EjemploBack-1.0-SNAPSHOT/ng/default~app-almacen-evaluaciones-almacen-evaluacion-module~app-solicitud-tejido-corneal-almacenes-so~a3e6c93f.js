(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-almacen-evaluaciones-almacen-evaluacion-module~app-solicitud-tejido-corneal-almacenes-so~a3e6c93f"],{

/***/ "./src/app/solicitud-tejido-corneal-recepciones/shared/solicitud-tejido-corneal-recepcion.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-recepciones/shared/solicitud-tejido-corneal-recepcion.ts ***!
  \***************************************************************************************************/
/*! exports provided: SolicitudTejidoCornealRecepcion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudTejidoCornealRecepcion", function() { return SolicitudTejidoCornealRecepcion; });
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _solicitud_tejido_corneales_shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../solicitud-tejido-corneales/shared/solicitud-tejido-corneal */ "./src/app/solicitud-tejido-corneales/shared/solicitud-tejido-corneal.ts");


/**
 *
 * @author IstmoSoft
 */
var SolicitudTejidoCornealRecepcion = /** @class */ (function () {
    // atributos fin
    function SolicitudTejidoCornealRecepcion(source) {
        if (source === void 0) { source = null; }
        // ids inicio
        this.id = null;
        // ids fin
        // atributos inicio
        this.estatusProceso = null;
        this.status = null;
        this.usuarioUltMov = null;
        this.idsolicitudTejidoCorneal = null;
        if (source !== null)
            this.from(source);
    }
    SolicitudTejidoCornealRecepcion.prototype.from = function (source) {
        if (source.id)
            this.id = source.id;
        if (source.estatusProceso)
            this.estatusProceso = source.estatusProceso;
        if (source.status)
            this.status = source.status;
        if (source.usuarioUltMov)
            this.usuarioUltMov = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_0__["Usuario"](source.usuarioUltMov);
        if (source.idsolicitudTejidoCorneal)
            this.idsolicitudTejidoCorneal = new _solicitud_tejido_corneales_shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCorneal"](source.idsolicitudTejidoCorneal);
    };
    SolicitudTejidoCornealRecepcion.prototype.isOk = function () {
        if (this.id)
            return true;
        if (this.estatusProceso)
            return true;
        if (this.status)
            return true;
        if (this.usuarioUltMov)
            return true;
        if (this.idsolicitudTejidoCorneal)
            return true;
        return false;
    };
    SolicitudTejidoCornealRecepcion.prototype.toDto = function () {
        if (this.id != null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '') == "")
            this.id = null;
        if (this.estatusProceso != null && typeof this.estatusProceso === 'string' && this.estatusProceso.replace(/^\s+|\s+$/g, '') == "")
            this.estatusProceso = null;
        if (this.status != null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '') == "")
            this.status = null;
        if (this.usuarioUltMov != null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '') == "")
            this.usuarioUltMov = null;
        if (this.idsolicitudTejidoCorneal != null && typeof this.idsolicitudTejidoCorneal === 'string' && this.idsolicitudTejidoCorneal.replace(/^\s+|\s+$/g, '') == "")
            this.idsolicitudTejidoCorneal = null;
        return this;
    };
    return SolicitudTejidoCornealRecepcion;
}());



/***/ }),

/***/ "./src/app/solicitud-tejido-corneales/detalle-tejido-corneal/detalle-tejido-corneal.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneales/detalle-tejido-corneal/detalle-tejido-corneal.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/solicitud-tejido-corneales/detalle-tejido-corneal/detalle-tejido-corneal.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneales/detalle-tejido-corneal/detalle-tejido-corneal.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <h3>Detalle de Solicitud de Tejido Corneal</h3>\n    </div>\n    <div class=\"panel-body\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <h4>ID Solicitud:</h4>\n                </div>\n                <div class=\"col-md-6\">\n                    <h4>{{ datos?.idSolicitud }}</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <h4>Estado:</h4>\n                </div>\n                <div class=\"col-md-6\">\n                    <h4>{{ datos?.estado }}</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <h4>Hospital Solicitante:</h4>\n                </div>\n                <div class=\"col-md-6\">\n                    <h4>{{ datos?.hospitalSolicitante }}</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <h4>Nombre del Oftalmólogo:</h4>\n                </div>\n                <div class=\"col-md-6\">\n                    <h4>{{ datos?.nombreOftanmologo }}</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <h4>Teléfono:</h4>\n                </div>\n                <div class=\"col-md-6\">\n                    <h4>{{ datos?.telefono }}</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <h4>Correo Electrónico:</h4>\n                </div>\n                <div class=\"col-md-6\">\n                    <h4>{{ datos?.correoElectronico }}</h4>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <h4>Nombre:</h4>\n                </div>\n                <div class=\"col-md-6\">\n                    <h4>{{ datos?.nombre }}</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <h4>Primer Apellido:</h4>\n                </div>\n                <div class=\"col-md-6\">\n                    <h4>{{ datos?.apellido1 }}</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <h4>Segundo Apellido:</h4>\n                </div>\n                <div class=\"col-md-6\">\n                    <h4>{{ datos?.apellido2 }}</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <h4>Edad:</h4>\n                </div>\n                <div class=\"col-md-6\">\n                    <h4>{{ datos?.edad }}</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <h4>Sexo:</h4>\n                </div>\n                <div class=\"col-md-6\">\n                    <h4>\n                        <div *ngIf=\"datos.sexo == 1\"> MASCULINO </div>\n                    </h4>\n                    <h4>\n                        <div *ngIf=\"datos.sexo == 2\"> FEMENINO </div>\n                    </h4>\n                </div>\n                <!-- <div class=\"col-md-6\">\n          <h4>{{ datos?.sexo }}</h4>\n        </div> -->\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <h4>Número de Expediente:</h4>\n                </div>\n                <div class=\"col-md-6\">\n                    <h4>{{ datos?.noExpediente }}</h4>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <h4>Diagnóstico:</h4>\n                </div>\n                <div class=\"col-md-6\">\n                    <h4>{{ datos?.diagnostico }}</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <h4>Cirugías Previstas:</h4>\n                </div>\n                <div class=\"col-md-6\">\n                    <h4>{{ datos?.cirujiasPrevistas }}</h4>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <h4>Córnea Solicitada:</h4>\n                </div>\n                <div class=\"col-md-6\">\n                    <h4>\n                        <div *ngIf=\"datos.corneaSolicitada == 1\" class=\"col-md-3\"> <input type=\"radio\" disabled checked /> CI </div>\n                    </h4>\n                    <h4>\n                        <div *ngIf=\"datos.corneaSolicitada == 2\" class=\"col-md-3\"> <input type=\"radio\" disabled /> CI </div>\n                    </h4>\n                    <h4>\n                        <div *ngIf=\"datos.corneaSolicitada == 1\" class=\"col-md-3\"><input type=\"radio\" disabled /> CD </div>\n                    </h4>\n                    <h4>\n                        <div *ngIf=\"datos.corneaSolicitada == 2\" class=\"col-md-3\"><input type=\"radio\" disabled checked /> CD </div>\n                    </h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <h4>Fecha Tentativa de Cirugía:</h4>\n                </div>\n                <div class=\"col-md-6\">\n                    <h4>{{ datos?.fechaCirugia }}</h4>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/solicitud-tejido-corneales/detalle-tejido-corneal/detalle-tejido-corneal.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneales/detalle-tejido-corneal/detalle-tejido-corneal.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: DetalleTejidoCornealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleTejidoCornealComponent", function() { return DetalleTejidoCornealComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_solicitud_tejido_corneal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/solicitud-tejido-corneal.service */ "./src/app/solicitud-tejido-corneales/shared/solicitud-tejido-corneal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetalleTejidoCornealComponent = /** @class */ (function () {
    function DetalleTejidoCornealComponent(solicitudTejidoCornealService) {
        this.solicitudTejidoCornealService = solicitudTejidoCornealService;
        this.id = 66;
        this.datos = {
            idSolicitud: "CDMX/10/2018/0001",
            estado: "CDMX",
            hospitalSolicitante: "CENTRO MÉDICO 20 DE NOVIEMBRE",
            nombreOftanmologo: "Antonio Limón Martinez",
            telefono: "5530252418",
            correoElectronico: "antonio.limon@gmail.com.mx",
            nombre: "Luz Maria",
            apellido1: "Peña",
            apellido2: "Ibarra",
            edad: "35",
            sexo: "Femenino",
            noExpediente: "CDMX/10/0312",
            diagnostico: "Cataratas",
            cirujiasPrevistas: "QP, DSAEK",
            corneaSolicitada: 2,
            fechaCirugia: "17/07/2018"
        };
    }
    DetalleTejidoCornealComponent.prototype.ngOnChanges = function (changes) {
        if (changes.id && changes.id.currentValue) {
            this.solicitudTejidoCornealService.getDetalleSolicitudTejidoCorneales(changes.id.currentValue, this.evtBuscar, this);
        }
    };
    DetalleTejidoCornealComponent.prototype.evtBuscar = function (datos, obj) {
        obj.datos = datos;
    };
    DetalleTejidoCornealComponent.prototype.ngOnInit = function () {
        if (this.id) {
            this.solicitudTejidoCornealService.getDetalleSolicitudTejidoCorneales(this.id, this.evtBuscar, this);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DetalleTejidoCornealComponent.prototype, "id", void 0);
    DetalleTejidoCornealComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detalle-tejido-corneal',
            template: __webpack_require__(/*! ./detalle-tejido-corneal.component.html */ "./src/app/solicitud-tejido-corneales/detalle-tejido-corneal/detalle-tejido-corneal.component.html"),
            styles: [__webpack_require__(/*! ./detalle-tejido-corneal.component.css */ "./src/app/solicitud-tejido-corneales/detalle-tejido-corneal/detalle-tejido-corneal.component.css")],
            providers: [_shared_solicitud_tejido_corneal_service__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCornealService"]]
        }),
        __metadata("design:paramtypes", [_shared_solicitud_tejido_corneal_service__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCornealService"]])
    ], DetalleTejidoCornealComponent);
    return DetalleTejidoCornealComponent;
}());



/***/ }),

/***/ "./src/app/solicitud-tejido-corneales/shared/configurar-solicitud-tejido-corneal.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneales/shared/configurar-solicitud-tejido-corneal.ts ***!
  \******************************************************************************************/
/*! exports provided: ConfigurarSolicitudTejidoCorneal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurarSolicitudTejidoCorneal", function() { return ConfigurarSolicitudTejidoCorneal; });
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");

var ConfigurarSolicitudTejidoCorneal = /** @class */ (function () {
    //   rutaAgregar:string;
    function ConfigurarSolicitudTejidoCorneal() {
        this.urlprovider = new _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__["URLProvider"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "solicitudTejidoCorneal";
        this.rutaLista = this.crudServiceBaseUrl + "/getSolicitudTejidoCorneales";
        this.rutaAgregar = this.crudServiceBaseUrl + "/guardarSolicitudTejidoCorneal";
        this.rutaActualizar = this.crudServiceBaseUrl + "/actualizarSolicitudTejidoCorneal";
        this.rutaEliminar = this.crudServiceBaseUrl + "/eliminarSolicitudTejidoCorneal";
        this.titulo = "Catálogo SolicitudTejidoCorneal";
        this.permisosAtributos = null;
        this.permisosTabla = null;
        this.solicitudTejidoCornealConsulta = null;
        this.campoAgEl = null;
        this.tipocampoAgEl = null;
        this.altoComponente = 500;
    }
    ConfigurarSolicitudTejidoCorneal.prototype.lectura = function () {
        return {
            url: this.rutaLista,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarSolicitudTejidoCorneal.prototype.lecturaP = function (evt, dat) {
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
    ConfigurarSolicitudTejidoCorneal.prototype.eliminar = function () {
        return {
            url: this.rutaEliminar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarSolicitudTejidoCorneal.prototype.eliminarP = function (evt, dat) {
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
    ConfigurarSolicitudTejidoCorneal.prototype.agregar = function () {
        return {
            url: this.rutaAgregar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarSolicitudTejidoCorneal.prototype.agregarP = function (evt, dat) {
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
    return ConfigurarSolicitudTejidoCorneal;
}());



/***/ }),

/***/ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-conjunto/solicitud-tejido-corneal-conjunto.component.css":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-conjunto/solicitud-tejido-corneal-conjunto.component.css ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}\n"

/***/ }),

/***/ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-conjunto/solicitud-tejido-corneal-conjunto.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-conjunto/solicitud-tejido-corneal-conjunto.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\"  >\n    <li *ngFor =  \"let solicitudTejidoCorneal of listaSolicitudTejidoCorneal \" [ngClass]=\"{ 'active':idSeleccionado=== 'I-'+solicitudTejidoCorneal.id}\"\n        (click)=\"elegir(solicitudTejidoCorneal,'I' )\" >\n        <a data-toggle=\"tab\" href=\"#tab-I-{{solicitudTejidoCorneal.id}}\">{{solicitudTejidoCorneal.id}}</a>\n    </li>\n    <li *ngFor =  \"let solicitudTejidoCorneal of listaSolicitudTejidoCornealN \" [ngClass]=\"{ 'active':idSeleccionado=== 'N-'+solicitudTejidoCorneal.id}\"\n        (click)=\"elegir(solicitudTejidoCorneal, 'N')\" >\n        <a data-toggle=\"tab\" href=\"#tab-N-{{solicitudTejidoCorneal.id}}\">T-{{solicitudTejidoCorneal.id}}</a>\n    </li>\n</ul>\n<div class=\"panel panel-default\"  >\n     <div  class=\"tab-content\">\n        <div *ngFor = \"let solicitudTejidoCorneal of listaSolicitudTejidoCorneal ; let i = index \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='I-'+solicitudTejidoCorneal.id}\" id=\"tab-I-{{solicitudTejidoCorneal.id}}\">\n\t\t\t<app-solicitud-tejido-corneal [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [solicitudTejidoCornealBuscar]=\"solicitudTejidoCornealBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosSolicitudTejidoCorneal]=\"validosSolicitudTejidoCorneal\"  \n\t\t\t\t\t\t  [solicitudTejidoCornealService]=\"solicitudTejidoCornealService\" [(opcion)]=\"opcionSolicitudTejidoCorneal\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(solicitudTejidoCorneal)]=\"listaSolicitudTejidoCorneal[i]\"  [ocultarConjuntos]=\"ocultarConjuntosSolicitudTejidoCorneal\"\n                           [lista_usuarioUltMovSolicitudTejidoCornealUsuario]=\"lista_usuarioUltMovSolicitudTejidoCornealUsuario\" \n                           [lista_iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante]=\"lista_iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante\" \n                           [lista_idhospitalSolicitudTejidoCornealHospital]=\"lista_idhospitalSolicitudTejidoCornealHospital\" \n\n\t\t\t\t\t  >\n\t\t\t</app-solicitud-tejido-corneal>\n        </div>\n        <div *ngFor = \"let solicitudTejidoCorneal of listaSolicitudTejidoCornealN;  let i = index  \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='N-'+solicitudTejidoCorneal.id}\" id=\"tab-N-{{solicitudTejidoCorneal.id}}\">\n\t\t\t<app-solicitud-tejido-corneal [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [solicitudTejidoCornealBuscar]=\"solicitudTejidoCornealBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosSolicitudTejidoCorneal]=\"validosSolicitudTejidoCorneal\"  \n\t\t\t\t\t\t  [solicitudTejidoCornealService]=\"solicitudTejidoCornealService\" [(opcion)]=\"opcionSolicitudTejidoCorneal\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(solicitudTejidoCorneal)]=\"listaSolicitudTejidoCornealN[i]\"  [ocultarConjuntos]=\"ocultarConjuntosSolicitudTejidoCorneal\"\n                           [lista_usuarioUltMovSolicitudTejidoCornealUsuario]=\"lista_usuarioUltMovSolicitudTejidoCornealUsuario\" \n                           [lista_iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante]=\"lista_iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante\" \n                           [lista_idhospitalSolicitudTejidoCornealHospital]=\"lista_idhospitalSolicitudTejidoCornealHospital\" \n\n\t\t\t\t\t  >\n\t\t\t</app-solicitud-tejido-corneal>  \n        </div>\n\n    </div>\n    <div class=\"panel-footer\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"agregarNuevo()\">\n            <span class=\"fa fa-plus-circle\" aria-hidden=\"true\" style=\"font-size:36px\"></span> AGREGAR\n        </button>\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"actualizaTodo()\">\n            <span class=\"fa fa-reply-all\" aria-hidden=\"true\" style=\"font-size:36px\"></span> ACTUALIZAR TODO\n        </button>\n    </div>\n</div>\t\t\t\n"

/***/ }),

/***/ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-conjunto/solicitud-tejido-corneal-conjunto.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-conjunto/solicitud-tejido-corneal-conjunto.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: SolicitudTejidoCornealConjuntoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudTejidoCornealConjuntoComponent", function() { return SolicitudTejidoCornealConjuntoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/solicitud-tejido-corneal */ "./src/app/solicitud-tejido-corneales/shared/solicitud-tejido-corneal.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SolicitudTejidoCornealConjuntoComponent = /** @class */ (function () {
    function SolicitudTejidoCornealConjuntoComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovSolicitudTejidoCornealUsuarioEditar = false;
        this.iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitanteEditar = false;
        this.idhospitalSolicitudTejidoCornealHospitalEditar = false;
        this.listaSolicitudTejidoCornealN = [];
        this.listaSolicitudTejidoCorneal = [];
        this.listaSolicitudTejidoCornealChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.solicitudTejidoCornealN = new _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCorneal"]();
        this.solicitudTejidoCornealNChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.agregados = 0;
        this.actualizados = 0;
        this.idSeleccionado = "N-0";
    }
    SolicitudTejidoCornealConjuntoComponent.prototype.elegir = function (solicitudTejidoCorneal, tipo) {
        this.idSeleccionado = tipo + "-" + solicitudTejidoCorneal.id;
        this.solicitudTejidoCornealN = solicitudTejidoCorneal;
    };
    SolicitudTejidoCornealConjuntoComponent.prototype.ngOnInit = function () {
        this.solicitudTejidoCornealN.id = 0;
        this.listaSolicitudTejidoCornealN.push(Object.assign({}, this.solicitudTejidoCornealN));
        this.usuariologueado = this.globalesService.dameUsuario();
    };
    SolicitudTejidoCornealConjuntoComponent.prototype.agregarNuevo = function () {
        var pg = new _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCorneal"]();
        pg.id = this.listaSolicitudTejidoCornealN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaSolicitudTejidoCornealN.push(pg);
    };
    SolicitudTejidoCornealConjuntoComponent.prototype.actualizaTodo = function () {
        this.agregados = 0;
        this.actualizados = 0;
        for (var _i = 0, _a = this.listaSolicitudTejidoCorneal; _i < _a.length; _i++) {
            var solicitudTejidoCorneal = _a[_i];
            this.solicitudTejidoCornealService.actualizarSolicitudTejidoCorneal(solicitudTejidoCorneal, this.evtActualiza, this);
        }
        for (var _b = 0, _c = this.listaSolicitudTejidoCornealN; _b < _c.length; _b++) {
            var solicitudTejidoCorneal = _c[_b];
            solicitudTejidoCorneal.id = null;
            this.solicitudTejidoCornealService.guardarSolicitudTejidoCorneal(solicitudTejidoCorneal, this.evtGuardar, this);
        }
    };
    SolicitudTejidoCornealConjuntoComponent.prototype.evtGuardar = function (solicitudTejidoCorneal, obj) {
        obj.agregados++;
        obj.listaSolicitudTejidoCorneal.push(solicitudTejidoCorneal);
        if (obj.agregados >= obj.listaSolicitudTejidoCornealN.length) {
            obj.solicitudTejidoCornealN = new _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCorneal"]();
            obj.listaSolicitudTejidoCornealN = [];
            obj.solicitudTejidoCornealN.id = 0;
            obj.idSeleccionado = "N-" + obj.solicitudTejidoCornealN.id;
            obj.listaSolicitudTejidoCornealN.push(Object.assign({}, obj.solicitudTejidoCornealN));
            obj.listaSolicitudTejidoCornealChange.emit(obj.listaSolicitudTejidoCorneal);
        }
        if (obj.agregados >= obj.listaSolicitudTejidoCornealN.length &&
            obj.actualizados >= obj.listaSolicitudTejidoCorneal.length) {
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    SolicitudTejidoCornealConjuntoComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.actualizados++;
            if (obj.agregados >= obj.listaSolicitudTejidoCornealN.length &&
                obj.actualizados >= obj.listaSolicitudTejidoCorneal.length) {
                obj.opcion = 0;
                obj.opcion.emit(obj.opcion);
            }
        }
    };
    SolicitudTejidoCornealConjuntoComponent.prototype.ngOnChanges = function (changes) {
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
    ], SolicitudTejidoCornealConjuntoComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealConjuntoComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealConjuntoComponent.prototype, "solicitudTejidoCornealBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealConjuntoComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealConjuntoComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealConjuntoComponent.prototype, "validosSolicitudTejidoCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealConjuntoComponent.prototype, "ocultarConjuntosSolicitudTejidoCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealConjuntoComponent.prototype, "solicitudTejidoCornealService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SolicitudTejidoCornealConjuntoComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealConjuntoComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealConjuntoComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealConjuntoComponent.prototype, "lista_usuarioUltMovSolicitudTejidoCornealUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealConjuntoComponent.prototype, "lista_iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealConjuntoComponent.prototype, "lista_idhospitalSolicitudTejidoCornealHospital", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SolicitudTejidoCornealConjuntoComponent.prototype, "listaSolicitudTejidoCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealConjuntoComponent.prototype, "listaSolicitudTejidoCornealChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCorneal"])
    ], SolicitudTejidoCornealConjuntoComponent.prototype, "solicitudTejidoCornealN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealConjuntoComponent.prototype, "solicitudTejidoCornealNChange", void 0);
    SolicitudTejidoCornealConjuntoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solicitud-tejido-corneal-conjunto',
            template: __webpack_require__(/*! ./solicitud-tejido-corneal-conjunto.component.html */ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-conjunto/solicitud-tejido-corneal-conjunto.component.html"),
            styles: [__webpack_require__(/*! ./solicitud-tejido-corneal-conjunto.component.css */ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-conjunto/solicitud-tejido-corneal-conjunto.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], SolicitudTejidoCornealConjuntoComponent);
    return SolicitudTejidoCornealConjuntoComponent;
}());



/***/ }),

/***/ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-crud/solicitud-tejido-corneal-crud.component.css":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-crud/solicitud-tejido-corneal-crud.component.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}\n"

/***/ }),

/***/ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-crud/solicitud-tejido-corneal-crud.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-crud/solicitud-tejido-corneal-crud.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div *ngIf=\"idEntrada==null\" class=\"panel-footer\" style=\"text-align: right\">\n    <div style=\"display: inline-block;width: 90%; margin-right: 10%;\">\n      <button type=\"button\" class=\"btn btn-guardar\" (click)=\"nuevo()\">\n        <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n      </button>\n    </div>\n  </div>\n  <app-solicitud-tejido-corneal [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\"\n    [solicitudTejidoCornealBuscar]=\"solicitudTejidoCornealBuscar\" [permisosAtributos]=\"permisosAtributos\"\n    [permisosConjuntos]=\"permisosConjuntos\" [validosSolicitudTejidoCorneal]=\"validosSolicitudTejidoCorneal\"\n    [solicitudTejidoCornealService]=\"solicitudTejidoCorneal_service\" [(opcion)]=\"opcionSolicitudTejidoCorneal\"\n    [globalesService]=\"globalesService\" [(solicitudTejidoCorneal)]=\"solicitudTejidoCorneal\"\n    [ocultarConjuntos]=\"ocultarConjuntosSolicitudTejidoCorneal\" [lista_usuarioUltMovSolicitudTejidoCornealUsuario]=\"\n      lista_usuarioUltMovSolicitudTejidoCornealUsuario\n    \" [lista_iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante]=\"\n      lista_iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante\n    \" [lista_idhospitalSolicitudTejidoCornealHospital]=\"\n      lista_idhospitalSolicitudTejidoCornealHospital\n    \" [desActivar]=\"descActivar\" [desActivarHosp]=\"descActivarHosp\" [(tipoCirugiaPrevista)]=\"tipoCirugiaPrevista\"\n    [validosTipoCirugiaPrevista]=\"validosTipoCirugiaPrevista\" [otracheck]=\"otracheck\" [isDisabled]=\"isDisabled\">\n  </app-solicitud-tejido-corneal>\n\n  <!--div class=\"panel-footer\" style=\"text-align: center\">\n\t\t  <div style=\"display: inline-block;width: 90%;\">\n            <button type=\"button\" class=\"btn btn-primary btn-buscar\" [class.hidden]=\"!solicitudTejidoCornealBuscar\" (click)=\"buscarSolicitudTejidoCornealFront(formaGeneral)\"><span class=\"fa fa-search\"></span> Buscar</button-->\n  <!--button type=\"button\" class=\"btn btn-success btn-agregar\" [class.hidden]=\"!solicitudTejidoCornealAgregar\" (click)=\"nuevoSolicitudTejidoCornealFront(formaGeneral)\" ><span class=\"fa fa-newspaper\"></span>Nuevo </button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"!solicitudTejidoCornealActualizar\" (click)=\"actualizarSolicitudTejidoCornealFront(formaGeneral)\"><span class=\"fa fa-arrow-up\"></span> Actualizar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-eliminar\"  [class.hidden]=\"!solicitudTejidoCornealEliminar\" (click)=\"eliminarSolicitudTejidoCornealFront(formaGeneral)\"> <span class=\"fa fa-trash\"></span>Eliminar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-guardar\"  (click)=\"guardarSolicitudTejidoCornealFront(formaGeneral)\"><span class=\"fa fa-floppy-disk\"></span>Guardar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-cancelar\"  [class.hidden]=\"!solicitudTejidoCornealCancelar\" (click)=\"cancelarSolicitudTejidoCornealFront(formaGeneral)\"><span class=\"fa fa-remove\"></span>Cancelar</button>\n            <button type=\"button\" class=\"btn btn-primary btn-limpiar\"  (click)=\"limpiarCampos()\">Limpiar Campos</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteSolicitudTejidoCornealWord\" (click)=\"reporteSolicitudTejidoCornealWord(formaGeneral)\"> <span class=\"fa fa-download-alt\"></span>Word</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteSolicitudTejidoCornealExcel\" (click)=\"reporteSolicitudTejidoCornealExcel(formaGeneral)\"> <span class=\"fa fa-download-alt\"></span> Excel</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteSolicitudTejidoCornealPdf\" (click)=\"reporteSolicitudTejidoCornealPdf(formaGeneral)\"><span class=\"fa fa-download-alt\"></span> PDF</button>\n          </div>\n\n        </div-->\n  <div *ngIf=\"idEntrada==null\" class=\"panel-footer\" style=\"text-align: right\">\n    <div style=\"display: inline-block;width: 90%; margin-right: 10%;\">\n      <button style=\"margin-right: 10px;\" type=\"button\" class=\"btn  btn-primary btn-guardar\"\n        (click)=\"guardarSolicitudTejidoCornealFront()\">\n        <span class=\"glyphicon glyphicon-floppy-disk\" aria-hidden=\"true\"></span>\n      </button>\n      <button class=\"btn btn-primary btn-guardar\" style=\"margin-right: 10px;\" type=\"button\" [disabled]=\"\n          solicitudTejidoCorneal.estatusProceso == null ||\n          (solicitudTejidoCorneal.estatusProceso != null &&\n            solicitudTejidoCorneal.estatusProceso == 1)\n        \" (click)=\"imprimirSolicitudTejido(formaGeneral)\">\n        <span class=\"fa fa-floppy-disk\"></span>Imprimir\n      </button>\n      <button type=\"button\" class=\"btn btn-success btn-guardar\" [disabled]=\"\n          solicitudTejidoCorneal.estatusProceso == null ||\n          (solicitudTejidoCorneal.estatusProceso != null &&\n            solicitudTejidoCorneal.estatusProceso == 2)\n        \" (click)=\"enviarSolicitudTejidoCornealFront(formaGeneral)\">\n        <span class=\"fa fa-floppy-disk\"></span>Enviar\n      </button>\n      <!-- <button type=\"button\" class=\"btn btn-primary btn-buscar\" [class.hidden]=\"!solicitudEvaluacionCornealBuscar\" (click)=\"buscarSolicitudEvaluacionCornealFront(formaGeneral)\"><span class=\"fa fa-search\"></span> Buscar</button>\n              <button type=\"button\" class=\"btn btn-success btn-agregar\" [class.hidden]=\"!solicitudEvaluacionCornealAgregar\" (click)=\"nuevoSolicitudEvaluacionCornealFront(formaGeneral)\" ><span class=\"fa fa-newspaper\"></span>Nuevo </button>\n              <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"!solicitudEvaluacionCornealActualizar\" (click)=\"actualizarSolicitudEvaluacionCornealFront(formaGeneral)\"><span class=\"fa fa-arrow-up\"></span> Actualizar</button>\n              <button type=\"button\" class=\"btn btn-danger btn-eliminar\"  [class.hidden]=\"!solicitudEvaluacionCornealEliminar\" (click)=\"eliminarSolicitudEvaluacionCornealFront(formaGeneral)\"> <span class=\"fa fa-trash\"></span>Eliminar</button>\n              <button type=\"button\" class=\"btn btn-danger btn-guardar\"  [disabled]=\"!validaTodosc\" [class.hidden]=\"!solicitudEvaluacionCornealGuardar\" (click)=\"guardarSolicitudEvaluacionCornealFront(formaGeneral)\"><span class=\"fa fa-floppy-disk\"></span>Guardar</button>\n              <button type=\"button\" class=\"btn btn-danger btn-cancelar\"  [class.hidden]=\"!solicitudEvaluacionCornealCancelar\" (click)=\"cancelarSolicitudEvaluacionCornealFront(formaGeneral)\"><span class=\"fa fa-remove\"></span>Cancelar</button>\n              <button type=\"button\" class=\"btn btn-primary btn-limpiar\"  (click)=\"limpiarCampos()\">Limpiar Campos</button>\n              <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteSolicitudEvaluacionCornealWord\" (click)=\"reporteSolicitudEvaluacionCornealWord(formaGeneral)\"> <span class=\"fa fa-download-alt\"></span>Word</button>\n              <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteSolicitudEvaluacionCornealExcel\" (click)=\"reporteSolicitudEvaluacionCornealExcel(formaGeneral)\"> <span class=\"fa fa-download-alt\"></span> Excel</button>\n              <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteSolicitudEvaluacionCornealPdf\" (click)=\"reporteSolicitudEvaluacionCornealPdf(formaGeneral)\"><span class=\"fa fa-download-alt\"></span> PDF</button>\n            -->\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"buscarSolicitudTejidoCorneal_{{ nombre }}\" role=\"dialog\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <app-solicitud-tejido-corneal-list-kendo [nombregrid]=\"'buscar_' + nombre\"\n          [configuracionSolicitudTejidoCorneal]=\"configuracionSolicitudTejidoCorneal\"\n          (solicitudTejidoCornealSeleccionado)=\"evtSolicitudTejidoCornealSeleccionado($event)\">\n        </app-solicitud-tejido-corneal-list-kendo>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-crud/solicitud-tejido-corneal-crud.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-crud/solicitud-tejido-corneal-crud.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: SolicitudTejidoCornealCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudTejidoCornealCrudComponent", function() { return SolicitudTejidoCornealCrudComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/core.service */ "./src/app/shared/core.service.ts");
/* harmony import */ var _shared_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/file.service */ "./src/app/shared/file.service.ts");
/* harmony import */ var _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/solicitud-tejido-corneal */ "./src/app/solicitud-tejido-corneales/shared/solicitud-tejido-corneal.ts");
/* harmony import */ var _shared_solicitud_tejido_corneal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/solicitud-tejido-corneal.service */ "./src/app/solicitud-tejido-corneales/shared/solicitud-tejido-corneal.service.ts");
/* harmony import */ var _shared_configurar_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/configurar-solicitud-tejido-corneal */ "./src/app/solicitud-tejido-corneales/shared/configurar-solicitud-tejido-corneal.ts");
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../usuarios/shared/usuario.service */ "./src/app/usuarios/shared/usuario.service.ts");
/* harmony import */ var _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../usuario-btcs/shared/usuario-btc.service */ "./src/app/usuario-btcs/shared/usuario-btc.service.ts");
/* harmony import */ var _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../perfil-red-issstes/shared/perfil-red-issste.service */ "./src/app/perfil-red-issstes/shared/perfil-red-issste.service.ts");
/* harmony import */ var _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hospitales/shared/hospital.service */ "./src/app/hospitales/shared/hospital.service.ts");
/* harmony import */ var _hospitales_shared_hospital__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hospitales/shared/hospital */ "./src/app/hospitales/shared/hospital.ts");
/* harmony import */ var _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../entidad-federativas/shared/entidad-federativa.service */ "./src/app/entidad-federativas/shared/entidad-federativa.service.ts");
/* harmony import */ var _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../perfiles/shared/perfil.service */ "./src/app/perfiles/shared/perfil.service.ts");
/* harmony import */ var _doctor_solicitantes_shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../doctor-solicitantes/shared/doctor-solicitante */ "./src/app/doctor-solicitantes/shared/doctor-solicitante.ts");
/* harmony import */ var _doctor_solicitantes_shared_doctor_solicitante_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../doctor-solicitantes/shared/doctor-solicitante.service */ "./src/app/doctor-solicitantes/shared/doctor-solicitante.service.ts");
/* harmony import */ var _catalogo_cargos_shared_catalogo_cargo_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../catalogo-cargos/shared/catalogo-cargo.service */ "./src/app/catalogo-cargos/shared/catalogo-cargo.service.ts");
/* harmony import */ var _tipo_cirugia_previstas_shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../tipo-cirugia-previstas/shared/tipo-cirugia-prevista */ "./src/app/tipo-cirugia-previstas/shared/tipo-cirugia-prevista.ts");
/* harmony import */ var _tipo_cirugia_previstas_shared_tipo_cirugia_prevista_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../tipo-cirugia-previstas/shared/tipo-cirugia-prevista.service */ "./src/app/tipo-cirugia-previstas/shared/tipo-cirugia-prevista.service.ts");
/* harmony import */ var _solicitud_tejido_corneal_recepciones_shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../solicitud-tejido-corneal-recepciones/shared/solicitud-tejido-corneal-recepcion */ "./src/app/solicitud-tejido-corneal-recepciones/shared/solicitud-tejido-corneal-recepcion.ts");
/* harmony import */ var _solicitud_tejido_corneal_recepciones_shared_solicitud_tejido_corneal_recepcion_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../solicitud-tejido-corneal-recepciones/shared/solicitud-tejido-corneal-recepcion.service */ "./src/app/solicitud-tejido-corneal-recepciones/shared/solicitud-tejido-corneal-recepcion.service.ts");
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



















var SolicitudTejidoCornealCrudComponent = /** @class */ (function () {
    function SolicitudTejidoCornealCrudComponent(globalesService, route, zone, fileservice, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    solicitudTejidoCorneal_service, usuario_service, usuarioBtc_service, perfilRedIssste_service, hospital_service, entidadFederativa_service, perfil_service, doctorSolicitante_service, catalogoCargo_service, tipoCirugiaPrevista_services, solicitudTejidoCornealRecepcion_service, router) {
        this.globalesService = globalesService;
        this.route = route;
        this.zone = zone;
        this.fileservice = fileservice;
        this.coreService = coreService;
        this.solicitudTejidoCorneal_service = solicitudTejidoCorneal_service;
        this.usuario_service = usuario_service;
        this.usuarioBtc_service = usuarioBtc_service;
        this.perfilRedIssste_service = perfilRedIssste_service;
        this.hospital_service = hospital_service;
        this.entidadFederativa_service = entidadFederativa_service;
        this.perfil_service = perfil_service;
        this.doctorSolicitante_service = doctorSolicitante_service;
        this.catalogoCargo_service = catalogoCargo_service;
        this.tipoCirugiaPrevista_services = tipoCirugiaPrevista_services;
        this.solicitudTejidoCornealRecepcion_service = solicitudTejidoCornealRecepcion_service;
        this.router = router;
        this.opcionSolicitudTejidoCorneal = 0;
        this.mensajerror = '';
        this.validosSolicitudTejidoCorneal = {
            id: false,
            fechaBaja: false,
            fechaRegistro: false,
            estatusProceso: false,
            segundoApellidoReceptor: false,
            fechaTentativaCirugia: false,
            nombreReceptor: false,
            numeroExpedienteReceptor: false,
            sexoReceptor: false,
            folioSolicitudTejidoCorneal: false,
            diagnostico: true,
            fechaActualizacion: false,
            edadReceptor: false,
            caracteristicaCornea: true,
            corneaSolicitada: false,
            primerApellidoReceptor: false,
            status: false,
            usuarioUltMov: false,
            iddoctorResponsableSolicitud: false,
            idhospital: false
        };
        this.validosTipoCirugiaPrevista = {
            id: false,
            dmek: false,
            otra: false,
            fechaBaja: false,
            dalk: false,
            fechaRegistro: false,
            fechaActualizacion: false,
            dsaek: false,
            qp: false,
            status: false,
            usuarioUltMov: false,
            idsolicitudTejidoCorneal: false
        };
        this.idEntrada = null;
        this.ocultarConjuntosSolicitudTejidoCorneal = false;
        this.nombre = '';
        this.permisosTabla = { tabla: 'solicitudTejidoCorneal', permiso: 0, etiqueta: '' };
        this.permisosAtributos = [];
        this.permisosConjuntos = [];
        //  public perfil: Perfil;
        this.accion = 0;
        this.solicitudTejidoCornealLazy = false;
        this.solicitudTejidoCornealPermisos = false;
        this.tipoCirugiaPrevistaLazy = false;
        this.tipoCirugiaPrevistaPermisos = false;
        this.validaciones = false;
        this.validacionesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.solicitudTejidoCorneal = new _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCorneal"]();
        this.solicitudTejidoCornealChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.solicitudTejidoCornealTablaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.lista_solicitudTejidoCorneales = [];
        this.usuarioUltMovSolicitudTejidoCornealUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_8__["Usuario"]();
        this.lista_usuarioUltMovSolicitudTejidoCornealUsuario = [];
        this.usuarioUltMovSolicitudTejidoCornealUsuarioEditar = false;
        this.iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitanteEleccion = new _doctor_solicitantes_shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_16__["DoctorSolicitante"]();
        this.lista_iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante = [];
        this.iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitanteEditar = false;
        this.idhospitalSolicitudTejidoCornealHospitalEleccion = new _hospitales_shared_hospital__WEBPACK_IMPORTED_MODULE_13__["Hospital"]();
        this.lista_idhospitalSolicitudTejidoCornealHospital = [];
        this.idhospitalSolicitudTejidoCornealHospitalEditar = false;
        this.solicitudTejidoCornealRecepcion = new _solicitud_tejido_corneal_recepciones_shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_21__["SolicitudTejidoCornealRecepcion"]();
        this.tipoCirugiaPrevista = new _tipo_cirugia_previstas_shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_19__["TipoCirugiaPrevista"]();
        this.tipoCirugiaPrevistaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tipoCirugiaPrevistaTablaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.otracheck = 0;
        this.isDisabled = true;
        this.usuariologueado = globalesService.dameUsuario();
        var discon = '';
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                this.obtenerPermisos();
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
            }
        }
        this.solicitudTejidoCornealSeleccion = this.solicitudTejidoCornealCancelar = this.solicitudTejidoCornealGuardar = this.solicitudTejidoCornealBuscar = this.solicitudTejidoCornealAgregar = this.solicitudTejidoCornealActualizar = this.solicitudTejidoCornealEliminar = false;
        this.configuracionSolicitudTejidoCorneal = new _shared_configurar_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_7__["ConfigurarSolicitudTejidoCorneal"]();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovSolicitudTejidoCornealUsuario, this);
        this.doctorSolicitante_service.getDoctorSolicitantesActivos(this.evtGetIddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante, this);
        this.hospital_service.getHospitalesActivos(this.evtGetIdhospitalSolicitudTejidoCornealHospital, this);
        this.limpiarCampos();
    }
    Object.defineProperty(SolicitudTejidoCornealCrudComponent.prototype, "solicitudTejidoCornealOcultarConjuntos", {
        get: function () {
            if (this.ocultarConjuntosSolicitudTejidoCorneal)
                return true;
            return !this.solicitudTejidoCornealActualizar;
        },
        enumerable: true,
        configurable: true
    });
    SolicitudTejidoCornealCrudComponent.prototype.ngOnChanges = function (changes) {
        if (changes.idEntrada && changes.idEntrada.currentValue != null) {
            this.buscaIdParametro(changes.idEntrada.currentValue);
        }
        if (changes.solicitudTejidoCorneal &&
            changes.solicitudTejidoCorneal.currentValue == null &&
            this.solicitudTejidoCorneal == null)
            this.solicitudTejidoCorneal = new _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCorneal"]();
        else {
            var aux = new _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCorneal"]();
            if (this.solicitudTejidoCorneal)
                aux.from(this.solicitudTejidoCorneal);
            if (aux.isOk && aux.isOk()) {
                this.accion = 7;
                this.solicitudTejidoCornealBuscar = this.solicitudTejidoCornealAgregar = this.solicitudTejidoCornealSeleccion = this.solicitudTejidoCornealGuardar = false;
                this.solicitudTejidoCornealActualizar = this.solicitudTejidoCornealEliminar = this.solicitudTejidoCornealCancelar = true;
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
                this.solicitudTejidoCornealSeleccion = this.solicitudTejidoCornealAgregar = this.solicitudTejidoCornealBuscar = this.solicitudTejidoCornealActualizar = this.solicitudTejidoCornealEliminar = false;
                this.solicitudTejidoCornealGuardar = this.solicitudTejidoCornealCancelar = true;
            }
        }
        if (this.solicitudTejidoCornealRecepcion &&
            this.solicitudTejidoCornealRecepcion.estatusProceso &&
            this.solicitudTejidoCornealRecepcion.estatusProceso == 1) {
            this.desactivaTodos();
        }
    };
    SolicitudTejidoCornealCrudComponent.prototype.obtenerPermisos = function () {
        var id_expe = -1;
        var tablas = [
            'solicitudTejidoCorneal',
            'usuario',
            'usuarioBtc',
            'perfilRedIssste',
            'hospital',
            'entidadFederativa',
            'perfil',
            'doctorSolicitante',
            'catalogoCargo'
        ];
        var parametros = {
            id_usu: this.usuariologueado.id,
            tablas: tablas,
            id_exp: id_expe
        };
        this.solicitudTejidoCornealPermisos = false;
        this.coreService.permisos(parametros, this.evtCorePermisos, this);
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    SolicitudTejidoCornealCrudComponent.prototype.evtCorePermisos = function (permisos, obj) {
        obj.solicitudTejidoCornealPermisos = true;
        if (permisos &&
            permisos.solicitudTejidoCorneal &&
            permisos.solicitudTejidoCorneal.PermisoAtributo &&
            permisos.solicitudTejidoCorneal.PermisoAtributo.length > 0) {
            obj.permisosAtributos = permisos.solicitudTejidoCorneal.PermisoAtributo;
        }
        else {
            obj.usuariologueado = undefined;
        }
        if (permisos &&
            permisos.solicitudTejidoCorneal &&
            permisos.solicitudTejidoCorneal.PermisoConjunto &&
            permisos.solicitudTejidoCorneal.PermisoConjunto.length > 0) {
            obj.permisosConjuntos = permisos.solicitudTejidoCorneal.PermisoConjunto;
        }
        if (permisos &&
            permisos.solicitudTejidoCorneal &&
            permisos.solicitudTejidoCorneal.PermisoTabla &&
            permisos.solicitudTejidoCorneal.PermisoTabla.length > 0) {
            obj.permisosTabla = permisos.solicitudTejidoCorneal.PermisoTabla[0];
            obj.permisosaccionesInicio();
        }
        if (permisos &&
            permisos.usuario &&
            permisos.usuario.PermisoAtributo &&
            permisos.usuario.PermisoAtributo.length > 0) {
            //obj.configuracionUsuarioUltMov.permisosAtributos = permisos.usuario.PermisoAtributo ;
            //obj.permisosAtributos.push(permisos.usuario.PermisoAtributo) ;
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
            //obj.configuracionUsuarioUltMov.permisosTabla = permisos.usuario.PermisoTabla[0] ;
            //obj.permisosTabla.push(permisos.usuario.PermisoTabla[0] );
        }
        if (permisos &&
            permisos.doctorSolicitante &&
            permisos.doctorSolicitante.PermisoAtributo &&
            permisos.doctorSolicitante.PermisoAtributo.length > 0) {
            //obj.configuracionIddoctorResponsableSolicitud.permisosAtributos = permisos.doctorSolicitante.PermisoAtributo ;
            //obj.permisosAtributos.push(permisos.doctorSolicitante.PermisoAtributo) ;
        }
        if (permisos &&
            permisos.doctorSolicitante &&
            permisos.doctorSolicitante.PermisoAtributo &&
            permisos.doctorSolicitante.PermisoConjunto.length > 0) {
            obj.permisosConjuntos.push(permisos.doctorSolicitante.PermisoConjunto);
        }
        if (permisos &&
            permisos.doctorSolicitante &&
            permisos.doctorSolicitante.PermisoTabla &&
            permisos.doctorSolicitante.PermisoTabla.length > 0) {
            //obj.configuracionIddoctorResponsableSolicitud.permisosTabla = permisos.doctorSolicitante.PermisoTabla[0] ;
            //obj.permisosTabla.push(permisos.doctorSolicitante.PermisoTabla[0] );
        }
        if (permisos &&
            permisos.hospital &&
            permisos.hospital.PermisoAtributo &&
            permisos.hospital.PermisoAtributo.length > 0) {
            //obj.configuracionIdhospital.permisosAtributos = permisos.hospital.PermisoAtributo ;
            //obj.permisosAtributos.push(permisos.hospital.PermisoAtributo) ;
        }
        if (permisos &&
            permisos.hospital &&
            permisos.hospital.PermisoAtributo &&
            permisos.hospital.PermisoConjunto.length > 0) {
            obj.permisosConjuntos.push(permisos.hospital.PermisoConjunto);
        }
        if (permisos &&
            permisos.hospital &&
            permisos.hospital.PermisoTabla &&
            permisos.hospital.PermisoTabla.length > 0) {
            //obj.configuracionIdhospital.permisosTabla = permisos.hospital.PermisoTabla[0] ;
            //obj.permisosTabla.push(permisos.hospital.PermisoTabla[0] );
        }
        if (obj.configurarTablasConjuntos)
            obj.configurarTablasConjuntos();
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    SolicitudTejidoCornealCrudComponent.prototype.evtGetUsuarioUltMovSolicitudTejidoCornealUsuario = function (lista_usuarioUltMovSolicitudTejidoCornealUsuario, obj) {
        obj.lista_usuarioUltMovSolicitudTejidoCornealUsuario = lista_usuarioUltMovSolicitudTejidoCornealUsuario;
        obj.actualizar_UsuarioUltMovSolicitudTejidoCornealUsuario();
    };
    SolicitudTejidoCornealCrudComponent.prototype.evtGetIddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante = function (lista_iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante, obj) {
        obj.lista_iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante = lista_iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante;
        obj.actualizar_IddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante();
    };
    SolicitudTejidoCornealCrudComponent.prototype.evtGetIdhospitalSolicitudTejidoCornealHospital = function (lista_idhospitalSolicitudTejidoCornealHospital, obj) {
        obj.lista_idhospitalSolicitudTejidoCornealHospital = lista_idhospitalSolicitudTejidoCornealHospital;
        obj.actualizar_IdhospitalSolicitudTejidoCornealHospital();
    };
    SolicitudTejidoCornealCrudComponent.prototype.actualizar_UsuarioUltMovSolicitudTejidoCornealUsuario = function () {
        if (this.usuarioUltMovSolicitudTejidoCornealUsuarioEleccion)
            for (var _i = 0, _a = this.lista_usuarioUltMovSolicitudTejidoCornealUsuario; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.usuarioUltMovSolicitudTejidoCornealUsuarioEleccion.id) {
                    this.usuarioUltMovSolicitudTejidoCornealUsuarioEleccion = eleme;
                    break;
                }
            }
    };
    SolicitudTejidoCornealCrudComponent.prototype.actualizar_IddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante = function () {
        if (this.solicitudTejidoCorneal.iddoctorResponsableSolicitud)
            for (var _i = 0, _a = this
                .lista_iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.solicitudTejidoCorneal.iddoctorResponsableSolicitud.id) {
                    this.solicitudTejidoCorneal.iddoctorResponsableSolicitud = eleme;
                    break;
                }
            }
    };
    SolicitudTejidoCornealCrudComponent.prototype.actualizar_IdhospitalSolicitudTejidoCornealHospital = function () {
        if (this.solicitudTejidoCorneal.idhospital)
            for (var _i = 0, _a = this.lista_idhospitalSolicitudTejidoCornealHospital; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.solicitudTejidoCorneal.idhospital.id) {
                    this.solicitudTejidoCorneal.idhospital = eleme;
                    break;
                }
            }
    };
    SolicitudTejidoCornealCrudComponent.prototype.ngDoCheck = function () { };
    SolicitudTejidoCornealCrudComponent.prototype.validaAcciones = function (vall) {
        return (this.accion == 0 ||
            this.accion == 1 ||
            this.accion == 4 ||
            this.accion == 6 ||
            (this.accion == 7 && vall) ||
            (this.accion == 2 && vall) ||
            (this.accion == 3 && vall) ||
            (this.accion == 5 && vall));
    };
    Object.defineProperty(SolicitudTejidoCornealCrudComponent.prototype, "validaId", {
        get: function () {
            return this.validosSolicitudTejidoCorneal['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealCrudComponent.prototype, "validaIds", {
        get: function () {
            return this.validosSolicitudTejidoCorneal['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealCrudComponent.prototype, "validaFechaBaja", {
        get: function () {
            return this.validosSolicitudTejidoCorneal['fechaBaja'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealCrudComponent.prototype, "validaFechaRegistro", {
        get: function () {
            return this.validosSolicitudTejidoCorneal['fechaRegistro'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealCrudComponent.prototype, "validaEstatusProceso", {
        get: function () {
            return this.validosSolicitudTejidoCorneal['estatusProceso'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealCrudComponent.prototype, "validaSegundoApellidoReceptor", {
        get: function () {
            return this.validosSolicitudTejidoCorneal['segundoApellidoReceptor'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealCrudComponent.prototype, "validaFechaTentativaCirugia", {
        get: function () {
            if (this.solicitudTejidoCorneal.fechaTentativaCirugia == null) {
                return false;
            }
            else {
                return true;
            }
            //return this.validosSolicitudTejidoCorneal['fechaTentativaCirugia'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealCrudComponent.prototype, "validaNombreReceptor", {
        get: function () {
            return this.validosSolicitudTejidoCorneal['nombreReceptor'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealCrudComponent.prototype, "validaNumeroExpedienteReceptor", {
        get: function () {
            return this.validosSolicitudTejidoCorneal['numeroExpedienteReceptor'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealCrudComponent.prototype, "validaSexoReceptor", {
        get: function () {
            if (this.solicitudTejidoCorneal.sexoReceptor == null) {
                return false;
            }
            else {
                return true;
            }
            //return this.validosSolicitudTejidoCorneal['sexoReceptor'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealCrudComponent.prototype, "validaFolioSolicitudTejidoCorneal", {
        get: function () {
            return this.validosSolicitudTejidoCorneal['folioSolicitudTejidoCorneal'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealCrudComponent.prototype, "validaDiagnostico", {
        get: function () {
            return this.validosSolicitudTejidoCorneal['diagnostico'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealCrudComponent.prototype, "validaFechaActualizacion", {
        get: function () {
            return this.validosSolicitudTejidoCorneal['fechaActualizacion'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealCrudComponent.prototype, "validaEdadReceptor", {
        get: function () {
            return this.validosSolicitudTejidoCorneal['edadReceptor'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealCrudComponent.prototype, "validaCaracteristicaCornea", {
        get: function () {
            return this.validosSolicitudTejidoCorneal['caracteristicaCornea'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealCrudComponent.prototype, "validaCorneaSolicitada", {
        get: function () {
            //("this.solicitudTejidoCorneal.corneaSolicitada "+ this.solicitudTejidoCorneal.corneaSolicitada);
            if (this.solicitudTejidoCorneal.corneaSolicitada == 1 || this.solicitudTejidoCorneal.corneaSolicitada == 2) {
                //("cornea true");
                return true;
            }
            else {
                //("cornea false");
                return false;
            }
            // return this.validosSolicitudTejidoCorneal['corneaSolicitada'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealCrudComponent.prototype, "validaPrimerApellidoReceptor", {
        get: function () {
            return this.validosSolicitudTejidoCorneal['primerApellidoReceptor'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealCrudComponent.prototype, "validaStatus", {
        get: function () {
            return this.validosSolicitudTejidoCorneal['status'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealCrudComponent.prototype, "validaUsuarioUltMov", {
        get: function () {
            return this.validosSolicitudTejidoCorneal['usuarioUltMov'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealCrudComponent.prototype, "validaIddoctorResponsableSolicitud", {
        get: function () {
            if (this.solicitudTejidoCorneal.iddoctorResponsableSolicitud == null) {
                return false;
            }
            else {
                return true;
            }
            //return this.validosSolicitudTejidoCorneal['iddoctorResponsableSolicitud'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealCrudComponent.prototype, "validaIdhospital", {
        get: function () {
            if (this.solicitudTejidoCorneal.idhospital == null) {
                return false;
            }
            else {
                return true;
            }
            //return this.validosSolicitudTejidoCorneal['idhospital'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealCrudComponent.prototype, "validaTodosc", {
        get: function () {
            this.mensajerror = '';
            var salida = 
            // this.validaId &&
            // this.validaFechaBaja &&
            // this.validaFechaRegistro &&
            // this.validaEstatusProceso &&
            this.validaSegundoApellidoReceptor &&
                this.validaFechaTentativaCirugia &&
                this.validaNombreReceptor &&
                this.validaNumeroExpedienteReceptor &&
                this.validaSexoReceptor &&
                // this.validaFolioSolicitudTejidoCorneal &&
                this.validaDiagnostico &&
                // this.validaFechaActualizacion &&
                this.solicitudTejidoCorneal.edadReceptor !== null &&
                this.validaCaracteristicaCornea &&
                this.validaCorneaSolicitada &&
                this.validaPrimerApellidoReceptor &&
                // this.validaStatus &&
                // this.validaUsuarioUltMov &&
                this.validaIddoctorResponsableSolicitud &&
                this.validaIdhospital;
            if (salida != this.validaciones)
                this.validacionesChange.emit(salida);
            return salida;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealCrudComponent.prototype, "validaGuardado", {
        get: function () {
            this.mensajerror = '';
            var salida = 
            // this.validaId &&
            // this.validaFechaBaja &&
            // this.validaFechaRegistro &&
            // this.validaEstatusProceso &&
            //this.validaSegundoApellidoReceptor &&
            //this.validaFechaTentativaCirugia &&
            // this.validaNombreReceptor &&
            // this.validaNumeroExpedienteReceptor &&
            // this.validaSexoReceptor &&
            // this.validaFolioSolicitudTejidoCorneal &&
            //this.validaDiagnostico &&
            // this.validaFechaActualizacion &&
            // this.validaEdadReceptor &&
            // this.validaCaracteristicaCornea &&
            // this.validaCorneaSolicitada &&
            // this.validaPrimerApellidoReceptor &&
            // this.validaStatus &&
            // this.validaUsuarioUltMov &&
            //this.validaIddoctorResponsableSolicitud &&
            this.validaIdhospital;
            if (salida != this.validaciones)
                this.validacionesChange.emit(salida);
            return salida;
        },
        enumerable: true,
        configurable: true
    });
    SolicitudTejidoCornealCrudComponent.prototype.obtenerSolicitudTejidoCorneales = function (lista, objeto) {
        objeto.lista_solicitudTejidoCorneales = lista;
        if (lista && lista.length > 0) {
            objeto.solicitudTejidoCorneal.from(lista[0]);
            objeto.evtSolicitudTejidoCornealSeleccionado(objeto.solicitudTejidoCorneal);
            if (objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    };
    SolicitudTejidoCornealCrudComponent.prototype.evn_lazy_solicitudTejidoCorneal = function (solicitudTejidoCorneal, objeto) {
        objeto.solicitudTejidoCorneal = solicitudTejidoCorneal;
        objeto.solicitudTejidoCorneal.corneaSolicitada += '';
        objeto.solicitudTejidoCornealChange.emit(objeto.solicitudTejidoCorneal);
        objeto.configuarCombosObjetos();
        objeto.solicitudTejidoCornealLazy = true;
        if (objeto.descActivar)
            objeto.desactivaTodos();
    };
    Object.defineProperty(SolicitudTejidoCornealCrudComponent.prototype, "datosReporteSolicitudTejidoCornealWord", {
        /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
        get: function () {
            return !(this.solicitudTejidoCornealActualizar &&
                this.solicitudTejidoCornealLazy &&
                this.globalesService.preporteWord(this, 'solicitudTejidoCorneal'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealCrudComponent.prototype, "datosReporteSolicitudTejidoCornealExcel", {
        get: function () {
            return !(this.solicitudTejidoCornealActualizar &&
                this.solicitudTejidoCornealLazy &&
                this.globalesService.preporteExcel(this, 'solicitudTejidoCorneal'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealCrudComponent.prototype, "datosReporteSolicitudTejidoCornealPdf", {
        get: function () {
            return !(this.solicitudTejidoCornealActualizar &&
                this.solicitudTejidoCornealLazy &&
                this.globalesService.preportePdf(this, 'solicitudTejidoCorneal'));
        },
        enumerable: true,
        configurable: true
    });
    SolicitudTejidoCornealCrudComponent.prototype.reporteSolicitudTejidoCornealExcel = function (form) {
        var nombre = 'SolicitudTejidoCorneal.xlsx';
        var path = 'file/reporteExcel';
        var parametros = {};
        parametros['entradas'] = { solicitudTejidoCorneal: this.solicitudTejidoCorneal };
        parametros['plantilla'] = 'SolicitudTejidoCorneal.xlsx';
        parametros['salida'] = nombre;
        this.fileservice.downloadFile(parametros['plantilla'], parametros['salida'], path, parametros);
    };
    SolicitudTejidoCornealCrudComponent.prototype.reporteSolicitudTejidoCornealWord = function (form) {
        var nombre = 'SolicitudTejidoCorneal.docx';
        var path = 'file/reporteWord';
        var parametros = {};
        parametros['entradas'] = { solicitudTejidoCorneal: this.solicitudTejidoCorneal };
        parametros['plantilla'] = 'SolicitudTejidoCorneal.docx';
        parametros['salida'] = nombre;
        this.fileservice.downloadFile(parametros['plantilla'], parametros['salida'], path, parametros);
    };
    SolicitudTejidoCornealCrudComponent.prototype.reporteSolicitudTejidoCornealPdf = function (form) {
        var nombre = 'SolicitudTejidoCorneal.docx';
        var path = 'file/reportePdf';
        var parametros = {};
        parametros['entradas'] = { solicitudTejidoCorneal: this.solicitudTejidoCorneal };
        parametros['plantilla'] = 'SolicitudTejidoCorneal.docx';
        parametros['salida'] = 'SolicitudTejidoCorneal.pdf';
        this.fileservice.downloadFile(parametros['plantilla'], parametros['salida'], path, parametros);
    };
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */
    SolicitudTejidoCornealCrudComponent.prototype.accionesBuscar = function () {
        this.accion = 1;
        this.solicitudTejidoCornealGuardar = this.solicitudTejidoCornealActualizar = this.solicitudTejidoCornealEliminar = false;
        this.solicitudTejidoCornealBuscar = this.solicitudTejidoCornealAgregar = this.solicitudTejidoCornealCancelar = true;
    };
    SolicitudTejidoCornealCrudComponent.prototype.buscarSolicitudTejidoCornealFront = function (form) {
        this.accionesBuscar();
        var vsolicitudTejidoCorneal = new _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCorneal"]();
        vsolicitudTejidoCorneal.from(this.solicitudTejidoCorneal);
        this.configuracionSolicitudTejidoCorneal = new _shared_configurar_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_7__["ConfigurarSolicitudTejidoCorneal"]();
        this.configuracionSolicitudTejidoCorneal.permisosTabla = {
            tabla: 'solicitudTejidoCorneal',
            permiso: 8
        };
        this.configuracionSolicitudTejidoCorneal.titulo = 'Buscar ' + this.permisosTabla.etiqueta;
        this.configuracionSolicitudTejidoCorneal.solicitudTejidoCornealConsulta = vsolicitudTejidoCorneal;
        this.permisosacciones();
        $('#buscarSolicitudTejidoCorneal_' + this.nombre).modal();
    };
    SolicitudTejidoCornealCrudComponent.prototype.buscarSolicitudTejidoCornealBack = function (solicitudTejidoCorneal) {
        this.solicitudTejidoCorneal_service.getSolicitudTejidoCornealesByDto(new _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCorneal"](solicitudTejidoCorneal), this.eventoSrvSolicitudTejidoCornealBuscar, this);
    };
    SolicitudTejidoCornealCrudComponent.prototype.eventoSrvSolicitudTejidoCornealBuscar = function (lista, objeto) {
        objeto.lista_solicitudTejidoCorneales = lista;
        if (lista && lista.length > 0) {
            objeto.solicitudTejidoCorneal = lista[0];
            objeto.solicitudTejidoCornealLazy = false;
            objeto.solicitudTejidoCorneal_service.lazySolicitudTejidoCorneal(new _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCorneal"](objeto.solicitudTejidoCorneal), objeto.evn_lazy_solicitudTejidoCorneal, objeto);
        }
    };
    SolicitudTejidoCornealCrudComponent.prototype.guardarSolicitudTejidoCornealFront = function (form) {
        if (this.validaGuardado) {
            var continuar = false;
            bootbox.confirm({
                message: '¿Los datos se almacenarán, desea realizar esta acción?',
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
                        this.solicitudTejidoCorneal = new _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCorneal"](this.solicitudTejidoCorneal);
                        this.accion = 5; // ********************************************************************************************** maquina
                        if (this.solicitudTejidoCorneal.id == null) {
                            this.solicitudTejidoCorneal.estatusProceso = 1;
                            this.guardarSolicitudTejidoCornealBack(this.solicitudTejidoCorneal);
                            this.accionesBuscar(); // ********************************************************************************* maquina
                            this.permisosacciones();
                        }
                        else {
                            this.accion = 3; // ************************************************************************************* maquina
                            if (this.solicitudTejidoCorneal.id != null &&
                                (this.solicitudTejidoCorneal.estatusProceso === 1 ||
                                    this.solicitudTejidoCorneal.estatusProceso == null)) {
                                this.actualizarSolicitudTejidoCornealBack(this.solicitudTejidoCorneal);
                                this.accionesBuscar(); // ***************************************************************************** maquina
                                this.permisosacciones();
                            }
                            else {
                                bootbox.alert('Solo se puede actualizar cuando la solicitud aún no se ha enviado');
                            }
                        }
                    }
                }.bind(this)
            });
        }
        else {
            if (!this.validaIdhospital)
                this.mensajerror += '\n<br/>Hospital Solicitante*';
            ("MENSAJE ERROR: " + this.mensajerror);
            bootbox.alert('<strong>Faltan datos Requeridos*</strong>\n' + this.mensajerror);
        }
    };
    SolicitudTejidoCornealCrudComponent.prototype.enviarSolicitudTejidoCornealFront = function (form) {
        //("validaciones: " + this.validaTodosc);
        //("this.validaSegundoApellidoReceptor: " + this.validaSegundoApellidoReceptor);
        //("this.validaFechaTentativaCirugia: " + this.validaFechaTentativaCirugia);
        //("fechaTentativaCirugia: " + this.solicitudTejidoCorneal.fechaTentativaCirugia);
        //("this.validaNombreReceptor: " + this.validaNombreReceptor);
        //("this.validaPrimerApellidoReceptor: " + this.validaPrimerApellidoReceptor);
        //("this.validaNumeroExpedienteReceptor: " + this.validaNumeroExpedienteReceptor);
        //("this.validaSexoReceptor: " + this.validaSexoReceptor);
        //("SexoReceptor: " + this.solicitudTejidoCorneal.sexoReceptor);
        //("this.validaDiagnostico: " + this.validaDiagnostico);
        //("this.validaEdadReceptor: " + this.validaEdadReceptor);
        //("this.validaCaracteristicaCornea: " + this.validaCaracteristicaCornea);
        //("this.validaCorneaSolicitada: " + this.validaCorneaSolicitada);
        //("CorneaSolicitada: " + this.solicitudTejidoCorneal.corneaSolicitada);
        //("this.validaIddoctorResponsableSolicitud: " + this.validaIddoctorResponsableSolicitud);
        //("iddoctorResponsableSolicitud: " + this.solicitudTejidoCorneal.iddoctorResponsableSolicitud);
        //("this.validaIdhospital: " + this.validaIdhospital);
        //("idhospital: " + this.solicitudTejidoCorneal.idhospital);
        // No se validan eston campos
        // ("this.validaFolioSolicitudTejidoCorneal: " + this.validaFolioSolicitudTejidoCorneal);
        // ("this.validaEstatusProceso: " + this.validaEstatusProceso);
        // ("this.validaId: " + this.validaId);
        // ("this.validaFechaBaja: " + this.validaFechaBaja);
        // ("this.validaFechaRegistro: " + this.validaFechaRegistro);
        // ("this.validaFechaActualizacion: " + this.validaFechaActualizacion);
        // ("this.validaStatus: " + this.validaStatus);
        // ("this.validaUsuarioUltMov: " + this.validaUsuarioUltMov);
        if (this.validaTodosc) {
            this.solicitudTejidoCornealRecepcion.estatusProceso = 2;
            this.solicitudTejidoCornealRecepcion.idsolicitudTejidoCorneal = this.solicitudTejidoCorneal;
            this.guardarSolicitudTejidoCornealRecepcionBack(this.solicitudTejidoCornealRecepcion);
            this.solicitudTejidoCorneal.estatusProceso = 2;
            this.actualizarSolicitudTejidoCornealBack(this.solicitudTejidoCorneal);
            this.accionesBuscar(); // ***************************************************************************** maquina
            this.permisosacciones();
        }
        else {
            if (!this.validaIdhospital)
                this.mensajerror += '\n<br/>Hospital Solicitante*';
            if (!this.validaIddoctorResponsableSolicitud)
                this.mensajerror += '\n<br/>Nombre del Oftalmólogo Responsable y/o Coordinador*';
            if (!this.validaNombreReceptor)
                this.mensajerror += '\n<br/>Nombre(s)*';
            if (!this.validaPrimerApellidoReceptor)
                this.mensajerror += '\n<br/>Primer Apellido*';
            if (!this.validaSegundoApellidoReceptor)
                this.mensajerror += '\n<br/>Segundo Apellido*';
            if (this.solicitudTejidoCorneal.edadReceptor == null)
                this.mensajerror += '\n<br/>Edad*';
            if (!this.validaNumeroExpedienteReceptor)
                this.mensajerror += '\n<br/>Número Expediente*';
            if (!this.validaSexoReceptor)
                this.mensajerror += '\n<br/>Sexo*';
            if (!this.validaDiagnostico)
                this.mensajerror += '\n<br/>Diagnostico*';
            if (!this.validaFechaTentativaCirugia)
                this.mensajerror += '\n<br/>Fecha Tentativa Cirugía*';
            if (!this.validaCorneaSolicitada)
                this.mensajerror += '\n<br/>Córnea Solicitada*';
            if (!this.validaCaracteristicaCornea)
                this.mensajerror += '\n<br/>Característica de la Córnea*';
            ("MENSAJE ERROR: " + this.mensajerror);
            bootbox.alert('<strong>Faltan datos Requeridos*</strong>\n' + this.mensajerror);
        }
    };
    SolicitudTejidoCornealCrudComponent.prototype.guardarSolicitudTejidoCornealRecepcionBack = function (solicitudTejidoCornealRecepcion) {
        if (solicitudTejidoCornealRecepcion.usuarioUltMov == null)
            solicitudTejidoCornealRecepcion.usuarioUltMov = this.globalesService.dameUsuario();
        if (solicitudTejidoCornealRecepcion.status == null ||
            solicitudTejidoCornealRecepcion.status == '')
            solicitudTejidoCornealRecepcion.status = 1;
        this.solicitudTejidoCornealRecepcion_service.guardarSolicitudTejidoCornealRecepcion(new _solicitud_tejido_corneal_recepciones_shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_21__["SolicitudTejidoCornealRecepcion"](solicitudTejidoCornealRecepcion), this.eventoSrvSolicitudTejidoCornealRecepcionGuardar, this);
    };
    SolicitudTejidoCornealCrudComponent.prototype.eventoSrvSolicitudTejidoCornealRecepcionGuardar = function (solicitudTejidoCornealRecepcion, obj) {
        obj.solicitudTejidoCornealRecepcion = solicitudTejidoCornealRecepcion;
        //bootbox.alert("Datos guardados con éxito");
        //var aux: SolicitudTejidoCornealRecepcion = new SolicitudTejidoCornealRecepcion();
        //aux.from(solicitudTejidoCornealRecepcion);
        //obj.solicitudTejidoCornealRecepcionChange.emit(aux);
        //obj.solicitudTejidoCornealRecepcionTablaChange.emit(aux);
        //obj.solicitudTejidoCornealRecepcionLazy =false;
        //obj.solicitudTejidoCornealRecepcion_service.lazySolicitudTejidoCornealRecepcion(obj.solicitudTejidoCornealRecepcion, obj.evn_lazy_solicitudTejidoCornealRecepcion, obj);
        //obj.accionesActualizar();
    };
    SolicitudTejidoCornealCrudComponent.prototype.guardarSolicitudTejidoCornealBack = function (solicitudTejidoCorneal) {
        if (solicitudTejidoCorneal.usuarioUltMov == null)
            solicitudTejidoCorneal.usuarioUltMov = this.globalesService.dameUsuario();
        if (solicitudTejidoCorneal.status == null || solicitudTejidoCorneal.status == '')
            solicitudTejidoCorneal.status = 1;
        solicitudTejidoCorneal.fechaRegistro = new Date();
        this.solicitudTejidoCorneal_service.guardarSolicitudTejidoCorneal(new _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCorneal"](solicitudTejidoCorneal), this.eventoSrvSolicitudTejidoCornealGuardar, this);
    };
    SolicitudTejidoCornealCrudComponent.prototype.guardarTipoCirugiaBack = function (tipoCirugiaPrevista, obj) {
        if (tipoCirugiaPrevista.usuarioUltMov == null)
            tipoCirugiaPrevista.usuarioUltMov = obj.globalesService.dameUsuario();
        if (tipoCirugiaPrevista.status == null || tipoCirugiaPrevista.status == '')
            tipoCirugiaPrevista.status = 1;
        obj.tipoCirugiaPrevista_services.guardarTipoCirugiaPrevista(new _tipo_cirugia_previstas_shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_19__["TipoCirugiaPrevista"](tipoCirugiaPrevista), obj.eventoSrvTipoCirugiaPrevistaGuardar, obj);
    };
    SolicitudTejidoCornealCrudComponent.prototype.eventoSrvSolicitudTejidoCornealGuardar = function (solicitudTejidoCorneal, obj) {
        obj.solicitudTejidoCorneal = solicitudTejidoCorneal;
        obj.solicitudTejidoCorneal.corneaSolicitada += '';
        bootbox.alert('Datos guardados con éxito');
        var aux = new _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCorneal"]();
        aux.from(solicitudTejidoCorneal);
        obj.solicitudTejidoCornealChange.emit(aux);
        obj.solicitudTejidoCornealTablaChange.emit(aux);
        obj.solicitudTejidoCornealLazy = false;
        obj.solicitudTejidoCorneal_service.lazySolicitudTejidoCorneal(new _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCorneal"](obj.solicitudTejidoCorneal), obj.evn_lazy_solicitudTejidoCorneal, obj);
        obj.accionesActualizar();
        obj.tipoCirugiaPrevista.idsolicitudTejidoCorneal = obj.solicitudTejidoCorneal;
        obj.guardarTipoCirugiaBack(obj.tipoCirugiaPrevista, obj);
    };
    SolicitudTejidoCornealCrudComponent.prototype.eventoSrvTipoCirugiaPrevistaGuardar = function (tipoCirugiaPrevista, obj) {
        obj.tipoCirugiaPrevista = tipoCirugiaPrevista;
        //bootbox.alert("Datos guardados con éxito");
        var aux = new _tipo_cirugia_previstas_shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_19__["TipoCirugiaPrevista"]();
        aux.from(tipoCirugiaPrevista);
        obj.tipoCirugiaPrevistaChange.emit(aux);
        obj.tipoCirugiaPrevistaTablaChange.emit(aux);
        obj.tipoCirugiaPrevistaLazy = false;
        if (tipoCirugiaPrevista.otra != null) {
            obj.otracheck = 1;
            obj.isDisabled = false;
        }
        /*     obj.solicitudTejidoCorneal.tipoCirugiaPrevista = tipoCirugiaPrevista;
        var aux2: SolicitudTejidoCorneal = new SolicitudTejidoCorneal();
        aux2.from(obj.solicitudTejidoCorneal);
    
        obj.solicitudTejidoCorneal_service.actualizarSolicitudTejidoCorneal(
          aux2,
          obj.eventoSrvSolicitudTejidoCornealActualizar,
          obj
        );
     */
        /*     obj.actualizarSolicitudTejidoCornealBack(obj.solicitudTejidoCorneal); */
        obj.tipoCirugiaPrevista_services.lazyTipoCirugiaPrevista(new _tipo_cirugia_previstas_shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_19__["TipoCirugiaPrevista"](aux), obj.evn_lazy_tipoCirugiaPrevista, obj);
        //obj.accionesActualizar();
    };
    SolicitudTejidoCornealCrudComponent.prototype.evn_lazy_tipoCirugiaPrevista = function (tipoCirugiaPrevista, objeto) {
        objeto.tipoCirugiaPrevista = tipoCirugiaPrevista;
        objeto.tipoCirugiaPrevistaChange.emit(objeto.tipoCirugiaPrevista);
        objeto.configuarCombosObjetos();
        objeto.tipoCirugiaPrevistaLazy = true;
    };
    SolicitudTejidoCornealCrudComponent.prototype.actualizarSolicitudTejidoCornealFront = function (form) {
        this.accion = 3; // ************************************************************************************* maquina
        this.actualizarSolicitudTejidoCornealBack(this.solicitudTejidoCorneal);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    };
    SolicitudTejidoCornealCrudComponent.prototype.actualizarSolicitudTejidoCornealBack = function (solicitudTejidoCorneal) {
        solicitudTejidoCorneal.usuarioUltMov = this.globalesService.dameUsuario();
        if (this.tipoCirugiaPrevista && this.tipoCirugiaPrevista.id != null) {
            this.actualizarTipoCirugiaPrevistaBack(this.tipoCirugiaPrevista);
        }
        else {
            this.tipoCirugiaPrevista.idsolicitudTejidoCorneal = this.solicitudTejidoCorneal;
            this.guardarTipoCirugiaBack(this.tipoCirugiaPrevista, this);
        }
        this.solicitudTejidoCorneal_service.actualizarSolicitudTejidoCorneal(new _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCorneal"](solicitudTejidoCorneal), this.eventoSrvSolicitudTejidoCornealActualizar, this);
    };
    SolicitudTejidoCornealCrudComponent.prototype.eventoSrvSolicitudTejidoCornealActualizar = function (retorno, obj) {
        if (retorno) {
            if (obj.solicitudTejidoCornealRecepcion.estatusProceso == 2) {
                bootbox.alert('Solicitud enviada a Recepción');
            }
            else {
                bootbox.alert('Datos actualizados con Éxito');
            }
            var aux = new _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCorneal"]();
            // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.solicitudTejidoCornealLazy = false;
            obj.solicitudTejidoCorneal_service.lazySolicitudTejidoCorneal(new _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCorneal"](obj.solicitudTejidoCorneal), obj.evn_lazy_solicitudTejidoCorneal, obj);
            // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.solicitudTejidoCorneal);
            obj.solicitudTejidoCornealChange.emit(aux);
            obj.solicitudTejidoCornealTablaChange.emit(aux);
            obj.accionesActualizar();
            //obj.desactivaTodos();
        }
    };
    SolicitudTejidoCornealCrudComponent.prototype.actualizarTipoCirugiaPrevistaBack = function (tipoCirugiaPrevista) {
        tipoCirugiaPrevista.usuarioUltMov = this.globalesService.dameUsuario();
        this.tipoCirugiaPrevista_services.actualizarTipoCirugiaPrevista(new _tipo_cirugia_previstas_shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_19__["TipoCirugiaPrevista"](tipoCirugiaPrevista), this.eventoSrvTipoCirugiaPrevistaActualizar, this);
    };
    SolicitudTejidoCornealCrudComponent.prototype.eventoSrvTipoCirugiaPrevistaActualizar = function (retorno, obj) {
        if (retorno) {
            /* bootbox.alert('Datos actualizados con éxito'); */
            var aux = new _tipo_cirugia_previstas_shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_19__["TipoCirugiaPrevista"]();
            // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.tipoCirugiaPrevistaLazy = false;
            obj.tipoCirugiaPrevista_services.lazyTipoCirugiaPrevista(new _tipo_cirugia_previstas_shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_19__["TipoCirugiaPrevista"](obj.tipoCirugiaPrevista), obj.evn_lazy_tipoCirugiaPrevista, obj);
            // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.tipoCirugiaPrevista);
            obj.tipoCirugiaPrevistaChange.emit(aux);
            obj.tipoCirugiaPrevistaTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    };
    SolicitudTejidoCornealCrudComponent.prototype.eliminarSolicitudTejidoCornealFront = function (form) {
        this.accion = 4;
        this.eliminarSolicitudTejidoCornealBack(this.solicitudTejidoCorneal);
        this.permisosacciones();
        this.accionesBuscar();
    };
    SolicitudTejidoCornealCrudComponent.prototype.eliminarSolicitudTejidoCornealBack = function (solicitudTejidoCorneal) {
        solicitudTejidoCorneal.usuarioUltMov = this.globalesService.dameUsuario();
        this.solicitudTejidoCorneal_service.eliminarSolicitudTejidoCorneal(new _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCorneal"](solicitudTejidoCorneal), this.eventoSrvSolicitudTejidoCornealEliminar, this);
    };
    SolicitudTejidoCornealCrudComponent.prototype.eventoSrvSolicitudTejidoCornealEliminar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert('Datos eliminados con éxito');
            obj.solicitudTejidoCorneal = new _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCorneal"]();
            obj.solicitudTejidoCornealChange.emit(obj.solicitudTejidoCorneal);
            obj.solicitudTejidoCornealTablaChange.emit(obj.solicitudTejidoCorneal);
            obj.limpiarCampos();
        }
    };
    SolicitudTejidoCornealCrudComponent.prototype.cancelarSolicitudTejidoCornealFront = function (form) {
        this.accion = 6;
        this.solicitudTejidoCornealCancelar = this.solicitudTejidoCornealGuardar = this.solicitudTejidoCornealActualizar = this.solicitudTejidoCornealEliminar = false;
        this.solicitudTejidoCornealBuscar = this.solicitudTejidoCornealAgregar = true;
        this.permisosacciones();
    };
    SolicitudTejidoCornealCrudComponent.prototype.nuevoSolicitudTejidoCornealFront = function (form) {
        this.accion = 2;
        bootbox.confirm({
            message: '¿Deseas limpiar los campos de ingreso?',
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
                this.solicitudTejidoCornealSeleccion = this.solicitudTejidoCornealAgregar = this.solicitudTejidoCornealBuscar = this.solicitudTejidoCornealActualizar = this.solicitudTejidoCornealEliminar = false;
                this.solicitudTejidoCornealGuardar = this.solicitudTejidoCornealCancelar = true;
            }.bind(this)
        });
    };
    SolicitudTejidoCornealCrudComponent.prototype.configuarCombosObjetos = function () {
        this.lista_usuarioUltMovSolicitudTejidoCornealUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovSolicitudTejidoCornealUsuario, this);
        this.lista_iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante = [];
        this.doctorSolicitante_service.getDoctorSolicitantesActivos(this.evtGetIddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante, this);
        this.lista_idhospitalSolicitudTejidoCornealHospital = [];
        this.hospital_service.getHospitalesActivos(this.evtGetIdhospitalSolicitudTejidoCornealHospital, this);
    };
    SolicitudTejidoCornealCrudComponent.prototype.configurarTablasConjuntos = function () { };
    SolicitudTejidoCornealCrudComponent.prototype.accionesActualizar = function () {
        this.accion = 7;
        this.solicitudTejidoCornealBuscar = this.solicitudTejidoCornealAgregar = this.solicitudTejidoCornealSeleccion = this.solicitudTejidoCornealGuardar = false;
        this.solicitudTejidoCornealActualizar = this.solicitudTejidoCornealEliminar = this.solicitudTejidoCornealCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    };
    SolicitudTejidoCornealCrudComponent.prototype.evtSolicitudTejidoCornealSeleccionado = function (solicitudTejidoCorneal) {
        this.solicitudTejidoCorneal = new _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCorneal"]();
        this.solicitudTejidoCorneal.from(solicitudTejidoCorneal);
        this.solicitudTejidoCornealLazy = false;
        this.solicitudTejidoCorneal_service.lazySolicitudTejidoCorneal(new _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCorneal"](this.solicitudTejidoCorneal), this.evn_lazy_solicitudTejidoCorneal, this);
        this.accion = 7;
        this.solicitudTejidoCornealBuscar = this.solicitudTejidoCornealAgregar = this.solicitudTejidoCornealSeleccion = this.solicitudTejidoCornealGuardar = false;
        this.solicitudTejidoCornealActualizar = this.solicitudTejidoCornealEliminar = this.solicitudTejidoCornealCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $('#buscarSolicitudTejidoCorneal_' + this.nombre).modal('hide');
    };
    SolicitudTejidoCornealCrudComponent.prototype.ngOnInit = function () {
        this.accion = 0; // *********************************************************************************************************** maquina
        this.solicitudTejidoCornealSeleccion = this.solicitudTejidoCornealCancelar = this.solicitudTejidoCornealGuardar = this.solicitudTejidoCornealActualizar = this.solicitudTejidoCornealEliminar = false; // ******************** maquina
        this.solicitudTejidoCornealBuscar = this.solicitudTejidoCornealAgregar = true; // ************************************************************************************* maquina
        this.permisosacciones();
        var id = this.route.snapshot.paramMap.get('id');
        this.buscaIdParametro(id);
        (id);
    };
    SolicitudTejidoCornealCrudComponent.prototype.buscaIdParametro = function (id) {
        if (id != null) {
            this.solicitudTejidoCorneal.id = id;
            this.solicitudTejidoCornealLazy = false;
            this.solicitudTejidoCorneal_service.lazySolicitudTejidoCorneal(new _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCorneal"](this.solicitudTejidoCorneal), this.evn_lazy_solicitudTejidoCorneal, this);
            this.tipoCirugiaPrevista_services.getTipoCirugiaPrevistaByIdSolicitudTejidoCorneal(id, this.eventoSrvTipoCirugiaPrevistaGuardar, this);
        }
    };
    SolicitudTejidoCornealCrudComponent.prototype.permisosacciones = function () {
        if (this.solicitudTejidoCornealBuscar)
            this.solicitudTejidoCornealBuscar = this.globalesService.pbuscar(this, 'solicitudTejidoCorneal');
        if (this.solicitudTejidoCornealActualizar)
            this.solicitudTejidoCornealActualizar =
                this.globalesService.pacutalizar(this, 'solicitudTejidoCorneal') &&
                    this.globalesService.pbuscar(this, 'solicitudTejidoCorneal');
        if (this.solicitudTejidoCornealEliminar)
            this.solicitudTejidoCornealEliminar =
                this.globalesService.peliminar(this, 'solicitudTejidoCorneal') &&
                    this.globalesService.pbuscar(this, 'solicitudTejidoCorneal');
        if (this.solicitudTejidoCornealAgregar)
            this.solicitudTejidoCornealAgregar = this.globalesService.pagregar(this, 'solicitudTejidoCorneal');
    };
    SolicitudTejidoCornealCrudComponent.prototype.permisosaccionesInicio = function () {
        this.solicitudTejidoCornealSeleccion = this.solicitudTejidoCornealCancelar = this.solicitudTejidoCornealGuardar = this.solicitudTejidoCornealActualizar = this.solicitudTejidoCornealEliminar = false; // *************************** maquina
        this.solicitudTejidoCornealBuscar = this.solicitudTejidoCornealAgregar = true; // ************************************************************************************* maquina
        this.accion = 0; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    SolicitudTejidoCornealCrudComponent.prototype.limpiarCampos = function () {
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                this.obtenerPermisos();
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
            }
        }
        this.solicitudTejidoCorneal = new _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCorneal"]();
        this.tipoCirugiaPrevista = new _tipo_cirugia_previstas_shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_19__["TipoCirugiaPrevista"]();
        this.usuarioUltMovSolicitudTejidoCornealUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_8__["Usuario"]();
        this.iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitanteEleccion = new _doctor_solicitantes_shared_doctor_solicitante__WEBPACK_IMPORTED_MODULE_16__["DoctorSolicitante"]();
        this.idhospitalSolicitudTejidoCornealHospitalEleccion = new _hospitales_shared_hospital__WEBPACK_IMPORTED_MODULE_13__["Hospital"]();
        this.solicitudTejidoCornealChange.emit(this.solicitudTejidoCorneal);
        this.solicitudTejidoCornealSeleccion = this.solicitudTejidoCornealCancelar = this.solicitudTejidoCornealGuardar = this.solicitudTejidoCornealActualizar = this.solicitudTejidoCornealEliminar = false; // *************************** maquina
        this.solicitudTejidoCornealBuscar = this.solicitudTejidoCornealAgregar = true; // ************************************************************************************* maquina
        this.accion = 6; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    SolicitudTejidoCornealCrudComponent.prototype.imprimirSolicitudTejido = function () {
        if (this.solicitudTejidoCorneal && this.solicitudTejidoCorneal.id != null) {
            var path = 'file/reporteSolicitud';
            var otros = 'ReporteSolicitudTejido';
            var parametros = { id: this.solicitudTejidoCorneal.id };
            var nombre = 'ReporteSolicitud.pdf';
            this.fileservice.downloadFile(nombre, otros, path, parametros);
        }
    };
    SolicitudTejidoCornealCrudComponent.prototype.desactivaTodos = function () {
        ("permisosAtributos: " + this.permisosAtributos);
        for (var ind = 0; ind < this.permisosAtributos.length; ind++) {
            ("permisosAtributos.length: " + this.permisosAtributos.length);
            ("this.permisosAtributos[ind].permiso 1: " + this.permisosAtributos[ind].permiso);
            this.permisosAtributos[ind].permiso = this.permisosAtributos[ind].permiso & 14;
            ("this.permisosAtributos[ind].permiso 2: " + this.permisosAtributos[ind].permiso);
        }
    };
    Object.defineProperty(SolicitudTejidoCornealCrudComponent.prototype, "descActivar", {
        get: function () {
            //("Campos Activos");
            return (this.solicitudTejidoCorneal.estatusProceso != null &&
                this.solicitudTejidoCorneal.estatusProceso == 2);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolicitudTejidoCornealCrudComponent.prototype, "descActivarHosp", {
        get: function () {
            //("Campo Activo Hospital");
            return (this.solicitudTejidoCorneal.estatusProceso != null &&
                (this.solicitudTejidoCorneal.estatusProceso == 1 || this.solicitudTejidoCorneal.estatusProceso == 2));
        },
        enumerable: true,
        configurable: true
    });
    SolicitudTejidoCornealCrudComponent.prototype.nuevo = function () {
        var id = this.route.snapshot.paramMap.get("id");
        if (id) {
            this.router.navigateByUrl('solicitud-tejido-corneal-crud');
        }
        else {
            this.limpiarCampos();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealCrudComponent.prototype, "idEntrada", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], SolicitudTejidoCornealCrudComponent.prototype, "ocultarConjuntosSolicitudTejidoCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], SolicitudTejidoCornealCrudComponent.prototype, "nombre", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], SolicitudTejidoCornealCrudComponent.prototype, "validaciones", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealCrudComponent.prototype, "validacionesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCorneal"])
    ], SolicitudTejidoCornealCrudComponent.prototype, "solicitudTejidoCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealCrudComponent.prototype, "solicitudTejidoCornealChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealCrudComponent.prototype, "solicitudTejidoCornealTablaChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _tipo_cirugia_previstas_shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_19__["TipoCirugiaPrevista"])
    ], SolicitudTejidoCornealCrudComponent.prototype, "tipoCirugiaPrevista", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealCrudComponent.prototype, "tipoCirugiaPrevistaChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealCrudComponent.prototype, "tipoCirugiaPrevistaTablaChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Number)
    ], SolicitudTejidoCornealCrudComponent.prototype, "otracheck", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], SolicitudTejidoCornealCrudComponent.prototype, "isDisabled", void 0);
    SolicitudTejidoCornealCrudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-solicitud-tejido-corneal-crud',
            template: __webpack_require__(/*! ./solicitud-tejido-corneal-crud.component.html */ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-crud/solicitud-tejido-corneal-crud.component.html"),
            styles: [__webpack_require__(/*! ./solicitud-tejido-corneal-crud.component.css */ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-crud/solicitud-tejido-corneal-crud.component.css")],
            providers: [
                _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"],
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_file_service__WEBPACK_IMPORTED_MODULE_4__["FileService"],
                _shared_solicitud_tejido_corneal_service__WEBPACK_IMPORTED_MODULE_6__["SolicitudTejidoCornealService"],
                _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioService"],
                _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_14__["EntidadFederativaService"],
                _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_11__["PerfilRedIsssteService"],
                _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_12__["HospitalService"],
                _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_10__["UsuarioBtcService"],
                _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_15__["PerfilService"],
                _doctor_solicitantes_shared_doctor_solicitante_service__WEBPACK_IMPORTED_MODULE_17__["DoctorSolicitanteService"],
                _catalogo_cargos_shared_catalogo_cargo_service__WEBPACK_IMPORTED_MODULE_18__["CatalogoCargoService"],
                _tipo_cirugia_previstas_shared_tipo_cirugia_prevista_service__WEBPACK_IMPORTED_MODULE_20__["TipoCirugiaPrevistaService"],
                _solicitud_tejido_corneal_recepciones_shared_solicitud_tejido_corneal_recepcion_service__WEBPACK_IMPORTED_MODULE_22__["SolicitudTejidoCornealRecepcionService"]
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _shared_file_service__WEBPACK_IMPORTED_MODULE_4__["FileService"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"],
            _shared_solicitud_tejido_corneal_service__WEBPACK_IMPORTED_MODULE_6__["SolicitudTejidoCornealService"],
            _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioService"],
            _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_10__["UsuarioBtcService"],
            _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_11__["PerfilRedIsssteService"],
            _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_12__["HospitalService"],
            _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_14__["EntidadFederativaService"],
            _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_15__["PerfilService"],
            _doctor_solicitantes_shared_doctor_solicitante_service__WEBPACK_IMPORTED_MODULE_17__["DoctorSolicitanteService"],
            _catalogo_cargos_shared_catalogo_cargo_service__WEBPACK_IMPORTED_MODULE_18__["CatalogoCargoService"],
            _tipo_cirugia_previstas_shared_tipo_cirugia_prevista_service__WEBPACK_IMPORTED_MODULE_20__["TipoCirugiaPrevistaService"],
            _solicitud_tejido_corneal_recepciones_shared_solicitud_tejido_corneal_recepcion_service__WEBPACK_IMPORTED_MODULE_22__["SolicitudTejidoCornealRecepcionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], SolicitudTejidoCornealCrudComponent);
    return SolicitudTejidoCornealCrudComponent;
}());



/***/ }),

/***/ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-list-kendo/solicitud-tejido-corneal-list-kendo.component.css":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-list-kendo/solicitud-tejido-corneal-list-kendo.component.css ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Tipos para solicitudTejidoCorneal-list-kendo*/\nh3 { text-transform: uppercase;} \n"

/***/ }),

/***/ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-list-kendo/solicitud-tejido-corneal-list-kendo.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-list-kendo/solicitud-tejido-corneal-list-kendo.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!usuariologueado\" >\n    <div class=\"card\">\n        <div align=\"center\" class=\"card-header\"><h3>{{configuracionSolicitudTejidoCorneal.titulo}}</h3></div>\n        <div class=\"card-body\">\n            <div id=\"div_solicitudTejidoCorneal_{{nombregrid}}\">\n                <div id=\"grid_solicitudTejidoCorneal_{{nombregrid}}\"></div>\n            </div>\n        </div>\t\t\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-list-kendo/solicitud-tejido-corneal-list-kendo.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-list-kendo/solicitud-tejido-corneal-list-kendo.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: SolicitudTejidoCornealListKendoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudTejidoCornealListKendoComponent", function() { return SolicitudTejidoCornealListKendoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/solicitud-tejido-corneal */ "./src/app/solicitud-tejido-corneales/shared/solicitud-tejido-corneal.ts");
/* harmony import */ var _shared_configurar_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/configurar-solicitud-tejido-corneal */ "./src/app/solicitud-tejido-corneales/shared/configurar-solicitud-tejido-corneal.ts");
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
var SolicitudTejidoCornealListKendoComponent = /** @class */ (function () {
    function SolicitudTejidoCornealListKendoComponent(urlprovider, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    globalesService) {
        this.urlprovider = urlprovider;
        this.coreService = coreService;
        this.globalesService = globalesService;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "", "permiso": 0, "etiqueta": "" };
        this.solicitudTejidoCornealSeleccionado = new _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_3__["SolicitudTejidoCorneal"]();
        this.configuracionSolicitudTejidoCorneal = new _shared_configurar_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_4__["ConfigurarSolicitudTejidoCorneal"]();
        this.nombregrid = "";
        this.evtSolicitudTejidoCornealSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "solicitudTejidoCorneal";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'solicitudTejidoCorneal'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'solicitudTejidoCorneal'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }
    SolicitudTejidoCornealListKendoComponent.prototype.actualizaTituloInicial = function () {
        if (this.configuracionSolicitudTejidoCorneal.titulo.indexOf("Catálogo") != -1) {
            this.configuracionSolicitudTejidoCorneal.titulo = "Catálogo " + this.permisosTabla.etiqueta;
        }
    };
    SolicitudTejidoCornealListKendoComponent.prototype.ngOnChanges = function (changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionSolicitudTejidoCorneal && changes.configuracionSolicitudTejidoCorneal.currentValue &&
            (changes.configuracionSolicitudTejidoCorneal.previousValue instanceof _shared_configurar_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_4__["ConfigurarSolicitudTejidoCorneal"])) {
            if (changes.configuracionSolicitudTejidoCorneal.currentValue.permisosAtributos)
                this.permisosAtributos = changes.configuracionSolicitudTejidoCorneal.currentValue.permisosAtributos;
            if (changes.configuracionSolicitudTejidoCorneal.currentValue.permisosTabla)
                this.permisosTabla = changes.configuracionSolicitudTejidoCorneal.currentValue.permisosTabla;
            if ($("#grid_solicitudTejidoCorneal_" + this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    };
    SolicitudTejidoCornealListKendoComponent.prototype.ngOnInit = function () {
        self["grid_solicitudTejidoCorneal_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var ejecutarpermisos = true;
        if (this.configuracionSolicitudTejidoCorneal.permisosAtributos &&
            this.configuracionSolicitudTejidoCorneal.permisosTabla)
            ejecutarpermisos = false;
        if (this.usuariologueado && ejecutarpermisos) {
            if (this.usuariologueado.perfil) {
                var tablas = [
                    "solicitudTejidoCorneal",
                ];
                var parametros = {
                    "id_usu": this.usuariologueado.id,
                    "tablas": tablas,
                    "id_exp": -1
                };
                this.coreService.permisos(parametros, this.evtCorePermisos, this);
                //                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                //                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'SolicitudTejidoCorneal'";
                //                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'SolicitudTejidoCorneal'";
                //                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'SolicitudTejidoCorneal'";
                //                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
                //                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
                //                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
            }
        }
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        if (this.configuracionSolicitudTejidoCorneal.permisosAtributos)
            this.permisosAtributos = this.configuracionSolicitudTejidoCorneal.permisosAtributos;
        if (this.configuracionSolicitudTejidoCorneal.permisosTabla)
            this.permisosTabla = this.configuracionSolicitudTejidoCorneal.permisosTabla;
        this.configuraGrid();
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    SolicitudTejidoCornealListKendoComponent.prototype.evtCorePermisos = function (permisos, obj) {
        if (permisos && permisos.solicitudTejidoCorneal && permisos.solicitudTejidoCorneal.PermisoAtributo && permisos.solicitudTejidoCorneal.PermisoAtributo.length > 0
            && !obj.configuracionSolicitudTejidoCorneal.permisosAtributos) {
            obj.globalesService.evtAtributos(permisos.solicitudTejidoCorneal.PermisoAtributo, obj);
            //            obj.permisosAtributos = permisos.SolicitudTejidoCorneal.PermisoAtributo ;
        }
        if (permisos && permisos.solicitudTejidoCorneal && permisos.solicitudTejidoCorneal.PermisoTabla && permisos.solicitudTejidoCorneal.PermisoTabla.length > 0
            && !obj.configuracionSolicitudTejidoCorneal.permisosTabla) {
            obj.globalesService.evtTablas(permisos.solicitudTejidoCorneal.PermisoTabla, obj);
            //            obj.permisosTabla = permisos.SolicitudTejidoCorneal.PermisoTabla[0] ;
            //            obj.permisosaccionesInicio();
        }
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    SolicitudTejidoCornealListKendoComponent.prototype.configuraGrid = function () {
        var _this = this;
        if ($("#grid_solicitudTejidoCorneal_" + this.nombregrid).data("kendoGrid")) {
        }
        else {
            setTimeout(function () {
                _this.inicializaGrid();
                _this.configuraGrid();
            }, 300);
        }
    };
    SolicitudTejidoCornealListKendoComponent.prototype.sourcegrid = function () {
        function completar(e) {
            (e);
        }
        ;
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        if (this.configuracionSolicitudTejidoCorneal.campoAgEl != null
            && this.configuracionSolicitudTejidoCorneal.solicitudTejidoCornealConsulta
            && this.configuracionSolicitudTejidoCorneal.solicitudTejidoCornealConsulta.isOk
            && !this.configuracionSolicitudTejidoCorneal.solicitudTejidoCornealConsulta.isOk())
            return;
        if (this.configuracionSolicitudTejidoCorneal.solicitudTejidoCornealConsulta) {
            if (!this.configuracionSolicitudTejidoCorneal.campoAgEl && this.configuracionSolicitudTejidoCorneal.solicitudTejidoCornealConsulta instanceof _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_3__["SolicitudTejidoCorneal"])
                this.configuracionSolicitudTejidoCorneal.rutaLista = this.crudServiceBaseUrl + "/getSolicitudTejidoCornealesByDto";
            this.lista = this.configuracionSolicitudTejidoCorneal.lecturaP(completar, this.configuracionSolicitudTejidoCorneal.solicitudTejidoCornealConsulta);
            if (this.configuracionSolicitudTejidoCorneal.campoAgEl) {
                this.rutaAgregar = this.configuracionSolicitudTejidoCorneal.agregarP(function () { }, this.configuracionSolicitudTejidoCorneal.campoAgEl);
                this.rutaEliminar = this.configuracionSolicitudTejidoCorneal.eliminarP(function () { }, this.configuracionSolicitudTejidoCorneal.campoAgEl);
            }
            else {
                this.rutaAgregar = this.configuracionSolicitudTejidoCorneal.agregarP(completar, this.configuracionSolicitudTejidoCorneal.solicitudTejidoCornealConsulta);
                this.rutaEliminar = this.configuracionSolicitudTejidoCorneal.eliminarP(completar, this.configuracionSolicitudTejidoCorneal.solicitudTejidoCornealConsulta);
            }
        }
        else {
            this.lista = this.configuracionSolicitudTejidoCorneal.lectura();
            this.rutaAgregar = this.configuracionSolicitudTejidoCorneal.agregar();
            this.rutaEliminar = this.configuracionSolicitudTejidoCorneal.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "id")) {
            modelo["id"] = "id";
        }
        var campos = {};
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "id")) {
            campos["id"] = { editable: false, nullable: true, type: "number" };
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "folioSolicitudTejidoCorneal")) {
            campos["folioSolicitudTejidoCorneal"] = { editable: this.globalesService.aenable(this, "solicitudTejidoCorneal", "folioSolicitudTejidoCorneal"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "nombreReceptor")) {
            campos["nombreReceptor"] = { editable: this.globalesService.aenable(this, "solicitudTejidoCorneal", "nombreReceptor"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "primerApellidoReceptor")) {
            campos["primerApellidoReceptor"] = { editable: this.globalesService.aenable(this, "solicitudTejidoCorneal", "primerApellidoReceptor"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "segundoApellidoReceptor")) {
            campos["segundoApellidoReceptor"] = { editable: this.globalesService.aenable(this, "solicitudTejidoCorneal", "segundoApellidoReceptor"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "edadReceptor")) {
            campos["edadReceptor"] = { editable: this.globalesService.aenable(this, "solicitudTejidoCorneal", "edadReceptor"), nullable: true };
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "numeroExpedienteReceptor")) {
            campos["numeroExpedienteReceptor"] = { editable: this.globalesService.aenable(this, "solicitudTejidoCorneal", "numeroExpedienteReceptor"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "sexoReceptor")) {
            campos["sexoReceptor"] = { editable: this.globalesService.aenable(this, "solicitudTejidoCorneal", "sexoReceptor"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "diagnostico")) {
            campos["diagnostico"] = { editable: this.globalesService.aenable(this, "solicitudTejidoCorneal", "diagnostico"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "fechaTentativaCirugia")) {
            campos["fechaTentativaCirugia"] = { editable: this.globalesService.aenable(this, "solicitudTejidoCorneal", "fechaTentativaCirugia"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "corneaSolicitada")) {
            campos["corneaSolicitada"] = { editable: this.globalesService.aenable(this, "solicitudTejidoCorneal", "corneaSolicitada"), nullable: true };
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "caracteristicaCornea")) {
            campos["caracteristicaCornea"] = { editable: this.globalesService.aenable(this, "solicitudTejidoCorneal", "caracteristicaCornea"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "fechaRegistro")) {
            campos["fechaRegistro"] = { editable: this.globalesService.aenable(this, "solicitudTejidoCorneal", "fechaRegistro"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "fechaActualizacion")) {
            campos["fechaActualizacion"] = { editable: this.globalesService.aenable(this, "solicitudTejidoCorneal", "fechaActualizacion"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "fechaBaja")) {
            campos["fechaBaja"] = { editable: this.globalesService.aenable(this, "solicitudTejidoCorneal", "fechaBaja"), nullable: true, type: "date" };
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "idhospital")) {
            campos["idhospital"] = { editable: this.globalesService.aenable(this, "solicitudTejidoCorneal", "idhospital"), nullable: true, type: "object", defaultValue: { "id": "", "fechaBaja": "" } };
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "iddoctorResponsableSolicitud")) {
            campos["iddoctorResponsableSolicitud"] = { editable: this.globalesService.aenable(this, "solicitudTejidoCorneal", "iddoctorResponsableSolicitud"), nullable: true, type: "object", defaultValue: { "id": "", "fechaBaja": "" } };
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "estatusProceso")) {
            campos["estatusProceso"] = { editable: this.globalesService.aenable(this, "solicitudTejidoCorneal", "estatusProceso"), nullable: true };
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this, "solicitudTejidoCorneal", "usuarioUltMov"), nullable: true, type: "object", defaultValue: { "id": "", "password": "" } };
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this, "solicitudTejidoCorneal", "status"), nullable: true, type: "string", defaultValue: "1" };
        }
        modelo["fields"] = campos;
        var slf = this;
        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionSolicitudTejidoCorneal.rutaActualizar,
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
                        if (elem.fechaTentativaCirugia && typeof elem.fechaTentativaCirugia === "number") {
                            elem.fechaTentativaCirugia = kendo.parseDate(new Date(elem.fechaTentativaCirugia), "yyyy-MM-ddTHH:mm:ss.fffZ");
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
            if (self.configuracionSolicitudTejidoCorneal.campoAgEl) {
                if (self.configuracionSolicitudTejidoCorneal.tipocampoAgEl == "SolicitudTejidoCornealSolicitudTejidoCorneal")
                    self.configuracionSolicitudTejidoCorneal.campoAgEl.solicitudTejidoCorneal2 = options.models[0];
                else
                    self.configuracionSolicitudTejidoCorneal.campoAgEl.solicitudTejidoCorneal = options.models[0];
                return JSON.stringify(self.configuracionSolicitudTejidoCorneal.campoAgEl);
            }
            else if (est.options[operation].data.models.solicitudTejidoCorneal) {
                est.options[operation].data.models.solicitudTejidoCorneal2 = options.models[0];
                return JSON.stringify(est.options[operation].data.models);
            }
            return JSON.stringify(options.models[0]);
        }
    };
    SolicitudTejidoCornealListKendoComponent.prototype.inicializaGrid = function () {
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        this.sourcegrid();
        var columnas = [];
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this, "solicitudTejidoCorneal", "id"), editor: this.globalesService.txtNumero });
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "folioSolicitudTejidoCorneal")) {
            columnas.push({ field: "folioSolicitudTejidoCorneal", title: this.globalesService.aetiqueta(this, "solicitudTejidoCorneal", "folioSolicitudTejidoCorneal"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "nombreReceptor")) {
            columnas.push({ field: "nombreReceptor", title: this.globalesService.aetiqueta(this, "solicitudTejidoCorneal", "nombreReceptor"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "primerApellidoReceptor")) {
            columnas.push({ field: "primerApellidoReceptor", title: this.globalesService.aetiqueta(this, "solicitudTejidoCorneal", "primerApellidoReceptor"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "segundoApellidoReceptor")) {
            columnas.push({ field: "segundoApellidoReceptor", title: this.globalesService.aetiqueta(this, "solicitudTejidoCorneal", "segundoApellidoReceptor"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "edadReceptor")) {
            columnas.push({ field: "edadReceptor", title: this.globalesService.aetiqueta(this, "solicitudTejidoCorneal", "edadReceptor") });
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "numeroExpedienteReceptor")) {
            columnas.push({ field: "numeroExpedienteReceptor", title: this.globalesService.aetiqueta(this, "solicitudTejidoCorneal", "numeroExpedienteReceptor"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "sexoReceptor")) {
            columnas.push({ field: "sexoReceptor", title: this.globalesService.aetiqueta(this, "solicitudTejidoCorneal", "sexoReceptor"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "diagnostico")) {
            columnas.push({ field: "diagnostico", title: this.globalesService.aetiqueta(this, "solicitudTejidoCorneal", "diagnostico"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "fechaTentativaCirugia")) {
            columnas.push({ field: "fechaTentativaCirugia", title: this.globalesService.aetiqueta(this, "solicitudTejidoCorneal", "fechaTentativaCirugia"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "corneaSolicitada")) {
            columnas.push({ field: "corneaSolicitada", title: this.globalesService.aetiqueta(this, "solicitudTejidoCorneal", "corneaSolicitada") });
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "caracteristicaCornea")) {
            columnas.push({ field: "caracteristicaCornea", title: this.globalesService.aetiqueta(this, "solicitudTejidoCorneal", "caracteristicaCornea"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "fechaRegistro")) {
            columnas.push({ field: "fechaRegistro", title: this.globalesService.aetiqueta(this, "solicitudTejidoCorneal", "fechaRegistro"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "fechaActualizacion")) {
            columnas.push({ field: "fechaActualizacion", title: this.globalesService.aetiqueta(this, "solicitudTejidoCorneal", "fechaActualizacion"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "fechaBaja")) {
            columnas.push({ field: "fechaBaja", title: this.globalesService.aetiqueta(this, "solicitudTejidoCorneal", "fechaBaja"), type: "date",
                editor: this.globalesService.fechacomponente, format: "{0:MM/dd/yyyy h:mm:ss tt}" });
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "idhospital")) {
            columnas.push({ field: "idhospital", title: this.globalesService.aetiqueta(this, "solicitudTejidoCorneal", "idhospital"), editor: idhospitalDropDownEditor, template: " #if (idhospital){#   #=idhospital.fechaBaja# # } # " });
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "iddoctorResponsableSolicitud")) {
            columnas.push({ field: "iddoctorResponsableSolicitud", title: this.globalesService.aetiqueta(this, "solicitudTejidoCorneal", "iddoctorResponsableSolicitud"), editor: iddoctorResponsableSolicitudDropDownEditor, template: " #if (iddoctorResponsableSolicitud){#   #=iddoctorResponsableSolicitud.fechaBaja# # } # " });
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "estatusProceso")) {
            columnas.push({ field: "estatusProceso", title: this.globalesService.aetiqueta(this, "solicitudTejidoCorneal", "estatusProceso") });
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this, "solicitudTejidoCorneal", "usuarioUltMov"), editor: usuarioUltMovDropDownEditor, template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # " });
        }
        if (this.globalesService.avisible(this, "solicitudTejidoCorneal", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this, "solicitudTejidoCorneal", "status"), editor: this.globalesService.estadoDropDownEditor,
                template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this, "solicitudTejidoCorneal"))
            op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this, "solicitudTejidoCorneal")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this, "solicitudTejidoCorneal")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this, "solicitudTejidoCorneal") && this.configuracionSolicitudTejidoCorneal.solicitudTejidoCornealConsulta != null) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid)
            $("#grid_solicitudTejidoCorneal_" + this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_solicitudTejidoCorneal_" + this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionSolicitudTejidoCorneal.altoComponente,
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
        this.grid = $("#grid_solicitudTejidoCorneal_" + this.nombregrid).data("kendoGrid");
        this.grid.refresh();
        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
        var rutaiddoctorResponsableSolicitud = this.urlprovider.serverURL + "doctorSolicitante/getDoctorSolicitantesActivos";
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
        function iddoctorResponsableSolicitudDropDownEditor(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                autoBind: false,
                dataTextField: "nombre",
                dataValueField: "id",
                filter: "contains",
                minLength: 5, dataSource: {
                    transport: {
                        read: {
                            url: rutaiddoctorResponsableSolicitud,
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
    SolicitudTejidoCornealListKendoComponent.prototype.showDetails = function (e) {
        e.preventDefault();
        //        this.grid = $("#grid_solicitudTejidoCorneal_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        var gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.solicitudTejidoCornealSeleccionado = new _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_3__["SolicitudTejidoCorneal"]();
        gridac.solicitudTejidoCornealSeleccionado.from(dataItem);
        gridac.evtSolicitudTejidoCornealSeleccionado.emit(gridac.solicitudTejidoCornealSeleccionado);
        (gridac.solicitudTejidoCornealSeleccionado);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_configurar_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_4__["ConfigurarSolicitudTejidoCorneal"])
    ], SolicitudTejidoCornealListKendoComponent.prototype, "configuracionSolicitudTejidoCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SolicitudTejidoCornealListKendoComponent.prototype, "nombregrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("solicitudTejidoCornealSeleccionado"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SolicitudTejidoCornealListKendoComponent.prototype, "evtSolicitudTejidoCornealSeleccionado", void 0);
    SolicitudTejidoCornealListKendoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solicitud-tejido-corneal-list-kendo',
            template: __webpack_require__(/*! ./solicitud-tejido-corneal-list-kendo.component.html */ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-list-kendo/solicitud-tejido-corneal-list-kendo.component.html"),
            styles: [__webpack_require__(/*! ./solicitud-tejido-corneal-list-kendo.component.css */ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-list-kendo/solicitud-tejido-corneal-list-kendo.component.css")],
            providers: [
                //             PermisoTablaService,
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_url_provider__WEBPACK_IMPORTED_MODULE_1__["URLProvider"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"]])
    ], SolicitudTejidoCornealListKendoComponent);
    return SolicitudTejidoCornealListKendoComponent;
}());



/***/ }),

/***/ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: SolicitudTejidoCornealRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudTejidoCornealRoutingModule", function() { return SolicitudTejidoCornealRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _solicitud_tejido_corneales_solicitud_tejido_corneal_list_kendo_solicitud_tejido_corneal_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../solicitud-tejido-corneales/solicitud-tejido-corneal-list-kendo/solicitud-tejido-corneal-list-kendo.component */ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-list-kendo/solicitud-tejido-corneal-list-kendo.component.ts");
/* harmony import */ var _solicitud_tejido_corneales_solicitud_tejido_corneal_crud_solicitud_tejido_corneal_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../solicitud-tejido-corneales/solicitud-tejido-corneal-crud/solicitud-tejido-corneal-crud.component */ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-crud/solicitud-tejido-corneal-crud.component.ts");
/* harmony import */ var _solicitud_tejido_corneales_solicitud_tejido_corneal_table_bandeja_solicitud_tejido_corneal_table_bandeja_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../solicitud-tejido-corneales/solicitud-tejido-corneal-table-bandeja/solicitud-tejido-corneal-table-bandeja.component */ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-table-bandeja/solicitud-tejido-corneal-table-bandeja.component.ts");
/* harmony import */ var _solicitud_tejido_corneales_solicitud_tejido_corneal_table_solicitud_tejido_corneal_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../solicitud-tejido-corneales/solicitud-tejido-corneal-table/solicitud-tejido-corneal-table.component */ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-table/solicitud-tejido-corneal-table.component.ts");
/* harmony import */ var _solicitud_tejido_corneales_detalle_tejido_corneal_detalle_tejido_corneal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../solicitud-tejido-corneales/detalle-tejido-corneal/detalle-tejido-corneal.component */ "./src/app/solicitud-tejido-corneales/detalle-tejido-corneal/detalle-tejido-corneal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'solicitud-tejido-corneal-list-kendo', component: _solicitud_tejido_corneales_solicitud_tejido_corneal_list_kendo_solicitud_tejido_corneal_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__["SolicitudTejidoCornealListKendoComponent"] },
    { path: 'solicitud-tejido-corneal-crud/:id', component: _solicitud_tejido_corneales_solicitud_tejido_corneal_crud_solicitud_tejido_corneal_crud_component__WEBPACK_IMPORTED_MODULE_3__["SolicitudTejidoCornealCrudComponent"] },
    { path: 'solicitud-tejido-corneal-crud', component: _solicitud_tejido_corneales_solicitud_tejido_corneal_crud_solicitud_tejido_corneal_crud_component__WEBPACK_IMPORTED_MODULE_3__["SolicitudTejidoCornealCrudComponent"] },
    { path: 'solicitud-tejido-corneal-table-bandeja', component: _solicitud_tejido_corneales_solicitud_tejido_corneal_table_bandeja_solicitud_tejido_corneal_table_bandeja_component__WEBPACK_IMPORTED_MODULE_4__["SolicitudTejidoCornealTableBandejaComponent"] },
    { path: 'solicitud-tejido-corneal-table', component: _solicitud_tejido_corneales_solicitud_tejido_corneal_table_solicitud_tejido_corneal_table_component__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCornealTableComponent"] },
    { path: 'detalle-tejido-corneal/:id', component: _solicitud_tejido_corneales_detalle_tejido_corneal_detalle_tejido_corneal_component__WEBPACK_IMPORTED_MODULE_6__["DetalleTejidoCornealComponent"] },
];
var SolicitudTejidoCornealRoutingModule = /** @class */ (function () {
    function SolicitudTejidoCornealRoutingModule() {
    }
    SolicitudTejidoCornealRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SolicitudTejidoCornealRoutingModule);
    return SolicitudTejidoCornealRoutingModule;
}());



/***/ }),

/***/ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-table-bandeja/solicitud-tejido-corneal-table-bandeja.component.css":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-table-bandeja/solicitud-tejido-corneal-table-bandeja.component.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-table-bandeja/solicitud-tejido-corneal-table-bandeja.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-table-bandeja/solicitud-tejido-corneal-table-bandeja.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"usuariologueado\" >\n<div class=\"card\">\n<div class=\"card-header\"><h1>Busqueda {{permisosTabla?.etiqueta}}</h1></div>\n<div class=\"card-body\">\n<div class=\"container-fluid\" >    \n\n<table *ngIf=\"muestraTabla\" id=\"tabla_solicitudTejidoCorneal\" class=\"table \" cellspacing=\"0\" width=\"100%\">\n    <thead>\n        <tr>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','id')\" >{{aetiqueta('solicitudTejidoCorneal','id')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','folioSolicitudTejidoCorneal')\" >{{aetiqueta('solicitudTejidoCorneal','folioSolicitudTejidoCorneal')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','nombreReceptor')\" >{{aetiqueta('solicitudTejidoCorneal','nombreReceptor')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','primerApellidoReceptor')\" >{{aetiqueta('solicitudTejidoCorneal','primerApellidoReceptor')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','segundoApellidoReceptor')\" >{{aetiqueta('solicitudTejidoCorneal','segundoApellidoReceptor')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','edadReceptor')\" >{{aetiqueta('solicitudTejidoCorneal','edadReceptor')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','numeroExpedienteReceptor')\" >{{aetiqueta('solicitudTejidoCorneal','numeroExpedienteReceptor')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','sexoReceptor')\" >{{aetiqueta('solicitudTejidoCorneal','sexoReceptor')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','diagnostico')\" >{{aetiqueta('solicitudTejidoCorneal','diagnostico')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','fechaTentativaCirugia')\" >{{aetiqueta('solicitudTejidoCorneal','fechaTentativaCirugia')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','corneaSolicitada')\" >{{aetiqueta('solicitudTejidoCorneal','corneaSolicitada')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','caracteristicaCornea')\" >{{aetiqueta('solicitudTejidoCorneal','caracteristicaCornea')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','fechaRegistro')\" >{{aetiqueta('solicitudTejidoCorneal','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','fechaActualizacion')\" >{{aetiqueta('solicitudTejidoCorneal','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','fechaBaja')\" >{{aetiqueta('solicitudTejidoCorneal','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','idhospital')\" >{{aetiqueta('solicitudTejidoCorneal','idhospital')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','iddoctorResponsableSolicitud')\" >{{aetiqueta('solicitudTejidoCorneal','iddoctorResponsableSolicitud')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','estatusProceso')\" >{{aetiqueta('solicitudTejidoCorneal','estatusProceso')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','usuarioUltMov')\" >{{aetiqueta('solicitudTejidoCorneal','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','status')\" >{{aetiqueta('solicitudTejidoCorneal','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </thead>\n    <tfoot>\n        <tr>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','id')\" >{{aetiqueta('solicitudTejidoCorneal','id')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','folioSolicitudTejidoCorneal')\" >{{aetiqueta('solicitudTejidoCorneal','folioSolicitudTejidoCorneal')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','nombreReceptor')\" >{{aetiqueta('solicitudTejidoCorneal','nombreReceptor')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','primerApellidoReceptor')\" >{{aetiqueta('solicitudTejidoCorneal','primerApellidoReceptor')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','segundoApellidoReceptor')\" >{{aetiqueta('solicitudTejidoCorneal','segundoApellidoReceptor')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','edadReceptor')\" >{{aetiqueta('solicitudTejidoCorneal','edadReceptor')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','numeroExpedienteReceptor')\" >{{aetiqueta('solicitudTejidoCorneal','numeroExpedienteReceptor')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','sexoReceptor')\" >{{aetiqueta('solicitudTejidoCorneal','sexoReceptor')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','diagnostico')\" >{{aetiqueta('solicitudTejidoCorneal','diagnostico')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','fechaTentativaCirugia')\" >{{aetiqueta('solicitudTejidoCorneal','fechaTentativaCirugia')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','corneaSolicitada')\" >{{aetiqueta('solicitudTejidoCorneal','corneaSolicitada')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','caracteristicaCornea')\" >{{aetiqueta('solicitudTejidoCorneal','caracteristicaCornea')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','fechaRegistro')\" >{{aetiqueta('solicitudTejidoCorneal','fechaRegistro')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','fechaActualizacion')\" >{{aetiqueta('solicitudTejidoCorneal','fechaActualizacion')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','fechaBaja')\" >{{aetiqueta('solicitudTejidoCorneal','fechaBaja')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','idhospital')\" >{{aetiqueta('solicitudTejidoCorneal','idhospital')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','iddoctorResponsableSolicitud')\" >{{aetiqueta('solicitudTejidoCorneal','iddoctorResponsableSolicitud')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','estatusProceso')\" >{{aetiqueta('solicitudTejidoCorneal','estatusProceso')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','usuarioUltMov')\" >{{aetiqueta('solicitudTejidoCorneal','usuarioUltMov')}}</th>\n            <th [class.hidden]=\"!avisible('solicitudTejidoCorneal','status')\" >{{aetiqueta('solicitudTejidoCorneal','status')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </tfoot>\n</table>\n</div>\n<!--app-solicitud-tejido-corneal [class.hidden]=\"primero\" [(solicitudTejidoCorneal)]=\"solicitudTejidoCornealSeleccionado\" (solicitudTejidoCornealTablaChange)=\"cambio_solicitudTejidoCorneal($event)\"> </app-solicitud-tejido-corneal-->    \n</div>\n</div>\n</div>\n\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-table-bandeja/solicitud-tejido-corneal-table-bandeja.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-table-bandeja/solicitud-tejido-corneal-table-bandeja.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: SolicitudTejidoCornealTableBandejaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudTejidoCornealTableBandejaComponent", function() { return SolicitudTejidoCornealTableBandejaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/solicitud-tejido-corneal */ "./src/app/solicitud-tejido-corneales/shared/solicitud-tejido-corneal.ts");
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






var SolicitudTejidoCornealTableBandejaComponent = /** @class */ (function () {
    function SolicitudTejidoCornealTableBandejaComponent(globalesService, permisoAtributoService, permisoTablaService, urlProvider) {
        this.globalesService = globalesService;
        this.permisoAtributoService = permisoAtributoService;
        this.permisoTablaService = permisoTablaService;
        this.urlProvider = urlProvider;
        this.primero = true;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "solicitudTejidoCorneal", "permiso": 0, "etiqueta": "" };
        this.ptabla = false;
        this.pattr = false;
        this.solicitudTejidoCornealSeleccionado = new _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCorneal"]();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                discon = "with perfil.id = " + this.usuariologueado.perfil.id;
                var cadena2 = "select pa from PermisoTabla as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'solicitudTejidoCorneal'";
                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
            }
        }
    }
    SolicitudTejidoCornealTableBandejaComponent.prototype.evtTablas = function (lista, obj) {
        if (lista.length >= 0) {
            obj.permisosTabla = lista[0];
            obj.ptabla = true;
            var discon = "with perfil.id = " + obj.usuariologueado.perfil.id;
            var cadena1 = "select pa from PermisoAtributo as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'solicitudTejidoCorneal'";
            obj.permisoAtributoService.custom(cadena1, obj.evtAtributos, obj);
        }
    };
    SolicitudTejidoCornealTableBandejaComponent.prototype.evtAtributos = function (lista, obj) {
        obj.permisosAtributos = lista;
        obj.pattr = true;
        if (obj.ptabla && obj.pattr) {
            setTimeout(function () { obj.getColumnas(obj); }, 500);
        }
    };
    Object.defineProperty(SolicitudTejidoCornealTableBandejaComponent.prototype, "muestraTabla", {
        get: function () {
            return this.ptabla && this.pattr;
        },
        enumerable: true,
        configurable: true
    });
    SolicitudTejidoCornealTableBandejaComponent.prototype.getColumnas = function (obj) {
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        if (!this.avisible("solicitudTejidoCorneal", "id"))
            columnasNoVisibles.push(0);
        columnas.push({ "data": "id" });
        if (!this.avisible("solicitudTejidoCorneal", "folioSolicitudTejidoCorneal"))
            columnasNoVisibles.push(1);
        columnas.push({ "data": "folioSolicitudTejidoCorneal" });
        if (!this.avisible("solicitudTejidoCorneal", "nombreReceptor"))
            columnasNoVisibles.push(2);
        columnas.push({ "data": "nombreReceptor" });
        if (!this.avisible("solicitudTejidoCorneal", "primerApellidoReceptor"))
            columnasNoVisibles.push(3);
        columnas.push({ "data": "primerApellidoReceptor" });
        if (!this.avisible("solicitudTejidoCorneal", "segundoApellidoReceptor"))
            columnasNoVisibles.push(4);
        columnas.push({ "data": "segundoApellidoReceptor" });
        if (!this.avisible("solicitudTejidoCorneal", "edadReceptor"))
            columnasNoVisibles.push(5);
        columnas.push({ "data": "edadReceptor" });
        if (!this.avisible("solicitudTejidoCorneal", "numeroExpedienteReceptor"))
            columnasNoVisibles.push(6);
        columnas.push({ "data": "numeroExpedienteReceptor" });
        if (!this.avisible("solicitudTejidoCorneal", "sexoReceptor"))
            columnasNoVisibles.push(7);
        columnas.push({ "data": "sexoReceptor" });
        if (!this.avisible("solicitudTejidoCorneal", "diagnostico"))
            columnasNoVisibles.push(8);
        columnas.push({ "data": "diagnostico" });
        if (!this.avisible("solicitudTejidoCorneal", "fechaTentativaCirugia"))
            columnasNoVisibles.push(9);
        columnas.push({ "data": "fechaTentativaCirugia" });
        if (!this.avisible("solicitudTejidoCorneal", "corneaSolicitada"))
            columnasNoVisibles.push(10);
        columnas.push({ "data": "corneaSolicitada" });
        if (!this.avisible("solicitudTejidoCorneal", "caracteristicaCornea"))
            columnasNoVisibles.push(11);
        columnas.push({ "data": "caracteristicaCornea" });
        if (!this.avisible("solicitudTejidoCorneal", "fechaRegistro"))
            columnasNoVisibles.push(12);
        columnas.push({ "data": "fechaRegistro" });
        if (!this.avisible("solicitudTejidoCorneal", "fechaActualizacion"))
            columnasNoVisibles.push(13);
        columnas.push({ "data": "fechaActualizacion" });
        if (!this.avisible("solicitudTejidoCorneal", "fechaBaja"))
            columnasNoVisibles.push(14);
        columnas.push({ "data": "fechaBaja" });
        if (!this.avisible("solicitudTejidoCorneal", "idhospital"))
            columnasNoVisibles.push(15);
        columnas.push({
            "data": function (oObj) {
                if (oObj.idhospital)
                    return "<span style=\"cursor: pointer\">" + oObj.idhospital.redIssste + "</span>";
                return "";
            }
        });
        if (!this.avisible("solicitudTejidoCorneal", "iddoctorResponsableSolicitud"))
            columnasNoVisibles.push(16);
        columnas.push({
            "data": function (oObj) {
                if (oObj.iddoctorResponsableSolicitud)
                    return "<span style=\"cursor: pointer\">" + oObj.iddoctorResponsableSolicitud.nombre + "</span>";
                return "";
            }
        });
        if (!this.avisible("solicitudTejidoCorneal", "estatusProceso"))
            columnasNoVisibles.push(17);
        columnas.push({ "data": "estatusProceso" });
        if (!this.avisible("solicitudTejidoCorneal", "usuarioUltMov"))
            columnasNoVisibles.push(18);
        columnas.push({
            "data": function (oObj) {
                if (oObj.usuarioUltMov)
                    return "<span style=\"cursor: pointer\">" + oObj.usuarioUltMov.username + "</span>";
                return "";
            }
        });
        if (!this.avisible("solicitudTejidoCorneal", "status"))
            columnasNoVisibles.push(19);
        columnas.push({ "data": "status" });
        if (self.pacutalizar("solicitudTejidoCorneal"))
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
        var tabla = $('#tabla_solicitudTejidoCorneal').DataTable({
            "columnDefs": novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            "initComplete": function (settings, json) {
                var xs = $("#tabla_solicitudTejidoCorneal_wrapper").find(".row");
                $($(xs[0]).find(".col-sm-6")[0]).
                    find(".dataTables_length").
                    append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function () {
                    self.solicitudTejidoCornealSeleccionado = new _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCorneal"]();
                    self.primero = false;
                });
            },
            "ajax": {
                "url": self.urlProvider.serverURL + "solicitudTejidoCorneal/getSolicitudTejidoCorneales",
                "type": "POST",
                "contentType": "application/json",
                "datatype": 'json',
                "dataSrc": "",
            },
            "columns": columnas,
        });
        $('#tabla_solicitudTejidoCorneal tbody').on('click', 'td', function () {
            if (this.cellIndex == $(this).parent().find("td").length - 1) {
                var data = $('#tabla_solicitudTejidoCorneal').DataTable().row(this).data();
                self.solicitudTejidoCornealSeleccionado = new _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCorneal"]();
                self.solicitudTejidoCornealSeleccionado.from(data);
                self.primero = false;
                if ($(this).parent().hasClass('selected')) {
                    $(this).parent().removeClass('selected');
                }
                else {
                    $('#tabla_solicitudTejidoCorneal').DataTable().$('tr.selected').removeClass('selected');
                    $(this).parent().addClass('selected');
                }
            }
        });
    };
    SolicitudTejidoCornealTableBandejaComponent.prototype.ngOnInit = function () {
    };
    SolicitudTejidoCornealTableBandejaComponent.prototype.cambio_solicitudTejidoCorneal = function (solicitudTejidoCorneal) {
        $('#tabla_solicitudTejidoCorneal').DataTable().ajax.reload(null, false);
        this.primero = true;
    };
    // **********************************************************************************
    // **********************************************************************************
    // **           I N I C I A N   P E R M I S O S   P A R A   P E R F I L E S
    // **********************************************************************************
    // **********************************************************************************
    SolicitudTejidoCornealTableBandejaComponent.prototype.paux = function (tabla, permiso) {
        if (this.permisosTabla.tabla == tabla && (this.permisosTabla.permiso & permiso) == permiso)
            return true;
        return false;
    };
    SolicitudTejidoCornealTableBandejaComponent.prototype.preporteWord = function (tabla) { return this.paux(tabla, 64); };
    SolicitudTejidoCornealTableBandejaComponent.prototype.preporteExcel = function (tabla) { return this.paux(tabla, 32); };
    SolicitudTejidoCornealTableBandejaComponent.prototype.preportePdf = function (tabla) { return this.paux(tabla, 16); };
    SolicitudTejidoCornealTableBandejaComponent.prototype.pbuscar = function (tabla) { return this.paux(tabla, 8); };
    SolicitudTejidoCornealTableBandejaComponent.prototype.pacutalizar = function (tabla) { return this.paux(tabla, 4); };
    SolicitudTejidoCornealTableBandejaComponent.prototype.peliminar = function (tabla) { return this.paux(tabla, 2); };
    SolicitudTejidoCornealTableBandejaComponent.prototype.pagregar = function (tabla) { return this.paux(tabla, 1); };
    //******************************************************************************************
    //*******  P E R M I S O S   S O B R E   A T R I B U T O S  ********************************
    //******************************************************************************************
    SolicitudTejidoCornealTableBandejaComponent.prototype.aetiqueta = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo)
                return elemento.etiqueta;
        }
        return "";
    };
    SolicitudTejidoCornealTableBandejaComponent.prototype.avalidacion = function (tabla, atributo) {
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
    SolicitudTejidoCornealTableBandejaComponent.prototype.amensaje = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo) {
                return elemento.mensaje;
            }
        }
        return null;
    };
    SolicitudTejidoCornealTableBandejaComponent.prototype.aeditable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 8) == 8)
                return true;
        }
        return false;
    };
    SolicitudTejidoCornealTableBandejaComponent.prototype.arequerido = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 4) == 4)
                return true;
        }
        return false;
    };
    SolicitudTejidoCornealTableBandejaComponent.prototype.avisible = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 2) == 2)
                return true;
        }
        return false;
    };
    SolicitudTejidoCornealTableBandejaComponent.prototype.aenable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 1) == 1)
                return true;
        }
        return false;
    };
    SolicitudTejidoCornealTableBandejaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solicitud-tejido-corneal-table-bandeja',
            template: __webpack_require__(/*! ./solicitud-tejido-corneal-table-bandeja.component.html */ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-table-bandeja/solicitud-tejido-corneal-table-bandeja.component.html"),
            styles: [__webpack_require__(/*! ./solicitud-tejido-corneal-table-bandeja.component.css */ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-table-bandeja/solicitud-tejido-corneal-table-bandeja.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
                _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
                _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
            _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
            _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            _shared_url_provider__WEBPACK_IMPORTED_MODULE_3__["URLProvider"]])
    ], SolicitudTejidoCornealTableBandejaComponent);
    return SolicitudTejidoCornealTableBandejaComponent;
}());



/***/ }),

/***/ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-table/solicitud-tejido-corneal-table.component.css":
/*!************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-table/solicitud-tejido-corneal-table.component.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-table/solicitud-tejido-corneal-table.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-table/solicitud-tejido-corneal-table.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"usuariologueado\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h2>CONSULTA DE SOLICITUDES DE TEJIDO CORNEAL</h2>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"col-lg-5\">\n                        <app-componente-cadena [componente]=\"'solicitudTejidoCorneal'\" [atributo]=\"'folio'\" [permisosAtributos]=\"permisosBusquedas\" [(valido)]=\"validos.folio\" [(dato)]=\"datosBusqueda.folio\" class=\"w-100\">\n                        </app-componente-cadena>\n                    </div>\n                    <div class=\"col-lg-5\">\n                        <app-componente-cadena [componente]=\"'solicitudTejidoCorneal'\" [atributo]=\"'numExpediente'\" [permisosAtributos]=\"permisosBusquedas\" [(valido)]=\"validos.numExp\" [(dato)]=\"datosBusqueda.numExpediente\" class=\"w-100\">\n                        </app-componente-cadena>\n                    </div>\n                </div>\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-md-5\">\n                        <label class=\"control-label\">Fecha Inicio:</label>\n                        <kendo-datepicker class=\"form-control\" name=\"fechaInicio\" [(ngModel)]=\"fechaInicio\">\n                            <kendo-datepicker-messages today=\"Hoy\"></kendo-datepicker-messages>\n                        </kendo-datepicker>\n                    </div>\n                    <div class=\"col-md-5\">\n                        <label class=\"control-label\">Fecha Fin:</label>\n                        <kendo-datepicker class=\"form-control\" name=\"fechaFin\" [(ngModel)]=\"fechaFin\">\n                            <kendo-datepicker-messages today=\"Hoy\"></kendo-datepicker-messages>\n                        </kendo-datepicker>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <button class=\"btn btn-primary\" id=\"buscar\" (click)=\"llena(datosBusqueda, fechaInicio, fechaFin)\">Buscar</button>\n                    </div>\n                </div>\n\n                <div>\n                    <table id=\"tabla_solicitudTejidoCorneal\" class=\"table \" cellspacing=\"0\" width=\"100%\">\n                        <thead>\n                            <tr>\n                                <th>Id Folio</th>\n                                <!--th>Id</th-->\n                                <th>Folio Solicitud</th>\n                                <th>Hospital Solicitante</th>\n                                <th>Nombre</th>\n                                <th>Primer Apellido</th>\n                                <th>N° Expediente</th>\n                                <th>Detalle</th>\n                                <th>Editar</th>\n                                <th>Borrar</th>\n                            </tr>\n                        </thead>\n                        <!-- <tfoot>\n                            <tr>\n                                <th>Id Folio</th>\n                                <th>Id</th>\n                                <th>Folio Solicitud</th>\n                                <th>Hospital</th>\n                                <th>Nombre</th>\n                                <th>Primer Apellido</th>\n                                <th>N° Expediente</th>\n                                <th>Detalle</th>\n                                <th>Editar</th>\n                                <th>Borrar</th>\n                            </tr>\n                        </tfoot> -->\n                    </table>\n                </div>\n            </div>\n            <!--app-solicitud-tejido-corneal [class.hidden]=\"primero\" [(solicitudTejidoCorneal)]=\"solicitudTejidoCornealSeleccionado\" (solicitudTejidoCornealTablaChange)=\"cambio_solicitudTejidoCorneal($event)\"> </app-solicitud-tejido-corneal-->\n        </div>\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n\n<div id=\"myModal\" class=\"modal fade \" role=\"dialog\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n            <div class=\"modal-body\">\n                <app-detalle-tejido-corneal [id]=\"idSeleccionado\"></app-detalle-tejido-corneal>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-table/solicitud-tejido-corneal-table.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-table/solicitud-tejido-corneal-table.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: SolicitudTejidoCornealTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudTejidoCornealTableComponent", function() { return SolicitudTejidoCornealTableComponent; });
/* harmony import */ var _shared_solicitud_tejido_corneal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/solicitud-tejido-corneal.service */ "./src/app/solicitud-tejido-corneales/shared/solicitud-tejido-corneal.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/solicitud-tejido-corneal */ "./src/app/solicitud-tejido-corneales/shared/solicitud-tejido-corneal.ts");
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








var SolicitudTejidoCornealTableComponent = /** @class */ (function () {
    function SolicitudTejidoCornealTableComponent(globalesService, permisoAtributoService, permisoTablaService, urlProvider, solicitudTejidoCornealService, router) {
        this.globalesService = globalesService;
        this.permisoAtributoService = permisoAtributoService;
        this.permisoTablaService = permisoTablaService;
        this.urlProvider = urlProvider;
        this.solicitudTejidoCornealService = solicitudTejidoCornealService;
        this.router = router;
        this.primero = true;
        this.permisosAtributos = [];
        this.permisosTabla = { tabla: 'solicitudTejidoCorneal', permiso: 0, etiqueta: '' };
        this.ptabla = false;
        this.pattr = false;
        this.validos = {
            folio: true,
            numExp: true,
            fechai: true,
            fechaf: true
        };
        this.datosBusqueda = {
            folio: '',
            numExpediente: '',
            fechaInicio: new Date(),
            fechaFin: new Date()
        };
        this.permisosBusquedas = [
            {
                etiqueta: 'Folio de Solicitud  de Tejido Corneal',
                validacion: null,
                permiso: 3,
                tabla: 'solicitudTejidoCorneal',
                atributo: 'folio'
            },
            {
                etiqueta: 'Número de Expediente',
                permiso: 3,
                tabla: 'solicitudTejidoCorneal',
                atributo: 'numExpediente',
                validacion: null,
            },
            {
                etiqueta: 'Fecha Inicio',
                validacion: null,
                permiso: 3,
                tabla: 'solicitudTejidoCorneal',
                atributo: 'fechaInicio'
            },
            {
                etiqueta: 'Fecha Fin',
                validacion: null,
                permiso: 3,
                tabla: 'solicitudTejidoCorneal',
                atributo: 'fechaFin'
            }
        ];
        //this.url = this.urlProvider;
        this.solicitudTejidoCornealSeleccionado = new _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_2__["SolicitudTejidoCorneal"]();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        this.getColumnas(this);
    }
    SolicitudTejidoCornealTableComponent.prototype.getColumnas = function (obj) {
        if ($('#tabla_solicitudTejidoCorneal').length == 0) {
            setTimeout(function () {
                obj.getColumnas(obj);
            }, 500);
        }
        var dato = {};
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        columnasNoVisibles.push(0);
        columnas.push({ data: 'idSolicitud' });
        columnasNoVisibles.push({ data: 'idHospitalSolicitante' });
        columnas.push({ data: "folioSolicitud" });
        columnas.push({ data: "hospitalSolicitante" });
        columnas.push({ data: "nombre" });
        columnas.push({ data: "apellido1" });
        columnas.push({ data: "numExpReceptor" });
        columnas.push({
            data: function (oObj) {
                return "<div style='  text-align: center;' ><span style=\"cursor: pointer\"> <img src=\"assets/imagenes/svg/binocular.svg\" alt=\"Detalle\"  style=\"width: 30px;\" /> </span></div>";
            }
        });
        columnas.push({
            data: function (oObj) {
                return "<div style='  text-align: center;' ><span class=\"glyphicon glyphicon-edit\"  style=\"cursor: pointer\"></span></div>";
            }
        });
        columnas.push({
            data: function (oObj) {
                return "<div style='  text-align: center;' ><span class=\"glyphicon glyphicon-trash\"  style=\"cursor: pointer\"></span> </div>";
            }
        });
        columnasNoVisibles.push({ data: 'estatusProceso' });
        var novisibles;
        novisibles = [
            {
                targets: columnasNoVisibles,
                visible: false,
                searchable: false
            }
        ];
        $.fn.dataTableExt.sErrMode = "none";
        var tabla = $("#tabla_solicitudTejidoCorneal").DataTable({
            columnDefs: novisibles,
            language: {
                url: "assets/Spanish.json"
            },
            columns: columnas
        });
        this.llena(null, null, null);
        $('#tabla_solicitudTejidoCorneal tbody').on('click', 'td', function (evt) {
            if (evt.currentTarget.cellIndex == $(evt.currentTarget).parent().find('td').length - 3) {
                var data = $('#tabla_solicitudTejidoCorneal')
                    .DataTable()
                    .row(evt.currentTarget)
                    .data();
                this.detalle(data);
            }
            if (evt.currentTarget.cellIndex == $(evt.currentTarget).parent().find('td').length - 2) {
                var data = $('#tabla_solicitudTejidoCorneal')
                    .DataTable()
                    .row(evt.currentTarget)
                    .data();
                this.editar(data);
            }
            if (evt.currentTarget.cellIndex == $(evt.currentTarget).parent().find('td').length - 1) {
                var data = $('#tabla_solicitudTejidoCorneal')
                    .DataTable()
                    .row(evt.currentTarget)
                    .data();
                this.borrar(data);
            }
        }.bind(this));
    };
    SolicitudTejidoCornealTableComponent.prototype.detalle = function (dato) {
        this.idSeleccionado = dato.idSolicitud;
        $('#myModal').modal('show');
    };
    SolicitudTejidoCornealTableComponent.prototype.editar = function (dato) {
        bootbox.dialog({
            title: 'Mensaje de confirmación de edición',
            message: '¿Desea editar la Solicitud?',
            size: 'large',
            onEscape: true,
            backdrop: true,
            buttons: {
                se: {
                    label: 'Aceptar',
                    className: 'btn-primary',
                    callback: function () {
                        if (dato.estatusProceso != "2") {
                            this.globalesService.registraIdSolicitudTejido(dato.idSolicitud);
                            this.router.navigateByUrl('/solicitud-tejido-corneal-crud/' + dato.idSolicitud);
                        }
                        else {
                            bootbox.alert('El registro no se puede editar porque ya está en recepción');
                        }
                    }.bind(this)
                },
                cn: {
                    label: 'Cancelar',
                    className: 'btn-default',
                }
            }
        });
    };
    SolicitudTejidoCornealTableComponent.prototype.borrar = function (dato) {
        if (dato) {
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
                            id: dato.idSolicitud,
                            baja: true
                        };
                        if (dato.estatusProceso != "2") {
                            this.solicitudTejidoCornealService.bajaSolicitudesTejidoByID(envio, this.evtBorrar, this);
                        }
                        else {
                            bootbox.alert('El registro no se puede eliminar porque ya está en recepción');
                            return;
                        }
                    }
                }.bind(this)
            });
        }
    };
    SolicitudTejidoCornealTableComponent.prototype.evtBorrar = function (bandera, obj) {
        if (bandera) {
            bootbox.alert('Datos eliminados con éxito');
            obj.llena({});
        }
    };
    SolicitudTejidoCornealTableComponent.prototype.ngOnInit = function () { };
    //******************************************************************************************
    //*******  P E R M I S O S   S O B R E   A T R I B U T O S  ********************************
    //******************************************************************************************
    // **********************************************************************************
    // **********************************************************************************
    SolicitudTejidoCornealTableComponent.prototype.cambio_solicitudTejidoCorneal = function (solicitudTejidoCorneal) {
        $('#tabla_solicitudTejidoCorneal')
            .DataTable()
            .ajax.reload(null, false);
        this.primero = true;
    };
    SolicitudTejidoCornealTableComponent.prototype.llena = function (dato, fechaInicio, fechaFin) {
        var datoenviar;
        if (dato) {
            datoenviar = Object.assign({}, dato);
        }
        else {
            datoenviar = {};
        }
        if (dato && fechaInicio) {
            datoenviar.fechaInicio = fechaInicio.getTime();
        }
        else {
            delete datoenviar.fechaInicio;
        }
        if (dato && fechaFin) {
            datoenviar.fechaFin = fechaFin.getTime();
        }
        else {
            delete datoenviar.fechaFin;
        }
        (datoenviar);
        var tabla = $('#tabla_solicitudTejidoCorneal').DataTable();
        tabla.clear().draw();
        $.ajax({
            url: this.urlProvider.serverURL + 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByConsulta',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                data.forEach(function (enty) {
                    var obj = {};
                    obj.idSolicitud = enty.idSolicitud;
                    obj.idHospitalSolicitante = enty.idHospitalSolicitante;
                    obj.folioSolicitud = enty.folioSolicitud;
                    obj.hospitalSolicitante = enty.hospitalSolicitante;
                    obj.nombre = enty.nombre;
                    obj.apellido1 = enty.apellido1;
                    obj.numExpReceptor = enty.numExpReceptor;
                    obj.estatusProceso = enty.estatusProceso;
                    tabla.row.add(obj).draw(false);
                });
            },
            data: JSON.stringify(datoenviar)
        });
    };
    SolicitudTejidoCornealTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-solicitud-tejido-corneal-table",
            template: __webpack_require__(/*! ./solicitud-tejido-corneal-table.component.html */ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-table/solicitud-tejido-corneal-table.component.html"),
            styles: [__webpack_require__(/*! ./solicitud-tejido-corneal-table.component.css */ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-table/solicitud-tejido-corneal-table.component.css")],
            providers: [
                _shared_globales_service__WEBPACK_IMPORTED_MODULE_3__["GlobalesService"],
                _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_5__["PermisoAtributoService"],
                _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_6__["PermisoTablaService"],
                _shared_solicitud_tejido_corneal_service__WEBPACK_IMPORTED_MODULE_0__["SolicitudTejidoCornealService"]
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_3__["GlobalesService"],
            _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_5__["PermisoAtributoService"],
            _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_6__["PermisoTablaService"],
            _shared_url_provider__WEBPACK_IMPORTED_MODULE_4__["URLProvider"],
            _shared_solicitud_tejido_corneal_service__WEBPACK_IMPORTED_MODULE_0__["SolicitudTejidoCornealService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], SolicitudTejidoCornealTableComponent);
    return SolicitudTejidoCornealTableComponent;
}());



/***/ }),

/***/ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SolicitudTejidoCornealModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudTejidoCornealModule", function() { return SolicitudTejidoCornealModule; });
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ "./node_modules/@progress/kendo-angular-dateinputs/dist/fesm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _solicitud_tejido_corneal_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./solicitud-tejido-corneal-routing.module */ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-routing.module.ts");
/* harmony import */ var _solicitud_tejido_corneal_list_kendo_solicitud_tejido_corneal_list_kendo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./solicitud-tejido-corneal-list-kendo/solicitud-tejido-corneal-list-kendo.component */ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-list-kendo/solicitud-tejido-corneal-list-kendo.component.ts");
/* harmony import */ var _solicitud_tejido_corneal_crud_solicitud_tejido_corneal_crud_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./solicitud-tejido-corneal-crud/solicitud-tejido-corneal-crud.component */ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-crud/solicitud-tejido-corneal-crud.component.ts");
/* harmony import */ var _solicitud_tejido_corneal_conjunto_solicitud_tejido_corneal_conjunto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./solicitud-tejido-corneal-conjunto/solicitud-tejido-corneal-conjunto.component */ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-conjunto/solicitud-tejido-corneal-conjunto.component.ts");
/* harmony import */ var _solicitud_tejido_corneal_solicitud_tejido_corneal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./solicitud-tejido-corneal/solicitud-tejido-corneal.component */ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal/solicitud-tejido-corneal.component.ts");
/* harmony import */ var _solicitud_tejido_corneal_table_bandeja_solicitud_tejido_corneal_table_bandeja_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./solicitud-tejido-corneal-table-bandeja/solicitud-tejido-corneal-table-bandeja.component */ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-table-bandeja/solicitud-tejido-corneal-table-bandeja.component.ts");
/* harmony import */ var _solicitud_tejido_corneal_table_solicitud_tejido_corneal_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./solicitud-tejido-corneal-table/solicitud-tejido-corneal-table.component */ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal-table/solicitud-tejido-corneal-table.component.ts");
/* harmony import */ var _solicitud_tejido_corneales_detalle_tejido_corneal_detalle_tejido_corneal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../solicitud-tejido-corneales/detalle-tejido-corneal/detalle-tejido-corneal.component */ "./src/app/solicitud-tejido-corneales/detalle-tejido-corneal/detalle-tejido-corneal.component.ts");
/* harmony import */ var _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/usuario-perfil.module */ "./src/app/shared/usuario-perfil.module.ts");
/* harmony import */ var _doctor_solicitantes_doctor_solicitante_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../doctor-solicitantes/doctor-solicitante.module */ "./src/app/doctor-solicitantes/doctor-solicitante.module.ts");
/* harmony import */ var _shared_entidad_federativa_usuario_usuario_btc_hospital_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/entidad-federativa-usuario-usuario-btc-hospital.module */ "./src/app/shared/entidad-federativa-usuario-usuario-btc-hospital.module.ts");
/* harmony import */ var _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/componentes-personalizados/personalizados.module */ "./src/app/core/componentes-personalizados/personalizados.module.ts");
/* harmony import */ var _tipo_cirugia_previstas_tipo_cirugia_prevista_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../tipo-cirugia-previstas/tipo-cirugia-prevista.module */ "./src/app/tipo-cirugia-previstas/tipo-cirugia-prevista.module.ts");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/dist/fesm5/index.js");
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


















var SolicitudTejidoCornealModule = /** @class */ (function () {
    function SolicitudTejidoCornealModule(parentModule) {
        if (parentModule) {
            throw new Error('SolicitudTejidoCornealModule is already loaded. Import it in the AppModule only');
        }
    }
    SolicitudTejidoCornealModule_1 = SolicitudTejidoCornealModule;
    SolicitudTejidoCornealModule.forRoot = function () {
        return {
            ngModule: SolicitudTejidoCornealModule_1,
            providers: []
        };
    };
    var SolicitudTejidoCornealModule_1;
    SolicitudTejidoCornealModule = SolicitudTejidoCornealModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_15__["PersonalizadosModule"], _solicitud_tejido_corneal_routing_module__WEBPACK_IMPORTED_MODULE_4__["SolicitudTejidoCornealRoutingModule"],
                _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_12__["UsuarioPerfilModule"].forRoot(),
                _doctor_solicitantes_doctor_solicitante_module__WEBPACK_IMPORTED_MODULE_13__["DoctorSolicitanteModule"],
                _shared_entidad_federativa_usuario_usuario_btc_hospital_module__WEBPACK_IMPORTED_MODULE_14__["EntidadFederativaUsuarioUsuarioBtcHospitalModule"].forRoot(),
                _tipo_cirugia_previstas_tipo_cirugia_prevista_module__WEBPACK_IMPORTED_MODULE_16__["TipoCirugiaPrevistaModule"],
                _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_0__["DateInputsModule"],
                _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_17__["InputsModule"]
            ],
            declarations: [
                _solicitud_tejido_corneal_list_kendo_solicitud_tejido_corneal_list_kendo_component__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCornealListKendoComponent"],
                _solicitud_tejido_corneal_solicitud_tejido_corneal_component__WEBPACK_IMPORTED_MODULE_8__["SolicitudTejidoCornealComponent"],
                _solicitud_tejido_corneal_crud_solicitud_tejido_corneal_crud_component__WEBPACK_IMPORTED_MODULE_6__["SolicitudTejidoCornealCrudComponent"],
                _solicitud_tejido_corneal_conjunto_solicitud_tejido_corneal_conjunto_component__WEBPACK_IMPORTED_MODULE_7__["SolicitudTejidoCornealConjuntoComponent"],
                _solicitud_tejido_corneal_table_bandeja_solicitud_tejido_corneal_table_bandeja_component__WEBPACK_IMPORTED_MODULE_9__["SolicitudTejidoCornealTableBandejaComponent"],
                _solicitud_tejido_corneal_table_solicitud_tejido_corneal_table_component__WEBPACK_IMPORTED_MODULE_10__["SolicitudTejidoCornealTableComponent"],
                _solicitud_tejido_corneales_detalle_tejido_corneal_detalle_tejido_corneal_component__WEBPACK_IMPORTED_MODULE_11__["DetalleTejidoCornealComponent"],
            ],
            exports: [
                _solicitud_tejido_corneal_list_kendo_solicitud_tejido_corneal_list_kendo_component__WEBPACK_IMPORTED_MODULE_5__["SolicitudTejidoCornealListKendoComponent"],
                _solicitud_tejido_corneal_solicitud_tejido_corneal_component__WEBPACK_IMPORTED_MODULE_8__["SolicitudTejidoCornealComponent"],
                _solicitud_tejido_corneal_crud_solicitud_tejido_corneal_crud_component__WEBPACK_IMPORTED_MODULE_6__["SolicitudTejidoCornealCrudComponent"],
                _solicitud_tejido_corneal_conjunto_solicitud_tejido_corneal_conjunto_component__WEBPACK_IMPORTED_MODULE_7__["SolicitudTejidoCornealConjuntoComponent"],
                _solicitud_tejido_corneal_table_bandeja_solicitud_tejido_corneal_table_bandeja_component__WEBPACK_IMPORTED_MODULE_9__["SolicitudTejidoCornealTableBandejaComponent"],
                _solicitud_tejido_corneal_table_solicitud_tejido_corneal_table_component__WEBPACK_IMPORTED_MODULE_10__["SolicitudTejidoCornealTableComponent"],
                _solicitud_tejido_corneales_detalle_tejido_corneal_detalle_tejido_corneal_component__WEBPACK_IMPORTED_MODULE_11__["DetalleTejidoCornealComponent"],
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        __metadata("design:paramtypes", [SolicitudTejidoCornealModule])
    ], SolicitudTejidoCornealModule);
    return SolicitudTejidoCornealModule;
}());



/***/ }),

/***/ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal/solicitud-tejido-corneal.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal/solicitud-tejido-corneal.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}\n"

/***/ }),

/***/ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal/solicitud-tejido-corneal.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal/solicitud-tejido-corneal.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [hidden]=\"!usuariologueado\" #formaGeneral=\"ngForm\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h1>SOLICITUD DE TEJIDO CORNEAL</h1>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <!--app-componente-identificador [componente]=\"'solicitudTejidoCorneal'\"\n                                                   [atributo]=\"'id'\"\n                                                   [buscar]=\"solicitudTejidoCornealBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosSolicitudTejidoCorneal['id']\"\n                                                   [(dato)]=\"solicitudTejidoCorneal.id\"   class=\"w-100\" >\n                    </app-componente-identificador -->\n          <div class=\"row\">\n            <div class=\"col-md-8 pull-right\">\n              <!--app-componente-cadena [componente]=\"'solicitudTejidoCorneal'\"\n                                                     [atributo]=\"'folioSolicitudTejidoCorneal'\"\n                                                     [buscar]=\"solicitudTejidoCornealBuscar\"\n                                                     [permisosAtributos]=\"permisosAtributos\"\n                                                     [(valido)]=\"validosSolicitudTejidoCorneal['folioSolicitudTejidoCorneal']\"\n                                                     [(dato)]=\"solicitudTejidoCorneal.folioSolicitudTejidoCorneal\"   class=\"w-100\" >\n                      </app-componente-cadena -->\n              <div class=\"form-group\">\n                <label for=\"folioSolicitudTejiCorneal\">Folio de Solicitud de Tejido Corneal:</label>\n                <input type=\"text\" readonly=\"\" [disabled]=\"desActivar\" name=\"folioSolicitudTejiCorneal\"\n                  id=\"folioSolicitudTejiCorneal\" class=\"form-control\"\n                  [(ngModel)]=\"this.solicitudTejidoCorneal.folioSolicitudTejidoCorneal\"\n                  placeholder=\"Folio de Solicitud de Tejido Corneal\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n\n            <div class=\"col-md-6\">\n              <!-- <app-componente-objeto [componente]=\"'solicitudTejidoCorneal'\" [atributo]=\"'idhospital'\" [buscar]=\"solicitudTejidoCornealBuscar\"\n                [permisosAtributos]=\"permisosAtributos\" [(valido)]=\"validosSolicitudTejidoCorneal['idhospital']\"\n                [(dato)]=\"solicitudTejidoCorneal.idhospital\" class=\"w-100\" [ocultarConjuntos]=\"ocultarConjuntos\"\n                [opciones]=\"lista_idhospitalSolicitudTejidoCornealHospital\" [atributoVisible]=\"'nombre'\"\n                [(objetoEdicion)]=\"idhospitalSolicitudTejidoCornealHospitalEditar\">\n              </app-componente-objeto> -->\n              <div class=\"form-group\">\n                <label for=\"id_hoispital\">Hospital Solicitante*:</label>\n                <select [disabled]=\"desActivarHosp\" id=\"solicitudTejidoCorneal.idhospital\"\n                  name=\"solicitudTejidoCorneal.idhospital\" class=\"form-control\"\n                  [(ngModel)]=\"this.solicitudTejidoCorneal.idhospital\" #solicitudTejidoCorneal.idhospital>\n                  <option *ngFor=\"let hospital of lista_idhospitalSolicitudTejidoCornealHospital\" [ngValue]=\"hospital\">\n                    {{hospital?.nombre}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"id_hoispital\">Estado*:</label>\n                <input type=\"text\" [disabled]=\"desActivar\" readonly=\"\" name=\"estado\" id=\"estado\" class=\"form-control\"\n                  [ngModel]=\"this.solicitudTejidoCorneal.idhospital?.identidadFederativa?.nombre\" placeholder=\"Estado\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <!-- <app-componente-objeto [componente]=\"'solicitudTejidoCorneal'\" [atributo]=\"'iddoctorResponsableSolicitud'\" [buscar]=\"solicitudTejidoCornealBuscar\"\n                [permisosAtributos]=\"permisosAtributos\" [(valido)]=\"validosSolicitudTejidoCorneal['iddoctorResponsableSolicitud']\"\n                [(dato)]=\"solicitudTejidoCorneal.iddoctorResponsableSolicitud\" class=\"w-100\" [ocultarConjuntos]=\"ocultarConjuntos\"\n                [opciones]=\"lista_iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante\" [atributoVisible]=\"'nombre'\"\n                [(objetoEdicion)]=\"iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitanteEditar\">\n              </app-componente-objeto> -->\n              <div class=\"form-group\">\n                <label for=\"id_hoispital\">Nombre del Oftalmólogo Responsable y/o Coordinador*:</label>\n                <select id=\"solicitudTejidoCorneal.iddoctorResponsableSolicitud\" [disabled]=\"desActivar\"\n                  name=\"solicitudTejidoCorneal.iddoctorResponsableSolicitud\" class=\"form-control\"\n                  [(ngModel)]=\"this.solicitudTejidoCorneal.iddoctorResponsableSolicitud\"\n                  #solicitudTejidoCorneal.iddoctorResponsableSolicitud>\n                  <option\n                    *ngFor=\"let doctor of lista_iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante\"\n                    [ngValue]=\"doctor\">{{doctor.nombre}} {{doctor.primerApellido}} {{doctor.segundoApellido}}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"telefono\">Teléfono*:</label>\n                <input type=\"text\" readonly=\"\" [disabled]=\"desActivar\" name=\"telefono\" id=\"telefono\"\n                  class=\"form-control\" [ngModel]=\"this.solicitudTejidoCorneal.iddoctorResponsableSolicitud?.telefono\"\n                  placeholder=\"Teléfono\"\n                  (ngModelChange)=\"this.solicitudTejidoCorneal.iddoctorResponsableSolicitud && this.solicitudTejidoCorneal.iddoctorResponsableSolicitud.telefono\">\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"correoElectronico\">Correo Electrónico*:</label>\n                <input type=\"text\" readonly=\"\" [disabled]=\"desActivar\" name=\"correoElectronico\" id=\"correoElectronico\"\n                  class=\"form-control\"\n                  [ngModel]=\"this.solicitudTejidoCorneal.iddoctorResponsableSolicitud?.correoElectronico\"\n                  placeholder=\"Correo Electrónico\"\n                  (ngModelChange)=\"this.solicitudTejidoCorneal.iddoctorResponsableSolicitud && this.solicitudTejidoCorneal.iddoctorResponsableSolicitud.correoElectronico\">\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <hr />\n              <h2>DATOS DEL RECEPTOR</h2>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              <app-componente-cadena [componente]=\"'solicitudTejidoCorneal'\" [atributo]=\"'nombreReceptor'\"\n                [buscar]=\"solicitudTejidoCornealBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                [(valido)]=\"validosSolicitudTejidoCorneal['nombreReceptor']\"\n                [(dato)]=\"solicitudTejidoCorneal.nombreReceptor\" [maxlength]=50 class=\"w-100\">\n              </app-componente-cadena>\n            </div>\n            <div class=\"col-md-4\">\n              <app-componente-cadena [componente]=\"'solicitudTejidoCorneal'\" [atributo]=\"'primerApellidoReceptor'\"\n                [buscar]=\"solicitudTejidoCornealBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                [(valido)]=\"validosSolicitudTejidoCorneal['primerApellidoReceptor']\"\n                [(dato)]=\"solicitudTejidoCorneal.primerApellidoReceptor\" [maxlength]=50 class=\"w-100\">\n              </app-componente-cadena>\n            </div>\n            <div class=\"col-md-4\">\n              <app-componente-cadena [componente]=\"'solicitudTejidoCorneal'\" [atributo]=\"'segundoApellidoReceptor'\"\n                [buscar]=\"solicitudTejidoCornealBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                [(valido)]=\"validosSolicitudTejidoCorneal['segundoApellidoReceptor']\"\n                [(dato)]=\"solicitudTejidoCorneal.segundoApellidoReceptor\" [maxlength]=50 class=\"w-100\">\n              </app-componente-cadena>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              <label class=\"control-label\">Edad*:</label>\n              <kendo-numerictextbox\n                 #edadComponent=\"ngModel\"\n                [format]=\"'n0'\"\n                [step]=\"1\"\n                [min]=\"0\"\n                [max]=\"80\"\n                [decimals]=\"1\"\n                [autoCorrect]=\"true\"\n                class=\"form-control\"\n                name=\"edad\"\n                [(ngModel)]=\"solicitudTejidoCorneal.edadReceptor\"\n              ></kendo-numerictextbox>\n              <!-- <app-componente-cadena [componente]=\"'solicitudTejidoCorneal'\" [atributo]=\"'edadReceptor'\"\n                [buscar]=\"solicitudTejidoCornealBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                [(valido)]=\"validosSolicitudTejidoCorneal['edadReceptor']\"\n                [(dato)]=\"solicitudTejidoCorneal.edadReceptor\" [maxlength]=2 class=\"w-100\">\n              </app-componente-cadena> -->\n            </div>\n            <div class=\"col-md-4\">\n              <app-componente-cadena [componente]=\"'solicitudTejidoCorneal'\" [atributo]=\"'numeroExpedienteReceptor'\"\n                [buscar]=\"solicitudTejidoCornealBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                [(valido)]=\"validosSolicitudTejidoCorneal['numeroExpedienteReceptor']\"\n                [(dato)]=\"solicitudTejidoCorneal.numeroExpedienteReceptor\" [maxlength]=50 class=\"w-100\">\n              </app-componente-cadena>\n            </div>\n            <div class=\"col-md-4\">\n              <!-- <app-componente-radio [componente]=\"'solicitudTejidoCorneal'\" [atributo]=\"'sexoReceptor'\"\n                [buscar]=\"solicitudTejidoCornealBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                [(valido)]=\"validosSolicitudTejidoCorneal['sexoReceptor']\"\n                [(dato)]=\"solicitudTejidoCorneal.sexoReceptor\" class=\"w-100\">\n              </app-componente-radio> -->\n              <div class=\"form-group\">\n                <label>Sexo<span class=\"form-text\">*</span>:</label>\n                <div>\n                  <label class=\"radio-inline\">\n                    <input id=\"sexoReceptor\" type=\"radio\" [disabled]=\"desActivar\" name=\"sexoReceptor\" value=\"2\"\n                      [(ngModel)]=\"this.solicitudTejidoCorneal.sexoReceptor\"> Femenino\n                  </label>\n                  <label class=\"radio-inline\">\n                    <input id=\"sexoReceptor\" type=\"radio\" [disabled]=\"desActivar\" name=\"sexoReceptor\" value=\"1\"\n                      [(ngModel)]=\"this.solicitudTejidoCorneal.sexoReceptor\"> Masculino\n                  </label>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <app-componente-cadena-larga [componente]=\"'solicitudTejidoCorneal'\" [atributo]=\"'diagnostico'\"\n                [buscar]=\"solicitudTejidoCornealBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                [(valido)]=\"validosSolicitudTejidoCorneal['diagnostico']\" [(dato)]=\"solicitudTejidoCorneal.diagnostico\"\n                [maxlength]=255 class=\"w-100\">\n              </app-componente-cadena-larga>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <app-tipo-cirugia-prevista-crud\n                [desactiva]=\"(solicitudTejidoCorneal.estatusProceso != null  && solicitudTejidoCorneal.estatusProceso == 2 )\"\n                [(tipoCirugiaPrevista)]=\"tipoCirugiaPrevista\" [etiquetaGeneral]=\"'Tipo de Cirugias Previstas'\"\n                [otracheck]=\"otracheck\" [isDisabled]=\"isDisabled\">\n              </app-tipo-cirugia-prevista-crud>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <app-componente-fecha [componente]=\"'solicitudTejidoCorneal'\" [atributo]=\"'fechaTentativaCirugia'\"\n                [buscar]=\"solicitudTejidoCornealBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                [(valido)]=\"validosSolicitudTejidoCorneal['fechaTentativaCirugia']\"\n                [(dato)]=\"solicitudTejidoCorneal.fechaTentativaCirugia\" class=\"w-100\">\n              </app-componente-fecha>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-8\">\n              <!-- <app-componente-radio [componente]=\"'solicitudTejidoCorneal'\" [atributo]=\"'corneaSolicitada'\"\n                [buscar]=\"solicitudTejidoCornealBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                [(valido)]=\"validosSolicitudTejidoCorneal['corneaSolicitada']\"\n                [(dato)]=\"solicitudTejidoCorneal.corneaSolicitada\" class=\"w-100\">\n              </app-componente-radio> -->\n              <div class=\"form-group\">\n                <label>Córnea Solicitada<span class=\"form-text\">*</span>:</label>\n                <div>\n                  <label class=\"radio-inline\">\n                    <input id=\"corneaSolicitada\" [disabled]=\"desActivar\" type=\"radio\" name=\"corneaSolicitada\" value=\"1\"\n                      [(ngModel)]=\"this.solicitudTejidoCorneal.corneaSolicitada\"> CI\n                  </label>\n                  <label class=\"radio-inline\">\n                    <input id=\"corneaSolicitada\" [disabled]=\"desActivar\" type=\"radio\" name=\"corneaSolicitada\" value=\"2\"\n                      [(ngModel)]=\"this.solicitudTejidoCorneal.corneaSolicitada\"> CD\n                  </label>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <app-componente-cadena-larga [componente]=\"'solicitudTejidoCorneal'\" [atributo]=\"'caracteristicaCornea'\"\n                [buscar]=\"solicitudTejidoCornealBuscar\" [permisosAtributos]=\"permisosAtributos\"\n                [(valido)]=\"validosSolicitudTejidoCorneal['caracteristicaCornea']\"\n                [(dato)]=\"solicitudTejidoCorneal.caracteristicaCornea\" [maxlength]=255 class=\"w-100\">\n              </app-componente-cadena-larga>\n            </div>\n          </div>\n\n          <!--app-componente-fecha [componente]=\"'solicitudTejidoCorneal'\"\n                                                   [atributo]=\"'fechaRegistro'\"\n                                                   [buscar]=\"solicitudTejidoCornealBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosSolicitudTejidoCorneal['fechaRegistro']\"\n                                                   [(dato)]=\"solicitudTejidoCorneal.fechaRegistro\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                     <app-componente-fecha [componente]=\"'solicitudTejidoCorneal'\"\n                                                   [atributo]=\"'fechaActualizacion'\"\n                                                   [buscar]=\"solicitudTejidoCornealBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosSolicitudTejidoCorneal['fechaActualizacion']\"\n                                                   [(dato)]=\"solicitudTejidoCorneal.fechaActualizacion\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                     <app-componente-fecha [componente]=\"'solicitudTejidoCorneal'\"\n                                                   [atributo]=\"'fechaBaja'\"\n                                                   [buscar]=\"solicitudTejidoCornealBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosSolicitudTejidoCorneal['fechaBaja']\"\n                                                   [(dato)]=\"solicitudTejidoCorneal.fechaBaja\"   class=\"w-100\" >\n                    </app-componente-fecha >\n                     <app-componente-cadena [componente]=\"'solicitudTejidoCorneal'\"\n                                                   [atributo]=\"'estatusProceso'\"\n                                                   [buscar]=\"solicitudTejidoCornealBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosSolicitudTejidoCorneal['estatusProceso']\"\n                                                   [(dato)]=\"solicitudTejidoCorneal.estatusProceso\"   class=\"w-100\" >\n                    </app-componente-cadena -->\n          <!--app-componente-radio [componente]=\"'solicitudTejidoCorneal'\"\n                                                   [atributo]=\"'status'\"\n                                                   [buscar]=\"solicitudTejidoCornealBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosSolicitudTejidoCorneal['status']\"\n                                                   [(dato)]=\"solicitudTejidoCorneal.status\"   class=\"w-100\" >\n                    </app-componente-radio -->\n\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal/solicitud-tejido-corneal.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal/solicitud-tejido-corneal.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: SolicitudTejidoCornealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudTejidoCornealComponent", function() { return SolicitudTejidoCornealComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/solicitud-tejido-corneal */ "./src/app/solicitud-tejido-corneales/shared/solicitud-tejido-corneal.ts");
/* harmony import */ var _tipo_cirugia_previstas_shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tipo-cirugia-previstas/shared/tipo-cirugia-prevista */ "./src/app/tipo-cirugia-previstas/shared/tipo-cirugia-prevista.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SolicitudTejidoCornealComponent = /** @class */ (function () {
    function SolicitudTejidoCornealComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.solicitudTejidoCornealChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovSolicitudTejidoCornealUsuarioEditar = false;
        this.iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitanteEditar = false;
        this.validosTipoCirugiaPrevistaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.idhospitalSolicitudTejidoCornealHospitalEditar = false;
    }
    SolicitudTejidoCornealComponent.prototype.actualizarSolicitudTejidoCorneal = function () {
        if (this.solicitudTejidoCorneal.id == null) {
            this.solicitudTejidoCornealService.guardarSolicitudTejidoCorneal(this.solicitudTejidoCorneal, this.evtGuardar, this);
        }
        else {
            this.solicitudTejidoCornealService.actualizarSolicitudTejidoCorneal(this.solicitudTejidoCorneal, this.evtActualiza, this);
        }
    };
    SolicitudTejidoCornealComponent.prototype.evtGuardar = function (solicitudTejidoCorneal, obj) {
        obj.solicitudTejidoCorneal = solicitudTejidoCorneal;
        obj.solicitudTejidoCornealChange.emit(obj.solicitudTejidoCorneal);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    };
    SolicitudTejidoCornealComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.solicitudTejidoCornealChange.emit(obj.solicitudTejidoCorneal);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    SolicitudTejidoCornealComponent.prototype.ngOnChanges = function (changes) {
        if (changes.opcion && changes.opcion.currentValue != null) {
            if (changes.opcion.currentValue == 1) {
                this.opcion = 1;
                this.actualizarSolicitudTejidoCorneal();
            }
        }
    };
    SolicitudTejidoCornealComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealComponent.prototype, "solicitudTejidoCornealBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealComponent.prototype, "validosSolicitudTejidoCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_solicitud_tejido_corneal__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCorneal"])
    ], SolicitudTejidoCornealComponent.prototype, "solicitudTejidoCorneal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealComponent.prototype, "solicitudTejidoCornealService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SolicitudTejidoCornealComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealComponent.prototype, "solicitudTejidoCornealChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealComponent.prototype, "ocultarConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealComponent.prototype, "lista_usuarioUltMovSolicitudTejidoCornealUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealComponent.prototype, "lista_iddoctorResponsableSolicitudSolicitudTejidoCornealDoctorSolicitante", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealComponent.prototype, "lista_idhospitalSolicitudTejidoCornealHospital", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _tipo_cirugia_previstas_shared_tipo_cirugia_prevista__WEBPACK_IMPORTED_MODULE_2__["TipoCirugiaPrevista"])
    ], SolicitudTejidoCornealComponent.prototype, "tipoCirugiaPrevista", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealComponent.prototype, "validosTipoCirugiaPrevista", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SolicitudTejidoCornealComponent.prototype, "desActivar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SolicitudTejidoCornealComponent.prototype, "desActivarHosp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SolicitudTejidoCornealComponent.prototype, "validosTipoCirugiaPrevistaChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SolicitudTejidoCornealComponent.prototype, "otracheck", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SolicitudTejidoCornealComponent.prototype, "isDisabled", void 0);
    SolicitudTejidoCornealComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solicitud-tejido-corneal',
            template: __webpack_require__(/*! ./solicitud-tejido-corneal.component.html */ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal/solicitud-tejido-corneal.component.html"),
            styles: [__webpack_require__(/*! ./solicitud-tejido-corneal.component.css */ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal/solicitud-tejido-corneal.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], SolicitudTejidoCornealComponent);
    return SolicitudTejidoCornealComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-almacen-evaluaciones-almacen-evaluacion-module~app-solicitud-tejido-corneal-almacenes-so~a3e6c93f.js.map