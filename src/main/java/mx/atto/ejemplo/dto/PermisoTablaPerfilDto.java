package mx.atto.ejemplo.dto;
/**
 *
 * @author IstmoSoft
 */
public class PermisoTablaPerfilDto {
	// Atributos
	PermisoTablaDto permisoTabla;
	PerfilDto perfil;
	// Constructores
	public PermisoTablaPerfilDto(PermisoTablaDto permisoTabla, PerfilDto perfil) {
		this.permisoTabla = permisoTabla;
		this.perfil = perfil;
	}
	
	public PermisoTablaPerfilDto() {
		this.permisoTabla = permisoTabla;
		this.perfil = perfil;
	}
	// Geters
	public PermisoTablaDto getPermisoTabla() {
		return permisoTabla;
	}

	public void setPermisoTabla(PermisoTablaDto permisoTabla) {
		this.permisoTabla = permisoTabla;
	}
	// Seters
	public PerfilDto getPerfil() {
		return perfil;
	}

	public void setPerfil(PerfilDto perfil) {
		this.perfil = perfil;
	}
}
