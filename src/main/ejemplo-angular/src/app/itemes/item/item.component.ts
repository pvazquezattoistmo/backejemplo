import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../shared/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() itemBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosItem;
  @Input() item:Item;
  @Input() itemService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Output() itemChange = new EventEmitter<Item>();
  @Input() ocultarConjuntos;
  @Input() itemsmItemItemN;
  @Input() lista_itemsmItemItem;
  @Input() opcionitemsmItemItem;
  @Input() validositemsmItemItem;
  @Output() evtAgregarItemsmItemItem = new EventEmitter();
  agregarItemsmItemItem(){  this.evtAgregarItemsmItemItem.emit() };
  @Input() configuracionItemsmItemItem;
  @Input() ocultarConjuntositemsmItemItem;
  @Input() perfilesItemPerfilN;
  @Input() perfilService;
  @Input() lista_perfilesItemPerfil;
  @Input() opcionperfilesItemPerfil;
  @Input() validosperfilesItemPerfil;
  @Output() evtAgregarPerfilesItemPerfil = new EventEmitter();
  agregarPerfilesItemPerfil(){  this.evtAgregarPerfilesItemPerfil.emit() };
  @Input() configuracionPerfilesItemPerfil;
  @Input() ocultarConjuntosperfilesItemPerfil;
  @Input() lista_usuarioUltMovItemUsuario;
  usuarioUltMovItemUsuarioEditar : boolean = false;

  
  constructor( ) { }
    actualizarItem() {
        if (this.item.id == null) {
            this.itemService.guardarItem(this.item, this.evtGuardar, this);
        } else {
            this.itemService.actualizarItem(this.item, this.evtActualiza, this);
        }
    }
    evtGuardar(item, obj) {
        obj.item = item;
        obj.itemChange.emit(obj.item);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.itemChange.emit(obj.item);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizarItem() ;
            }
        }
    }    
    

  ngOnInit() {
  }
  
  
}
