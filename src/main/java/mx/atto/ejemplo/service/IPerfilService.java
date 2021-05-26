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
public interface IPerfilService {

    public PerfilDto guardarPerfil(PerfilDto dto) throws SitteecException;

    public boolean actualizarPerfil(PerfilDto dto) throws SitteecException ;

    public boolean eliminarPerfil(PerfilDto dto) throws SitteecException ;

    public PerfilDto getPerfil(Integer id) throws SitteecException ;

    public List<PerfilDto> getPerfiles() throws SitteecException ;
    
    public List<PerfilDto> guardarListaPerfil(List<PerfilDto> dtos)  throws SitteecException ;
    public List<PerfilDto> actualizarListaPerfil(List<PerfilDto> dtos)  throws SitteecException ;
    public HashMap <Integer,Integer> actualizarClaves(HashMap<Integer,Integer> claves) throws SitteecException ;
    public List<PerfilDto> eliminarListaPerfil(List<PerfilDto> dtos)  throws SitteecException ;
// busquedas por atributos inicio
public PerfilDto getPerfilById(Integer id) throws SitteecException ;
public List<PerfilDto> getPerfilesById(Integer id) throws SitteecException ;
public PerfilDto getPerfilByDescripcion(String descripcion) throws SitteecException ;
public List<PerfilDto> getPerfilesByDescripcion(String descripcion) throws SitteecException ;
public PerfilDto getPerfilByRuta(String ruta) throws SitteecException ;
public List<PerfilDto> getPerfilesByRuta(String ruta) throws SitteecException ;
public PerfilDto getPerfilByNombre(String nombre) throws SitteecException ;
public List<PerfilDto> getPerfilesByNombre(String nombre) throws SitteecException ;
public PerfilDto getPerfilByStatus(java.lang.Integer status) throws SitteecException ;
public List<PerfilDto> getPerfilesByStatus(java.lang.Integer status) throws SitteecException ;
public PerfilDto getPerfilByUsuarioUltMov(UsuarioDto usuarioUltMov) throws SitteecException ;
public List<PerfilDto> getPerfilesByUsuarioUltMov(UsuarioDto usuarioUltMov) throws SitteecException ;
public PerfilDto getPerfilByUsuario(UsuarioDto usuario) throws SitteecException ;
public List<PerfilDto> getPerfilesByUsuario(UsuarioDto usuario) throws SitteecException ;
// busquedas por atributos fin

public PerfilDto lazyInjection (PerfilDto dto ) throws SitteecException ;

public PerfilDto lazyInjectionObjetos (PerfilDto dto ) throws SitteecException ;

public PerfilDto lazyInjectionConjuntos (PerfilDto dto ) throws SitteecException ;

public PerfilDto lazyInjectionEntidadObjetos (Perfil PEentidad, PerfilDto salida ) throws SitteecException ;

public PerfilDto lazyInjectionEntidadConjuntos (Perfil PEentidad, PerfilDto salida ) throws SitteecException ;

public PerfilDto lazyInjectionEntidadObjetosDto (PerfilDto PEentidad, PerfilDto salida ) throws SitteecException ;

public PerfilDto lazyInjectionEntidadConjuntosDto (PerfilDto PEentidad, PerfilDto salida ) throws SitteecException ;

public PerfilDto lazyInjectionEntidad (Perfil PEentidad ) throws SitteecException ;


    public List<PerfilDto> custom(String consulta) throws SitteecException ;
    public List<PerfilDto> getPerfilesByDto(PerfilDto p_perfil) throws SitteecException ;


}
