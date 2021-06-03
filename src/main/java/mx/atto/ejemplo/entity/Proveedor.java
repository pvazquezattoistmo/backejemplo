package mx.atto.ejemplo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.ForeignKey;

@Entity
@Table(name = "proveedores")
public class Proveedor {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Integer id;

    @Column(name = "codigo_proovedores")
    private String codigoProovedores;

    @Column(name = "codigoBarras_proveedores")
    private String codigoBarrasproveedores;

    @OneToOne
    @JoinColumn(name = "categoria", foreignKey = @ForeignKey(name = "fk_prov_categoria"))
    private Categoria categoria;

    @OneToOne
    @JoinColumn(name = "tercero", foreignKey = @ForeignKey(name = "fk_prov_tercero"))
    private Tercero tercero;

    public Proveedor() {
    }

    public Proveedor(Integer id, String codigoProovedores, String codigoBarrasproveedores, Categoria categoria,
            Tercero tercero) {
        this.id = id;
        this.codigoProovedores = codigoProovedores;
        this.codigoBarrasproveedores = codigoBarrasproveedores;
        this.categoria = categoria;
        this.tercero = tercero;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer idProveedores) {
        this.id = idProveedores;
    }

    public String getCodigoProovedores() {
        return codigoProovedores;
    }

    public void setCodigoProovedores(String codigoProovedores) {
        this.codigoProovedores = codigoProovedores;
    }

    public String getCodigoBarrasproveedores() {
        return codigoBarrasproveedores;
    }

    public void setCodigoBarrasproveedores(String codigoBarrasproveedores) {
        this.codigoBarrasproveedores = codigoBarrasproveedores;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria etiquetaClientes) {
        this.categoria = etiquetaClientes;
    }

    public Tercero getTercero() {
        return tercero;
    }

    public void setTercero(Tercero tercero) {
        this.tercero = tercero;
    }

}
