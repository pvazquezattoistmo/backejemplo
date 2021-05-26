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
public interface IPermisoConjuntoService {

    public PermisoConjuntoDto guardarPermisoConjunto(PermisoConjuntoDto dto) throws SitteecException;

    public boolean actualizarPermisoConjunto(PermisoConjuntoDto dto) throws SitteecException ;

    public boolean eliminarPermisoConjunto(PermisoConjuntoDto dto) throws SitteecException ;

    public PermisoConjuntoDto getPermisoConjunto(Integer id) throws SitteecException ;

    public List<PermisoConjuntoDto> getPermisoConjuntos() throws SitteecException ;
    
    public List<PermisoConjuntoDto> guardarListaPermisoConjunto(List<PermisoConjuntoDto> dtos)  throws SitteecException ;
    public List<PermisoConjuntoDto> actualizarListaPermisoConjunto(List<PermisoConjuntoDto> dtos)  throws SitteecException ;
    public HashMap <Integer,Integer> actualizarClaves(HashMap<Integer,Integer> claves) throws SitteecException ;
    public List<PermisoConjuntoDto> eliminarListaPermisoConjunto(List<PermisoConjuntoDto> dtos)  throws SitteecException ;
// busquedas por atributos inicio
public PermisoConjuntoDto getPermisoConjuntoById(Integer id) throws SitteecException ;
public List<PermisoConjuntoDto> getPermisoConjuntosById(Integer id) throws SitteecException ;
public PermisoConjuntoDto getPermisoConjuntoByEtiqueta(String etiqueta) throws SitteecException ;
public List<PermisoConjuntoDto> getPermisoConjuntosByEtiqueta(String etiqueta) throws SitteecException ;
public PermisoConjuntoDto getPermisoConjuntoByPermiso(java.lang.Integer permiso) throws SitteecException ;
public List<PermisoConjuntoDto> getPermisoConjuntosByPermiso(java.lang.Integer permiso) throws SitteecException ;
public PermisoConjuntoDto getPermisoConjuntoByTabla(String tabla) throws SitteecException ;
public List<PermisoConjuntoDto> getPermisoConjuntosByTabla(String tabla) throws SitteecException ;
public PermisoConjuntoDto getPermisoConjuntoByConjunto(String conjunto) throws SitteecException ;
public List<PermisoConjuntoDto> getPermisoConjuntosByConjunto(String conjunto) throws SitteecException ;
public PermisoConjuntoDto getPermisoConjuntoByStatus(java.lang.Integer status) throws SitteecException ;
public List<PermisoConjuntoDto> getPermisoConjuntosByStatus(java.lang.Integer status) throws SitteecException ;
public PermisoConjuntoDto getPermisoConjuntoByUsuarioUltMov(UsuarioDto usuarioUltMov) throws SitteecException ;
public List<PermisoConjuntoDto> getPermisoConjuntosByUsuarioUltMov(UsuarioDto usuarioUltMov) throws SitteecException ;
public PermisoConjuntoDto getPermisoConjuntoByUsuario(UsuarioDto usuario) throws SitteecException ;
public List<PermisoConjuntoDto> getPermisoConjuntosByUsuario(UsuarioDto usuario) throws SitteecException ;
// busquedas por atributos fin

public PermisoConjuntoDto lazyInjection (PermisoConjuntoDto dto ) throws SitteecException ;

public PermisoConjuntoDto lazyInjectionObjetos (PermisoConjuntoDto dto ) throws SitteecException ;

public PermisoConjuntoDto lazyInjectionConjuntos (PermisoConjuntoDto dto ) throws SitteecException ;

public PermisoConjuntoDto lazyInjectionEntidadObjetos (PermisoConjunto PEentidad, PermisoConjuntoDto salida ) throws SitteecException ;

public PermisoConjuntoDto lazyInjectionEntidadConjuntos (PermisoConjunto PEentidad, PermisoConjuntoDto salida ) throws SitteecException ;

public PermisoConjuntoDto lazyInjectionEntidadObjetosDto (PermisoConjuntoDto PEentidad, PermisoConjuntoDto salida ) throws SitteecException ;

public PermisoConjuntoDto lazyInjectionEntidadConjuntosDto (PermisoConjuntoDto PEentidad, PermisoConjuntoDto salida ) throws SitteecException ;

public PermisoConjuntoDto lazyInjectionEntidad (PermisoConjunto PEentidad ) throws SitteecException ;

//   add - remove Perfiles
    public List<PerfilDto> getPerfiles(PermisoConjuntoDto permisoConjuntoDto) throws SitteecException ;
    public PerfilDto addPerfiles(PermisoConjuntoDto permisoConjuntoDto, PerfilDto perfilDto) throws SitteecException ;
    public PerfilDto removePerfiles(PermisoConjuntoDto permisoConjuntoDto, PerfilDto perfilDto) throws SitteecException ;

    public List<PermisoConjuntoDto> custom(String consulta) throws SitteecException ;
    public List<PermisoConjuntoDto> getPermisoConjuntosByDto(PermisoConjuntoDto p_permisoConjunto) throws SitteecException ;


}
