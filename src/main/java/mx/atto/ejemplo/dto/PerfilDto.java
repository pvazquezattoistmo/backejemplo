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
public class PerfilDto implements Serializable {

// ids inicio
private Integer id = null ;
// ids fin

// atributos inicio
private String descripcion = null ;
private String ruta = null ;
private String nombre = null ;
private java.lang.Integer status = null ;
private UsuarioDto usuarioUltMov = null ;
private UsuarioDto usuario = null ;
// atributos fin

    public PerfilDto toDefault( ) {
     return this;      }


// constructores inicio
     public PerfilDto() {
     }
     public PerfilDto( Integer id,  String descripcion,  String ruta,  String nombre,  java.lang.Integer status,  UsuarioDto usuarioUltMov,  UsuarioDto usuario) {

          this.id=id;
          this.descripcion=descripcion;
          this.ruta=ruta;
          this.nombre=nombre;
          this.status=status;
          this.usuarioUltMov=usuarioUltMov;
          this.usuario=usuario;
     }
// constructores fin

// geters inicio
    public Integer getId() {
        return id;
    }
    public String getDescripcion() {
        return descripcion;
    }
    public String getRuta() {
        return ruta;
    }
    public String getNombre() {
        return nombre;
    }
    public java.lang.Integer getStatus() {
        return status;
    }
    public UsuarioDto getUsuarioUltMov() {
        return usuarioUltMov;
    }
    public UsuarioDto getUsuario() {
        return usuario;
    }

    public Integer getId_() {
        return this.id;
    }
// geters fin
// seters inicio
    public void setId_(Integer id) {
        this.id = id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    public void setRuta(String ruta) {
        this.ruta = ruta;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public void setStatus(java.lang.Integer status) {
        this.status = status;
    }
    public void setUsuarioUltMov(UsuarioDto usuarioUltMov) {
        this.usuarioUltMov = usuarioUltMov;
    }
    public void setUsuario(UsuarioDto usuario) {
        this.usuario = usuario;
    }
// seters fin
   public static PerfilDto fromEntidad(Perfil PEentidad){
	   PerfilDto salida = new PerfilDto();
	   salida.setId(PEentidad.getId());  
	   salida.setDescripcion(PEentidad.getDescripcion());  
	   salida.setRuta(PEentidad.getRuta());  
	   salida.setNombre(PEentidad.getNombre());  
	   salida.setStatus(PEentidad.getStatus());  

	   return salida;		
   }
   public  Perfil toEntidadBase(){
	   PerfilDto PEentidad = this;	   Perfil salida = new Perfil();
	   salida.setId(PEentidad.getId());  
	   salida.setDescripcion(PEentidad.getDescripcion());  
	   salida.setRuta(PEentidad.getRuta());  
	   salida.setNombre(PEentidad.getNombre());  
	   salida.setStatus(PEentidad.getStatus());  

	   return salida;		
   }
   public  Perfil toEntidad(){
	   PerfilDto PEentidad = this;	   Perfil salida = PEentidad.toEntidadBase();
	   if (PEentidad.getUsuarioUltMov()!= null)  
	       salida.setUsuarioUltMov(PEentidad.getUsuarioUltMov().toEntidadBase());  
	   if (PEentidad.getUsuario()!= null)  
	       salida.setUsuario(PEentidad.getUsuario().toEntidadBase());  

	   return salida;		
   }
   public String toString(){
	   String salida="Tabla Perfil \n";
           salida+= "id = "+ this.id +"\n";
           salida+= "descripcion = "+ this.descripcion +"\n";
           salida+= "ruta = "+ this.ruta +"\n";
           salida+= "nombre = "+ this.nombre +"\n";
           salida+= "status = "+ this.status +"\n";
           if (this.usuarioUltMov != null)
               salida+= "usuarioUltMov = "+ this.usuarioUltMov.getId_() +"\n";
           if (this.usuario != null)
               salida+= "usuario = "+ this.usuario.getId_() +"\n";

	   return salida;		
   }
}
