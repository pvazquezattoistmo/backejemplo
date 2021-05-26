import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CatalogoCargo } from '../shared/catalogo-cargo';

@Component({
  selector: 'app-catalogo-cargo-conjunto',
  templateUrl: './catalogo-cargo-conjunto.component.html',
  styleUrls: ['./catalogo-cargo-conjunto.component.css'],
})
export class CatalogoCargoConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() catalogoCargoBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosCatalogoCargo;
  @Input() ocultarConjuntosCatalogoCargo;
  @Input() catalogoCargoService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Input() lista_usuarioUltMovCatalogoCargoUsuario;
  usuarioUltMovCatalogoCargoUsuarioEditar : boolean = false;

  public listaCatalogoCargoN: CatalogoCargo[] = [];
  @Input() public listaCatalogoCargo: CatalogoCargo[] = [];
  @Output() public listaCatalogoCargoChange = new EventEmitter<CatalogoCargo[]>();
  @Input() public catalogoCargoN: CatalogoCargo = new CatalogoCargo();
  @Output() public catalogoCargoNChange = new EventEmitter<CatalogoCargo>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(catalogoCargo, tipo) {
        this.idSeleccionado = tipo + "-" + catalogoCargo.id;
        this.catalogoCargoN = catalogoCargo;
    }

    ngOnInit() {
        this.catalogoCargoN.id = 0;
        this.listaCatalogoCargoN.push(Object.assign({}, this.catalogoCargoN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new CatalogoCargo();
        pg.id = this.listaCatalogoCargoN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaCatalogoCargoN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let catalogoCargo of this.listaCatalogoCargo) {
            this.catalogoCargoService.actualizarCatalogoCargo(catalogoCargo, this.evtActualiza, this);
        }
        for (let catalogoCargo of this.listaCatalogoCargoN) {
            catalogoCargo.id = null;
            this.catalogoCargoService.guardarCatalogoCargo(catalogoCargo, this.evtGuardar, this);
        }
    }
    evtGuardar(catalogoCargo, obj) {
        obj.agregados++;
        obj.listaCatalogoCargo.push(catalogoCargo);
        if (obj.agregados >= obj.listaCatalogoCargoN.length) {
            obj.catalogoCargoN = new CatalogoCargo();
            obj.listaCatalogoCargoN = [];
            obj.catalogoCargoN.id = 0;
            obj.idSeleccionado = "N-" + obj.catalogoCargoN.id;
            obj.listaCatalogoCargoN.push(Object.assign({}, obj.catalogoCargoN));
            obj.listaCatalogoCargoChange.emit(obj.listaCatalogoCargo);
        }
        if (obj.agregados >= obj.listaCatalogoCargoN.length && 
            obj.actualizados >= obj.listaCatalogoCargo.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaCatalogoCargoN.length && 
            obj.actualizados >= obj.listaCatalogoCargo.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }            
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizaTodo() ;
            }
        }
    }
  
}
