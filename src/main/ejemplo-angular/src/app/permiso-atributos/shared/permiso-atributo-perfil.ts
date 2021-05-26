import { PermisoAtributo } from './permiso-atributo';
import { Perfil } from '../../perfiles/shared/perfil';
/**
 *
 * @author IstmoSoft
 */
export class PermisoAtributoPerfil {
	// Atributos
	public permisoAtributo:PermisoAtributo;
	public perfil:Perfil;
	// Constructores

	
	constructor() {
	}
	// Geters
	getPermisoAtributo() {
		return this.permisoAtributo;
	}

	setPermisoAtributo( permisoAtributo:PermisoAtributo) {
		this.permisoAtributo = permisoAtributo;
	}
	// Seters
	getPerfil() {
		return this.perfil;
	}

	setPerfil( perfil:Perfil) {
		this.perfil = perfil;
	}
}
