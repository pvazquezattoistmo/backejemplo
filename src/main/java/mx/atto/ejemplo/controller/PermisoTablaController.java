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
import mx.atto.ejemplo.service.IPermisoTablaService;
import org.springframework.stereotype.Service;

/**
 *
 * @author IstmoSoft
 */
@RestController
@RequestMapping("/permisoTabla")
public class PermisoTablaController {

    private Logger log = Logger.getLogger(PermisoTablaController.class);

    @Autowired
    private IPermisoTablaService permisoTablaService;

    @RequestMapping(value = "guardarPermisoTabla", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoTablaDto guardarPermisoTabla(@RequestBody @Valid PermisoTablaDto dto) throws SitteecException{
        return permisoTablaService.guardarPermisoTabla(dto);
    }

    @RequestMapping(value = "guardarListaPermisoTabla", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<PermisoTablaDto> guardarListaPermisoTabla(@RequestBody @Valid List<PermisoTablaDto> dtos) throws SitteecException {
        return permisoTablaService.guardarListaPermisoTabla(dtos);
    }

    @RequestMapping(value = "actualizarPermisoTabla", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  boolean actualizarPermisoTabla(@RequestBody @Valid PermisoTablaDto dto) throws SitteecException {
        return permisoTablaService.actualizarPermisoTabla(dto);
    }
    
    @RequestMapping(value = "actualizarListaPermisoTabla", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<PermisoTablaDto> actualizarListaPermisoTabla(@RequestBody @Valid List<PermisoTablaDto> dtos) throws SitteecException { 
        return permisoTablaService.actualizarListaPermisoTabla(dtos);
    }

    @RequestMapping(value = "actualizarClaves", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public HashMap <Integer,Integer> actualizarClaves(@RequestBody @Valid HashMap<Integer,Integer> claves) throws SitteecException{
        return permisoTablaService.actualizarClaves(claves);
    }    

    @RequestMapping(value = "eliminarPermisoTabla", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  boolean eliminarPermisoTabla(@RequestBody @Valid PermisoTablaDto dto) throws SitteecException {
        return permisoTablaService.eliminarPermisoTabla(dto);
    }
    
    @RequestMapping(value = "eliminarListaPermisoTabla", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<PermisoTablaDto> eliminarListaPermisoTabla(@RequestBody @Valid List<PermisoTablaDto> dtos) throws SitteecException { 
        return permisoTablaService.eliminarListaPermisoTabla(dtos);
    }    
    @RequestMapping(value = "getPermisoTabla", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoTablaDto getPermisoTabla(@RequestBody @Valid Integer id) throws SitteecException {
        return permisoTablaService.getPermisoTabla(id);
    }

    @RequestMapping(value = "getPermisoTablas", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public   List<PermisoTablaDto> getPermisoTablas() throws SitteecException {
        return permisoTablaService.getPermisoTablas();
    }

    @RequestMapping(value = "getPermisoTablasActivos", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public   List<PermisoTablaDto> getPermisoTablasActivos() throws SitteecException, NoSuchFieldException, SecurityException {
    //    try {
            if (PermisoTablaDto.class.getDeclaredField("status")!= null) {
                return permisoTablaService.custom("select ta from PermisoTabla as ta where ta.status <> 0");
            }
     //   }  catch (NoSuchFieldException ex) {
  //      } catch (SecurityException ex) {
  //      }
        return permisoTablaService.getPermisoTablas();
    }

    @RequestMapping(value = "lazyPermisoTabla", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoTablaDto lazyPermisoTabla(@RequestBody @Valid PermisoTablaDto dto) throws SitteecException{
        return permisoTablaService.lazyInjection(dto) ;
    }

    @RequestMapping(value = "lazyPermisoTablaObjetos", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoTablaDto lazyPermisoTablaObjetos(@RequestBody @Valid PermisoTablaDto dto) throws SitteecException{
        return permisoTablaService.lazyInjectionObjetos(dto) ;
    }

    @RequestMapping(value = "lazyPermisoTablaConjuntos", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoTablaDto lazyPermisoTablaConjuntos(@RequestBody @Valid PermisoTablaDto dto) throws SitteecException{
        return permisoTablaService.lazyInjectionConjuntos(dto) ;
    }

// busquedas por atributos  inicio
    @RequestMapping(value = "getPermisoTablaById", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoTablaDto getPermisoTablaById(@RequestBody @Valid Integer id) throws SitteecException  {
        return permisoTablaService.getPermisoTablaById(id);
    }
    @RequestMapping(value = "getPermisoTablasById", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PermisoTablaDto> getPermisoTablasById(@RequestBody @Valid Integer id) throws SitteecException {
        return permisoTablaService.getPermisoTablasById(id);
    }
    @RequestMapping(value = "getPermisoTablaByEtiqueta", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoTablaDto getPermisoTablaByEtiqueta(@RequestBody @Valid String etiqueta) throws SitteecException {
        return permisoTablaService.getPermisoTablaByEtiqueta(etiqueta);
    }
    @RequestMapping(value = "getPermisoTablasByEtiqueta", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PermisoTablaDto> getPermisoTablasByEtiqueta(@RequestBody @Valid String etiqueta) throws SitteecException {
        return permisoTablaService.getPermisoTablasByEtiqueta(etiqueta);
    }
    @RequestMapping(value = "getPermisoTablaByPermiso", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoTablaDto getPermisoTablaByPermiso(@RequestBody @Valid java.lang.Integer permiso) throws SitteecException {
        return permisoTablaService.getPermisoTablaByPermiso(permiso);
    }
    @RequestMapping(value = "getPermisoTablasByPermiso", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PermisoTablaDto> getPermisoTablasByPermiso(@RequestBody @Valid java.lang.Integer permiso) throws SitteecException {
        return permisoTablaService.getPermisoTablasByPermiso(permiso);
    }
    @RequestMapping(value = "getPermisoTablaByTabla", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoTablaDto getPermisoTablaByTabla(@RequestBody @Valid String tabla) throws SitteecException {
        return permisoTablaService.getPermisoTablaByTabla(tabla);
    }
    @RequestMapping(value = "getPermisoTablasByTabla", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PermisoTablaDto> getPermisoTablasByTabla(@RequestBody @Valid String tabla) throws SitteecException {
        return permisoTablaService.getPermisoTablasByTabla(tabla);
    }
    @RequestMapping(value = "getPermisoTablaByStatus", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoTablaDto getPermisoTablaByStatus(@RequestBody @Valid java.lang.Integer status) throws SitteecException {
        return permisoTablaService.getPermisoTablaByStatus(status);
    }
    @RequestMapping(value = "getPermisoTablasByStatus", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PermisoTablaDto> getPermisoTablasByStatus(@RequestBody @Valid java.lang.Integer status) throws SitteecException {
        return permisoTablaService.getPermisoTablasByStatus(status);
    }
    @RequestMapping(value = "getPermisoTablaByUsuarioUltMov", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoTablaDto getPermisoTablaByUsuarioUltMov(@RequestBody @Valid UsuarioDto usuarioUltMov) throws SitteecException {
        return permisoTablaService.getPermisoTablaByUsuarioUltMov(usuarioUltMov);
    }
    @RequestMapping(value = "getPermisoTablasByUsuarioUltMov", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PermisoTablaDto> getPermisoTablasByUsuarioUltMov(@RequestBody @Valid UsuarioDto usuarioUltMov) throws SitteecException {
        return permisoTablaService.getPermisoTablasByUsuarioUltMov(usuarioUltMov);
    }
    @RequestMapping(value = "getPermisoTablaByUsuario", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PermisoTablaDto getPermisoTablaByUsuario(@RequestBody @Valid UsuarioDto usuario) throws SitteecException {
        return permisoTablaService.getPermisoTablaByUsuario(usuario);
    }
    @RequestMapping(value = "getPermisoTablasByUsuario", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PermisoTablaDto> getPermisoTablasByUsuario(@RequestBody @Valid UsuarioDto usuario) throws SitteecException {
        return permisoTablaService.getPermisoTablasByUsuario(usuario);
    }
// busquedas por atributos  fin
//   add - remove Perfil
    @RequestMapping(value = "getPerfiles", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public List <PerfilDto>  getPerfiles(@RequestBody @Valid PermisoTablaDto permisoTabla)throws Exception {
         return permisoTablaService.getPerfiles(permisoTabla);
    } 
    @RequestMapping(value = "addPerfiles", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PerfilDto  addPerfiles(@RequestBody @Valid PermisoTablaPerfilDto permisoTablaPerfil)throws Exception{
         return permisoTablaService.addPerfiles(permisoTablaPerfil.getPermisoTabla(), permisoTablaPerfil.getPerfil());
    }

    @RequestMapping(value = "removePerfiles", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PerfilDto removePerfiles(@RequestBody @Valid PermisoTablaPerfilDto permisoTablaPerfil)throws Exception{
         return permisoTablaService.removePerfiles(permisoTablaPerfil.getPermisoTabla(), permisoTablaPerfil.getPerfil());
    }


    @RequestMapping(value = "custom", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PermisoTablaDto> custom(@RequestBody @Valid String consulta) throws SitteecException {
        return permisoTablaService.custom(consulta);
    }

    @RequestMapping(value = "getPermisoTablasByDto", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<PermisoTablaDto> getPermisoTablasByDto(@RequestBody @Valid PermisoTablaDto p_permisoTabla ) throws SitteecException {
        return permisoTablaService.getPermisoTablasByDto(p_permisoTabla);
    }

}
