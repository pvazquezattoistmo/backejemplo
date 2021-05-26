package mx.atto.ejemplo.dto;
/**
 *
 * @author IstmoSoft
 */
public class ItemItemDto {
	// Atributos
	ItemDto item;
	ItemDto item2;
	// Constructores
	public ItemItemDto(ItemDto item, ItemDto item2) {
		this.item = item;
		this.item2 = item2;
	}
	
	public ItemItemDto() {
		this.item = item;
		this.item2 = item2;
	}
	// Geters
	public ItemDto getItem() {
		return item;
	}

	public void setItem(ItemDto item) {
		this.item = item;
	}
	// Seters
	public ItemDto getItem2() {
		return item2;
	}

	public void setItem2(ItemDto item2) {
		this.item2 = item2;
	}
}
