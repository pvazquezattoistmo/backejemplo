/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.atto.ejemplo.service;
import mx.atto.ejemplo.exception.SitteecException;

/**
 *
 * @author Edy Avenda?o Pacheco
 */
public interface IMailService {
        /**
     *
     * @param subject
     * @param mensaje
     * @param destinatarios
     */
    public void sendEmail(String subject, String mensaje, String destinatarios);
}
