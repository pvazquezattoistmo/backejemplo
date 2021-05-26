import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../shared/item';

@Component({
  selector: 'app-item-conjunto',
  templateUrl: './item-conjunto.component.html',
  styleUrls: ['./item-conjunto.component.css'],
})
export class ItemConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() itemBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosItem;
  @Input() ocultarConjuntosItem;
  @Input() itemService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
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

  public listaItemN: Item[] = [];
  @Input() public listaItem: Item[] = [];
  @Output() public listaItemChange = new EventEmitter<Item[]>();
  @Input() public itemN: Item = new Item();
  @Output() public itemNChange = new EventEmitter<Item>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(item, tipo) {
        this.idSeleccionado = tipo + "-" + item.id;
        this.itemN = item;
    }

    ngOnInit() {
        this.itemN.id = 0;
        this.listaItemN.push(Object.assign({}, this.itemN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new Item();
        pg.id = this.listaItemN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaItemN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let item of this.listaItem) {
            this.itemService.actualizarItem(item, this.evtActualiza, this);
        }
        for (let item of this.listaItemN) {
            item.id = null;
            this.itemService.guardarItem(item, this.evtGuardar, this);
        }
    }
    evtGuardar(item, obj) {
        obj.agregados++;
        obj.listaItem.push(item);
        if (obj.agregados >= obj.listaItemN.length) {
            obj.itemN = new Item();
            obj.listaItemN = [];
            obj.itemN.id = 0;
            obj.idSeleccionado = "N-" + obj.itemN.id;
            obj.listaItemN.push(Object.assign({}, obj.itemN));
            obj.listaItemChange.emit(obj.listaItem);
        }
        if (obj.agregados >= obj.listaItemN.length && 
            obj.actualizados >= obj.listaItem.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaItemN.length && 
            obj.actualizados >= obj.listaItem.length  ) {
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
