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
@Table(name = "direcciones2")
public class Direccion2 {
    private Integer id;
    private String calle;
    private Integer noInterior;
    private String colonia;
    private DatoPersonal2 persona;

    public Direccion2(){}
    public Direccion2(Integer id, String calle, Integer noInterior, String colonia, DatoPersonal2 persona) {
        this.id = id;
        this.calle = calle;
        this.noInterior = noInterior;
        this.colonia = colonia;
        this.persona = persona;
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
    @ManyToOne
    @JoinColumn(name = "id_dato_persona", 
                foreignKey = @ForeignKey(name = "fk_dato_persona"))
    public void setPersona(DatoPersonal2 persona) {
        this.persona = persona;
    }

    public DatoPersonal2 getPersona() {
        return persona;
    }

}
