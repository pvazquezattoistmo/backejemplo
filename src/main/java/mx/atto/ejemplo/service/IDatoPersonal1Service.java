package mx.atto.ejemplo.service;
import mx.atto.ejemplo.exception.SitteecException;

import java.util.List;
import mx.atto.ejemplo.dto.*;
import mx.atto.ejemplo.entity.*;
import java.util.Date;
import java.util.HashMap;

/**
 *
 * @author @author IstmoSoft
 */
public interface IDatoPersonal1Service {

    public DatoPersonal1Dto guardarDatoPersonal1(DatoPersonal1Dto dto) throws SitteecException;

    public boolean actualizarDatoPersonal1(DatoPersonal1Dto dto) throws SitteecException ;

    public boolean eliminarDatoPersonal1(DatoPersonal1Dto dto) throws SitteecException ;

    public DatoPersonal1Dto getDatoPersonal1(Integer id) throws SitteecException ;

    public List<DatoPersonal1Dto> getDatoPersonal1es() throws SitteecException ;
    
    public List<DatoPersonal1Dto> guardarListaDatoPersonal1(List<DatoPersonal1Dto> dtos)  throws SitteecException ;
    public List<DatoPersonal1Dto> actualizarListaDatoPersonal1(List<DatoPersonal1Dto> dtos)  throws SitteecException ;
    public HashMap <Integer,Integer> actualizarClaves(HashMap<Integer,Integer> claves) throws SitteecException ;
    public List<DatoPersonal1Dto> eliminarListaDatoPersonal1(List<DatoPersonal1Dto> dtos)  throws SitteecException ;
// busquedas por atributos inicio


}
