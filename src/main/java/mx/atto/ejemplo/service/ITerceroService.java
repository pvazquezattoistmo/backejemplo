package mx.atto.ejemplo.service;

import java.util.List;

import mx.atto.ejemplo.dto.TerceroDto;
import mx.atto.ejemplo.exception.SitteecException;

public interface ITerceroService {

    public List<TerceroDto> findAll() throws SitteecException;

    public TerceroDto guardarTercero(TerceroDto dto) throws SitteecException;

    public boolean actualizarTercero (TerceroDto dto) throws SitteecException;

    public boolean eliminarTercero(TerceroDto dto) throws SitteecException;

    public TerceroDto getTercero (Integer id ) throws SitteecException;

    

}
