package mx.atto.ejemplo.service;

import java.util.List;

import mx.atto.ejemplo.dto.ContactoDto;

public interface IContactoService {
    
    public List<ContactoDto> findAll();

    public ContactoDto guardarContacto(ContactoDto dto);

    public boolean actualizarContacto(ContactoDto dto);

    public boolean eliminarContacto(ContactoDto dto);

    public ContactoDto getContacto(Integer id);

}
