package mx.atto.ejemplo.dto;
/**
 *
 * @author IstmoSoft
 */
public class ItemPerfilDto {
	// Atributos
	ItemDto item;
	PerfilDto perfil;
	// Constructores
	public ItemPerfilDto(ItemDto item, PerfilDto perfil) {
		this.item = item;
		this.perfil = perfil;
	}
	
	public ItemPerfilDto() {
		this.item = item;
		this.perfil = perfil;
	}
	// Geters
	public ItemDto getItem() {
		return item;
	}

	public void setItem(ItemDto item) {
		this.item = item;
	}
	// Seters
	public PerfilDto getPerfil() {
		return perfil;
	}

	public void setPerfil(PerfilDto perfil) {
		this.perfil = perfil;
	}
}
