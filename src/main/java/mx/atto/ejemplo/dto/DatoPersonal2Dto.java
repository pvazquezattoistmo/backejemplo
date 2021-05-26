package mx.atto.ejemplo.dto;

import java.util.Objects;

import mx.atto.ejemplo.entity.DatoPersonal2;

public class DatoPersonal2Dto {
    private Integer id;
    private String nombre;
    private Integer edad;
    private Integer sexo;

    public DatoPersonal2Dto() {
    }

    public DatoPersonal2Dto(Integer id, String nombre, Integer edad, Integer sexo) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
    public static DatoPersonal2Dto fromEntidad(DatoPersonal2 PEentidad){
        DatoPersonal2Dto salida = new DatoPersonal2Dto();
        salida.setId(PEentidad.getId());
        salida.setNombre(PEentidad.getNombre());
        salida.setEdad(PEentidad.getEdad());
        salida.setSexo(PEentidad.getSexo());
        return salida;
    }
    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Integer getEdad() {
        return this.edad;
    }

    public void setEdad(Integer edad) {
        this.edad = edad;
    }

    public Integer getSexo() {
        return this.sexo;
    }

    public void setSexo(Integer sexo) {
        this.sexo = sexo;
    }

    public DatoPersonal2Dto id(Integer id) {
        this.id = id;
        return this;
    }

    public DatoPersonal2Dto nombre(String nombre) {
        this.nombre = nombre;
        return this;
    }

    public DatoPersonal2Dto edad(Integer edad) {
        this.edad = edad;
        return this;
    }

    public DatoPersonal2Dto sexo(Integer sexo) {
        this.sexo = sexo;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof DatoPersonal2Dto)) {
            return false;
        }
        DatoPersonal2Dto datoPersonal2Dto = (DatoPersonal2Dto) o;
        return Objects.equals(id, datoPersonal2Dto.id) && Objects.equals(nombre, datoPersonal2Dto.nombre) && Objects.equals(edad, datoPersonal2Dto.edad) && Objects.equals(sexo, datoPersonal2Dto.sexo);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nombre, edad, sexo);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", nombre='" + getNombre() + "'" +
            ", edad='" + getEdad() + "'" +
            ", sexo='" + getSexo() + "'" +
            "}";
    }

}