package mx.atto.ejemplo.controller;
import mx.atto.ejemplo.exception.SitteecException;

import java.util.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.HashSet;
import org.apache.log4j.Logger;
import javax.validation.Valid;
import mx.atto.ejemplo.service.ICoreService;

/**
 *
 * @author IstmoSoft
 */
@RestController
@RequestMapping("/core")
public class CoreController {

    private Logger log = Logger.getLogger(CoreController.class);

    @Autowired
    private ICoreService coreService;

    @RequestMapping(value = "permisos",
            method = RequestMethod.POST,
            consumes = {MediaType.APPLICATION_JSON_VALUE},
             produces = {MediaType.APPLICATION_JSON_VALUE})
    public HashMap permisos(@RequestBody @Valid HashMap entrada) throws SitteecException {
        String c_id_usu = entrada.get("id_usu").toString();
        String c_id_exp = entrada.get("id_exp").toString();
        HashSet tablas = new HashSet((Collection) entrada.get("tablas"));
        long id_usu = (new Long(c_id_usu)).longValue();
        long id_exp = (new Long(c_id_exp)).longValue();
        return coreService.permisos(id_usu, tablas,id_exp);
    }

    @RequestMapping(value = "menus",
            method = RequestMethod.POST,
            consumes = {MediaType.APPLICATION_JSON_VALUE},
             produces = {MediaType.APPLICATION_JSON_VALUE})
    public HashMap menus(@RequestBody @Valid HashMap entrada) throws SitteecException {
        String c_id_usu = entrada.get("id_usu").toString();
        long id_usu = (new Long(c_id_usu)).longValue();
        return coreService.menus(id_usu);
    }

    @RequestMapping(value = "menus_secuendarios",
            method = RequestMethod.POST,
            consumes = {MediaType.APPLICATION_JSON_VALUE},
             produces = {MediaType.APPLICATION_JSON_VALUE})
    public HashMap menus_secuendarios(@RequestBody @Valid HashMap entrada) throws SitteecException {
        String c_id_usu = entrada.get("id_usu").toString();
        String c_id_menu = entrada.get("id_menu").toString();
        long id_usu = (new Long(c_id_usu)).longValue();
        long id_menu = (new Long(c_id_menu)).longValue();
        return coreService.menus_secuendarios(id_usu, id_menu);
    }

}
