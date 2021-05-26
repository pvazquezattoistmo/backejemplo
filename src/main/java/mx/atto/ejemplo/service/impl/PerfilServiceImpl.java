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
@Service("perfilService")
@Transactional(value = "hibernateTransactionManager")
public class PerfilServiceImpl implements IPerfilService {

    private Logger log = Logger.getLogger(PerfilServiceImpl.class);

    @Autowired
    private IPerfilDao perfilDao;

    @Override
    public PerfilDto guardarPerfil(PerfilDto dto) throws SitteecException{
        Perfil perfil = dto.toDefault().toEntidad();
            dto.setId_(   perfilDao.save(perfil));
            return dto;
    }
    @Override
    public List<PerfilDto> guardarListaPerfil(List<PerfilDto> dtos) throws SitteecException{
            for (PerfilDto dto : dtos) {
                Perfil perfil = dto.toDefault().toEntidad();
                dto.setId_( perfilDao.save(perfil));
            }
            return dtos;
    }
    
    @Override
    public boolean actualizarPerfil(PerfilDto dto) throws SitteecException{
        PerfilDto aux= lazyInjectionEntidadConjuntos(dto.toDefault().toEntidad(),dto);
        Perfil perfil = aux.toDefault().toEntidad();
            perfilDao.update(perfil);
            return true;
    }
   
    @Override
    public List<PerfilDto> actualizarListaPerfil(List<PerfilDto> dtos) throws SitteecException{
            for (PerfilDto dto : dtos) {
                Perfil perfil = dto.toDefault().toEntidad();
                perfilDao.update(perfil);
            }
            return dtos;
    }
    @Override    
    public HashMap <Integer,Integer> actualizarClaves(HashMap<Integer,Integer> claves) throws SitteecException{
        Iterator it= claves.entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry elemento = (Map.Entry)it.next();
            Perfil perfil  = perfilDao.get( (Integer) elemento.getKey());
            perfil.setId((Integer) elemento.getValue());
            perfilDao.update(perfil);
        }
        return claves;
    }
    @Override
    public boolean eliminarPerfil(PerfilDto dto) throws SitteecException {
        Perfil perfil = dto.toDefault().toEntidad();
            perfilDao.delete(perfil);
            return true;
    }
    @Override   
    public List<PerfilDto> eliminarListaPerfil(List<PerfilDto> dtos) throws SitteecException{
            for (PerfilDto dto : dtos) {
                Perfil perfil = dto.toDefault().toEntidad();
                perfilDao.delete(perfil);
            }
            return dtos;
    }
    @Override
    public PerfilDto getPerfil(Integer id) throws SitteecException{
        PerfilDto perfilDto = new PerfilDto();
            Perfil perfil = perfilDao.get(id);
            if (perfil!= null){
                perfilDto = PerfilDto.fromEntidad(perfil);
                perfilDto = lazyInjectionEntidadObjetos(perfil, perfilDto);
                }
            return perfilDto;
    }

    @Override
    public List<PerfilDto> getPerfiles() throws SitteecException{
        List<Perfil> perfiles;
        List<PerfilDto> perfilDtos = new ArrayList<PerfilDto>();
            perfiles = perfilDao.getList();
            for (Perfil perfil : perfiles) {
                PerfilDto perfilDto = PerfilDto.fromEntidad(perfil);
                perfilDto = lazyInjectionEntidadObjetos(perfil, perfilDto);
                perfilDtos.add(perfilDto);
            }
            return perfilDtos;
    }
	
// busquedas por atributos  inicio
    @Override
    public PerfilDto getPerfilById(Integer id)  throws SitteecException  {
        PerfilDto perfilDto = new PerfilDto();
            Perfil e_perfil = perfilDao.getPerfilById(id);
            if(e_perfil != null){
                    perfilDto = PerfilDto.fromEntidad(e_perfil);
                    perfilDto = lazyInjectionEntidadObjetos(e_perfil, perfilDto);
            }
            return perfilDto;
    }
    @Override
    public List<PerfilDto> getPerfilesById(Integer id)  throws SitteecException  {
        List<PerfilDto> perfilDtos = new ArrayList<PerfilDto>();
        PerfilDto perfilDto = new PerfilDto();
            List<Perfil>perfiles = perfilDao.getPerfilesById(id);
            for(Perfil e_perfil : perfiles){
                    perfilDto = PerfilDto.fromEntidad(e_perfil);
                    perfilDto = lazyInjectionEntidadObjetos(e_perfil, perfilDto);
		       perfilDtos.add(perfilDto);
            }
	       return perfilDtos ;
    }
    @Override
    public PerfilDto getPerfilByDescripcion(String descripcion)   throws SitteecException   {
        PerfilDto perfilDto = new PerfilDto();
            Perfil e_perfil = perfilDao.getPerfilByDescripcion(descripcion);
            if(e_perfil != null){
                    perfilDto = PerfilDto.fromEntidad(e_perfil);
                    perfilDto = lazyInjectionEntidadObjetos(e_perfil, perfilDto);
            }
            return perfilDto;
    }
    @Override
    public List<PerfilDto> getPerfilesByDescripcion(String descripcion)  throws SitteecException   {
        List<PerfilDto> perfilDtos = new ArrayList<PerfilDto>();
        PerfilDto perfilDto = new PerfilDto();
            List<Perfil>perfiles = perfilDao.getPerfilesByDescripcion(descripcion);
            for(Perfil e_perfil : perfiles){
                    perfilDto = PerfilDto.fromEntidad(e_perfil);
                    perfilDto = lazyInjectionEntidadObjetos(e_perfil, perfilDto);
		       perfilDtos.add(perfilDto);
            }
	       return perfilDtos ;
    }
    @Override
    public PerfilDto getPerfilByRuta(String ruta)   throws SitteecException   {
        PerfilDto perfilDto = new PerfilDto();
            Perfil e_perfil = perfilDao.getPerfilByRuta(ruta);
            if(e_perfil != null){
                    perfilDto = PerfilDto.fromEntidad(e_perfil);
                    perfilDto = lazyInjectionEntidadObjetos(e_perfil, perfilDto);
            }
            return perfilDto;
    }
    @Override
    public List<PerfilDto> getPerfilesByRuta(String ruta)  throws SitteecException   {
        List<PerfilDto> perfilDtos = new ArrayList<PerfilDto>();
        PerfilDto perfilDto = new PerfilDto();
            List<Perfil>perfiles = perfilDao.getPerfilesByRuta(ruta);
            for(Perfil e_perfil : perfiles){
                    perfilDto = PerfilDto.fromEntidad(e_perfil);
                    perfilDto = lazyInjectionEntidadObjetos(e_perfil, perfilDto);
		       perfilDtos.add(perfilDto);
            }
	       return perfilDtos ;
    }
    @Override
    public PerfilDto getPerfilByNombre(String nombre)   throws SitteecException   {
        PerfilDto perfilDto = new PerfilDto();
            Perfil e_perfil = perfilDao.getPerfilByNombre(nombre);
            if(e_perfil != null){
                    perfilDto = PerfilDto.fromEntidad(e_perfil);
                    perfilDto = lazyInjectionEntidadObjetos(e_perfil, perfilDto);
            }
            return perfilDto;
    }
    @Override
    public List<PerfilDto> getPerfilesByNombre(String nombre)  throws SitteecException   {
        List<PerfilDto> perfilDtos = new ArrayList<PerfilDto>();
        PerfilDto perfilDto = new PerfilDto();
            List<Perfil>perfiles = perfilDao.getPerfilesByNombre(nombre);
            for(Perfil e_perfil : perfiles){
                    perfilDto = PerfilDto.fromEntidad(e_perfil);
                    perfilDto = lazyInjectionEntidadObjetos(e_perfil, perfilDto);
		       perfilDtos.add(perfilDto);
            }
	       return perfilDtos ;
    }
    @Override
    public PerfilDto getPerfilByStatus(java.lang.Integer status)   throws SitteecException   {
        PerfilDto perfilDto = new PerfilDto();
            Perfil e_perfil = perfilDao.getPerfilByStatus(status);
            if(e_perfil != null){
                    perfilDto = PerfilDto.fromEntidad(e_perfil);
                    perfilDto = lazyInjectionEntidadObjetos(e_perfil, perfilDto);
            }
            return perfilDto;
    }
    @Override
    public List<PerfilDto> getPerfilesByStatus(java.lang.Integer status)  throws SitteecException   {
        List<PerfilDto> perfilDtos = new ArrayList<PerfilDto>();
        PerfilDto perfilDto = new PerfilDto();
            List<Perfil>perfiles = perfilDao.getPerfilesByStatus(status);
            for(Perfil e_perfil : perfiles){
                    perfilDto = PerfilDto.fromEntidad(e_perfil);
                    perfilDto = lazyInjectionEntidadObjetos(e_perfil, perfilDto);
		       perfilDtos.add(perfilDto);
            }
	       return perfilDtos ;
    }
    @Override
    public PerfilDto getPerfilByUsuarioUltMov(UsuarioDto p_usuarioUltMov)   throws SitteecException   {
        PerfilDto perfilDto = new PerfilDto();
            Perfil e_perfil = perfilDao.getPerfilByUsuarioUltMov(p_usuarioUltMov);
            if(e_perfil != null){
                    perfilDto = PerfilDto.fromEntidad(e_perfil);
                    perfilDto = lazyInjectionEntidadObjetos(e_perfil, perfilDto);
            }
            return perfilDto;
    }
    @Override
    public List<PerfilDto> getPerfilesByUsuarioUltMov(UsuarioDto p_usuarioUltMov)   throws SitteecException  {
        List<PerfilDto> perfilDtos = new ArrayList<PerfilDto>();
        PerfilDto perfilDto = new PerfilDto();
            List<Perfil>perfiles = perfilDao.getPerfilesByUsuarioUltMov(p_usuarioUltMov);
            for(Perfil e_perfil : perfiles){
                    perfilDto = PerfilDto.fromEntidad(e_perfil);
                    perfilDto = lazyInjectionEntidadObjetos(e_perfil, perfilDto);
		       perfilDtos.add(perfilDto);
            }
	       return perfilDtos ;
    }
    @Override
    public PerfilDto getPerfilByUsuario(UsuarioDto p_usuario)   throws SitteecException   {
        PerfilDto perfilDto = new PerfilDto();
            Perfil e_perfil = perfilDao.getPerfilByUsuario(p_usuario);
            if(e_perfil != null){
                    perfilDto = PerfilDto.fromEntidad(e_perfil);
                    perfilDto = lazyInjectionEntidadObjetos(e_perfil, perfilDto);
            }
            return perfilDto;
    }
    @Override
    public List<PerfilDto> getPerfilesByUsuario(UsuarioDto p_usuario)   throws SitteecException  {
        List<PerfilDto> perfilDtos = new ArrayList<PerfilDto>();
        PerfilDto perfilDto = new PerfilDto();
            List<Perfil>perfiles = perfilDao.getPerfilesByUsuario(p_usuario);
            for(Perfil e_perfil : perfiles){
                    perfilDto = PerfilDto.fromEntidad(e_perfil);
                    perfilDto = lazyInjectionEntidadObjetos(e_perfil, perfilDto);
		       perfilDtos.add(perfilDto);
            }
	       return perfilDtos ;
    }
// busquedas por atributos  fin
   @Override
   public PerfilDto lazyInjection (PerfilDto dto )   throws SitteecException  {
		Perfil PEentidad = perfilDao.get(dto.getId_());
		PerfilDto salida = PerfilDto.fromEntidad(PEentidad);
		salida =lazyInjectionEntidadObjetos(PEentidad,salida);
		salida =lazyInjectionEntidadConjuntos(PEentidad,salida); 
		return salida;
   }
   @Override
   public PerfilDto lazyInjectionObjetos (PerfilDto dto )  throws SitteecException  {
		Perfil PEentidad = perfilDao.get(dto.getId_());
		PerfilDto salida = PerfilDto.fromEntidad(PEentidad);
		salida =lazyInjectionEntidadObjetos(PEentidad,salida);
		return salida;
   }
   @Override
   public PerfilDto lazyInjectionConjuntos (PerfilDto dto )  throws SitteecException  {
		Perfil PEentidad = perfilDao.get(dto.getId_());
		PerfilDto salida = PerfilDto.fromEntidad(PEentidad);
		salida =lazyInjectionEntidadConjuntos(PEentidad,salida); 
		return salida;
   }
   @Override
   public PerfilDto lazyInjectionEntidadObjetos (Perfil PEentidad, PerfilDto salida )  throws SitteecException  {
	   if (PEentidad.getUsuarioUltMov() !=null )  
          salida.setUsuarioUltMov(UsuarioDto.fromEntidad(PEentidad.getUsuarioUltMov()));  
	   if (PEentidad.getUsuario() !=null )  
          salida.setUsuario(UsuarioDto.fromEntidad(PEentidad.getUsuario()));  
		return salida;
   }
   @Override
   public PerfilDto lazyInjectionEntidadConjuntos (Perfil PEentidad, PerfilDto salida )  throws SitteecException  {
		return salida;
   }
   @Override
   public PerfilDto lazyInjectionEntidadObjetosDto (PerfilDto PEentidad, PerfilDto salida )  throws SitteecException  {
	   salida.setUsuarioUltMov( PEentidad.getUsuarioUltMov());  
	   salida.setUsuario( PEentidad.getUsuario());  
		return salida;
   }
   @Override
   public PerfilDto lazyInjectionEntidadConjuntosDto (PerfilDto PEentidad, PerfilDto salida )  throws SitteecException  {
		return salida;
   }
   @Override
   public PerfilDto lazyInjectionEntidad (Perfil PEentidad )  throws SitteecException  {
		PerfilDto salida = PerfilDto.fromEntidad(PEentidad);
		salida =lazyInjectionEntidadObjetos(PEentidad,salida);
		salida =lazyInjectionEntidadConjuntos(PEentidad,salida); 
		return salida;
   }


    @Override
    public List<PerfilDto> custom(String consulta) throws SitteecException{
        List<Perfil> perfiles;
        List<PerfilDto> perfilDtos = new ArrayList<PerfilDto>();
            perfiles = perfilDao.custom(consulta);
            for (Perfil perfil : perfiles) {
                PerfilDto perfilDto = PerfilDto.fromEntidad(perfil);
                perfilDto = lazyInjectionEntidadObjetos(perfil, perfilDto);
                perfilDtos.add(perfilDto);
            }
            return perfilDtos;
    }

    public List<PerfilDto> getPerfilesByDto(PerfilDto p_perfil) throws SitteecException{
        List<Perfil> perfiles;
        List<PerfilDto> perfilDtos = new ArrayList<PerfilDto>();
            perfiles = perfilDao.getPerfilesByDto( p_perfil);
            for (Perfil perfil : perfiles) {
                PerfilDto perfilDto = PerfilDto.fromEntidad(perfil);
                perfilDto = lazyInjectionEntidadObjetos(perfil, perfilDto);
                perfilDtos.add(perfilDto);
            }
            return perfilDtos;
    }
    
}
