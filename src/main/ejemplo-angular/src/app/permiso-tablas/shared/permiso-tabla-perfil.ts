import { PermisoTabla } from './permiso-tabla';
import { Perfil } from '../../perfiles/shared/perfil';
/**
 *
 * @author IstmoSoft
 */
export class PermisoTablaPerfil {
	// Atributos
	public permisoTabla:PermisoTabla;
	public perfil:Perfil;
	// Constructores

	
	constructor() {
	}
	// Geters
	getPermisoTabla() {
		return this.permisoTabla;
	}

	setPermisoTabla( permisoTabla:PermisoTabla) {
		this.permisoTabla = permisoTabla;
	}
	// Seters
	getPerfil() {
		return this.perfil;
	}

	setPerfil( perfil:Perfil) {
		this.perfil = perfil;
	}
}
