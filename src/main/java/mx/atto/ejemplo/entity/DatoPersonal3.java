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
@Table(name = "datos_personales3")
public class DatoPersonal3 {
   private Integer id;
   private String nombre;
   private Integer edad;
   private Integer sexo;
   private Direccion3 direccion3;
   public DatoPersonal3(){};
    public DatoPersonal3(Integer id, String nombre, Integer edad, Integer sexo, Direccion3 direccion3) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.direccion3 = direccion3;
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

    public Direccion3 getDireccion3() {
        return this.direccion3;
    }
    @ManyToOne
    @JoinColumn(name = "id_direccion", 
                foreignKey = @ForeignKey(name = "fk_direccion3"))
    public void setDireccion3(Direccion3 direccion3) {
        this.direccion3 = direccion3;
    }

}