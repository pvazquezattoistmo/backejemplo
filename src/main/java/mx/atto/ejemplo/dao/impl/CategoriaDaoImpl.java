package mx.atto.ejemplo.dao.impl;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import mx.atto.ejemplo.dao.ICategoriaDao;
import mx.atto.ejemplo.entity.Categoria;

@Repository("categoriaDao")
public class CategoriaDaoImpl extends GenericDaoImpl<Categoria, Integer> implements ICategoriaDao {

    @Override
    public Categoria getCategoriaById(Integer id) {
        List list = getCategoriasById(id);
        if (list.isEmpty()) return null;
        return (Categoria)list.get(0);
    }

    @Override
    public List<Categoria> getCategoriasById(Integer id) {
        Criteria criteria = getSession().createCriteria(Categoria.class);
        criteria.add(Restrictions.eq("id", id));
        return criteria.list();
    }

}
