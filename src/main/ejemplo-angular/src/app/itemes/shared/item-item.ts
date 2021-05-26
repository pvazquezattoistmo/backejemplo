import { Item } from './item';

/**
 *
 * @author IstmoSoft
 */
export class ItemItem {
	// Atributos
	public item:Item;
	public item2:Item;
	// Constructores

	
	constructor() {
	}
	// Geters
	getItem() {
		return this.item;
	}

	setItem( item:Item) {
		this.item = item;
	}
	// Seters
	getItem2() {
		return this.item2;
	}

	setItem2( item2:Item) {
		this.item2 = item2;
	}
}
