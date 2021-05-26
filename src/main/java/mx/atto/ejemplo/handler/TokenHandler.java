package mx.atto.ejemplo.handler;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.Arrays;
import java.util.Date;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.Charset;
import java.util.logging.Level;
import java.util.logging.Logger;
import mx.atto.ejemplo.dto.token.HeaderTokenDTO;
import mx.atto.ejemplo.dto.token.UserDTO;

public final class TokenHandler {

    private static final String HMAC_ALGO = "HmacSHA256";
    private static final String SEPARATOR = ".";
    private static final String SEPARATOR_SPLITTER = "\\.";

    private final Mac hmac;

    public TokenHandler(byte[] secretKey) {
        try {
            hmac = Mac.getInstance(HMAC_ALGO);
            hmac.init(new SecretKeySpec(secretKey, HMAC_ALGO));
        } catch (NoSuchAlgorithmException | InvalidKeyException e) {
            throw new IllegalStateException("failed to initialize HMAC: " + e.getMessage(), e);
        }
    }

    public UserDTO parseUserFromToken(String token) {
        final String[] parts = token.split(SEPARATOR_SPLITTER);
        if (parts.length == 3 && parts[0].length() > 0 && parts[1].length() > 0 && parts[2].length() > 0) {
            try {
                final byte[] header = fromBase64(parts[0]);
                final byte[] userBytes = fromBase64(parts[1]);
                final byte[] hash = fromBase64(parts[2]);
                byte[] byteHash = new byte[header.length + userBytes.length];
                System.arraycopy(header, 0, byteHash, 0, header.length);
                System.arraycopy(userBytes, 0, byteHash, header.length, userBytes.length);
                boolean validHash = Arrays.equals(createHmac(byteHash), hash);
                if (validHash) {
                    final UserDTO user = (UserDTO) fromJSON(userBytes, UserDTO.class);
                    if (new Date().getTime() < user.getExpires()) {
                        return user;
                    }
                }
            } catch (IllegalArgumentException e) {
                //log tempering attempt here
            } catch (IOException ex) {
                Logger.getLogger(TokenHandler.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        return null;
    }

    public String createTokenForUser(UserDTO user) {
        HeaderTokenDTO headerToken = new HeaderTokenDTO("JWT", HMAC_ALGO);
        byte[] header = toJSON(headerToken);
        byte[] userBytes = toJSON(user);
    
        byte[] byteHash = new byte[header.length + userBytes.length];

        System.arraycopy(header,
                0, byteHash, 0, header.length);
        System.arraycopy(userBytes,
                0, byteHash, header.length, userBytes.length);
        byte[] hash = createHmac(byteHash);
        final StringBuilder sb = new StringBuilder(200);

        sb.append(toBase64(header));
        sb.append(SEPARATOR);

        sb.append(toBase64(userBytes));
        sb.append(SEPARATOR);

        sb.append(toBase64(hash));
        return sb.toString();
    }

    private Object fromJSON(final byte[] objectBytes, final Class name_class) throws IOException {
        return new ObjectMapper().readValue(new ByteArrayInputStream(objectBytes), name_class);
    }

    private byte[] toJSON(Object user) {
        try {
            return new ObjectMapper().writeValueAsBytes(user);
        } catch (JsonProcessingException e) {
            throw new IllegalStateException(e);
        }
    }

    private String toBase64(byte[] content) {
        return DatatypeConverter.printBase64Binary(content);
    }

    private byte[] fromBase64(String content) {
        return DatatypeConverter.parseBase64Binary(content);
    }

    // synchronized to guard internal hmac object
    private synchronized byte[] createHmac(byte[] content) {
        return hmac.doFinal(content);
    }
    /*
	public static void main(String[] args) {
		Date start = new Date();
		byte[] secret = new byte[70];
		new java.security.SecureRandom().nextBytes(secret);

		TokenHandler tokenHandler = new TokenHandler(secret);
		for (int i = 0; i < 1000; i++) {
			final User user = new User(java.util.UUID.randomUUID().toString().substring(0, 8), new Date(
					new Date().getTime() + 10000));
			user.grantRole(UserRole.ADMIN);
			final String token = tokenHandler.createTokenForUser(user);
			final User parsedUser = tokenHandler.parseUserFromToken(token);
			if (parsedUser == null || parsedUser.getUsername() == null) {
				System.out.println("error");
			}
		}
		System.out.println(System.currentTimeMillis() - start.getTime());
	}
     */
}
