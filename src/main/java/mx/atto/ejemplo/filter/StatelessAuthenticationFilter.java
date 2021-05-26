package mx.atto.ejemplo.filter;

import java.io.IOException;
import java.util.logging.Logger;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import mx.atto.ejemplo.service.impl.token.TokenAuthenticationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;

public class StatelessAuthenticationFilter extends GenericFilterBean {
    private static final Logger logger = Logger.getLogger(StatelessAuthenticationFilter.class.getName());
    @Autowired
    private  TokenAuthenticationServiceImpl tokenAuthenticationService;

    public StatelessAuthenticationFilter() { 
    }
    public StatelessAuthenticationFilter(TokenAuthenticationServiceImpl taService) {
        this.tokenAuthenticationService = taService;
    }

    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException,
            ServletException {
        HttpServletRequest request = (HttpServletRequest) req;
        HttpServletResponse response = (HttpServletResponse) res;
        response.setHeader("Access-Control-Allow-Origin", "*");//* or origin as u prefer
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setHeader("Access-Control-Allow-Headers",
        request.getHeader("Access-Control-Request-Headers"));

        if (request.getMethod().equals("OPTIONS")) {
            try {
                res.flushBuffer();
            } catch (IOException e) {
                logger.severe(e.getMessage());
            }
        } else {
            SecurityContextHolder.getContext().setAuthentication(
                    tokenAuthenticationService.getAuthentication( request,response));
            chain.doFilter(req, res); // always continue
        }
    }

}
