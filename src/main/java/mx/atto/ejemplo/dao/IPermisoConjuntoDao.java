package mx.atto.ejemplo.dao;
import mx.atto.ejemplo.exception.SitteecException;
import java.util.List;
import mx.atto.ejemplo.entity.PermisoConjunto;
import mx.atto.ejemplo.dto.*;
import java.util.Date;

/**
 *
 * @author IstmoSoft
 */
public interface IPermisoConjuntoDao extends IGenericDao<PermisoConjunto, Integer > {

// busquedas por atributos inicio
public PermisoConjunto getPermisoConjuntoById(Integer id);
public List<PermisoConjunto> getPermisoConjuntosById(Integer id);
public PermisoConjunto getPermisoConjuntoByEtiqueta(String etiqueta);
public List<PermisoConjunto> getPermisoConjuntosByEtiqueta(String etiqueta);
public PermisoConjunto getPermisoConjuntoByPermiso(java.lang.Integer permiso);
public List<PermisoConjunto> getPermisoConjuntosByPermiso(java.lang.Integer permiso);
public PermisoConjunto getPermisoConjuntoByTabla(String tabla);
public List<PermisoConjunto> getPermisoConjuntosByTabla(String tabla);
public PermisoConjunto getPermisoConjuntoByConjunto(String conjunto);
public List<PermisoConjunto> getPermisoConjuntosByConjunto(String conjunto);
public PermisoConjunto getPermisoConjuntoByStatus(java.lang.Integer status);
public List<PermisoConjunto> getPermisoConjuntosByStatus(java.lang.Integer status);
public PermisoConjunto getPermisoConjuntoByUsuarioUltMov(UsuarioDto usuarioUltMov);
public List<PermisoConjunto> getPermisoConjuntosByUsuarioUltMov(UsuarioDto usuarioUltMov);
public PermisoConjunto getPermisoConjuntoByUsuario(UsuarioDto usuario);
public List<PermisoConjunto> getPermisoConjuntosByUsuario(UsuarioDto usuario);
// busquedas por atributos fin
    public List<PermisoConjunto> getPermisoConjuntosByDto(PermisoConjuntoDto permisoConjunto);

    public List<PermisoConjunto> custom(String consulta);

}
