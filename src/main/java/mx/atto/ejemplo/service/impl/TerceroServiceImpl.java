package mx.atto.ejemplo.service.impl;

import java.util.LinkedList;
import java.util.List;



import mx.atto.ejemplo.dao.ITerceroDao;
import mx.atto.ejemplo.dao.impl.TerceroDaoImpl;
import mx.atto.ejemplo.dto.TerceroDto;
import mx.atto.ejemplo.entity.Tercero;
import mx.atto.ejemplo.exception.SitteecException;
import mx.atto.ejemplo.service.ITerceroService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service("terceroService")
@Transactional(value = "hibernateTransactionManager")
public class TerceroServiceImpl implements ITerceroService {

    @Autowired
    private ITerceroDao terceroDao;

    @Override
    public List<TerceroDto> findAll() throws SitteecException {
        LinkedList<TerceroDto> listDto = new LinkedList<>();
        terceroDao.getList().stream().forEach(x -> {
            listDto.add(TerceroDto.fromEntidad(x));

        });
        return listDto;
    }

    @Override
    public TerceroDto guardarTercero(TerceroDto dto) throws SitteecException {
        Tercero ter =  dto.toDefault().toEntidadBase();
        dto.setIdTerceros(terceroDao.save(ter));
        return dto;
    }

    @Override
    public boolean actualizarTercero(TerceroDto dto) throws SitteecException {
        terceroDao.update(dto.toDefault().toEntidadBase());
        return true;
    }

    @Override
    public boolean eliminarTercero(TerceroDto dto) throws SitteecException {
        terceroDao.delete(dto.toDefault().toEntidadBase());
        return false;
    }

    @Override
    public TerceroDto getTercero(Integer id) throws SitteecException {
        Tercero entity = terceroDao.get(id);
        return TerceroDto.fromEntidad(entity);
    }

}
