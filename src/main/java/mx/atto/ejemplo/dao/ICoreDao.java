package mx.atto.ejemplo.dao;
import mx.atto.ejemplo.exception.SitteecException;

import java.util.ArrayList;
import java.util.List;
import mx.atto.ejemplo.entity.PermisoAtributo;
import mx.atto.ejemplo.entity.PermisoConjunto;
import mx.atto.ejemplo.entity.PermisoTabla;
import org.hibernate.SessionFactory;

/**
 *
 * @author IstmoSoft
 */
public interface ICoreDao {

// busquedas por atributos inicio
    public void setSessionFactory(SessionFactory sessionFactory);

    public List getEntityByQueryString(String queryHQL);
    public List<PermisoConjunto> permisosConjuntosUsuario(Object tabla, long id_user) ; 
    public List<PermisoTabla> permisosTabalUsuario(Object tabla, long id_user) ;
    public List<PermisoAtributo> permisosAtributosUsuario(Object tabla, long id_user) ;
    public ArrayList itemMenuPrincipal(long id_user) ;
    public ArrayList itemMenuSecundario(long id_user, long id_menu) ;

}
