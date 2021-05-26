package mx.atto.ejemplo.dao;
import mx.atto.ejemplo.exception.SitteecException;
import java.util.List;
import mx.atto.ejemplo.entity.PermisoAtributo;
import mx.atto.ejemplo.dto.*;
import java.util.Date;

/**
 *
 * @author IstmoSoft
 */
public interface IPermisoAtributoDao extends IGenericDao<PermisoAtributo, Integer > {

// busquedas por atributos inicio
public PermisoAtributo getPermisoAtributoById(Integer id);
public List<PermisoAtributo> getPermisoAtributosById(Integer id);
public PermisoAtributo getPermisoAtributoByEtiqueta(String etiqueta);
public List<PermisoAtributo> getPermisoAtributosByEtiqueta(String etiqueta);
public PermisoAtributo getPermisoAtributoByValidacion(String validacion);
public List<PermisoAtributo> getPermisoAtributosByValidacion(String validacion);
public PermisoAtributo getPermisoAtributoByPermiso(java.lang.Integer permiso);
public List<PermisoAtributo> getPermisoAtributosByPermiso(java.lang.Integer permiso);
public PermisoAtributo getPermisoAtributoByTabla(String tabla);
public List<PermisoAtributo> getPermisoAtributosByTabla(String tabla);
public PermisoAtributo getPermisoAtributoByAtributo(String atributo);
public List<PermisoAtributo> getPermisoAtributosByAtributo(String atributo);
public PermisoAtributo getPermisoAtributoByMensaje(String mensaje);
public List<PermisoAtributo> getPermisoAtributosByMensaje(String mensaje);
public PermisoAtributo getPermisoAtributoByStatus(java.lang.Integer status);
public List<PermisoAtributo> getPermisoAtributosByStatus(java.lang.Integer status);
public PermisoAtributo getPermisoAtributoByUsuarioUltMov(UsuarioDto usuarioUltMov);
public List<PermisoAtributo> getPermisoAtributosByUsuarioUltMov(UsuarioDto usuarioUltMov);
public PermisoAtributo getPermisoAtributoByUsuario(UsuarioDto usuario);
public List<PermisoAtributo> getPermisoAtributosByUsuario(UsuarioDto usuario);
// busquedas por atributos fin
    public List<PermisoAtributo> getPermisoAtributosByDto(PermisoAtributoDto permisoAtributo);

    public List<PermisoAtributo> custom(String consulta);

}
