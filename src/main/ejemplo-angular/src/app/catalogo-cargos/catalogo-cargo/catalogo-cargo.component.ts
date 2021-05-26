import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CatalogoCargo } from '../shared/catalogo-cargo';

@Component({
  selector: 'app-catalogo-cargo',
  templateUrl: './catalogo-cargo.component.html',
  styleUrls: ['./catalogo-cargo.component.css'],
})
export class CatalogoCargoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() catalogoCargoBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosCatalogoCargo;
  @Input() catalogoCargo:CatalogoCargo;
  @Input() catalogoCargoService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Output() catalogoCargoChange = new EventEmitter<CatalogoCargo>();
  @Input() ocultarConjuntos;
  @Input() lista_usuarioUltMovCatalogoCargoUsuario;
  usuarioUltMovCatalogoCargoUsuarioEditar : boolean = false;

  
  constructor( ) { }
    actualizarCatalogoCargo() {
        if (this.catalogoCargo.id == null) {
            this.catalogoCargoService.guardarCatalogoCargo(this.catalogoCargo, this.evtGuardar, this);
        } else {
            this.catalogoCargoService.actualizarCatalogoCargo(this.catalogoCargo, this.evtActualiza, this);
        }
    }
    evtGuardar(catalogoCargo, obj) {
        obj.catalogoCargo = catalogoCargo;
        obj.catalogoCargoChange.emit(obj.catalogoCargo);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.catalogoCargoChange.emit(obj.catalogoCargo);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizarCatalogoCargo() ;
            }
        }
    }    
    

  ngOnInit() {
  }
  
  
}
