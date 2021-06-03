package mx.atto.ejemplo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "categorias")
public class Categoria {

    @Id
    @GeneratedValue()
    @Column(name = "id")
    private Integer id;

    @Column(name = "referencia_categorias")
    private String referenciaCategorias;

    @Column(name = "descripcion_categorias")
    private String descripcionCategorias;

    @Column(name = "tipo_categorias")
    private String tipoCategorias;

    public Categoria() {
    }

    public Categoria(Integer idCategorias, String referenciaCategorias, String descripcionCategorias,
            String tipoCategorias) {
        this.id = idCategorias;
        this.referenciaCategorias = referenciaCategorias;
        this.descripcionCategorias = descripcionCategorias;
        this.tipoCategorias = tipoCategorias;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer idCategorias) {
        this.id = idCategorias;
    }

    public String getReferenciaCategorias() {
        return referenciaCategorias;
    }

    public void setReferenciaCategorias(String referenciaCategorias) {
        this.referenciaCategorias = referenciaCategorias;
    }

    public String getDescripcionCategorias() {
        return descripcionCategorias;
    }

    public void setDescripcionCategorias(String descripcionCategorias) {
        this.descripcionCategorias = descripcionCategorias;
    }

    public String getTipoCategorias() {
        return tipoCategorias;
    }

    public void setTipoCategorias(String tipoCategorias) {
        this.tipoCategorias = tipoCategorias;
    }

}
