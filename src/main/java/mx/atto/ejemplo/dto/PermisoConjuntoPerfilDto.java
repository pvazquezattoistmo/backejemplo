package mx.atto.ejemplo.dto;
/**
 *
 * @author IstmoSoft
 */
public class PermisoConjuntoPerfilDto {
	// Atributos
	PermisoConjuntoDto permisoConjunto;
	PerfilDto perfil;
	// Constructores
	public PermisoConjuntoPerfilDto(PermisoConjuntoDto permisoConjunto, PerfilDto perfil) {
		this.permisoConjunto = permisoConjunto;
		this.perfil = perfil;
	}
	
	public PermisoConjuntoPerfilDto() {
		this.permisoConjunto = permisoConjunto;
		this.perfil = perfil;
	}
	// Geters
	public PermisoConjuntoDto getPermisoConjunto() {
		return permisoConjunto;
	}

	public void setPermisoConjunto(PermisoConjuntoDto permisoConjunto) {
		this.permisoConjunto = permisoConjunto;
	}
	// Seters
	public PerfilDto getPerfil() {
		return perfil;
	}

	public void setPerfil(PerfilDto perfil) {
		this.perfil = perfil;
	}
}
