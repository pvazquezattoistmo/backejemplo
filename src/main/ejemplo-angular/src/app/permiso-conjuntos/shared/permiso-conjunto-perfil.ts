import { PermisoConjunto } from './permiso-conjunto';
import { Perfil } from '../../perfiles/shared/perfil';
/**
 *
 * @author IstmoSoft
 */
export class PermisoConjuntoPerfil {
	// Atributos
	public permisoConjunto:PermisoConjunto;
	public perfil:Perfil;
	// Constructores

	
	constructor() {
	}
	// Geters
	getPermisoConjunto() {
		return this.permisoConjunto;
	}

	setPermisoConjunto( permisoConjunto:PermisoConjunto) {
		this.permisoConjunto = permisoConjunto;
	}
	// Seters
	getPerfil() {
		return this.perfil;
	}

	setPerfil( perfil:Perfil) {
		this.perfil = perfil;
	}
}
