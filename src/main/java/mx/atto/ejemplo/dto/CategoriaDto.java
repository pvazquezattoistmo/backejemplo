package mx.atto.ejemplo.dto;

import mx.atto.ejemplo.entity.Categoria;

public class CategoriaDto {

    private Integer id;
    private String referenciaCategorias;
    private String descripcionCategorias;
    private String tipoCategorias;

    public CategoriaDto() {
    }

    public CategoriaDto(Integer id, String referenciaCategorias, String descripcionCategorias, String tipoCategorias) {
        this.id = id;
        this.referenciaCategorias = referenciaCategorias;
        this.descripcionCategorias = descripcionCategorias;
        this.tipoCategorias = tipoCategorias;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getReferenciaCategorias() {
        return this.referenciaCategorias;
    }

    public void setReferenciaCategorias(String referenciaCategorias) {
        this.referenciaCategorias = referenciaCategorias;
    }

    public String getDescripcionCategorias() {
        return this.descripcionCategorias;
    }

    public void setDescripcionCategorias(String descripcionCategorias) {
        this.descripcionCategorias = descripcionCategorias;
    }

    public String getTipoCategorias() {
        return this.tipoCategorias;
    }

    public void setTipoCategorias(String tipoCategorias) {
        this.tipoCategorias = tipoCategorias;
    }

    public static CategoriaDto fromEntidad(Categoria entidad) {
        CategoriaDto salida = new CategoriaDto();

        salida.setId(entidad.getId());
        salida.setReferenciaCategorias(entidad.getReferenciaCategorias());
        salida.setDescripcionCategorias(entidad.getDescripcionCategorias());
        salida.setTipoCategorias(entidad.getTipoCategorias());

        return salida;

    }

    public Categoria toEntidadBase() {
        CategoriaDto catEntidad = this;
        Categoria salida = new Categoria();

        salida.setId(catEntidad.getId());
        salida.setReferenciaCategorias(catEntidad.getReferenciaCategorias());
        salida.setDescripcionCategorias(catEntidad.getDescripcionCategorias());
        salida.setTipoCategorias(catEntidad.getTipoCategorias());

        return salida;

    }

    @Override
    public String toString() {
        return "{" +
            ", id='" + getId()+ "'" +
            ", referenciaCategorias='" + getReferenciaCategorias()+ "'" +
            ", descripcionCategorias='" + getDescripcionCategorias()+ "'" +
            ", tipoCategorias='" + getTipoCategorias()+ "'" +
           "}";
            
    }

}
