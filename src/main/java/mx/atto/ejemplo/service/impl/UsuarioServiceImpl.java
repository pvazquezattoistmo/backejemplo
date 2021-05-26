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
@Service("usuarioService")
@Transactional(value = "hibernateTransactionManager")
public class UsuarioServiceImpl implements IUsuarioService {

    private Logger log = Logger.getLogger(UsuarioServiceImpl.class);

    @Autowired
    private IUsuarioDao usuarioDao;
    @Autowired
    private IMailService mailService;

    @Override
    public UsuarioDto guardarUsuario(UsuarioDto dto) throws SitteecException {
        Usuario usuario = dto.toDefault().toEntidad();
        dto.setId_(usuarioDao.save(usuario));
        return dto;
    }

    @Override
    public List<UsuarioDto> guardarListaUsuario(List<UsuarioDto> dtos) throws SitteecException {
        for (UsuarioDto dto : dtos) {
            Usuario usuario = dto.toDefault().toEntidad();
            dto.setId_(usuarioDao.save(usuario));
        }
        return dtos;
    }

    @Override
    public boolean actualizarUsuario(UsuarioDto dto) throws SitteecException {
        UsuarioDto aux = lazyInjectionEntidadConjuntos(dto.toDefault().toEntidad(), dto);
        Usuario usuario = aux.toDefault().toEntidad();
        usuarioDao.update(usuario);
        return true;
    }

    @Override
    public List<UsuarioDto> actualizarListaUsuario(List<UsuarioDto> dtos) throws SitteecException {
        for (UsuarioDto dto : dtos) {
            Usuario usuario = dto.toDefault().toEntidad();
            usuarioDao.update(usuario);
        }
        return dtos;
    }

    @Override
    public HashMap<Integer, Integer> actualizarClaves(HashMap<Integer, Integer> claves) throws SitteecException {
        Iterator it = claves.entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry elemento = (Map.Entry) it.next();
            Usuario usuario = usuarioDao.get((Integer) elemento.getKey());
            usuario.setId((Integer) elemento.getValue());
            usuarioDao.update(usuario);
        }
        return claves;
    }

    @Override
    public boolean eliminarUsuario(UsuarioDto dto) throws SitteecException {
        Usuario usuario = dto.toDefault().toEntidad();
        usuarioDao.delete(usuario);
        return true;
    }

    @Override
    public List<UsuarioDto> eliminarListaUsuario(List<UsuarioDto> dtos) throws SitteecException {
        for (UsuarioDto dto : dtos) {
            Usuario usuario = dto.toDefault().toEntidad();
            usuarioDao.delete(usuario);
        }
        return dtos;
    }

    @Override
    public UsuarioDto getUsuario(Integer id) throws SitteecException {
        UsuarioDto usuarioDto = new UsuarioDto();
        Usuario usuario = usuarioDao.get(id);
        if (usuario != null) {
            usuarioDto = UsuarioDto.fromEntidad(usuario);
            usuarioDto = lazyInjectionEntidadObjetos(usuario, usuarioDto);
        }
        return usuarioDto;
    }

    @Override
    public List<UsuarioDto> getUsuarios() throws SitteecException {
        List<Usuario> usuarios;
        List<UsuarioDto> usuarioDtos = new ArrayList<UsuarioDto>();
        usuarios = usuarioDao.getList();
        for (Usuario usuario : usuarios) {
            UsuarioDto usuarioDto = UsuarioDto.fromEntidad(usuario);
            usuarioDto = lazyInjectionEntidadObjetos(usuario, usuarioDto);
            usuarioDtos.add(usuarioDto);
        }
        return usuarioDtos;
    }

// busquedas por atributos  inicio
    @Override
    public UsuarioDto getUsuarioById(Integer id) throws SitteecException {
        UsuarioDto usuarioDto = new UsuarioDto();
        Usuario e_usuario = usuarioDao.getUsuarioById(id);
        if (e_usuario != null) {
            usuarioDto = UsuarioDto.fromEntidad(e_usuario);
            usuarioDto = lazyInjectionEntidadObjetos(e_usuario, usuarioDto);
        }
        return usuarioDto;
    }

    @Override
    public List<UsuarioDto> getUsuariosById(Integer id) throws SitteecException {
        List<UsuarioDto> usuarioDtos = new ArrayList<UsuarioDto>();
        UsuarioDto usuarioDto = new UsuarioDto();
        List<Usuario> usuarios = usuarioDao.getUsuariosById(id);
        for (Usuario e_usuario : usuarios) {
            usuarioDto = UsuarioDto.fromEntidad(e_usuario);
            usuarioDto = lazyInjectionEntidadObjetos(e_usuario, usuarioDto);
            usuarioDtos.add(usuarioDto);
        }
        return usuarioDtos;
    }

    @Override
    public UsuarioDto getUsuarioByPassword(String password) throws SitteecException {
        UsuarioDto usuarioDto = new UsuarioDto();
        Usuario e_usuario = usuarioDao.getUsuarioByPassword(password);
        if (e_usuario != null) {
            usuarioDto = UsuarioDto.fromEntidad(e_usuario);
            usuarioDto = lazyInjectionEntidadObjetos(e_usuario, usuarioDto);
        }
        return usuarioDto;
    }

    @Override
    public List<UsuarioDto> getUsuariosByPassword(String password) throws SitteecException {
        List<UsuarioDto> usuarioDtos = new ArrayList<UsuarioDto>();
        UsuarioDto usuarioDto = new UsuarioDto();
        List<Usuario> usuarios = usuarioDao.getUsuariosByPassword(password);
        for (Usuario e_usuario : usuarios) {
            usuarioDto = UsuarioDto.fromEntidad(e_usuario);
            usuarioDto = lazyInjectionEntidadObjetos(e_usuario, usuarioDto);
            usuarioDtos.add(usuarioDto);
        }
        return usuarioDtos;
    }

    @Override
    public UsuarioDto getUsuarioByUsername(String username) throws SitteecException {
        UsuarioDto usuarioDto = new UsuarioDto();
        Usuario e_usuario = usuarioDao.getUsuarioByUsername(username);
        if (e_usuario != null) {
            usuarioDto = UsuarioDto.fromEntidad(e_usuario);
            usuarioDto = lazyInjectionEntidadObjetos(e_usuario, usuarioDto);
        }
        return usuarioDto;
    }

    @Override
    public List<UsuarioDto> getUsuariosByUsername(String username) throws SitteecException {
        List<UsuarioDto> usuarioDtos = new ArrayList<UsuarioDto>();
        UsuarioDto usuarioDto = new UsuarioDto();
        List<Usuario> usuarios = usuarioDao.getUsuariosByUsername(username);
        for (Usuario e_usuario : usuarios) {
            usuarioDto = UsuarioDto.fromEntidad(e_usuario);
            usuarioDto = lazyInjectionEntidadObjetos(e_usuario, usuarioDto);
            usuarioDtos.add(usuarioDto);
        }
        return usuarioDtos;
    }

    @Override
    public UsuarioDto getUsuarioByStatus(java.lang.Integer status) throws SitteecException {
        UsuarioDto usuarioDto = new UsuarioDto();
        Usuario e_usuario = usuarioDao.getUsuarioByStatus(status);
        if (e_usuario != null) {
            usuarioDto = UsuarioDto.fromEntidad(e_usuario);
            usuarioDto = lazyInjectionEntidadObjetos(e_usuario, usuarioDto);
        }
        return usuarioDto;
    }

    @Override
    public List<UsuarioDto> getUsuariosByStatus(java.lang.Integer status) throws SitteecException {
        List<UsuarioDto> usuarioDtos = new ArrayList<UsuarioDto>();
        UsuarioDto usuarioDto = new UsuarioDto();
        List<Usuario> usuarios = usuarioDao.getUsuariosByStatus(status);
        for (Usuario e_usuario : usuarios) {
            usuarioDto = UsuarioDto.fromEntidad(e_usuario);
            usuarioDto = lazyInjectionEntidadObjetos(e_usuario, usuarioDto);
            usuarioDtos.add(usuarioDto);
        }
        return usuarioDtos;
    }

    @Override
    public UsuarioDto getUsuarioByUsuarioUltMov(UsuarioDto p_usuarioUltMov) throws SitteecException {
        UsuarioDto usuarioDto = new UsuarioDto();
        Usuario e_usuario = usuarioDao.getUsuarioByUsuarioUltMov(p_usuarioUltMov);
        if (e_usuario != null) {
            usuarioDto = UsuarioDto.fromEntidad(e_usuario);
            usuarioDto = lazyInjectionEntidadObjetos(e_usuario, usuarioDto);
        }
        return usuarioDto;
    }

    @Override
    public List<UsuarioDto> getUsuariosByUsuarioUltMov(UsuarioDto p_usuarioUltMov) throws SitteecException {
        List<UsuarioDto> usuarioDtos = new ArrayList<UsuarioDto>();
        UsuarioDto usuarioDto = new UsuarioDto();
        List<Usuario> usuarios = usuarioDao.getUsuariosByUsuarioUltMov(p_usuarioUltMov);
        for (Usuario e_usuario : usuarios) {
            usuarioDto = UsuarioDto.fromEntidad(e_usuario);
            usuarioDto = lazyInjectionEntidadObjetos(e_usuario, usuarioDto);
            usuarioDtos.add(usuarioDto);
        }
        return usuarioDtos;
    }


    @Override
    public UsuarioDto getUsuarioByPerfil(PerfilDto p_perfil) throws SitteecException {
        UsuarioDto usuarioDto = new UsuarioDto();
        Usuario e_usuario = usuarioDao.getUsuarioByPerfil(p_perfil);
        if (e_usuario != null) {
            usuarioDto = UsuarioDto.fromEntidad(e_usuario);
            usuarioDto = lazyInjectionEntidadObjetos(e_usuario, usuarioDto);
        }
        return usuarioDto;
    }

    @Override
    public List<UsuarioDto> getUsuariosByPerfil(PerfilDto p_perfil) throws SitteecException {
        List<UsuarioDto> usuarioDtos = new ArrayList<UsuarioDto>();
        UsuarioDto usuarioDto = new UsuarioDto();
        List<Usuario> usuarios = usuarioDao.getUsuariosByPerfil(p_perfil);
        for (Usuario e_usuario : usuarios) {
            usuarioDto = UsuarioDto.fromEntidad(e_usuario);
            usuarioDto = lazyInjectionEntidadObjetos(e_usuario, usuarioDto);
            usuarioDtos.add(usuarioDto);
        }
        return usuarioDtos;
    }
    @Override
    public UsuarioDto getUsuarioByCorreoElectronico(String correoElectronico)   throws SitteecException   {
        UsuarioDto usuarioDto = new UsuarioDto();
            Usuario e_usuario = usuarioDao.getUsuarioByCorreoElectronico(correoElectronico);
            if(e_usuario != null){
                    usuarioDto = UsuarioDto.fromEntidad(e_usuario);
                    usuarioDto = lazyInjectionEntidadObjetos(e_usuario, usuarioDto);
            }
            return usuarioDto;
    }
    @Override
    public List<UsuarioDto> getUsuariosByCorreoElectronico(String correoElectronico)  throws SitteecException   {
        List<UsuarioDto> usuarioDtos = new ArrayList<UsuarioDto>();
        UsuarioDto usuarioDto = new UsuarioDto();
            List<Usuario>usuarios = usuarioDao.getUsuariosByCorreoElectronico(correoElectronico);
            for(Usuario e_usuario : usuarios){
                    usuarioDto = UsuarioDto.fromEntidad(e_usuario);
                    usuarioDto = lazyInjectionEntidadObjetos(e_usuario, usuarioDto);
		       usuarioDtos.add(usuarioDto);
            }
	       return usuarioDtos ;
    }
// busquedas por atributos  fin

    @Override
    public UsuarioDto lazyInjection(UsuarioDto dto) throws SitteecException {
        Usuario PEentidad = usuarioDao.get(dto.getId_());
        UsuarioDto salida = UsuarioDto.fromEntidad(PEentidad);
        salida = lazyInjectionEntidadObjetos(PEentidad, salida);
        salida = lazyInjectionEntidadConjuntos(PEentidad, salida);
        return salida;
    }

    @Override
    public UsuarioDto lazyInjectionObjetos(UsuarioDto dto) throws SitteecException {
        Usuario PEentidad = usuarioDao.get(dto.getId_());
        UsuarioDto salida = UsuarioDto.fromEntidad(PEentidad);
        salida = lazyInjectionEntidadObjetos(PEentidad, salida);
        return salida;
    }

    @Override
    public UsuarioDto lazyInjectionConjuntos(UsuarioDto dto) throws SitteecException {
        Usuario PEentidad = usuarioDao.get(dto.getId_());
        UsuarioDto salida = UsuarioDto.fromEntidad(PEentidad);
        salida = lazyInjectionEntidadConjuntos(PEentidad, salida);
        return salida;
    }

    @Override
    public UsuarioDto lazyInjectionEntidadObjetos(Usuario PEentidad, UsuarioDto salida) throws SitteecException {
        if (PEentidad.getUsuarioUltMov() != null) {
            salida.setUsuarioUltMov(UsuarioDto.fromEntidad(PEentidad.getUsuarioUltMov()));
        }
        if (PEentidad.getPerfil() != null) {
            salida.setPerfil(PerfilDto.fromEntidad(PEentidad.getPerfil()));
        }

        return salida;
    }

    @Override
    public UsuarioDto lazyInjectionEntidadConjuntos(Usuario PEentidad, UsuarioDto salida) throws SitteecException {
        return salida;
    }

    @Override
    public UsuarioDto lazyInjectionEntidadObjetosDto(UsuarioDto PEentidad, UsuarioDto salida) throws SitteecException {
        salida.setUsuarioUltMov(PEentidad.getUsuarioUltMov());
        salida.setPerfil(PEentidad.getPerfil());

        return salida;
    }

    @Override
    public UsuarioDto lazyInjectionEntidadConjuntosDto(UsuarioDto PEentidad, UsuarioDto salida) throws SitteecException {
        return salida;
    }

    @Override
    public UsuarioDto lazyInjectionEntidad(Usuario PEentidad) throws SitteecException {
        UsuarioDto salida = UsuarioDto.fromEntidad(PEentidad);
        salida = lazyInjectionEntidadObjetos(PEentidad, salida);
        salida = lazyInjectionEntidadConjuntos(PEentidad, salida);
        return salida;
    }

    @Override
    public List<UsuarioDto> custom(String consulta) throws SitteecException {
        List<Usuario> usuarios;
        List<UsuarioDto> usuarioDtos = new ArrayList<UsuarioDto>();
        usuarios = usuarioDao.custom(consulta);
        for (Usuario usuario : usuarios) {
            UsuarioDto usuarioDto = UsuarioDto.fromEntidad(usuario);
            usuarioDto = lazyInjectionEntidadObjetos(usuario, usuarioDto);
            usuarioDtos.add(usuarioDto);
        }
        return usuarioDtos;
    }

     
    public List<UsuarioDto> getUsuariosByDto(UsuarioDto p_usuario) throws SitteecException {
        List<Usuario> usuarios;
        List<UsuarioDto> usuarioDtos = new ArrayList<UsuarioDto>();
        p_usuario.setStatus(1);
        usuarios = usuarioDao.getUsuariosByDto(p_usuario);
        for (Usuario usuario : usuarios) {
            UsuarioDto usuarioDto = UsuarioDto.fromEntidad(usuario);
            usuarioDto = lazyInjectionEntidadObjetos(usuario, usuarioDto);
            usuarioDtos.add(usuarioDto);
        }
        return usuarioDtos;
    }
    
    public List<UsuarioDto> login(UsuarioDto p_usuario) throws SitteecException {
        List<Usuario> usuarios;
        List<UsuarioDto> usuarioDtos = new ArrayList<UsuarioDto>();
        usuarios = usuarioDao.login(p_usuario);
        for (Usuario usuario : usuarios) {
            UsuarioDto usuarioDto = UsuarioDto.fromEntidad(usuario);
            usuarioDto = lazyInjectionEntidadObjetos(usuario, usuarioDto);
            usuarioDtos.add(usuarioDto);
        }
        return usuarioDtos;
    }

    @Override
    public boolean recuperarContrasena(UsuarioDto p_usuario) {
        Usuario usuarioByUsername = usuarioDao.getUsuarioByUsername(p_usuario.getUsername());
        if(usuarioByUsername != null){
            String correoElectronico = usuarioByUsername.getCorreoElectronico();
            String mensajeMail = "<h1><center>ISSSTE</center></h1>"
                    + "<h2><center>" + "Banco de Tejidos" + "</center></h2>"
                    + "<h3><center>" + "Recuperar contrase&ntilde;a" + "</center></h3>"
                    + "<center><table>"
                    + "<tr><td><b>Usuario:</b></td><td>" + p_usuario.getUsername() + "</td></tr>"
                    + "<tr><td><b>Contrase&ntilde;a:</b></td><td>" + usuarioByUsername.getPassword() + "</td></tr>"
                    //+ "<tr><td><b>Fecha de alerta:</b></td><td>" + "sd" + "</td></tr>"
                    + "</table></center>";
            mailService.sendEmail("ISSSTE: Banco de Tejidos", mensajeMail, correoElectronico);
            return true;
        }
        return false;
    }

}
