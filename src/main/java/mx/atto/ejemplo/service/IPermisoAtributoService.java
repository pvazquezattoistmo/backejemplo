package mx.atto.ejemplo.service;
import mx.atto.ejemplo.exception.SitteecException;

import java.util.List;
import mx.atto.ejemplo.dto.*;
import mx.atto.ejemplo.entity.*;
import java.util.Date;
import java.util.HashMap;

/**
 *
 * @author @author IstmoSoft
 */
public interface IPermisoAtributoService {

    public PermisoAtributoDto guardarPermisoAtributo(PermisoAtributoDto dto) throws SitteecException;

    public boolean actualizarPermisoAtributo(PermisoAtributoDto dto) throws SitteecException ;

    public boolean eliminarPermisoAtributo(PermisoAtributoDto dto) throws SitteecException ;

    public PermisoAtributoDto getPermisoAtributo(Integer id) throws SitteecException ;

    public List<PermisoAtributoDto> getPermisoAtributos() throws SitteecException ;
    
    public List<PermisoAtributoDto> guardarListaPermisoAtributo(List<PermisoAtributoDto> dtos)  throws SitteecException ;
    public List<PermisoAtributoDto> actualizarListaPermisoAtributo(List<PermisoAtributoDto> dtos)  throws SitteecException ;
    public HashMap <Integer,Integer> actualizarClaves(HashMap<Integer,Integer> claves) throws SitteecException ;
    public List<PermisoAtributoDto> eliminarListaPermisoAtributo(List<PermisoAtributoDto> dtos)  throws SitteecException ;
// busquedas por atributos inicio
public PermisoAtributoDto getPermisoAtributoById(Integer id) throws SitteecException ;
public List<PermisoAtributoDto> getPermisoAtributosById(Integer id) throws SitteecException ;
public PermisoAtributoDto getPermisoAtributoByEtiqueta(String etiqueta) throws SitteecException ;
public List<PermisoAtributoDto> getPermisoAtributosByEtiqueta(String etiqueta) throws SitteecException ;
public PermisoAtributoDto getPermisoAtributoByValidacion(String validacion) throws SitteecException ;
public List<PermisoAtributoDto> getPermisoAtributosByValidacion(String validacion) throws SitteecException ;
public PermisoAtributoDto getPermisoAtributoByPermiso(java.lang.Integer permiso) throws SitteecException ;
public List<PermisoAtributoDto> getPermisoAtributosByPermiso(java.lang.Integer permiso) throws SitteecException ;
public PermisoAtributoDto getPermisoAtributoByTabla(String tabla) throws SitteecException ;
public List<PermisoAtributoDto> getPermisoAtributosByTabla(String tabla) throws SitteecException ;
public PermisoAtributoDto getPermisoAtributoByAtributo(String atributo) throws SitteecException ;
public List<PermisoAtributoDto> getPermisoAtributosByAtributo(String atributo) throws SitteecException ;
public PermisoAtributoDto getPermisoAtributoByMensaje(String mensaje) throws SitteecException ;
public List<PermisoAtributoDto> getPermisoAtributosByMensaje(String mensaje) throws SitteecException ;
public PermisoAtributoDto getPermisoAtributoByStatus(java.lang.Integer status) throws SitteecException ;
public List<PermisoAtributoDto> getPermisoAtributosByStatus(java.lang.Integer status) throws SitteecException ;
public PermisoAtributoDto getPermisoAtributoByUsuarioUltMov(UsuarioDto usuarioUltMov) throws SitteecException ;
public List<PermisoAtributoDto> getPermisoAtributosByUsuarioUltMov(UsuarioDto usuarioUltMov) throws SitteecException ;
public PermisoAtributoDto getPermisoAtributoByUsuario(UsuarioDto usuario) throws SitteecException ;
public List<PermisoAtributoDto> getPermisoAtributosByUsuario(UsuarioDto usuario) throws SitteecException ;
// busquedas por atributos fin

public PermisoAtributoDto lazyInjection (PermisoAtributoDto dto ) throws SitteecException ;

public PermisoAtributoDto lazyInjectionObjetos (PermisoAtributoDto dto ) throws SitteecException ;

public PermisoAtributoDto lazyInjectionConjuntos (PermisoAtributoDto dto ) throws SitteecException ;

public PermisoAtributoDto lazyInjectionEntidadObjetos (PermisoAtributo PEentidad, PermisoAtributoDto salida ) throws SitteecException ;

public PermisoAtributoDto lazyInjectionEntidadConjuntos (PermisoAtributo PEentidad, PermisoAtributoDto salida ) throws SitteecException ;

public PermisoAtributoDto lazyInjectionEntidadObjetosDto (PermisoAtributoDto PEentidad, PermisoAtributoDto salida ) throws SitteecException ;

public PermisoAtributoDto lazyInjectionEntidadConjuntosDto (PermisoAtributoDto PEentidad, PermisoAtributoDto salida ) throws SitteecException ;

public PermisoAtributoDto lazyInjectionEntidad (PermisoAtributo PEentidad ) throws SitteecException ;

//   add - remove Perfiles
    public List<PerfilDto> getPerfiles(PermisoAtributoDto permisoAtributoDto) throws SitteecException ;
    public PerfilDto addPerfiles(PermisoAtributoDto permisoAtributoDto, PerfilDto perfilDto) throws SitteecException ;
    public PerfilDto removePerfiles(PermisoAtributoDto permisoAtributoDto, PerfilDto perfilDto) throws SitteecException ;

    public List<PermisoAtributoDto> custom(String consulta) throws SitteecException ;
    public List<PermisoAtributoDto> getPermisoAtributosByDto(PermisoAtributoDto p_permisoAtributo) throws SitteecException ;


}
