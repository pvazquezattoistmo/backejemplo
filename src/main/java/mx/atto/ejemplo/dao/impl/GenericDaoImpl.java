package mx.atto.ejemplo.dao.impl;
import mx.atto.ejemplo.exception.SitteecException;

import mx.atto.ejemplo.dao.IGenericDao;
import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.util.Collection;
import java.util.List;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Clase generica para almacenar, editar, eliminar o buscar un objeto de
 * cualquier tipo, ya que al agregar la anotacion <Object, ID extends
 * Serializable> nos permite trabajar con cualquier tipo de objeto que este
 * mapeado a una tabla (Pojos). coordenadas de su centro.
 *
 * @author Orlando Alvarado Vázquez.
 */
@SuppressWarnings({"hiding", "rawtypes"})
public class GenericDaoImpl<E, K extends Serializable> implements
        IGenericDao<E, K> {

    private Class<E> clasePersistente;

    @Autowired
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
   
    }
    
    public Class<E> getEntityClass() {
        return this.clasePersistente;
    }

    protected Session getSession() {
        return this.sessionFactory.getCurrentSession();
    }

    protected Criteria crearCriteria() {
        return getSession().createCriteria(clasePersistente);
    }

    /**
     * Constructor de la clase que extrae el tipo de clase al que pertence el
     * Objeto.
     */
    @SuppressWarnings("unchecked")
    public GenericDaoImpl() {
        clasePersistente = (Class<E>) ((ParameterizedType) getClass()
                .getGenericSuperclass()).getActualTypeArguments()[0];
    }

    /**
     * Método para obtener un objeto de la base de datos por medio de un query.
     *
     * @param query , es una cadena de query HQL para consulta y obtencion de un
     * objeto.
     */
    public E getEntityByQueryString(String queryHQL) {
        return (E) getSession().createQuery(queryHQL).list().get(0);
    }

    /**
     * Método para obtener un listado de objeto de la base de datos por medio de
     * un query.
     *
     * @param query , es una cadena de query HQL para consulta y obtencion de un
     * listado de objetos.
     */
    public List<E> getListByQueryString(String queryHQL) {
        return getSession().createQuery(queryHQL).list();
    }

    /**
     * Metodo para guardar un objeto(registro en la tabla) en la Base de Datos.
     *
     * @param entidad , Es el objeto de cualquier tipo de clase que se desea
     * guardar.
     */
    @SuppressWarnings("unchecked")
    public K save(E entidad) throws HibernateException {
        return (K) getSession().save(entidad);
    }

    /**
     * Metodo para editar un objeto(registro en la tabla) en la Base de Datos.
     *
     * @param entidad , Es el objeto de cualquier tipo de clase que se desea
     * actualizar o editar.
     */
    public void update(E entidad) throws HibernateException {
        getSession().clear();
   //     Transaction transaction = getSession().beginTransaction();
        getSession().update(entidad);
     //   transaction.commit();
        getSession().flush();
    }

    /**
     * Metodo para eliminar un objeto(registro en la tabla) en la Base de Datos.
     *
     * @param entidad , Es el objeto de cualquier tipo de clase que se desea
     * eliminar.
     */
    public void delete(E entidad) throws HibernateException {
        getSession().clear();
        getSession().delete(entidad);
        getSession().flush();
    }

    /**
     * Metodo para para obtener un registro(Objeto) de cualquier tabla en la
     * Base de Datos.
     *
     * @param id , es la llave primaria de tipo Serializable por la cual se
     * buscara nuestro objeto.
     */
    @SuppressWarnings("unchecked")
    public E get(K id) throws HibernateException {
        return (E) getSession().get(clasePersistente, id);
    }

    @Override
    public void saveAll(Collection<E> entidades) throws HibernateException {

        for (E object : entidades) {
            getSession().save(object);
        }

    }

    @Override
    public void updateAll(Collection<E> entidades) throws HibernateException {

        for (E object : entidades) {
            getSession().update(object);
        }
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<E> getList() throws HibernateException {
        return crearCriteria().list();
    }

    @Override
    public void deleteAll(Collection<E> entidades) throws HibernateException {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void saveOrUpdateAll(Collection<E> entidades) throws HibernateException {
        for (E object : entidades) {
            getSession().saveOrUpdate(object);
        }
    }
}
