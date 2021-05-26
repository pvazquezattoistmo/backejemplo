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
@Service("permisoConjuntoService")
@Transactional(value = "hibernateTransactionManager")
public class PermisoConjuntoServiceImpl implements IPermisoConjuntoService {

    private Logger log = Logger.getLogger(PermisoConjuntoServiceImpl.class);

    @Autowired
    private IPermisoConjuntoDao permisoConjuntoDao;

    @Override
    public PermisoConjuntoDto guardarPermisoConjunto(PermisoConjuntoDto dto) throws SitteecException{
        PermisoConjunto permisoConjunto = dto.toDefault().toEntidad();
            dto.setId_(   permisoConjuntoDao.save(permisoConjunto));
            return dto;
    }
    @Override
    public List<PermisoConjuntoDto> guardarListaPermisoConjunto(List<PermisoConjuntoDto> dtos) throws SitteecException{
            for (PermisoConjuntoDto dto : dtos) {
                PermisoConjunto permisoConjunto = dto.toDefault().toEntidad();
                dto.setId_( permisoConjuntoDao.save(permisoConjunto));
            }
            return dtos;
    }
    
    @Override
    public boolean actualizarPermisoConjunto(PermisoConjuntoDto dto) throws SitteecException{
        PermisoConjuntoDto aux= lazyInjectionEntidadConjuntos(dto.toDefault().toEntidad(),dto);
        PermisoConjunto permisoConjunto = aux.toDefault().toEntidad();
            permisoConjuntoDao.update(permisoConjunto);
            return true;
    }
   
    @Override
    public List<PermisoConjuntoDto> actualizarListaPermisoConjunto(List<PermisoConjuntoDto> dtos) throws SitteecException{
            for (PermisoConjuntoDto dto : dtos) {
                PermisoConjunto permisoConjunto = dto.toDefault().toEntidad();
                permisoConjuntoDao.update(permisoConjunto);
            }
            return dtos;
    }
    @Override    
    public HashMap <Integer,Integer> actualizarClaves(HashMap<Integer,Integer> claves) throws SitteecException{
        Iterator it= claves.entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry elemento = (Map.Entry)it.next();
            PermisoConjunto permisoConjunto  = permisoConjuntoDao.get( (Integer) elemento.getKey());
            permisoConjunto.setId((Integer) elemento.getValue());
            permisoConjuntoDao.update(permisoConjunto);
        }
        return claves;
    }
    @Override
    public boolean eliminarPermisoConjunto(PermisoConjuntoDto dto) throws SitteecException {
        PermisoConjunto permisoConjunto = dto.toDefault().toEntidad();
            permisoConjuntoDao.delete(permisoConjunto);
            return true;
    }
    @Override   
    public List<PermisoConjuntoDto> eliminarListaPermisoConjunto(List<PermisoConjuntoDto> dtos) throws SitteecException{
            for (PermisoConjuntoDto dto : dtos) {
                PermisoConjunto permisoConjunto = dto.toDefault().toEntidad();
                permisoConjuntoDao.delete(permisoConjunto);
            }
            return dtos;
    }
    @Override
    public PermisoConjuntoDto getPermisoConjunto(Integer id) throws SitteecException{
        PermisoConjuntoDto permisoConjuntoDto = new PermisoConjuntoDto();
            PermisoConjunto permisoConjunto = permisoConjuntoDao.get(id);
            if (permisoConjunto!= null){
                permisoConjuntoDto = PermisoConjuntoDto.fromEntidad(permisoConjunto);
                permisoConjuntoDto = lazyInjectionEntidadObjetos(permisoConjunto, permisoConjuntoDto);
                }
            return permisoConjuntoDto;
    }

    @Override
    public List<PermisoConjuntoDto> getPermisoConjuntos() throws SitteecException{
        List<PermisoConjunto> permisoConjuntos;
        List<PermisoConjuntoDto> permisoConjuntoDtos = new ArrayList<PermisoConjuntoDto>();
            permisoConjuntos = permisoConjuntoDao.getList();
            for (PermisoConjunto permisoConjunto : permisoConjuntos) {
                PermisoConjuntoDto permisoConjuntoDto = PermisoConjuntoDto.fromEntidad(permisoConjunto);
                permisoConjuntoDto = lazyInjectionEntidadObjetos(permisoConjunto, permisoConjuntoDto);
                permisoConjuntoDtos.add(permisoConjuntoDto);
            }
            return permisoConjuntoDtos;
    }
	
// busquedas por atributos  inicio
    @Override
    public PermisoConjuntoDto getPermisoConjuntoById(Integer id)  throws SitteecException  {
        PermisoConjuntoDto permisoConjuntoDto = new PermisoConjuntoDto();
            PermisoConjunto e_permisoConjunto = permisoConjuntoDao.getPermisoConjuntoById(id);
            if(e_permisoConjunto != null){
                    permisoConjuntoDto = PermisoConjuntoDto.fromEntidad(e_permisoConjunto);
                    permisoConjuntoDto = lazyInjectionEntidadObjetos(e_permisoConjunto, permisoConjuntoDto);
            }
            return permisoConjuntoDto;
    }
    @Override
    public List<PermisoConjuntoDto> getPermisoConjuntosById(Integer id)  throws SitteecException  {
        List<PermisoConjuntoDto> permisoConjuntoDtos = new ArrayList<PermisoConjuntoDto>();
        PermisoConjuntoDto permisoConjuntoDto = new PermisoConjuntoDto();
            List<PermisoConjunto>permisoConjuntos = permisoConjuntoDao.getPermisoConjuntosById(id);
            for(PermisoConjunto e_permisoConjunto : permisoConjuntos){
                    permisoConjuntoDto = PermisoConjuntoDto.fromEntidad(e_permisoConjunto);
                    permisoConjuntoDto = lazyInjectionEntidadObjetos(e_permisoConjunto, permisoConjuntoDto);
		       permisoConjuntoDtos.add(permisoConjuntoDto);
            }
	       return permisoConjuntoDtos ;
    }
    @Override
    public PermisoConjuntoDto getPermisoConjuntoByEtiqueta(String etiqueta)   throws SitteecException   {
        PermisoConjuntoDto permisoConjuntoDto = new PermisoConjuntoDto();
            PermisoConjunto e_permisoConjunto = permisoConjuntoDao.getPermisoConjuntoByEtiqueta(etiqueta);
            if(e_permisoConjunto != null){
                    permisoConjuntoDto = PermisoConjuntoDto.fromEntidad(e_permisoConjunto);
                    permisoConjuntoDto = lazyInjectionEntidadObjetos(e_permisoConjunto, permisoConjuntoDto);
            }
            return permisoConjuntoDto;
    }
    @Override
    public List<PermisoConjuntoDto> getPermisoConjuntosByEtiqueta(String etiqueta)  throws SitteecException   {
        List<PermisoConjuntoDto> permisoConjuntoDtos = new ArrayList<PermisoConjuntoDto>();
        PermisoConjuntoDto permisoConjuntoDto = new PermisoConjuntoDto();
            List<PermisoConjunto>permisoConjuntos = permisoConjuntoDao.getPermisoConjuntosByEtiqueta(etiqueta);
            for(PermisoConjunto e_permisoConjunto : permisoConjuntos){
                    permisoConjuntoDto = PermisoConjuntoDto.fromEntidad(e_permisoConjunto);
                    permisoConjuntoDto = lazyInjectionEntidadObjetos(e_permisoConjunto, permisoConjuntoDto);
		       permisoConjuntoDtos.add(permisoConjuntoDto);
            }
	       return permisoConjuntoDtos ;
    }
    @Override
    public PermisoConjuntoDto getPermisoConjuntoByPermiso(java.lang.Integer permiso)   throws SitteecException   {
        PermisoConjuntoDto permisoConjuntoDto = new PermisoConjuntoDto();
            PermisoConjunto e_permisoConjunto = permisoConjuntoDao.getPermisoConjuntoByPermiso(permiso);
            if(e_permisoConjunto != null){
                    permisoConjuntoDto = PermisoConjuntoDto.fromEntidad(e_permisoConjunto);
                    permisoConjuntoDto = lazyInjectionEntidadObjetos(e_permisoConjunto, permisoConjuntoDto);
            }
            return permisoConjuntoDto;
    }
    @Override
    public List<PermisoConjuntoDto> getPermisoConjuntosByPermiso(java.lang.Integer permiso)  throws SitteecException   {
        List<PermisoConjuntoDto> permisoConjuntoDtos = new ArrayList<PermisoConjuntoDto>();
        PermisoConjuntoDto permisoConjuntoDto = new PermisoConjuntoDto();
            List<PermisoConjunto>permisoConjuntos = permisoConjuntoDao.getPermisoConjuntosByPermiso(permiso);
            for(PermisoConjunto e_permisoConjunto : permisoConjuntos){
                    permisoConjuntoDto = PermisoConjuntoDto.fromEntidad(e_permisoConjunto);
                    permisoConjuntoDto = lazyInjectionEntidadObjetos(e_permisoConjunto, permisoConjuntoDto);
		       permisoConjuntoDtos.add(permisoConjuntoDto);
            }
	       return permisoConjuntoDtos ;
    }
    @Override
    public PermisoConjuntoDto getPermisoConjuntoByTabla(String tabla)   throws SitteecException   {
        PermisoConjuntoDto permisoConjuntoDto = new PermisoConjuntoDto();
            PermisoConjunto e_permisoConjunto = permisoConjuntoDao.getPermisoConjuntoByTabla(tabla);
            if(e_permisoConjunto != null){
                    permisoConjuntoDto = PermisoConjuntoDto.fromEntidad(e_permisoConjunto);
                    permisoConjuntoDto = lazyInjectionEntidadObjetos(e_permisoConjunto, permisoConjuntoDto);
            }
            return permisoConjuntoDto;
    }
    @Override
    public List<PermisoConjuntoDto> getPermisoConjuntosByTabla(String tabla)  throws SitteecException   {
        List<PermisoConjuntoDto> permisoConjuntoDtos = new ArrayList<PermisoConjuntoDto>();
        PermisoConjuntoDto permisoConjuntoDto = new PermisoConjuntoDto();
            List<PermisoConjunto>permisoConjuntos = permisoConjuntoDao.getPermisoConjuntosByTabla(tabla);
            for(PermisoConjunto e_permisoConjunto : permisoConjuntos){
                    permisoConjuntoDto = PermisoConjuntoDto.fromEntidad(e_permisoConjunto);
                    permisoConjuntoDto = lazyInjectionEntidadObjetos(e_permisoConjunto, permisoConjuntoDto);
		       permisoConjuntoDtos.add(permisoConjuntoDto);
            }
	       return permisoConjuntoDtos ;
    }
    @Override
    public PermisoConjuntoDto getPermisoConjuntoByConjunto(String conjunto)   throws SitteecException   {
        PermisoConjuntoDto permisoConjuntoDto = new PermisoConjuntoDto();
            PermisoConjunto e_permisoConjunto = permisoConjuntoDao.getPermisoConjuntoByConjunto(conjunto);
            if(e_permisoConjunto != null){
                    permisoConjuntoDto = PermisoConjuntoDto.fromEntidad(e_permisoConjunto);
                    permisoConjuntoDto = lazyInjectionEntidadObjetos(e_permisoConjunto, permisoConjuntoDto);
            }
            return permisoConjuntoDto;
    }
    @Override
    public List<PermisoConjuntoDto> getPermisoConjuntosByConjunto(String conjunto)  throws SitteecException   {
        List<PermisoConjuntoDto> permisoConjuntoDtos = new ArrayList<PermisoConjuntoDto>();
        PermisoConjuntoDto permisoConjuntoDto = new PermisoConjuntoDto();
            List<PermisoConjunto>permisoConjuntos = permisoConjuntoDao.getPermisoConjuntosByConjunto(conjunto);
            for(PermisoConjunto e_permisoConjunto : permisoConjuntos){
                    permisoConjuntoDto = PermisoConjuntoDto.fromEntidad(e_permisoConjunto);
                    permisoConjuntoDto = lazyInjectionEntidadObjetos(e_permisoConjunto, permisoConjuntoDto);
		       permisoConjuntoDtos.add(permisoConjuntoDto);
            }
	       return permisoConjuntoDtos ;
    }
    @Override
    public PermisoConjuntoDto getPermisoConjuntoByStatus(java.lang.Integer status)   throws SitteecException   {
        PermisoConjuntoDto permisoConjuntoDto = new PermisoConjuntoDto();
            PermisoConjunto e_permisoConjunto = permisoConjuntoDao.getPermisoConjuntoByStatus(status);
            if(e_permisoConjunto != null){
                    permisoConjuntoDto = PermisoConjuntoDto.fromEntidad(e_permisoConjunto);
                    permisoConjuntoDto = lazyInjectionEntidadObjetos(e_permisoConjunto, permisoConjuntoDto);
            }
            return permisoConjuntoDto;
    }
    @Override
    public List<PermisoConjuntoDto> getPermisoConjuntosByStatus(java.lang.Integer status)  throws SitteecException   {
        List<PermisoConjuntoDto> permisoConjuntoDtos = new ArrayList<PermisoConjuntoDto>();
        PermisoConjuntoDto permisoConjuntoDto = new PermisoConjuntoDto();
            List<PermisoConjunto>permisoConjuntos = permisoConjuntoDao.getPermisoConjuntosByStatus(status);
            for(PermisoConjunto e_permisoConjunto : permisoConjuntos){
                    permisoConjuntoDto = PermisoConjuntoDto.fromEntidad(e_permisoConjunto);
                    permisoConjuntoDto = lazyInjectionEntidadObjetos(e_permisoConjunto, permisoConjuntoDto);
		       permisoConjuntoDtos.add(permisoConjuntoDto);
            }
	       return permisoConjuntoDtos ;
    }
    @Override
    public PermisoConjuntoDto getPermisoConjuntoByUsuarioUltMov(UsuarioDto p_usuarioUltMov)   throws SitteecException   {
        PermisoConjuntoDto permisoConjuntoDto = new PermisoConjuntoDto();
            PermisoConjunto e_permisoConjunto = permisoConjuntoDao.getPermisoConjuntoByUsuarioUltMov(p_usuarioUltMov);
            if(e_permisoConjunto != null){
                    permisoConjuntoDto = PermisoConjuntoDto.fromEntidad(e_permisoConjunto);
                    permisoConjuntoDto = lazyInjectionEntidadObjetos(e_permisoConjunto, permisoConjuntoDto);
            }
            return permisoConjuntoDto;
    }
    @Override
    public List<PermisoConjuntoDto> getPermisoConjuntosByUsuarioUltMov(UsuarioDto p_usuarioUltMov)   throws SitteecException  {
        List<PermisoConjuntoDto> permisoConjuntoDtos = new ArrayList<PermisoConjuntoDto>();
        PermisoConjuntoDto permisoConjuntoDto = new PermisoConjuntoDto();
            List<PermisoConjunto>permisoConjuntos = permisoConjuntoDao.getPermisoConjuntosByUsuarioUltMov(p_usuarioUltMov);
            for(PermisoConjunto e_permisoConjunto : permisoConjuntos){
                    permisoConjuntoDto = PermisoConjuntoDto.fromEntidad(e_permisoConjunto);
                    permisoConjuntoDto = lazyInjectionEntidadObjetos(e_permisoConjunto, permisoConjuntoDto);
		       permisoConjuntoDtos.add(permisoConjuntoDto);
            }
	       return permisoConjuntoDtos ;
    }
    @Override
    public PermisoConjuntoDto getPermisoConjuntoByUsuario(UsuarioDto p_usuario)   throws SitteecException   {
        PermisoConjuntoDto permisoConjuntoDto = new PermisoConjuntoDto();
            PermisoConjunto e_permisoConjunto = permisoConjuntoDao.getPermisoConjuntoByUsuario(p_usuario);
            if(e_permisoConjunto != null){
                    permisoConjuntoDto = PermisoConjuntoDto.fromEntidad(e_permisoConjunto);
                    permisoConjuntoDto = lazyInjectionEntidadObjetos(e_permisoConjunto, permisoConjuntoDto);
            }
            return permisoConjuntoDto;
    }
    @Override
    public List<PermisoConjuntoDto> getPermisoConjuntosByUsuario(UsuarioDto p_usuario)   throws SitteecException  {
        List<PermisoConjuntoDto> permisoConjuntoDtos = new ArrayList<PermisoConjuntoDto>();
        PermisoConjuntoDto permisoConjuntoDto = new PermisoConjuntoDto();
            List<PermisoConjunto>permisoConjuntos = permisoConjuntoDao.getPermisoConjuntosByUsuario(p_usuario);
            for(PermisoConjunto e_permisoConjunto : permisoConjuntos){
                    permisoConjuntoDto = PermisoConjuntoDto.fromEntidad(e_permisoConjunto);
                    permisoConjuntoDto = lazyInjectionEntidadObjetos(e_permisoConjunto, permisoConjuntoDto);
		       permisoConjuntoDtos.add(permisoConjuntoDto);
            }
	       return permisoConjuntoDtos ;
    }
// busquedas por atributos  fin
   @Override
   public PermisoConjuntoDto lazyInjection (PermisoConjuntoDto dto )   throws SitteecException  {
		PermisoConjunto PEentidad = permisoConjuntoDao.get(dto.getId_());
		PermisoConjuntoDto salida = PermisoConjuntoDto.fromEntidad(PEentidad);
		salida =lazyInjectionEntidadObjetos(PEentidad,salida);
		salida =lazyInjectionEntidadConjuntos(PEentidad,salida); 
		return salida;
   }
   @Override
   public PermisoConjuntoDto lazyInjectionObjetos (PermisoConjuntoDto dto )  throws SitteecException  {
		PermisoConjunto PEentidad = permisoConjuntoDao.get(dto.getId_());
		PermisoConjuntoDto salida = PermisoConjuntoDto.fromEntidad(PEentidad);
		salida =lazyInjectionEntidadObjetos(PEentidad,salida);
		return salida;
   }
   @Override
   public PermisoConjuntoDto lazyInjectionConjuntos (PermisoConjuntoDto dto )  throws SitteecException  {
		PermisoConjunto PEentidad = permisoConjuntoDao.get(dto.getId_());
		PermisoConjuntoDto salida = PermisoConjuntoDto.fromEntidad(PEentidad);
		salida =lazyInjectionEntidadConjuntos(PEentidad,salida); 
		return salida;
   }
   @Override
   public PermisoConjuntoDto lazyInjectionEntidadObjetos (PermisoConjunto PEentidad, PermisoConjuntoDto salida )  throws SitteecException  {
	   if (PEentidad.getUsuarioUltMov() !=null )  
          salida.setUsuarioUltMov(UsuarioDto.fromEntidad(PEentidad.getUsuarioUltMov()));  
	   if (PEentidad.getUsuario() !=null )  
          salida.setUsuario(UsuarioDto.fromEntidad(PEentidad.getUsuario()));  
		return salida;
   }
   @Override
   public PermisoConjuntoDto lazyInjectionEntidadConjuntos (PermisoConjunto PEentidad, PermisoConjuntoDto salida )  throws SitteecException  {
	   salida.setPerfiles(new HashSet(getPerfiles (PermisoConjuntoDto.fromEntidad(PEentidad) ))) ;
		return salida;
   }
   @Override
   public PermisoConjuntoDto lazyInjectionEntidadObjetosDto (PermisoConjuntoDto PEentidad, PermisoConjuntoDto salida )  throws SitteecException  {
	   salida.setUsuarioUltMov( PEentidad.getUsuarioUltMov());  
	   salida.setUsuario( PEentidad.getUsuario());  
		return salida;
   }
   @Override
   public PermisoConjuntoDto lazyInjectionEntidadConjuntosDto (PermisoConjuntoDto PEentidad, PermisoConjuntoDto salida )  throws SitteecException  {
	   Iterator iteratorPerfiles = PEentidad.getPerfiles().iterator();
	   while(iteratorPerfiles.hasNext())
		 salida.getPerfiles().add( (PerfilDto) iteratorPerfiles.next());
		return salida;
   }
   @Override
   public PermisoConjuntoDto lazyInjectionEntidad (PermisoConjunto PEentidad )  throws SitteecException  {
		PermisoConjuntoDto salida = PermisoConjuntoDto.fromEntidad(PEentidad);
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
    public List<PerfilDto> getPerfiles(PermisoConjuntoDto permisoConjuntoDto)  throws SitteecException  {
        PermisoConjunto permisoConjunto = permisoConjuntoDao.get(permisoConjuntoDto.getId_());
        List<PerfilDto> perfilDtos = new ArrayList<PerfilDto>();
        PerfilDto perfilDto = new PerfilDto();
        try{
                 List<Perfil>perfiles = new ArrayList<Perfil> (permisoConjunto.getPerfiles());
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
    public PerfilDto addPerfiles(PermisoConjuntoDto permisoConjuntoDto, PerfilDto perfilDto)  throws SitteecException  {
        PermisoConjunto permisoConjunto = permisoConjuntoDao.get(permisoConjuntoDto.getId_());
        Perfil perfil = null;
        if (perfilDto.getId_() == null) {
                perfilDto.setId_(perfilDao.save(perfilDto.toEntidad()));
            perfil = perfilDto.toEntidad();
        } else {
            perfil = perfilDao.get(perfilDto.getId_());
            perfilDto = PerfilDto.fromEntidad(perfil);
        }
            permisoConjunto.getPerfiles().add(perfil);
            permisoConjuntoDao.update(permisoConjunto);
        return perfilDto;
    }  
    @Override
    public PerfilDto removePerfiles(PermisoConjuntoDto permisoConjuntoDto, PerfilDto perfilDto)   throws SitteecException  {
    	PermisoConjunto permisoConjunto = permisoConjuntoDao.get(permisoConjuntoDto.getId_());
    	Perfil  perfil = perfilDao.get(perfilDto.getId_());
    	permisoConjunto.getPerfiles().remove(perfil);
    	permisoConjuntoDao.update(permisoConjunto);
        return perfilDto;
    }  

    @Override
    public List<PermisoConjuntoDto> custom(String consulta) throws SitteecException{
        List<PermisoConjunto> permisoConjuntos;
        List<PermisoConjuntoDto> permisoConjuntoDtos = new ArrayList<PermisoConjuntoDto>();
            permisoConjuntos = permisoConjuntoDao.custom(consulta);
            for (PermisoConjunto permisoConjunto : permisoConjuntos) {
                PermisoConjuntoDto permisoConjuntoDto = PermisoConjuntoDto.fromEntidad(permisoConjunto);
                permisoConjuntoDto = lazyInjectionEntidadObjetos(permisoConjunto, permisoConjuntoDto);
                permisoConjuntoDtos.add(permisoConjuntoDto);
            }
            return permisoConjuntoDtos;
    }

    public List<PermisoConjuntoDto> getPermisoConjuntosByDto(PermisoConjuntoDto p_permisoConjunto) throws SitteecException{
        List<PermisoConjunto> permisoConjuntos;
        List<PermisoConjuntoDto> permisoConjuntoDtos = new ArrayList<PermisoConjuntoDto>();
            permisoConjuntos = permisoConjuntoDao.getPermisoConjuntosByDto( p_permisoConjunto);
            for (PermisoConjunto permisoConjunto : permisoConjuntos) {
                PermisoConjuntoDto permisoConjuntoDto = PermisoConjuntoDto.fromEntidad(permisoConjunto);
                permisoConjuntoDto = lazyInjectionEntidadObjetos(permisoConjunto, permisoConjuntoDto);
                permisoConjuntoDtos.add(permisoConjuntoDto);
            }
            return permisoConjuntoDtos;
    }
    
}
