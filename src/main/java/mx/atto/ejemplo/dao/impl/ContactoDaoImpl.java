package mx.atto.ejemplo.dao.impl;

import org.springframework.stereotype.Repository;

import mx.atto.ejemplo.dao.IContactoDao;
import mx.atto.ejemplo.entity.Contacto;

@Repository("contactoDao")
public class ContactoDaoImpl extends GenericDaoImpl<Contacto, Integer> implements IContactoDao {
    
}
