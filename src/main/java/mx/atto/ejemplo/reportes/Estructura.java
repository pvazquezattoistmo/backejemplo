/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.atto.ejemplo.reportes;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 *
 * @author Edy
 */
public class Estructura {

    private Map propiedades;
    private Map objetos;
    private Map conjuntos;
    private Map imagenes;

    public Estructura() {
    }
    public Estructura(Map entrada) {
        propiedades= new HashMap<String, Object>();
        objetos= new HashMap<String, Object>();
        conjuntos= new HashMap<String, ArrayList>();
        imagenes= new HashMap<String, Object>();
        Iterator <Map.Entry> it = entrada.entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry next =it.next();
            String key = next.getKey().toString();
            if (next.getValue() instanceof String || next.getValue() instanceof Number  ){
               if (key.indexOf("img_")!= -1 ) 
                    imagenes.put(next.getKey(), next.getValue());
               else
                    propiedades.put(next.getKey(), next.getValue());
            }else{
               if (next.getValue() instanceof List<?>  == false  && next.getValue() instanceof Set<?>  == false ){
                   objetos.put(next.getKey(), next.getValue());                   
               }else{
                   if (next.getValue() instanceof List<?>)
                   conjuntos.put(next.getKey(), next.getValue());
                   else
                   conjuntos.put(next.getKey(), new ArrayList((Collection) next.getValue()));
               }
            }
        }
    }

    public Estructura(Map propiedades, Map objetos, Map conjuntos, Map imagenes) {
        this.propiedades = propiedades;
        this.objetos = objetos;
        this.conjuntos = conjuntos;
        this.imagenes = imagenes;
    } 

    /**
     * @return the propiedades
     */
    public Map getPropiedades() {
        return propiedades;
    }

    /**
     * @param propiedades the propiedades to set
     */
    public void setPropiedades(Map propiedades) {
        this.propiedades = propiedades;
    }

    /**
     * @return the objetos
     */
    public Map getObjetos() {
        return objetos;
    }

    /**
     * @param objetos the objetos to set
     */
    public void setObjetos(Map objetos) {
        this.objetos = objetos;
    }

    /**
     * @return the conjuntos
     */
    public Map getConjuntos() {
        return conjuntos;
    }

    /**
     * @param conjuntos the conjuntos to set
     */
    public void setConjuntos(Map conjuntos) {
        this.conjuntos = conjuntos;
    }

    /**
     * @return the imagenes
     */
    public Map getImagenes() {
        return imagenes;
    }

    /**
     * @param imagenes the imagenes to set
     */
    public void setImagenes(Map imagenes) {
        this.imagenes = imagenes;
    }

    
}
