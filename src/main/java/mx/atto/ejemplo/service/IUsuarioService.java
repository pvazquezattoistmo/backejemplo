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
public interface IUsuarioService {

    public UsuarioDto guardarUsuario(UsuarioDto dto) throws SitteecException;

    public boolean actualizarUsuario(UsuarioDto dto) throws SitteecException ;

    public boolean eliminarUsuario(UsuarioDto dto) throws SitteecException ;

    public UsuarioDto getUsuario(Integer id) throws SitteecException ;

    public List<UsuarioDto> getUsuarios() throws SitteecException ;
    
    public List<UsuarioDto> guardarListaUsuario(List<UsuarioDto> dtos)  throws SitteecException ;
    public List<UsuarioDto> actualizarListaUsuario(List<UsuarioDto> dtos)  throws SitteecException ;
    public HashMap <Integer,Integer> actualizarClaves(HashMap<Integer,Integer> claves) throws SitteecException ;
    public List<UsuarioDto> eliminarListaUsuario(List<UsuarioDto> dtos)  throws SitteecException ;
// busquedas por atributos inicio
public UsuarioDto getUsuarioById(Integer id) throws SitteecException ;
public List<UsuarioDto> getUsuariosById(Integer id) throws SitteecException ;
public UsuarioDto getUsuarioByPassword(String password) throws SitteecException ;
public List<UsuarioDto> getUsuariosByPassword(String password) throws SitteecException ;
public UsuarioDto getUsuarioByUsername(String username) throws SitteecException ;
public List<UsuarioDto> getUsuariosByUsername(String username) throws SitteecException ;
public UsuarioDto getUsuarioByStatus(java.lang.Integer status) throws SitteecException ;
public List<UsuarioDto> getUsuariosByStatus(java.lang.Integer status) throws SitteecException ;
public UsuarioDto getUsuarioByUsuarioUltMov(UsuarioDto usuarioUltMov) throws SitteecException ;
public List<UsuarioDto> getUsuariosByUsuarioUltMov(UsuarioDto usuarioUltMov) throws SitteecException ;

public UsuarioDto getUsuarioByPerfil(PerfilDto perfil) throws SitteecException ;
public List<UsuarioDto> getUsuariosByPerfil(PerfilDto perfil) throws SitteecException ;
public UsuarioDto getUsuarioByCorreoElectronico(String correoElectronico) throws SitteecException ;
public List<UsuarioDto> getUsuariosByCorreoElectronico(String correoElectronico) throws SitteecException ;
// busquedas por atributos fin

public UsuarioDto lazyInjection (UsuarioDto dto ) throws SitteecException ;

public UsuarioDto lazyInjectionObjetos (UsuarioDto dto ) throws SitteecException ;

public UsuarioDto lazyInjectionConjuntos (UsuarioDto dto ) throws SitteecException ;

public UsuarioDto lazyInjectionEntidadObjetos (Usuario PEentidad, UsuarioDto salida ) throws SitteecException ;

public UsuarioDto lazyInjectionEntidadConjuntos (Usuario PEentidad, UsuarioDto salida ) throws SitteecException ;

public UsuarioDto lazyInjectionEntidadObjetosDto (UsuarioDto PEentidad, UsuarioDto salida ) throws SitteecException ;

public UsuarioDto lazyInjectionEntidadConjuntosDto (UsuarioDto PEentidad, UsuarioDto salida ) throws SitteecException ;

public UsuarioDto lazyInjectionEntidad (Usuario PEentidad ) throws SitteecException ;


    public List<UsuarioDto> custom(String consulta) throws SitteecException ;
    public List<UsuarioDto> getUsuariosByDto(UsuarioDto p_usuario) throws SitteecException ;
    
    public List<UsuarioDto> login(UsuarioDto p_usuario) throws SitteecException ;

    public  boolean recuperarContrasena(UsuarioDto p_usuario );
}
