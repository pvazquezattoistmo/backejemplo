package mx.atto.ejemplo.service;

import java.util.List;

import mx.atto.ejemplo.dto.ContactoDto;

public interface IContactoService {
    
    public List<ContactoDto> findAll();

    public ContactoDto guardarCategoria(ContactoDto dto);

    public boolean actualizarCategoria(ContactoDto dto);

    public boolean eliminarCategoria(ContactoDto dto);

    public ContactoDto getCategoria(Integer id);

}
