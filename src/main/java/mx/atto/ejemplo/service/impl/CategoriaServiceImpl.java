package mx.atto.ejemplo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mx.atto.ejemplo.dao.ICategoriaDao;
import mx.atto.ejemplo.dto.CategoriaDto;
import mx.atto.ejemplo.entity.Categoria;
import mx.atto.ejemplo.exception.SitteecException;
import mx.atto.ejemplo.service.ICategoriaService;

@Service
public class CategoriaServiceImpl implements ICategoriaService {

    @Autowired
    private ICategoriaDao categoriaDao;

    @Override
    public List<CategoriaDto> findAll() throws SitteecException {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public CategoriaDto guardarCategoria(CategoriaDto dto) throws SitteecException {
        Categoria cat = dto.toDefault().toEntidadBase();
        dto.setId(categoriaDao.save(cat));
        return dto;
    }

    @Override
    public boolean actualizarCategoria(CategoriaDto dto) throws SitteecException {
        // TODO Auto-generated method stub
        return false;
    }

    @Override
    public boolean eliminarCategoria(CategoriaDto dto) throws SitteecException {
        // TODO Auto-generated method stub
        return false;
    }

    @Override
    public CategoriaDto getCategoria(Integer id) throws SitteecException {
        // TODO Auto-generated method stub
        return null;
    }

    
    
}
