package mx.atto.ejemplo.service;
import mx.atto.ejemplo.exception.SitteecException;

import java.util.List;
import mx.atto.ejemplo.dto.*;
import mx.atto.ejemplo.entity.*;
import java.util.Date;
import java.util.HashMap;

/**
 *
 * @author @author IstmoSoft
 */
public interface IItemService {

    public ItemDto guardarItem(ItemDto dto) throws SitteecException;

    public boolean actualizarItem(ItemDto dto) throws SitteecException ;

    public boolean eliminarItem(ItemDto dto) throws SitteecException ;

    public ItemDto getItem(Integer id) throws SitteecException ;

    public List<ItemDto> getItemes() throws SitteecException ;
    
    public List<ItemDto> guardarListaItem(List<ItemDto> dtos)  throws SitteecException ;
    public List<ItemDto> actualizarListaItem(List<ItemDto> dtos)  throws SitteecException ;
    public HashMap <Integer,Integer> actualizarClaves(HashMap<Integer,Integer> claves) throws SitteecException ;
    public List<ItemDto> eliminarListaItem(List<ItemDto> dtos)  throws SitteecException ;
// busquedas por atributos inicio
public ItemDto getItemById(Integer id) throws SitteecException ;
public List<ItemDto> getItemesById(Integer id) throws SitteecException ;
public ItemDto getItemByPrincipal(java.lang.Integer principal) throws SitteecException ;
public List<ItemDto> getItemesByPrincipal(java.lang.Integer principal) throws SitteecException ;
public ItemDto getItemByRuta(String ruta) throws SitteecException ;
public List<ItemDto> getItemesByRuta(String ruta) throws SitteecException ;
public ItemDto getItemByNombre(String nombre) throws SitteecException ;
public List<ItemDto> getItemesByNombre(String nombre) throws SitteecException ;
public ItemDto getItemByStatus(java.lang.Integer status) throws SitteecException ;
public List<ItemDto> getItemesByStatus(java.lang.Integer status) throws SitteecException ;
public ItemDto getItemByUsuarioUltMov(UsuarioDto usuarioUltMov) throws SitteecException ;
public List<ItemDto> getItemesByUsuarioUltMov(UsuarioDto usuarioUltMov) throws SitteecException ;
// busquedas por atributos fin

public ItemDto lazyInjection (ItemDto dto ) throws SitteecException ;

public ItemDto lazyInjectionObjetos (ItemDto dto ) throws SitteecException ;

public ItemDto lazyInjectionConjuntos (ItemDto dto ) throws SitteecException ;

public ItemDto lazyInjectionEntidadObjetos (Item PEentidad, ItemDto salida ) throws SitteecException ;

public ItemDto lazyInjectionEntidadConjuntos (Item PEentidad, ItemDto salida ) throws SitteecException ;

public ItemDto lazyInjectionEntidadObjetosDto (ItemDto PEentidad, ItemDto salida ) throws SitteecException ;

public ItemDto lazyInjectionEntidadConjuntosDto (ItemDto PEentidad, ItemDto salida ) throws SitteecException ;

public ItemDto lazyInjectionEntidad (Item PEentidad ) throws SitteecException ;

//   add - remove Itemsm
    public List<ItemDto> getItemsm(ItemDto itemDto) throws SitteecException ;
    public ItemDto addItemsm(ItemDto itemDto, ItemDto item2Dto) throws SitteecException ;
    public ItemDto removeItemsm(ItemDto itemDto, ItemDto item2Dto) throws SitteecException ;
//   add - remove Perfiles
    public List<PerfilDto> getPerfiles(ItemDto itemDto) throws SitteecException ;
    public PerfilDto addPerfiles(ItemDto itemDto, PerfilDto perfilDto) throws SitteecException ;
    public PerfilDto removePerfiles(ItemDto itemDto, PerfilDto perfilDto) throws SitteecException ;

    public List<ItemDto> custom(String consulta) throws SitteecException ;
    public List<ItemDto> getItemesByDto(ItemDto p_item) throws SitteecException ;


}
