package mx.atto.ejemplo.controller;
import mx.atto.ejemplo.exception.SitteecException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.util.Date;
import java.util.HashMap;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import org.apache.log4j.Logger;
import org.modelmapper.ModelMapper;
import javax.validation.Valid;
import mx.atto.ejemplo.dao.*;
import mx.atto.ejemplo.dto.*;
import mx.atto.ejemplo.service.IUsuarioService;
import org.springframework.stereotype.Service;

/**
 *
 * @author IstmoSoft
 */
@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    private Logger log = Logger.getLogger(UsuarioController.class);

    @Autowired
    private IUsuarioService usuarioService;

    @RequestMapping(value = "guardarUsuario", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  UsuarioDto guardarUsuario(@RequestBody @Valid UsuarioDto dto) throws SitteecException{
        return usuarioService.guardarUsuario(dto);
    }

    @RequestMapping(value = "guardarListaUsuario", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<UsuarioDto> guardarListaUsuario(@RequestBody @Valid List<UsuarioDto> dtos) throws SitteecException {
        return usuarioService.guardarListaUsuario(dtos);
    }

    @RequestMapping(value = "actualizarUsuario", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  boolean actualizarUsuario(@RequestBody @Valid UsuarioDto dto) throws SitteecException {
        return usuarioService.actualizarUsuario(dto);
    }
    
    @RequestMapping(value = "actualizarListaUsuario", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<UsuarioDto> actualizarListaUsuario(@RequestBody @Valid List<UsuarioDto> dtos) throws SitteecException { 
        return usuarioService.actualizarListaUsuario(dtos);
    }

    @RequestMapping(value = "actualizarClaves", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public HashMap <Integer,Integer> actualizarClaves(@RequestBody @Valid HashMap<Integer,Integer> claves) throws SitteecException{
        return usuarioService.actualizarClaves(claves);
    }    

    @RequestMapping(value = "eliminarUsuario", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  boolean eliminarUsuario(@RequestBody @Valid UsuarioDto dto) throws SitteecException {
        return usuarioService.eliminarUsuario(dto);
    }
    
    @RequestMapping(value = "eliminarListaUsuario", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<UsuarioDto> eliminarListaUsuario(@RequestBody @Valid List<UsuarioDto> dtos) throws SitteecException { 
        return usuarioService.eliminarListaUsuario(dtos);
    }    
    @RequestMapping(value = "getUsuario", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  UsuarioDto getUsuario(@RequestBody @Valid Integer id) throws SitteecException {
        return usuarioService.getUsuario(id);
    }

    @RequestMapping(value = "getUsuarios", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public   List<UsuarioDto> getUsuarios() throws SitteecException {
        return usuarioService.getUsuarios();
    }

    @RequestMapping(value = "getUsuariosActivos", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public   List<UsuarioDto> getUsuariosActivos() throws SitteecException, NoSuchFieldException, SecurityException {
    //    try {
            if (UsuarioDto.class.getDeclaredField("status")!= null) {
                return usuarioService.custom("select ta from Usuario as ta where ta.status <> 0");
            }
     //   }  catch (NoSuchFieldException ex) {
  //      } catch (SecurityException ex) {
  //      }
        return usuarioService.getUsuarios();
    }

    @RequestMapping(value = "lazyUsuario", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  UsuarioDto lazyUsuario(@RequestBody @Valid UsuarioDto dto) throws SitteecException{
        return usuarioService.lazyInjection(dto) ;
    }

    @RequestMapping(value = "lazyUsuarioObjetos", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  UsuarioDto lazyUsuarioObjetos(@RequestBody @Valid UsuarioDto dto) throws SitteecException{
        return usuarioService.lazyInjectionObjetos(dto) ;
    }

    @RequestMapping(value = "lazyUsuarioConjuntos", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  UsuarioDto lazyUsuarioConjuntos(@RequestBody @Valid UsuarioDto dto) throws SitteecException{
        return usuarioService.lazyInjectionConjuntos(dto) ;
    }

// busquedas por atributos  inicio
    @RequestMapping(value = "getUsuarioById", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  UsuarioDto getUsuarioById(@RequestBody @Valid Integer id) throws SitteecException  {
        return usuarioService.getUsuarioById(id);
    }
    @RequestMapping(value = "getUsuariosById", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<UsuarioDto> getUsuariosById(@RequestBody @Valid Integer id) throws SitteecException {
        return usuarioService.getUsuariosById(id);
    }
    @RequestMapping(value = "getUsuarioByPassword", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  UsuarioDto getUsuarioByPassword(@RequestBody @Valid String password) throws SitteecException {
        return usuarioService.getUsuarioByPassword(password);
    }
    @RequestMapping(value = "getUsuariosByPassword", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<UsuarioDto> getUsuariosByPassword(@RequestBody @Valid String password) throws SitteecException {
        return usuarioService.getUsuariosByPassword(password);
    }
    @RequestMapping(value = "getUsuarioByUsername", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  UsuarioDto getUsuarioByUsername(@RequestBody @Valid String username) throws SitteecException {
        return usuarioService.getUsuarioByUsername(username);
    }
    @RequestMapping(value = "getUsuariosByUsername", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<UsuarioDto> getUsuariosByUsername(@RequestBody @Valid String username) throws SitteecException {
        return usuarioService.getUsuariosByUsername(username);
    }
    @RequestMapping(value = "getUsuarioByStatus", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  UsuarioDto getUsuarioByStatus(@RequestBody @Valid java.lang.Integer status) throws SitteecException {
        return usuarioService.getUsuarioByStatus(status);
    }
    @RequestMapping(value = "getUsuariosByStatus", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<UsuarioDto> getUsuariosByStatus(@RequestBody @Valid java.lang.Integer status) throws SitteecException {
        return usuarioService.getUsuariosByStatus(status);
    }
    @RequestMapping(value = "getUsuarioByUsuarioUltMov", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  UsuarioDto getUsuarioByUsuarioUltMov(@RequestBody @Valid UsuarioDto usuarioUltMov) throws SitteecException {
        return usuarioService.getUsuarioByUsuarioUltMov(usuarioUltMov);
    }
    @RequestMapping(value = "getUsuariosByUsuarioUltMov", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<UsuarioDto> getUsuariosByUsuarioUltMov(@RequestBody @Valid UsuarioDto usuarioUltMov) throws SitteecException {
        return usuarioService.getUsuariosByUsuarioUltMov(usuarioUltMov);
    }

    @RequestMapping(value = "getUsuarioByPerfil", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  UsuarioDto getUsuarioByPerfil(@RequestBody @Valid PerfilDto perfil) throws SitteecException {
        return usuarioService.getUsuarioByPerfil(perfil);
    }
    @RequestMapping(value = "getUsuariosByPerfil", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<UsuarioDto> getUsuariosByPerfil(@RequestBody @Valid PerfilDto perfil) throws SitteecException {
        return usuarioService.getUsuariosByPerfil(perfil);
    }
    @RequestMapping(value = "getUsuarioByCorreoElectronico", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  UsuarioDto getUsuarioByCorreoElectronico(@RequestBody @Valid String correoElectronico) throws SitteecException {
        return usuarioService.getUsuarioByCorreoElectronico(correoElectronico);
    }
    @RequestMapping(value = "getUsuariosByCorreoElectronico", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<UsuarioDto> getUsuariosByCorreoElectronico(@RequestBody @Valid String correoElectronico) throws SitteecException {
        return usuarioService.getUsuariosByCorreoElectronico(correoElectronico);
    }
// busquedas por atributos  fin

    @RequestMapping(value = "custom", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<UsuarioDto> custom(@RequestBody @Valid String consulta) throws SitteecException {
        return usuarioService.custom(consulta);
    }
    
    @RequestMapping(value = "getUsuariosByDto", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<UsuarioDto> getUsuariosByDto(@RequestBody @Valid UsuarioDto p_usuario ) throws SitteecException {
        List<UsuarioDto> usuariosByDto = usuarioService.getUsuariosByDto(p_usuario);
        return usuariosByDto;
    }
    
    @RequestMapping(value = "login", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<UsuarioDto> login(@RequestBody @Valid UsuarioDto p_usuario ) throws SitteecException {
        List<UsuarioDto> usuariosByDto = usuarioService.login(p_usuario);
        return usuariosByDto;
    }

        @RequestMapping(value = "recuperarContrasena", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  boolean recuperarContrasena(@RequestBody @Valid UsuarioDto p_usuario ) throws SitteecException {
        return usuarioService.recuperarContrasena(p_usuario);
    }
}
