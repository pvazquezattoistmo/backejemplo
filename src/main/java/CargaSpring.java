import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import mx.atto.ejemplo.dto.CategoriaDto;
import mx.atto.ejemplo.dto.ContactoDto;
import mx.atto.ejemplo.dto.DatoPersonal1Dto;
import mx.atto.ejemplo.dto.TerceroDto;
import mx.atto.ejemplo.dao.IDatoPersonal1Dao;
import mx.atto.ejemplo.entity.DatoPersonal1;
import mx.atto.ejemplo.service.ICategoriaService;
import mx.atto.ejemplo.service.IContactoService;
import mx.atto.ejemplo.service.IDatoPersonal1Service;
import mx.atto.ejemplo.service.ITerceroService;

public class CargaSpring {
    public static void main(String arg[]) throws Exception {
        ApplicationContext context
        = new FileSystemXmlApplicationContext("/src/main/webapp/WEB-INF/applicationContext.xml");
        /*
        IDatoPersonal1Service datoPersonal1Dao = context.getBean("datoPersonal1Service", IDatoPersonal1Service.class);
        DatoPersonal1Dto datoPersonal1 = new DatoPersonal1Dto();
        datoPersonal1.setNombre("Lucas");
        datoPersonal1.setEdad(18);
        datoPersonal1Dao.guardarDatoPersonal1(datoPersonal1);
        */

        //servicios 
        ICategoriaService categoriaService =  context.getBean("categoriaService", ICategoriaService.class);
        //IContactoService contactoService =  context.getBean("contactoService", IContactoService.class);
       // ITerceroService terceroService =  context.getBean("terceroService", ITerceroService.class);

        //Dto
        CategoriaDto categoriaDto = new CategoriaDto();
        //ContactoDto contactoDto = new ContactoDto();
        //TerceroDto terceroDto = new TerceroDto();

        //datos categoria
        categoriaDto.setDescripcionCategorias("Categoria pro");
        categoriaDto.setReferenciaCategorias("ref 001");
        categoriaDto.setTipoCategorias("tipoCategorias");

        //guardamos en bd mediante servicio
        categoriaService.guardarCategoria(categoriaDto);

    }
}