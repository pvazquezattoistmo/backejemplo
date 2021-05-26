package mx.atto.ejemplo.service;
import mx.atto.ejemplo.exception.SitteecException;

import java.util.List;
import mx.atto.ejemplo.dto.*;
import mx.atto.ejemplo.entity.*;
import java.util.Date;
import java.util.HashMap;
import java.util.HashMap;
import java.util.Set;

/**
 *
 * @author @author IstmoSoft
 */
public interface ICoreService {

        public HashMap permisos(long id_user, Set<String> tablas, long id_exp );
        public HashMap menus(long id_user);
        public HashMap menus_secuendarios(long id_user, long id_menu);
        public void excepcion() throws SitteecException;


}
