package mx.atto.ejemplo.dto;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import mx.atto.ejemplo.entity.DatoPersonal3;
import mx.atto.ejemplo.entity.Direccion3;

public class Direccion3Dto {
    private Integer id;
    private String calle;
    private Integer noInterior;
    private String colonia;
    private Set <DatoPersonal3Dto> personas;

    public Direccion3Dto() {
    }

    public Direccion3Dto(Integer id, String calle, Integer noInterior, String colonia, Set <DatoPersonal3Dto> personas) {
        this.id = id;
        this.calle = calle;
        this.noInterior = noInterior;
        this.colonia = colonia;
        this.personas = personas;
    }
    public static Direccion3Dto fromEntidad(Direccion3 entrada){
        Direccion3Dto salida = new Direccion3Dto();
        salida.setId(entrada.getId());
        salida.setCalle(entrada.getCalle());
        salida.setNoInterior(entrada.getNoInterior());
        salida.setColonia(entrada.getColonia());
        Set<DatoPersonal3Dto> auxpersonas = new HashSet<DatoPersonal3Dto>();
        for (DatoPersonal3 dp3 : entrada.getPersonas()) {
            auxpersonas.add(DatoPersonal3Dto.fromEntidad(dp3));
        }
        salida.setPersonas( auxpersonas);    
        return salida;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCalle() {
        return this.calle;
    }

    public void setCalle(String calle) {
        this.calle = calle;
    }

    public Integer getNoInterior() {
        return this.noInterior;
    }

    public void setNoInterior(Integer noInterior) {
        this.noInterior = noInterior;
    }

    public String getColonia() {
        return this.colonia;
    }

    public void setColonia(String colonia) {
        this.colonia = colonia;
    }

    public Set <DatoPersonal3Dto> getPersonas() {
        return this.personas;
    }

    public void setPersonas(Set <DatoPersonal3Dto> personas) {
        this.personas = personas;
    }

    public Direccion3Dto id(Integer id) {
        this.id = id;
        return this;
    }

    public Direccion3Dto calle(String calle) {
        this.calle = calle;
        return this;
    }

    public Direccion3Dto noInterior(Integer noInterior) {
        this.noInterior = noInterior;
        return this;
    }

    public Direccion3Dto colonia(String colonia) {
        this.colonia = colonia;
        return this;
    }

    public Direccion3Dto persona(Set <DatoPersonal3Dto> personas) {
        this.personas = personas;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Direccion3Dto)) {
            return false;
        }
        Direccion3Dto direccion3Dto = (Direccion3Dto) o;
        return Objects.equals(id, direccion3Dto.id) && Objects.equals(calle, direccion3Dto.calle) && Objects.equals(noInterior, direccion3Dto.noInterior) && Objects.equals(colonia, direccion3Dto.colonia) && Objects.equals(personas, direccion3Dto.personas);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, calle, noInterior, colonia, personas);
    }

    @Override
    public String toString() {
        String salida =       ", personas=' ["     ;
        for (DatoPersonal3Dto datoPersonal3Dto : getPersonas()) {
            salida += datoPersonal3Dto +","; 
        }
        salida +="]'"; 

        return "{" +
            " id='" + getId() + "'" +
            ", calle='" + getCalle() + "'" +
            ", noInterior='" + getNoInterior() + "'" +
            ", colonia='" + getColonia() + "'" +salida+
            "}";
    }


}