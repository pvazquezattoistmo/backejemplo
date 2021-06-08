package mx.atto.ejemplo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import mx.atto.ejemplo.dto.CategoriaDto;
import mx.atto.ejemplo.exception.SitteecException;
import mx.atto.ejemplo.service.ICategoriaService;

@RestController
@RequestMapping("/categoria")
public class CategoriaController {

    @Autowired
    private ICategoriaService categoriaService;

    

    @RequestMapping(
        value = "/guardar",
        method = RequestMethod.PUT,
        consumes = {MediaType.APPLICATION_JSON_VALUE},
        produces = {MediaType.APPLICATION_JSON_VALUE}
    )
    public CategoriaDto guardar(@RequestBody CategoriaDto dto) throws SitteecException{
        return categoriaService.guardarCategoria(dto);
    }
    
}
