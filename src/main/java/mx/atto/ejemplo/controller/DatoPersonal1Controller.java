package mx.atto.ejemplo.controller;

import java.util.List;
import java.util.logging.Logger;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;

import mx.atto.ejemplo.dto.DatoPersonal1Dto;
import mx.atto.ejemplo.service.IDatoPersonal1Service;

@RestController
@RequestMapping("/datoPersonal1")
public class DatoPersonal1Controller {
    private Logger log = Logger.getLogger(DatoPersonal1Controller.class.getName());
    @Autowired
    private IDatoPersonal1Service datoPersonal1Service;

    @RequestMapping(value = "guardarDatoPersonal1", method = RequestMethod.POST, consumes = {
            MediaType.APPLICATION_JSON_VALUE }, produces = { MediaType.APPLICATION_JSON_VALUE })
    public DatoPersonal1Dto guardarDatoPersonal1(@RequestBody @Valid DatoPersonal1Dto dto) throws Exception {
        return datoPersonal1Service.guardarDatoPersonal1(dto);
    }

    @RequestMapping(value = "eliminarDatoPersonal1", method = RequestMethod.POST, consumes = {
            MediaType.APPLICATION_JSON_VALUE }, produces = { MediaType.APPLICATION_JSON_VALUE })
    public void eliminarDatoPersonal1(@RequestBody @Valid DatoPersonal1Dto dto) throws Exception {
        datoPersonal1Service.eliminarDatoPersonal1(dto);
    }

    @RequestMapping(value = "actualizarDatoPersonal1", method = RequestMethod.POST, consumes = {
            MediaType.APPLICATION_JSON_VALUE }, produces = { MediaType.APPLICATION_JSON_VALUE })
    public boolean actualizarDatoPersonal1(@RequestBody @Valid DatoPersonal1Dto dto) throws Exception {
        return datoPersonal1Service.actualizarDatoPersonal1(dto);
    }

    @RequestMapping(value = "getDatosPersonales1", method = RequestMethod.GET, consumes = {
            MediaType.APPLICATION_JSON_VALUE }, produces = { MediaType.APPLICATION_JSON_VALUE })
    public List<DatoPersonal1Dto > getDatosPersonales1() throws Exception {
        return datoPersonal1Service.getDatoPersonal1es();
    }

}