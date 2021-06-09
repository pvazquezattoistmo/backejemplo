package mx.atto.ejemplo.dao.impl;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import mx.atto.ejemplo.dao.ICategoriaDao;
import mx.atto.ejemplo.entity.Categoria;

@Repository("categoriaDao")
public class CategoriaDaoImpl extends GenericDaoImpl<Categoria, Integer> implements ICategoriaDao {

}
