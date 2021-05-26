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
public class PermisoConjuntoDto implements Serializable {

// ids inicio
private Integer id = null ;
// ids fin

// atributos inicio
private String etiqueta = null ;
private java.lang.Integer permiso = null ;
private String tabla = null ;
private String conjunto = null ;
private java.lang.Integer status = null ;
private UsuarioDto usuarioUltMov = null ;
private UsuarioDto usuario = null ;
private Set<PerfilDto> perfiles = new HashSet<PerfilDto>(0);
// atributos fin

    public PermisoConjuntoDto toDefault( ) {
     return this;      }


// constructores inicio
     public PermisoConjuntoDto() {
     }
     public PermisoConjuntoDto( Integer id,  String etiqueta,  java.lang.Integer permiso,  String tabla,  String conjunto,  java.lang.Integer status,  Set<PerfilDto> perfiles,  UsuarioDto usuarioUltMov,  UsuarioDto usuario) {

          this.id=id;
          this.etiqueta=etiqueta;
          this.permiso=permiso;
          this.tabla=tabla;
          this.conjunto=conjunto;
          this.status=status;
          this.perfiles=perfiles;
          this.usuarioUltMov=usuarioUltMov;
          this.usuario=usuario;
     }
// constructores fin

// geters inicio
    public Integer getId() {
        return id;
    }
    public String getEtiqueta() {
        return etiqueta;
    }
    public java.lang.Integer getPermiso() {
        return permiso;
    }
    public String getTabla() {
        return tabla;
    }
    public String getConjunto() {
        return conjunto;
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
    public Set<PerfilDto> getPerfiles() {
        return perfiles;
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
    public void setEtiqueta(String etiqueta) {
        this.etiqueta = etiqueta;
    }
    public void setPermiso(java.lang.Integer permiso) {
        this.permiso = permiso;
    }
    public void setTabla(String tabla) {
        this.tabla = tabla;
    }
    public void setConjunto(String conjunto) {
        this.conjunto = conjunto;
    }
    public void setStatus(java.lang.Integer status) {
        this.status = status;
    }
    public void setPerfiles(Set<PerfilDto> perfiles) {
        this.perfiles = perfiles;
    }
    public void setUsuarioUltMov(UsuarioDto usuarioUltMov) {
        this.usuarioUltMov = usuarioUltMov;
    }
    public void setUsuario(UsuarioDto usuario) {
        this.usuario = usuario;
    }
// seters fin
   public static PermisoConjuntoDto fromEntidad(PermisoConjunto PEentidad){
	   PermisoConjuntoDto salida = new PermisoConjuntoDto();
	   salida.setId(PEentidad.getId());  
	   salida.setEtiqueta(PEentidad.getEtiqueta());  
	   salida.setPermiso(PEentidad.getPermiso());  
	   salida.setTabla(PEentidad.getTabla());  
	   salida.setConjunto(PEentidad.getConjunto());  
	   salida.setStatus(PEentidad.getStatus());  

	   return salida;		
   }
   public  PermisoConjunto toEntidadBase(){
	   PermisoConjuntoDto PEentidad = this;	   PermisoConjunto salida = new PermisoConjunto();
	   salida.setId(PEentidad.getId());  
	   salida.setEtiqueta(PEentidad.getEtiqueta());  
	   salida.setPermiso(PEentidad.getPermiso());  
	   salida.setTabla(PEentidad.getTabla());  
	   salida.setConjunto(PEentidad.getConjunto());  
	   salida.setStatus(PEentidad.getStatus());  

	   return salida;		
   }
   public  PermisoConjunto toEntidad(){
	   PermisoConjuntoDto PEentidad = this;	   PermisoConjunto salida = PEentidad.toEntidadBase();
	   if (PEentidad.getUsuarioUltMov()!= null)  
	       salida.setUsuarioUltMov(PEentidad.getUsuarioUltMov().toEntidadBase());  
	   if (PEentidad.getUsuario()!= null)  
	       salida.setUsuario(PEentidad.getUsuario().toEntidadBase());  
	   if( PEentidad.getPerfiles()!= null ){
	       Iterator iteratorPerfiles = PEentidad.getPerfiles().iterator();
    	       while(iteratorPerfiles.hasNext()){
	             PerfilDto ppaux = (PerfilDto)  iteratorPerfiles.next();
	             if (ppaux != null)
		     salida.getPerfiles().add(ppaux.toEntidadBase() );
	       } 
	   } 

	   return salida;		
   }
   public String toString(){
	   String salida="Tabla PermisoConjunto \n";
           salida+= "id = "+ this.id +"\n";
           salida+= "etiqueta = "+ this.etiqueta +"\n";
           salida+= "permiso = "+ this.permiso +"\n";
           salida+= "tabla = "+ this.tabla +"\n";
           salida+= "conjunto = "+ this.conjunto +"\n";
           salida+= "status = "+ this.status +"\n";
           if (this.usuarioUltMov != null)
               salida+= "usuarioUltMov = "+ this.usuarioUltMov.getId_() +"\n";
           if (this.usuario != null)
               salida+= "usuario = "+ this.usuario.getId_() +"\n";

	   return salida;		
   }
}
