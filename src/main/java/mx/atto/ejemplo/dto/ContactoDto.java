package mx.atto.ejemplo.dto;

import java.util.Date;

public class ContactoDto {

    private Integer id;
    private String nombreContactos;
    private String apellidoContactos;
    private String tituloContactos;
    private String puestoTrabajocontactos;
    private String direccionContactos;
    private String codigoPostalcontactos;
    private String ciudadContactos;
    private String paisContactos;
    private String estadoContactos;
    private String telTrabajocontactos;
    private String celularContactos;
    private String emailContactos;
    private boolean correoMasivocontactos;
    private Date fechanacimientoContactos;
    private CategoriaDto categoria;
    private TerceroDto tercero;

    public ContactoDto() {
    }

    public ContactoDto(Integer id, String nombreContactos, String apellidoContactos, String tituloContactos,
            String puestoTrabajocontactos, String direccionContactos, String codigoPostalcontactos,
            String ciudadContactos, String paisContactos, String estadoContactos, String telTrabajocontactos,
            String celularContactos, String emailContactos, boolean correoMasivocontactos,
            Date fechanacimientoContactos, CategoriaDto categoria, TerceroDto tercero) {
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

}
