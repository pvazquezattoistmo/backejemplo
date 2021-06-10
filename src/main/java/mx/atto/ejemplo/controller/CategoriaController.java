package mx.atto.ejemplo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
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
        value = "/obtener",
        method = RequestMethod.GET,
        consumes = {MediaType.APPLICATION_JSON_VALUE},
        produces = {MediaType.APPLICATION_JSON_VALUE}
    )
    public List<CategoriaDto> all(){
        List<CategoriaDto> list = null;
        try {
            list = categoriaService.findAll();
        } catch (SitteecException e) {
            e.printStackTrace();
        }
        return list;
    }

    @RequestMapping(
        value = "/guardar",
        method = RequestMethod.POST,
        consumes = {MediaType.APPLICATION_JSON_VALUE},
        produces = {MediaType.APPLICATION_JSON_VALUE}
    )
    public CategoriaDto guardar(@RequestBody CategoriaDto dto) throws SitteecException{
        return categoriaService.guardarCategoria(dto);
    }

    @RequestMapping(
        value = "/obtener/{id}",
        method = RequestMethod.GET,
        consumes = {MediaType.APPLICATION_JSON_VALUE},
        produces = {MediaType.APPLICATION_JSON_VALUE}
    )
    public CategoriaDto obtenerId(@PathVariable Integer id){
        CategoriaDto dto = null;
        try {
            dto = categoriaService.getCategoria(id);
        } catch (SitteecException e) {
            e.printStackTrace();
        }
        return dto;
    }

    @RequestMapping(
        value = "/actualizar/{id}",
        method = RequestMethod.PUT,
        consumes = {MediaType.APPLICATION_JSON_VALUE},
        produces = {MediaType.APPLICATION_JSON_VALUE}
    )
    public CategoriaDto actualizar(@RequestBody CategoriaDto dto, @PathVariable Integer id){
        CategoriaDto dtoUpdate = null;
        try {
            categoriaService.actualizarCategoria(dto);
        } catch (SitteecException e) {
            e.printStackTrace();
            return null;
        }
        return dtoUpdate;
    }

    @RequestMapping(
        value = "/eliminar/{id}",
        method = RequestMethod.DELETE,
        consumes = {MediaType.APPLICATION_JSON_VALUE},
        produces = {MediaType.APPLICATION_JSON_VALUE}
    )
    public void delete(@RequestBody CategoriaDto dto, @PathVariable Integer id){
        try {
            categoriaService.eliminarCategoria(dto);
        } catch (SitteecException e) {
            e.printStackTrace();
        }
    }
    
}
