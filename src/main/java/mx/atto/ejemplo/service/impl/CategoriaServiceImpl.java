package mx.atto.ejemplo.service.impl;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import mx.atto.ejemplo.dao.ICategoriaDao;
import mx.atto.ejemplo.dto.CategoriaDto;
import mx.atto.ejemplo.entity.Categoria;
import mx.atto.ejemplo.exception.SitteecException;
import mx.atto.ejemplo.service.ICategoriaService;

@Service("categoriaService")
@Transactional(value = "hibernateTransactionManager")
public class CategoriaServiceImpl implements ICategoriaService {

    @Autowired
    private ICategoriaDao categoriaDao;

    @Override
    public List<CategoriaDto> findAll() throws SitteecException {
        LinkedList<CategoriaDto> listDto = new LinkedList<>();
        categoriaDao.getList().stream().forEach(x -> {
            listDto.add(CategoriaDto.fromEntidad(x));
        });
        return listDto;
    }

    @Override
    public CategoriaDto guardarCategoria(CategoriaDto dto) throws SitteecException {
        Categoria cat = dto.toDefault().toEntidadBase();
        dto.setId(categoriaDao.save(cat));
        return dto;
    }

    @Override
    public boolean actualizarCategoria(CategoriaDto dto) throws SitteecException {
        categoriaDao.update(dto.toDefault().toEntidadBase());
        return true;
    }

    @Override
    public boolean eliminarCategoria(CategoriaDto dto) throws SitteecException {
        categoriaDao.delete(dto.toDefault().toEntidadBase());
        return false;
    }

    @Override
    public CategoriaDto getCategoria(Integer id) throws SitteecException {
        Categoria entity = categoriaDao.get(id);
        return CategoriaDto.fromEntidad(entity);
    }
    
}
