package mx.atto.ejemplo.dto;

import java.util.Objects;

import mx.atto.ejemplo.entity.Direccion1;

public class Direccion1Dto {
    private Integer id;
    private String calle;
    private Integer noInterior;
    private String colonia;

    public Direccion1Dto() {
    }

    public Direccion1Dto(Integer id, String calle, Integer noInterior, String colonia) {
        this.id = id;
        this.calle = calle;
        this.noInterior = noInterior;
        this.colonia = colonia;
    }

    public static Direccion1Dto fromEntidad(Direccion1 PEentidad){
        Direccion1Dto salida = new Direccion1Dto();
        salida.setId(PEentidad.getId());
        salida.setCalle(PEentidad.getCalle());
        salida.setNoInterior(PEentidad.getNoInterior());
        salida.setColonia(PEentidad.getColonia());       
        return salida;
    }
    public  Direccion1 toEntidad(){
        Direccion1Dto PEentidad = this;	   
        Direccion1 salida = new Direccion1();
        salida.setId(PEentidad.getId());
        salida.setCalle(PEentidad.getCalle());
        salida.setNoInterior(PEentidad.getNoInterior());
        salida.setColonia(PEentidad.getColonia()); 
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

    public Direccion1Dto id(Integer id) {
        this.id = id;
        return this;
    }

    public Direccion1Dto calle(String calle) {
        this.calle = calle;
        return this;
    }

    public Direccion1Dto noInterior(Integer noInterior) {
        this.noInterior = noInterior;
        return this;
    }

    public Direccion1Dto colonia(String colonia) {
        this.colonia = colonia;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Direccion1Dto)) {
            return false;
        }
        Direccion1Dto direccion1Dto = (Direccion1Dto) o;
        return Objects.equals(id, direccion1Dto.id) && Objects.equals(calle, direccion1Dto.calle) && Objects.equals(noInterior, direccion1Dto.noInterior) && Objects.equals(colonia, direccion1Dto.colonia);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, calle, noInterior, colonia);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", calle='" + getCalle() + "'" +
            ", noInterior='" + getNoInterior() + "'" +
            ", colonia='" + getColonia() + "'" +
            "}";
    }

}