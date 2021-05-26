package mx.atto.ejemplo.dto.token;

import java.util.Date;
import java.util.EnumSet;
import java.util.HashSet;
import java.util.Set;

import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;
import org.springframework.security.core.GrantedAuthority;

public class UserDTO implements UserDetails {

    private long expires;
    private String newPassword;
    @JsonIgnore
    private boolean accountLocked;
    @JsonIgnore
    private boolean accountExpired;
    @JsonIgnore
    private boolean credentialsExpired;
    @JsonIgnore
    private boolean accountEnabled;
    private Set<UserAuthorityDTO> authorities;

    // ids inicio
    private int idusuario;
// ids fin

// atributos inicio
    private int usuarioultimomov;
    private String correoe;
    private String apellidopaterno;
    private String nombre;
    private String password;
    private String apellidomaterno;
    private String username;
    private int status;
    private Date fechahora;


    public UserDTO() {
    }

    public UserDTO(String username) {
        this.username = username;
    }

    public UserDTO(String username, Date expires) {
        this.username = username;
        this.expires = expires.getTime();
    }

    public UserDTO(String username, String password, boolean b, boolean b0, boolean b1, boolean b2, List<GrantedAuthority> buildUserAuthority) {

    }

    @Override
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    @JsonIgnore
    public String getPassword() {
        return password;
    }

    @JsonProperty
    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    @JsonIgnore
    public Set<UserAuthorityDTO> getAuthorities() {
        return authorities;
    }

    // Use Roles as external API
    public Set<UserRoleDTO> getRoles() {
        Set<UserRoleDTO> roles = EnumSet.noneOf(UserRoleDTO.class);
        if (getAuthorities() != null) {
            for (UserAuthorityDTO authority : getAuthorities()) {
                roles.add(UserRoleDTO.valueOf(authority));
            }
        }
        return roles;
    }

    public void setRoles(Set<UserRoleDTO> roles) {
        for (UserRoleDTO role : roles) {
            grantRole(role);
        }
    }

    public void grantRole(UserRoleDTO role) {
        if (getAuthorities() == null) {
            setAuthorities(new HashSet<UserAuthorityDTO>());
        }
        getAuthorities().add(role.asAuthorityFor(this));
    }

    public void revokeRole(UserRoleDTO role) {
        if (getAuthorities() != null) {
            getAuthorities().remove(role.asAuthorityFor(this));
        }
    }

    public boolean hasRole(UserRoleDTO role) {
        return getAuthorities().contains(role.asAuthorityFor(this));
    }

    @Override
    @JsonIgnore
    public boolean isAccountNonExpired() {
        return !isAccountExpired();
    }

    @Override
    @JsonIgnore
    public boolean isAccountNonLocked() {
        return !isAccountLocked();
    }

    @Override
    @JsonIgnore
    public boolean isCredentialsNonExpired() {
        return !isCredentialsExpired();
    }

    @Override
    @JsonIgnore
    public boolean isEnabled() {
        return !isAccountEnabled();
    }

    public long getExpires() {
        return expires;
    }

    public void setExpires(long expires) {
        this.expires = expires;
    }

    @Override
    public String toString() {
        return getClass().getSimpleName() + ": " + getUsername();
    }

    @JsonIgnore
    public String getNewPassword() {
        return newPassword;
    }

    @JsonProperty
    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }

    /**
     * @return the nombre
     */
    public String getNombre() {
        return nombre;
    }

    /**
     * @param nombre the nombre to set
     */
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    /**
     * @return the accountLocked
     */
    public boolean isAccountLocked() {
        return accountLocked;
    }

    /**
     * @param accountLocked the accountLocked to set
     */
    public void setAccountLocked(boolean accountLocked) {
        this.accountLocked = accountLocked;
    }

    /**
     * @return the accountExpired
     */
    public boolean isAccountExpired() {
        return accountExpired;
    }

    /**
     * @param accountExpired the accountExpired to set
     */
    public void setAccountExpired(boolean accountExpired) {
        this.accountExpired = accountExpired;
    }

    /**
     * @return the credentialsExpired
     */
    public boolean isCredentialsExpired() {
        return credentialsExpired;
    }

    /**
     * @param credentialsExpired the credentialsExpired to set
     */
    public void setCredentialsExpired(boolean credentialsExpired) {
        this.credentialsExpired = credentialsExpired;
    }

    /**
     * @return the accountEnabled
     */
    public boolean isAccountEnabled() {
        return accountEnabled;
    }

    /**
     * @param accountEnabled the accountEnabled to set
     */
    public void setAccountEnabled(boolean accountEnabled) {
        this.accountEnabled = accountEnabled;
    }

    /**
     * @param authorities the authorities to set
     */
    public void setAuthorities(Set<UserAuthorityDTO> authorities) {
        this.authorities = authorities;
    }

    /**
     * @return the idusuario
     */
    public int getIdusuario() {
        return idusuario;
    }

    /**
     * @param idusuario the idusuario to set
     */
    public void setIdusuario(int idusuario) {
        this.idusuario = idusuario;
    }

    /**
     * @return the usuarioultimomov
     */
    public int getUsuarioultimomov() {
        return usuarioultimomov;
    }

    /**
     * @param usuarioultimomov the usuarioultimomov to set
     */
    public void setUsuarioultimomov(int usuarioultimomov) {
        this.usuarioultimomov = usuarioultimomov;
    }

    /**
     * @return the correoe
     */
    public String getCorreoe() {
        return correoe;
    }

    /**
     * @param correoe the correoe to set
     */
    public void setCorreoe(String correoe) {
        this.correoe = correoe;
    }

    /**
     * @return the apellidopaterno
     */
    public String getApellidopaterno() {
        return apellidopaterno;
    }

    /**
     * @param apellidopaterno the apellidopaterno to set
     */
    public void setApellidopaterno(String apellidopaterno) {
        this.apellidopaterno = apellidopaterno;
    }

    /**
     * @return the apellidomaterno
     */
    public String getApellidomaterno() {
        return apellidomaterno;
    }

    /**
     * @param apellidomaterno the apellidomaterno to set
     */
    public void setApellidomaterno(String apellidomaterno) {
        this.apellidomaterno = apellidomaterno;
    }

    /**
     * @return the status
     */
    public int getStatus() {
        return status;
    }

    /**
     * @param status the status to set
     */
    public void setStatus(int status) {
        this.status = status;
    }

    /**
     * @return the fechahora
     */
    public Date getFechahora() {
        return fechahora;
    }

    /**
     * @param fechahora the fechahora to set
     */
    public void setFechahora(Date fechahora) {
        this.fechahora = fechahora;
    }

}
