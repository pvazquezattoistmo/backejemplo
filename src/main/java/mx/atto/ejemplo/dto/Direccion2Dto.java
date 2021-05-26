package mx.atto.ejemplo.dto;

import java.util.Objects;

import mx.atto.ejemplo.entity.Direccion2;

public class Direccion2Dto {
    private Integer id;
    private String calle;
    private Integer noInterior;
    private String colonia;
    private DatoPersonal2Dto persona;

    public Direccion2Dto() {
    }

    public Direccion2Dto(Integer id, String calle, Integer noInterior, String colonia, DatoPersonal2Dto persona) {
        this.id = id;
        this.calle = calle;
        this.noInterior = noInterior;
        this.colonia = colonia;
        this.persona = persona;
    }
    public static Direccion2Dto fromEntidad(Direccion2 entrada){
        Direccion2Dto salida = new Direccion2Dto();
        salida.setId(entrada.getId());
        salida.setCalle(entrada.getCalle());
        salida.setNoInterior(entrada.getNoInterior());
        salida.setColonia(entrada.getColonia());
        salida.setPersona( DatoPersonal2Dto.fromEntidad( entrada.getPersona()));        
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

    public DatoPersonal2Dto getPersona() {
        return this.persona;
    }

    public void setPersona(DatoPersonal2Dto persona) {
        this.persona = persona;
    }

    public Direccion2Dto id(Integer id) {
        this.id = id;
        return this;
    }

    public Direccion2Dto calle(String calle) {
        this.calle = calle;
        return this;
    }

    public Direccion2Dto noInterior(Integer noInterior) {
        this.noInterior = noInterior;
        return this;
    }

    public Direccion2Dto colonia(String colonia) {
        this.colonia = colonia;
        return this;
    }

    public Direccion2Dto persona(DatoPersonal2Dto persona) {
        this.persona = persona;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Direccion2Dto)) {
            return false;
        }
        Direccion2Dto direccion2Dto = (Direccion2Dto) o;
        return Objects.equals(id, direccion2Dto.id) && Objects.equals(calle, direccion2Dto.calle) && Objects.equals(noInterior, direccion2Dto.noInterior) && Objects.equals(colonia, direccion2Dto.colonia) && Objects.equals(persona, direccion2Dto.persona);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, calle, noInterior, colonia, persona);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", calle='" + getCalle() + "'" +
            ", noInterior='" + getNoInterior() + "'" +
            ", colonia='" + getColonia() + "'" +
            ", persona='" + getPersona() + "'" +
            "}";
    }


}