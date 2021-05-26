package mx.atto.ejemplo.exception;
import mx.atto.ejemplo.exception.SitteecException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * SitteecException
 */
public class SitteecException extends Exception {
    final static Logger logger = LoggerFactory.getLogger(SitteecException.class);

    public SitteecException() {
        logger.error(getMessage());
    }    
}