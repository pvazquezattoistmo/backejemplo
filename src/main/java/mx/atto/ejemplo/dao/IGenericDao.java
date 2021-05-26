package mx.atto.ejemplo.dao;
import mx.atto.ejemplo.exception.SitteecException;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;

import org.hibernate.HibernateException;

/**
 * Interface donde enuncian los metodos para almacenar, editar, eliminar o
 * buscar un objeto de cualquier tipo de clase, ya que al agregar la anotacion
 * <E, K extends Serializable> nos permite trabajar con cualquier tipo de objeto
 * que este mapeado a una tabla (Pojos). coordenadas de su centro. De esta clase
 * extenderan todas las interfaces(Dao) que tengan interaccion con la Base de
 * Datos.
 *
 * @author Orlando Alvarado Vázquez.
 */
public interface IGenericDao<E, K extends Serializable> {

    /**
     * Método para obtener un objeto de la base de datos por medio de un query.
     *
     * @param query , es una cadena de query HQL para consulta y obtencion de un
     * objeto.
     */
    public E getEntityByQueryString(String queryHQL);

    /**
     * Método para obtener un listado de objeto de la base de datos por medio de
     * un query.
     *
     * @param query , es una cadena de query HQL para consulta y obtencion de un
     * listado de objetos.
     */
    public List<E> getListByQueryString(String queryHQL);

    /**
     * Método para guardar un objeto(registro en la tabla) en la Base de Datos.
     *
     * @param entidad , Es el objeto de cualquier tipo de clase que se desea
     * guardar.
     */
    public K save(E entidad) throws HibernateException;

    /**
     * Método para editar un objeto(registro en la tabla) en la Base de Datos.
     *
     * @param entidad , Es el objeto de cualquier tipo de clase que se desea
     * actualizar o editar.
     */
    public void update(E entidad) throws HibernateException;

    /**
     * Método para eliminar un objeto(registro en la tabla) en la Base de Datos.
     *
     * @param entidad , Es el objeto de cualquier tipo de clase que se desea
     * eliminar.
     */
    public void delete(E entidad) throws HibernateException;

    /**
     * Método para para obtener un registro(Objeto) de cualquier tabla en la
     * Base de Datos.
     *
     * @param id , es la llave primaria de tipo Serializable por la cual se
     * buscara nuestro objeto.
     */
    public E get(K id) throws HibernateException;

    /**
     * Método para para obtener todos los registros de cualquier tabla en la
     * Base de Datos.
     *
     */
    public List<E> getList() throws HibernateException;

    /**
     * Método para guardar un una lista de objetos(registro en la tabla) en la
     * Base de Datos.
     *
     * @param entidades , coleccion de cualquier tipo de clase que se desea
     * guardar.
     */
    public void saveAll(Collection<E> entidades) throws HibernateException;

    /**
     * Método para actualizar un una lista de objetos(registro en la tabla) en
     * la Base de Datos.
     *
     * @param entidades , coleccion de cualquier tipo de clase que se desea
     * actualizar.
     */
    public void updateAll(Collection<E> entidades) throws HibernateException;

    /**
     * Método para eliminar un una lista de objetos(registro en la tabla) en la
     * Base de Datos.
     *
     * @param entidades , coleccion de cualquier tipo de clase que se desea
     * eliminar.
     */
    public void deleteAll(Collection<E> entidades) throws HibernateException;
    
        /**
     * Método para actualizar un una lista de objetos(registro en la tabla) en
     * la Base de Datos.
     *
     * @param entidades , coleccion de cualquier tipo de clase que se desea
     * actualizar.
     */
    public void saveOrUpdateAll(Collection<E> entidades) throws HibernateException;

}
