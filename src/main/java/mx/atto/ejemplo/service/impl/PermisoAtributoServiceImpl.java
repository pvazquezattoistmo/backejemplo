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
@Service("permisoAtributoService")
@Transactional(value = "hibernateTransactionManager")
public class PermisoAtributoServiceImpl implements IPermisoAtributoService {

    private Logger log = Logger.getLogger(PermisoAtributoServiceImpl.class);

    @Autowired
    private IPermisoAtributoDao permisoAtributoDao;

    @Override
    public PermisoAtributoDto guardarPermisoAtributo(PermisoAtributoDto dto) throws SitteecException{
        PermisoAtributo permisoAtributo = dto.toDefault().toEntidad();
            dto.setId_(   permisoAtributoDao.save(permisoAtributo));
            return dto;
    }
    @Override
    public List<PermisoAtributoDto> guardarListaPermisoAtributo(List<PermisoAtributoDto> dtos) throws SitteecException{
            for (PermisoAtributoDto dto : dtos) {
                PermisoAtributo permisoAtributo = dto.toDefault().toEntidad();
                dto.setId_( permisoAtributoDao.save(permisoAtributo));
            }
            return dtos;
    }
    
    @Override
    public boolean actualizarPermisoAtributo(PermisoAtributoDto dto) throws SitteecException{
        PermisoAtributoDto aux= lazyInjectionEntidadConjuntos(dto.toDefault().toEntidad(),dto);
        PermisoAtributo permisoAtributo = aux.toDefault().toEntidad();
            permisoAtributoDao.update(permisoAtributo);
            return true;
    }
   
    @Override
    public List<PermisoAtributoDto> actualizarListaPermisoAtributo(List<PermisoAtributoDto> dtos) throws SitteecException{
            for (PermisoAtributoDto dto : dtos) {
                PermisoAtributo permisoAtributo = dto.toDefault().toEntidad();
                permisoAtributoDao.update(permisoAtributo);
            }
            return dtos;
    }
    @Override    
    public HashMap <Integer,Integer> actualizarClaves(HashMap<Integer,Integer> claves) throws SitteecException{
        Iterator it= claves.entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry elemento = (Map.Entry)it.next();
            PermisoAtributo permisoAtributo  = permisoAtributoDao.get( (Integer) elemento.getKey());
            permisoAtributo.setId((Integer) elemento.getValue());
            permisoAtributoDao.update(permisoAtributo);
        }
        return claves;
    }
    @Override
    public boolean eliminarPermisoAtributo(PermisoAtributoDto dto) throws SitteecException {
        PermisoAtributo permisoAtributo = dto.toDefault().toEntidad();
            permisoAtributoDao.delete(permisoAtributo);
            return true;
    }
    @Override   
    public List<PermisoAtributoDto> eliminarListaPermisoAtributo(List<PermisoAtributoDto> dtos) throws SitteecException{
            for (PermisoAtributoDto dto : dtos) {
                PermisoAtributo permisoAtributo = dto.toDefault().toEntidad();
                permisoAtributoDao.delete(permisoAtributo);
            }
            return dtos;
    }
    @Override
    public PermisoAtributoDto getPermisoAtributo(Integer id) throws SitteecException{
        PermisoAtributoDto permisoAtributoDto = new PermisoAtributoDto();
            PermisoAtributo permisoAtributo = permisoAtributoDao.get(id);
            if (permisoAtributo!= null){
                permisoAtributoDto = PermisoAtributoDto.fromEntidad(permisoAtributo);
                permisoAtributoDto = lazyInjectionEntidadObjetos(permisoAtributo, permisoAtributoDto);
                }
            return permisoAtributoDto;
    }

    @Override
    public List<PermisoAtributoDto> getPermisoAtributos() throws SitteecException{
        List<PermisoAtributo> permisoAtributos;
        List<PermisoAtributoDto> permisoAtributoDtos = new ArrayList<PermisoAtributoDto>();
            permisoAtributos = permisoAtributoDao.getList();
            for (PermisoAtributo permisoAtributo : permisoAtributos) {
                PermisoAtributoDto permisoAtributoDto = PermisoAtributoDto.fromEntidad(permisoAtributo);
                permisoAtributoDto = lazyInjectionEntidadObjetos(permisoAtributo, permisoAtributoDto);
                permisoAtributoDtos.add(permisoAtributoDto);
            }
            return permisoAtributoDtos;
    }
	
// busquedas por atributos  inicio
    @Override
    public PermisoAtributoDto getPermisoAtributoById(Integer id)  throws SitteecException  {
        PermisoAtributoDto permisoAtributoDto = new PermisoAtributoDto();
            PermisoAtributo e_permisoAtributo = permisoAtributoDao.getPermisoAtributoById(id);
            if(e_permisoAtributo != null){
                    permisoAtributoDto = PermisoAtributoDto.fromEntidad(e_permisoAtributo);
                    permisoAtributoDto = lazyInjectionEntidadObjetos(e_permisoAtributo, permisoAtributoDto);
            }
            return permisoAtributoDto;
    }
    @Override
    public List<PermisoAtributoDto> getPermisoAtributosById(Integer id)  throws SitteecException  {
        List<PermisoAtributoDto> permisoAtributoDtos = new ArrayList<PermisoAtributoDto>();
        PermisoAtributoDto permisoAtributoDto = new PermisoAtributoDto();
            List<PermisoAtributo>permisoAtributos = permisoAtributoDao.getPermisoAtributosById(id);
            for(PermisoAtributo e_permisoAtributo : permisoAtributos){
                    permisoAtributoDto = PermisoAtributoDto.fromEntidad(e_permisoAtributo);
                    permisoAtributoDto = lazyInjectionEntidadObjetos(e_permisoAtributo, permisoAtributoDto);
		       permisoAtributoDtos.add(permisoAtributoDto);
            }
	       return permisoAtributoDtos ;
    }
    @Override
    public PermisoAtributoDto getPermisoAtributoByEtiqueta(String etiqueta)   throws SitteecException   {
        PermisoAtributoDto permisoAtributoDto = new PermisoAtributoDto();
            PermisoAtributo e_permisoAtributo = permisoAtributoDao.getPermisoAtributoByEtiqueta(etiqueta);
            if(e_permisoAtributo != null){
                    permisoAtributoDto = PermisoAtributoDto.fromEntidad(e_permisoAtributo);
                    permisoAtributoDto = lazyInjectionEntidadObjetos(e_permisoAtributo, permisoAtributoDto);
            }
            return permisoAtributoDto;
    }
    @Override
    public List<PermisoAtributoDto> getPermisoAtributosByEtiqueta(String etiqueta)  throws SitteecException   {
        List<PermisoAtributoDto> permisoAtributoDtos = new ArrayList<PermisoAtributoDto>();
        PermisoAtributoDto permisoAtributoDto = new PermisoAtributoDto();
            List<PermisoAtributo>permisoAtributos = permisoAtributoDao.getPermisoAtributosByEtiqueta(etiqueta);
            for(PermisoAtributo e_permisoAtributo : permisoAtributos){
                    permisoAtributoDto = PermisoAtributoDto.fromEntidad(e_permisoAtributo);
                    permisoAtributoDto = lazyInjectionEntidadObjetos(e_permisoAtributo, permisoAtributoDto);
		       permisoAtributoDtos.add(permisoAtributoDto);
            }
	       return permisoAtributoDtos ;
    }
    @Override
    public PermisoAtributoDto getPermisoAtributoByValidacion(String validacion)   throws SitteecException   {
        PermisoAtributoDto permisoAtributoDto = new PermisoAtributoDto();
            PermisoAtributo e_permisoAtributo = permisoAtributoDao.getPermisoAtributoByValidacion(validacion);
            if(e_permisoAtributo != null){
                    permisoAtributoDto = PermisoAtributoDto.fromEntidad(e_permisoAtributo);
                    permisoAtributoDto = lazyInjectionEntidadObjetos(e_permisoAtributo, permisoAtributoDto);
            }
            return permisoAtributoDto;
    }
    @Override
    public List<PermisoAtributoDto> getPermisoAtributosByValidacion(String validacion)  throws SitteecException   {
        List<PermisoAtributoDto> permisoAtributoDtos = new ArrayList<PermisoAtributoDto>();
        PermisoAtributoDto permisoAtributoDto = new PermisoAtributoDto();
            List<PermisoAtributo>permisoAtributos = permisoAtributoDao.getPermisoAtributosByValidacion(validacion);
            for(PermisoAtributo e_permisoAtributo : permisoAtributos){
                    permisoAtributoDto = PermisoAtributoDto.fromEntidad(e_permisoAtributo);
                    permisoAtributoDto = lazyInjectionEntidadObjetos(e_permisoAtributo, permisoAtributoDto);
		       permisoAtributoDtos.add(permisoAtributoDto);
            }
	       return permisoAtributoDtos ;
    }
    @Override
    public PermisoAtributoDto getPermisoAtributoByPermiso(java.lang.Integer permiso)   throws SitteecException   {
        PermisoAtributoDto permisoAtributoDto = new PermisoAtributoDto();
            PermisoAtributo e_permisoAtributo = permisoAtributoDao.getPermisoAtributoByPermiso(permiso);
            if(e_permisoAtributo != null){
                    permisoAtributoDto = PermisoAtributoDto.fromEntidad(e_permisoAtributo);
                    permisoAtributoDto = lazyInjectionEntidadObjetos(e_permisoAtributo, permisoAtributoDto);
            }
            return permisoAtributoDto;
    }
    @Override
    public List<PermisoAtributoDto> getPermisoAtributosByPermiso(java.lang.Integer permiso)  throws SitteecException   {
        List<PermisoAtributoDto> permisoAtributoDtos = new ArrayList<PermisoAtributoDto>();
        PermisoAtributoDto permisoAtributoDto = new PermisoAtributoDto();
            List<PermisoAtributo>permisoAtributos = permisoAtributoDao.getPermisoAtributosByPermiso(permiso);
            for(PermisoAtributo e_permisoAtributo : permisoAtributos){
                    permisoAtributoDto = PermisoAtributoDto.fromEntidad(e_permisoAtributo);
                    permisoAtributoDto = lazyInjectionEntidadObjetos(e_permisoAtributo, permisoAtributoDto);
		       permisoAtributoDtos.add(permisoAtributoDto);
            }
	       return permisoAtributoDtos ;
    }
    @Override
    public PermisoAtributoDto getPermisoAtributoByTabla(String tabla)   throws SitteecException   {
        PermisoAtributoDto permisoAtributoDto = new PermisoAtributoDto();
            PermisoAtributo e_permisoAtributo = permisoAtributoDao.getPermisoAtributoByTabla(tabla);
            if(e_permisoAtributo != null){
                    permisoAtributoDto = PermisoAtributoDto.fromEntidad(e_permisoAtributo);
                    permisoAtributoDto = lazyInjectionEntidadObjetos(e_permisoAtributo, permisoAtributoDto);
            }
            return permisoAtributoDto;
    }
    @Override
    public List<PermisoAtributoDto> getPermisoAtributosByTabla(String tabla)  throws SitteecException   {
        List<PermisoAtributoDto> permisoAtributoDtos = new ArrayList<PermisoAtributoDto>();
        PermisoAtributoDto permisoAtributoDto = new PermisoAtributoDto();
            List<PermisoAtributo>permisoAtributos = permisoAtributoDao.getPermisoAtributosByTabla(tabla);
            for(PermisoAtributo e_permisoAtributo : permisoAtributos){
                    permisoAtributoDto = PermisoAtributoDto.fromEntidad(e_permisoAtributo);
                    permisoAtributoDto = lazyInjectionEntidadObjetos(e_permisoAtributo, permisoAtributoDto);
		       permisoAtributoDtos.add(permisoAtributoDto);
            }
	       return permisoAtributoDtos ;
    }
    @Override
    public PermisoAtributoDto getPermisoAtributoByAtributo(String atributo)   throws SitteecException   {
        PermisoAtributoDto permisoAtributoDto = new PermisoAtributoDto();
            PermisoAtributo e_permisoAtributo = permisoAtributoDao.getPermisoAtributoByAtributo(atributo);
            if(e_permisoAtributo != null){
                    permisoAtributoDto = PermisoAtributoDto.fromEntidad(e_permisoAtributo);
                    permisoAtributoDto = lazyInjectionEntidadObjetos(e_permisoAtributo, permisoAtributoDto);
            }
            return permisoAtributoDto;
    }
    @Override
    public List<PermisoAtributoDto> getPermisoAtributosByAtributo(String atributo)  throws SitteecException   {
        List<PermisoAtributoDto> permisoAtributoDtos = new ArrayList<PermisoAtributoDto>();
        PermisoAtributoDto permisoAtributoDto = new PermisoAtributoDto();
            List<PermisoAtributo>permisoAtributos = permisoAtributoDao.getPermisoAtributosByAtributo(atributo);
            for(PermisoAtributo e_permisoAtributo : permisoAtributos){
                    permisoAtributoDto = PermisoAtributoDto.fromEntidad(e_permisoAtributo);
                    permisoAtributoDto = lazyInjectionEntidadObjetos(e_permisoAtributo, permisoAtributoDto);
		       permisoAtributoDtos.add(permisoAtributoDto);
            }
	       return permisoAtributoDtos ;
    }
    @Override
    public PermisoAtributoDto getPermisoAtributoByMensaje(String mensaje)   throws SitteecException   {
        PermisoAtributoDto permisoAtributoDto = new PermisoAtributoDto();
            PermisoAtributo e_permisoAtributo = permisoAtributoDao.getPermisoAtributoByMensaje(mensaje);
            if(e_permisoAtributo != null){
                    permisoAtributoDto = PermisoAtributoDto.fromEntidad(e_permisoAtributo);
                    permisoAtributoDto = lazyInjectionEntidadObjetos(e_permisoAtributo, permisoAtributoDto);
            }
            return permisoAtributoDto;
    }
    @Override
    public List<PermisoAtributoDto> getPermisoAtributosByMensaje(String mensaje)  throws SitteecException   {
        List<PermisoAtributoDto> permisoAtributoDtos = new ArrayList<PermisoAtributoDto>();
        PermisoAtributoDto permisoAtributoDto = new PermisoAtributoDto();
            List<PermisoAtributo>permisoAtributos = permisoAtributoDao.getPermisoAtributosByMensaje(mensaje);
            for(PermisoAtributo e_permisoAtributo : permisoAtributos){
                    permisoAtributoDto = PermisoAtributoDto.fromEntidad(e_permisoAtributo);
                    permisoAtributoDto = lazyInjectionEntidadObjetos(e_permisoAtributo, permisoAtributoDto);
		       permisoAtributoDtos.add(permisoAtributoDto);
            }
	       return permisoAtributoDtos ;
    }
    @Override
    public PermisoAtributoDto getPermisoAtributoByStatus(java.lang.Integer status)   throws SitteecException   {
        PermisoAtributoDto permisoAtributoDto = new PermisoAtributoDto();
            PermisoAtributo e_permisoAtributo = permisoAtributoDao.getPermisoAtributoByStatus(status);
            if(e_permisoAtributo != null){
                    permisoAtributoDto = PermisoAtributoDto.fromEntidad(e_permisoAtributo);
                    permisoAtributoDto = lazyInjectionEntidadObjetos(e_permisoAtributo, permisoAtributoDto);
            }
            return permisoAtributoDto;
    }
    @Override
    public List<PermisoAtributoDto> getPermisoAtributosByStatus(java.lang.Integer status)  throws SitteecException   {
        List<PermisoAtributoDto> permisoAtributoDtos = new ArrayList<PermisoAtributoDto>();
        PermisoAtributoDto permisoAtributoDto = new PermisoAtributoDto();
            List<PermisoAtributo>permisoAtributos = permisoAtributoDao.getPermisoAtributosByStatus(status);
            for(PermisoAtributo e_permisoAtributo : permisoAtributos){
                    permisoAtributoDto = PermisoAtributoDto.fromEntidad(e_permisoAtributo);
                    permisoAtributoDto = lazyInjectionEntidadObjetos(e_permisoAtributo, permisoAtributoDto);
		       permisoAtributoDtos.add(permisoAtributoDto);
            }
	       return permisoAtributoDtos ;
    }
    @Override
    public PermisoAtributoDto getPermisoAtributoByUsuarioUltMov(UsuarioDto p_usuarioUltMov)   throws SitteecException   {
        PermisoAtributoDto permisoAtributoDto = new PermisoAtributoDto();
            PermisoAtributo e_permisoAtributo = permisoAtributoDao.getPermisoAtributoByUsuarioUltMov(p_usuarioUltMov);
            if(e_permisoAtributo != null){
                    permisoAtributoDto = PermisoAtributoDto.fromEntidad(e_permisoAtributo);
                    permisoAtributoDto = lazyInjectionEntidadObjetos(e_permisoAtributo, permisoAtributoDto);
            }
            return permisoAtributoDto;
    }
    @Override
    public List<PermisoAtributoDto> getPermisoAtributosByUsuarioUltMov(UsuarioDto p_usuarioUltMov)   throws SitteecException  {
        List<PermisoAtributoDto> permisoAtributoDtos = new ArrayList<PermisoAtributoDto>();
        PermisoAtributoDto permisoAtributoDto = new PermisoAtributoDto();
            List<PermisoAtributo>permisoAtributos = permisoAtributoDao.getPermisoAtributosByUsuarioUltMov(p_usuarioUltMov);
            for(PermisoAtributo e_permisoAtributo : permisoAtributos){
                    permisoAtributoDto = PermisoAtributoDto.fromEntidad(e_permisoAtributo);
                    permisoAtributoDto = lazyInjectionEntidadObjetos(e_permisoAtributo, permisoAtributoDto);
		       permisoAtributoDtos.add(permisoAtributoDto);
            }
	       return permisoAtributoDtos ;
    }
    @Override
    public PermisoAtributoDto getPermisoAtributoByUsuario(UsuarioDto p_usuario)   throws SitteecException   {
        PermisoAtributoDto permisoAtributoDto = new PermisoAtributoDto();
            PermisoAtributo e_permisoAtributo = permisoAtributoDao.getPermisoAtributoByUsuario(p_usuario);
            if(e_permisoAtributo != null){
                    permisoAtributoDto = PermisoAtributoDto.fromEntidad(e_permisoAtributo);
                    permisoAtributoDto = lazyInjectionEntidadObjetos(e_permisoAtributo, permisoAtributoDto);
            }
            return permisoAtributoDto;
    }
    @Override
    public List<PermisoAtributoDto> getPermisoAtributosByUsuario(UsuarioDto p_usuario)   throws SitteecException  {
        List<PermisoAtributoDto> permisoAtributoDtos = new ArrayList<PermisoAtributoDto>();
        PermisoAtributoDto permisoAtributoDto = new PermisoAtributoDto();
            List<PermisoAtributo>permisoAtributos = permisoAtributoDao.getPermisoAtributosByUsuario(p_usuario);
            for(PermisoAtributo e_permisoAtributo : permisoAtributos){
                    permisoAtributoDto = PermisoAtributoDto.fromEntidad(e_permisoAtributo);
                    permisoAtributoDto = lazyInjectionEntidadObjetos(e_permisoAtributo, permisoAtributoDto);
		       permisoAtributoDtos.add(permisoAtributoDto);
            }
	       return permisoAtributoDtos ;
    }
// busquedas por atributos  fin
   @Override
   public PermisoAtributoDto lazyInjection (PermisoAtributoDto dto )   throws SitteecException  {
		PermisoAtributo PEentidad = permisoAtributoDao.get(dto.getId_());
		PermisoAtributoDto salida = PermisoAtributoDto.fromEntidad(PEentidad);
		salida =lazyInjectionEntidadObjetos(PEentidad,salida);
		salida =lazyInjectionEntidadConjuntos(PEentidad,salida); 
		return salida;
   }
   @Override
   public PermisoAtributoDto lazyInjectionObjetos (PermisoAtributoDto dto )  throws SitteecException  {
		PermisoAtributo PEentidad = permisoAtributoDao.get(dto.getId_());
		PermisoAtributoDto salida = PermisoAtributoDto.fromEntidad(PEentidad);
		salida =lazyInjectionEntidadObjetos(PEentidad,salida);
		return salida;
   }
   @Override
   public PermisoAtributoDto lazyInjectionConjuntos (PermisoAtributoDto dto )  throws SitteecException  {
		PermisoAtributo PEentidad = permisoAtributoDao.get(dto.getId_());
		PermisoAtributoDto salida = PermisoAtributoDto.fromEntidad(PEentidad);
		salida =lazyInjectionEntidadConjuntos(PEentidad,salida); 
		return salida;
   }
   @Override
   public PermisoAtributoDto lazyInjectionEntidadObjetos (PermisoAtributo PEentidad, PermisoAtributoDto salida )  throws SitteecException  {
	   if (PEentidad.getUsuarioUltMov() !=null )  
          salida.setUsuarioUltMov(UsuarioDto.fromEntidad(PEentidad.getUsuarioUltMov()));  
	   if (PEentidad.getUsuario() !=null )  
          salida.setUsuario(UsuarioDto.fromEntidad(PEentidad.getUsuario()));  
		return salida;
   }
   @Override
   public PermisoAtributoDto lazyInjectionEntidadConjuntos (PermisoAtributo PEentidad, PermisoAtributoDto salida )  throws SitteecException  {
	   salida.setPerfiles(new HashSet(getPerfiles (PermisoAtributoDto.fromEntidad(PEentidad) ))) ;
		return salida;
   }
   @Override
   public PermisoAtributoDto lazyInjectionEntidadObjetosDto (PermisoAtributoDto PEentidad, PermisoAtributoDto salida )  throws SitteecException  {
	   salida.setUsuarioUltMov( PEentidad.getUsuarioUltMov());  
	   salida.setUsuario( PEentidad.getUsuario());  
		return salida;
   }
   @Override
   public PermisoAtributoDto lazyInjectionEntidadConjuntosDto (PermisoAtributoDto PEentidad, PermisoAtributoDto salida )  throws SitteecException  {
	   Iterator iteratorPerfiles = PEentidad.getPerfiles().iterator();
	   while(iteratorPerfiles.hasNext())
		 salida.getPerfiles().add( (PerfilDto) iteratorPerfiles.next());
		return salida;
   }
   @Override
   public PermisoAtributoDto lazyInjectionEntidad (PermisoAtributo PEentidad )  throws SitteecException  {
		PermisoAtributoDto salida = PermisoAtributoDto.fromEntidad(PEentidad);
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
    public List<PerfilDto> getPerfiles(PermisoAtributoDto permisoAtributoDto)  throws SitteecException  {
        PermisoAtributo permisoAtributo = permisoAtributoDao.get(permisoAtributoDto.getId_());
        List<PerfilDto> perfilDtos = new ArrayList<PerfilDto>();
        PerfilDto perfilDto = new PerfilDto();
        try {
            List<Perfil>perfiles = new ArrayList<Perfil> (permisoAtributo.getPerfiles());
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
    public PerfilDto addPerfiles(PermisoAtributoDto permisoAtributoDto, PerfilDto perfilDto)  throws SitteecException  {
        PermisoAtributo permisoAtributo = permisoAtributoDao.get(permisoAtributoDto.getId_());
        Perfil perfil = null;
        if (perfilDto.getId_() == null) {
                perfilDto.setId_(perfilDao.save(perfilDto.toEntidad()));
            perfil = perfilDto.toEntidad();
        } else {
            perfil = perfilDao.get(perfilDto.getId_());
            perfilDto = PerfilDto.fromEntidad(perfil);
        }
            permisoAtributo.getPerfiles().add(perfil);
            permisoAtributoDao.update(permisoAtributo);
        return perfilDto;
    }  
    @Override
    public PerfilDto removePerfiles(PermisoAtributoDto permisoAtributoDto, PerfilDto perfilDto)   throws SitteecException  {
    	PermisoAtributo permisoAtributo = permisoAtributoDao.get(permisoAtributoDto.getId_());
    	Perfil  perfil = perfilDao.get(perfilDto.getId_());
    	permisoAtributo.getPerfiles().remove(perfil);
    	permisoAtributoDao.update(permisoAtributo);
        return perfilDto;
    }  

    @Override
    public List<PermisoAtributoDto> custom(String consulta) throws SitteecException{
        List<PermisoAtributo> permisoAtributos;
        List<PermisoAtributoDto> permisoAtributoDtos = new ArrayList<PermisoAtributoDto>();
            permisoAtributos = permisoAtributoDao.custom(consulta);
            for (PermisoAtributo permisoAtributo : permisoAtributos) {
                PermisoAtributoDto permisoAtributoDto = PermisoAtributoDto.fromEntidad(permisoAtributo);
                permisoAtributoDto = lazyInjectionEntidadObjetos(permisoAtributo, permisoAtributoDto);
                permisoAtributoDtos.add(permisoAtributoDto);
            }
            return permisoAtributoDtos;
    }

    public List<PermisoAtributoDto> getPermisoAtributosByDto(PermisoAtributoDto p_permisoAtributo) throws SitteecException{
        List<PermisoAtributo> permisoAtributos;
        List<PermisoAtributoDto> permisoAtributoDtos = new ArrayList<PermisoAtributoDto>();
            permisoAtributos = permisoAtributoDao.getPermisoAtributosByDto( p_permisoAtributo);
            for (PermisoAtributo permisoAtributo : permisoAtributos) {
                PermisoAtributoDto permisoAtributoDto = PermisoAtributoDto.fromEntidad(permisoAtributo);
                permisoAtributoDto = lazyInjectionEntidadObjetos(permisoAtributo, permisoAtributoDto);
                permisoAtributoDtos.add(permisoAtributoDto);
            }
            return permisoAtributoDtos;
    }
    
}
