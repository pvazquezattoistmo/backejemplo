package mx.atto.ejemplo.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.ForeignKey;

@Entity
@Table(name = "datos_personales4")
public class DatoPersonal4 {
    private Integer id;
    private String nombre;
    private Integer edad;
    private Integer sexo;
    private Set<Direccion4> direcciones;

    public DatoPersonal4(Integer id, String nombre, Integer edad, Integer sexo, Set<Direccion4> direcciones) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.direcciones = direcciones;
    }

    @Id
    @GeneratedValue
    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Column(name = "nombre")
    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Column(name = "edad")
    public Integer getEdad() {
        return this.edad;
    }

    public void setEdad(Integer edad) {
        this.edad = edad;
    }

    @Column(name = "sexo")
    public Integer getSexo() {
        return this.sexo;
    }

    public void setSexo(Integer sexo) {
        this.sexo = sexo;
    }

    public Set<Direccion4> getDirecciones() {
        return direcciones;
    }

    @ManyToMany(cascade = { CascadeType.PERSIST, CascadeType.MERGE }, targetEntity = Direccion4.class)
    @JoinTable(name = "dato_persona_direccion", foreignKey = @ForeignKey(name = "fk_dato_persona_direccion"), joinColumns = @JoinColumn(name = "id_dato_persona", foreignKey = @ForeignKey(name = "fk_persona")), inverseJoinColumns = @JoinColumn(name = "id_direccion", foreignKey = @ForeignKey(name = "fk_direccion")))
    public void setDirecciones(Set<Direccion4> direcciones) {
        this.direcciones = direcciones;
    }

}