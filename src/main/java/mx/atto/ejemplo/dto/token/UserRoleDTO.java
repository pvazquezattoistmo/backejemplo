package mx.atto.ejemplo.dto.token;

public enum UserRoleDTO {
    USER, ADMIN;

    public UserAuthorityDTO asAuthorityFor(final UserDTO user) {
        final UserAuthorityDTO authority = new UserAuthorityDTO();
        authority.setAuthority("ROLE_" + toString());
        authority.setUser(user);
        return authority;
    }

    public static UserRoleDTO valueOf(final UserAuthorityDTO authority) {
        switch (authority.getAuthority()) {
            case "ROLE_USER":
                return USER;
            case "ROLE_ADMIN":
                return ADMIN;
        }
        throw new IllegalArgumentException("No role defined for authority: " + authority.getAuthority());
    }
}
