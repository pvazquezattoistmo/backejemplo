package mx.atto.ejemplo.service.impl;
import mx.atto.ejemplo.exception.SitteecException;

import java.util.Iterator;
import java.util.Date;
import java.io.Serializable;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.HashMap;
import java.util.Map;
import org.apache.log4j.Logger;
import org.modelmapper.ModelMapper;
import mx.atto.ejemplo.dao.*;
import mx.atto.ejemplo.dto.*;
import mx.atto.ejemplo.entity.*;
import mx.atto.ejemplo.service.*;
import org.hibernate.HibernateException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author IstmoSoft
 */
@Service("itemService")
@Transactional(value = "hibernateTransactionManager")
public class ItemServiceImpl implements IItemService {

    private Logger log = Logger.getLogger(ItemServiceImpl.class);

    @Autowired
    private IItemDao itemDao;

    @Override
    public ItemDto guardarItem(ItemDto dto) throws SitteecException{
        Item item = dto.toDefault().toEntidad();
            dto.setId_(   itemDao.save(item));
            return dto;
    }
    @Override
    public List<ItemDto> guardarListaItem(List<ItemDto> dtos) throws SitteecException{
            for (ItemDto dto : dtos) {
                Item item = dto.toDefault().toEntidad();
                dto.setId_( itemDao.save(item));
            }
            return dtos;
    }
    
    @Override
    public boolean actualizarItem(ItemDto dto) throws SitteecException{
        ItemDto aux= lazyInjectionEntidadConjuntos(dto.toDefault().toEntidad(),dto);
        Item item = aux.toDefault().toEntidad();
            itemDao.update(item);
            return true;
    }
   
    @Override
    public List<ItemDto> actualizarListaItem(List<ItemDto> dtos) throws SitteecException{
            for (ItemDto dto : dtos) {
                Item item = dto.toDefault().toEntidad();
                itemDao.update(item);
            }
            return dtos;
    }
    @Override    
    public HashMap <Integer,Integer> actualizarClaves(HashMap<Integer,Integer> claves) throws SitteecException{
        Iterator it= claves.entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry elemento = (Map.Entry)it.next();
            Item item  = itemDao.get( (Integer) elemento.getKey());
            item.setId((Integer) elemento.getValue());
            itemDao.update(item);
        }
        return claves;
    }
    @Override
    public boolean eliminarItem(ItemDto dto) throws SitteecException {
        Item item = dto.toDefault().toEntidad();
            itemDao.delete(item);
            return true;
    }
    @Override   
    public List<ItemDto> eliminarListaItem(List<ItemDto> dtos) throws SitteecException{
            for (ItemDto dto : dtos) {
                Item item = dto.toDefault().toEntidad();
                itemDao.delete(item);
            }
            return dtos;
    }
    @Override
    public ItemDto getItem(Integer id) throws SitteecException{
        ItemDto itemDto = new ItemDto();
            Item item = itemDao.get(id);
            if (item!= null){
                itemDto = ItemDto.fromEntidad(item);
                itemDto = lazyInjectionEntidadObjetos(item, itemDto);
                }
            return itemDto;
    }

    @Override
    public List<ItemDto> getItemes() throws SitteecException{
        List<Item> itemes;
        List<ItemDto> itemDtos = new ArrayList<ItemDto>();
            itemes = itemDao.getList();
            for (Item item : itemes) {
                ItemDto itemDto = ItemDto.fromEntidad(item);
                itemDto = lazyInjectionEntidadObjetos(item, itemDto);
                itemDtos.add(itemDto);
            }
            return itemDtos;
    }
	
// busquedas por atributos  inicio
    @Override
    public ItemDto getItemById(Integer id)  throws SitteecException  {
        ItemDto itemDto = new ItemDto();
            Item e_item = itemDao.getItemById(id);
            if(e_item != null){
                    itemDto = ItemDto.fromEntidad(e_item);
                    itemDto = lazyInjectionEntidadObjetos(e_item, itemDto);
            }
            return itemDto;
    }
    @Override
    public List<ItemDto> getItemesById(Integer id)  throws SitteecException  {
        List<ItemDto> itemDtos = new ArrayList<ItemDto>();
        ItemDto itemDto = new ItemDto();
            List<Item>itemes = itemDao.getItemesById(id);
            for(Item e_item : itemes){
                    itemDto = ItemDto.fromEntidad(e_item);
                    itemDto = lazyInjectionEntidadObjetos(e_item, itemDto);
		       itemDtos.add(itemDto);
            }
	       return itemDtos ;
    }
    @Override
    public ItemDto getItemByPrincipal(java.lang.Integer principal)   throws SitteecException   {
        ItemDto itemDto = new ItemDto();
            Item e_item = itemDao.getItemByPrincipal(principal);
            if(e_item != null){
                    itemDto = ItemDto.fromEntidad(e_item);
                    itemDto = lazyInjectionEntidadObjetos(e_item, itemDto);
            }
            return itemDto;
    }
    @Override
    public List<ItemDto> getItemesByPrincipal(java.lang.Integer principal)  throws SitteecException   {
        List<ItemDto> itemDtos = new ArrayList<ItemDto>();
        ItemDto itemDto = new ItemDto();
            List<Item>itemes = itemDao.getItemesByPrincipal(principal);
            for(Item e_item : itemes){
                    itemDto = ItemDto.fromEntidad(e_item);
                    itemDto = lazyInjectionEntidadObjetos(e_item, itemDto);
		       itemDtos.add(itemDto);
            }
	       return itemDtos ;
    }
    @Override
    public ItemDto getItemByRuta(String ruta)   throws SitteecException   {
        ItemDto itemDto = new ItemDto();
            Item e_item = itemDao.getItemByRuta(ruta);
            if(e_item != null){
                    itemDto = ItemDto.fromEntidad(e_item);
                    itemDto = lazyInjectionEntidadObjetos(e_item, itemDto);
            }
            return itemDto;
    }
    @Override
    public List<ItemDto> getItemesByRuta(String ruta)  throws SitteecException   {
        List<ItemDto> itemDtos = new ArrayList<ItemDto>();
        ItemDto itemDto = new ItemDto();
            List<Item>itemes = itemDao.getItemesByRuta(ruta);
            for(Item e_item : itemes){
                    itemDto = ItemDto.fromEntidad(e_item);
                    itemDto = lazyInjectionEntidadObjetos(e_item, itemDto);
		       itemDtos.add(itemDto);
            }
	       return itemDtos ;
    }
    @Override
    public ItemDto getItemByNombre(String nombre)   throws SitteecException   {
        ItemDto itemDto = new ItemDto();
            Item e_item = itemDao.getItemByNombre(nombre);
            if(e_item != null){
                    itemDto = ItemDto.fromEntidad(e_item);
                    itemDto = lazyInjectionEntidadObjetos(e_item, itemDto);
            }
            return itemDto;
    }
    @Override
    public List<ItemDto> getItemesByNombre(String nombre)  throws SitteecException   {
        List<ItemDto> itemDtos = new ArrayList<ItemDto>();
        ItemDto itemDto = new ItemDto();
            List<Item>itemes = itemDao.getItemesByNombre(nombre);
            for(Item e_item : itemes){
                    itemDto = ItemDto.fromEntidad(e_item);
                    itemDto = lazyInjectionEntidadObjetos(e_item, itemDto);
		       itemDtos.add(itemDto);
            }
	       return itemDtos ;
    }
    @Override
    public ItemDto getItemByStatus(java.lang.Integer status)   throws SitteecException   {
        ItemDto itemDto = new ItemDto();
            Item e_item = itemDao.getItemByStatus(status);
            if(e_item != null){
                    itemDto = ItemDto.fromEntidad(e_item);
                    itemDto = lazyInjectionEntidadObjetos(e_item, itemDto);
            }
            return itemDto;
    }
    @Override
    public List<ItemDto> getItemesByStatus(java.lang.Integer status)  throws SitteecException   {
        List<ItemDto> itemDtos = new ArrayList<ItemDto>();
        ItemDto itemDto = new ItemDto();
            List<Item>itemes = itemDao.getItemesByStatus(status);
            for(Item e_item : itemes){
                    itemDto = ItemDto.fromEntidad(e_item);
                    itemDto = lazyInjectionEntidadObjetos(e_item, itemDto);
		       itemDtos.add(itemDto);
            }
	       return itemDtos ;
    }
    @Override
    public ItemDto getItemByUsuarioUltMov(UsuarioDto p_usuarioUltMov)   throws SitteecException   {
        ItemDto itemDto = new ItemDto();
            Item e_item = itemDao.getItemByUsuarioUltMov(p_usuarioUltMov);
            if(e_item != null){
                    itemDto = ItemDto.fromEntidad(e_item);
                    itemDto = lazyInjectionEntidadObjetos(e_item, itemDto);
            }
            return itemDto;
    }
    @Override
    public List<ItemDto> getItemesByUsuarioUltMov(UsuarioDto p_usuarioUltMov)   throws SitteecException  {
        List<ItemDto> itemDtos = new ArrayList<ItemDto>();
        ItemDto itemDto = new ItemDto();
            List<Item>itemes = itemDao.getItemesByUsuarioUltMov(p_usuarioUltMov);
            for(Item e_item : itemes){
                    itemDto = ItemDto.fromEntidad(e_item);
                    itemDto = lazyInjectionEntidadObjetos(e_item, itemDto);
		       itemDtos.add(itemDto);
            }
	       return itemDtos ;
    }
// busquedas por atributos  fin
   @Override
   public ItemDto lazyInjection (ItemDto dto )   throws SitteecException  {
		Item PEentidad = itemDao.get(dto.getId_());
		ItemDto salida = ItemDto.fromEntidad(PEentidad);
		salida =lazyInjectionEntidadObjetos(PEentidad,salida);
		salida =lazyInjectionEntidadConjuntos(PEentidad,salida); 
		return salida;
   }
   @Override
   public ItemDto lazyInjectionObjetos (ItemDto dto )  throws SitteecException  {
		Item PEentidad = itemDao.get(dto.getId_());
		ItemDto salida = ItemDto.fromEntidad(PEentidad);
		salida =lazyInjectionEntidadObjetos(PEentidad,salida);
		return salida;
   }
   @Override
   public ItemDto lazyInjectionConjuntos (ItemDto dto )  throws SitteecException  {
		Item PEentidad = itemDao.get(dto.getId_());
		ItemDto salida = ItemDto.fromEntidad(PEentidad);
		salida =lazyInjectionEntidadConjuntos(PEentidad,salida); 
		return salida;
   }
   @Override
   public ItemDto lazyInjectionEntidadObjetos (Item PEentidad, ItemDto salida )  throws SitteecException  {
	   if (PEentidad.getUsuarioUltMov() !=null )  
          salida.setUsuarioUltMov(UsuarioDto.fromEntidad(PEentidad.getUsuarioUltMov()));  
		return salida;
   }
   @Override
   public ItemDto lazyInjectionEntidadConjuntos (Item PEentidad, ItemDto salida )  throws SitteecException  {
	   salida.setItemsm(new HashSet(getItemsm (ItemDto.fromEntidad(PEentidad) ))) ;
	   salida.setPerfiles(new HashSet(getPerfiles (ItemDto.fromEntidad(PEentidad) ))) ;
		return salida;
   }
   @Override
   public ItemDto lazyInjectionEntidadObjetosDto (ItemDto PEentidad, ItemDto salida )  throws SitteecException  {
	   salida.setUsuarioUltMov( PEentidad.getUsuarioUltMov());  
		return salida;
   }
   @Override
   public ItemDto lazyInjectionEntidadConjuntosDto (ItemDto PEentidad, ItemDto salida )  throws SitteecException  {
	   Iterator iteratorItemsm = PEentidad.getItemsm().iterator();
	   while(iteratorItemsm.hasNext())
		 salida.getItemsm().add( (ItemDto) iteratorItemsm.next());
	   Iterator iteratorPerfiles = PEentidad.getPerfiles().iterator();
	   while(iteratorPerfiles.hasNext())
		 salida.getPerfiles().add( (PerfilDto) iteratorPerfiles.next());
		return salida;
   }
   @Override
   public ItemDto lazyInjectionEntidad (Item PEentidad )  throws SitteecException  {
		ItemDto salida = ItemDto.fromEntidad(PEentidad);
		salida =lazyInjectionEntidadObjetos(PEentidad,salida);
		salida =lazyInjectionEntidadConjuntos(PEentidad,salida); 
		return salida;
   }

    //   add - remove Itemsm
    @Override
    public List<ItemDto> getItemsm(ItemDto itemDto)  throws SitteecException  {
        Item item = itemDao.get(itemDto.getId_());
        List<ItemDto> item2Dtos = new ArrayList<ItemDto>();
        ItemDto item2Dto = new ItemDto();
        try{
            List<Item>item2es = new ArrayList<Item> (item.getItemsm());

            for(Item e_item2 : item2es){
                    item2Dto = ItemDto.fromEntidad(e_item2);
                    item2Dto = lazyInjectionEntidadObjetos(e_item2, item2Dto);
                    boolean considerar = true;
                    Field declaredFieldStatus = item2Dto.getClass().getDeclaredField("status") ;
                        if ( declaredFieldStatus != null) {
                          declaredFieldStatus.setAccessible(true);
                           Integer status = (Integer) declaredFieldStatus.get(item2Dto);
                           if (status!= null && status ==0 )
                               considerar = false;
                        }
                    if (considerar )
                        item2Dtos.add(item2Dto);
            }
        } catch (Exception e) {
            //TODO: handle exception
        }            
	       return item2Dtos ;
    }
    @Override
    public ItemDto addItemsm(ItemDto itemDto, ItemDto item2Dto)  throws SitteecException  {
        Item item = itemDao.get(itemDto.getId_());
        Item item2 = null;
        if (item2Dto.getId_() == null) {
                item2Dto.setId_(itemDao.save(item2Dto.toEntidad()));
            item2 = item2Dto.toEntidad();
        } else {
            item2 = itemDao.get(item2Dto.getId_());
            item2Dto = ItemDto.fromEntidad(item2);
        }
            item.getItemsm().add(item2);
            itemDao.update(item);
        return item2Dto;
    }  
    @Override
    public ItemDto removeItemsm(ItemDto itemDto, ItemDto item2Dto)   throws SitteecException  {
    	Item item = itemDao.get(itemDto.getId_());
    	Item  item2 = itemDao.get(item2Dto.getId_());
    	item.getItemsm().remove(item2);
    	itemDao.update(item);
        return item2Dto;
    }  
    //   add - remove Perfiles
    @Autowired
    private IPerfilDao perfilDao;
    @Autowired
    private IPerfilService perfilService;
   
    @Override
    public List<PerfilDto> getPerfiles(ItemDto itemDto)  throws SitteecException  {
        Item item = itemDao.get(itemDto.getId_());
        List<PerfilDto> perfilDtos = new ArrayList<PerfilDto>();
        PerfilDto perfilDto = new PerfilDto();
        try{
            List<Perfil>perfiles = new ArrayList<Perfil> (item.getPerfiles());
            for(Perfil e_perfil : perfiles){
                    perfilDto = PerfilDto.fromEntidad(e_perfil);
                    perfilDto = perfilService.lazyInjectionEntidadObjetos(e_perfil, perfilDto);
                    boolean considerar = true;
                    Field declaredFieldStatus = perfilDto.getClass().getDeclaredField("status") ;
                        if ( declaredFieldStatus != null) {
                          declaredFieldStatus.setAccessible(true);
                           Integer status = (Integer) declaredFieldStatus.get(perfilDto);
                           if (status!= null && status ==0 )
                               considerar = false;
                        }
                    if (considerar )
                        perfilDtos.add(perfilDto);
            }
        } catch (Exception e) {
            //TODO: handle exception
        }            
	       return perfilDtos ;
    }
    @Override
    public PerfilDto addPerfiles(ItemDto itemDto, PerfilDto perfilDto)  throws SitteecException  {
        Item item = itemDao.get(itemDto.getId_());
        Perfil perfil = null;
        if (perfilDto.getId_() == null) {
                perfilDto.setId_(perfilDao.save(perfilDto.toEntidad()));
            perfil = perfilDto.toEntidad();
        } else {
            perfil = perfilDao.get(perfilDto.getId_());
            perfilDto = PerfilDto.fromEntidad(perfil);
        }
            item.getPerfiles().add(perfil);
            itemDao.update(item);
        return perfilDto;
    }  
    @Override
    public PerfilDto removePerfiles(ItemDto itemDto, PerfilDto perfilDto)   throws SitteecException  {
    	Item item = itemDao.get(itemDto.getId_());
    	Perfil  perfil = perfilDao.get(perfilDto.getId_());
    	item.getPerfiles().remove(perfil);
    	itemDao.update(item);
        return perfilDto;
    }  

    @Override
    public List<ItemDto> custom(String consulta) throws SitteecException{
        List<Item> itemes;
        List<ItemDto> itemDtos = new ArrayList<ItemDto>();
            itemes = itemDao.custom(consulta);
            for (Item item : itemes) {
                ItemDto itemDto = ItemDto.fromEntidad(item);
                itemDto = lazyInjectionEntidadObjetos(item, itemDto);
                itemDtos.add(itemDto);
            }
            return itemDtos;
    }

    public List<ItemDto> getItemesByDto(ItemDto p_item) throws SitteecException{
        List<Item> itemes;
        List<ItemDto> itemDtos = new ArrayList<ItemDto>();
            itemes = itemDao.getItemesByDto( p_item);
            for (Item item : itemes) {
                ItemDto itemDto = ItemDto.fromEntidad(item);
                itemDto = lazyInjectionEntidadObjetos(item, itemDto);
                itemDtos.add(itemDto);
            }
            return itemDtos;
    }
    
}
