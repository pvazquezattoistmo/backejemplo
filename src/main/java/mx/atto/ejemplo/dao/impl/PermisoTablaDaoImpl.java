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
@Repository("permisoTablaDao")
public class PermisoTablaDaoImpl extends GenericDaoImpl<PermisoTabla, Integer >
        implements IPermisoTablaDao {

// busquedas por atributos  inicio
    @Override
    public PermisoTabla  getPermisoTablaById(Integer id) {
        List lista = getPermisoTablasById(id);
        if (lista.isEmpty()) return null;
        return (PermisoTabla)lista.get(0);
    }
    @Override
    public List<PermisoTabla> getPermisoTablasById(Integer id){
        Criteria criteria = getSession().createCriteria(PermisoTabla.class);
        criteria.add(Restrictions.eq("id", id));
        return  criteria.list();
    }
    @Override
    public PermisoTabla  getPermisoTablaByEtiqueta(String etiqueta) {
        List lista = getPermisoTablasByEtiqueta(etiqueta);
        if (lista.isEmpty()) return null;
        return (PermisoTabla)lista.get(0);
    }
    @Override
    public List<PermisoTabla> getPermisoTablasByEtiqueta(String etiqueta){
        Criteria criteria = getSession().createCriteria(PermisoTabla.class);
        criteria.add(Restrictions.eq("etiqueta", etiqueta));
        return  criteria.list();
    }
    @Override
    public PermisoTabla  getPermisoTablaByPermiso(java.lang.Integer permiso) {
        List lista = getPermisoTablasByPermiso(permiso);
        if (lista.isEmpty()) return null;
        return (PermisoTabla)lista.get(0);
    }
    @Override
    public List<PermisoTabla> getPermisoTablasByPermiso(java.lang.Integer permiso){
        Criteria criteria = getSession().createCriteria(PermisoTabla.class);
        criteria.add(Restrictions.eq("permiso", permiso));
        return  criteria.list();
    }
    @Override
    public PermisoTabla  getPermisoTablaByTabla(String tabla) {
        List lista = getPermisoTablasByTabla(tabla);
        if (lista.isEmpty()) return null;
        return (PermisoTabla)lista.get(0);
    }
    @Override
    public List<PermisoTabla> getPermisoTablasByTabla(String tabla){
        Criteria criteria = getSession().createCriteria(PermisoTabla.class);
        criteria.add(Restrictions.eq("tabla", tabla));
        return  criteria.list();
    }
    @Override
    public PermisoTabla  getPermisoTablaByStatus(java.lang.Integer status) {
        List lista = getPermisoTablasByStatus(status);
        if (lista.isEmpty()) return null;
        return (PermisoTabla)lista.get(0);
    }
    @Override
    public List<PermisoTabla> getPermisoTablasByStatus(java.lang.Integer status){
        Criteria criteria = getSession().createCriteria(PermisoTabla.class);
        criteria.add(Restrictions.eq("status", status));
        return  criteria.list();
    }
    @Override
    public PermisoTabla  getPermisoTablaByUsuarioUltMov(UsuarioDto usuarioUltMov) {
        List lista = getPermisoTablasByUsuarioUltMov(usuarioUltMov);
        if (lista.isEmpty()) return null;
        return (PermisoTabla)lista.get(0);
    }
    @Override
    public List<PermisoTabla> getPermisoTablasByUsuarioUltMov(UsuarioDto usuarioUltMovDto){
        Usuario usuarioUltMov = new ModelMapper().map(usuarioUltMovDto, Usuario.class);
        Criteria criteria = getSession().createCriteria(PermisoTabla.class);
        criteria.add(Restrictions.eq("usuarioUltMov", usuarioUltMov));
        return  criteria.list();
    }
    @Override
    public PermisoTabla  getPermisoTablaByUsuario(UsuarioDto usuario) {
        List lista = getPermisoTablasByUsuario(usuario);
        if (lista.isEmpty()) return null;
        return (PermisoTabla)lista.get(0);
    }
    @Override
    public List<PermisoTabla> getPermisoTablasByUsuario(UsuarioDto usuarioDto){
        Usuario usuario = new ModelMapper().map(usuarioDto, Usuario.class);
        Criteria criteria = getSession().createCriteria(PermisoTabla.class);
        criteria.add(Restrictions.eq("usuario", usuario));
        return  criteria.list();
    }
// busquedas por atributos  fin
    public List<PermisoTabla> getPermisoTablasByDto (PermisoTablaDto permisoTabla){
        Criteria criteria = getSession().createCriteria(PermisoTabla.class);
        if (permisoTabla.getId() != null  )
            criteria.add(Restrictions.eq("id", permisoTabla.getId() ));
        if (permisoTabla.getEtiqueta() != null  && !permisoTabla.getEtiqueta().trim().isEmpty()  )
            criteria.add(Restrictions.ilike("etiqueta", "%"+permisoTabla.getEtiqueta()+"%" ));
        if (permisoTabla.getPermiso() != null  )
            criteria.add(Restrictions.eq("permiso", permisoTabla.getPermiso() ));
        if (permisoTabla.getTabla() != null  && !permisoTabla.getTabla().trim().isEmpty()  )
            criteria.add(Restrictions.ilike("tabla", "%"+permisoTabla.getTabla()+"%" ));
        if (permisoTabla.getStatus() != null  )
            criteria.add(Restrictions.eq("status", permisoTabla.getStatus() ));
        if (permisoTabla.getUsuarioUltMov() != null  )
            criteria.add(Restrictions.eq("usuarioUltMov", permisoTabla.getUsuarioUltMov().toEntidad()  ));
        if (permisoTabla.getUsuario() != null  )
            criteria.add(Restrictions.eq("usuario", permisoTabla.getUsuario().toEntidad()  ));
        return  criteria.list();
    }

    @Override
    public List<PermisoTabla> custom(String consulta){
        Query query = getSession().createQuery(consulta);
        return query.list();
    }

}
