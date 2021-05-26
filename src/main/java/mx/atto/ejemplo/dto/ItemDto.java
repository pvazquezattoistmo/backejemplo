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
public class ItemDto implements Serializable {

// ids inicio
private Integer id = null ;
// ids fin

// atributos inicio
private java.lang.Integer principal = null ;
private String ruta = null ;
private String nombre = null ;
private java.lang.Integer status = null ;
private UsuarioDto usuarioUltMov = null ;
private Set<ItemDto> itemsm = new HashSet<ItemDto>(0);
private Set<PerfilDto> perfiles = new HashSet<PerfilDto>(0);
// atributos fin

    public ItemDto toDefault( ) {
     return this;      }


// constructores inicio
     public ItemDto() {
     }
     public ItemDto( Integer id,  java.lang.Integer principal,  String ruta,  String nombre,  java.lang.Integer status,  Set<ItemDto> itemsm,  Set<PerfilDto> perfiles,  UsuarioDto usuarioUltMov) {

          this.id=id;
          this.principal=principal;
          this.ruta=ruta;
          this.nombre=nombre;
          this.status=status;
          this.itemsm=itemsm;
          this.perfiles=perfiles;
          this.usuarioUltMov=usuarioUltMov;
     }
// constructores fin

// geters inicio
    public Integer getId() {
        return id;
    }
    public java.lang.Integer getPrincipal() {
        return principal;
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
    public Set<ItemDto> getItemsm() {
        return itemsm;
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
    public void setPrincipal(java.lang.Integer principal) {
        this.principal = principal;
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
    public void setItemsm(Set<ItemDto> itemsm) {
        this.itemsm = itemsm;
    }
    public void setPerfiles(Set<PerfilDto> perfiles) {
        this.perfiles = perfiles;
    }
    public void setUsuarioUltMov(UsuarioDto usuarioUltMov) {
        this.usuarioUltMov = usuarioUltMov;
    }
// seters fin
   public static ItemDto fromEntidad(Item PEentidad){
	   ItemDto salida = new ItemDto();
	   salida.setId(PEentidad.getId());  
	   salida.setPrincipal(PEentidad.getPrincipal());  
	   salida.setRuta(PEentidad.getRuta());  
	   salida.setNombre(PEentidad.getNombre());  
	   salida.setStatus(PEentidad.getStatus());  

	   return salida;		
   }
   public  Item toEntidadBase(){
	   ItemDto PEentidad = this;	   Item salida = new Item();
	   salida.setId(PEentidad.getId());  
	   salida.setPrincipal(PEentidad.getPrincipal());  
	   salida.setRuta(PEentidad.getRuta());  
	   salida.setNombre(PEentidad.getNombre());  
	   salida.setStatus(PEentidad.getStatus());  

	   return salida;		
   }
   public  Item toEntidad(){
	   ItemDto PEentidad = this;	   Item salida = PEentidad.toEntidadBase();
	   if (PEentidad.getUsuarioUltMov()!= null)  
	       salida.setUsuarioUltMov(PEentidad.getUsuarioUltMov().toEntidadBase());  
	   if( PEentidad.getItemsm()!= null ){
	       Iterator iteratorItemsm = PEentidad.getItemsm().iterator();
    	       while(iteratorItemsm.hasNext()){
	             ItemDto ppaux = (ItemDto)  iteratorItemsm.next();
	             if (ppaux != null)
		     salida.getItemsm().add(ppaux.toEntidadBase() );
	       } 
	   } 
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
	   String salida="Tabla Item \n";
           salida+= "id = "+ this.id +"\n";
           salida+= "principal = "+ this.principal +"\n";
           salida+= "ruta = "+ this.ruta +"\n";
           salida+= "nombre = "+ this.nombre +"\n";
           salida+= "status = "+ this.status +"\n";
           if (this.usuarioUltMov != null)
               salida+= "usuarioUltMov = "+ this.usuarioUltMov.getId_() +"\n";

	   return salida;		
   }
}
