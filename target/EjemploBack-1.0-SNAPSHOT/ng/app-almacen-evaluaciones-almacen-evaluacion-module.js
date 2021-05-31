(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-almacen-evaluaciones-almacen-evaluacion-module"],{

/***/ "./src/app/almacen-evaluaciones/almacen-evaluacion-crud/almacen-evaluacion-crud.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/almacen-evaluaciones/almacen-evaluacion-crud/almacen-evaluacion-crud.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/almacen-evaluaciones/almacen-evaluacion-crud/almacen-evaluacion-crud.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/almacen-evaluaciones/almacen-evaluacion-crud/almacen-evaluacion-crud.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #formaGeneral=\"ngForm\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-footer\" style=\"text-align: right\" *ngIf=\"true\">\n            <div style=\"display: inline-block;width: 90%; margin-right: 10%;\">\n                <button style=\"margin-right: 10px;\" type=\"button\" class=\"btn btn-guardar\" (click)=\"doImprimir()\">\n          <span class=\"icon-printing\" aria-hidden=\"true\"></span>\n        </button>\n            </div>\n        </div>\n        <div class=\"panel-footer\" style=\"text-align: center;\">\n            <h2>REGISTRO DE INGRESO DE SOLICITUDES DE EVALUACIÓN DE TEJIDO CORNEAL</h2>\n            <h4>VALORACIÓN FINAL DEL ENDOTELIO CORNEAL</h4>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <h4>Córnea Derecha</h4>\n                    </div>\n                    <div class=\"panel-body\">\n                        <div class=\"container-fluid\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <label class=\"control-label\">ID SiRNT: _________</label\n                  >\n                </div>\n              </div>\n              <label class=\"radio-inline\" style=\"margin-left: 15px;\">\n                <input\n                  [attr.disabled]=\"enable ? null : false\"\n                  type=\"radio\"\n                  name=\"valoracionFinalEndotelioDer\"\n                  class=\"form-checkbox-input\"\n                  [value]=\"1\"\n                  [(ngModel)]=\"conteoCelularDerecha.valoracionFinalEndotelio\"\n                />\n                Apta\n              </label>\n                                    <label class=\"radio-inline\">\n                <input\n                  [attr.disabled]=\"enable ? null : false\"\n                  type=\"radio\"\n                  name=\"valoracionFinalEndotelioDer\"\n                  [value]=\"0\"\n                  class=\"form-checkbox-input\"\n                  [(ngModel)]=\"conteoCelularDerecha.valoracionFinalEndotelio\"\n                />\n                No apta\n              </label>\n                                    <hr />\n                                    <h4> ID Adicional:</h4>\n                                    <kendo-grid [data]=\"listaDesgloseCorneaDerecha\" [height]=\"200\">\n                                        <kendo-grid-column field=\"idadicional\" title=\"Id Adicional\">\n                                        </kendo-grid-column>\n                                        <ng-template kendoGridNoRecordsTemplate>\n                                            Sin registros.\n                                        </ng-template>\n                                    </kendo-grid>\n\n                                    <hr />\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\">ID SiRNT Hospital Receptor:</label>\n                                        <kendo-combobox [data]=\"listaHospitales\" [(ngModel)]=\"almacenEvaluacion.hospitalReceptorCD\" [textField]=\"'nombre'\" [valueField]=\"'id'\" [filterable]=\"true\" [allowCustom]=\"false\" class=\"form-control\" name=\"hospitalReceptorCD\" [disabled]=\"\n                    !(\n                      almacenEvaluacion.evaluacionSolicitud\n                        ?.idrecepcionSolicitudEvaluacion.idbtcCd &&\n                      almacenEvaluacion.estatusProceso != 5\n                    )\n                  \">\n                                            <ng-template kendoDropDownListNoDataTemplate>\n                                                <h4>\n                                                    Sin registros.\n                                                </h4>\n                                            </ng-template>\n                                        </kendo-combobox>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"panel panel-default\">\n                            <div class=\"panel-heading\">\n                                <h4>Córnea Izquierda</h4>\n                            </div>\n                            <div class=\"panel-body\">\n                                <div class=\"container-fluid\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12\">\n                                            <label class=\"control-label\">ID SiRNT: _________</label\n                  >\n                </div>\n              </div>\n              <label class=\"radio-inline\" style=\"margin-left: 15px;\">\n                <input\n                  [attr.disabled]=\"enable ? null : false\"\n                  type=\"radio\"\n                  name=\"valoracionFinalEndotelio\"\n                  class=\"form-checkbox-input\"\n                  [value]=\"1\"\n                  [(ngModel)]=\"conteoCelular.valoracionFinalEndotelio\"\n                />\n                Apta\n              </label>\n                                            <label class=\"radio-inline\">\n                <input\n                  [attr.disabled]=\"enable ? null : false\"\n                  type=\"radio\"\n                  name=\"valoracionFinalEndotelio\"\n                  [value]=\"0\"\n                  class=\"form-checkbox-input\"\n                  [(ngModel)]=\"conteoCelular.valoracionFinalEndotelio\"\n                />\n                No apta\n              </label>\n                                            <hr />\n                                            <h4> ID Adicional:</h4>\n                                            <kendo-grid [data]=\"listaDesgloseCorneaIzquierda\" [height]=\"200\">\n                                                <kendo-grid-column field=\"idadicional\" title=\"ID Adicional\">\n                                                </kendo-grid-column>\n                                                <ng-template kendoGridNoRecordsTemplate>\n                                                    Sin registros.\n                                                </ng-template>\n                                            </kendo-grid>\n                                        </div>\n                                        <hr />\n                                        <div class=\"form-group\">\n                                            <label class=\"control-label\">ID SiRNT Hospital Receptor:</label>\n                                            <kendo-combobox [data]=\"listaHospitales\" [(ngModel)]=\"almacenEvaluacion.hospitalReceptorCI\" [textField]=\"'nombre'\" [valueField]=\"'id'\" [filterable]=\"true\" [allowCustom]=\"false\" name=\"hospitalReceptorCI\" class=\"form-control\" [disabled]=\"\n                  !(\n                    almacenEvaluacion.evaluacionSolicitud\n                      ?.idrecepcionSolicitudEvaluacion.idbtcCi &&\n                    almacenEvaluacion.estatusProceso != 5\n                  )\n                \">\n                                                <ng-template kendoDropDownListNoDataTemplate>\n                                                    <h4>\n                                                        Sin registros.\n                                                    </h4>\n                                                </ng-template>\n                                            </kendo-combobox>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"container-fluid\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\">Fecha de Ingreso al BTC:</label>\n                                        <kendo-datepicker [disabled]=\"true\" [value]=\"fechaRecepcion\" class=\"form-control\">\n                                        </kendo-datepicker>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\">Fecha de Cultivo:</label>\n                                        <kendo-datepicker [disabled]=\"true\" [value]=\"fechaCultivo\" class=\"form-control\">\n                                        </kendo-datepicker>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\">Fecha de Microscopía:</label>\n                                        <kendo-datepicker [disabled]=\"true\" [value]=\"fechaMicroscopia\" class=\"form-control\">\n                                        </kendo-datepicker>\n                                    </div>\n\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\">Fecha de Ingreso a Almacén(Refrigerador):</label\n            >\n            <kendo-datepicker\n            [disabled]=\"true\"\n            [value]=\"fechaIngresoAlmacen\"\n            class=\"form-control\"\n          >\n          </kendo-datepicker>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"control-label\">Días de Ingreso del Tejido:</label>\n                                        <input [value]=\"diasIngresoAlmacen\" class=\"form-control\" type=\"number\" [disabled]=\"true\" />\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\">Hora de Ingreso al BTC:</label>\n                                        <kendo-timepicker [disabled]=\"true\" [value]=\"horaRecepcion\" class=\"form-control\">\n                                        </kendo-timepicker>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\">Hora de Cultivo:</label>\n                                        <kendo-timepicker [disabled]=\"true\" [value]=\"fechaCultivo\" class=\"form-control\">\n                                        </kendo-timepicker>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\">Hora de Microscopía:</label>\n                                        <kendo-timepicker [disabled]=\"true\" [value]=\"fechaMicroscopia\" class=\"form-control\">\n                                        </kendo-timepicker>\n                                    </div>\n\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\">Hora de Ingreso a Almacén(Refrigerador):</label\n            >\n            <kendo-timepicker\n              [disabled]=\"true\"\n              [value]=\"fechaMicroscopia\"\n              class=\"form-control\"\n            >\n            </kendo-timepicker>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"panel-footer\" style=\"text-align: right\" *ngIf=\"true\">\n      <div style=\"display: inline-block;width: 90%; margin-right: 10%;\">\n        <button\n          (click)=\"doGuardar()\"\n          type=\"button\"\n          class=\"btn btn-primary btn-guardar\"\n          [disabled]=\"almacenEvaluacion.estatusProceso == 5\"\n        >\n          <span class=\"fa fa-floppy-disk\"></span>Guardar\n        </button>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/almacen-evaluaciones/almacen-evaluacion-crud/almacen-evaluacion-crud.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/almacen-evaluaciones/almacen-evaluacion-crud/almacen-evaluacion-crud.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AlmacenEvaluacionCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlmacenEvaluacionCrudComponent", function() { return AlmacenEvaluacionCrudComponent; });
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../hospitales/shared/hospital.service */ "./src/app/hospitales/shared/hospital.service.ts");
/* harmony import */ var _estudio_laboratorios_shared_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../estudio-laboratorios/shared/estudio-laboratorio */ "./src/app/estudio-laboratorios/shared/estudio-laboratorio.ts");
/* harmony import */ var _desglose_corneas_shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../desglose-corneas/shared/desglose-cornea */ "./src/app/desglose-corneas/shared/desglose-cornea.ts");
/* harmony import */ var _conteo_celulares_shared_conteo_celular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../conteo-celulares/shared/conteo-celular */ "./src/app/conteo-celulares/shared/conteo-celular.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_almacen_evaluacion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../shared/almacen-evaluacion */ "./src/app/almacen-evaluaciones/shared/almacen-evaluacion.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_almacen_evaluacion_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/almacen-evaluacion.service */ "./src/app/almacen-evaluaciones/shared/almacen-evaluacion.service.ts");
/* harmony import */ var _shared_file_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/file.service */ "./src/app/shared/file.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AlmacenEvaluacionCrudComponent = /** @class */ (function () {
    function AlmacenEvaluacionCrudComponent(almacenEvaluacionService, activatedRoute, hospitalService, globalesService, fileservice) {
        this.almacenEvaluacionService = almacenEvaluacionService;
        this.activatedRoute = activatedRoute;
        this.hospitalService = hospitalService;
        this.globalesService = globalesService;
        this.fileservice = fileservice;
        this.almacenEvaluacion = new _shared_almacen_evaluacion__WEBPACK_IMPORTED_MODULE_7__["AlmacenEvaluacion"]();
        this.conteoCelularDerecha = new _conteo_celulares_shared_conteo_celular__WEBPACK_IMPORTED_MODULE_5__["ConteoCelular"]();
        this.desgloseCorneaIzquierda = new _desglose_corneas_shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_4__["DesgloseCornea"]();
        this.desgloseCorneaDerecha = new _desglose_corneas_shared_desglose_cornea__WEBPACK_IMPORTED_MODULE_4__["DesgloseCornea"]();
        this.listaDesgloseCorneaIzquierda = [];
        this.listaDesgloseCorneaDerecha = [];
        this.conteoCelular = new _conteo_celulares_shared_conteo_celular__WEBPACK_IMPORTED_MODULE_5__["ConteoCelular"]();
        this.estudioLaboratorio = new _estudio_laboratorios_shared_estudio_laboratorio__WEBPACK_IMPORTED_MODULE_3__["EstudioLaboratorio"]();
    }
    AlmacenEvaluacionCrudComponent.prototype.ngOnInit = function () {
        var id = this.activatedRoute.snapshot.paramMap.get("id");
        if (id) {
            this.almacenEvaluacion.id = id;
            this.almacenEvaluacionService.lazyAlmacenEvaluacion(this.almacenEvaluacion, this.evn_lazy_AlmacenEvaluacion, this);
            this.hospitalService.getHospitalesActivos(this.evnHospitales, this);
        }
    };
    AlmacenEvaluacionCrudComponent.prototype.evn_lazy_AlmacenEvaluacion = function (almacenEvaluacion, objeto) {
        (almacenEvaluacion);
        objeto.almacenEvaluacion = almacenEvaluacion;
        if (almacenEvaluacion.evaluacionSolicitud.conteosCelular) {
            almacenEvaluacion.evaluacionSolicitud.conteosCelular.forEach(function (element) {
                if (element.tipoCornea === 1) {
                    objeto.conteoCelular = element;
                }
                else if (element.tipoCornea === 2) {
                    objeto.conteoCelularDerecha = element;
                }
            });
        }
        if (almacenEvaluacion.evaluacionSolicitud.desgloseCorneas) {
            objeto.listaDesgloseCorneaIzquierda = [];
            objeto.listaDesgloseCorneaDerecha = [];
            almacenEvaluacion.evaluacionSolicitud.desgloseCorneas.forEach(function (element) {
                if (element.tipoCornea === 1) {
                    objeto.listaDesgloseCorneaIzquierda.push(element);
                }
                else {
                    objeto.listaDesgloseCorneaDerecha.push(element);
                }
            });
        }
        if (almacenEvaluacion.evaluacionSolicitud.estudiosLaboratorio) {
            almacenEvaluacion.evaluacionSolicitud.estudiosLaboratorio.forEach(function (element) {
                objeto.estudioLaboratorio = element;
            });
        }
    };
    Object.defineProperty(AlmacenEvaluacionCrudComponent.prototype, "fechaRecepcion", {
        get: function () {
            if (!this.almacenEvaluacion.evaluacionSolicitud) {
                return null;
            }
            return new Date(this.almacenEvaluacion.evaluacionSolicitud.idrecepcionSolicitudEvaluacion.fechaRecepcion);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlmacenEvaluacionCrudComponent.prototype, "horaRecepcion", {
        get: function () {
            if (!this.almacenEvaluacion.evaluacionSolicitud) {
                return null;
            }
            return new Date(this.almacenEvaluacion.evaluacionSolicitud.idrecepcionSolicitudEvaluacion.horaRecepcion);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlmacenEvaluacionCrudComponent.prototype, "fechaCultivo", {
        get: function () {
            return new Date(this.estudioLaboratorio.fechaRegistro);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlmacenEvaluacionCrudComponent.prototype, "fechaMicroscopia", {
        get: function () {
            if (!this.almacenEvaluacion.evaluacionSolicitud) {
                return null;
            }
            return new Date(this.conteoCelular.id
                ? this.conteoCelular.fechaRegistro
                : this.conteoCelularDerecha.fechaRegistro);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlmacenEvaluacionCrudComponent.prototype, "fechaIngresoAlmacen", {
        get: function () {
            return new Date(this.almacenEvaluacion.fechaRegistro);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlmacenEvaluacionCrudComponent.prototype, "diasIngresoAlmacen", {
        get: function () {
            if (!this.almacenEvaluacion.evaluacionSolicitud) {
                return null;
            }
            var d = new Date(this.almacenEvaluacion.evaluacionSolicitud.idrecepcionSolicitudEvaluacion.fechaRecepcion);
            var diff = Math.abs(d.getTime() - new Date().getTime());
            return Math.ceil(diff / (1000 * 3600 * 24));
        },
        enumerable: true,
        configurable: true
    });
    AlmacenEvaluacionCrudComponent.prototype.evnHospitales = function (hospitales, obj) {
        (hospitales);
        obj.listaHospitales = hospitales;
    };
    AlmacenEvaluacionCrudComponent.prototype.doGuardar = function () {
        //    this.almacenEvaluacion.hospitalReceptorCD
        var corneas = this.almacenEvaluacion.evaluacionSolicitud.conteosCelular.length;
        if (corneas === 2) {
            if (this.almacenEvaluacion.hospitalReceptorCD === null || this.almacenEvaluacion.hospitalReceptorCI === null) {
                bootbox.alert("Es necesario asignar ambas corneas a los hospitales");
                return;
            }
        }
        else if (corneas === 1) {
            if (this.almacenEvaluacion.hospitalReceptorCD === null && this.almacenEvaluacion.hospitalReceptorCI === null) {
                bootbox.alert("Es necesario asignar la cornea  al hospital");
                return;
            }
        }
        else {
            bootbox.alert("No existen corneas a asignar");
            return;
        }
        bootbox.confirm({
            message: "¿Deseas asignar el tejido?",
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
                    this.almacenEvaluacion.usuarioUltMov = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_1__["Usuario"]();
                    this.almacenEvaluacion.usuarioUltMov.id = this.globalesService.dameUsuario().id;
                    this.almacenEvaluacionService.actualizarHopitalesAlmacenEvaluacion(this.almacenEvaluacion, this.evn_actualizarAlmacen, this);
                }
            }.bind(this)
        });
    };
    AlmacenEvaluacionCrudComponent.prototype.evn_actualizarAlmacen = function (ev, objeto) {
        objeto.almacenEvaluacion.estatusProceso = ev.estatusProceso;
        /*    let id = objeto.activatedRoute.snapshot.paramMap.get("id");
            if (id) {
              objeto.almacenEvaluacion.id = id;
              objeto.almacenEvaluacionService.lazyAlmacenEvaluacion(
                objeto.almacenEvaluacion,
                objeto.evn_lazy_AlmacenEvaluacion,
                objeto
              );
            }*/
        bootbox.alert("Solicitud enviada.");
    };
    AlmacenEvaluacionCrudComponent.prototype.doImprimir = function () {
        var path = 'file/registroRecepcion';
        var otros = 'registroRecepcion';
        var parametros = { id: this.almacenEvaluacion.evaluacionSolicitud.idrecepcionSolicitudEvaluacion.idsolicitudEvaluacionCorneal.id, tipoCornea: 2 };
        var nombre = 'registroRecepcion.pdf';
        this.fileservice.downloadFile(nombre, otros, path, parametros);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"])(),
        __metadata("design:type", Boolean)
    ], AlmacenEvaluacionCrudComponent.prototype, "enable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"])(),
        __metadata("design:type", _conteo_celulares_shared_conteo_celular__WEBPACK_IMPORTED_MODULE_5__["ConteoCelular"])
    ], AlmacenEvaluacionCrudComponent.prototype, "conteoCelularDerecha", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"])(),
        __metadata("design:type", Array)
    ], AlmacenEvaluacionCrudComponent.prototype, "listaDesgloseCorneaIzquierda", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"])(),
        __metadata("design:type", Array)
    ], AlmacenEvaluacionCrudComponent.prototype, "listaDesgloseCorneaDerecha", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"])(),
        __metadata("design:type", _conteo_celulares_shared_conteo_celular__WEBPACK_IMPORTED_MODULE_5__["ConteoCelular"])
    ], AlmacenEvaluacionCrudComponent.prototype, "conteoCelular", void 0);
    AlmacenEvaluacionCrudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: "app-almacen-evaluacion-crud",
            template: __webpack_require__(/*! ./almacen-evaluacion-crud.component.html */ "./src/app/almacen-evaluaciones/almacen-evaluacion-crud/almacen-evaluacion-crud.component.html"),
            styles: [__webpack_require__(/*! ./almacen-evaluacion-crud.component.css */ "./src/app/almacen-evaluaciones/almacen-evaluacion-crud/almacen-evaluacion-crud.component.css")],
            providers: [_hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_2__["HospitalService"], _shared_file_service__WEBPACK_IMPORTED_MODULE_10__["FileService"]]
        }),
        __metadata("design:paramtypes", [_shared_almacen_evaluacion_service__WEBPACK_IMPORTED_MODULE_9__["AlmacenEvaluacionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_2__["HospitalService"],
            _shared_globales_service__WEBPACK_IMPORTED_MODULE_0__["GlobalesService"],
            _shared_file_service__WEBPACK_IMPORTED_MODULE_10__["FileService"]])
    ], AlmacenEvaluacionCrudComponent);
    return AlmacenEvaluacionCrudComponent;
}());



/***/ }),

/***/ "./src/app/almacen-evaluaciones/almacen-evaluacion-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/almacen-evaluaciones/almacen-evaluacion-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: AlmacenEvaluacionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlmacenEvaluacionRoutingModule", function() { return AlmacenEvaluacionRoutingModule; });
/* harmony import */ var _almacen_evaluacion_crud_almacen_evaluacion_crud_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./almacen-evaluacion-crud/almacen-evaluacion-crud.component */ "./src/app/almacen-evaluaciones/almacen-evaluacion-crud/almacen-evaluacion-crud.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _almacen_evaluacion_table_bandeja_almacen_evaluacion_table_bandeja_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./almacen-evaluacion-table-bandeja/almacen-evaluacion-table-bandeja.component */ "./src/app/almacen-evaluaciones/almacen-evaluacion-table-bandeja/almacen-evaluacion-table-bandeja.component.ts");
/* harmony import */ var _ingreso_solictud_tejido_ingreso_solictud_tejido_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ingreso-solictud-tejido/ingreso-solictud-tejido.component */ "./src/app/almacen-evaluaciones/ingreso-solictud-tejido/ingreso-solictud-tejido.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'almacen-evaluacion-crud/:id', component: _almacen_evaluacion_crud_almacen_evaluacion_crud_component__WEBPACK_IMPORTED_MODULE_0__["AlmacenEvaluacionCrudComponent"] },
    { path: 'almacen-bandeja', component: _almacen_evaluacion_table_bandeja_almacen_evaluacion_table_bandeja_component__WEBPACK_IMPORTED_MODULE_3__["AlmacenEvaluacionTableBandejaComponent"] },
    { path: 'ingreso-solictud-tejido/:id', component: _ingreso_solictud_tejido_ingreso_solictud_tejido_component__WEBPACK_IMPORTED_MODULE_4__["IngresoSolictudTejidoComponent"] },
];
var AlmacenEvaluacionRoutingModule = /** @class */ (function () {
    function AlmacenEvaluacionRoutingModule() {
    }
    AlmacenEvaluacionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AlmacenEvaluacionRoutingModule);
    return AlmacenEvaluacionRoutingModule;
}());



/***/ }),

/***/ "./src/app/almacen-evaluaciones/almacen-evaluacion-table-bandeja/almacen-evaluacion-table-bandeja.component.css":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/almacen-evaluaciones/almacen-evaluacion-table-bandeja/almacen-evaluacion-table-bandeja.component.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/almacen-evaluaciones/almacen-evaluacion-table-bandeja/almacen-evaluacion-table-bandeja.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/almacen-evaluaciones/almacen-evaluacion-table-bandeja/almacen-evaluacion-table-bandeja.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"usuariologueado\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h1>BANDEJA DE ALMACÉN</h1>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"container-fluid\">\n\n                <table id=\"tabla_almacenEvaluacionBandeja\" class=\"table \" cellspacing=\"0\" width=\"100%\">\n                    <thead>\n                        <tr>\n                            <th>Id</th>\n                            <th>Estatus de Solicitud </th>\n                            <th>Folio de Solicitud</th>\n                            <th>Fecha de Ingreso</th>\n                            <th>Hora de Ingreso</th>\n                            <th>Córnea Izquierda</th>\n                            <th>Córnea Derecha</th>\n                            <th>Id Solicitud</th>\n                            <th>Ir a solicitudes</th>\n                        </tr>\n                    </thead>\n                    <!-- <tfoot>\n                        <tr>\n                            <th>Id</th>\n                            <th>Tipo Solicitud </th>\n                            <th>Folio</th>\n                            <th>Fecha ingreso</th>\n                            <th>Hora Ingreso</th>\n                            <th>Cornea Izquierda</th>\n                            <th>Cornea Derecha</th>\n                            <th>Id Solicitud</th>\n                            <th>Ir a solicitudes</th>\n                        </tr>\n                    </tfoot> -->\n                </table>\n\n            </div>\n        </div>\n\n        <div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n            <strong>Alerta !</strong> No tienes permisos para esta página.\n        </div>"

/***/ }),

/***/ "./src/app/almacen-evaluaciones/almacen-evaluacion-table-bandeja/almacen-evaluacion-table-bandeja.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/almacen-evaluaciones/almacen-evaluacion-table-bandeja/almacen-evaluacion-table-bandeja.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: AlmacenEvaluacionTableBandejaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlmacenEvaluacionTableBandejaComponent", function() { return AlmacenEvaluacionTableBandejaComponent; });
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../permiso-atributos/shared/permiso-atributo.service */ "./src/app/permiso-atributos/shared/permiso-atributo.service.ts");
/* harmony import */ var _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../permiso-tablas/shared/permiso-tabla.service */ "./src/app/permiso-tablas/shared/permiso-tabla.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AlmacenEvaluacionTableBandejaComponent = /** @class */ (function () {
    function AlmacenEvaluacionTableBandejaComponent(globalesService, urlProvider, router) {
        this.globalesService = globalesService;
        this.urlProvider = urlProvider;
        this.router = router;
        this.primero = true;
        this.usuariologueado = globalesService.dameUsuario();
        this.getColumnas(this);
    }
    AlmacenEvaluacionTableBandejaComponent.prototype.getColumnas = function (obj) {
        if ($('#tabla_almacenEvaluacionBandeja').length == 0) {
            setTimeout(function () {
                obj.getColumnas(obj);
                return;
            }, 500);
        }
        if ($('#tabla_almacenEvaluacionBandeja').length == 0)
            return;
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        columnasNoVisibles.push(0);
        columnas.push({ data: 'id' });
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
        columnas.push({ data: 'fechaTermino' });
        columnas.push({ data: 'horaTermino' });
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
        columnasNoVisibles.push(7);
        columnas.push({ data: 'idSolicitud' });
        columnas.push({
            data: function (oObj) {
                if (oObj)
                    return "<span style=\"cursor: pointer\">Ingreso Solicitudes</span>";
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
        var tabla = $('#tabla_almacenEvaluacionBandeja').DataTable({
            columnDefs: novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            ajax: {
                url: self.urlProvider.serverURL + 'almacenEvaluacion/almacenBandeja',
                type: 'POST',
                contentType: 'application/json',
                datatype: 'json',
                dataSrc: ''
            },
            columns: columnas
        });
        $('#tabla_almacenEvaluacionBandeja tbody').on('click', 'td', function (evt) {
            if (evt.currentTarget.cellIndex ==
                $(evt.currentTarget)
                    .parent()
                    .find('td').length -
                    1) {
                var data = $('#tabla_almacenEvaluacionBandeja')
                    .DataTable()
                    .row(evt.currentTarget)
                    .data();
                if (data.tipo == 2) {
                    this.globalesService.registraIdAlmacen(data.id);
                    this.globalesService.limpiaIdSolicitudTejido();
                    this.router.navigateByUrl('/almacen-evaluacion-crud/' + data.id);
                }
                if (data.tipo == 1) {
                    this.globalesService.limpiaIdAlmacen();
                    this.globalesService.registraIdSolicitudTejido(data.idSolicitud);
                    this.router.navigateByUrl('/ingreso-solictud-tejido/' + data.idSolicitud);
                }
            }
        }.bind(this));
    };
    AlmacenEvaluacionTableBandejaComponent.prototype.ngOnInit = function () {
    };
    AlmacenEvaluacionTableBandejaComponent.prototype.cambio_evaluacionSolicitud = function (evaluacionSolicitud) {
        $('#tabla_almacenEvaluacionBandeja')
            .DataTable()
            .ajax.reload(null, false);
        this.primero = true;
    };
    AlmacenEvaluacionTableBandejaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-almacen-evaluacion-table-bandeja',
            template: __webpack_require__(/*! ./almacen-evaluacion-table-bandeja.component.html */ "./src/app/almacen-evaluaciones/almacen-evaluacion-table-bandeja/almacen-evaluacion-table-bandeja.component.html"),
            styles: [__webpack_require__(/*! ./almacen-evaluacion-table-bandeja.component.css */ "./src/app/almacen-evaluaciones/almacen-evaluacion-table-bandeja/almacen-evaluacion-table-bandeja.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_0__["GlobalesService"], _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_3__["PermisoAtributoService"], _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_4__["PermisoTablaService"]]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_0__["GlobalesService"],
            _shared_url_provider__WEBPACK_IMPORTED_MODULE_2__["URLProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AlmacenEvaluacionTableBandejaComponent);
    return AlmacenEvaluacionTableBandejaComponent;
}());



/***/ }),

/***/ "./src/app/almacen-evaluaciones/almacen-evaluacion.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/almacen-evaluaciones/almacen-evaluacion.module.ts ***!
  \*******************************************************************/
/*! exports provided: AlmacenEvaluacionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlmacenEvaluacionModule", function() { return AlmacenEvaluacionModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ "./node_modules/@progress/kendo-angular-dateinputs/dist/fesm5/index.js");
/* harmony import */ var _almacen_evaluacion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./almacen-evaluacion-routing.module */ "./src/app/almacen-evaluaciones/almacen-evaluacion-routing.module.ts");
/* harmony import */ var _almacen_evaluacion_crud_almacen_evaluacion_crud_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./almacen-evaluacion-crud/almacen-evaluacion-crud.component */ "./src/app/almacen-evaluaciones/almacen-evaluacion-crud/almacen-evaluacion-crud.component.ts");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "./node_modules/@progress/kendo-angular-dropdowns/dist/fesm5/index.js");
/* harmony import */ var _almacen_evaluacion_table_bandeja_almacen_evaluacion_table_bandeja_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./almacen-evaluacion-table-bandeja/almacen-evaluacion-table-bandeja.component */ "./src/app/almacen-evaluaciones/almacen-evaluacion-table-bandeja/almacen-evaluacion-table-bandeja.component.ts");
/* harmony import */ var _ingreso_solictud_tejido_ingreso_solictud_tejido_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ingreso-solictud-tejido/ingreso-solictud-tejido.component */ "./src/app/almacen-evaluaciones/ingreso-solictud-tejido/ingreso-solictud-tejido.component.ts");
/* harmony import */ var _solicitud_tejido_corneales_solicitud_tejido_corneal_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../solicitud-tejido-corneales/solicitud-tejido-corneal.module */ "./src/app/solicitud-tejido-corneales/solicitud-tejido-corneal.module.ts");
/* harmony import */ var _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/componentes-personalizados/personalizados.module */ "./src/app/core/componentes-personalizados/personalizados.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AlmacenEvaluacionModule = /** @class */ (function () {
    function AlmacenEvaluacionModule() {
    }
    AlmacenEvaluacionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _almacen_evaluacion_routing_module__WEBPACK_IMPORTED_MODULE_5__["AlmacenEvaluacionRoutingModule"],
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_1__["GridModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_4__["DateInputsModule"],
                _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_7__["DropDownsModule"],
                _solicitud_tejido_corneales_solicitud_tejido_corneal_module__WEBPACK_IMPORTED_MODULE_10__["SolicitudTejidoCornealModule"],
                _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_11__["PersonalizadosModule"]
            ],
            declarations: [_almacen_evaluacion_crud_almacen_evaluacion_crud_component__WEBPACK_IMPORTED_MODULE_6__["AlmacenEvaluacionCrudComponent"], _almacen_evaluacion_table_bandeja_almacen_evaluacion_table_bandeja_component__WEBPACK_IMPORTED_MODULE_8__["AlmacenEvaluacionTableBandejaComponent"], _ingreso_solictud_tejido_ingreso_solictud_tejido_component__WEBPACK_IMPORTED_MODULE_9__["IngresoSolictudTejidoComponent"]]
        })
    ], AlmacenEvaluacionModule);
    return AlmacenEvaluacionModule;
}());



/***/ }),

/***/ "./src/app/almacen-evaluaciones/ingreso-solictud-tejido/ingreso-solictud-tejido.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/almacen-evaluaciones/ingreso-solictud-tejido/ingreso-solictud-tejido.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/almacen-evaluaciones/ingreso-solictud-tejido/ingreso-solictud-tejido.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/almacen-evaluaciones/ingreso-solictud-tejido/ingreso-solictud-tejido.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <app-solicitud-tejido-corneal-crud [idEntrada]=\"idSolicitud\"> </app-solicitud-tejido-corneal-crud>\n  <div class=\"panel-footer\" style=\"text-align: right\">\n    <div class=\"row\">\n      <div class=\"col-md-10\">\n        <app-componente-radio\n          [componente]=\"'ingresoSolicitud'\"\n          [atributo]=\"'tejido'\"\n          [permisosAtributos]=\"permisosIngreso\"\n          [(valido)]=\"validoPermisoIngreso\"\n          [(dato)]=\"permisoIngreso\"\n          class=\"w-100\"\n        >\n        </app-componente-radio>\n      </div>\n      <div class=\"col-md-2\">\n        <button type=\"button\" class=\"btn btn-primary btn-guardar\" (click)=\"actualizar()\" [disabled]=\" permisosIngreso[0].permiso==2\">\n          <span class=\"glyphicon glyphicon-floppy-disk  \"></span>Guardar\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/almacen-evaluaciones/ingreso-solictud-tejido/ingreso-solictud-tejido.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/almacen-evaluaciones/ingreso-solictud-tejido/ingreso-solictud-tejido.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: IngresoSolictudTejidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresoSolictudTejidoComponent", function() { return IngresoSolictudTejidoComponent; });
/* harmony import */ var _solicitud_tejido_corneal_almacenes_shared_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen */ "./src/app/solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _solicitud_tejido_corneal_almacenes_shared_solicitud_tejido_corneal_almacen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen.service */ "./src/app/solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IngresoSolictudTejidoComponent = /** @class */ (function () {
    function IngresoSolictudTejidoComponent(route, solicitudTejidoCornealAlmacenService) {
        this.route = route;
        this.solicitudTejidoCornealAlmacenService = solicitudTejidoCornealAlmacenService;
        this.idSolicitud = null;
        this.permisosIngreso = [
            {
                etiqueta: 'Tejido existente ',
                validacion: "No|Si",
                permiso: 3,
                tabla: 'ingresoSolicitud',
                atributo: 'tejido'
            }
        ];
        this.validoPermisoIngreso = false;
        this.permisoIngreso = null;
        this.solicitudTejidoCornealAlmacen = null;
    }
    IngresoSolictudTejidoComponent.prototype.ngOnInit = function () {
        this.idSolicitud = this.route.snapshot.paramMap.get('id');
        if (this.idSolicitud != null) {
            this.solicitudTejidoCornealAlmacenService.getSolicitudTejidoCornealAlmacenByIdsolicitudTejidoCornealRecepcion({ id: this.idSolicitud }, this.getSolTejCorAlm, this);
        }
    };
    IngresoSolictudTejidoComponent.prototype.getSolTejCorAlm = function (entrada, obj) {
        if (entrada != null && entrada.id != null) {
            obj.solicitudTejidoCornealAlmacen = entrada;
            if (obj.solicitudTejidoCornealAlmacen.tejidoExistente != null)
                obj.permisoIngreso = obj.solicitudTejidoCornealAlmacen.tejidoExistente + "";
            if (obj.solicitudTejidoCornealAlmacen != null && obj.solicitudTejidoCornealAlmacen.tejidoExistente != null) {
                obj.permisosIngreso[0].permiso = 2;
            }
        }
    };
    IngresoSolictudTejidoComponent.prototype.actualizar = function () {
        if (this.permisoIngreso == null) {
            bootbox.alert("Es necesario definir si existe o no el tejido");
            return;
        }
        /*     if (this.solicitudTejidoCornealAlmacen == null) {
              bootbox.alert("Solicitud de tejido corneal en almacen inexistente");
              return;
            } */
        this.solicitudTejidoCornealAlmacen.tejidoExistente = parseInt(this.permisoIngreso);
        this.solicitudTejidoCornealAlmacen.estatusProceso = 5;
        this.solicitudTejidoCornealAlmacenService.actualizarSolicitudTejidoCornealAlmacen(new _solicitud_tejido_corneal_almacenes_shared_solicitud_tejido_corneal_almacen__WEBPACK_IMPORTED_MODULE_0__["SolicitudTejidoCornealAlmacen"](this.solicitudTejidoCornealAlmacen), this.evActualizar, this);
    };
    IngresoSolictudTejidoComponent.prototype.evActualizar = function (respuesta, obj) {
        if (respuesta) {
            bootbox.alert("Guardado con éxito");
            obj.permisosIngreso[0].permiso = 2;
        }
    };
    IngresoSolictudTejidoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ingreso-solictud-tejido',
            template: __webpack_require__(/*! ./ingreso-solictud-tejido.component.html */ "./src/app/almacen-evaluaciones/ingreso-solictud-tejido/ingreso-solictud-tejido.component.html"),
            styles: [__webpack_require__(/*! ./ingreso-solictud-tejido.component.css */ "./src/app/almacen-evaluaciones/ingreso-solictud-tejido/ingreso-solictud-tejido.component.css")],
            providers: [_solicitud_tejido_corneal_almacenes_shared_solicitud_tejido_corneal_almacen_service__WEBPACK_IMPORTED_MODULE_3__["SolicitudTejidoCornealAlmacenService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _solicitud_tejido_corneal_almacenes_shared_solicitud_tejido_corneal_almacen_service__WEBPACK_IMPORTED_MODULE_3__["SolicitudTejidoCornealAlmacenService"]])
    ], IngresoSolictudTejidoComponent);
    return IngresoSolictudTejidoComponent;
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

/***/ "./src/app/solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen.ts ***!
  \***********************************************************************************************/
/*! exports provided: SolicitudTejidoCornealAlmacen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudTejidoCornealAlmacen", function() { return SolicitudTejidoCornealAlmacen; });
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _solicitud_tejido_corneal_recepciones_shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../solicitud-tejido-corneal-recepciones/shared/solicitud-tejido-corneal-recepcion */ "./src/app/solicitud-tejido-corneal-recepciones/shared/solicitud-tejido-corneal-recepcion.ts");


/**
 *
 * @author IstmoSoft
 */
var SolicitudTejidoCornealAlmacen = /** @class */ (function () {
    // atributos fin
    function SolicitudTejidoCornealAlmacen(source) {
        if (source === void 0) { source = null; }
        // ids inicio
        this.id = null;
        // ids fin
        // atributos inicio
        this.fechaBaja = null;
        this.tejidoExistente = null;
        this.fechaRegistro = null;
        this.estatusProceso = null;
        this.fechaActualizacion = null;
        this.status = null;
        this.usuarioUltMov = null;
        this.idsolicitudTejidoCornealRecepcion = null;
        if (source !== null)
            this.from(source);
    }
    SolicitudTejidoCornealAlmacen.prototype.from = function (source) {
        if (source.id)
            this.id = source.id;
        if (source.fechaBaja)
            this.fechaBaja = source.fechaBaja;
        if (source.tejidoExistente)
            this.tejidoExistente = source.tejidoExistente;
        if (source.fechaRegistro)
            this.fechaRegistro = source.fechaRegistro;
        if (source.estatusProceso)
            this.estatusProceso = source.estatusProceso;
        if (source.fechaActualizacion)
            this.fechaActualizacion = source.fechaActualizacion;
        if (source.status)
            this.status = source.status;
        if (source.usuarioUltMov)
            this.usuarioUltMov = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_0__["Usuario"](source.usuarioUltMov);
        if (source.idsolicitudTejidoCornealRecepcion)
            this.idsolicitudTejidoCornealRecepcion = new _solicitud_tejido_corneal_recepciones_shared_solicitud_tejido_corneal_recepcion__WEBPACK_IMPORTED_MODULE_1__["SolicitudTejidoCornealRecepcion"](source.idsolicitudTejidoCornealRecepcion);
    };
    SolicitudTejidoCornealAlmacen.prototype.isOk = function () {
        if (this.id)
            return true;
        if (this.fechaBaja)
            return true;
        if (this.tejidoExistente)
            return true;
        if (this.fechaRegistro)
            return true;
        if (this.estatusProceso)
            return true;
        if (this.fechaActualizacion)
            return true;
        if (this.status)
            return true;
        if (this.usuarioUltMov)
            return true;
        if (this.idsolicitudTejidoCornealRecepcion)
            return true;
        return false;
    };
    SolicitudTejidoCornealAlmacen.prototype.toDto = function () {
        if (this.id != null && typeof this.id === 'string' && this.id.replace(/^\s+|\s+$/g, '') == "")
            this.id = null;
        if (this.fechaBaja != null && typeof this.fechaBaja === 'string' && this.fechaBaja.replace(/^\s+|\s+$/g, '') == "")
            this.fechaBaja = null;
        if (this.tejidoExistente != null && typeof this.tejidoExistente === 'string' && this.tejidoExistente.replace(/^\s+|\s+$/g, '') == "")
            this.tejidoExistente = null;
        if (this.fechaRegistro != null && typeof this.fechaRegistro === 'string' && this.fechaRegistro.replace(/^\s+|\s+$/g, '') == "")
            this.fechaRegistro = null;
        if (this.estatusProceso != null && typeof this.estatusProceso === 'string' && this.estatusProceso.replace(/^\s+|\s+$/g, '') == "")
            this.estatusProceso = null;
        if (this.fechaActualizacion != null && typeof this.fechaActualizacion === 'string' && this.fechaActualizacion.replace(/^\s+|\s+$/g, '') == "")
            this.fechaActualizacion = null;
        if (this.status != null && typeof this.status === 'string' && this.status.replace(/^\s+|\s+$/g, '') == "")
            this.status = null;
        if (this.usuarioUltMov != null && typeof this.usuarioUltMov === 'string' && this.usuarioUltMov.replace(/^\s+|\s+$/g, '') == "")
            this.usuarioUltMov = null;
        if (this.idsolicitudTejidoCornealRecepcion != null && typeof this.idsolicitudTejidoCornealRecepcion === 'string' && this.idsolicitudTejidoCornealRecepcion.replace(/^\s+|\s+$/g, '') == "")
            this.idsolicitudTejidoCornealRecepcion = null;
        return this;
    };
    return SolicitudTejidoCornealAlmacen;
}());



/***/ })

}]);
//# sourceMappingURL=app-almacen-evaluaciones-almacen-evaluacion-module.js.map