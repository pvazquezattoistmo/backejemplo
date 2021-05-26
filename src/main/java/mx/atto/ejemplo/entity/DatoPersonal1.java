package mx.atto.ejemplo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.ForeignKey;

@Entity
@Table(name = "datos_personales1")
public class DatoPersonal1 {
   private Integer id;
   private String nombre;
   private Integer edad;
   private Integer sexo;
   private Direccion1 direccion1;
   
   public DatoPersonal1(){}

    public DatoPersonal1(Integer id, String nombre, Integer edad, Integer sexo, Direccion1 direccion1) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.direccion1 = direccion1;
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

    public Direccion1 getDireccion1() {
        return this.direccion1;
    }
    @ManyToOne
    @JoinColumn(name = "id_direccion", 
                foreignKey = @ForeignKey(name = "fk_direccion1"))
    public void setDireccion1(Direccion1 direccion1) {
        this.direccion1 = direccion1;
    }

}