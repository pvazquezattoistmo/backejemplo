package mx.atto.ejemplo.dto;

import java.util.Objects;

import mx.atto.ejemplo.entity.DatoPersonal1;

public class DatoPersonal1Dto {
    private Integer id;
    private String nombre;
    private Integer edad;
    private Integer sexo;
    private Direccion1Dto direccion1;

    public DatoPersonal1Dto() {
    }
    public DatoPersonal1Dto(Integer id, String nombre, Integer edad, Integer sexo, Direccion1Dto direccion1) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.direccion1 = direccion1;
    }
    public static DatoPersonal1Dto fromEntidad(DatoPersonal1 PEentidad){
        DatoPersonal1Dto salida = new DatoPersonal1Dto();
        salida.setId(PEentidad.getId());
        salida.setNombre(PEentidad.getNombre());
        salida.setEdad(PEentidad.getEdad());
        salida.setSexo(PEentidad.getSexo());
        if (PEentidad.getDireccion1() != null)
          salida.setDireccion1(Direccion1Dto.fromEntidad(PEentidad.getDireccion1()));        
        return salida;
    }
    public  DatoPersonal1 toEntidadBase(){
        DatoPersonal1Dto PEentidad = this;	   
        DatoPersonal1 salida = new DatoPersonal1();
        salida.setId(this.getId());
        salida.setNombre(this.getNombre());
        salida.setEdad(this.getEdad());
        salida.setSexo(this.getSexo());
        return salida;		
    }
    public  DatoPersonal1 toEntidad(){
        DatoPersonal1Dto PEentidad = this;	   
        DatoPersonal1 salida = new DatoPersonal1();
        salida.setId(this.getId());
        salida.setNombre(this.getNombre());
        salida.setEdad(this.getEdad());
        salida.setSexo(this.getSexo());
        if (this.getDireccion1()!= null)
          salida.setDireccion1( this.getDireccion1().toEntidad()); 
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

    public Direccion1Dto getDireccion1() {
        return this.direccion1;
    }

    public void setDireccion1(Direccion1Dto direccion1) {
        this.direccion1 = direccion1;
    }

    public DatoPersonal1Dto id(Integer id) {
        this.id = id;
        return this;
    }

    public DatoPersonal1Dto nombre(String nombre) {
        this.nombre = nombre;
        return this;
    }

    public DatoPersonal1Dto edad(Integer edad) {
        this.edad = edad;
        return this;
    }

    public DatoPersonal1Dto sexo(Integer sexo) {
        this.sexo = sexo;
        return this;
    }

    public DatoPersonal1Dto direccion1(Direccion1Dto direccion1) {
        this.direccion1 = direccion1;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof DatoPersonal1Dto)) {
            return false;
        }
        DatoPersonal1Dto datoPersonal1Dto = (DatoPersonal1Dto) o;
        return Objects.equals(id, datoPersonal1Dto.id) && Objects.equals(nombre, datoPersonal1Dto.nombre) && Objects.equals(edad, datoPersonal1Dto.edad) && Objects.equals(sexo, datoPersonal1Dto.sexo) && Objects.equals(direccion1, datoPersonal1Dto.direccion1);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nombre, edad, sexo, direccion1);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", nombre='" + getNombre() + "'" +
            ", edad='" + getEdad() + "'" +
            ", sexo='" + getSexo() + "'" +
            ", direccion1='" + getDireccion1() + "'" +
            "}";
    }

}