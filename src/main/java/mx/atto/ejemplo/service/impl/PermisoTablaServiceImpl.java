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
@Service("permisoTablaService")
@Transactional(value = "hibernateTransactionManager")
public class PermisoTablaServiceImpl implements IPermisoTablaService {

    private Logger log = Logger.getLogger(PermisoTablaServiceImpl.class);

    @Autowired
    private IPermisoTablaDao permisoTablaDao;

    @Override
    public PermisoTablaDto guardarPermisoTabla(PermisoTablaDto dto) throws SitteecException{
        PermisoTabla permisoTabla = dto.toDefault().toEntidad();
            dto.setId_(   permisoTablaDao.save(permisoTabla));
            return dto;
    }
    @Override
    public List<PermisoTablaDto> guardarListaPermisoTabla(List<PermisoTablaDto> dtos) throws SitteecException{
            for (PermisoTablaDto dto : dtos) {
                PermisoTabla permisoTabla = dto.toDefault().toEntidad();
                dto.setId_( permisoTablaDao.save(permisoTabla));
            }
            return dtos;
    }
    
    @Override
    public boolean actualizarPermisoTabla(PermisoTablaDto dto) throws SitteecException{
        PermisoTablaDto aux= lazyInjectionEntidadConjuntos(dto.toDefault().toEntidad(),dto);
        PermisoTabla permisoTabla = aux.toDefault().toEntidad();
            permisoTablaDao.update(permisoTabla);
            return true;
    }
   
    @Override
    public List<PermisoTablaDto> actualizarListaPermisoTabla(List<PermisoTablaDto> dtos) throws SitteecException{
            for (PermisoTablaDto dto : dtos) {
                PermisoTabla permisoTabla = dto.toDefault().toEntidad();
                permisoTablaDao.update(permisoTabla);
            }
            return dtos;
    }
    @Override    
    public HashMap <Integer,Integer> actualizarClaves(HashMap<Integer,Integer> claves) throws SitteecException{
        Iterator it= claves.entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry elemento = (Map.Entry)it.next();
            PermisoTabla permisoTabla  = permisoTablaDao.get( (Integer) elemento.getKey());
            permisoTabla.setId((Integer) elemento.getValue());
            permisoTablaDao.update(permisoTabla);
        }
        return claves;
    }
    @Override
    public boolean eliminarPermisoTabla(PermisoTablaDto dto) throws SitteecException {
        PermisoTabla permisoTabla = dto.toDefault().toEntidad();
            permisoTablaDao.delete(permisoTabla);
            return true;
    }
    @Override   
    public List<PermisoTablaDto> eliminarListaPermisoTabla(List<PermisoTablaDto> dtos) throws SitteecException{
            for (PermisoTablaDto dto : dtos) {
                PermisoTabla permisoTabla = dto.toDefault().toEntidad();
                permisoTablaDao.delete(permisoTabla);
            }
            return dtos;
    }
    @Override
    public PermisoTablaDto getPermisoTabla(Integer id) throws SitteecException{
        PermisoTablaDto permisoTablaDto = new PermisoTablaDto();
            PermisoTabla permisoTabla = permisoTablaDao.get(id);
            if (permisoTabla!= null){
                permisoTablaDto = PermisoTablaDto.fromEntidad(permisoTabla);
                permisoTablaDto = lazyInjectionEntidadObjetos(permisoTabla, permisoTablaDto);
                }
            return permisoTablaDto;
    }

    @Override
    public List<PermisoTablaDto> getPermisoTablas() throws SitteecException{
        List<PermisoTabla> permisoTablas;
        List<PermisoTablaDto> permisoTablaDtos = new ArrayList<PermisoTablaDto>();
            permisoTablas = permisoTablaDao.getList();
            for (PermisoTabla permisoTabla : permisoTablas) {
                PermisoTablaDto permisoTablaDto = PermisoTablaDto.fromEntidad(permisoTabla);
                permisoTablaDto = lazyInjectionEntidadObjetos(permisoTabla, permisoTablaDto);
                permisoTablaDtos.add(permisoTablaDto);
            }
            return permisoTablaDtos;
    }
	
// busquedas por atributos  inicio
    @Override
    public PermisoTablaDto getPermisoTablaById(Integer id)  throws SitteecException  {
        PermisoTablaDto permisoTablaDto = new PermisoTablaDto();
            PermisoTabla e_permisoTabla = permisoTablaDao.getPermisoTablaById(id);
            if(e_permisoTabla != null){
                    permisoTablaDto = PermisoTablaDto.fromEntidad(e_permisoTabla);
                    permisoTablaDto = lazyInjectionEntidadObjetos(e_permisoTabla, permisoTablaDto);
            }
            return permisoTablaDto;
    }
    @Override
    public List<PermisoTablaDto> getPermisoTablasById(Integer id)  throws SitteecException  {
        List<PermisoTablaDto> permisoTablaDtos = new ArrayList<PermisoTablaDto>();
        PermisoTablaDto permisoTablaDto = new PermisoTablaDto();
            List<PermisoTabla>permisoTablas = permisoTablaDao.getPermisoTablasById(id);
            for(PermisoTabla e_permisoTabla : permisoTablas){
                    permisoTablaDto = PermisoTablaDto.fromEntidad(e_permisoTabla);
                    permisoTablaDto = lazyInjectionEntidadObjetos(e_permisoTabla, permisoTablaDto);
		       permisoTablaDtos.add(permisoTablaDto);
            }
	       return permisoTablaDtos ;
    }
    @Override
    public PermisoTablaDto getPermisoTablaByEtiqueta(String etiqueta)   throws SitteecException   {
        PermisoTablaDto permisoTablaDto = new PermisoTablaDto();
            PermisoTabla e_permisoTabla = permisoTablaDao.getPermisoTablaByEtiqueta(etiqueta);
            if(e_permisoTabla != null){
                    permisoTablaDto = PermisoTablaDto.fromEntidad(e_permisoTabla);
                    permisoTablaDto = lazyInjectionEntidadObjetos(e_permisoTabla, permisoTablaDto);
            }
            return permisoTablaDto;
    }
    @Override
    public List<PermisoTablaDto> getPermisoTablasByEtiqueta(String etiqueta)  throws SitteecException   {
        List<PermisoTablaDto> permisoTablaDtos = new ArrayList<PermisoTablaDto>();
        PermisoTablaDto permisoTablaDto = new PermisoTablaDto();
            List<PermisoTabla>permisoTablas = permisoTablaDao.getPermisoTablasByEtiqueta(etiqueta);
            for(PermisoTabla e_permisoTabla : permisoTablas){
                    permisoTablaDto = PermisoTablaDto.fromEntidad(e_permisoTabla);
                    permisoTablaDto = lazyInjectionEntidadObjetos(e_permisoTabla, permisoTablaDto);
		       permisoTablaDtos.add(permisoTablaDto);
            }
	       return permisoTablaDtos ;
    }
    @Override
    public PermisoTablaDto getPermisoTablaByPermiso(java.lang.Integer permiso)   throws SitteecException   {
        PermisoTablaDto permisoTablaDto = new PermisoTablaDto();
            PermisoTabla e_permisoTabla = permisoTablaDao.getPermisoTablaByPermiso(permiso);
            if(e_permisoTabla != null){
                    permisoTablaDto = PermisoTablaDto.fromEntidad(e_permisoTabla);
                    permisoTablaDto = lazyInjectionEntidadObjetos(e_permisoTabla, permisoTablaDto);
            }
            return permisoTablaDto;
    }
    @Override
    public List<PermisoTablaDto> getPermisoTablasByPermiso(java.lang.Integer permiso)  throws SitteecException   {
        List<PermisoTablaDto> permisoTablaDtos = new ArrayList<PermisoTablaDto>();
        PermisoTablaDto permisoTablaDto = new PermisoTablaDto();
            List<PermisoTabla>permisoTablas = permisoTablaDao.getPermisoTablasByPermiso(permiso);
            for(PermisoTabla e_permisoTabla : permisoTablas){
                    permisoTablaDto = PermisoTablaDto.fromEntidad(e_permisoTabla);
                    permisoTablaDto = lazyInjectionEntidadObjetos(e_permisoTabla, permisoTablaDto);
		       permisoTablaDtos.add(permisoTablaDto);
            }
	       return permisoTablaDtos ;
    }
    @Override
    public PermisoTablaDto getPermisoTablaByTabla(String tabla)   throws SitteecException   {
        PermisoTablaDto permisoTablaDto = new PermisoTablaDto();
            PermisoTabla e_permisoTabla = permisoTablaDao.getPermisoTablaByTabla(tabla);
            if(e_permisoTabla != null){
                    permisoTablaDto = PermisoTablaDto.fromEntidad(e_permisoTabla);
                    permisoTablaDto = lazyInjectionEntidadObjetos(e_permisoTabla, permisoTablaDto);
            }
            return permisoTablaDto;
    }
    @Override
    public List<PermisoTablaDto> getPermisoTablasByTabla(String tabla)  throws SitteecException   {
        List<PermisoTablaDto> permisoTablaDtos = new ArrayList<PermisoTablaDto>();
        PermisoTablaDto permisoTablaDto = new PermisoTablaDto();
            List<PermisoTabla>permisoTablas = permisoTablaDao.getPermisoTablasByTabla(tabla);
            for(PermisoTabla e_permisoTabla : permisoTablas){
                    permisoTablaDto = PermisoTablaDto.fromEntidad(e_permisoTabla);
                    permisoTablaDto = lazyInjectionEntidadObjetos(e_permisoTabla, permisoTablaDto);
		       permisoTablaDtos.add(permisoTablaDto);
            }
	       return permisoTablaDtos ;
    }
    @Override
    public PermisoTablaDto getPermisoTablaByStatus(java.lang.Integer status)   throws SitteecException   {
        PermisoTablaDto permisoTablaDto = new PermisoTablaDto();
            PermisoTabla e_permisoTabla = permisoTablaDao.getPermisoTablaByStatus(status);
            if(e_permisoTabla != null){
                    permisoTablaDto = PermisoTablaDto.fromEntidad(e_permisoTabla);
                    permisoTablaDto = lazyInjectionEntidadObjetos(e_permisoTabla, permisoTablaDto);
            }
            return permisoTablaDto;
    }
    @Override
    public List<PermisoTablaDto> getPermisoTablasByStatus(java.lang.Integer status)  throws SitteecException   {
        List<PermisoTablaDto> permisoTablaDtos = new ArrayList<PermisoTablaDto>();
        PermisoTablaDto permisoTablaDto = new PermisoTablaDto();
            List<PermisoTabla>permisoTablas = permisoTablaDao.getPermisoTablasByStatus(status);
            for(PermisoTabla e_permisoTabla : permisoTablas){
                    permisoTablaDto = PermisoTablaDto.fromEntidad(e_permisoTabla);
                    permisoTablaDto = lazyInjectionEntidadObjetos(e_permisoTabla, permisoTablaDto);
		       permisoTablaDtos.add(permisoTablaDto);
            }
	       return permisoTablaDtos ;
    }
    @Override
    public PermisoTablaDto getPermisoTablaByUsuarioUltMov(UsuarioDto p_usuarioUltMov)   throws SitteecException   {
        PermisoTablaDto permisoTablaDto = new PermisoTablaDto();
            PermisoTabla e_permisoTabla = permisoTablaDao.getPermisoTablaByUsuarioUltMov(p_usuarioUltMov);
            if(e_permisoTabla != null){
                    permisoTablaDto = PermisoTablaDto.fromEntidad(e_permisoTabla);
                    permisoTablaDto = lazyInjectionEntidadObjetos(e_permisoTabla, permisoTablaDto);
            }
            return permisoTablaDto;
    }
    @Override
    public List<PermisoTablaDto> getPermisoTablasByUsuarioUltMov(UsuarioDto p_usuarioUltMov)   throws SitteecException  {
        List<PermisoTablaDto> permisoTablaDtos = new ArrayList<PermisoTablaDto>();
        PermisoTablaDto permisoTablaDto = new PermisoTablaDto();
            List<PermisoTabla>permisoTablas = permisoTablaDao.getPermisoTablasByUsuarioUltMov(p_usuarioUltMov);
            for(PermisoTabla e_permisoTabla : permisoTablas){
                    permisoTablaDto = PermisoTablaDto.fromEntidad(e_permisoTabla);
                    permisoTablaDto = lazyInjectionEntidadObjetos(e_permisoTabla, permisoTablaDto);
		       permisoTablaDtos.add(permisoTablaDto);
            }
	       return permisoTablaDtos ;
    }
    @Override
    public PermisoTablaDto getPermisoTablaByUsuario(UsuarioDto p_usuario)   throws SitteecException   {
        PermisoTablaDto permisoTablaDto = new PermisoTablaDto();
            PermisoTabla e_permisoTabla = permisoTablaDao.getPermisoTablaByUsuario(p_usuario);
            if(e_permisoTabla != null){
                    permisoTablaDto = PermisoTablaDto.fromEntidad(e_permisoTabla);
                    permisoTablaDto = lazyInjectionEntidadObjetos(e_permisoTabla, permisoTablaDto);
            }
            return permisoTablaDto;
    }
    @Override
    public List<PermisoTablaDto> getPermisoTablasByUsuario(UsuarioDto p_usuario)   throws SitteecException  {
        List<PermisoTablaDto> permisoTablaDtos = new ArrayList<PermisoTablaDto>();
        PermisoTablaDto permisoTablaDto = new PermisoTablaDto();
            List<PermisoTabla>permisoTablas = permisoTablaDao.getPermisoTablasByUsuario(p_usuario);
            for(PermisoTabla e_permisoTabla : permisoTablas){
                    permisoTablaDto = PermisoTablaDto.fromEntidad(e_permisoTabla);
                    permisoTablaDto = lazyInjectionEntidadObjetos(e_permisoTabla, permisoTablaDto);
		       permisoTablaDtos.add(permisoTablaDto);
            }
	       return permisoTablaDtos ;
    }
// busquedas por atributos  fin
   @Override
   public PermisoTablaDto lazyInjection (PermisoTablaDto dto )   throws SitteecException  {
		PermisoTabla PEentidad = permisoTablaDao.get(dto.getId_());
		PermisoTablaDto salida = PermisoTablaDto.fromEntidad(PEentidad);
		salida =lazyInjectionEntidadObjetos(PEentidad,salida);
		salida =lazyInjectionEntidadConjuntos(PEentidad,salida); 
		return salida;
   }
   @Override
   public PermisoTablaDto lazyInjectionObjetos (PermisoTablaDto dto )  throws SitteecException  {
		PermisoTabla PEentidad = permisoTablaDao.get(dto.getId_());
		PermisoTablaDto salida = PermisoTablaDto.fromEntidad(PEentidad);
		salida =lazyInjectionEntidadObjetos(PEentidad,salida);
		return salida;
   }
   @Override
   public PermisoTablaDto lazyInjectionConjuntos (PermisoTablaDto dto )  throws SitteecException  {
		PermisoTabla PEentidad = permisoTablaDao.get(dto.getId_());
		PermisoTablaDto salida = PermisoTablaDto.fromEntidad(PEentidad);
		salida =lazyInjectionEntidadConjuntos(PEentidad,salida); 
		return salida;
   }
   @Override
   public PermisoTablaDto lazyInjectionEntidadObjetos (PermisoTabla PEentidad, PermisoTablaDto salida )  throws SitteecException  {
	   if (PEentidad.getUsuarioUltMov() !=null )  
          salida.setUsuarioUltMov(UsuarioDto.fromEntidad(PEentidad.getUsuarioUltMov()));  
	   if (PEentidad.getUsuario() !=null )  
          salida.setUsuario(UsuarioDto.fromEntidad(PEentidad.getUsuario()));  
		return salida;
   }
   @Override
   public PermisoTablaDto lazyInjectionEntidadConjuntos (PermisoTabla PEentidad, PermisoTablaDto salida )  throws SitteecException  {
	   salida.setPerfiles(new HashSet(getPerfiles (PermisoTablaDto.fromEntidad(PEentidad) ))) ;
		return salida;
   }
   @Override
   public PermisoTablaDto lazyInjectionEntidadObjetosDto (PermisoTablaDto PEentidad, PermisoTablaDto salida )  throws SitteecException  {
	   salida.setUsuarioUltMov( PEentidad.getUsuarioUltMov());  
	   salida.setUsuario( PEentidad.getUsuario());  
		return salida;
   }
   @Override
   public PermisoTablaDto lazyInjectionEntidadConjuntosDto (PermisoTablaDto PEentidad, PermisoTablaDto salida )  throws SitteecException  {
	   Iterator iteratorPerfiles = PEentidad.getPerfiles().iterator();
	   while(iteratorPerfiles.hasNext())
		 salida.getPerfiles().add( (PerfilDto) iteratorPerfiles.next());
		return salida;
   }
   @Override
   public PermisoTablaDto lazyInjectionEntidad (PermisoTabla PEentidad )  throws SitteecException  {
		PermisoTablaDto salida = PermisoTablaDto.fromEntidad(PEentidad);
		salida =lazyInjectionEntidadObjetos(PEentidad,salida);
		salida =lazyInjectionEntidadConjuntos(PEentidad,salida); 
		return salida;
   }

    //   add - remove Perfiles
    @Autowired
    private IPerfilDao perfilDao;
    @Autowired
    private IPerfilService perfilService;
   
    @Override
    public List<PerfilDto> getPerfiles(PermisoTablaDto permisoTablaDto)  throws SitteecException  {
        PermisoTabla permisoTabla = permisoTablaDao.get(permisoTablaDto.getId_());
        List<PerfilDto> perfilDtos = new ArrayList<PerfilDto>();
        PerfilDto perfilDto = new PerfilDto();
        try{
            List<Perfil>perfiles = new ArrayList<Perfil> (permisoTabla.getPerfiles());
            for(Perfil e_perfil : perfiles){
                    perfilDto = PerfilDto.fromEntidad(e_perfil);
                    perfilDto = perfilService.lazyInjectionEntidadObjetos(e_perfil, perfilDto);
                    boolean considerar = true;
                    Field declaredFieldStatus = perfilDto.getClass().getDeclaredField("status") ;
                        if ( declaredFieldStatus != null) {
                          declaredFieldStatus.setAccessible(true);
                           Integer status = (Integer) declaredFieldStatus.get(perfilDto);
                           if (status!= null && status ==0 )
                               considerar = false;
                        }
                    if (considerar )
                        perfilDtos.add(perfilDto);
            }
        } catch (Exception e) {
            //TODO: handle exception
        }            
	       return perfilDtos ;
    }
    @Override
    public PerfilDto addPerfiles(PermisoTablaDto permisoTablaDto, PerfilDto perfilDto)  throws SitteecException  {
        PermisoTabla permisoTabla = permisoTablaDao.get(permisoTablaDto.getId_());
        Perfil perfil = null;
        if (perfilDto.getId_() == null) {
                perfilDto.setId_(perfilDao.save(perfilDto.toEntidad()));
            perfil = perfilDto.toEntidad();
        } else {
            perfil = perfilDao.get(perfilDto.getId_());
            perfilDto = PerfilDto.fromEntidad(perfil);
        }
            permisoTabla.getPerfiles().add(perfil);
            permisoTablaDao.update(permisoTabla);
        return perfilDto;
    }  
    @Override
    public PerfilDto removePerfiles(PermisoTablaDto permisoTablaDto, PerfilDto perfilDto)   throws SitteecException  {
    	PermisoTabla permisoTabla = permisoTablaDao.get(permisoTablaDto.getId_());
    	Perfil  perfil = perfilDao.get(perfilDto.getId_());
    	permisoTabla.getPerfiles().remove(perfil);
    	permisoTablaDao.update(permisoTabla);
        return perfilDto;
    }  

    @Override
    public List<PermisoTablaDto> custom(String consulta) throws SitteecException{
        List<PermisoTabla> permisoTablas;
        List<PermisoTablaDto> permisoTablaDtos = new ArrayList<PermisoTablaDto>();
            permisoTablas = permisoTablaDao.custom(consulta);
            for (PermisoTabla permisoTabla : permisoTablas) {
                PermisoTablaDto permisoTablaDto = PermisoTablaDto.fromEntidad(permisoTabla);
                permisoTablaDto = lazyInjectionEntidadObjetos(permisoTabla, permisoTablaDto);
                permisoTablaDtos.add(permisoTablaDto);
            }
            return permisoTablaDtos;
    }

    public List<PermisoTablaDto> getPermisoTablasByDto(PermisoTablaDto p_permisoTabla) throws SitteecException{
        List<PermisoTabla> permisoTablas;
        List<PermisoTablaDto> permisoTablaDtos = new ArrayList<PermisoTablaDto>();
            permisoTablas = permisoTablaDao.getPermisoTablasByDto( p_permisoTabla);
            for (PermisoTabla permisoTabla : permisoTablas) {
                PermisoTablaDto permisoTablaDto = PermisoTablaDto.fromEntidad(permisoTabla);
                permisoTablaDto = lazyInjectionEntidadObjetos(permisoTabla, permisoTablaDto);
                permisoTablaDtos.add(permisoTablaDto);
            }
            return permisoTablaDtos;
    }
    
}
