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
@Repository("permisoAtributoDao")
public class PermisoAtributoDaoImpl extends GenericDaoImpl<PermisoAtributo, Integer >
        implements IPermisoAtributoDao {

// busquedas por atributos  inicio
    @Override
    public PermisoAtributo  getPermisoAtributoById(Integer id) {
        List lista = getPermisoAtributosById(id);
        if (lista.isEmpty()) return null;
        return (PermisoAtributo)lista.get(0);
    }
    @Override
    public List<PermisoAtributo> getPermisoAtributosById(Integer id){
        Criteria criteria = getSession().createCriteria(PermisoAtributo.class);
        criteria.add(Restrictions.eq("id", id));
        return  criteria.list();
    }
    @Override
    public PermisoAtributo  getPermisoAtributoByEtiqueta(String etiqueta) {
        List lista = getPermisoAtributosByEtiqueta(etiqueta);
        if (lista.isEmpty()) return null;
        return (PermisoAtributo)lista.get(0);
    }
    @Override
    public List<PermisoAtributo> getPermisoAtributosByEtiqueta(String etiqueta){
        Criteria criteria = getSession().createCriteria(PermisoAtributo.class);
        criteria.add(Restrictions.eq("etiqueta", etiqueta));
        return  criteria.list();
    }
    @Override
    public PermisoAtributo  getPermisoAtributoByValidacion(String validacion) {
        List lista = getPermisoAtributosByValidacion(validacion);
        if (lista.isEmpty()) return null;
        return (PermisoAtributo)lista.get(0);
    }
    @Override
    public List<PermisoAtributo> getPermisoAtributosByValidacion(String validacion){
        Criteria criteria = getSession().createCriteria(PermisoAtributo.class);
        criteria.add(Restrictions.eq("validacion", validacion));
        return  criteria.list();
    }
    @Override
    public PermisoAtributo  getPermisoAtributoByPermiso(java.lang.Integer permiso) {
        List lista = getPermisoAtributosByPermiso(permiso);
        if (lista.isEmpty()) return null;
        return (PermisoAtributo)lista.get(0);
    }
    @Override
    public List<PermisoAtributo> getPermisoAtributosByPermiso(java.lang.Integer permiso){
        Criteria criteria = getSession().createCriteria(PermisoAtributo.class);
        criteria.add(Restrictions.eq("permiso", permiso));
        return  criteria.list();
    }
    @Override
    public PermisoAtributo  getPermisoAtributoByTabla(String tabla) {
        List lista = getPermisoAtributosByTabla(tabla);
        if (lista.isEmpty()) return null;
        return (PermisoAtributo)lista.get(0);
    }
    @Override
    public List<PermisoAtributo> getPermisoAtributosByTabla(String tabla){
        Criteria criteria = getSession().createCriteria(PermisoAtributo.class);
        criteria.add(Restrictions.eq("tabla", tabla));
        return  criteria.list();
    }
    @Override
    public PermisoAtributo  getPermisoAtributoByAtributo(String atributo) {
        List lista = getPermisoAtributosByAtributo(atributo);
        if (lista.isEmpty()) return null;
        return (PermisoAtributo)lista.get(0);
    }
    @Override
    public List<PermisoAtributo> getPermisoAtributosByAtributo(String atributo){
        Criteria criteria = getSession().createCriteria(PermisoAtributo.class);
        criteria.add(Restrictions.eq("atributo", atributo));
        return  criteria.list();
    }
    @Override
    public PermisoAtributo  getPermisoAtributoByMensaje(String mensaje) {
        List lista = getPermisoAtributosByMensaje(mensaje);
        if (lista.isEmpty()) return null;
        return (PermisoAtributo)lista.get(0);
    }
    @Override
    public List<PermisoAtributo> getPermisoAtributosByMensaje(String mensaje){
        Criteria criteria = getSession().createCriteria(PermisoAtributo.class);
        criteria.add(Restrictions.eq("mensaje", mensaje));
        return  criteria.list();
    }
    @Override
    public PermisoAtributo  getPermisoAtributoByStatus(java.lang.Integer status) {
        List lista = getPermisoAtributosByStatus(status);
        if (lista.isEmpty()) return null;
        return (PermisoAtributo)lista.get(0);
    }
    @Override
    public List<PermisoAtributo> getPermisoAtributosByStatus(java.lang.Integer status){
        Criteria criteria = getSession().createCriteria(PermisoAtributo.class);
        criteria.add(Restrictions.eq("status", status));
        return  criteria.list();
    }
    @Override
    public PermisoAtributo  getPermisoAtributoByUsuarioUltMov(UsuarioDto usuarioUltMov) {
        List lista = getPermisoAtributosByUsuarioUltMov(usuarioUltMov);
        if (lista.isEmpty()) return null;
        return (PermisoAtributo)lista.get(0);
    }
    @Override
    public List<PermisoAtributo> getPermisoAtributosByUsuarioUltMov(UsuarioDto usuarioUltMovDto){
        Usuario usuarioUltMov = new ModelMapper().map(usuarioUltMovDto, Usuario.class);
        Criteria criteria = getSession().createCriteria(PermisoAtributo.class);
        criteria.add(Restrictions.eq("usuarioUltMov", usuarioUltMov));
        return  criteria.list();
    }
    @Override
    public PermisoAtributo  getPermisoAtributoByUsuario(UsuarioDto usuario) {
        List lista = getPermisoAtributosByUsuario(usuario);
        if (lista.isEmpty()) return null;
        return (PermisoAtributo)lista.get(0);
    }
    @Override
    public List<PermisoAtributo> getPermisoAtributosByUsuario(UsuarioDto usuarioDto){
        Usuario usuario = new ModelMapper().map(usuarioDto, Usuario.class);
        Criteria criteria = getSession().createCriteria(PermisoAtributo.class);
        criteria.add(Restrictions.eq("usuario", usuario));
        return  criteria.list();
    }
// busquedas por atributos  fin
    public List<PermisoAtributo> getPermisoAtributosByDto (PermisoAtributoDto permisoAtributo){
        Criteria criteria = getSession().createCriteria(PermisoAtributo.class);
        if (permisoAtributo.getId() != null  )
            criteria.add(Restrictions.eq("id", permisoAtributo.getId() ));
        if (permisoAtributo.getEtiqueta() != null  && !permisoAtributo.getEtiqueta().trim().isEmpty()  )
            criteria.add(Restrictions.ilike("etiqueta", "%"+permisoAtributo.getEtiqueta()+"%" ));
        if (permisoAtributo.getValidacion() != null  && !permisoAtributo.getValidacion().trim().isEmpty()  )
            criteria.add(Restrictions.ilike("validacion", "%"+permisoAtributo.getValidacion()+"%" ));
        if (permisoAtributo.getPermiso() != null  )
            criteria.add(Restrictions.eq("permiso", permisoAtributo.getPermiso() ));
        if (permisoAtributo.getTabla() != null  && !permisoAtributo.getTabla().trim().isEmpty()  )
            criteria.add(Restrictions.ilike("tabla", "%"+permisoAtributo.getTabla()+"%" ));
        if (permisoAtributo.getAtributo() != null  && !permisoAtributo.getAtributo().trim().isEmpty()  )
            criteria.add(Restrictions.ilike("atributo", "%"+permisoAtributo.getAtributo()+"%" ));
        if (permisoAtributo.getMensaje() != null  && !permisoAtributo.getMensaje().trim().isEmpty()  )
            criteria.add(Restrictions.ilike("mensaje", "%"+permisoAtributo.getMensaje()+"%" ));
        if (permisoAtributo.getStatus() != null  )
            criteria.add(Restrictions.eq("status", permisoAtributo.getStatus() ));
        if (permisoAtributo.getUsuarioUltMov() != null  )
            criteria.add(Restrictions.eq("usuarioUltMov", permisoAtributo.getUsuarioUltMov().toEntidad()  ));
        if (permisoAtributo.getUsuario() != null  )
            criteria.add(Restrictions.eq("usuario", permisoAtributo.getUsuario().toEntidad()  ));
        return  criteria.list();
    }

    @Override
    public List<PermisoAtributo> custom(String consulta){
        Query query = getSession().createQuery(consulta);
        return query.list();
    }

}
