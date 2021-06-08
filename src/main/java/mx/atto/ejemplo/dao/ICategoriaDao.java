package mx.atto.ejemplo.dao;

import java.util.List;

import mx.atto.ejemplo.entity.Categoria;

public interface ICategoriaDao extends IGenericDao<Categoria, Integer> {

    public Categoria getCategoriaById(Integer id);

    public List<Categoria> getCategoriasById(Integer id);
    
}
