package mx.atto.ejemplo.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import java.util.Iterator;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
//import mx.edu.wendulinea.control.entity.core.Usuario;

/**
 *
 * @author IstmoSoft
 */
@Entity
@Table(name = "permiso_atributo")
public class PermisoAtributo {

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
private Usuario usuarioUltMov = null ;
private Usuario usuario = null ;
private Set<Perfil> perfiles = new HashSet<Perfil>(0);
// atributos fin

// constructores inicio
     public PermisoAtributo() {
     }
     public PermisoAtributo( Integer id,  String etiqueta,  String validacion,  java.lang.Integer permiso,  String tabla,  String atributo,  String mensaje,  java.lang.Integer status,  Set<Perfil> perfiles,  Usuario usuarioUltMov,  Usuario usuario) {

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
    @Id
    @GeneratedValue
    public Integer getId() {
        return id;
    }
 @Column(name = "etiqueta")
    public String getEtiqueta() {
        return etiqueta;
    }
 @Column(name = "validacion")
    public String getValidacion() {
        return validacion;
    }
 @Column(name = "permiso")
    public java.lang.Integer getPermiso() {
        return permiso;
    }
 @Column(name = "tabla")
    public String getTabla() {
        return tabla;
    }
 @Column(name = "atributo")
    public String getAtributo() {
        return atributo;
    }
 @Column(name = "mensaje")
    public String getMensaje() {
        return mensaje;
    }
 @Column(name = "status")
    public java.lang.Integer getStatus() {
        return status;
    }
    @ManyToOne
    @JoinColumn(name = "usuarioultmov", foreignKey = @ForeignKey(name = "fk_usuario"))
    public Usuario getUsuarioUltMov() {
        return usuarioUltMov;
    }
    @ManyToOne
    @JoinColumn(name = "usuario", foreignKey = @ForeignKey(name = "fk_usuario"))
    public Usuario getUsuario() {
        return usuario;
    }
     @ManyToMany(
            cascade = {CascadeType.PERSIST, CascadeType.MERGE},
            targetEntity = Perfil.class
    )
    @JoinTable(
            name = "permisoatributo_perfil",
            foreignKey = @ForeignKey(name = "pk"),
            joinColumns = @JoinColumn(name = "permisoatributo_id" , foreignKey = @ForeignKey(name = "fk_permisoatributo") ),
            inverseJoinColumns = @JoinColumn(name = "perfil_id"  , foreignKey = @ForeignKey(name = "fk_perfil"))
    )
    public Set<Perfil> getPerfiles() {
        return perfiles;
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
    public void setPerfiles(Set<Perfil> perfiles) {
        this.perfiles = perfiles;
    }
    public void setUsuarioUltMov(Usuario usuarioUltMov) {
        this.usuarioUltMov = usuarioUltMov;
    }
    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
// seters fin
}
