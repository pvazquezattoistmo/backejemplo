package mx.atto.ejemplo.service.impl;
import mx.atto.ejemplo.exception.SitteecException;
import java.util.Iterator;
import java.util.Date;
import java.io.Serializable;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.HashMap;
import java.util.Map;
import org.apache.log4j.Logger;
import org.modelmapper.ModelMapper;
import mx.atto.ejemplo.dao.*;
import mx.atto.ejemplo.dto.*;
import mx.atto.ejemplo.entity.*;
import mx.atto.ejemplo.service.*;
import org.hibernate.HibernateException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author IstmoSoft
 */
@Service("datoPersonal1Service")
@Transactional(value = "hibernateTransactionManager")
public class DatoPersona1ServiceImpl implements IDatoPersonal1Service {

    private Logger log = Logger.getLogger(DatoPersona1ServiceImpl.class);

    @Autowired
    private IDatoPersonal1Dao datoPersonal1Dao;

    @Override
    public DatoPersonal1Dto guardarDatoPersonal1(DatoPersonal1Dto dto) throws SitteecException{
        DatoPersonal1 datoPersonal1 = dto.toEntidad();
            dto.setId(   datoPersonal1Dao.save(datoPersonal1));
            return dto;
    }
    @Override
    public List<DatoPersonal1Dto> guardarListaDatoPersonal1(List<DatoPersonal1Dto> dtos) throws SitteecException{
            for (DatoPersonal1Dto dto : dtos) {
                DatoPersonal1 datoPersonal1 = dto.toEntidad();
                dto.setId( datoPersonal1Dao.save(datoPersonal1));
            }
            return dtos;
    }
    
    @Override
    public boolean actualizarDatoPersonal1(DatoPersonal1Dto dto) throws SitteecException{
        // DatoPersonal1Dto aux= lazyInjectionEntidadConjuntos(dto.toEntidad(),dto);
        DatoPersonal1 datoPersonal1 = dto.toEntidad();
            datoPersonal1Dao.update(datoPersonal1);
            return true;
    }
   
    @Override
    public List<DatoPersonal1Dto> actualizarListaDatoPersonal1(List<DatoPersonal1Dto> dtos) throws SitteecException{
            for (DatoPersonal1Dto dto : dtos) {
                DatoPersonal1 datoPersonal1 = dto.toEntidad();
                datoPersonal1Dao.update(datoPersonal1);
            }
            return dtos;
    }
    @Override    
    public HashMap <Integer,Integer> actualizarClaves(HashMap<Integer,Integer> claves) throws SitteecException{
        Iterator it= claves.entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry elemento = (Map.Entry)it.next();
            DatoPersonal1 DatoPersonal1  = datoPersonal1Dao.get( (Integer) elemento.getKey());
            DatoPersonal1.setId((Integer) elemento.getValue());
            datoPersonal1Dao.update(DatoPersonal1);
        }
        return claves;
    }
    @Override
    public boolean eliminarDatoPersonal1(DatoPersonal1Dto dto) throws SitteecException {
        DatoPersonal1 datoPersonal1 = dto.toEntidad();
            datoPersonal1Dao.delete(datoPersonal1);
            return true;
    }
    @Override   
    public List<DatoPersonal1Dto> eliminarListaDatoPersonal1(List<DatoPersonal1Dto> dtos) throws SitteecException{
            for (DatoPersonal1Dto dto : dtos) {
                DatoPersonal1 datoPersonal1 = dto.toEntidad();
                datoPersonal1Dao.delete(datoPersonal1);
            }
            return dtos;
    }
    @Override
    public DatoPersonal1Dto getDatoPersonal1(Integer id) throws SitteecException{
        DatoPersonal1Dto DatoPersonal1Dto = new DatoPersonal1Dto();
            DatoPersonal1 datoPersonal1 = datoPersonal1Dao.get(id);
            if (datoPersonal1!= null){
                DatoPersonal1Dto = DatoPersonal1Dto.fromEntidad(datoPersonal1);
                // DatoPersonal1Dto = lazyInjectionEntidadObjetos(DatoPersonal1, DatoPersonal1Dto);
                }
            return DatoPersonal1Dto;
    }

    @Override
    public List<DatoPersonal1Dto> getDatoPersonal1es() throws SitteecException{
        List<DatoPersonal1> datoPersonal1es;
        List<DatoPersonal1Dto> datoPersonal1Dtos = new ArrayList<DatoPersonal1Dto>();
            datoPersonal1es = datoPersonal1Dao.getList();
            for (DatoPersonal1 datoPersonal1 : datoPersonal1es) {
                DatoPersonal1Dto datoPersonal1Dto = DatoPersonal1Dto.fromEntidad(datoPersonal1);
                // DatoPersonal1Dto = lazyInjectionEntidadObjetos(DatoPersonal1, DatoPersonal1Dto);
                datoPersonal1Dtos.add(datoPersonal1Dto);
            }
            return datoPersonal1Dtos;
    }
	
// busquedas por atributos  inicio
  
}
