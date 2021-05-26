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
public interface IPermisoTablaService {

    public PermisoTablaDto guardarPermisoTabla(PermisoTablaDto dto) throws SitteecException;

    public boolean actualizarPermisoTabla(PermisoTablaDto dto) throws SitteecException ;

    public boolean eliminarPermisoTabla(PermisoTablaDto dto) throws SitteecException ;

    public PermisoTablaDto getPermisoTabla(Integer id) throws SitteecException ;

    public List<PermisoTablaDto> getPermisoTablas() throws SitteecException ;
    
    public List<PermisoTablaDto> guardarListaPermisoTabla(List<PermisoTablaDto> dtos)  throws SitteecException ;
    public List<PermisoTablaDto> actualizarListaPermisoTabla(List<PermisoTablaDto> dtos)  throws SitteecException ;
    public HashMap <Integer,Integer> actualizarClaves(HashMap<Integer,Integer> claves) throws SitteecException ;
    public List<PermisoTablaDto> eliminarListaPermisoTabla(List<PermisoTablaDto> dtos)  throws SitteecException ;
// busquedas por atributos inicio
public PermisoTablaDto getPermisoTablaById(Integer id) throws SitteecException ;
public List<PermisoTablaDto> getPermisoTablasById(Integer id) throws SitteecException ;
public PermisoTablaDto getPermisoTablaByEtiqueta(String etiqueta) throws SitteecException ;
public List<PermisoTablaDto> getPermisoTablasByEtiqueta(String etiqueta) throws SitteecException ;
public PermisoTablaDto getPermisoTablaByPermiso(java.lang.Integer permiso) throws SitteecException ;
public List<PermisoTablaDto> getPermisoTablasByPermiso(java.lang.Integer permiso) throws SitteecException ;
public PermisoTablaDto getPermisoTablaByTabla(String tabla) throws SitteecException ;
public List<PermisoTablaDto> getPermisoTablasByTabla(String tabla) throws SitteecException ;
public PermisoTablaDto getPermisoTablaByStatus(java.lang.Integer status) throws SitteecException ;
public List<PermisoTablaDto> getPermisoTablasByStatus(java.lang.Integer status) throws SitteecException ;
public PermisoTablaDto getPermisoTablaByUsuarioUltMov(UsuarioDto usuarioUltMov) throws SitteecException ;
public List<PermisoTablaDto> getPermisoTablasByUsuarioUltMov(UsuarioDto usuarioUltMov) throws SitteecException ;
public PermisoTablaDto getPermisoTablaByUsuario(UsuarioDto usuario) throws SitteecException ;
public List<PermisoTablaDto> getPermisoTablasByUsuario(UsuarioDto usuario) throws SitteecException ;
// busquedas por atributos fin

public PermisoTablaDto lazyInjection (PermisoTablaDto dto ) throws SitteecException ;

public PermisoTablaDto lazyInjectionObjetos (PermisoTablaDto dto ) throws SitteecException ;

public PermisoTablaDto lazyInjectionConjuntos (PermisoTablaDto dto ) throws SitteecException ;

public PermisoTablaDto lazyInjectionEntidadObjetos (PermisoTabla PEentidad, PermisoTablaDto salida ) throws SitteecException ;

public PermisoTablaDto lazyInjectionEntidadConjuntos (PermisoTabla PEentidad, PermisoTablaDto salida ) throws SitteecException ;

public PermisoTablaDto lazyInjectionEntidadObjetosDto (PermisoTablaDto PEentidad, PermisoTablaDto salida ) throws SitteecException ;

public PermisoTablaDto lazyInjectionEntidadConjuntosDto (PermisoTablaDto PEentidad, PermisoTablaDto salida ) throws SitteecException ;

public PermisoTablaDto lazyInjectionEntidad (PermisoTabla PEentidad ) throws SitteecException ;

//   add - remove Perfiles
    public List<PerfilDto> getPerfiles(PermisoTablaDto permisoTablaDto) throws SitteecException ;
    public PerfilDto addPerfiles(PermisoTablaDto permisoTablaDto, PerfilDto perfilDto) throws SitteecException ;
    public PerfilDto removePerfiles(PermisoTablaDto permisoTablaDto, PerfilDto perfilDto) throws SitteecException ;

    public List<PermisoTablaDto> custom(String consulta) throws SitteecException ;
    public List<PermisoTablaDto> getPermisoTablasByDto(PermisoTablaDto p_permisoTabla) throws SitteecException ;


}
