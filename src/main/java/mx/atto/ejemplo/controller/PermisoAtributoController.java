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
import mx.atto.ejemplo.service.IPermisoAtributoService;
import org.springframework.stereotype.Service;

/**
 *
 * @author IstmoSoft
 */
@RestController
@RequestMapping("/permisoAtributo")
public class PermisoAtributoController {

    private Logger log = Logger.getLogger(PermisoAtributoController.class);

    @Autowired
    private IPermisoAtributoService permisoAtributoService;

    @RequestMapping(value = "guardarPermisoAtributo", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoAtributoDto guardarPermisoAtributo(@RequestBody @Valid PermisoAtributoDto dto) throws SitteecException{
        return permisoAtributoService.guardarPermisoAtributo(dto);
    }

    @RequestMapping(value = "guardarListaPermisoAtributo", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<PermisoAtributoDto> guardarListaPermisoAtributo(@RequestBody @Valid List<PermisoAtributoDto> dtos) throws SitteecException {
        return permisoAtributoService.guardarListaPermisoAtributo(dtos);
    }

    @RequestMapping(value = "actualizarPermisoAtributo", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  boolean actualizarPermisoAtributo(@RequestBody @Valid PermisoAtributoDto dto) throws SitteecException {
        return permisoAtributoService.actualizarPermisoAtributo(dto);
    }
    
    @RequestMapping(value = "actualizarListaPermisoAtributo", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<PermisoAtributoDto> actualizarListaPermisoAtributo(@RequestBody @Valid List<PermisoAtributoDto> dtos) throws SitteecException { 
        return permisoAtributoService.actualizarListaPermisoAtributo(dtos);
    }

    @RequestMapping(value = "actualizarClaves", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public HashMap <Integer,Integer> actualizarClaves(@RequestBody @Valid HashMap<Integer,Integer> claves) throws SitteecException{
        return permisoAtributoService.actualizarClaves(claves);
    }    

    @RequestMapping(value = "eliminarPermisoAtributo", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  boolean eliminarPermisoAtributo(@RequestBody @Valid PermisoAtributoDto dto) throws SitteecException {
        return permisoAtributoService.eliminarPermisoAtributo(dto);
    }
    
    @RequestMapping(value = "eliminarListaPermisoAtributo", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<PermisoAtributoDto> eliminarListaPermisoAtributo(@RequestBody @Valid List<PermisoAtributoDto> dtos) throws SitteecException { 
        return permisoAtributoService.eliminarListaPermisoAtributo(dtos);
    }    
    @RequestMapping(value = "getPermisoAtributo", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoAtributoDto getPermisoAtributo(@RequestBody @Valid Integer id) throws SitteecException {
        return permisoAtributoService.getPermisoAtributo(id);
    }

    @RequestMapping(value = "getPermisoAtributos", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public   List<PermisoAtributoDto> getPermisoAtributos() throws SitteecException {
        return permisoAtributoService.getPermisoAtributos();
    }

    @RequestMapping(value = "getPermisoAtributosActivos", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public   List<PermisoAtributoDto> getPermisoAtributosActivos() throws SitteecException, NoSuchFieldException, SecurityException {
    //    try {
            if (PermisoAtributoDto.class.getDeclaredField("status")!= null) {
                return permisoAtributoService.custom("select ta from PermisoAtributo as ta where ta.status <> 0");
            }
     //   }  catch (NoSuchFieldException ex) {
  //      } catch (SecurityException ex) {
  //      }
        return permisoAtributoService.getPermisoAtributos();
    }

    @RequestMapping(value = "lazyPermisoAtributo", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoAtributoDto lazyPermisoAtributo(@RequestBody @Valid PermisoAtributoDto dto) throws SitteecException{
        return permisoAtributoService.lazyInjection(dto) ;
    }

    @RequestMapping(value = "lazyPermisoAtributoObjetos", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoAtributoDto lazyPermisoAtributoObjetos(@RequestBody @Valid PermisoAtributoDto dto) throws SitteecException{
        return permisoAtributoService.lazyInjectionObjetos(dto) ;
    }

    @RequestMapping(value = "lazyPermisoAtributoConjuntos", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoAtributoDto lazyPermisoAtributoConjuntos(@RequestBody @Valid PermisoAtributoDto dto) throws SitteecException{
        return permisoAtributoService.lazyInjectionConjuntos(dto) ;
    }

// busquedas por atributos  inicio
    @RequestMapping(value = "getPermisoAtributoById", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoAtributoDto getPermisoAtributoById(@RequestBody @Valid Integer id) throws SitteecException  {
        return permisoAtributoService.getPermisoAtributoById(id);
    }
    @RequestMapping(value = "getPermisoAtributosById", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PermisoAtributoDto> getPermisoAtributosById(@RequestBody @Valid Integer id) throws SitteecException {
        return permisoAtributoService.getPermisoAtributosById(id);
    }
    @RequestMapping(value = "getPermisoAtributoByEtiqueta", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoAtributoDto getPermisoAtributoByEtiqueta(@RequestBody @Valid String etiqueta) throws SitteecException {
        return permisoAtributoService.getPermisoAtributoByEtiqueta(etiqueta);
    }
    @RequestMapping(value = "getPermisoAtributosByEtiqueta", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PermisoAtributoDto> getPermisoAtributosByEtiqueta(@RequestBody @Valid String etiqueta) throws SitteecException {
        return permisoAtributoService.getPermisoAtributosByEtiqueta(etiqueta);
    }
    @RequestMapping(value = "getPermisoAtributoByValidacion", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoAtributoDto getPermisoAtributoByValidacion(@RequestBody @Valid String validacion) throws SitteecException {
        return permisoAtributoService.getPermisoAtributoByValidacion(validacion);
    }
    @RequestMapping(value = "getPermisoAtributosByValidacion", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PermisoAtributoDto> getPermisoAtributosByValidacion(@RequestBody @Valid String validacion) throws SitteecException {
        return permisoAtributoService.getPermisoAtributosByValidacion(validacion);
    }
    @RequestMapping(value = "getPermisoAtributoByPermiso", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoAtributoDto getPermisoAtributoByPermiso(@RequestBody @Valid java.lang.Integer permiso) throws SitteecException {
        return permisoAtributoService.getPermisoAtributoByPermiso(permiso);
    }
    @RequestMapping(value = "getPermisoAtributosByPermiso", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PermisoAtributoDto> getPermisoAtributosByPermiso(@RequestBody @Valid java.lang.Integer permiso) throws SitteecException {
        return permisoAtributoService.getPermisoAtributosByPermiso(permiso);
    }
    @RequestMapping(value = "getPermisoAtributoByTabla", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoAtributoDto getPermisoAtributoByTabla(@RequestBody @Valid String tabla) throws SitteecException {
        return permisoAtributoService.getPermisoAtributoByTabla(tabla);
    }
    @RequestMapping(value = "getPermisoAtributosByTabla", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PermisoAtributoDto> getPermisoAtributosByTabla(@RequestBody @Valid String tabla) throws SitteecException {
        return permisoAtributoService.getPermisoAtributosByTabla(tabla);
    }
    @RequestMapping(value = "getPermisoAtributoByAtributo", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoAtributoDto getPermisoAtributoByAtributo(@RequestBody @Valid String atributo) throws SitteecException {
        return permisoAtributoService.getPermisoAtributoByAtributo(atributo);
    }
    @RequestMapping(value = "getPermisoAtributosByAtributo", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PermisoAtributoDto> getPermisoAtributosByAtributo(@RequestBody @Valid String atributo) throws SitteecException {
        return permisoAtributoService.getPermisoAtributosByAtributo(atributo);
    }
    @RequestMapping(value = "getPermisoAtributoByMensaje", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoAtributoDto getPermisoAtributoByMensaje(@RequestBody @Valid String mensaje) throws SitteecException {
        return permisoAtributoService.getPermisoAtributoByMensaje(mensaje);
    }
    @RequestMapping(value = "getPermisoAtributosByMensaje", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PermisoAtributoDto> getPermisoAtributosByMensaje(@RequestBody @Valid String mensaje) throws SitteecException {
        return permisoAtributoService.getPermisoAtributosByMensaje(mensaje);
    }
    @RequestMapping(value = "getPermisoAtributoByStatus", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoAtributoDto getPermisoAtributoByStatus(@RequestBody @Valid java.lang.Integer status) throws SitteecException {
        return permisoAtributoService.getPermisoAtributoByStatus(status);
    }
    @RequestMapping(value = "getPermisoAtributosByStatus", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PermisoAtributoDto> getPermisoAtributosByStatus(@RequestBody @Valid java.lang.Integer status) throws SitteecException {
        return permisoAtributoService.getPermisoAtributosByStatus(status);
    }
    @RequestMapping(value = "getPermisoAtributoByUsuarioUltMov", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoAtributoDto getPermisoAtributoByUsuarioUltMov(@RequestBody @Valid UsuarioDto usuarioUltMov) throws SitteecException {
        return permisoAtributoService.getPermisoAtributoByUsuarioUltMov(usuarioUltMov);
    }
    @RequestMapping(value = "getPermisoAtributosByUsuarioUltMov", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PermisoAtributoDto> getPermisoAtributosByUsuarioUltMov(@RequestBody @Valid UsuarioDto usuarioUltMov) throws SitteecException {
        return permisoAtributoService.getPermisoAtributosByUsuarioUltMov(usuarioUltMov);
    }
    @RequestMapping(value = "getPermisoAtributoByUsuario", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoAtributoDto getPermisoAtributoByUsuario(@RequestBody @Valid UsuarioDto usuario) throws SitteecException {
        return permisoAtributoService.getPermisoAtributoByUsuario(usuario);
    }
    @RequestMapping(value = "getPermisoAtributosByUsuario", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PermisoAtributoDto> getPermisoAtributosByUsuario(@RequestBody @Valid UsuarioDto usuario) throws SitteecException {
        return permisoAtributoService.getPermisoAtributosByUsuario(usuario);
    }
// busquedas por atributos  fin
//   add - remove Perfil
    @RequestMapping(value = "getPerfiles", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public List <PerfilDto>  getPerfiles(@RequestBody @Valid PermisoAtributoDto permisoAtributo)throws Exception {
         return permisoAtributoService.getPerfiles(permisoAtributo);
    } 
    @RequestMapping(value = "addPerfiles", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PerfilDto  addPerfiles(@RequestBody @Valid PermisoAtributoPerfilDto permisoAtributoPerfil)throws Exception{
         return permisoAtributoService.addPerfiles(permisoAtributoPerfil.getPermisoAtributo(), permisoAtributoPerfil.getPerfil());
    }

    @RequestMapping(value = "removePerfiles", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PerfilDto removePerfiles(@RequestBody @Valid PermisoAtributoPerfilDto permisoAtributoPerfil)throws Exception{
         return permisoAtributoService.removePerfiles(permisoAtributoPerfil.getPermisoAtributo(), permisoAtributoPerfil.getPerfil());
    }


    @RequestMapping(value = "custom", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PermisoAtributoDto> custom(@RequestBody @Valid String consulta) throws SitteecException {
        return permisoAtributoService.custom(consulta);
    }

    @RequestMapping(value = "getPermisoAtributosByDto", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PermisoAtributoDto> getPermisoAtributosByDto(@RequestBody @Valid PermisoAtributoDto p_permisoAtributo ) throws SitteecException {
        return permisoAtributoService.getPermisoAtributosByDto(p_permisoAtributo);
    }

}
