/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.atto.ejemplo.reportes;

import java.io.FileOutputStream;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import org.jxls.common.Context;
import org.jxls.util.JxlsHelper;

/**
 *
 * @author luis
 */
public class GenerarReporteExcel {

    private Estructura estructura;
    private String pathTemplate;
    private String pathOutput;
    private String hoja;

    public GenerarReporteExcel(Map entrada, String pathTemplate, String pathOutput) {
        this.estructura = new Estructura(entrada);
        this.pathTemplate = pathTemplate;
        this.pathOutput = pathOutput;
        this.hoja = "Hoja1";
    }
    
    public GenerarReporteExcel(Estructura estructura, String pathTemplate, String pathOutput) {
        this.estructura = estructura;
        this.pathTemplate = pathTemplate;
        this.pathOutput = pathOutput;
        this.hoja = "Hoja1";
    }

    public GenerarReporteExcel(Estructura estructura, String pathTemplate, String pathOutput, String hoja) {
        this.estructura = estructura;
        this.pathTemplate = pathTemplate;
        this.pathOutput = pathOutput;
        this.hoja = hoja;
    }
    public GenerarReporteExcel(Map entrada, String pathTemplate, String pathOutput, String hoja) {
        this.estructura = new Estructura(entrada);
        this.pathTemplate = pathTemplate;
        this.pathOutput = pathOutput;
        this.hoja = hoja;
    }

    public Estructura getEstructura() {
        return estructura;
    }

    public void setEstructura(Estructura estructura) {
        this.estructura = estructura;
    }

    public String getPathTemplate() {
        return pathTemplate;
    }

    public void setPathTemplate(String pathTemplate) {
        this.pathTemplate = pathTemplate;
    }

    public String getPathOutput() {
        return pathOutput;
    }

    public void setPathOutput(String pathOutput) {
        this.pathOutput = pathOutput;
    }


    public void generarReporte() throws IOException {
        try (InputStream is = new FileInputStream(pathTemplate)) {
            try (OutputStream os = new FileOutputStream(pathOutput)) {
                Context context = new Context();
                Iterator<Map.Entry> propiedades = this.estructura.getPropiedades().entrySet().iterator();
                while (propiedades.hasNext()) {
                    Map.Entry propiedad = propiedades.next();
                    context.putVar(propiedad.getKey().toString(), propiedad.getValue());
                }
                Iterator<Map.Entry> objetos = this.estructura.getObjetos().entrySet().iterator();
                while (objetos.hasNext()) {
                    Map.Entry objeto = objetos.next();
                    context.putVar(objeto.getKey().toString(), objeto.getValue());
                }
                Iterator<Map.Entry> conjuntos = this.estructura.getConjuntos().entrySet().iterator();
                while (conjuntos.hasNext()) {
                    Map.Entry conjunto = conjuntos.next();
                    context.putVar(conjunto.getKey().toString(), new ArrayList((Collection) conjunto.getValue()));
                }
                JxlsHelper.getInstance().processTemplateAtCell(is, os, context, this.hoja+"!A1");
            }
        }
    }

}
