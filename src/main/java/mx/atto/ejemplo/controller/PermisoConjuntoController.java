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
import mx.atto.ejemplo.service.IPermisoConjuntoService;
import org.springframework.stereotype.Service;

/**
 *
 * @author IstmoSoft
 */
@RestController
@RequestMapping("/permisoConjunto")
public class PermisoConjuntoController {

    private Logger log = Logger.getLogger(PermisoConjuntoController.class);

    @Autowired
    private IPermisoConjuntoService permisoConjuntoService;

    @RequestMapping(value = "guardarPermisoConjunto", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoConjuntoDto guardarPermisoConjunto(@RequestBody @Valid PermisoConjuntoDto dto) throws SitteecException{
        return permisoConjuntoService.guardarPermisoConjunto(dto);
    }

    @RequestMapping(value = "guardarListaPermisoConjunto", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<PermisoConjuntoDto> guardarListaPermisoConjunto(@RequestBody @Valid List<PermisoConjuntoDto> dtos) throws SitteecException {
        return permisoConjuntoService.guardarListaPermisoConjunto(dtos);
    }

    @RequestMapping(value = "actualizarPermisoConjunto", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  boolean actualizarPermisoConjunto(@RequestBody @Valid PermisoConjuntoDto dto) throws SitteecException {
        return permisoConjuntoService.actualizarPermisoConjunto(dto);
    }
    
    @RequestMapping(value = "actualizarListaPermisoConjunto", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<PermisoConjuntoDto> actualizarListaPermisoConjunto(@RequestBody @Valid List<PermisoConjuntoDto> dtos) throws SitteecException { 
        return permisoConjuntoService.actualizarListaPermisoConjunto(dtos);
    }

    @RequestMapping(value = "actualizarClaves", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public HashMap <Integer,Integer> actualizarClaves(@RequestBody @Valid HashMap<Integer,Integer> claves) throws SitteecException{
        return permisoConjuntoService.actualizarClaves(claves);
    }    

    @RequestMapping(value = "eliminarPermisoConjunto", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  boolean eliminarPermisoConjunto(@RequestBody @Valid PermisoConjuntoDto dto) throws SitteecException {
        return permisoConjuntoService.eliminarPermisoConjunto(dto);
    }
    
    @RequestMapping(value = "eliminarListaPermisoConjunto", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<PermisoConjuntoDto> eliminarListaPermisoConjunto(@RequestBody @Valid List<PermisoConjuntoDto> dtos) throws SitteecException { 
        return permisoConjuntoService.eliminarListaPermisoConjunto(dtos);
    }    
    @RequestMapping(value = "getPermisoConjunto", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoConjuntoDto getPermisoConjunto(@RequestBody @Valid Integer id) throws SitteecException {
        return permisoConjuntoService.getPermisoConjunto(id);
    }

    @RequestMapping(value = "getPermisoConjuntos", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public   List<PermisoConjuntoDto> getPermisoConjuntos() throws SitteecException {
        return permisoConjuntoService.getPermisoConjuntos();
    }

    @RequestMapping(value = "getPermisoConjuntosActivos", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public   List<PermisoConjuntoDto> getPermisoConjuntosActivos() throws SitteecException, NoSuchFieldException, SecurityException {
    //    try {
            if (PermisoConjuntoDto.class.getDeclaredField("status")!= null) {
                return permisoConjuntoService.custom("select ta from PermisoConjunto as ta where ta.status <> 0");
            }
     //   }  catch (NoSuchFieldException ex) {
  //      } catch (SecurityException ex) {
  //      }
        return permisoConjuntoService.getPermisoConjuntos();
    }

    @RequestMapping(value = "lazyPermisoConjunto", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoConjuntoDto lazyPermisoConjunto(@RequestBody @Valid PermisoConjuntoDto dto) throws SitteecException{
        return permisoConjuntoService.lazyInjection(dto) ;
    }

    @RequestMapping(value = "lazyPermisoConjuntoObjetos", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoConjuntoDto lazyPermisoConjuntoObjetos(@RequestBody @Valid PermisoConjuntoDto dto) throws SitteecException{
        return permisoConjuntoService.lazyInjectionObjetos(dto) ;
    }

    @RequestMapping(value = "lazyPermisoConjuntoConjuntos", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoConjuntoDto lazyPermisoConjuntoConjuntos(@RequestBody @Valid PermisoConjuntoDto dto) throws SitteecException{
        return permisoConjuntoService.lazyInjectionConjuntos(dto) ;
    }

// busquedas por atributos  inicio
    @RequestMapping(value = "getPermisoConjuntoById", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoConjuntoDto getPermisoConjuntoById(@RequestBody @Valid Integer id) throws SitteecException  {
        return permisoConjuntoService.getPermisoConjuntoById(id);
    }
    @RequestMapping(value = "getPermisoConjuntosById", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PermisoConjuntoDto> getPermisoConjuntosById(@RequestBody @Valid Integer id) throws SitteecException {
        return permisoConjuntoService.getPermisoConjuntosById(id);
    }
    @RequestMapping(value = "getPermisoConjuntoByEtiqueta", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoConjuntoDto getPermisoConjuntoByEtiqueta(@RequestBody @Valid String etiqueta) throws SitteecException {
        return permisoConjuntoService.getPermisoConjuntoByEtiqueta(etiqueta);
    }
    @RequestMapping(value = "getPermisoConjuntosByEtiqueta", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PermisoConjuntoDto> getPermisoConjuntosByEtiqueta(@RequestBody @Valid String etiqueta) throws SitteecException {
        return permisoConjuntoService.getPermisoConjuntosByEtiqueta(etiqueta);
    }
    @RequestMapping(value = "getPermisoConjuntoByPermiso", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoConjuntoDto getPermisoConjuntoByPermiso(@RequestBody @Valid java.lang.Integer permiso) throws SitteecException {
        return permisoConjuntoService.getPermisoConjuntoByPermiso(permiso);
    }
    @RequestMapping(value = "getPermisoConjuntosByPermiso", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PermisoConjuntoDto> getPermisoConjuntosByPermiso(@RequestBody @Valid java.lang.Integer permiso) throws SitteecException {
        return permisoConjuntoService.getPermisoConjuntosByPermiso(permiso);
    }
    @RequestMapping(value = "getPermisoConjuntoByTabla", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoConjuntoDto getPermisoConjuntoByTabla(@RequestBody @Valid String tabla) throws SitteecException {
        return permisoConjuntoService.getPermisoConjuntoByTabla(tabla);
    }
    @RequestMapping(value = "getPermisoConjuntosByTabla", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PermisoConjuntoDto> getPermisoConjuntosByTabla(@RequestBody @Valid String tabla) throws SitteecException {
        return permisoConjuntoService.getPermisoConjuntosByTabla(tabla);
    }
    @RequestMapping(value = "getPermisoConjuntoByConjunto", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoConjuntoDto getPermisoConjuntoByConjunto(@RequestBody @Valid String conjunto) throws SitteecException {
        return permisoConjuntoService.getPermisoConjuntoByConjunto(conjunto);
    }
    @RequestMapping(value = "getPermisoConjuntosByConjunto", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PermisoConjuntoDto> getPermisoConjuntosByConjunto(@RequestBody @Valid String conjunto) throws SitteecException {
        return permisoConjuntoService.getPermisoConjuntosByConjunto(conjunto);
    }
    @RequestMapping(value = "getPermisoConjuntoByStatus", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoConjuntoDto getPermisoConjuntoByStatus(@RequestBody @Valid java.lang.Integer status) throws SitteecException {
        return permisoConjuntoService.getPermisoConjuntoByStatus(status);
    }
    @RequestMapping(value = "getPermisoConjuntosByStatus", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PermisoConjuntoDto> getPermisoConjuntosByStatus(@RequestBody @Valid java.lang.Integer status) throws SitteecException {
        return permisoConjuntoService.getPermisoConjuntosByStatus(status);
    }
    @RequestMapping(value = "getPermisoConjuntoByUsuarioUltMov", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoConjuntoDto getPermisoConjuntoByUsuarioUltMov(@RequestBody @Valid UsuarioDto usuarioUltMov) throws SitteecException {
        return permisoConjuntoService.getPermisoConjuntoByUsuarioUltMov(usuarioUltMov);
    }
    @RequestMapping(value = "getPermisoConjuntosByUsuarioUltMov", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PermisoConjuntoDto> getPermisoConjuntosByUsuarioUltMov(@RequestBody @Valid UsuarioDto usuarioUltMov) throws SitteecException {
        return permisoConjuntoService.getPermisoConjuntosByUsuarioUltMov(usuarioUltMov);
    }
    @RequestMapping(value = "getPermisoConjuntoByUsuario", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoConjuntoDto getPermisoConjuntoByUsuario(@RequestBody @Valid UsuarioDto usuario) throws SitteecException {
        return permisoConjuntoService.getPermisoConjuntoByUsuario(usuario);
    }
    @RequestMapping(value = "getPermisoConjuntosByUsuario", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PermisoConjuntoDto> getPermisoConjuntosByUsuario(@RequestBody @Valid UsuarioDto usuario) throws SitteecException {
        return permisoConjuntoService.getPermisoConjuntosByUsuario(usuario);
    }
// busquedas por atributos  fin
//   add - remove Perfil
    @RequestMapping(value = "getPerfiles", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public List <PerfilDto>  getPerfiles(@RequestBody @Valid PermisoConjuntoDto permisoConjunto)throws Exception {
         return permisoConjuntoService.getPerfiles(permisoConjunto);
    } 
    @RequestMapping(value = "addPerfiles", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PerfilDto  addPerfiles(@RequestBody @Valid PermisoConjuntoPerfilDto permisoConjuntoPerfil)throws Exception{
         return permisoConjuntoService.addPerfiles(permisoConjuntoPerfil.getPermisoConjunto(), permisoConjuntoPerfil.getPerfil());
    }

    @RequestMapping(value = "removePerfiles", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PerfilDto removePerfiles(@RequestBody @Valid PermisoConjuntoPerfilDto permisoConjuntoPerfil)throws Exception{
         return permisoConjuntoService.removePerfiles(permisoConjuntoPerfil.getPermisoConjunto(), permisoConjuntoPerfil.getPerfil());
    }


    @RequestMapping(value = "custom", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PermisoConjuntoDto> custom(@RequestBody @Valid String consulta) throws SitteecException {
        return permisoConjuntoService.custom(consulta);
    }

    @RequestMapping(value = "getPermisoConjuntosByDto", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PermisoConjuntoDto> getPermisoConjuntosByDto(@RequestBody @Valid PermisoConjuntoDto p_permisoConjunto ) throws SitteecException {
        return permisoConjuntoService.getPermisoConjuntosByDto(p_permisoConjunto);
    }

}
