package mx.atto.ejemplo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
/*
    @OneToOne
    @JoinColumn(name = "idCategorias", foreignKey = @ForeignKey(name = "fk_cliente_categoria"))
    private Categoria etiquetaClientes;
*/
    @OneToOne
    @JoinColumn(name = "tercero", foreignKey = @ForeignKey(name = "fk_cliente_tercero"))
    private Tercero tercero;

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
/*
    public Categoria getEtiquetaClientes() {
        return etiquetaClientes;
    }

    public void setEtiquetaClientes(Categoria etiquetaClientes) {
        this.etiquetaClientes = etiquetaClientes;
    }
*/
    public Tercero getTercero() {
        return tercero;
    }

    public void setTercero(Tercero tercero) {
        this.tercero = tercero;
    }

}
