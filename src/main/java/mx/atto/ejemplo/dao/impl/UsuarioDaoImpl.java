package mx.atto.ejemplo.dao.impl;
import mx.atto.ejemplo.exception.SitteecException;

import java.util.ArrayList;
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
@Repository("usuarioDao")
public class UsuarioDaoImpl extends GenericDaoImpl<Usuario, Integer >
        implements IUsuarioDao {

// busquedas por atributos  inicio
    @Override
    public Usuario  getUsuarioById(Integer id) {
        List lista = getUsuariosById(id);
        if (lista.isEmpty()) return null;
        return (Usuario)lista.get(0);
    }
    @Override
    public List<Usuario> getUsuariosById(Integer id){
        Criteria criteria = getSession().createCriteria(Usuario.class);
        criteria.add(Restrictions.eq("id", id));
        return  criteria.list();
    }
    @Override
    public Usuario  getUsuarioByPassword(String password) {
        List lista = getUsuariosByPassword(password);
        if (lista.isEmpty()) return null;
        return (Usuario)lista.get(0);
    }
    @Override
    public List<Usuario> getUsuariosByPassword(String password){
        Criteria criteria = getSession().createCriteria(Usuario.class);
        criteria.add(Restrictions.eq("password", password));
        return  criteria.list();
    }
    @Override
    public Usuario  getUsuarioByUsername(String username) {
        List lista = getUsuariosByUsername(username);
        if (lista.isEmpty()) return null;
        return (Usuario)lista.get(0);
    }
    @Override
    public List<Usuario> getUsuariosByUsername(String username){
        Criteria criteria = getSession().createCriteria(Usuario.class);
        criteria.add(Restrictions.eq("username", username));
        return  criteria.list();
    }
    @Override
    public Usuario  getUsuarioByStatus(java.lang.Integer status) {
        List lista = getUsuariosByStatus(status);
        if (lista.isEmpty()) return null;
        return (Usuario)lista.get(0);
    }
    @Override
    public List<Usuario> getUsuariosByStatus(java.lang.Integer status){
        Criteria criteria = getSession().createCriteria(Usuario.class);
        criteria.add(Restrictions.eq("status", status));
        return  criteria.list();
    }
    @Override
    public Usuario  getUsuarioByUsuarioUltMov(UsuarioDto usuarioUltMov) {
        List lista = getUsuariosByUsuarioUltMov(usuarioUltMov);
        if (lista.isEmpty()) return null;
        return (Usuario)lista.get(0);
    }
    @Override
    public List<Usuario> getUsuariosByUsuarioUltMov(UsuarioDto usuarioUltMovDto){
        Usuario usuarioUltMov = new ModelMapper().map(usuarioUltMovDto, Usuario.class);
        Criteria criteria = getSession().createCriteria(Usuario.class);
        criteria.add(Restrictions.eq("usuarioUltMov", usuarioUltMov));
        return  criteria.list();
    }

    @Override
    public Usuario  getUsuarioByPerfil(PerfilDto perfil) {
        List lista = getUsuariosByPerfil(perfil);
        if (lista.isEmpty()) return null;
        return (Usuario)lista.get(0);
    }
    @Override
    public List<Usuario> getUsuariosByPerfil(PerfilDto perfilDto){
        Perfil perfil = new ModelMapper().map(perfilDto, Perfil.class);
        Criteria criteria = getSession().createCriteria(Usuario.class);
        criteria.add(Restrictions.eq("perfil", perfil));
        return  criteria.list();
    }
    @Override
    public Usuario  getUsuarioByCorreoElectronico(String correoElectronico) {
        List lista = getUsuariosByCorreoElectronico(correoElectronico);
        if (lista.isEmpty()) return null;
        return (Usuario)lista.get(0);
    }
    @Override
    public List<Usuario> getUsuariosByCorreoElectronico(String correoElectronico){
        Criteria criteria = getSession().createCriteria(Usuario.class);
        criteria.add(Restrictions.eq("correoElectronico", correoElectronico));
        return  criteria.list();
    }
// busquedas por atributos  fin
    public List<Usuario> getUsuariosByDto (UsuarioDto usuario){
        Criteria criteria = getSession().createCriteria(Usuario.class);
        if (usuario.getId() != null  )
            criteria.add(Restrictions.eq("id", usuario.getId() ));
        if (usuario.getNombre() != null  && !usuario.getNombre().trim().isEmpty()  )
            criteria.add(Restrictions.ilike("nombre", "%"+usuario.getNombre()+"%" ));
        if (usuario.getPrimerApellido() != null  && !usuario.getPrimerApellido().trim().isEmpty()  )
            criteria.add(Restrictions.ilike("primerApellido", "%"+usuario.getPrimerApellido()+"%" ));
        if (usuario.getSegundoApellido() != null  && !usuario.getSegundoApellido().trim().isEmpty()  )
            criteria.add(Restrictions.ilike("segundoApellido", "%"+usuario.getSegundoApellido()+"%" ));
        if (usuario.getCorreoElectronico() != null  && !usuario.getCorreoElectronico().trim().isEmpty()  )
            criteria.add(Restrictions.ilike("correoElectronico", "%"+usuario.getCorreoElectronico()+"%" ));
        if (usuario.getUsername() != null  && !usuario.getUsername().trim().isEmpty()  )
            criteria.add(Restrictions.ilike("username", "%"+usuario.getUsername()+"%" ));
        if (usuario.getPassword() != null  && !usuario.getPassword().trim().isEmpty()  )
            criteria.add(Restrictions.ilike("password", "%"+usuario.getPassword()+"%" ));
        if (usuario.getFechaBaja() != null  )
            criteria.add(Restrictions.eq("fechaBaja", usuario.getFechaBaja() ));
        if (usuario.getFechaRegistro() != null  )
            criteria.add(Restrictions.eq("fechaRegistro", usuario.getFechaRegistro() ));
        if (usuario.getFechaActualizacion() != null  )
            criteria.add(Restrictions.eq("fechaActualizacion", usuario.getFechaActualizacion() ));
        if (usuario.getStatus() != null  )
            criteria.add(Restrictions.eq("status", usuario.getStatus() ));
        if (usuario.getUsuarioUltMov() != null  )
            criteria.add(Restrictions.eq("usuarioUltMov", usuario.getUsuarioUltMov().toEntidad()  ));
        if (usuario.getPerfil() != null  )
            criteria.add(Restrictions.eq("perfil", usuario.getPerfil().toEntidad()  ));
        return  criteria.list();
    }
    
    public List<Usuario> login (UsuarioDto usuario){
        System.out.println("username: " +usuario.getUsername());
        System.out.println("password: "+usuario.getPassword());
        Criteria criteria = getSession().createCriteria(Usuario.class);
        if (usuario.getPassword() != null && !usuario.getPassword().trim().isEmpty()) {
            criteria.add(Restrictions.eq("password", usuario.getPassword()));
        }
        if (usuario.getUsername() != null && !usuario.getUsername().trim().isEmpty()) {
            criteria.add(Restrictions.eq("username", usuario.getUsername()));
        }
        if(criteria.list().size() > 0){
            Usuario get = (Usuario) criteria.list().get(0);
            if(!get.getUsername().equals(usuario.getUsername()) || !get.getPassword().equals(usuario.getPassword())){
                return new ArrayList<>();
            }
        }
        return criteria.list();
    }

    @Override
    public List<Usuario> custom(String consulta){
        Query query = getSession().createQuery(consulta);
        return query.list();
    }

}
