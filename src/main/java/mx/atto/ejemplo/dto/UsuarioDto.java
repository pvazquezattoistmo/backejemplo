package mx.atto.ejemplo.dto;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import java.util.Iterator;
import mx.atto.ejemplo.entity.*;
/**
 *
 * @author IstmoSoft
 */
public class UsuarioDto implements Serializable {

// ids inicio
private Integer id = null ;
// ids fin

// atributos inicio
private String nombre = null ;
private String primerApellido = null ;
private String segundoApellido = null ;
private String correoElectronico = null ;
private String username = null ;
private String password = null ;
private java.lang.Integer intentos = null;
private Date tiempointentos = null;
private Date fechaRegistro = null ;
private Date fechaActualizacion = null ;
private Date fechaBaja = null ;
private java.lang.Integer status = null ;
private UsuarioDto usuarioUltMov = null ;
private PerfilDto perfil = null ;

// atributos fin

    public UsuarioDto toDefault( ) {
     return this;      }


// constructores inicio
     public UsuarioDto() {
     }
     public UsuarioDto( Integer id, String nombre, String primerApellido, String segundoApellido, String correoElectronico, String username, String password, java.lang.Integer intentos, Date tiempointentos, Date fechaRegistro, Date fechaActualizacion, Date fechaBaja,  java.lang.Integer status,  UsuarioDto usuarioUltMov, PerfilDto perfil) {

          this.id=id;
          this.nombre=nombre;
          this.primerApellido=primerApellido;
          this.segundoApellido=segundoApellido;
          this.correoElectronico=correoElectronico;
          this.username=username;
          this.password=password;
          this.intentos = intentos;
          this.tiempointentos = tiempointentos;
          this.fechaRegistro=fechaRegistro;
          this.fechaActualizacion=fechaActualizacion;
          this.fechaBaja=fechaBaja;
          this.status=status;
          this.usuarioUltMov=usuarioUltMov;
          this.perfil=perfil;

     }
     public boolean isEmpty(){

        return this.id == null &&
               this.nombre==null &&        
               this.primerApellido==null &&
               this.segundoApellido==null &&        
               this.correoElectronico==null &&        
               this.username==null &&        
               this.password==null &&        
               this.intentos == null &&        
               this.tiempointentos ==null &&        
               this.fechaRegistro==null &&        
               this.fechaActualizacion==null &&        
               this.fechaBaja==null &&        
               this.status==null &&        
               this.usuarioUltMov==null &&        
               this.perfil==null ;
    }
// constructores fin

// geters inicio
    public Integer getId() {
        return id;
    }
    public String getPassword() {
        return password;
    }
    public String getUsername() {
        return username;
    }
    public java.lang.Integer getStatus() {
        return status;
    }
    public UsuarioDto getUsuarioUltMov() {
        return usuarioUltMov;
    }
    public PerfilDto getPerfil() {
        return perfil;
    }

    public Integer getId_() {
        return this.id;
    }

    public String getNombre() {
        return nombre;
    }

    public String getPrimerApellido() {
        return primerApellido;
    }

    public String getSegundoApellido() {
        return segundoApellido;
    }

    public String getCorreoElectronico() {
        return correoElectronico;
    }

    public Integer getIntentos() {
        return intentos;
    }

    public Date getTiempointentos() {
        return tiempointentos;
    }

    public Date getFechaRegistro() {
        return fechaRegistro;
    }

    public Date getFechaActualizacion() {
        return fechaActualizacion;
    }

    public Date getFechaBaja() {
        return fechaBaja;
    }

// geters fin
// seters inicio
    public void setId_(Integer id) {
        this.id = id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public void setStatus(java.lang.Integer status) {
        this.status = status;
    }
    public void setUsuarioUltMov(UsuarioDto usuarioUltMov) {
        this.usuarioUltMov = usuarioUltMov;
    }
    public void setPerfil(PerfilDto perfil) {
        this.perfil = perfil;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setPrimerApellido(String primerApellido) {
        this.primerApellido = primerApellido;
    }

    public void setSegundoApellido(String segundoApellido) {
        this.segundoApellido = segundoApellido;
    }

    public void setCorreoElectronico(String correoElectronico) {
        this.correoElectronico = correoElectronico;
    }

    public void setIntentos(Integer intentos) {
        this.intentos = intentos;
    }

    public void setTiempointentos(Date tiempointentos) {
        this.tiempointentos = tiempointentos;
    }

    public void setFechaRegistro(Date fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }

    public void setFechaActualizacion(Date fechaActualizacion) {
        this.fechaActualizacion = fechaActualizacion;
    }

    public void setFechaBaja(Date fechaBaja) {
        this.fechaBaja = fechaBaja;
    }

// seters fin
   public static UsuarioDto fromEntidad(Usuario PEentidad){
	   UsuarioDto salida = new UsuarioDto();
	   salida.setId(PEentidad.getId());
	   salida.setNombre(PEentidad.getNombre());  
	   salida.setPrimerApellido(PEentidad.getPrimerApellido());  
	   salida.setSegundoApellido(PEentidad.getSegundoApellido());  
	   salida.setCorreoElectronico(PEentidad.getCorreoElectronico());
	   salida.setUsername(PEentidad.getUsername());  
	   salida.setPassword(PEentidad.getPassword());
           salida.setIntentos(PEentidad.getIntentos());
           salida.setTiempointentos(PEentidad.getTiempointentos());
	   salida.setFechaRegistro(PEentidad.getFechaRegistro());  
	   salida.setFechaActualizacion(PEentidad.getFechaActualizacion());  
           salida.setFechaBaja(PEentidad.getFechaBaja());  
	   salida.setStatus(PEentidad.getStatus());  

	   return salida;		
   }
   public  Usuario toEntidadBase(){
	   UsuarioDto PEentidad = this;	   
           Usuario salida = new Usuario();
	   salida.setId(PEentidad.getId());
	   salida.setNombre(PEentidad.getNombre());  
	   salida.setPrimerApellido(PEentidad.getPrimerApellido());  
	   salida.setSegundoApellido(PEentidad.getSegundoApellido());  
	   salida.setCorreoElectronico(PEentidad.getCorreoElectronico());
	   salida.setUsername(PEentidad.getUsername());  
	   salida.setPassword(PEentidad.getPassword()); 
           salida.setIntentos(PEentidad.getIntentos());
           salida.setTiempointentos(PEentidad.getTiempointentos());
	   salida.setFechaRegistro(PEentidad.getFechaRegistro());  
	   salida.setFechaActualizacion(PEentidad.getFechaActualizacion());  
           salida.setFechaBaja(PEentidad.getFechaBaja());  
	   salida.setStatus(PEentidad.getStatus());  

	   return salida;		
   }
   public  Usuario toEntidad(){
	   UsuarioDto PEentidad = this;	   Usuario salida = PEentidad.toEntidadBase();
	   if (PEentidad.getUsuarioUltMov()!= null)  
	       salida.setUsuarioUltMov(PEentidad.getUsuarioUltMov().toEntidadBase());  
	   if (PEentidad.getPerfil()!= null)  
	       salida.setPerfil(PEentidad.getPerfil().toEntidadBase());


	   return salida;		
   }
   public String toString(){
	   String salida="Tabla Usuario \n";
           salida+= "id = "+ this.id +"\n";
           salida+= "nombre = "+ this.nombre +"\n";
           salida+= "primerApellido = "+ this.primerApellido +"\n";
           salida+= "segundoApellido = "+ this.segundoApellido +"\n";
           salida+= "correoElectronico = "+ this.correoElectronico +"\n";
           salida+= "username = "+ this.username +"\n";
           salida+= "password = "+ this.password +"\n";
           salida+= "intentos = " + this.intentos + "\n";
           salida+= "tiempointentos = " + this.tiempointentos + "\n";
           salida+= "fechaRegistro = "+ this.fechaRegistro +"\n";
           salida+= "fechaActualizacion = "+ this.fechaActualizacion +"\n";
           salida+= "fechaBaja = "+ this.fechaBaja +"\n";
           salida+= "status = "+ this.status +"\n";
           if (this.usuarioUltMov != null)
               salida+= "usuarioUltMov = "+ this.usuarioUltMov.getId_() +"\n";
           if (this.perfil != null)
               salida+= "perfil = "+ this.perfil.getId_() +"\n";


	   return salida;		
   }
}
