package mx.atto.ejemplo.dto;

public class CategoriaDto {

    private Integer id;
    private String referenciaCategorias;
    private String descripcionCategorias;
    private String tipoCategorias;

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

}
