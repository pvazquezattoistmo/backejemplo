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
@Repository("permisoConjuntoDao")
public class PermisoConjuntoDaoImpl extends GenericDaoImpl<PermisoConjunto, Integer >
        implements IPermisoConjuntoDao {

// busquedas por atributos  inicio
    @Override
    public PermisoConjunto  getPermisoConjuntoById(Integer id) {
        List lista = getPermisoConjuntosById(id);
        if (lista.isEmpty()) return null;
        return (PermisoConjunto)lista.get(0);
    }
    @Override
    public List<PermisoConjunto> getPermisoConjuntosById(Integer id){
        Criteria criteria = getSession().createCriteria(PermisoConjunto.class);
        criteria.add(Restrictions.eq("id", id));
        return  criteria.list();
    }
    @Override
    public PermisoConjunto  getPermisoConjuntoByEtiqueta(String etiqueta) {
        List lista = getPermisoConjuntosByEtiqueta(etiqueta);
        if (lista.isEmpty()) return null;
        return (PermisoConjunto)lista.get(0);
    }
    @Override
    public List<PermisoConjunto> getPermisoConjuntosByEtiqueta(String etiqueta){
        Criteria criteria = getSession().createCriteria(PermisoConjunto.class);
        criteria.add(Restrictions.eq("etiqueta", etiqueta));
        return  criteria.list();
    }
    @Override
    public PermisoConjunto  getPermisoConjuntoByPermiso(java.lang.Integer permiso) {
        List lista = getPermisoConjuntosByPermiso(permiso);
        if (lista.isEmpty()) return null;
        return (PermisoConjunto)lista.get(0);
    }
    @Override
    public List<PermisoConjunto> getPermisoConjuntosByPermiso(java.lang.Integer permiso){
        Criteria criteria = getSession().createCriteria(PermisoConjunto.class);
        criteria.add(Restrictions.eq("permiso", permiso));
        return  criteria.list();
    }
    @Override
    public PermisoConjunto  getPermisoConjuntoByTabla(String tabla) {
        List lista = getPermisoConjuntosByTabla(tabla);
        if (lista.isEmpty()) return null;
        return (PermisoConjunto)lista.get(0);
    }
    @Override
    public List<PermisoConjunto> getPermisoConjuntosByTabla(String tabla){
        Criteria criteria = getSession().createCriteria(PermisoConjunto.class);
        criteria.add(Restrictions.eq("tabla", tabla));
        return  criteria.list();
    }
    @Override
    public PermisoConjunto  getPermisoConjuntoByConjunto(String conjunto) {
        List lista = getPermisoConjuntosByConjunto(conjunto);
        if (lista.isEmpty()) return null;
        return (PermisoConjunto)lista.get(0);
    }
    @Override
    public List<PermisoConjunto> getPermisoConjuntosByConjunto(String conjunto){
        Criteria criteria = getSession().createCriteria(PermisoConjunto.class);
        criteria.add(Restrictions.eq("conjunto", conjunto));
        return  criteria.list();
    }
    @Override
    public PermisoConjunto  getPermisoConjuntoByStatus(java.lang.Integer status) {
        List lista = getPermisoConjuntosByStatus(status);
        if (lista.isEmpty()) return null;
        return (PermisoConjunto)lista.get(0);
    }
    @Override
    public List<PermisoConjunto> getPermisoConjuntosByStatus(java.lang.Integer status){
        Criteria criteria = getSession().createCriteria(PermisoConjunto.class);
        criteria.add(Restrictions.eq("status", status));
        return  criteria.list();
    }
    @Override
    public PermisoConjunto  getPermisoConjuntoByUsuarioUltMov(UsuarioDto usuarioUltMov) {
        List lista = getPermisoConjuntosByUsuarioUltMov(usuarioUltMov);
        if (lista.isEmpty()) return null;
        return (PermisoConjunto)lista.get(0);
    }
    @Override
    public List<PermisoConjunto> getPermisoConjuntosByUsuarioUltMov(UsuarioDto usuarioUltMovDto){
        Usuario usuarioUltMov = new ModelMapper().map(usuarioUltMovDto, Usuario.class);
        Criteria criteria = getSession().createCriteria(PermisoConjunto.class);
        criteria.add(Restrictions.eq("usuarioUltMov", usuarioUltMov));
        return  criteria.list();
    }
    @Override
    public PermisoConjunto  getPermisoConjuntoByUsuario(UsuarioDto usuario) {
        List lista = getPermisoConjuntosByUsuario(usuario);
        if (lista.isEmpty()) return null;
        return (PermisoConjunto)lista.get(0);
    }
    @Override
    public List<PermisoConjunto> getPermisoConjuntosByUsuario(UsuarioDto usuarioDto){
        Usuario usuario = new ModelMapper().map(usuarioDto, Usuario.class);
        Criteria criteria = getSession().createCriteria(PermisoConjunto.class);
        criteria.add(Restrictions.eq("usuario", usuario));
        return  criteria.list();
    }
// busquedas por atributos  fin
    public List<PermisoConjunto> getPermisoConjuntosByDto (PermisoConjuntoDto permisoConjunto){
        Criteria criteria = getSession().createCriteria(PermisoConjunto.class);
        if (permisoConjunto.getId() != null  )
            criteria.add(Restrictions.eq("id", permisoConjunto.getId() ));
        if (permisoConjunto.getEtiqueta() != null  && !permisoConjunto.getEtiqueta().trim().isEmpty()  )
            criteria.add(Restrictions.ilike("etiqueta", "%"+permisoConjunto.getEtiqueta()+"%" ));
        if (permisoConjunto.getPermiso() != null  )
            criteria.add(Restrictions.eq("permiso", permisoConjunto.getPermiso() ));
        if (permisoConjunto.getTabla() != null  && !permisoConjunto.getTabla().trim().isEmpty()  )
            criteria.add(Restrictions.ilike("tabla", "%"+permisoConjunto.getTabla()+"%" ));
        if (permisoConjunto.getConjunto() != null  && !permisoConjunto.getConjunto().trim().isEmpty()  )
            criteria.add(Restrictions.ilike("conjunto", "%"+permisoConjunto.getConjunto()+"%" ));
        if (permisoConjunto.getStatus() != null  )
            criteria.add(Restrictions.eq("status", permisoConjunto.getStatus() ));
        if (permisoConjunto.getUsuarioUltMov() != null  )
            criteria.add(Restrictions.eq("usuarioUltMov", permisoConjunto.getUsuarioUltMov().toEntidad()  ));
        if (permisoConjunto.getUsuario() != null  )
            criteria.add(Restrictions.eq("usuario", permisoConjunto.getUsuario().toEntidad()  ));
        return  criteria.list();
    }

    @Override
    public List<PermisoConjunto> custom(String consulta){
        Query query = getSession().createQuery(consulta);
        return query.list();
    }

}
