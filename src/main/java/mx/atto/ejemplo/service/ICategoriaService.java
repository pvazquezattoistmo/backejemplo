package mx.atto.ejemplo.service;

import java.util.List;

import mx.atto.ejemplo.dto.CategoriaDto;
import mx.atto.ejemplo.entity.Categoria;
import mx.atto.ejemplo.exception.SitteecException;

public interface ICategoriaService {

    public List<CategoriaDto> findAll() throws SitteecException;

    public CategoriaDto guardarCategoria(CategoriaDto dto) throws SitteecException;

    public boolean actualizarCategoria(CategoriaDto dto) throws SitteecException;

    public boolean eliminarCategoria(CategoriaDto dto) throws SitteecException;

    public CategoriaDto getCategoria(Integer id) throws SitteecException;

}
