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
    @Column(name = "id")
    private Integer id;

    @Column(name = "codigo_clientes")
    private String codigoClientes;

    @OneToOne
    @JoinColumn(name = "categoria", foreignKey = @ForeignKey(name = "fk_cli_categoria"))
    private Categoria categoria;

    @OneToOne
    @JoinColumn(name = "tercero", foreignKey = @ForeignKey(name = "fk_cli_tercero"))
    private Tercero tercero;

    public Cliente() {
    }

    public Cliente(Integer id, String codigoClientes, Categoria categoria, Tercero tercero) {
        this.id = id;
        this.codigoClientes = codigoClientes;
        this.categoria = categoria;
        this.tercero = tercero;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCodigoClientes() {
        return this.codigoClientes;
    }

    public void setCodigoClientes(String codigoClientes) {
        this.codigoClientes = codigoClientes;
    }

    public Categoria getCategoria() {
        return this.categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public Tercero getTercero() {
        return this.tercero;
    }

    public void setTercero(Tercero tercero) {
        this.tercero = tercero;
    }

}
