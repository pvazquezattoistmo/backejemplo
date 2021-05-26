package mx.atto.ejemplo.service.impl;
import mx.atto.ejemplo.exception.SitteecException;

import java.util.Properties;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import mx.atto.ejemplo.service.IMailService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

/**
 *
 * @author Edy Avenda?o Pacheco
 */
@Service("mailService")
public class MailServiceImpl implements IMailService {

    @Value("${mail.sender.mail}")
    private String mailSender;
    @Value("${mail.sender.password}")
    private String mailPassword;
    @Value("${mail.sender.host}")
    private String mailHost;
    @Value("${mail.sender.port}")
    private String mailPort;
    @Value("${mail.sender.starttls.enable}")
    private String starttlsEnable;
    @Value("${mail.sender.auth}")
    private String smtpAuth;
    private final Logger log = Logger.getLogger(MailServiceImpl.class);

    /**
     *
     * @param subject
     * @param mensaje
     * @param destinatarios
     */
    @Override
    public void sendEmail(String subject, String mensaje, String destinatarios) {
        Properties props = new Properties();
        props.put("mail.smtp.host", mailHost);
        props.setProperty("mail.smtp.starttls.enable", starttlsEnable);
        props.setProperty("mail.smtp.port", mailPort);
        props.setProperty("mail.smtp.user", mailSender);
        props.setProperty("mail.smtp.auth", smtpAuth);

        // Obtenemos la sesi�n por defecto
        Session session = Session.getInstance(props, new javax.mail.Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(mailSender, mailPassword);
            }
        });
        try {
            // Creamos un objeto mensaje tipo MimeMessage por defecto.
            MimeMessage message = new MimeMessage(session);

            // Asignamos el �de o from� al header del correo.
            message.setFrom(new InternetAddress(mailSender));

            // Asignamos el �para o to� al header del correo.
            message.addRecipients(Message.RecipientType.TO, InternetAddress.parse(destinatarios));

            // Asignamos el asunto
            message.setSubject(subject);

            // Asignamos el mensaje como tal
            message.setContent(mensaje, "text/html; charset=UTF-8");

            Transport.send(message);
        } catch (MessagingException e) {
            log.info("Error al enviar el correo electronico" + e);
        }
    }  
}
