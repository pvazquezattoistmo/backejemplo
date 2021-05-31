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
@Table(name = "clientes")
public class Cliente {

    @Id
    @GeneratedValue
    @Column(name = "id_clientes")
    private Integer idCliente;

    @Column(name = "codigo_clientes")
    private String codigoClientes;

    @OneToOne
    @JoinColumn(name = "idCategorias", foreignKey = @ForeignKey(name = "fk_cliente_categoria"))
    private Categoria etiquetaClientes;

    @OneToOne
    @JoinColumn(name = "idTerceros", foreignKey = @ForeignKey(name = "fk_cliente_tercero"))
    private Tercero tercero;

    public Integer getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(Integer idCliente) {
        this.idCliente = idCliente;
    }

    public String getCodigoClientes() {
        return codigoClientes;
    }

    public void setCodigoClientes(String codigoClientes) {
        this.codigoClientes = codigoClientes;
    }

    public Categoria getEtiquetaClientes() {
        return etiquetaClientes;
    }

    public void setEtiquetaClientes(Categoria etiquetaClientes) {
        this.etiquetaClientes = etiquetaClientes;
    }

}
