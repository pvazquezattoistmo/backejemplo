package mx.atto.ejemplo.dto.token;

import org.springframework.security.core.GrantedAuthority;
import com.fasterxml.jackson.annotation.JsonIgnore;

public class UserAuthorityDTO implements GrantedAuthority {

	@JsonIgnore
	private UserDTO userDTO;

	private String authority;

	public UserDTO getUser() {
		return userDTO;
	}

	public void setUser(UserDTO user) {
		this.userDTO = user;
	}

	@Override
	public String getAuthority() {
		return authority;
	}

	public void setAuthority(String authority) {
		this.authority = authority;
	}

	@Override
	public boolean equals(Object obj) {
		if (!(obj instanceof UserAuthorityDTO))
			return false;

		UserAuthorityDTO ua = (UserAuthorityDTO) obj;
		return ua.getAuthority() == this.getAuthority() || ua.getAuthority().equals(this.getAuthority());
	}

	@Override
	public int hashCode() {
		return getAuthority() == null ? 0 : getAuthority().hashCode();
	}

	@Override
	public String toString() {
		return getClass().getSimpleName() + ": " + getAuthority();
	}
}
