package mx.atto.ejemplo.dto;

import mx.atto.ejemplo.entity.Proveedor;

public class ProveedorDto {

    private Integer id;
    private String codigoProovedores;
    private String codigoBarrasproveedores;
    private CategoriaDto categoria;
    private TerceroDto tercero;

    public ProveedorDto() {
    }

    public ProveedorDto(Integer id, String codigoProovedores, String codigoBarrasproveedores, CategoriaDto categoria,
            TerceroDto tercero) {
        this.id = id;
        this.codigoProovedores = codigoProovedores;
        this.codigoBarrasproveedores = codigoBarrasproveedores;
        this.categoria = categoria;
        this.tercero = tercero;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCodigoProovedores() {
        return this.codigoProovedores;
    }

    public void setCodigoProovedores(String codigoProovedores) {
        this.codigoProovedores = codigoProovedores;
    }

    public String getCodigoBarrasproveedores() {
        return this.codigoBarrasproveedores;
    }

    public void setCodigoBarrasproveedores(String codigoBarrasproveedores) {
        this.codigoBarrasproveedores = codigoBarrasproveedores;
    }

    public CategoriaDto getCategoria() {
        return this.categoria;
    }

    public void setCategoria(CategoriaDto categoria) {
        this.categoria = categoria;
    }

    public TerceroDto getTercero() {
        return this.tercero;
    }

    public void setTercero(TerceroDto tercero) {
        this.tercero = tercero;
    }

    public static ProveedorDto fromEntidad(Proveedor entidad) {
        ProveedorDto salida = new ProveedorDto();

        salida.setId(entidad.getId());
        salida.setCodigoProovedores(entidad.getCodigoProovedores());
        salida.setCodigoBarrasproveedores(entidad.getCodigoBarrasproveedores());

        return salida;

    }

    public Proveedor toEntidadBase() {
        ProveedorDto proEntidad = this;
        Proveedor salida = new Proveedor();

        salida.setId(proEntidad.getId());
        salida.setCodigoProovedores(proEntidad.getCodigoProovedores());
        salida.setCodigoBarrasproveedores(proEntidad.getCodigoBarrasproveedores());

        return salida;

    }
    
    @Override
    public String toString() {
        return "{" +
            " id='" + getId()+ "'" +
            ", codigoProovedores='" + getCodigoProovedores()+ "'" +
            ", codigoBarrasproveedores='" + getCodigoBarrasproveedores()+ "'" +
             "}";
           
    }

}
