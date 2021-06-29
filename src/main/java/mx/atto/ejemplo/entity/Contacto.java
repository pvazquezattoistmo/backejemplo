package mx.atto.ejemplo.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "contactos")
public class Contacto {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Integer id;

    @Column(name = "nombre_contactos")
    private String nombreContactos;

    @Column(name = "apellido_contactos")
    private String apellidoContactos;

    @Column(name = "titulo_contactos")
    private String tituloContactos;

    @Column(name = "puestoTrabajo_contactos")
    private String puestoTrabajocontactos;

    @Column(name = "direccion_contactos")
    private String direccionContactos;

    @Column(name = "codigoPostal_contactos")
    private String codigoPostalcontactos;

    @Column(name = "ciudad_contactos")
    private String ciudadContactos;

    @Column(name = "pais_contactos")
    private String paisContactos;

    @Column(name = "estado_contactos")
    private String estadoContactos;

    @Column(name = "telTrabajo_contactos")
    private String telTrabajocontactos;

    @Column(name = "celular_contactos")
    private String celularContactos;

    @Column(name = "email_contactos")
    private String emailContactos;

    @Column(name = "correoMasivo_contactos")
    private boolean correoMasivocontactos;

    @Column(name = "fechanacimiento_contactos")
    @Temporal(TemporalType.DATE)
    private Date fechanacimientoContactos;

    @ManyToOne
    @JoinColumn(name = "id_categoria", foreignKey = @ForeignKey(name = "fk_contacto_cat"))
    private Categoria categoria;

    @ManyToOne
    @JoinColumn(name = "id_tercero", foreignKey = @ForeignKey(name = "fk_contacto_ter"))
    private Tercero tercero;

    public Contacto() {
    }

    public Contacto(Integer id, String nombreContactos, String apellidoContactos, String tituloContactos,
            String puestoTrabajocontactos, String direccionContactos, String codigoPostalcontactos,
            String ciudadContactos, String paisContactos, String estadoContactos, String telTrabajocontactos,
            String celularContactos, String emailContactos, boolean correoMasivocontactos,
            Date fechanacimientoContactos, Categoria categoria, Tercero tercero) {
        this.id = id;
        this.nombreContactos = nombreContactos;
        this.apellidoContactos = apellidoContactos;
        this.tituloContactos = tituloContactos;
        this.puestoTrabajocontactos = puestoTrabajocontactos;
        this.direccionContactos = direccionContactos;
        this.codigoPostalcontactos = codigoPostalcontactos;
        this.ciudadContactos = ciudadContactos;
        this.paisContactos = paisContactos;
        this.estadoContactos = estadoContactos;
        this.telTrabajocontactos = telTrabajocontactos;
        this.celularContactos = celularContactos;
        this.emailContactos = emailContactos;
        this.correoMasivocontactos = correoMasivocontactos;
        this.fechanacimientoContactos = fechanacimientoContactos;
        this.categoria = categoria;
        this.tercero = tercero;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombreContactos() {
        return this.nombreContactos;
    }

    public void setNombreContactos(String nombreContactos) {
        this.nombreContactos = nombreContactos;
    }

    public String getApellidoContactos() {
        return this.apellidoContactos;
    }

    public void setApellidoContactos(String apellidoContactos) {
        this.apellidoContactos = apellidoContactos;
    }

    public String getTituloContactos() {
        return this.tituloContactos;
    }

    public void setTituloContactos(String tituloContactos) {
        this.tituloContactos = tituloContactos;
    }

    public String getPuestoTrabajocontactos() {
        return this.puestoTrabajocontactos;
    }

    public void setPuestoTrabajocontactos(String puestoTrabajocontactos) {
        this.puestoTrabajocontactos = puestoTrabajocontactos;
    }

    public String getDireccionContactos() {
        return this.direccionContactos;
    }

    public void setDireccionContactos(String direccionContactos) {
        this.direccionContactos = direccionContactos;
    }

    public String getCodigoPostalcontactos() {
        return this.codigoPostalcontactos;
    }

    public void setCodigoPostalcontactos(String codigoPostalcontactos) {
        this.codigoPostalcontactos = codigoPostalcontactos;
    }

    public String getCiudadContactos() {
        return this.ciudadContactos;
    }

    public void setCiudadContactos(String ciudadContactos) {
        this.ciudadContactos = ciudadContactos;
    }

    public String getPaisContactos() {
        return this.paisContactos;
    }

    public void setPaisContactos(String paisContactos) {
        this.paisContactos = paisContactos;
    }

    public String getEstadoContactos() {
        return this.estadoContactos;
    }

    public void setEstadoContactos(String estadoContactos) {
        this.estadoContactos = estadoContactos;
    }

    public String getTelTrabajocontactos() {
        return this.telTrabajocontactos;
    }

    public void setTelTrabajocontactos(String telTrabajocontactos) {
        this.telTrabajocontactos = telTrabajocontactos;
    }

    public String getCelularContactos() {
        return this.celularContactos;
    }

    public void setCelularContactos(String celularContactos) {
        this.celularContactos = celularContactos;
    }

    public String getEmailContactos() {
        return this.emailContactos;
    }

    public void setEmailContactos(String emailContactos) {
        this.emailContactos = emailContactos;
    }

    public boolean isCorreoMasivocontactos() {
        return this.correoMasivocontactos;
    }

    public boolean getCorreoMasivocontactos() {
        return this.correoMasivocontactos;
    }

    public void setCorreoMasivocontactos(boolean correoMasivocontactos) {
        this.correoMasivocontactos = correoMasivocontactos;
    }

    public Date getFechanacimientoContactos() {
        return this.fechanacimientoContactos;
    }

    public void setFechanacimientoContactos(Date fechanacimientoContactos) {
        this.fechanacimientoContactos = fechanacimientoContactos;
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
