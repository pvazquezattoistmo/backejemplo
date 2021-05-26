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
import mx.atto.ejemplo.service.IPerfilService;
import org.springframework.stereotype.Service;

/**
 *
 * @author IstmoSoft
 */
@RestController
@RequestMapping("/perfil")
public class PerfilController {

    private Logger log = Logger.getLogger(PerfilController.class);

    @Autowired
    private IPerfilService perfilService;

    @RequestMapping(value = "guardarPerfil", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PerfilDto guardarPerfil(@RequestBody @Valid PerfilDto dto) throws SitteecException{
        return perfilService.guardarPerfil(dto);
    }

    @RequestMapping(value = "guardarListaPerfil", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<PerfilDto> guardarListaPerfil(@RequestBody @Valid List<PerfilDto> dtos) throws SitteecException {
        return perfilService.guardarListaPerfil(dtos);
    }

    @RequestMapping(value = "actualizarPerfil", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  boolean actualizarPerfil(@RequestBody @Valid PerfilDto dto) throws SitteecException {
        return perfilService.actualizarPerfil(dto);
    }
    
    @RequestMapping(value = "actualizarListaPerfil", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<PerfilDto> actualizarListaPerfil(@RequestBody @Valid List<PerfilDto> dtos) throws SitteecException { 
        return perfilService.actualizarListaPerfil(dtos);
    }

    @RequestMapping(value = "actualizarClaves", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public HashMap <Integer,Integer> actualizarClaves(@RequestBody @Valid HashMap<Integer,Integer> claves) throws SitteecException{
        return perfilService.actualizarClaves(claves);
    }    

    @RequestMapping(value = "eliminarPerfil", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  boolean eliminarPerfil(@RequestBody @Valid PerfilDto dto) throws SitteecException {
        return perfilService.eliminarPerfil(dto);
    }
    
    @RequestMapping(value = "eliminarListaPerfil", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<PerfilDto> eliminarListaPerfil(@RequestBody @Valid List<PerfilDto> dtos) throws SitteecException { 
        return perfilService.eliminarListaPerfil(dtos);
    }    
    @RequestMapping(value = "getPerfil", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PerfilDto getPerfil(@RequestBody @Valid Integer id) throws SitteecException {
        return perfilService.getPerfil(id);
    }

    @RequestMapping(value = "getPerfiles", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public   List<PerfilDto> getPerfiles() throws SitteecException {
        return perfilService.getPerfiles();
    }

    @RequestMapping(value = "getPerfilesActivos", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public   List<PerfilDto> getPerfilesActivos() throws SitteecException, NoSuchFieldException, SecurityException {
    //    try {
            if (PerfilDto.class.getDeclaredField("status")!= null) {
                return perfilService.custom("select ta from Perfil as ta where ta.status <> 0");
            }
     //   }  catch (NoSuchFieldException ex) {
  //      } catch (SecurityException ex) {
  //      }
        return perfilService.getPerfiles();
    }

    @RequestMapping(value = "lazyPerfil", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PerfilDto lazyPerfil(@RequestBody @Valid PerfilDto dto) throws SitteecException{
        return perfilService.lazyInjection(dto) ;
    }

    @RequestMapping(value = "lazyPerfilObjetos", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PerfilDto lazyPerfilObjetos(@RequestBody @Valid PerfilDto dto) throws SitteecException{
        return perfilService.lazyInjectionObjetos(dto) ;
    }

    @RequestMapping(value = "lazyPerfilConjuntos", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PerfilDto lazyPerfilConjuntos(@RequestBody @Valid PerfilDto dto) throws SitteecException{
        return perfilService.lazyInjectionConjuntos(dto) ;
    }

// busquedas por atributos  inicio
    @RequestMapping(value = "getPerfilById", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PerfilDto getPerfilById(@RequestBody @Valid Integer id) throws SitteecException  {
        return perfilService.getPerfilById(id);
    }
    @RequestMapping(value = "getPerfilesById", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PerfilDto> getPerfilesById(@RequestBody @Valid Integer id) throws SitteecException {
        return perfilService.getPerfilesById(id);
    }
    @RequestMapping(value = "getPerfilByDescripcion", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PerfilDto getPerfilByDescripcion(@RequestBody @Valid String descripcion) throws SitteecException {
        return perfilService.getPerfilByDescripcion(descripcion);
    }
    @RequestMapping(value = "getPerfilesByDescripcion", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PerfilDto> getPerfilesByDescripcion(@RequestBody @Valid String descripcion) throws SitteecException {
        return perfilService.getPerfilesByDescripcion(descripcion);
    }
    @RequestMapping(value = "getPerfilByRuta", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PerfilDto getPerfilByRuta(@RequestBody @Valid String ruta) throws SitteecException {
        return perfilService.getPerfilByRuta(ruta);
    }
    @RequestMapping(value = "getPerfilesByRuta", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PerfilDto> getPerfilesByRuta(@RequestBody @Valid String ruta) throws SitteecException {
        return perfilService.getPerfilesByRuta(ruta);
    }
    @RequestMapping(value = "getPerfilByNombre", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PerfilDto getPerfilByNombre(@RequestBody @Valid String nombre) throws SitteecException {
        return perfilService.getPerfilByNombre(nombre);
    }
    @RequestMapping(value = "getPerfilesByNombre", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PerfilDto> getPerfilesByNombre(@RequestBody @Valid String nombre) throws SitteecException {
        return perfilService.getPerfilesByNombre(nombre);
    }
    @RequestMapping(value = "getPerfilByStatus", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PerfilDto getPerfilByStatus(@RequestBody @Valid java.lang.Integer status) throws SitteecException {
        return perfilService.getPerfilByStatus(status);
    }
    @RequestMapping(value = "getPerfilesByStatus", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PerfilDto> getPerfilesByStatus(@RequestBody @Valid java.lang.Integer status) throws SitteecException {
        return perfilService.getPerfilesByStatus(status);
    }
    @RequestMapping(value = "getPerfilByUsuarioUltMov", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PerfilDto getPerfilByUsuarioUltMov(@RequestBody @Valid UsuarioDto usuarioUltMov) throws SitteecException {
        return perfilService.getPerfilByUsuarioUltMov(usuarioUltMov);
    }
    @RequestMapping(value = "getPerfilesByUsuarioUltMov", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PerfilDto> getPerfilesByUsuarioUltMov(@RequestBody @Valid UsuarioDto usuarioUltMov) throws SitteecException {
        return perfilService.getPerfilesByUsuarioUltMov(usuarioUltMov);
    }
    @RequestMapping(value = "getPerfilByUsuario", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PerfilDto getPerfilByUsuario(@RequestBody @Valid UsuarioDto usuario) throws SitteecException {
        return perfilService.getPerfilByUsuario(usuario);
    }
    @RequestMapping(value = "getPerfilesByUsuario", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PerfilDto> getPerfilesByUsuario(@RequestBody @Valid UsuarioDto usuario) throws SitteecException {
        return perfilService.getPerfilesByUsuario(usuario);
    }
// busquedas por atributos  fin

    @RequestMapping(value = "custom", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PerfilDto> custom(@RequestBody @Valid String consulta) throws SitteecException {
        return perfilService.custom(consulta);
    }

    @RequestMapping(value = "getPerfilesByDto", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PerfilDto> getPerfilesByDto(@RequestBody @Valid PerfilDto p_perfil ) throws SitteecException {
        return perfilService.getPerfilesByDto(p_perfil);
    }

}
