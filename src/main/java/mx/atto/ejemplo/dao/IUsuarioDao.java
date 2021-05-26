package mx.atto.ejemplo.dao;
import mx.atto.ejemplo.exception.SitteecException;
import java.util.List;
import mx.atto.ejemplo.entity.Usuario;
import mx.atto.ejemplo.dto.*;
import java.util.Date;

/**
 *
 * @author IstmoSoft
 */
public interface IUsuarioDao extends IGenericDao<Usuario, Integer > {

// busquedas por atributos inicio
public Usuario getUsuarioById(Integer id);
public List<Usuario> getUsuariosById(Integer id);
public Usuario getUsuarioByPassword(String password);
public List<Usuario> getUsuariosByPassword(String password);
public Usuario getUsuarioByUsername(String username);
public List<Usuario> getUsuariosByUsername(String username);
public Usuario getUsuarioByStatus(java.lang.Integer status);
public List<Usuario> getUsuariosByStatus(java.lang.Integer status);
public Usuario getUsuarioByUsuarioUltMov(UsuarioDto usuarioUltMov);
public List<Usuario> getUsuariosByUsuarioUltMov(UsuarioDto usuarioUltMov);

public Usuario getUsuarioByPerfil(PerfilDto perfil);
public List<Usuario> getUsuariosByPerfil(PerfilDto perfil);
public Usuario getUsuarioByCorreoElectronico(String correoElectronico);
public List<Usuario> getUsuariosByCorreoElectronico(String correoElectronico);
// busquedas por atributos fin
    public List<Usuario> getUsuariosByDto(UsuarioDto usuario);
    public List<Usuario> login(UsuarioDto usuario);

    public List<Usuario> custom(String consulta);

}
