(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-itemes-item-module"],{

/***/ "./src/app/itemes/item-conjunto/item-conjunto.component.css":
/*!******************************************************************!*\
  !*** ./src/app/itemes/item-conjunto/item-conjunto.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/itemes/item-conjunto/item-conjunto.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/itemes/item-conjunto/item-conjunto.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\"  >\n    <li *ngFor =  \"let item of listaItem \" [ngClass]=\"{ 'active':idSeleccionado=== 'I-'+item.id}\"\n        (click)=\"elegir(item,'I' )\" >\n        <a data-toggle=\"tab\" href=\"#tab-I-{{item.id}}\">{{item.id}}</a>\n    </li>\n    <li *ngFor =  \"let item of listaItemN \" [ngClass]=\"{ 'active':idSeleccionado=== 'N-'+item.id}\"\n        (click)=\"elegir(item, 'N')\" >\n        <a data-toggle=\"tab\" href=\"#tab-N-{{item.id}}\">T-{{item.id}}</a>\n    </li>\n</ul>\n<div class=\"panel panel-default\"  >\n     <div  class=\"tab-content\">\n        <div *ngFor = \"let item of listaItem ; let i = index \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='I-'+item.id}\" id=\"tab-I-{{item.id}}\">\n\t\t\t<app-item [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [itemBuscar]=\"itemBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosItem]=\"validosItem\"  \n\t\t\t\t\t\t  [itemService]=\"itemService\" [(opcion)]=\"opcionItem\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(item)]=\"listaItem[i]\"  [ocultarConjuntos]=\"ocultarConjuntosItem\"\n                           [lista_usuarioUltMovItemUsuario]=\"lista_usuarioUltMovItemUsuario\" \n                           [itemsmItemItemN]=\"itemsmItemItemN\"\n                           [lista_itemsmItemItem]=\"lista_itemsmItemItem\" \n                           [itemService]=\"item_service\" \n                            [opcionitemsmItemItem]=\"opcionitemsmItemItem\" \n                            [validositemsmItemItem]=\"validositemsmItemItem\" \n                            [ocultarConjuntositemsmItemItem]=\"ocultarConjuntositemsmItemItem\" \n                            [perfilesItemPerfilN]=\"perfilesItemPerfilN\"\n                           [lista_perfilesItemPerfil]=\"lista_perfilesItemPerfil\" \n                           [perfilService]=\"perfil_service\" \n                            [opcionperfilesItemPerfil]=\"opcionperfilesItemPerfil\" \n                            [validosperfilesItemPerfil]=\"validosperfilesItemPerfil\" \n                            [ocultarConjuntosperfilesItemPerfil]=\"ocultarConjuntosperfilesItemPerfil\" \n \n\t\t\t\t\t  >\n\t\t\t</app-item>\n        </div>\n        <div *ngFor = \"let item of listaItemN;  let i = index  \" class=\"tab-pane\"  \n            [ngClass]=\"{ 'active':idSeleccionado==='N-'+item.id}\" id=\"tab-N-{{item.id}}\">\n\t\t\t<app-item [usuariologueado]=\"usuariologueado\" [etiquetaGeneral]=\"permisosTabla?.etiqueta\" \n\t\t\t\t\t\t  [itemBuscar]=\"itemBuscar\"  [permisosAtributos]=\"permisosAtributos\"\n\t\t\t\t\t\t  [permisosConjuntos]=\"permisosConjuntos\" [validosItem]=\"validosItem\"  \n\t\t\t\t\t\t  [itemService]=\"itemService\" [(opcion)]=\"opcionItem\"\n\t\t\t\t\t\t  [globalesService]=\"globalesService\"\n\t\t\t\t\t\t  [(item)]=\"listaItemN[i]\"  [ocultarConjuntos]=\"ocultarConjuntosItem\"\n                           [lista_usuarioUltMovItemUsuario]=\"lista_usuarioUltMovItemUsuario\" \n                           [itemsmItemItemN]=\"itemsmItemItemN\"\n                           [lista_itemsmItemItem]=\"lista_itemsmItemItem\" \n                           [itemService]=\"item_service\" \n                            [opcionitemsmItemItem]=\"opcionitemsmItemItem\" \n                            [validositemsmItemItem]=\"validositemsmItemItem\" \n                            [ocultarConjuntositemsmItemItem]=\"ocultarConjuntositemsmItemItem\" \n                            [perfilesItemPerfilN]=\"perfilesItemPerfilN\"\n                           [lista_perfilesItemPerfil]=\"lista_perfilesItemPerfil\" \n                           [perfilService]=\"perfil_service\" \n                            [opcionperfilesItemPerfil]=\"opcionperfilesItemPerfil\" \n                            [validosperfilesItemPerfil]=\"validosperfilesItemPerfil\" \n                            [ocultarConjuntosperfilesItemPerfil]=\"ocultarConjuntosperfilesItemPerfil\" \n \n\t\t\t\t\t  >\n\t\t\t</app-item>  \n        </div>\n\n    </div>\n    <div class=\"panel-footer\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"agregarNuevo()\">\n            <span class=\"fa fa-plus-circle\" aria-hidden=\"true\" style=\"font-size:36px\"></span> AGREGAR\n        </button>\n        <button type=\"button\" class=\"btn btn-primary btn-buscar\"  (click)=\"actualizaTodo()\">\n            <span class=\"fa fa-reply-all\" aria-hidden=\"true\" style=\"font-size:36px\"></span> ACTUALIZAR TODO\n        </button>\n    </div>\n</div>\t\t\t\n"

/***/ }),

/***/ "./src/app/itemes/item-conjunto/item-conjunto.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/itemes/item-conjunto/item-conjunto.component.ts ***!
  \*****************************************************************/
/*! exports provided: ItemConjuntoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemConjuntoComponent", function() { return ItemConjuntoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/item */ "./src/app/itemes/shared/item.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemConjuntoComponent = /** @class */ (function () {
    function ItemConjuntoComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.evtAgregarItemsmItemItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.evtAgregarPerfilesItemPerfil = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovItemUsuarioEditar = false;
        this.listaItemN = [];
        this.listaItem = [];
        this.listaItemChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.itemN = new _shared_item__WEBPACK_IMPORTED_MODULE_1__["Item"]();
        this.itemNChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.agregados = 0;
        this.actualizados = 0;
        this.idSeleccionado = "N-0";
    }
    ItemConjuntoComponent.prototype.agregarItemsmItemItem = function () { this.evtAgregarItemsmItemItem.emit(); };
    ;
    ItemConjuntoComponent.prototype.agregarPerfilesItemPerfil = function () { this.evtAgregarPerfilesItemPerfil.emit(); };
    ;
    ItemConjuntoComponent.prototype.elegir = function (item, tipo) {
        this.idSeleccionado = tipo + "-" + item.id;
        this.itemN = item;
    };
    ItemConjuntoComponent.prototype.ngOnInit = function () {
        this.itemN.id = 0;
        this.listaItemN.push(Object.assign({}, this.itemN));
        this.usuariologueado = this.globalesService.dameUsuario();
    };
    ItemConjuntoComponent.prototype.agregarNuevo = function () {
        var pg = new _shared_item__WEBPACK_IMPORTED_MODULE_1__["Item"]();
        pg.id = this.listaItemN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaItemN.push(pg);
    };
    ItemConjuntoComponent.prototype.actualizaTodo = function () {
        this.agregados = 0;
        this.actualizados = 0;
        for (var _i = 0, _a = this.listaItem; _i < _a.length; _i++) {
            var item = _a[_i];
            this.itemService.actualizarItem(item, this.evtActualiza, this);
        }
        for (var _b = 0, _c = this.listaItemN; _b < _c.length; _b++) {
            var item = _c[_b];
            item.id = null;
            this.itemService.guardarItem(item, this.evtGuardar, this);
        }
    };
    ItemConjuntoComponent.prototype.evtGuardar = function (item, obj) {
        obj.agregados++;
        obj.listaItem.push(item);
        if (obj.agregados >= obj.listaItemN.length) {
            obj.itemN = new _shared_item__WEBPACK_IMPORTED_MODULE_1__["Item"]();
            obj.listaItemN = [];
            obj.itemN.id = 0;
            obj.idSeleccionado = "N-" + obj.itemN.id;
            obj.listaItemN.push(Object.assign({}, obj.itemN));
            obj.listaItemChange.emit(obj.listaItem);
        }
        if (obj.agregados >= obj.listaItemN.length &&
            obj.actualizados >= obj.listaItem.length) {
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    ItemConjuntoComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.actualizados++;
            if (obj.agregados >= obj.listaItemN.length &&
                obj.actualizados >= obj.listaItem.length) {
                obj.opcion = 0;
                obj.opcion.emit(obj.opcion);
            }
        }
    };
    ItemConjuntoComponent.prototype.ngOnChanges = function (changes) {
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
    ], ItemConjuntoComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemConjuntoComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemConjuntoComponent.prototype, "itemBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemConjuntoComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemConjuntoComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemConjuntoComponent.prototype, "validosItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemConjuntoComponent.prototype, "ocultarConjuntosItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemConjuntoComponent.prototype, "itemService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ItemConjuntoComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemConjuntoComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemConjuntoComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemConjuntoComponent.prototype, "itemsmItemItemN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemConjuntoComponent.prototype, "lista_itemsmItemItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemConjuntoComponent.prototype, "opcionitemsmItemItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemConjuntoComponent.prototype, "validositemsmItemItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemConjuntoComponent.prototype, "evtAgregarItemsmItemItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemConjuntoComponent.prototype, "configuracionItemsmItemItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemConjuntoComponent.prototype, "ocultarConjuntositemsmItemItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemConjuntoComponent.prototype, "perfilesItemPerfilN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemConjuntoComponent.prototype, "perfilService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemConjuntoComponent.prototype, "lista_perfilesItemPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemConjuntoComponent.prototype, "opcionperfilesItemPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemConjuntoComponent.prototype, "validosperfilesItemPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemConjuntoComponent.prototype, "evtAgregarPerfilesItemPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemConjuntoComponent.prototype, "configuracionPerfilesItemPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemConjuntoComponent.prototype, "ocultarConjuntosperfilesItemPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemConjuntoComponent.prototype, "lista_usuarioUltMovItemUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ItemConjuntoComponent.prototype, "listaItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemConjuntoComponent.prototype, "listaItemChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_item__WEBPACK_IMPORTED_MODULE_1__["Item"])
    ], ItemConjuntoComponent.prototype, "itemN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemConjuntoComponent.prototype, "itemNChange", void 0);
    ItemConjuntoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-conjunto',
            template: __webpack_require__(/*! ./item-conjunto.component.html */ "./src/app/itemes/item-conjunto/item-conjunto.component.html"),
            styles: [__webpack_require__(/*! ./item-conjunto.component.css */ "./src/app/itemes/item-conjunto/item-conjunto.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], ItemConjuntoComponent);
    return ItemConjuntoComponent;
}());



/***/ }),

/***/ "./src/app/itemes/item-crud/item-crud.component.css":
/*!**********************************************************!*\
  !*** ./src/app/itemes/item-crud/item-crud.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/itemes/item-crud/item-crud.component.html":
/*!***********************************************************!*\
  !*** ./src/app/itemes/item-crud/item-crud.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"panel panel-default\">\n        <app-item [usuariologueado]=\"usuariologueado\"\n                           [etiquetaGeneral]=\"permisosTabla?.etiqueta\"\n                           [itemBuscar]=\"itemBuscar\"\n                           [permisosAtributos]=\"permisosAtributos\"\n                           [permisosConjuntos]=\"permisosConjuntos\"\n                           [validosItem]=\"validosItem\"\n                           [itemService]=\"item_service\"\n                           [(opcion)]=\"opcionItem\"\n                           [globalesService]=\"globalesService\"\n                           [(item)]=\"item\"\n                           [ocultarConjuntos]=\"ocultarConjuntosItem\"\n                           [lista_usuarioUltMovItemUsuario]=\"lista_usuarioUltMovItemUsuario\"\n                           [itemsmItemItemN]=\"itemsmItemItemN\"\n                           [lista_itemsmItemItem]=\"lista_itemsmItemItem\"\n                           [itemService]=\"item_service\"\n                            [perfilesItemPerfilN]=\"perfilesItemPerfilN\"\n                           [lista_perfilesItemPerfil]=\"lista_perfilesItemPerfil\"\n                           [perfilService]=\"perfil_service\"\n\n\t\t\t\t\t  >\n\n        </app-item>\n\n        <div class=\"panel-footer\" style=\"text-align: center\">\n\t\t  <div style=\"display: inline-block;width: 90%;\">\n            <button type=\"button\" class=\"btn btn-primary btn-buscar\" [class.hidden]=\"!itemBuscar\" (click)=\"buscarItemFront()\"><span class=\"fa fa-search\"></span> Buscar</button>\n            <button type=\"button\" class=\"btn btn-success btn-agregar\" [class.hidden]=\"!itemAgregar\" (click)=\"nuevoItemFront()\" ><span class=\"fa fa-newspaper\"></span>Nuevo </button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"!itemActualizar\" (click)=\"actualizarItemFront()\"><span class=\"fa fa-arrow-up\"></span> Actualizar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-eliminar\"  [class.hidden]=\"!itemEliminar\" (click)=\"eliminarItemFront()\"> <span class=\"fa fa-trash\"></span>Eliminar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-guardar\"  [disabled]=\"!validaTodosc\" [class.hidden]=\"!itemGuardar\" (click)=\"guardarItemFront()\"><span class=\"fa fa-floppy-disk\"></span>Guardar</button>\n            <button type=\"button\" class=\"btn btn-danger btn-cancelar\"  [class.hidden]=\"!itemCancelar\" (click)=\"cancelarItemFront()\"><span class=\"fa fa-remove\"></span>Cancelar</button>\n            <button type=\"button\" class=\"btn btn-primary btn-limpiar\"  (click)=\"limpiarCampos()\">Limpiar Campos</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteItemWord\" (click)=\"reporteItemWord()\"> <span class=\"fa fa-download-alt\"></span>Word</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteItemExcel\" (click)=\"reporteItemExcel()\"> <span class=\"fa fa-download-alt\"></span> Excel</button>\n            <button type=\"button\" class=\"btn btn-warning btn-actualizar\" [disabled]=\"!validaTodosc\" [class.hidden]=\"datosReporteItemPdf\" (click)=\"reporteItemPdf()\"><span class=\"fa fa-download-alt\"></span> PDF</button>\n          </div>\n\n        </div>\n    </div>\n    <div class=\"modal fade\" id=\"buscarItem_{{nombre}}\" role=\"dialog\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n                <div class=\"modal-body\">\n                    <app-item-list-kendo [nombregrid]=\"'buscar_'+nombre\"  [configuracionItem]=\"configuracionItem\"  (itemSeleccionado) =\"evtItemSeleccionado($event)\">  </app-item-list-kendo>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                </div>\n            </div>\n\n        </div>\n    </div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/itemes/item-crud/item-crud.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/itemes/item-crud/item-crud.component.ts ***!
  \*********************************************************/
/*! exports provided: ItemCrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCrudComponent", function() { return ItemCrudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/core.service */ "./src/app/shared/core.service.ts");
/* harmony import */ var _shared_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/file.service */ "./src/app/shared/file.service.ts");
/* harmony import */ var _shared_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/item */ "./src/app/itemes/shared/item.ts");
/* harmony import */ var _shared_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/item.service */ "./src/app/itemes/shared/item.service.ts");
/* harmony import */ var _shared_configurar_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/configurar-item */ "./src/app/itemes/shared/configurar-item.ts");
/* harmony import */ var _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../usuarios/shared/usuario */ "./src/app/usuarios/shared/usuario.ts");
/* harmony import */ var _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../usuarios/shared/usuario.service */ "./src/app/usuarios/shared/usuario.service.ts");
/* harmony import */ var _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../usuario-btcs/shared/usuario-btc.service */ "./src/app/usuario-btcs/shared/usuario-btc.service.ts");
/* harmony import */ var _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../perfil-red-issstes/shared/perfil-red-issste.service */ "./src/app/perfil-red-issstes/shared/perfil-red-issste.service.ts");
/* harmony import */ var _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hospitales/shared/hospital.service */ "./src/app/hospitales/shared/hospital.service.ts");
/* harmony import */ var _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../entidad-federativas/shared/entidad-federativa.service */ "./src/app/entidad-federativas/shared/entidad-federativa.service.ts");
/* harmony import */ var _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../perfiles/shared/perfil.service */ "./src/app/perfiles/shared/perfil.service.ts");
/* harmony import */ var _perfiles_shared_perfil__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../perfiles/shared/perfil */ "./src/app/perfiles/shared/perfil.ts");
/* harmony import */ var _shared_item_item__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/item-item */ "./src/app/itemes/shared/item-item.ts");
/* harmony import */ var _itemes_shared_item_perfil__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../itemes/shared/item-perfil */ "./src/app/itemes/shared/item-perfil.ts");
/* harmony import */ var _perfiles_shared_configurar_perfil__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../perfiles/shared/configurar-perfil */ "./src/app/perfiles/shared/configurar-perfil.ts");
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







var ItemCrudComponent = /** @class */ (function () {
    function ItemCrudComponent(globalesService, zone, fileservice, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    item_service, usuario_service, usuarioBtc_service, perfilRedIssste_service, 
    //                public perfilBtc_service: PerfilBtcService,
    hospital_service, entidadFederativa_service, perfil_service) {
        this.globalesService = globalesService;
        this.zone = zone;
        this.fileservice = fileservice;
        this.coreService = coreService;
        this.item_service = item_service;
        this.usuario_service = usuario_service;
        this.usuarioBtc_service = usuarioBtc_service;
        this.perfilRedIssste_service = perfilRedIssste_service;
        this.hospital_service = hospital_service;
        this.entidadFederativa_service = entidadFederativa_service;
        this.perfil_service = perfil_service;
        this.opcionItem = 0;
        this.validosItem = {
            id: false,
            principal: false,
            ruta: false,
            nombre: false,
            status: false,
            usuarioUltMov: false,
        };
        this.ocultarConjuntosItem = false;
        this.nombre = "";
        this.permisosTabla = { "tabla": "item", "permiso": 0, "etiqueta": "" };
        this.permisosAtributos = [];
        this.permisosConjuntos = [];
        //  public perfil: Perfil;
        this.accion = 0;
        this.itemLazy = false;
        this.itemPermisos = false;
        this.validaciones = false;
        this.validacionesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.item = new _shared_item__WEBPACK_IMPORTED_MODULE_4__["Item"]();
        this.itemChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.itemTablaChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lista_itemes = [];
        this.usuarioUltMovItemUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.lista_usuarioUltMovItemUsuario = [];
        this.usuarioUltMovItemUsuarioEditar = false;
        this.itemsmItemItemEleccion = new _shared_item__WEBPACK_IMPORTED_MODULE_4__["Item"]();
        this.itemsmItemItemN = [];
        this.lista_itemsmItemItem = [];
        this.perfilesItemPerfilEleccion = new _perfiles_shared_perfil__WEBPACK_IMPORTED_MODULE_14__["Perfil"]();
        this.perfilesItemPerfilN = [];
        this.lista_perfilesItemPerfil = [];
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                this.obtenerPermisos();
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
            }
        }
        this.itemSeleccion = this.itemCancelar = this.itemGuardar = this.itemBuscar = this.itemAgregar = this.itemActualizar = this.itemEliminar = false;
        this.configuracionItem = new _shared_configurar_item__WEBPACK_IMPORTED_MODULE_6__["ConfigurarItem"]();
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovItemUsuario, this);
        this.configuracionItemsmItemItem = new _shared_configurar_item__WEBPACK_IMPORTED_MODULE_6__["ConfigurarItem"]();
        this.item_service.getItemes(this.evtGetItemsmItemItem, this);
        this.configuracionPerfilesItemPerfil = new _perfiles_shared_configurar_perfil__WEBPACK_IMPORTED_MODULE_17__["ConfigurarPerfil"]();
        this.perfil_service.getPerfiles(this.evtGetPerfilesItemPerfil, this);
        this.limpiarCampos();
    }
    Object.defineProperty(ItemCrudComponent.prototype, "itemOcultarConjuntos", {
        get: function () {
            if (this.ocultarConjuntosItem)
                return true;
            return !this.itemActualizar;
        },
        enumerable: true,
        configurable: true
    });
    ItemCrudComponent.prototype.ngOnChanges = function (changes) {
        if (changes.item && changes.item.currentValue == null &&
            this.item == null)
            this.item = new _shared_item__WEBPACK_IMPORTED_MODULE_4__["Item"]();
        else {
            var aux = new _shared_item__WEBPACK_IMPORTED_MODULE_4__["Item"]();
            if (this.item)
                aux.from(this.item);
            if (aux.isOk && aux.isOk()) {
                this.accion = 7;
                this.itemBuscar = this.itemAgregar = this.itemSeleccion = this.itemGuardar = false;
                this.itemActualizar = this.itemEliminar = this.itemCancelar = true;
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
                this.itemSeleccion = this.itemAgregar = this.itemBuscar = this.itemActualizar = this.itemEliminar = false;
                this.itemGuardar = this.itemCancelar = true;
            }
        }
    };
    ItemCrudComponent.prototype.obtenerPermisos = function () {
        var id_expe = -1;
        var tablas = [
            "item",
            "usuario",
            "usuarioBtc",
            "perfilRedIssste",
            "perfilBtc",
            "hospital",
            "entidadFederativa",
            "perfil",
            "item",
        ];
        var parametros = {
            "id_usu": this.usuariologueado.id,
            "tablas": tablas,
            "id_exp": id_expe
        };
        this.itemPermisos = false;
        this.coreService.permisos(parametros, this.evtCorePermisos, this);
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    ItemCrudComponent.prototype.evtCorePermisos = function (permisos, obj) {
        obj.itemPermisos = true;
        if (permisos && permisos.item && permisos.item.PermisoAtributo && permisos.item.PermisoAtributo.length > 0) {
            obj.permisosAtributos = permisos.item.PermisoAtributo;
        }
        else {
            obj.usuariologueado = undefined;
        }
        if (permisos && permisos.item && permisos.item.PermisoConjunto && permisos.item.PermisoConjunto.length > 0) {
            obj.permisosConjuntos = permisos.item.PermisoConjunto;
        }
        if (permisos && permisos.item && permisos.item.PermisoTabla && permisos.item.PermisoTabla.length > 0) {
            obj.permisosTabla = permisos.item.PermisoTabla[0];
            obj.permisosaccionesInicio();
        }
        if (permisos && permisos.perfil && permisos.perfil.PermisoAtributo && permisos.perfil.PermisoAtributo.length > 0) {
            //obj.configuracion$1= permisos.perfil.PermisoAtributo ;
            obj.permisosAtributos.push(permisos.perfil.PermisoAtributo);
        }
        if (permisos && permisos.perfil && permisos.perfil.PermisoAtributo && permisos.perfil.PermisoConjunto.length > 0) {
            obj.permisosConjuntos.push(permisos.perfil.PermisoConjunto);
        }
        if (permisos && permisos.perfil && permisos.perfil.PermisoTabla && permisos.perfil.PermisoTabla.length > 0) {
            //obj.configuracion$1= permisos.perfil.PermisoTabla[0] ;
            // obj.permisosTabla.push(permisos.perfil.PermisoTabla[0] );
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
        if (obj.configurarTablasConjuntos)
            obj.configurarTablasConjuntos();
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    ItemCrudComponent.prototype.configurarListaItemsmItemItem = function () {
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var atributosItem = Object.assign([], this.configuracionItemsmItemItem.permisosAtributos);
        var tablaItem = Object.assign({}, this.configuracionItemsmItemItem.permisosTabla);
        this.configuracionItemsmItemItem = new _shared_configurar_item__WEBPACK_IMPORTED_MODULE_6__["ConfigurarItem"]();
        this.configuracionItemsmItemItem.permisosAtributos = atributosItem;
        this.configuracionItemsmItemItem.permisosTabla = tablaItem;
        this.configuracionItemsmItemItem.permisosTabla.permiso = this.configuracionItemsmItemItem.permisosTabla.permiso & 247;
        this.configuracionItemsmItemItem.titulo = "Agregar " + this.globalesService.cetiqueta(this, "item", "itemsmItemItem");
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    };
    ItemCrudComponent.prototype.configurarListaItemsmItemItemPos = function () {
        this.configuracionItemsmItemItem.rutaLista = this.configuracionItemsmItemItem.crudServiceBaseUrl + "/getItemsm";
        this.configuracionItemsmItemItem.rutaAgregar = this.configuracionItemsmItemItem.crudServiceBaseUrl + "/addItemsm";
        this.configuracionItemsmItemItem.rutaEliminar = this.configuracionItemsmItemItem.crudServiceBaseUrl + "/removeItemsm";
        var vitem = new _shared_item__WEBPACK_IMPORTED_MODULE_4__["Item"]();
        vitem.from(this.itemsmItemItemEleccion);
        this.configuracionItemsmItemItem.itemConsulta = vitem.toDto();
        this.configuracionItemsmItemItem.tipocampoAgEl = "ItemItem";
        this.configuracionItemsmItemItem.campoAgEl = new _shared_item_item__WEBPACK_IMPORTED_MODULE_15__["ItemItem"]();
        this.configuracionItemsmItemItem.campoAgEl.item = vitem.toDto();
    };
    ItemCrudComponent.prototype.configurarListaPerfilesItemPerfil = function () {
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var atributosPerfil = Object.assign([], this.configuracionPerfilesItemPerfil.permisosAtributos);
        var tablaPerfil = Object.assign({}, this.configuracionPerfilesItemPerfil.permisosTabla);
        this.configuracionPerfilesItemPerfil = new _perfiles_shared_configurar_perfil__WEBPACK_IMPORTED_MODULE_17__["ConfigurarPerfil"]();
        this.configuracionPerfilesItemPerfil.permisosAtributos = atributosPerfil;
        this.configuracionPerfilesItemPerfil.permisosTabla = tablaPerfil;
        this.configuracionPerfilesItemPerfil.permisosTabla.permiso = this.configuracionPerfilesItemPerfil.permisosTabla.permiso & 247;
        this.configuracionPerfilesItemPerfil.titulo = "Agregar " + this.globalesService.cetiqueta(this, "item", "perfilesItemPerfil");
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    };
    ItemCrudComponent.prototype.configurarListaPerfilesItemPerfilPos = function () {
        this.configuracionPerfilesItemPerfil.rutaLista = this.configuracionPerfilesItemPerfil.crudServiceBaseUrl + "/getPerfiles";
        this.configuracionPerfilesItemPerfil.rutaAgregar = this.configuracionPerfilesItemPerfil.crudServiceBaseUrl + "/addPerfiles";
        this.configuracionPerfilesItemPerfil.rutaEliminar = this.configuracionPerfilesItemPerfil.crudServiceBaseUrl + "/removePerfiles";
        var vperfil = new _perfiles_shared_perfil__WEBPACK_IMPORTED_MODULE_14__["Perfil"]();
        vperfil.from(this.perfilesItemPerfilEleccion);
        this.configuracionPerfilesItemPerfil.perfilConsulta = vperfil.toDto();
        this.configuracionPerfilesItemPerfil.tipocampoAgEl = "ItemPerfil";
        this.configuracionPerfilesItemPerfil.campoAgEl = new _itemes_shared_item_perfil__WEBPACK_IMPORTED_MODULE_16__["ItemPerfil"]();
        this.configuracionPerfilesItemPerfil.campoAgEl.perfil = vperfil.toDto();
    };
    ItemCrudComponent.prototype.evtGetUsuarioUltMovItemUsuario = function (lista_usuarioUltMovItemUsuario, obj) {
        obj.lista_usuarioUltMovItemUsuario = lista_usuarioUltMovItemUsuario;
        obj.actualizar_UsuarioUltMovItemUsuario();
    };
    ItemCrudComponent.prototype.evtGetItemsmItemItem = function (lista_itemsmItemItem, obj) {
        obj.lista_itemsmItemItem = lista_itemsmItemItem;
    };
    ItemCrudComponent.prototype.evtGetPerfilesItemPerfil = function (lista_perfilesItemPerfil, obj) {
        obj.lista_perfilesItemPerfil = lista_perfilesItemPerfil;
    };
    ItemCrudComponent.prototype.actualizar_UsuarioUltMovItemUsuario = function () {
        if (this.usuarioUltMovItemUsuarioEleccion)
            for (var _i = 0, _a = this.lista_usuarioUltMovItemUsuario; _i < _a.length; _i++) {
                var eleme = _a[_i];
                if (eleme.id == this.usuarioUltMovItemUsuarioEleccion.id) {
                    this.usuarioUltMovItemUsuarioEleccion = eleme;
                    break;
                }
            }
    };
    ItemCrudComponent.prototype.ngDoCheck = function () {
    };
    ItemCrudComponent.prototype.agregarItemsmItemItem = function () {
        var itemItem = new _shared_item_item__WEBPACK_IMPORTED_MODULE_15__["ItemItem"]();
        itemItem.item = this.item;
        itemItem.item = this.itemsmItemItemEleccion;
        this.item_service.addItemsm(itemItem, this.evtAgregarItemsmItemItem, this);
    };
    ItemCrudComponent.prototype.evtAgregarItemsmItemItem = function (respuesta, obj) {
        if (respuesta) {
            obj.configurarListaItemsmItemItem();
            obj.configurarListaItemsmItemItemPos();
            bootbox.alert("Item agregada con �xito");
        }
    };
    ItemCrudComponent.prototype.agregarPerfilesItemPerfil = function () {
        var itemPerfil = new _itemes_shared_item_perfil__WEBPACK_IMPORTED_MODULE_16__["ItemPerfil"]();
        itemPerfil.item = this.item;
        itemPerfil.perfil = this.perfilesItemPerfilEleccion;
        this.item_service.addPerfiles(itemPerfil, this.evtAgregarPerfilesItemPerfil, this);
    };
    ItemCrudComponent.prototype.evtAgregarPerfilesItemPerfil = function (respuesta, obj) {
        if (respuesta) {
            obj.configurarListaPerfilesItemPerfil();
            obj.configurarListaPerfilesItemPerfilPos();
            bootbox.alert("Perfil agregada con �xito");
        }
    };
    ItemCrudComponent.prototype.validaAcciones = function (vall) {
        return this.accion == 0 || this.accion == 1 || this.accion == 4 || this.accion == 6 || (this.accion == 7 && vall) || (this.accion == 2 && vall) || (this.accion == 3 && vall) || (this.accion == 5 && vall);
    };
    Object.defineProperty(ItemCrudComponent.prototype, "validaId", {
        get: function () {
            return this.validosItem['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemCrudComponent.prototype, "validaIds", {
        get: function () {
            return this.validosItem['id'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemCrudComponent.prototype, "validaPrincipal", {
        get: function () {
            return this.validosItem['principal'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemCrudComponent.prototype, "validaRuta", {
        get: function () {
            return this.validosItem['ruta'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemCrudComponent.prototype, "validaNombre", {
        get: function () {
            return this.validosItem['nombre'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemCrudComponent.prototype, "validaStatus", {
        get: function () {
            return this.validosItem['status'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemCrudComponent.prototype, "validaUsuarioUltMov", {
        get: function () {
            return this.validosItem['usuarioUltMov'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemCrudComponent.prototype, "validaTodosc", {
        get: function () {
            var salida = this.validaId && this.validaPrincipal && this.validaRuta && this.validaNombre && this.validaStatus && this.validaUsuarioUltMov;
            if (salida != this.validaciones)
                this.validacionesChange.emit(salida);
            return salida;
        },
        enumerable: true,
        configurable: true
    });
    ItemCrudComponent.prototype.obtenerItemes = function (lista, objeto) {
        objeto.lista_itemes = lista;
        if (lista && lista.length > 0) {
            objeto.item.from(lista[0]);
            objeto.evtItemSeleccionado(objeto.item);
            if (objeto.configuarCombosObjetos)
                objeto.configuarCombosObjetos();
        }
    };
    ItemCrudComponent.prototype.evn_lazy_item = function (item, objeto) {
        objeto.item = item;
        objeto.itemChange.emit(objeto.item);
        objeto.configuarCombosObjetos();
        objeto.itemLazy = true;
    };
    Object.defineProperty(ItemCrudComponent.prototype, "datosReporteItemWord", {
        /* I N I C I O   F U N C I O N E S   P A R A   R E P O R T E S  */
        get: function () {
            return !(this.itemActualizar && this.itemLazy && this.globalesService.preporteWord(this, "item"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemCrudComponent.prototype, "datosReporteItemExcel", {
        get: function () {
            return !(this.itemActualizar && this.itemLazy && this.globalesService.preporteExcel(this, "item"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemCrudComponent.prototype, "datosReporteItemPdf", {
        get: function () {
            return !(this.itemActualizar && this.itemLazy && this.globalesService.preportePdf(this, "item"));
        },
        enumerable: true,
        configurable: true
    });
    ItemCrudComponent.prototype.reporteItemExcel = function () {
        var nombre = "Item.xlsx";
        var path = "file/reporteExcel";
        var parametros = {};
        parametros["entradas"] = { "item": this.item };
        parametros["plantilla"] = "Item.xlsx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    ItemCrudComponent.prototype.reporteItemWord = function () {
        var nombre = "Item.docx";
        var path = "file/reporteWord";
        var parametros = {};
        parametros["entradas"] = { "item": this.item };
        parametros["plantilla"] = "Item.docx";
        parametros["salida"] = nombre;
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    ItemCrudComponent.prototype.reporteItemPdf = function () {
        var nombre = "Item.docx";
        var path = "file/reportePdf";
        var parametros = {};
        parametros["entradas"] = { "item": this.item };
        parametros["plantilla"] = "Item.docx";
        parametros["salida"] = "Item.pdf";
        this.fileservice.downloadFile(parametros["plantilla"], parametros["salida"], path, parametros);
    };
    /* F I N   F U N C I O N E S   P A R A   R E P O R T E S  */
    ItemCrudComponent.prototype.accionesBuscar = function () {
        this.accion = 1;
        this.itemGuardar = this.itemActualizar = this.itemEliminar = false;
        this.itemBuscar = this.itemAgregar = this.itemCancelar = true;
    };
    ItemCrudComponent.prototype.buscarItemFront = function () {
        this.accionesBuscar();
        var vitem = new _shared_item__WEBPACK_IMPORTED_MODULE_4__["Item"]();
        vitem.from(this.item);
        this.configuracionItem = new _shared_configurar_item__WEBPACK_IMPORTED_MODULE_6__["ConfigurarItem"]();
        this.configuracionItem.permisosTabla = { "tabla": "item", "permiso": 8 };
        this.configuracionItem.titulo = "Buscar " + this.permisosTabla.etiqueta;
        this.configuracionItem.itemConsulta = vitem;
        this.permisosacciones();
        $("#buscarItem_" + this.nombre).modal();
    };
    ItemCrudComponent.prototype.buscarItemBack = function (item) {
        this.item_service.getItemesByDto(item, this.eventoSrvItemBuscar, this);
    };
    ItemCrudComponent.prototype.eventoSrvItemBuscar = function (lista, objeto) {
        objeto.lista_itemes = lista;
        if (lista && lista.length > 0) {
            objeto.item = lista[0];
            objeto.itemLazy = false;
            objeto.item_service.lazyItem(objeto.item, objeto.evn_lazy_item, objeto);
        }
    };
    ItemCrudComponent.prototype.guardarItemFront = function () {
        this.accion = 5; // ********************************************************************************************** maquina
        this.guardarItemBack(this.item);
        this.accionesBuscar(); // ********************************************************************************* maquina
        this.permisosacciones();
    };
    ItemCrudComponent.prototype.guardarItemBack = function (item) {
        if (item.usuarioUltMov == null)
            item.usuarioUltMov = this.globalesService.dameUsuario();
        if (item.status == null || item.status == "")
            item.status = 1;
        this.item_service.guardarItem(item, this.eventoSrvItemGuardar, this);
    };
    ItemCrudComponent.prototype.eventoSrvItemGuardar = function (item, obj) {
        obj.item = item;
        bootbox.alert("Datos guardados con éxito");
        var aux = new _shared_item__WEBPACK_IMPORTED_MODULE_4__["Item"]();
        aux.from(item);
        obj.itemChange.emit(aux);
        obj.itemTablaChange.emit(aux);
        obj.itemLazy = false;
        obj.item_service.lazyItem(obj.item, obj.evn_lazy_item, obj);
        obj.accionesActualizar();
    };
    ItemCrudComponent.prototype.actualizarItemFront = function () {
        this.accion = 3; // ************************************************************************************* maquina
        this.actualizarItemBack(this.item);
        this.accionesBuscar(); // ***************************************************************************** maquina
        this.permisosacciones();
    };
    ItemCrudComponent.prototype.actualizarItemBack = function (item) {
        item.usuarioUltMov = this.globalesService.dameUsuario();
        this.item_service.actualizarItem(item, this.eventoSrvItemActualizar, this);
    };
    ItemCrudComponent.prototype.eventoSrvItemActualizar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos actualizados con éxito");
            var aux = new _shared_item__WEBPACK_IMPORTED_MODULE_4__["Item"]();
            // *************************************************************************************************************************  Inician cambio que es necesario para la modificacion al retorno de las fechas
            obj.itemLazy = false;
            obj.item_service.lazyItem(obj.item, obj.evn_lazy_item, obj);
            // *************************************************************************************************************************  Finalia cambio que es necesario para la modificacion al retorno de las fechas
            aux.from(obj.item);
            obj.itemChange.emit(aux);
            obj.itemTablaChange.emit(aux);
            obj.accionesActualizar();
        }
    };
    ItemCrudComponent.prototype.eliminarItemFront = function () {
        this.accion = 4;
        this.eliminarItemBack(this.item);
        this.permisosacciones();
        this.accionesBuscar();
    };
    ItemCrudComponent.prototype.eliminarItemBack = function (item) {
        item.usuarioUltMov = this.globalesService.dameUsuario();
        this.item_service.eliminarItem(item, this.eventoSrvItemEliminar, this);
    };
    ItemCrudComponent.prototype.eventoSrvItemEliminar = function (retorno, obj) {
        if (retorno) {
            bootbox.alert("Datos eliminados con éxito");
            obj.item = new _shared_item__WEBPACK_IMPORTED_MODULE_4__["Item"]();
            obj.itemChange.emit(obj.item);
            obj.itemTablaChange.emit(obj.item);
            obj.limpiarCampos();
        }
    };
    ItemCrudComponent.prototype.cancelarItemFront = function () {
        this.accion = 6;
        this.itemCancelar = this.itemGuardar = this.itemActualizar = this.itemEliminar = false;
        this.itemBuscar = this.itemAgregar = true;
        this.permisosacciones();
    };
    ItemCrudComponent.prototype.nuevoItemFront = function () {
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
                this.itemSeleccion = this.itemAgregar = this.itemBuscar = this.itemActualizar = this.itemEliminar = false;
                this.itemGuardar = this.itemCancelar = true;
            }.bind(this)
        });
    };
    ItemCrudComponent.prototype.configuarCombosObjetos = function () {
        this.lista_usuarioUltMovItemUsuario = [];
        this.usuario_service.getUsuariosActivos(this.evtGetUsuarioUltMovItemUsuario, this);
    };
    ItemCrudComponent.prototype.configurarTablasConjuntos = function () {
        this.configurarListaItemsmItemItem();
        this.configurarListaItemsmItemItemPos();
        this.configurarListaPerfilesItemPerfil();
        this.configurarListaPerfilesItemPerfilPos();
    };
    ItemCrudComponent.prototype.accionesActualizar = function () {
        this.accion = 7;
        this.itemBuscar = this.itemAgregar = this.itemSeleccion = this.itemGuardar = false;
        this.itemActualizar = this.itemEliminar = this.itemCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
    };
    ItemCrudComponent.prototype.evtItemSeleccionado = function (item) {
        this.item = new _shared_item__WEBPACK_IMPORTED_MODULE_4__["Item"]();
        this.item.from(item);
        this.itemLazy = false;
        this.item_service.lazyItem(this.item, this.evn_lazy_item, this);
        this.accion = 7;
        this.itemBuscar = this.itemAgregar = this.itemSeleccion = this.itemGuardar = false;
        this.itemActualizar = this.itemEliminar = this.itemCancelar = true;
        this.permisosacciones();
        var thiss;
        thiss = this;
        if (thiss.configuarCombosObjetos)
            thiss.configuarCombosObjetos();
        if (thiss.configurarTablasConjuntos)
            thiss.configurarTablasConjuntos();
        $("#buscarItem_" + this.nombre).modal("hide");
    };
    ItemCrudComponent.prototype.ngOnInit = function () {
        this.accion = 0; // *********************************************************************************************************** maquina
        this.itemSeleccion = this.itemCancelar = this.itemGuardar = this.itemActualizar = this.itemEliminar = false; // ******************** maquina
        this.itemBuscar = this.itemAgregar = true; // ************************************************************************************* maquina
        this.permisosacciones();
    };
    ItemCrudComponent.prototype.permisosacciones = function () {
        if (this.itemBuscar)
            this.itemBuscar = this.globalesService.pbuscar(this, "item");
        if (this.itemActualizar)
            this.itemActualizar = (this.globalesService.pacutalizar(this, "item") && this.globalesService.pbuscar(this, "item"));
        if (this.itemEliminar)
            this.itemEliminar = (this.globalesService.peliminar(this, "item") && this.globalesService.pbuscar(this, "item"));
        if (this.itemAgregar)
            this.itemAgregar = this.globalesService.pagregar(this, "item");
    };
    ItemCrudComponent.prototype.permisosaccionesInicio = function () {
        this.itemSeleccion = this.itemCancelar = this.itemGuardar = this.itemActualizar = this.itemEliminar = false; // *************************** maquina
        this.itemBuscar = this.itemAgregar = true; // ************************************************************************************* maquina
        this.accion = 0; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    ItemCrudComponent.prototype.limpiarCampos = function () {
        this.item = new _shared_item__WEBPACK_IMPORTED_MODULE_4__["Item"]();
        this.usuarioUltMovItemUsuarioEleccion = new _usuarios_shared_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.itemsmItemItemEleccion = new _shared_item__WEBPACK_IMPORTED_MODULE_4__["Item"]();
        this.perfilesItemPerfilEleccion = new _perfiles_shared_perfil__WEBPACK_IMPORTED_MODULE_14__["Perfil"]();
        this.itemChange.emit(this.item);
        this.itemSeleccion = this.itemCancelar = this.itemGuardar = this.itemActualizar = this.itemEliminar = false; // *************************** maquina
        this.itemBuscar = this.itemAgregar = true; // ************************************************************************************* maquina
        this.accion = 6; // *********************************************************************************************************** maquina
        this.permisosacciones();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ItemCrudComponent.prototype, "ocultarConjuntosItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ItemCrudComponent.prototype, "nombre", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ItemCrudComponent.prototype, "validaciones", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemCrudComponent.prototype, "validacionesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_item__WEBPACK_IMPORTED_MODULE_4__["Item"])
    ], ItemCrudComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemCrudComponent.prototype, "itemChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemCrudComponent.prototype, "itemTablaChange", void 0);
    ItemCrudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-crud',
            template: __webpack_require__(/*! ./item-crud.component.html */ "./src/app/itemes/item-crud/item-crud.component.html"),
            styles: [__webpack_require__(/*! ./item-crud.component.css */ "./src/app/itemes/item-crud/item-crud.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
                //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
                _shared_item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"],
                _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
                _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__["EntidadFederativaService"],
                _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__["PerfilRedIsssteService"],
                //                PerfilBtcService,
                _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"],
                _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcService"],
                _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__["PerfilService"],
                _shared_item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"]
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_1__["GlobalesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _shared_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
            _shared_item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"],
            _usuarios_shared_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"],
            _usuario_btcs_shared_usuario_btc_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioBtcService"],
            _perfil_red_issstes_shared_perfil_red_issste_service__WEBPACK_IMPORTED_MODULE_10__["PerfilRedIsssteService"],
            _hospitales_shared_hospital_service__WEBPACK_IMPORTED_MODULE_11__["HospitalService"],
            _entidad_federativas_shared_entidad_federativa_service__WEBPACK_IMPORTED_MODULE_12__["EntidadFederativaService"],
            _perfiles_shared_perfil_service__WEBPACK_IMPORTED_MODULE_13__["PerfilService"]])
    ], ItemCrudComponent);
    return ItemCrudComponent;
}());



/***/ }),

/***/ "./src/app/itemes/item-list-kendo/item-list-kendo.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/itemes/item-list-kendo/item-list-kendo.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Tipos para item-list-kendo*/\nh3 { text-transform: uppercase;} \n"

/***/ }),

/***/ "./src/app/itemes/item-list-kendo/item-list-kendo.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/itemes/item-list-kendo/item-list-kendo.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!usuariologueado\" >\n    <div class=\"card\">\n        <div align=\"center\" class=\"card-header\"><h3>{{configuracionItem.titulo}}</h3></div>\n        <div class=\"card-body\">\n            <div id=\"div_item_{{nombregrid}}\">\n                <div id=\"grid_item_{{nombregrid}}\"></div>\n            </div>\n        </div>\t\t\n    </div>\n</div>\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n  <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/itemes/item-list-kendo/item-list-kendo.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/itemes/item-list-kendo/item-list-kendo.component.ts ***!
  \*********************************************************************/
/*! exports provided: ItemListKendoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListKendoComponent", function() { return ItemListKendoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");
/* harmony import */ var _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globales.service */ "./src/app/shared/globales.service.ts");
/* harmony import */ var _shared_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/item */ "./src/app/itemes/shared/item.ts");
/* harmony import */ var _shared_configurar_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/configurar-item */ "./src/app/itemes/shared/configurar-item.ts");
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
var ItemListKendoComponent = /** @class */ (function () {
    function ItemListKendoComponent(urlprovider, 
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    coreService, 
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    globalesService) {
        this.urlprovider = urlprovider;
        this.coreService = coreService;
        this.globalesService = globalesService;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "", "permiso": 0, "etiqueta": "" };
        this.itemSeleccionado = new _shared_item__WEBPACK_IMPORTED_MODULE_3__["Item"]();
        this.configuracionItem = new _shared_configurar_item__WEBPACK_IMPORTED_MODULE_4__["ConfigurarItem"]();
        this.nombregrid = "";
        this.evtItemSeleccionado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "item";
        usuariologueado = this.usuariologueado = globalesService.dameUsuario();
        /* var discon="";
        if (this.usuariologueado){
            if (this.usuariologueado.perfil){
                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'item'";
                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'item'";
                this.permisoAtributoService.custom(cadena1, globalesService.evtAtributos, this);
                this.permisoTablaService.custom(cadena2, globalesService.evtTablas, this);
            }
        } */
    }
    ItemListKendoComponent.prototype.actualizaTituloInicial = function () {
        if (this.configuracionItem.titulo.indexOf("Catálogo") != -1) {
            this.configuracionItem.titulo = "Catálogo " + this.permisosTabla.etiqueta;
        }
    };
    ItemListKendoComponent.prototype.ngOnChanges = function (changes) {
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        if (changes.configuracionItem && changes.configuracionItem.currentValue &&
            (changes.configuracionItem.previousValue instanceof _shared_configurar_item__WEBPACK_IMPORTED_MODULE_4__["ConfigurarItem"])) {
            if (changes.configuracionItem.currentValue.permisosAtributos)
                this.permisosAtributos = changes.configuracionItem.currentValue.permisosAtributos;
            if (changes.configuracionItem.currentValue.permisosTabla)
                this.permisosTabla = changes.configuracionItem.currentValue.permisosTabla;
            if ($("#grid_item_" + this.nombregrid)) {
                this.inicializaGrid();
                if (this.dataSource) {
                    this.grid.dataSource = this.dataSource;
                    this.dataSource.read();
                }
            }
        }
    };
    ItemListKendoComponent.prototype.ngOnInit = function () {
        self["grid_item_" + this.nombregrid] = this;
        usuariologueado = this.usuariologueado = this.globalesService.dameUsuario();
        //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        var ejecutarpermisos = true;
        if (this.configuracionItem.permisosAtributos &&
            this.configuracionItem.permisosTabla)
            ejecutarpermisos = false;
        if (this.usuariologueado && ejecutarpermisos) {
            if (this.usuariologueado.perfil) {
                var tablas = [
                    "item",
                ];
                var parametros = {
                    "id_usu": this.usuariologueado.id,
                    "tablas": tablas,
                    "id_exp": -1
                };
                this.coreService.permisos(parametros, this.evtCorePermisos, this);
                //                discon="with perfil.id = "+this.usuariologueado.perfil.id;
                //                var cadena1="select pa from PermisoAtributo as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'Item'";
                //                var cadena2="select pa from PermisoTabla as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'Item'";
                //                var cadena3="select pa from PermisoConjunto as pa inner join pa.perfiles as perfil "+discon+" where pa.tabla= 'Item'";
                //                this.permisoAtributoService.custom(cadena1, this.evtAtributos, this);
                //                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
                //                this.permisoConjuntoService.custom(cadena3, this.evtConjuntos, this);
            }
        }
        //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
        if (this.configuracionItem.permisosAtributos)
            this.permisosAtributos = this.configuracionItem.permisosAtributos;
        if (this.configuracionItem.permisosTabla)
            this.permisosTabla = this.configuracionItem.permisosTabla;
        this.configuraGrid();
    };
    //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    ItemListKendoComponent.prototype.evtCorePermisos = function (permisos, obj) {
        if (permisos && permisos.item && permisos.item.PermisoAtributo && permisos.item.PermisoAtributo.length > 0
            && !obj.configuracionItem.permisosAtributos) {
            obj.globalesService.evtAtributos(permisos.item.PermisoAtributo, obj);
            //            obj.permisosAtributos = permisos.Item.PermisoAtributo ;
        }
        if (permisos && permisos.item && permisos.item.PermisoTabla && permisos.item.PermisoTabla.length > 0
            && !obj.configuracionItem.permisosTabla) {
            obj.globalesService.evtTablas(permisos.item.PermisoTabla, obj);
            //            obj.permisosTabla = permisos.Item.PermisoTabla[0] ;
            //            obj.permisosaccionesInicio();
        }
    };
    //****************************************************************************************F I N    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
    ItemListKendoComponent.prototype.configuraGrid = function () {
        var _this = this;
        if ($("#grid_item_" + this.nombregrid).data("kendoGrid")) {
        }
        else {
            setTimeout(function () {
                _this.inicializaGrid();
                _this.configuraGrid();
            }, 300);
        }
    };
    ItemListKendoComponent.prototype.sourcegrid = function () {
        function completar(e) {
            (e);
        }
        ;
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        if (this.configuracionItem.campoAgEl != null
            && this.configuracionItem.itemConsulta
            && this.configuracionItem.itemConsulta.isOk
            && !this.configuracionItem.itemConsulta.isOk())
            return;
        if (this.configuracionItem.itemConsulta) {
            if (!this.configuracionItem.campoAgEl && this.configuracionItem.itemConsulta instanceof _shared_item__WEBPACK_IMPORTED_MODULE_3__["Item"])
                this.configuracionItem.rutaLista = this.crudServiceBaseUrl + "/getItemesByDto";
            this.lista = this.configuracionItem.lecturaP(completar, this.configuracionItem.itemConsulta);
            if (this.configuracionItem.campoAgEl) {
                this.rutaAgregar = this.configuracionItem.agregarP(function () { }, this.configuracionItem.campoAgEl);
                this.rutaEliminar = this.configuracionItem.eliminarP(function () { }, this.configuracionItem.campoAgEl);
            }
            else {
                this.rutaAgregar = this.configuracionItem.agregarP(completar, this.configuracionItem.itemConsulta);
                this.rutaEliminar = this.configuracionItem.eliminarP(completar, this.configuracionItem.itemConsulta);
            }
        }
        else {
            this.lista = this.configuracionItem.lectura();
            this.rutaAgregar = this.configuracionItem.agregar();
            this.rutaEliminar = this.configuracionItem.eliminar();
        }
        var modelo = {};
        if (this.globalesService.avisible(this, "item", "id")) {
            modelo["id"] = "id";
        }
        var campos = {};
        if (this.globalesService.avisible(this, "item", "id")) {
            campos["id"] = { editable: false, nullable: true, type: "number" };
        }
        if (this.globalesService.avisible(this, "item", "nombre")) {
            campos["nombre"] = { editable: this.globalesService.aenable(this, "item", "nombre"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "item", "ruta")) {
            campos["ruta"] = { editable: this.globalesService.aenable(this, "item", "ruta"), nullable: true, type: "string" };
        }
        if (this.globalesService.avisible(this, "item", "principal")) {
            campos["principal"] = { editable: this.globalesService.aenable(this, "item", "principal"), nullable: true };
        }
        if (this.globalesService.avisible(this, "item", "status")) {
            campos["status"] = { editable: this.globalesService.aenable(this, "item", "status"), nullable: true, defaultValue: "1" };
        }
        if (this.globalesService.avisible(this, "item", "usuarioUltMov")) {
            campos["usuarioUltMov"] = { editable: this.globalesService.aenable(this, "item", "usuarioUltMov"), nullable: true, type: "object", defaultValue: { "id": "", "password": "" } };
        }
        modelo["fields"] = campos;
        var slf = this;
        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: this.lista,
                update: {
                    url: this.configuracionItem.rutaActualizar,
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
            if (self.configuracionItem.campoAgEl) {
                if (self.configuracionItem.tipocampoAgEl == "ItemItem")
                    self.configuracionItem.campoAgEl.item2 = options.models[0];
                else
                    self.configuracionItem.campoAgEl.item = options.models[0];
                return JSON.stringify(self.configuracionItem.campoAgEl);
            }
            else if (est.options[operation].data.models.item) {
                est.options[operation].data.models.item2 = options.models[0];
                return JSON.stringify(est.options[operation].data.models);
            }
            return JSON.stringify(options.models[0]);
        }
    };
    ItemListKendoComponent.prototype.inicializaGrid = function () {
        if (this.permisosAtributos.length == 0 || this.permisosAtributos == null)
            return;
        if (this.permisosTabla == null || (this.permisosTabla && this.permisosTabla.permiso == 0))
            return;
        this.sourcegrid();
        var columnas = [];
        if (this.globalesService.avisible(this, "item", "id")) {
            columnas.push({ field: "id", title: this.globalesService.aetiqueta(this, "item", "id"), editor: this.globalesService.txtNumero });
        }
        if (this.globalesService.avisible(this, "item", "nombre")) {
            columnas.push({ field: "nombre", title: this.globalesService.aetiqueta(this, "item", "nombre"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "item", "ruta")) {
            columnas.push({ field: "ruta", title: this.globalesService.aetiqueta(this, "item", "ruta"), editor: this.globalesService.txtTexto });
        }
        if (this.globalesService.avisible(this, "item", "principal")) {
            columnas.push({ field: "principal", title: this.globalesService.aetiqueta(this, "item", "principal") });
        }
        if (this.globalesService.avisible(this, "item", "status")) {
            columnas.push({ field: "status", title: this.globalesService.aetiqueta(this, "item", "status"), editor: this.globalesService.estadoDropDownEditor,
                template: "<img  style='width: 100%;' id='#=status#' src='assets/imagenes/png/#=status#.png'>" });
        }
        if (this.globalesService.avisible(this, "item", "usuarioUltMov")) {
            columnas.push({ field: "usuarioUltMov", title: this.globalesService.aetiqueta(this, "item", "usuarioUltMov"), editor: usuarioUltMovDropDownEditor, template: " #if (usuarioUltMov){#   #=usuarioUltMov.password# # } # " });
        }
        var op_agregar = [{ name: "create", text: "Agregar" }];
        if (!this.globalesService.pagregar(this, "item"))
            op_agregar = [];
        var comandos = [];
        if (this.globalesService.pacutalizar(this, "item")) {
            comandos.push({ name: "edit", text: "" });
        }
        if (this.globalesService.peliminar(this, "item")) {
            comandos.push({ name: "destroy", text: "", template: '<a class="k-button k-button-icontext k-grid-delete" ><span class="fa fa-trash"></span></a>' });
        }
        if (this.globalesService.pbuscar(this, "item") && this.configuracionItem.itemConsulta != null) {
            comandos.push({ name: "seleccionar", text: "", click: this.showDetails, template: '<a class="k-button k-button-icontext k-grid-seleccionar" ><span class="fa fa-upload"></span></a>' });
        }
        columnas.push({
            command: comandos, title: "Acciones", width: "20%"
        });
        if (this.grid)
            $("#grid_item_" + this.nombregrid).kendoGrid('destroy').empty();
        $("#grid_item_" + this.nombregrid).kendoGrid({
            dataSource: this.dataSource,
            sortable: {
                mode: "single",
                allowUnsort: false
            },
            pageable: true,
            height: this.configuracionItem.altoComponente,
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
        this.grid = $("#grid_item_" + this.nombregrid).data("kendoGrid");
        this.grid.refresh();
        var rutausuarioUltMov = this.urlprovider.serverURL + "usuario/getUsuariosActivos";
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
    };
    ItemListKendoComponent.prototype.showDetails = function (e) {
        e.preventDefault();
        //        this.grid = $("#grid_item_" + this.nombregrid).data("kendoGrid");
        var fila = $(e.currentTarget).closest("tr");
        var gridac = self[fila.closest('div[id^="grid"]').prop("id")];
        var dataItem = fila.closest('div[id^="grid"]').data("kendoGrid").dataItem(fila);
        gridac.itemSeleccionado = new _shared_item__WEBPACK_IMPORTED_MODULE_3__["Item"]();
        gridac.itemSeleccionado.from(dataItem);
        gridac.evtItemSeleccionado.emit(gridac.itemSeleccionado);
        (gridac.itemSeleccionado);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_configurar_item__WEBPACK_IMPORTED_MODULE_4__["ConfigurarItem"])
    ], ItemListKendoComponent.prototype, "configuracionItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ItemListKendoComponent.prototype, "nombregrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("itemSeleccionado"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ItemListKendoComponent.prototype, "evtItemSeleccionado", void 0);
    ItemListKendoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-list-kendo',
            template: __webpack_require__(/*! ./item-list-kendo.component.html */ "./src/app/itemes/item-list-kendo/item-list-kendo.component.html"),
            styles: [__webpack_require__(/*! ./item-list-kendo.component.css */ "./src/app/itemes/item-list-kendo/item-list-kendo.component.css")],
            providers: [
                //             PermisoTablaService,
                //****************************************************************************************I N I C I O    D E    O P T I M I Z A C I O N    D E    C O D I G O *****************************
                _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_url_provider__WEBPACK_IMPORTED_MODULE_1__["URLProvider"],
            _shared_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"],
            _shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"]])
    ], ItemListKendoComponent);
    return ItemListKendoComponent;
}());



/***/ }),

/***/ "./src/app/itemes/item-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/itemes/item-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ItemRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemRoutingModule", function() { return ItemRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _itemes_item_list_kendo_item_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../itemes/item-list-kendo/item-list-kendo.component */ "./src/app/itemes/item-list-kendo/item-list-kendo.component.ts");
/* harmony import */ var _itemes_item_crud_item_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../itemes/item-crud/item-crud.component */ "./src/app/itemes/item-crud/item-crud.component.ts");
/* harmony import */ var _itemes_item_table_item_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../itemes/item-table/item-table.component */ "./src/app/itemes/item-table/item-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'item-list-kendo', component: _itemes_item_list_kendo_item_list_kendo_component__WEBPACK_IMPORTED_MODULE_2__["ItemListKendoComponent"] },
    { path: 'item-crud', component: _itemes_item_crud_item_crud_component__WEBPACK_IMPORTED_MODULE_3__["ItemCrudComponent"] },
    { path: 'item-table', component: _itemes_item_table_item_table_component__WEBPACK_IMPORTED_MODULE_4__["ItemTableComponent"] },
];
var ItemRoutingModule = /** @class */ (function () {
    function ItemRoutingModule() {
    }
    ItemRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ItemRoutingModule);
    return ItemRoutingModule;
}());



/***/ }),

/***/ "./src/app/itemes/item-table/item-table.component.css":
/*!************************************************************!*\
  !*** ./src/app/itemes/item-table/item-table.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/itemes/item-table/item-table.component.html":
/*!*************************************************************!*\
  !*** ./src/app/itemes/item-table/item-table.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"usuariologueado\" >\n<div class=\"card\">\n<div class=\"card-header\"><h1>Busqueda {{permisosTabla?.etiqueta}}</h1></div>\n<div class=\"card-body\">\n<div class=\"container-fluid\" >    \n\n<table *ngIf=\"muestraTabla\" id=\"tabla_item\" class=\"table \" cellspacing=\"0\" width=\"100%\">\n    <thead>\n        <tr>\n            <th [class.hidden]=\"!avisible('item','id')\" >{{aetiqueta('item','id')}}</th>\n            <th [class.hidden]=\"!avisible('item','nombre')\" >{{aetiqueta('item','nombre')}}</th>\n            <th [class.hidden]=\"!avisible('item','ruta')\" >{{aetiqueta('item','ruta')}}</th>\n            <th [class.hidden]=\"!avisible('item','principal')\" >{{aetiqueta('item','principal')}}</th>\n            <th [class.hidden]=\"!avisible('item','status')\" >{{aetiqueta('item','status')}}</th>\n            <th [class.hidden]=\"!avisible('item','usuarioUltMov')\" >{{aetiqueta('item','usuarioUltMov')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </thead>\n    <tfoot>\n        <tr>\n            <th [class.hidden]=\"!avisible('item','id')\" >{{aetiqueta('item','id')}}</th>\n            <th [class.hidden]=\"!avisible('item','nombre')\" >{{aetiqueta('item','nombre')}}</th>\n            <th [class.hidden]=\"!avisible('item','ruta')\" >{{aetiqueta('item','ruta')}}</th>\n            <th [class.hidden]=\"!avisible('item','principal')\" >{{aetiqueta('item','principal')}}</th>\n            <th [class.hidden]=\"!avisible('item','status')\" >{{aetiqueta('item','status')}}</th>\n            <th [class.hidden]=\"!avisible('item','usuarioUltMov')\" >{{aetiqueta('item','usuarioUltMov')}}</th>\n\n            <th>Acción</th>\n        </tr>\n    </tfoot>\n</table>\n</div>\n<app-item [class.hidden]=\"primero\" [(item)]=\"itemSeleccionado\" (itemTablaChange)=\"cambio_item($event)\"> </app-item>    \n</div>\n</div>\n</div>\n\n<div [hidden]=\"usuariologueado\" class=\"alert alert-danger\">\n    <strong>Alerta !</strong> No tienes permisos para esta página.\n</div>\n"

/***/ }),

/***/ "./src/app/itemes/item-table/item-table.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/itemes/item-table/item-table.component.ts ***!
  \***********************************************************/
/*! exports provided: ItemTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemTableComponent", function() { return ItemTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/item */ "./src/app/itemes/shared/item.ts");
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






var ItemTableComponent = /** @class */ (function () {
    function ItemTableComponent(globalesService, permisoAtributoService, permisoTablaService, urlProvider) {
        this.globalesService = globalesService;
        this.permisoAtributoService = permisoAtributoService;
        this.permisoTablaService = permisoTablaService;
        this.urlProvider = urlProvider;
        this.primero = true;
        this.permisosAtributos = [];
        this.permisosTabla = { "tabla": "item", "permiso": 0, "etiqueta": "" };
        this.ptabla = false;
        this.pattr = false;
        this.itemSeleccionado = new _shared_item__WEBPACK_IMPORTED_MODULE_1__["Item"]();
        this.usuariologueado = globalesService.dameUsuario();
        var discon = "";
        if (this.usuariologueado) {
            if (this.usuariologueado.perfil) {
                discon = "with perfil.id = " + this.usuariologueado.perfil.id;
                var cadena2 = "select pa from PermisoTabla as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'item'";
                this.permisoTablaService.custom(cadena2, this.evtTablas, this);
            }
        }
    }
    ItemTableComponent.prototype.evtTablas = function (lista, obj) {
        if (lista.length >= 0) {
            obj.permisosTabla = lista[0];
            obj.ptabla = true;
            var discon = "with perfil.id = " + obj.usuariologueado.perfil.id;
            var cadena1 = "select pa from PermisoAtributo as pa inner join pa.perfiles as perfil " + discon + " where pa.tabla= 'item'";
            obj.permisoAtributoService.custom(cadena1, obj.evtAtributos, obj);
        }
    };
    ItemTableComponent.prototype.evtAtributos = function (lista, obj) {
        obj.permisosAtributos = lista;
        obj.pattr = true;
        if (obj.ptabla && obj.pattr) {
            setTimeout(function () { obj.getColumnas(obj); }, 500);
        }
    };
    Object.defineProperty(ItemTableComponent.prototype, "muestraTabla", {
        get: function () {
            return this.ptabla && this.pattr;
        },
        enumerable: true,
        configurable: true
    });
    ItemTableComponent.prototype.getColumnas = function (obj) {
        var self = obj;
        var columnas = [];
        var columnasNoVisibles = [];
        if (!this.avisible("item", "id"))
            columnasNoVisibles.push(0);
        columnas.push({ "data": "id" });
        if (!this.avisible("item", "nombre"))
            columnasNoVisibles.push(1);
        columnas.push({ "data": "nombre" });
        if (!this.avisible("item", "ruta"))
            columnasNoVisibles.push(2);
        columnas.push({ "data": "ruta" });
        if (!this.avisible("item", "principal"))
            columnasNoVisibles.push(3);
        columnas.push({ "data": "principal" });
        if (!this.avisible("item", "status"))
            columnasNoVisibles.push(4);
        columnas.push({ "data": "status" });
        if (!this.avisible("item", "usuarioUltMov"))
            columnasNoVisibles.push(5);
        columnas.push({
            "data": function (oObj) {
                if (oObj.usuarioUltMov)
                    return "<span style=\"cursor: pointer\">" + oObj.usuarioUltMov.username + "</span>";
                return "";
            }
        });
        if (self.pacutalizar("item"))
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
        var tabla = $('#tabla_item').DataTable({
            "columnDefs": novisibles,
            language: {
                url: 'assets/Spanish.json'
            },
            "initComplete": function (settings, json) {
                var xs = $("#tabla_item_wrapper").find(".row");
                $($(xs[0]).find(".col-sm-6")[0]).
                    find(".dataTables_length").
                    append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
                    .click(function () {
                    self.itemSeleccionado = new _shared_item__WEBPACK_IMPORTED_MODULE_1__["Item"]();
                    self.primero = false;
                });
            },
            "ajax": {
                "url": self.urlProvider.serverURL + "item/getItemes",
                "type": "POST",
                "contentType": "application/json",
                "datatype": 'json',
                "dataSrc": "",
            },
            "columns": columnas,
        });
        $('#tabla_item tbody').on('click', 'td', function () {
            if (this.cellIndex == $(this).parent().find("td").length - 1) {
                var data = $('#tabla_item').DataTable().row(this).data();
                self.itemSeleccionado = new _shared_item__WEBPACK_IMPORTED_MODULE_1__["Item"]();
                self.itemSeleccionado.from(data);
                self.primero = false;
                if ($(this).parent().hasClass('selected')) {
                    $(this).parent().removeClass('selected');
                }
                else {
                    $('#tabla_item').DataTable().$('tr.selected').removeClass('selected');
                    $(this).parent().addClass('selected');
                }
            }
        });
    };
    ItemTableComponent.prototype.ngOnInit = function () {
    };
    ItemTableComponent.prototype.cambio_item = function (item) {
        $('#tabla_item').DataTable().ajax.reload(null, false);
        this.primero = true;
    };
    // **********************************************************************************
    // **********************************************************************************
    // **           I N I C I A N   P E R M I S O S   P A R A   P E R F I L E S  
    // **********************************************************************************
    // **********************************************************************************
    ItemTableComponent.prototype.paux = function (tabla, permiso) {
        if (this.permisosTabla.tabla == tabla && (this.permisosTabla.permiso & permiso) == permiso)
            return true;
        return false;
    };
    ItemTableComponent.prototype.preporteWord = function (tabla) { return this.paux(tabla, 64); };
    ItemTableComponent.prototype.preporteExcel = function (tabla) { return this.paux(tabla, 32); };
    ItemTableComponent.prototype.preportePdf = function (tabla) { return this.paux(tabla, 16); };
    ItemTableComponent.prototype.pbuscar = function (tabla) { return this.paux(tabla, 8); };
    ItemTableComponent.prototype.pacutalizar = function (tabla) { return this.paux(tabla, 4); };
    ItemTableComponent.prototype.peliminar = function (tabla) { return this.paux(tabla, 2); };
    ItemTableComponent.prototype.pagregar = function (tabla) { return this.paux(tabla, 1); };
    //******************************************************************************************
    //*******  P E R M I S O S   S O B R E   A T R I B U T O S  ********************************
    //******************************************************************************************
    ItemTableComponent.prototype.aetiqueta = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo)
                return elemento.etiqueta;
        }
        return "";
    };
    ItemTableComponent.prototype.avalidacion = function (tabla, atributo) {
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
    ItemTableComponent.prototype.amensaje = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo) {
                return elemento.mensaje;
            }
        }
        return null;
    };
    ItemTableComponent.prototype.aeditable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 8) == 8)
                return true;
        }
        return false;
    };
    ItemTableComponent.prototype.arequerido = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 4) == 4)
                return true;
        }
        return false;
    };
    ItemTableComponent.prototype.avisible = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 2) == 2)
                return true;
        }
        return false;
    };
    ItemTableComponent.prototype.aenable = function (tabla, atributo) {
        for (var _i = 0, _a = this.permisosAtributos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento.tabla == tabla && elemento.atributo == atributo && (elemento.permiso & 1) == 1)
                return true;
        }
        return false;
    };
    ItemTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-table',
            template: __webpack_require__(/*! ./item-table.component.html */ "./src/app/itemes/item-table/item-table.component.html"),
            styles: [__webpack_require__(/*! ./item-table.component.css */ "./src/app/itemes/item-table/item-table.component.css")],
            providers: [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
                _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
                _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            ]
        }),
        __metadata("design:paramtypes", [_shared_globales_service__WEBPACK_IMPORTED_MODULE_2__["GlobalesService"],
            _permiso_atributos_shared_permiso_atributo_service__WEBPACK_IMPORTED_MODULE_4__["PermisoAtributoService"],
            _permiso_tablas_shared_permiso_tabla_service__WEBPACK_IMPORTED_MODULE_5__["PermisoTablaService"],
            _shared_url_provider__WEBPACK_IMPORTED_MODULE_3__["URLProvider"]])
    ], ItemTableComponent);
    return ItemTableComponent;
}());



/***/ }),

/***/ "./src/app/itemes/item.module.ts":
/*!***************************************!*\
  !*** ./src/app/itemes/item.module.ts ***!
  \***************************************/
/*! exports provided: ItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemModule", function() { return ItemModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _item_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-routing.module */ "./src/app/itemes/item-routing.module.ts");
/* harmony import */ var _item_list_kendo_item_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item-list-kendo/item-list-kendo.component */ "./src/app/itemes/item-list-kendo/item-list-kendo.component.ts");
/* harmony import */ var _item_crud_item_crud_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-crud/item-crud.component */ "./src/app/itemes/item-crud/item-crud.component.ts");
/* harmony import */ var _item_conjunto_item_conjunto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-conjunto/item-conjunto.component */ "./src/app/itemes/item-conjunto/item-conjunto.component.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item/item.component */ "./src/app/itemes/item/item.component.ts");
/* harmony import */ var _item_table_item_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./item-table/item-table.component */ "./src/app/itemes/item-table/item-table.component.ts");
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











var ItemModule = /** @class */ (function () {
    function ItemModule(parentModule) {
        if (parentModule) {
            throw new Error('ItemModule is already loaded. Import it in the AppModule only');
        }
    }
    ItemModule_1 = ItemModule;
    ItemModule.forRoot = function () {
        return {
            ngModule: ItemModule_1,
            providers: []
        };
    };
    var ItemModule_1;
    ItemModule = ItemModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _core_componentes_personalizados_personalizados_module__WEBPACK_IMPORTED_MODULE_10__["PersonalizadosModule"], _item_routing_module__WEBPACK_IMPORTED_MODULE_3__["ItemRoutingModule"],
                _shared_usuario_perfil_module__WEBPACK_IMPORTED_MODULE_9__["UsuarioPerfilModule"].forRoot()
            ],
            declarations: [
                _item_list_kendo_item_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["ItemListKendoComponent"],
                _item_item_component__WEBPACK_IMPORTED_MODULE_7__["ItemComponent"],
                _item_crud_item_crud_component__WEBPACK_IMPORTED_MODULE_5__["ItemCrudComponent"],
                _item_conjunto_item_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["ItemConjuntoComponent"],
                _item_table_item_table_component__WEBPACK_IMPORTED_MODULE_8__["ItemTableComponent"],
            ],
            exports: [
                _item_list_kendo_item_list_kendo_component__WEBPACK_IMPORTED_MODULE_4__["ItemListKendoComponent"],
                _item_item_component__WEBPACK_IMPORTED_MODULE_7__["ItemComponent"],
                _item_crud_item_crud_component__WEBPACK_IMPORTED_MODULE_5__["ItemCrudComponent"],
                _item_conjunto_item_conjunto_component__WEBPACK_IMPORTED_MODULE_6__["ItemConjuntoComponent"],
                _item_table_item_table_component__WEBPACK_IMPORTED_MODULE_8__["ItemTableComponent"],
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [ItemModule])
    ], ItemModule);
    return ItemModule;
}());



/***/ }),

/***/ "./src/app/itemes/item/item.component.css":
/*!************************************************!*\
  !*** ./src/app/itemes/item/item.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n    width: 100%;\n    padding: 0.5%;\n}\n\n.etiquetas {\n    width: 20%;\n    text-align: left;\n}\n\n.ng-valid:not(form):not(div),\n.ng-valid.required:not(form):not(div) {\n    /* border-left: 5px solid#42A948; */\n    /* green */\n}\n\n.ng-invalid:not(form):not(div) {\n    border-left: 5px solid #a94442;\n    /* red */\n}\n\n.editarObjeto {\n    position: absolute !important;\n    z-index: 20;\n    width: auto;\n    overflow: visible;\n}"

/***/ }),

/***/ "./src/app/itemes/item/item.component.html":
/*!*************************************************!*\
  !*** ./src/app/itemes/item/item.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [hidden]=\"!usuariologueado\" #formaGeneral=\"ngForm\"     >\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\"><h1>{{etiquetaGeneral}}</h1></div>\n        <div class=\"panel-body\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                     <app-componente-cadena [componente]=\"'item'\"\n                                                   [atributo]=\"'id'\"\n                                                   [buscar]=\"itemBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosItem['id']\"\n                                                   [(dato)]=\"item.id\"   class=\"w-100\" >\n                    </app-componente-cadena >\n                     <app-componente-cadena [componente]=\"'item'\"\n                                                   [atributo]=\"'nombre'\"\n                                                   [buscar]=\"itemBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosItem['nombre']\"\n                                                   [(dato)]=\"item.nombre\"   class=\"w-100\" >\n                    </app-componente-cadena >\n                     <app-componente-cadena [componente]=\"'item'\"\n                                                   [atributo]=\"'ruta'\"\n                                                   [buscar]=\"itemBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosItem['ruta']\"\n                                                   [(dato)]=\"item.ruta\"   class=\"w-100\" >\n                    </app-componente-cadena >\n                     <app-componente-cadena [componente]=\"'item'\"\n                                                   [atributo]=\"'principal'\"\n                                                   [buscar]=\"itemBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosItem['principal']\"\n                                                   [(dato)]=\"item.principal\"   class=\"w-100\" >\n                    </app-componente-cadena >\n<!--         <div [class.hidden]=\"OcultarConjuntosItem\" >\n            <div class=\"clearfix\"> </div>\n            <div class=\"form-group row\"  *ngIf=\"globalesService.cagregar(this,'item','itemsmItemItem')\" >\n              <div class=\"col-12 mr-ml-4\" >\n                <label for=\"sel1\">{{globalesService.cetiqueta(this,'item','itemsmItemItem')}}:</label>\n                <div class=\"form-group\">\n                    <div class=\"input-group\">\n                        <select class=\"form-control\" [(ngModel)]=\"itemsmItemItemEleccion\" name=\"itemsmItemItemEleccion\">\n                            <option *ngFor = \"let itemsmItemItem of lista_itemsmItemItem\" [ngValue]=\"itemsmItemItem\"  >{{itemsmItemItem.nombre}}</option>\n                        </select>\n                        <span class=\"input-group-btn\">\n                             <button class=\"btn btn-default\" type=\"button\" (click)=\"agregarItemsmItemItem()\" >Agregar</button>\n                        </span>\n                    </div>\n                </div>\n              </div>\n            </div>\n            <app-item-list-kendo *ngIf=\"globalesService.cagregar(this,'item','itemsmItemItem') || globalesService.cagregarnuevo(this,'item','itemsmItemItem') \"\n                                 [nombregrid]=\"'itemsmItemItem_'+nombre\"  [configuracionItem]=\"configuracionItemsmItemItem\" ></app-item-list-kendo>\n        </div> -->\n<!--         <div [class.hidden]=\"OcultarConjuntosItem\" >\n            <div class=\"clearfix\"> </div>\n            <div class=\"form-group row\"  *ngIf=\"globalesService.cagregar(this,'item','perfilesItemPerfil')\" >\n              <div class=\"col-12 mr-ml-4\" >\n                <label for=\"sel1\">{{globalesService.cetiqueta(this,'item','perfilesItemPerfil')}}:</label>\n                <div class=\"form-group\">\n                    <div class=\"input-group\">\n                        <select class=\"form-control\" [(ngModel)]=\"perfilesItemPerfilEleccion\" name=\"perfilesItemPerfilEleccion\">\n                            <option *ngFor = \"let perfilesItemPerfil of lista_perfilesItemPerfil\" [ngValue]=\"perfilesItemPerfil\"  >{{perfilesItemPerfil.nombre}}</option>\n                        </select>\n                        <span class=\"input-group-btn\">\n                             <button class=\"btn btn-default\" type=\"button\" (click)=\"agregarPerfilesItemPerfil()\" >Agregar</button>\n                        </span>\n                    </div>\n                </div>\n              </div>\n            </div>\n            app-perfil-list-kendo *ngIf=\"globalesService.cagregar(this,'item','perfilesItemPerfil') || globalesService.cagregarnuevo(this,'item','perfilesItemPerfil') \"\n                                 [nombregrid]=\"'perfilesItemPerfil_'+nombre\"  [configuracionPerfil]=\"configuracionPerfilesItemPerfil\" ></app-perfil-list-kendo\n        </div> -->\n                     <app-componente-cadena [componente]=\"'item'\"\n                                                   [atributo]=\"'status'\"\n                                                   [buscar]=\"itemBuscar\"\n                                                   [permisosAtributos]=\"permisosAtributos\"\n                                                   [(valido)]=\"validosItem['status']\"\n                                                   [(dato)]=\"item.status\"   class=\"w-100\" >\n                    </app-componente-cadena >\n                    <div>\n                        <app-componente-objeto [componente]=\"'item'\"\n                                               [atributo]=\"'usuarioUltMov'\"\n                                               [buscar]=\"itemBuscar\"\n                                               [permisosAtributos]=\"permisosAtributos\"\n                                               [(valido)]=\"validosItem['usuarioUltMov']\"\n                                               [(dato)]=\"item.usuarioUltMov\"  class=\"w-100\"\n                                               [atributoVisible]=\"'username'\" >\n                        </app-componente-objeto >\n                        <div class=\"editarObjeto panel panel-default\" *ngIf=\"!ocultarConjuntos\"  [class.hidden]=\"!usuarioUltMovEditar\" >\n                            <div class=\"form-group\" [class.hidden]=\"!globalesService.aeditable(this,'item','usuarioUltMov')\" >\n                                   <!--app-usuario-crud [nombre]=\"'usuarioUltMov'\" [usuario]=\"item.usuarioUltMov\" (usuarioChange)=\"evtUsuarioUltMov($event)\"\n                                                           [ocultarConjuntosUsuario]=\"'true'\" [class.hidden]=\"!usuarioUltMovEditar\" ></app-usuario-crud-->\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/itemes/item/item.component.ts":
/*!***********************************************!*\
  !*** ./src/app/itemes/item/item.component.ts ***!
  \***********************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/item */ "./src/app/itemes/shared/item.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemComponent = /** @class */ (function () {
    function ItemComponent() {
        this.opcionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.itemChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.evtAgregarItemsmItemItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.evtAgregarPerfilesItemPerfil = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarioUltMovItemUsuarioEditar = false;
    }
    ItemComponent.prototype.agregarItemsmItemItem = function () { this.evtAgregarItemsmItemItem.emit(); };
    ;
    ItemComponent.prototype.agregarPerfilesItemPerfil = function () { this.evtAgregarPerfilesItemPerfil.emit(); };
    ;
    ItemComponent.prototype.actualizarItem = function () {
        if (this.item.id == null) {
            this.itemService.guardarItem(this.item, this.evtGuardar, this);
        }
        else {
            this.itemService.actualizarItem(this.item, this.evtActualiza, this);
        }
    };
    ItemComponent.prototype.evtGuardar = function (item, obj) {
        obj.item = item;
        obj.itemChange.emit(obj.item);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    };
    ItemComponent.prototype.evtActualiza = function (bandera, obj) {
        if (bandera) {
            obj.itemChange.emit(obj.item);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    };
    ItemComponent.prototype.ngOnChanges = function (changes) {
        if (changes.opcion && changes.opcion.currentValue != null) {
            if (changes.opcion.currentValue == 1) {
                this.opcion = 1;
                this.actualizarItem();
            }
        }
    };
    ItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "usuariologueado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "etiquetaGeneral", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "itemBuscar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "permisosAtributos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "permisosConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "validosItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_item__WEBPACK_IMPORTED_MODULE_1__["Item"])
    ], ItemComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "itemService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ItemComponent.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "opcionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "globalesService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "itemChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "ocultarConjuntos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "itemsmItemItemN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "lista_itemsmItemItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "opcionitemsmItemItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "validositemsmItemItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "evtAgregarItemsmItemItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "configuracionItemsmItemItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "ocultarConjuntositemsmItemItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "perfilesItemPerfilN", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "perfilService", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "lista_perfilesItemPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "opcionperfilesItemPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "validosperfilesItemPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "evtAgregarPerfilesItemPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "configuracionPerfilesItemPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "ocultarConjuntosperfilesItemPerfil", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "lista_usuarioUltMovItemUsuario", void 0);
    ItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/itemes/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.css */ "./src/app/itemes/item/item.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/itemes/shared/configurar-item.ts":
/*!**************************************************!*\
  !*** ./src/app/itemes/shared/configurar-item.ts ***!
  \**************************************************/
/*! exports provided: ConfigurarItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurarItem", function() { return ConfigurarItem; });
/* harmony import */ var _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/url-provider */ "./src/app/shared/url-provider.ts");

var ConfigurarItem = /** @class */ (function () {
    //   rutaAgregar:string;
    function ConfigurarItem() {
        this.urlprovider = new _shared_url_provider__WEBPACK_IMPORTED_MODULE_0__["URLProvider"]();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "item";
        this.rutaLista = this.crudServiceBaseUrl + "/getItemes";
        this.rutaAgregar = this.crudServiceBaseUrl + "/guardarItem";
        this.rutaActualizar = this.crudServiceBaseUrl + "/actualizarItem";
        this.rutaEliminar = this.crudServiceBaseUrl + "/eliminarItem";
        this.titulo = "Catálogo Item";
        this.permisosAtributos = null;
        this.permisosTabla = null;
        this.itemConsulta = null;
        this.campoAgEl = null;
        this.tipocampoAgEl = null;
        this.altoComponente = 500;
    }
    ConfigurarItem.prototype.lectura = function () {
        return {
            url: this.rutaLista,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarItem.prototype.lecturaP = function (evt, dat) {
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
    ConfigurarItem.prototype.eliminar = function () {
        return {
            url: this.rutaEliminar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarItem.prototype.eliminarP = function (evt, dat) {
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
    ConfigurarItem.prototype.agregar = function () {
        return {
            url: this.rutaAgregar,
            contentType: "application/json",
            type: "POST"
        };
    };
    ConfigurarItem.prototype.agregarP = function (evt, dat) {
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
    return ConfigurarItem;
}());



/***/ }),

/***/ "./src/app/itemes/shared/item-item.ts":
/*!********************************************!*\
  !*** ./src/app/itemes/shared/item-item.ts ***!
  \********************************************/
/*! exports provided: ItemItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemItem", function() { return ItemItem; });
/**
 *
 * @author IstmoSoft
 */
var ItemItem = /** @class */ (function () {
    // Constructores
    function ItemItem() {
    }
    // Geters
    ItemItem.prototype.getItem = function () {
        return this.item;
    };
    ItemItem.prototype.setItem = function (item) {
        this.item = item;
    };
    // Seters
    ItemItem.prototype.getItem2 = function () {
        return this.item2;
    };
    ItemItem.prototype.setItem2 = function (item2) {
        this.item2 = item2;
    };
    return ItemItem;
}());



/***/ }),

/***/ "./src/app/itemes/shared/item-perfil.ts":
/*!**********************************************!*\
  !*** ./src/app/itemes/shared/item-perfil.ts ***!
  \**********************************************/
/*! exports provided: ItemPerfil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemPerfil", function() { return ItemPerfil; });
/**
 *
 * @author IstmoSoft
 */
var ItemPerfil = /** @class */ (function () {
    // Constructores
    function ItemPerfil() {
    }
    // Geters
    ItemPerfil.prototype.getItem = function () {
        return this.item;
    };
    ItemPerfil.prototype.setItem = function (item) {
        this.item = item;
    };
    // Seters
    ItemPerfil.prototype.getPerfil = function () {
        return this.perfil;
    };
    ItemPerfil.prototype.setPerfil = function (perfil) {
        this.perfil = perfil;
    };
    return ItemPerfil;
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
//# sourceMappingURL=app-itemes-item-module.js.map