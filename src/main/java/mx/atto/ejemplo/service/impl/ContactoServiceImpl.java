package mx.atto.ejemplo.service.impl;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import mx.atto.ejemplo.dao.IContactoDao;
import mx.atto.ejemplo.dto.ContactoDto;
import mx.atto.ejemplo.entity.Contacto;
import mx.atto.ejemplo.service.IContactoService;

@Service("contactoService")
@Transactional(value = "hibernateTransactionManager")
public class ContactoServiceImpl implements IContactoService {

    @Autowired
    private IContactoDao contactoDao;

    @Override
    public List<ContactoDto> findAll() {
        LinkedList<ContactoDto> list = new LinkedList<>();
        contactoDao.getList().stream()
        .forEach(x -> {
            list.add(ContactoDto.fromEntidad(x));
        });
        return list;
    }

    @Override
    public ContactoDto guardarContacto(ContactoDto dto) {
        dto.setId(contactoDao.save(dto.toEntidadBase()));
        return dto;
    }

    @Override
    public boolean actualizarContacto(ContactoDto dto) {
        contactoDao.update(dto.toEntidadBase());
        return true;
    }

    @Override
    public boolean eliminarContacto(ContactoDto dto) {
        contactoDao.delete(dto.toEntidadBase());
        return false;
    }

    @Override
    public ContactoDto getContacto(Integer id) {
        Contacto entity = contactoDao.get(id);
        return ContactoDto.fromEntidad(entity);
    }
    
}
