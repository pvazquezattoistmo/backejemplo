package mx.atto.ejemplo.service.impl.token;
import mx.atto.ejemplo.exception.SitteecException;

import java.io.IOException;
import java.util.Collection;
import java.util.Enumeration;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import javax.xml.bind.DatatypeConverter;
import mx.atto.ejemplo.dto.token.UserAuthenticationDTO;
import mx.atto.ejemplo.dto.token.UserDTO;
import mx.atto.ejemplo.handler.TokenHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
@Service
public class TokenAuthenticationServiceImpl {

    private static final String AUTH_HEADER_NAME = "Authorization";
    private static final long TEN_DAYS = 1000l * 60l * 5l;

    private final TokenHandler tokenHandler;

    @Autowired
    public TokenAuthenticationServiceImpl(@Value("${token.secret}") String secret) {
        tokenHandler = new TokenHandler(DatatypeConverter.parseBase64Binary(secret));
    }

    public void addAuthentication(HttpServletResponse response, UserAuthenticationDTO authentication) {
        final UserDTO user = authentication.getDetails();
        user.setExpires(System.currentTimeMillis() + TEN_DAYS);
        response.addHeader("Access-Control-Allow-Origin", "*");
        response.addHeader("access-control-expose-headers", AUTH_HEADER_NAME);
        response.addHeader(AUTH_HEADER_NAME, "Bearer " + tokenHandler.createTokenForUser(user));
    }

    public Authentication getAuthentication(HttpServletRequest request, HttpServletResponse res) throws IOException {
        String headerToken = request.getHeader(AUTH_HEADER_NAME);
        System.out.println("Header Token: "+headerToken);
        if (headerToken != null) {
            String[] headers = headerToken.split(" ");
            final String token = headers[1];
            final UserDTO user = tokenHandler.parseUserFromToken(token);
            if (user != null) {
                return new UserAuthenticationDTO(user);
            }
        }
        return null;
    }
}
