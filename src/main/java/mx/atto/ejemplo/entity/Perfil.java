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
@Table(name = "perfil")
public class Perfil {

// ids inicio
private Integer id = null ;
// ids fin

// atributos inicio
private String descripcion = null ;
private String ruta = null ;
private String nombre = null ;
private java.lang.Integer status = null ;
private Usuario usuarioUltMov = null ;
private Usuario usuario = null ;
// atributos fin

// constructores inicio
     public Perfil() {
     }
     public Perfil( Integer id,  String descripcion,  String ruta,  String nombre,  java.lang.Integer status,  Usuario usuarioUltMov,  Usuario usuario) {

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
    @Id
    @GeneratedValue
    public Integer getId() {
        return id;
    }
 @Column(name = "descripcion")
    public String getDescripcion() {
        return descripcion;
    }
 @Column(name = "ruta")
    public String getRuta() {
        return ruta;
    }
 @Column(name = "nombre")
    public String getNombre() {
        return nombre;
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
    public void setUsuarioUltMov(Usuario usuarioUltMov) {
        this.usuarioUltMov = usuarioUltMov;
    }
    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
// seters fin
}
