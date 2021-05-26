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
public class PermisoAtributoDto implements Serializable {

// ids inicio
private Integer id = null ;
// ids fin

// atributos inicio
private String etiqueta = null ;
private String validacion = null ;
private java.lang.Integer permiso = null ;
private String tabla = null ;
private String atributo = null ;
private String mensaje = null ;
private java.lang.Integer status = null ;
private UsuarioDto usuarioUltMov = null ;
private UsuarioDto usuario = null ;
private Set<PerfilDto> perfiles = new HashSet<PerfilDto>(0);
// atributos fin

    public PermisoAtributoDto toDefault( ) {
     return this;      }


// constructores inicio
     public PermisoAtributoDto() {
     }
     public PermisoAtributoDto( Integer id,  String etiqueta,  String validacion,  java.lang.Integer permiso,  String tabla,  String atributo,  String mensaje,  java.lang.Integer status,  Set<PerfilDto> perfiles,  UsuarioDto usuarioUltMov,  UsuarioDto usuario) {

          this.id=id;
          this.etiqueta=etiqueta;
          this.validacion=validacion;
          this.permiso=permiso;
          this.tabla=tabla;
          this.atributo=atributo;
          this.mensaje=mensaje;
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
    public String getValidacion() {
        return validacion;
    }
    public java.lang.Integer getPermiso() {
        return permiso;
    }
    public String getTabla() {
        return tabla;
    }
    public String getAtributo() {
        return atributo;
    }
    public String getMensaje() {
        return mensaje;
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
    public void setValidacion(String validacion) {
        this.validacion = validacion;
    }
    public void setPermiso(java.lang.Integer permiso) {
        this.permiso = permiso;
    }
    public void setTabla(String tabla) {
        this.tabla = tabla;
    }
    public void setAtributo(String atributo) {
        this.atributo = atributo;
    }
    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
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
   public static PermisoAtributoDto fromEntidad(PermisoAtributo PEentidad){
	   PermisoAtributoDto salida = new PermisoAtributoDto();
	   salida.setId(PEentidad.getId());  
	   salida.setEtiqueta(PEentidad.getEtiqueta());  
	   salida.setValidacion(PEentidad.getValidacion());  
	   salida.setPermiso(PEentidad.getPermiso());  
	   salida.setTabla(PEentidad.getTabla());  
	   salida.setAtributo(PEentidad.getAtributo());  
	   salida.setMensaje(PEentidad.getMensaje());  
	   salida.setStatus(PEentidad.getStatus());  

	   return salida;		
   }
   public  PermisoAtributo toEntidadBase(){
	   PermisoAtributoDto PEentidad = this;	   PermisoAtributo salida = new PermisoAtributo();
	   salida.setId(PEentidad.getId());  
	   salida.setEtiqueta(PEentidad.getEtiqueta());  
	   salida.setValidacion(PEentidad.getValidacion());  
	   salida.setPermiso(PEentidad.getPermiso());  
	   salida.setTabla(PEentidad.getTabla());  
	   salida.setAtributo(PEentidad.getAtributo());  
	   salida.setMensaje(PEentidad.getMensaje());  
	   salida.setStatus(PEentidad.getStatus());  

	   return salida;		
   }
   public  PermisoAtributo toEntidad(){
	   PermisoAtributoDto PEentidad = this;	   PermisoAtributo salida = PEentidad.toEntidadBase();
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
	   String salida="Tabla PermisoAtributo \n";
           salida+= "id = "+ this.id +"\n";
           salida+= "etiqueta = "+ this.etiqueta +"\n";
           salida+= "validacion = "+ this.validacion +"\n";
           salida+= "permiso = "+ this.permiso +"\n";
           salida+= "tabla = "+ this.tabla +"\n";
           salida+= "atributo = "+ this.atributo +"\n";
           salida+= "mensaje = "+ this.mensaje +"\n";
           salida+= "status = "+ this.status +"\n";
           if (this.usuarioUltMov != null)
               salida+= "usuarioUltMov = "+ this.usuarioUltMov.getId_() +"\n";
           if (this.usuario != null)
               salida+= "usuario = "+ this.usuario.getId_() +"\n";

	   return salida;		
   }
}
