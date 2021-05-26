package mx.atto.ejemplo.dto.token;

import java.util.Collection;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

public class UserAuthenticationDTO implements Authentication {

	private final UserDTO userDTO;
	private boolean authenticated = true;

	public UserAuthenticationDTO(UserDTO user) {
		this.userDTO = user;
	}

	@Override
	public String getName() {
		return userDTO.getUsername();
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return userDTO.getAuthorities();
	}

	@Override
	public Object getCredentials() {
		return userDTO.getPassword();
	}

	@Override
	public UserDTO getDetails() {
		return userDTO;
	}

	@Override
	public Object getPrincipal() {
		return userDTO.getUsername();
	}

	@Override
	public boolean isAuthenticated() {
		return authenticated;
	}

	@Override
	public void setAuthenticated(boolean authenticated) {
		this.authenticated = authenticated;
	}
}
