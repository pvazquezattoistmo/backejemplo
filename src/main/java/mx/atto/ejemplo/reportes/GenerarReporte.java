/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.atto.ejemplo.reportes;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.regex.Pattern;
import org.apache.poi.xwpf.converter.pdf.PdfConverter;
import org.apache.poi.xwpf.converter.pdf.PdfOptions;
import org.apache.poi.xwpf.model.XWPFHeaderFooterPolicy;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFHeader;
import org.apache.poi.xwpf.usermodel.XWPFParagraph;
import org.apache.poi.xwpf.usermodel.XWPFRun;
//import org.docx4j.Docx4J;
//import org.docx4j.Docx4jProperties;
//import org.docx4j.convert.out.FOSettings;
//import org.docx4j.openpackaging.exceptions.Docx4JException;
//import org.docx4j.openpackaging.packages.WordprocessingMLPackage;
import pl.jsolve.templ4docx.core.Docx;
import pl.jsolve.templ4docx.core.VariablePattern;
import pl.jsolve.templ4docx.variable.ImageVariable;
import pl.jsolve.templ4docx.variable.TableVariable;
import pl.jsolve.templ4docx.variable.TextVariable;
import pl.jsolve.templ4docx.variable.Variable;
import pl.jsolve.templ4docx.variable.Variables;

/**
 *
 * @author Edy
 */
public class GenerarReporte {

    private Estructura estructura;
    private String pathTemplate;
    private String pathOutput;

    public GenerarReporte(Estructura estructura, String pathTemplate, String pathOutput) {
        this.estructura = estructura;
        this.pathTemplate = pathTemplate;
        this.pathOutput = pathOutput;
    }

    public GenerarReporte(Map entrada, String pathTemplate, String pathOutput) {
        this.estructura = new Estructura(entrada);
        this.pathTemplate = pathTemplate;
        this.pathOutput = pathOutput;
    }

    private GenerarReporte() {
    }

    public void generarReporte() throws FileNotFoundException, IOException {
        // create new instance of docx template
        Docx docx = new Docx(this.pathTemplate);
        docx.setVariablePattern(new VariablePattern("#{", "}"));
        List<String> propiedadesTemplate = docx.findVariables();

        // prepare map of variables for template
        Variables variablesPropiedades = new Variables();
        //Logica de remplazo de propiedades
        for (String var : propiedadesTemplate) {
            Object ob = estructura.getPropiedades().get(var.substring(2, var.length() - 1));
            if (ob!= null){
                variablesPropiedades.addTextVariable(new TextVariable(var, ob.toString()));
            }
        }
        // fill template by given map of variables
        docx.fillTemplate(variablesPropiedades);

        docx.setVariablePattern(new VariablePattern("${", "}"));
        List<String> objetosTemplate = docx.findVariables();
        // prepare map of variables for template
        Variables variablesObjetos = new Variables();
        //Logica de remplazo de objetos
        for (String var : objetosTemplate) {
            try {
                String substring = var.substring(2, var.length() - 1);
                String[] split = substring.split("\\.");
                Object get = estructura.getObjetos().get(split[0]);
                if (get != null && !(get instanceof Map)) {
                    Class<?> aClass = get.getClass();
                    Field declaredField = aClass.getDeclaredField(split[1]);
                    if (declaredField != null) {
                        declaredField.setAccessible(true);
                        String value = (String) declaredField.get(get);
                        variablesObjetos.addTextVariable(new TextVariable(var, value));
                    }
                } else {
                    if (get instanceof Map && ((Map) get).get(split[1])!= null ) {
                        String value = (String) ((Map) get).get(split[1]).toString();
                        variablesObjetos.addTextVariable(new TextVariable(var, value));
                    }
                }

            } catch (NoSuchFieldException ex) {
                Logger.getLogger(GenerarReporte.class.getName()).log(Level.SEVERE, null, ex);
            } catch (SecurityException ex) {
                Logger.getLogger(GenerarReporte.class.getName()).log(Level.SEVERE, null, ex);
            } catch (IllegalArgumentException ex) {
                Logger.getLogger(GenerarReporte.class.getName()).log(Level.SEVERE, null, ex);
            } catch (IllegalAccessException ex) {
                Logger.getLogger(GenerarReporte.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        //fill template by given map of variables
        docx.fillTemplate(variablesObjetos);

        docx.setVariablePattern(new VariablePattern("&{", "}"));
        List<String> imagenesTemplate = docx.findVariables();

        //
        // prepare map of variables for template
        Variables variablesImagenes = new Variables();
        //variablesPropiedades.addTextVariable(new TextVariable("#{nombre}", "dfdgf"));
        //Logica de remplazo de propiedades
        for (String var : imagenesTemplate) {
            try {
                Object get = estructura.getImagenes().get(var.substring(2, var.length() - 1));
                if (get != null) {
                    Class<?> aClass = get.getClass();
                    Field declaredFieldPath = aClass.getDeclaredField("path");
                    declaredFieldPath.setAccessible(true);
                    String path = (String) declaredFieldPath.get(get);
                    Field declaredFieldWidth = aClass.getDeclaredField("width");
                    declaredFieldWidth.setAccessible(true);
                    Integer width = (Integer) declaredFieldWidth.get(get);
                    Field declaredFieldHeight = aClass.getDeclaredField("height");
                    declaredFieldHeight.setAccessible(true);
                    Integer height = (Integer) declaredFieldWidth.get(get);
                    variablesImagenes.addImageVariable(new ImageVariable(var, path, width, height));
                }
            } catch (NoSuchFieldException ex) {
                Logger.getLogger(GenerarReporte.class.getName()).log(Level.SEVERE, null, ex);
            } catch (SecurityException ex) {
                Logger.getLogger(GenerarReporte.class.getName()).log(Level.SEVERE, null, ex);
            } catch (IllegalArgumentException ex) {
                Logger.getLogger(GenerarReporte.class.getName()).log(Level.SEVERE, null, ex);
            } catch (IllegalAccessException ex) {
                Logger.getLogger(GenerarReporte.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        // fill template by given map of variables
        docx.fillTemplate(variablesImagenes);

        docx.setVariablePattern(new VariablePattern("%{", "}"));
        List<String> conjuntosTemplate = docx.findVariables();

        // prepare map of variables for template
        Variables variablesConjuntos = new Variables();

        Object[] conjuntosTemplateArray = conjuntosTemplate.toArray();

        String elementoAnt = "";
        List<List> elementosConjuntos = new ArrayList<>();
        int x = 0;
        boolean bandera = true;
        while (bandera) {
            List<String> tmp = new ArrayList<>();
            while (true) {
                if (x == conjuntosTemplateArray.length) {
                    bandera = false;
                    break;
                }
                String substring = conjuntosTemplateArray[x].toString().substring(2, conjuntosTemplateArray[x].toString().length() - 1);
                String[] split = substring.split("\\.");

                if (!elementoAnt.isEmpty()) {
                    if (!split[0].equals(elementoAnt)) {
                        elementoAnt = split[0];
                        break;
                    }
                }
                tmp.add(conjuntosTemplateArray[x].toString());
                elementoAnt = split[0];
                x++;
            }
            elementosConjuntos.add(tmp);

        }

        for (List elementosConjunto : elementosConjuntos) {

            TableVariable tableVariable = new TableVariable();
            elementosConjunto.get(0).toString();

            String substring = elementosConjunto.get(0).toString().substring(2, elementosConjunto.get(0).toString().length() - 1);
            String[] split = substring.split("\\.");
            List get = (List) estructura.getConjuntos().get(split[0]);
            if (get != null) {

                List<List> varialesTabla = new ArrayList<>();

                for (Object object : elementosConjunto) {
                    List<Variable> columna = new ArrayList<>();
                    varialesTabla.add(columna);
                }

                for (Object object : get) {
                    int y = 0;
                    for (Object element : elementosConjunto) {
                        try {
                            String substring1 = element.toString().substring(2, element.toString().length() - 1);
                            String[] split1 = substring1.split("\\.");
                            if (!(object instanceof Map)) {
                                Class<?> aClass = object.getClass();
                                Field declaredField = aClass.getDeclaredField(split1[1].trim());
                                declaredField.setAccessible(true);
                                if (declaredField.get(object) instanceof String) {
                                    String value = (String) declaredField.get(object);
                                    varialesTabla.get(y).add(new TextVariable(element.toString(), value));
                                } else {
                                    Method mrep=null;
                                    try {
                                        mrep = aClass.getDeclaredMethod("toReport");
                                    } catch (NoSuchMethodException ex) {
                                      //  Logger.getLogger(GenerarReporte.class.getName()).log(Level.SEVERE, null, ex);
                                    }
                                    String value = "";
                                    if (mrep != null) {
                                        try {
                                            value = mrep.invoke(object).toString();
                                        } catch (InvocationTargetException ex) {
                                            Logger.getLogger(GenerarReporte.class.getName()).log(Level.SEVERE, null, ex);
                                        }
                                    } else {
                                        value = declaredField.get(object).toString();
                                    }
                                    varialesTabla.get(y).add(new TextVariable(element.toString(), value));
                                }
                            }else{
                            if (((Map)object).get(split1[1].trim()) instanceof String || ((Map)object).get(split1[1].trim()) instanceof Number) {
                                    String value = (String) ((Map)object).get(split1[1].trim()).toString();
                                    varialesTabla.get(y).add(new TextVariable(element.toString(), value));
                                } else {
                                    Method mrep=null;
                                try {
                                    mrep = ((Map)object).get(split1[1].trim()).getClass().getDeclaredMethod("toReport");
                                } catch (NoSuchMethodException ex) {
                                    //Logger.getLogger(GenerarReporte.class.getName()).log(Level.SEVERE, null, ex);
                                }
                                    String value = "";
                                    if (mrep != null) {
                                        try {
                                            value = mrep.invoke(object).toString();
                                        } catch (InvocationTargetException ex) {
                                           // Logger.getLogger(GenerarReporte.class.getName()).log(Level.SEVERE, null, ex);
                                        }
                                    } else {
                                        value = ((Map)object).get(split1[1].trim()).toString();
                                    }
                                    varialesTabla.get(y).add(new TextVariable(element.toString(), value));
                                }
                            
                            
                            }
                        } catch (NoSuchFieldException ex) {
                            Logger.getLogger(GenerarReporte.class.getName()).log(Level.SEVERE, null, ex);
                        } catch (SecurityException ex) {
                            Logger.getLogger(GenerarReporte.class.getName()).log(Level.SEVERE, null, ex);
                        } catch (IllegalArgumentException ex) {
                            Logger.getLogger(GenerarReporte.class.getName()).log(Level.SEVERE, null, ex);
                        } catch (IllegalAccessException ex) {
                            Logger.getLogger(GenerarReporte.class.getName()).log(Level.SEVERE, null, ex);
                        }
                        y++;
                    }
                }

                for (List list : varialesTabla) {
                    tableVariable.addVariable(list);
                }
                variablesConjuntos.addTableVariable(tableVariable);
                docx.fillTemplate(variablesConjuntos);
            }
        }

        // save filled document
        docx.save(this.pathOutput);

        docx.setVariablePattern(new VariablePattern("#{", "}"));
        List<String> headersTemplate = docx.findVariables();
        XWPFDocument xwpfDocument = new XWPFDocument(new FileInputStream(pathOutput));
        XWPFDocument setHeader = this.setHeader(xwpfDocument, estructura, headersTemplate);
        if (setHeader!= null){
            FileOutputStream fileOutputStream = new FileOutputStream(pathOutput);
            setHeader.write(fileOutputStream);
            fileOutputStream.close();
        }
    }

    public String convertirAPDF() {
        InputStream is = null;
        try {
            is = new FileInputStream(new File(pathOutput));
            try ( XWPFDocument document = new XWPFDocument(is);){
                PdfOptions options = PdfOptions.create();
                String salida = pathOutput.substring(0, pathOutput.length() - 5) + ".pdf";
                try (OutputStream out = new FileOutputStream(new File(salida));){
                   PdfConverter.getInstance().convert(document, out, options);
                   return salida;
                }
            }
        } catch (FileNotFoundException ex) {
            Logger.getLogger(GenerarReporte.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IOException ex) {
            Logger.getLogger(GenerarReporte.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            try {
              if (is  != null)  is.close();
            } catch (IOException ex) {
                Logger.getLogger(GenerarReporte.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        return "";
    }

    public static void main(String[] args) {
        try {
            GenerarReporte gr = new GenerarReporte();
            gr.pathOutput = "D:\\uploadedFiles\\salidasword\\Bitacora2.docx";

            gr.convertirAPDF();
        } catch (Exception err) {
            System.out.println(err);
        }
    }

    public XWPFDocument setHeader(XWPFDocument document, Estructura estructura, List<String> headersTemplate) {
        XWPFHeaderFooterPolicy policy = document.getHeaderFooterPolicy();
        if (policy == null) {
            return null;
        }
        XWPFHeader header = policy.getHeader(0);
        if (header == null) {
            return null;
        }
        for (String string : headersTemplate) {
            String substring = string.substring(2, string.length() - 1);
            replaceInParagraphs(header.getParagraphs(), "\\#\\{" + substring + "\\}", estructura.
                    getPropiedades().get(substring).toString());
        }
        return document;
    }

    private void replaceInParagraphs(List<XWPFParagraph> paragraphs, String placeHolder, String replaceText) {
        for (XWPFParagraph xwpfParagraph : paragraphs) {
            List<XWPFRun> runs = xwpfParagraph.getRuns();
            for (XWPFRun run : runs) {
                String runText = run.getText(run.getTextPosition());

                if ( !placeHolder.equals("")  && !placeHolder.isEmpty()) {
                    if (runText != null
                            && Pattern.compile(placeHolder, Pattern.CASE_INSENSITIVE).matcher(runText).find()) {
                        runText = replaceText;
                    }
                }
                run.setText(runText, 0);
            }
        }
    }
}
