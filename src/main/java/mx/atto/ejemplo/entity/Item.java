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
@Table(name = "item")
public class Item {

// ids inicio
private Integer id = null ;
// ids fin

// atributos inicio
private java.lang.Integer principal = null ;
private String ruta = null ;
private String nombre = null ;
private java.lang.Integer status = null ;
private Usuario usuarioUltMov = null ;
private Set<Item> itemsm = new HashSet<Item>(0);
private Set<Perfil> perfiles = new HashSet<Perfil>(0);
// atributos fin

// constructores inicio
     public Item() {
     }
     public Item( Integer id,  java.lang.Integer principal,  String ruta,  String nombre,  java.lang.Integer status,  Set<Item> itemsm,  Set<Perfil> perfiles,  Usuario usuarioUltMov) {

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
    @Id
    @GeneratedValue
    public Integer getId() {
        return id;
    }
 @Column(name = "principal")
    public java.lang.Integer getPrincipal() {
        return principal;
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
     @ManyToMany(
            cascade = {CascadeType.PERSIST, CascadeType.MERGE},
            targetEntity = Item.class
    )
    @JoinTable(
            name = "item_item",
            foreignKey = @ForeignKey(name = "pk"),
            joinColumns = @JoinColumn(name = "item_id" , foreignKey = @ForeignKey(name = "fk_item") ),
            inverseJoinColumns = @JoinColumn(name = "item_id"  , foreignKey = @ForeignKey(name = "fk_item"))
    )
    public Set<Item> getItemsm() {
        return itemsm;
    }
     @ManyToMany(
            cascade = {CascadeType.PERSIST, CascadeType.MERGE},
            targetEntity = Perfil.class
    )
    @JoinTable(
            name = "item_perfil",
            foreignKey = @ForeignKey(name = "pk"),
            joinColumns = @JoinColumn(name = "item_id" , foreignKey = @ForeignKey(name = "fk_item") ),
            inverseJoinColumns = @JoinColumn(name = "perfil_id"  , foreignKey = @ForeignKey(name = "fk_perfil"))
    )
    public Set<Perfil> getPerfiles() {
        return perfiles;
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
    public void setItemsm(Set<Item> itemsm) {
        this.itemsm = itemsm;
    }
    public void setPerfiles(Set<Perfil> perfiles) {
        this.perfiles = perfiles;
    }
    public void setUsuarioUltMov(Usuario usuarioUltMov) {
        this.usuarioUltMov = usuarioUltMov;
    }
// seters fin
}
