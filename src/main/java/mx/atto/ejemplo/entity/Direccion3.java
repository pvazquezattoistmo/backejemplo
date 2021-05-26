package mx.atto.ejemplo.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.ForeignKey;

@Entity
@Table(name = "direcciones3")
public class Direccion3 {
    private Integer id;
    private String calle;
    private Integer noInterior;
    private String colonia;
    private Set <DatoPersonal3> personas;
    public Direccion3(){};
    public Direccion3(Integer id, String calle, Integer noInterior, String colonia, Set <DatoPersonal3> personas) {
        this.id = id;
        this.calle = calle;
        this.noInterior = noInterior;
        this.colonia = colonia;
        this.personas = personas;
    }

    @Id
    @GeneratedValue
    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Column(name = "calle")
    public String getCalle() {
        return this.calle;
    }

    public void setCalle(String calle) {
        this.calle = calle;
    }

    @Column(name = "no_interior")
    public Integer getNoInterior() {
        return this.noInterior;
    }

    public void setNoInterior(Integer noInterior) {
        this.noInterior = noInterior;
    }

    @Column(name = "colonia")
    public String getColonia() {
        return this.colonia;
    }

    public void setColonia(String colonia) {
        this.colonia = colonia;
    }

    public Set<DatoPersonal3> getPersonas() {
        return personas;
    }
    @OneToMany
    @JoinColumn(name="persona_id")  
    public void setPersonas(Set<DatoPersonal3> personas) {
        this.personas = personas;
    }
}
