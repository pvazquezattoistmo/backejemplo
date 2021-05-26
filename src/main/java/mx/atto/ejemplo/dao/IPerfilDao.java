package mx.atto.ejemplo.dao;
import mx.atto.ejemplo.exception.SitteecException;
import java.util.List;
import mx.atto.ejemplo.entity.Perfil;
import mx.atto.ejemplo.dto.*;
import java.util.Date;

/**
 *
 * @author IstmoSoft
 */
public interface IPerfilDao extends IGenericDao<Perfil, Integer > {

// busquedas por atributos inicio
public Perfil getPerfilById(Integer id);
public List<Perfil> getPerfilesById(Integer id);
public Perfil getPerfilByDescripcion(String descripcion);
public List<Perfil> getPerfilesByDescripcion(String descripcion);
public Perfil getPerfilByRuta(String ruta);
public List<Perfil> getPerfilesByRuta(String ruta);
public Perfil getPerfilByNombre(String nombre);
public List<Perfil> getPerfilesByNombre(String nombre);
public Perfil getPerfilByStatus(java.lang.Integer status);
public List<Perfil> getPerfilesByStatus(java.lang.Integer status);
public Perfil getPerfilByUsuarioUltMov(UsuarioDto usuarioUltMov);
public List<Perfil> getPerfilesByUsuarioUltMov(UsuarioDto usuarioUltMov);
public Perfil getPerfilByUsuario(UsuarioDto usuario);
public List<Perfil> getPerfilesByUsuario(UsuarioDto usuario);
// busquedas por atributos fin
    public List<Perfil> getPerfilesByDto(PerfilDto perfil);

    public List<Perfil> custom(String consulta);

}
