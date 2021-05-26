package mx.atto.ejemplo.dao;
import mx.atto.ejemplo.exception.SitteecException;
import java.util.List;
import mx.atto.ejemplo.entity.Item;
import mx.atto.ejemplo.dto.*;
import java.util.Date;

/**
 *
 * @author IstmoSoft
 */
public interface IItemDao extends IGenericDao<Item, Integer > {

// busquedas por atributos inicio
public Item getItemById(Integer id);
public List<Item> getItemesById(Integer id);
public Item getItemByPrincipal(java.lang.Integer principal);
public List<Item> getItemesByPrincipal(java.lang.Integer principal);
public Item getItemByRuta(String ruta);
public List<Item> getItemesByRuta(String ruta);
public Item getItemByNombre(String nombre);
public List<Item> getItemesByNombre(String nombre);
public Item getItemByStatus(java.lang.Integer status);
public List<Item> getItemesByStatus(java.lang.Integer status);
public Item getItemByUsuarioUltMov(UsuarioDto usuarioUltMov);
public List<Item> getItemesByUsuarioUltMov(UsuarioDto usuarioUltMov);
// busquedas por atributos fin
    public List<Item> getItemesByDto(ItemDto item);

    public List<Item> custom(String consulta);

}
