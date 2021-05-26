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
@Repository("perfilDao")
public class PerfilDaoImpl extends GenericDaoImpl<Perfil, Integer >
        implements IPerfilDao {

// busquedas por atributos  inicio
    @Override
    public Perfil  getPerfilById(Integer id) {
        List lista = getPerfilesById(id);
        if (lista.isEmpty()) return null;
        return (Perfil)lista.get(0);
    }
    @Override
    public List<Perfil> getPerfilesById(Integer id){
        Criteria criteria = getSession().createCriteria(Perfil.class);
        criteria.add(Restrictions.eq("id", id));
        return  criteria.list();
    }
    @Override
    public Perfil  getPerfilByDescripcion(String descripcion) {
        List lista = getPerfilesByDescripcion(descripcion);
        if (lista.isEmpty()) return null;
        return (Perfil)lista.get(0);
    }
    @Override
    public List<Perfil> getPerfilesByDescripcion(String descripcion){
        Criteria criteria = getSession().createCriteria(Perfil.class);
        criteria.add(Restrictions.eq("descripcion", descripcion));
        return  criteria.list();
    }
    @Override
    public Perfil  getPerfilByRuta(String ruta) {
        List lista = getPerfilesByRuta(ruta);
        if (lista.isEmpty()) return null;
        return (Perfil)lista.get(0);
    }
    @Override
    public List<Perfil> getPerfilesByRuta(String ruta){
        Criteria criteria = getSession().createCriteria(Perfil.class);
        criteria.add(Restrictions.eq("ruta", ruta));
        return  criteria.list();
    }
    @Override
    public Perfil  getPerfilByNombre(String nombre) {
        List lista = getPerfilesByNombre(nombre);
        if (lista.isEmpty()) return null;
        return (Perfil)lista.get(0);
    }
    @Override
    public List<Perfil> getPerfilesByNombre(String nombre){
        Criteria criteria = getSession().createCriteria(Perfil.class);
        criteria.add(Restrictions.eq("nombre", nombre));
        return  criteria.list();
    }
    @Override
    public Perfil  getPerfilByStatus(java.lang.Integer status) {
        List lista = getPerfilesByStatus(status);
        if (lista.isEmpty()) return null;
        return (Perfil)lista.get(0);
    }
    @Override
    public List<Perfil> getPerfilesByStatus(java.lang.Integer status){
        Criteria criteria = getSession().createCriteria(Perfil.class);
        criteria.add(Restrictions.eq("status", status));
        return  criteria.list();
    }
    @Override
    public Perfil  getPerfilByUsuarioUltMov(UsuarioDto usuarioUltMov) {
        List lista = getPerfilesByUsuarioUltMov(usuarioUltMov);
        if (lista.isEmpty()) return null;
        return (Perfil)lista.get(0);
    }
    @Override
    public List<Perfil> getPerfilesByUsuarioUltMov(UsuarioDto usuarioUltMovDto){
        Usuario usuarioUltMov = new ModelMapper().map(usuarioUltMovDto, Usuario.class);
        Criteria criteria = getSession().createCriteria(Perfil.class);
        criteria.add(Restrictions.eq("usuarioUltMov", usuarioUltMov));
        return  criteria.list();
    }
    @Override
    public Perfil  getPerfilByUsuario(UsuarioDto usuario) {
        List lista = getPerfilesByUsuario(usuario);
        if (lista.isEmpty()) return null;
        return (Perfil)lista.get(0);
    }
    @Override
    public List<Perfil> getPerfilesByUsuario(UsuarioDto usuarioDto){
        Usuario usuario = new ModelMapper().map(usuarioDto, Usuario.class);
        Criteria criteria = getSession().createCriteria(Perfil.class);
        criteria.add(Restrictions.eq("usuario", usuario));
        return  criteria.list();
    }
// busquedas por atributos  fin
    public List<Perfil> getPerfilesByDto (PerfilDto perfil){
        Criteria criteria = getSession().createCriteria(Perfil.class);
        if (perfil.getId() != null  )
            criteria.add(Restrictions.eq("id", perfil.getId() ));
        if (perfil.getDescripcion() != null  && !perfil.getDescripcion().trim().isEmpty()  )
            criteria.add(Restrictions.ilike("descripcion", "%"+perfil.getDescripcion()+"%" ));
        if (perfil.getRuta() != null  && !perfil.getRuta().trim().isEmpty()  )
            criteria.add(Restrictions.ilike("ruta", "%"+perfil.getRuta()+"%" ));
        if (perfil.getNombre() != null  && !perfil.getNombre().trim().isEmpty()  )
            criteria.add(Restrictions.ilike("nombre", "%"+perfil.getNombre()+"%" ));
        if (perfil.getStatus() != null  )
            criteria.add(Restrictions.eq("status", perfil.getStatus() ));
        if (perfil.getUsuarioUltMov() != null  )
            criteria.add(Restrictions.eq("usuarioUltMov", perfil.getUsuarioUltMov().toEntidad()  ));
        if (perfil.getUsuario() != null  )
            criteria.add(Restrictions.eq("usuario", perfil.getUsuario().toEntidad()  ));
        return  criteria.list();
    }

    @Override
    public List<Perfil> custom(String consulta){
        Query query = getSession().createQuery(consulta);
        return query.list();
    }

}
