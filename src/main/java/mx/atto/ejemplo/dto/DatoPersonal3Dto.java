package mx.atto.ejemplo.dto;

import java.util.Objects;

import mx.atto.ejemplo.entity.DatoPersonal3;

public class DatoPersonal3Dto {
    private Integer id;
    private String nombre;
    private Integer edad;
    private Integer sexo;
    private Direccion3Dto direccion3;

    public DatoPersonal3Dto() {
    }
    public DatoPersonal3Dto(Integer id, String nombre, Integer edad, Integer sexo, Direccion3Dto direccion3) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.direccion3 = direccion3;
    }
    public static DatoPersonal3Dto fromEntidad(DatoPersonal3 PEentidad){
        DatoPersonal3Dto salida = new DatoPersonal3Dto();
        salida.setId(PEentidad.getId());
        salida.setNombre(PEentidad.getNombre());
        salida.setEdad(PEentidad.getEdad());
        salida.setSexo(PEentidad.getSexo());
        // if (PEentidad.getDireccion3() != null)
        //   salida.setDireccion1(Direccion3Dto.fromEntidad(PEentidad.getDireccion3()));        
        return salida;
    }
    public  DatoPersonal3 toEntidadBase(){
        DatoPersonal3Dto PEentidad = this;	   
        DatoPersonal3 salida = new DatoPersonal3();
        salida.setId(this.getId());
        salida.setNombre(this.getNombre());
        salida.setEdad(this.getEdad());
        salida.setSexo(this.getSexo());
        return salida;		
    }
    public  DatoPersonal3 toEntidad(){
        DatoPersonal3Dto PEentidad = this;	   
        DatoPersonal3 salida = new DatoPersonal3();
        salida.setId(this.getId());
        salida.setNombre(this.getNombre());
        salida.setEdad(this.getEdad());
        salida.setSexo(this.getSexo());
        // if (this.getDireccion3()!= null)
        //   salida.setDireccion1( this.getDireccion3().toEntidad()); 
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

    public Direccion3Dto getDireccion3() {
        return this.direccion3;
    }

    public void setDireccion1(Direccion3Dto direccion3) {
        this.direccion3 = direccion3;
    }

    public DatoPersonal3Dto id(Integer id) {
        this.id = id;
        return this;
    }

    public DatoPersonal3Dto nombre(String nombre) {
        this.nombre = nombre;
        return this;
    }

    public DatoPersonal3Dto edad(Integer edad) {
        this.edad = edad;
        return this;
    }

    public DatoPersonal3Dto sexo(Integer sexo) {
        this.sexo = sexo;
        return this;
    }

    public DatoPersonal3Dto direccion3(Direccion3Dto direccion3) {
        this.direccion3 = direccion3;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof DatoPersonal3Dto)) {
            return false;
        }
        DatoPersonal3Dto datoPersonal1Dto = (DatoPersonal3Dto) o;
        return Objects.equals(id, datoPersonal1Dto.id) && Objects.equals(nombre, datoPersonal1Dto.nombre) && Objects.equals(edad, datoPersonal1Dto.edad) && Objects.equals(sexo, datoPersonal1Dto.sexo) && Objects.equals(direccion3, datoPersonal1Dto.direccion3);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nombre, edad, sexo, direccion3);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", nombre='" + getNombre() + "'" +
            ", edad='" + getEdad() + "'" +
            ", sexo='" + getSexo() + "'" +
            ", direccion3='" + getDireccion3() + "'" +
            "}";
    }

}