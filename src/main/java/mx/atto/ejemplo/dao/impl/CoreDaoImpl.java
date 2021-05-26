package mx.atto.ejemplo.dao.impl;
import mx.atto.ejemplo.exception.SitteecException;

import java.util.ArrayList;
import java.util.List;
import mx.atto.ejemplo.dao.*;
import mx.atto.ejemplo.entity.PermisoAtributo;
import mx.atto.ejemplo.entity.PermisoConjunto;
import mx.atto.ejemplo.entity.PermisoTabla;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author IstmoSoft
 */
@SuppressWarnings({"hiding", "rawtypes"})
@Repository("coreDao")
public class CoreDaoImpl implements ICoreDao {

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;

    }

    protected Session getSession() {
        return this.sessionFactory.getCurrentSession();
    }

    @Override
    public List getEntityByQueryString(String queryHQL) {
        return getSession().createQuery(queryHQL).list();
    }
    @Override
    public List<PermisoConjunto> permisosConjuntosUsuario(Object tabla, long id_user) {
        String consulta = "select pc "
                + " from PermisoConjunto as pc , Usuario as us "
                + " where pc.tabla= '" + tabla.toString() + "'  "
                + " and us.id = " + id_user
                + " and us.perfil in elements (pc.perfiles) ";
        List<PermisoConjunto> lista_conjuntos = getEntityByQueryString(consulta);
        return lista_conjuntos;
    }
    @Override
    public List<PermisoTabla> permisosTabalUsuario(Object tabla, long id_user) {
        String consulta = "select pt "
                + " from PermisoTabla as pt , Usuario as us "
                + " where pt.tabla= '" + tabla.toString() + "'  "
                + " and us.id = " + id_user
                + " and us.perfil in elements (pt.perfiles) ";
        List<PermisoTabla> lista_tabla = getEntityByQueryString(consulta);
        return lista_tabla;
    }
    @Override
    public List<PermisoAtributo> permisosAtributosUsuario(Object tabla, long id_user) {
        String consulta = "select pa "
                + " from PermisoAtributo as pa , Usuario as us "
                + " where pa.tabla= '" + tabla.toString() + "'  "
                + " and us.id = " + id_user
                + " and us.perfil in elements (pa.perfiles) ";
        List<PermisoAtributo> resultados = getEntityByQueryString(consulta);
        return resultados;
    }
    @Override
    public ArrayList itemMenuPrincipal(long id_user) {
        String consulta = "select it "
                + " from Item it , Usuario as us "
                + " where us.id = " + id_user
                + " and it.principal =  1 "
                + " and us.perfil in elements (it.perfiles) ";
        ArrayList resultado = (ArrayList) getEntityByQueryString(consulta);
        return resultado;
    }
    @Override
    public ArrayList itemMenuSecundario(long id_user, long id_menu) {
        String consulta = "select it "
                + " from Item it , Usuario as us "
                + " where us.id = " + id_user
                + " and it.id =  " + id_menu
                + " and us.perfil in elements (it.perfiles) ";
        ArrayList resultado = (ArrayList) getEntityByQueryString(consulta);
        return resultado;
    }
}
