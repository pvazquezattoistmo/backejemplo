package mx.atto.ejemplo.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import java.util.Iterator;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
//import mx.edu.wendulinea.control.entity.core.Usuario;

/**
 *
 * @author IstmoSoft
 */
@Entity
@Table(name = "usuario")
public class Usuario {

// ids inicio
    private Integer id = null;
// ids fin

// atributos inicio
    private String nombre = null ;
    private String primerApellido = null ;
    private String segundoApellido = null ;
    private String correoElectronico = null ;
    private String username = null;
    private String password = null;
    private Date fechaRegistro = null ;
    private Date fechaActualizacion = null ;
    private Date fechaBaja = null ;
    private java.lang.Integer status = null;
    private Usuario usuarioUltMov = null;
    private Perfil perfil = null;
    private Date tiempointentos = null;
    private java.lang.Integer intentos = null;
// atributos fin

// constructores inicio
    public Usuario() {
    }

    public Usuario(Integer id, String nombre, String primerApellido, String segundoApellido, String correoElectronico, String username, String password, java.lang.Integer intentos, Date tiempointentos, Date fechaRegistro, Date fechaActualizacion, Date fechaBaja, java.lang.Integer status, Usuario usuarioUltMov, Perfil perfil) {

        this.id = id;
        this.nombre=nombre;
        this.primerApellido=primerApellido;
        this.segundoApellido=segundoApellido;
        this.correoElectronico=correoElectronico;
        this.username = username;
        this.password = password;
        this.intentos = intentos;
        this.tiempointentos = tiempointentos;
        this.fechaRegistro=fechaRegistro;
        this.fechaActualizacion=fechaActualizacion;
        this.fechaBaja=fechaBaja;
        this.status = status;
        this.usuarioUltMov = usuarioUltMov;
        this.perfil = perfil;

    }
// constructores fin

// geters inicio
    @Id
    @GeneratedValue
    public Integer getId() {
        return id;
    }

    @Column(name = "password")
    public String getPassword() {
        return password;
    }

    @Column(name = "username")
    public String getUsername() {
        return username;
    }

    @Column(name = "status")
    public java.lang.Integer getStatus() {
        return status;
    }

    @ManyToOne
    @JoinColumn(name = "usuarioultmov", foreignKey = @ForeignKey(name = "fk_usuario"))
    public Usuario getUsuarioUltMov() {
        return usuarioUltMov;
    }

    @ManyToOne
    @JoinColumn(name = "perfil", foreignKey = @ForeignKey(name = "fk_perfil"))
    public Perfil getPerfil() {
        return perfil;
    }

    @Column(name = "tiempointentos")
    public Date getTiempointentos() {
        return tiempointentos;
    }

    @Column(name = "intentos")
    public Integer getIntentos() {
        return intentos;
    }
    
    @Column(name = "nombre")
    public String getNombre() {
        return nombre;
    }

    @Column(name = "primerapellido")
    public String getPrimerApellido() {
        return primerApellido;
    }

    @Column(name = "segundoapellido")
    public String getSegundoApellido() {
        return segundoApellido;
    }

    @Column(name = "correoelectronico")
    public String getCorreoElectronico() {
        return correoElectronico;
    }

    @Column(name = "fecharegistro")
    public Date getFechaRegistro() {
        return fechaRegistro;
    }

    @Column(name = "fechaactualizacion")
    public Date getFechaActualizacion() {
        return fechaActualizacion;
    }

    @Column(name = "fechabaja")
    public Date getFechaBaja() {
        return fechaBaja;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setStatus(java.lang.Integer status) {
        this.status = status;
    }

    public void setUsuarioUltMov(Usuario usuarioUltMov) {
        this.usuarioUltMov = usuarioUltMov;
    }

    public void setPerfil(Perfil perfil) {
        this.perfil = perfil;
    }

    public void setTiempointentos(Date tiempointentos) {
        this.tiempointentos = tiempointentos;
    }

    public void setIntentos(Integer intentos) {
        this.intentos = intentos;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setPrimerApellido(String primerApellido) {
        this.primerApellido = primerApellido;
    }

    public void setSegundoApellido(String segundoApellido) {
        this.segundoApellido = segundoApellido;
    }

    public void setCorreoElectronico(String correoElectronico) {
        this.correoElectronico = correoElectronico;
    }

    public void setFechaRegistro(Date fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }

    public void setFechaActualizacion(Date fechaActualizacion) {
        this.fechaActualizacion = fechaActualizacion;
    }

    public void setFechaBaja(Date fechaBaja) {
        this.fechaBaja = fechaBaja;
    }


// seters fin
}
