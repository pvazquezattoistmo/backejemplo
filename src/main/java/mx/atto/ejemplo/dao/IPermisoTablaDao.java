package mx.atto.ejemplo.dao;
import mx.atto.ejemplo.exception.SitteecException;
import java.util.List;
import mx.atto.ejemplo.entity.PermisoTabla;
import mx.atto.ejemplo.dto.*;
import java.util.Date;

/**
 *
 * @author IstmoSoft
 */
public interface IPermisoTablaDao extends IGenericDao<PermisoTabla, Integer > {

// busquedas por atributos inicio
public PermisoTabla getPermisoTablaById(Integer id);
public List<PermisoTabla> getPermisoTablasById(Integer id);
public PermisoTabla getPermisoTablaByEtiqueta(String etiqueta);
public List<PermisoTabla> getPermisoTablasByEtiqueta(String etiqueta);
public PermisoTabla getPermisoTablaByPermiso(java.lang.Integer permiso);
public List<PermisoTabla> getPermisoTablasByPermiso(java.lang.Integer permiso);
public PermisoTabla getPermisoTablaByTabla(String tabla);
public List<PermisoTabla> getPermisoTablasByTabla(String tabla);
public PermisoTabla getPermisoTablaByStatus(java.lang.Integer status);
public List<PermisoTabla> getPermisoTablasByStatus(java.lang.Integer status);
public PermisoTabla getPermisoTablaByUsuarioUltMov(UsuarioDto usuarioUltMov);
public List<PermisoTabla> getPermisoTablasByUsuarioUltMov(UsuarioDto usuarioUltMov);
public PermisoTabla getPermisoTablaByUsuario(UsuarioDto usuario);
public List<PermisoTabla> getPermisoTablasByUsuario(UsuarioDto usuario);
// busquedas por atributos fin
    public List<PermisoTabla> getPermisoTablasByDto(PermisoTablaDto permisoTabla);

    public List<PermisoTabla> custom(String consulta);

}
