package mx.atto.ejemplo.dto;
/**
 *
 * @author IstmoSoft
 */
public class PermisoAtributoPerfilDto {
	// Atributos
	PermisoAtributoDto permisoAtributo;
	PerfilDto perfil;
	// Constructores
	public PermisoAtributoPerfilDto(PermisoAtributoDto permisoAtributo, PerfilDto perfil) {
		this.permisoAtributo = permisoAtributo;
		this.perfil = perfil;
	}
	
	public PermisoAtributoPerfilDto() {
		this.permisoAtributo = permisoAtributo;
		this.perfil = perfil;
	}
	// Geters
	public PermisoAtributoDto getPermisoAtributo() {
		return permisoAtributo;
	}

	public void setPermisoAtributo(PermisoAtributoDto permisoAtributo) {
		this.permisoAtributo = permisoAtributo;
	}
	// Seters
	public PerfilDto getPerfil() {
		return perfil;
	}

	public void setPerfil(PerfilDto perfil) {
		this.perfil = perfil;
	}
}
