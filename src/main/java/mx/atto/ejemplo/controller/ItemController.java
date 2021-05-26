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
import mx.atto.ejemplo.service.IItemService;
import org.springframework.stereotype.Service;

/**
 *
 * @author IstmoSoft
 */
@RestController
@RequestMapping("/item")
public class ItemController {

    private Logger log = Logger.getLogger(ItemController.class);

    @Autowired
    private IItemService itemService;

    @RequestMapping(value = "guardarItem", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  ItemDto guardarItem(@RequestBody @Valid ItemDto dto) throws SitteecException{
        return itemService.guardarItem(dto);
    }

    @RequestMapping(value = "guardarListaItem", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<ItemDto> guardarListaItem(@RequestBody @Valid List<ItemDto> dtos) throws SitteecException {
        return itemService.guardarListaItem(dtos);
    }

    @RequestMapping(value = "actualizarItem", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  boolean actualizarItem(@RequestBody @Valid ItemDto dto) throws SitteecException {
        return itemService.actualizarItem(dto);
    }
    
    @RequestMapping(value = "actualizarListaItem", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<ItemDto> actualizarListaItem(@RequestBody @Valid List<ItemDto> dtos) throws SitteecException { 
        return itemService.actualizarListaItem(dtos);
    }

    @RequestMapping(value = "actualizarClaves", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public HashMap <Integer,Integer> actualizarClaves(@RequestBody @Valid HashMap<Integer,Integer> claves) throws SitteecException{
        return itemService.actualizarClaves(claves);
    }    

    @RequestMapping(value = "eliminarItem", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  boolean eliminarItem(@RequestBody @Valid ItemDto dto) throws SitteecException {
        return itemService.eliminarItem(dto);
    }
    
    @RequestMapping(value = "eliminarListaItem", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<ItemDto> eliminarListaItem(@RequestBody @Valid List<ItemDto> dtos) throws SitteecException { 
        return itemService.eliminarListaItem(dtos);
    }    
    @RequestMapping(value = "getItem", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  ItemDto getItem(@RequestBody @Valid Integer id) throws SitteecException {
        return itemService.getItem(id);
    }

    @RequestMapping(value = "getItemes", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public   List<ItemDto> getItemes() throws SitteecException {
        return itemService.getItemes();
    }

    @RequestMapping(value = "getItemesActivos", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public   List<ItemDto> getItemesActivos() throws SitteecException, NoSuchFieldException, SecurityException {
    //    try {
            if (ItemDto.class.getDeclaredField("status")!= null) {
                return itemService.custom("select ta from Item as ta where ta.status <> 0");
            }
     //   }  catch (NoSuchFieldException ex) {
  //      } catch (SecurityException ex) {
  //      }
        return itemService.getItemes();
    }

    @RequestMapping(value = "lazyItem", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  ItemDto lazyItem(@RequestBody @Valid ItemDto dto) throws SitteecException{
        return itemService.lazyInjection(dto) ;
    }

    @RequestMapping(value = "lazyItemObjetos", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  ItemDto lazyItemObjetos(@RequestBody @Valid ItemDto dto) throws SitteecException{
        return itemService.lazyInjectionObjetos(dto) ;
    }

    @RequestMapping(value = "lazyItemConjuntos", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  ItemDto lazyItemConjuntos(@RequestBody @Valid ItemDto dto) throws SitteecException{
        return itemService.lazyInjectionConjuntos(dto) ;
    }

// busquedas por atributos  inicio
    @RequestMapping(value = "getItemById", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  ItemDto getItemById(@RequestBody @Valid Integer id) throws SitteecException  {
        return itemService.getItemById(id);
    }
    @RequestMapping(value = "getItemesById", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<ItemDto> getItemesById(@RequestBody @Valid Integer id) throws SitteecException {
        return itemService.getItemesById(id);
    }
    @RequestMapping(value = "getItemByPrincipal", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  ItemDto getItemByPrincipal(@RequestBody @Valid java.lang.Integer principal) throws SitteecException {
        return itemService.getItemByPrincipal(principal);
    }
    @RequestMapping(value = "getItemesByPrincipal", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<ItemDto> getItemesByPrincipal(@RequestBody @Valid java.lang.Integer principal) throws SitteecException {
        return itemService.getItemesByPrincipal(principal);
    }
    @RequestMapping(value = "getItemByRuta", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  ItemDto getItemByRuta(@RequestBody @Valid String ruta) throws SitteecException {
        return itemService.getItemByRuta(ruta);
    }
    @RequestMapping(value = "getItemesByRuta", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<ItemDto> getItemesByRuta(@RequestBody @Valid String ruta) throws SitteecException {
        return itemService.getItemesByRuta(ruta);
    }
    @RequestMapping(value = "getItemByNombre", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  ItemDto getItemByNombre(@RequestBody @Valid String nombre) throws SitteecException {
        return itemService.getItemByNombre(nombre);
    }
    @RequestMapping(value = "getItemesByNombre", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<ItemDto> getItemesByNombre(@RequestBody @Valid String nombre) throws SitteecException {
        return itemService.getItemesByNombre(nombre);
    }
    @RequestMapping(value = "getItemByStatus", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  ItemDto getItemByStatus(@RequestBody @Valid java.lang.Integer status) throws SitteecException {
        return itemService.getItemByStatus(status);
    }
    @RequestMapping(value = "getItemesByStatus", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<ItemDto> getItemesByStatus(@RequestBody @Valid java.lang.Integer status) throws SitteecException {
        return itemService.getItemesByStatus(status);
    }
    @RequestMapping(value = "getItemByUsuarioUltMov", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  ItemDto getItemByUsuarioUltMov(@RequestBody @Valid UsuarioDto usuarioUltMov) throws SitteecException {
        return itemService.getItemByUsuarioUltMov(usuarioUltMov);
    }
    @RequestMapping(value = "getItemesByUsuarioUltMov", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<ItemDto> getItemesByUsuarioUltMov(@RequestBody @Valid UsuarioDto usuarioUltMov) throws SitteecException {
        return itemService.getItemesByUsuarioUltMov(usuarioUltMov);
    }
// busquedas por atributos  fin
//   add - remove Item
    @RequestMapping(value = "getItemsm", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public List <ItemDto>  getItemsm(@RequestBody @Valid ItemDto item)throws Exception {
         return itemService.getItemsm(item);
    } 
    @RequestMapping(value = "addItemsm", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  ItemDto  addItemsm(@RequestBody @Valid ItemItemDto itemItem)throws Exception{
         return itemService.addItemsm(itemItem.getItem(), itemItem.getItem2());
    }

    @RequestMapping(value = "removeItemsm", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  ItemDto removeItemsm(@RequestBody @Valid ItemItemDto itemItem)throws Exception{
         return itemService.removeItemsm(itemItem.getItem(), itemItem.getItem2());
    }

//   add - remove Perfil
    @RequestMapping(value = "getPerfiles", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public List <PerfilDto>  getPerfiles(@RequestBody @Valid ItemDto item)throws Exception {
         return itemService.getPerfiles(item);
    } 
    @RequestMapping(value = "addPerfiles", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PerfilDto  addPerfiles(@RequestBody @Valid ItemPerfilDto itemPerfil)throws Exception{
         return itemService.addPerfiles(itemPerfil.getItem(), itemPerfil.getPerfil());
    }

    @RequestMapping(value = "removePerfiles", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  PerfilDto removePerfiles(@RequestBody @Valid ItemPerfilDto itemPerfil)throws Exception{
         return itemService.removePerfiles(itemPerfil.getItem(), itemPerfil.getPerfil());
    }


    @RequestMapping(value = "custom", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<ItemDto> custom(@RequestBody @Valid String consulta) throws SitteecException {
        return itemService.custom(consulta);
    }

    @RequestMapping(value = "getItemesByDto", 
            method = RequestMethod.POST, 
            consumes={MediaType.APPLICATION_JSON_VALUE}
            ,produces = {MediaType.APPLICATION_JSON_VALUE})
    public  List<ItemDto> getItemesByDto(@RequestBody @Valid ItemDto p_item ) throws SitteecException {
        return itemService.getItemesByDto(p_item);
    }

}
