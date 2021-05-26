import { Item } from './item';
import { Perfil } from '../../perfiles/shared/perfil';
/**
 *
 * @author IstmoSoft
 */
export class ItemPerfil {
	// Atributos
	public item:Item;
	public perfil:Perfil;
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
	getPerfil() {
		return this.perfil;
	}

	setPerfil( perfil:Perfil) {
		this.perfil = perfil;
	}
}
