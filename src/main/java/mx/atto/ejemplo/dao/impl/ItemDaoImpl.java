package mx.atto.ejemplo.dao.impl;
import mx.atto.ejemplo.exception.SitteecException;

import mx.atto.ejemplo.dao.*;
import mx.atto.ejemplo.dto.*;
import mx.atto.ejemplo.entity.*;
import java.util.Date;
import java.util.List;
import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;
import org.modelmapper.ModelMapper;

/**
 *
 * @author IstmoSoft
 */
@Repository("itemDao")
public class ItemDaoImpl extends GenericDaoImpl<Item, Integer >
        implements IItemDao {

// busquedas por atributos  inicio
    @Override
    public Item  getItemById(Integer id) {
        List lista = getItemesById(id);
        if (lista.isEmpty()) return null;
        return (Item)lista.get(0);
    }
    @Override
    public List<Item> getItemesById(Integer id){
        Criteria criteria = getSession().createCriteria(Item.class);
        criteria.add(Restrictions.eq("id", id));
        return  criteria.list();
    }
    @Override
    public Item  getItemByPrincipal(java.lang.Integer principal) {
        List lista = getItemesByPrincipal(principal);
        if (lista.isEmpty()) return null;
        return (Item)lista.get(0);
    }
    @Override
    public List<Item> getItemesByPrincipal(java.lang.Integer principal){
        Criteria criteria = getSession().createCriteria(Item.class);
        criteria.add(Restrictions.eq("principal", principal));
        return  criteria.list();
    }
    @Override
    public Item  getItemByRuta(String ruta) {
        List lista = getItemesByRuta(ruta);
        if (lista.isEmpty()) return null;
        return (Item)lista.get(0);
    }
    @Override
    public List<Item> getItemesByRuta(String ruta){
        Criteria criteria = getSession().createCriteria(Item.class);
        criteria.add(Restrictions.eq("ruta", ruta));
        return  criteria.list();
    }
    @Override
    public Item  getItemByNombre(String nombre) {
        List lista = getItemesByNombre(nombre);
        if (lista.isEmpty()) return null;
        return (Item)lista.get(0);
    }
    @Override
    public List<Item> getItemesByNombre(String nombre){
        Criteria criteria = getSession().createCriteria(Item.class);
        criteria.add(Restrictions.eq("nombre", nombre));
        return  criteria.list();
    }
    @Override
    public Item  getItemByStatus(java.lang.Integer status) {
        List lista = getItemesByStatus(status);
        if (lista.isEmpty()) return null;
        return (Item)lista.get(0);
    }
    @Override
    public List<Item> getItemesByStatus(java.lang.Integer status){
        Criteria criteria = getSession().createCriteria(Item.class);
        criteria.add(Restrictions.eq("status", status));
        return  criteria.list();
    }
    @Override
    public Item  getItemByUsuarioUltMov(UsuarioDto usuarioUltMov) {
        List lista = getItemesByUsuarioUltMov(usuarioUltMov);
        if (lista.isEmpty()) return null;
        return (Item)lista.get(0);
    }
    @Override
    public List<Item> getItemesByUsuarioUltMov(UsuarioDto usuarioUltMovDto){
        Usuario usuarioUltMov = new ModelMapper().map(usuarioUltMovDto, Usuario.class);
        Criteria criteria = getSession().createCriteria(Item.class);
        criteria.add(Restrictions.eq("usuarioUltMov", usuarioUltMov));
        return  criteria.list();
    }
// busquedas por atributos  fin
    public List<Item> getItemesByDto (ItemDto item){
        Criteria criteria = getSession().createCriteria(Item.class);
        if (item.getId() != null  )
            criteria.add(Restrictions.eq("id", item.getId() ));
        if (item.getPrincipal() != null  )
            criteria.add(Restrictions.eq("principal", item.getPrincipal() ));
        if (item.getRuta() != null  && !item.getRuta().trim().isEmpty()  )
            criteria.add(Restrictions.ilike("ruta", "%"+item.getRuta()+"%" ));
        if (item.getNombre() != null  && !item.getNombre().trim().isEmpty()  )
            criteria.add(Restrictions.ilike("nombre", "%"+item.getNombre()+"%" ));
        if (item.getStatus() != null  )
            criteria.add(Restrictions.eq("status", item.getStatus() ));
        if (item.getUsuarioUltMov() != null  )
            criteria.add(Restrictions.eq("usuarioUltMov", item.getUsuarioUltMov().toEntidad()  ));
        return  criteria.list();
    }

    @Override
    public List<Item> custom(String consulta){
        Query query = getSession().createQuery(consulta);
        return query.list();
    }

}
