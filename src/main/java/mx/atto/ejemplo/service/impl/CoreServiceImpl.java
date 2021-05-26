package mx.atto.ejemplo.service.impl;
import mx.atto.ejemplo.exception.SitteecException;

import java.util.Iterator;
import java.util.Date;
import java.io.Serializable;
import java.lang.reflect.Field;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import org.apache.log4j.Logger;
import org.modelmapper.ModelMapper;
import mx.atto.ejemplo.dao.*;
import mx.atto.ejemplo.dto.*;
import mx.atto.ejemplo.entity.*;
import mx.atto.ejemplo.service.*;
import org.hibernate.HibernateException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author IstmoSoft
 */
@Service("coreService")
@Transactional(value = "hibernateTransactionManager")
public class CoreServiceImpl implements ICoreService {

    private Logger log = Logger.getLogger(CoreServiceImpl.class);
    @Autowired
    private ICoreDao coreDao;

    public static void main(String[] args) throws ParseException {
    }

    public static String idArrchivoAngular(String texto) {
        StringBuffer nuevaCadena = new StringBuffer();
        for (int i = 0; i < texto.length(); i++) {
            if (Character.isUpperCase(texto.charAt(i))) {
                if (i > 0) {
                    nuevaCadena.append("-" + Character.toLowerCase(texto.charAt(i)));
                } else {
                    nuevaCadena.append(Character.toLowerCase(texto.charAt(i)));
                }

            } else {
                nuevaCadena.append(texto.charAt(i));
            }
        }
        return nuevaCadena.toString();
    }

     public HashMap permisos(long id_user, Set<String> tablas, long id_exp) {
        HashMap salida = new HashMap();
        String ruta = "";
        ArrayList expediente = null;
        int salidasTablas = 0;
        boolean sololecturaGeneral = false;
        if (id_exp != -1) {
            boolean sololectura = false;
            boolean aviso = false;
            for (String tabla : tablas) {
                ruta = idArrchivoAngular(tabla);
                if (expediente != null && !expediente.isEmpty()) {
                    aviso = true;
                    sololectura = false;
                } else
                    if (!aviso && !sololectura) {
                    salidasTablas++ ;
                }
            }
        }
        if (salidasTablas == tablas.size())  {
            return salida;
        }
        for (Object tabla : tablas) {
            HashMap salidaaux = new HashMap();
            List<PermisoAtributo> resultados = coreDao.permisosAtributosUsuario(tabla, id_user);
            ArrayList<PermisoAtributoDto> padto;
            padto = new ArrayList();
            for (PermisoAtributo pa : resultados) {
                PermisoAtributoDto spadto = PermisoAtributoDto.fromEntidad(pa);
                if (sololecturaGeneral) {
                    Integer permiso = spadto.getPermiso();
                    if (permiso != null) {
                        permiso = new Integer(permiso.intValue() & 246);
                    }
                    spadto.setPermiso(permiso);
                }
                padto.add(spadto);
            }
            salidaaux.put("PermisoAtributo", padto);
            List<PermisoTabla> lista_tabla = coreDao.permisosTabalUsuario(tabla, id_user);
            ArrayList<PermisoTablaDto> ptdto;
            ptdto = new ArrayList();
            for (PermisoTabla pt : lista_tabla) {
                ptdto.add(PermisoTablaDto.fromEntidad(pt));
            }
            salidaaux.put("PermisoTabla", ptdto);
            List<PermisoConjunto> lista_conjuntos = coreDao.permisosConjuntosUsuario(tabla, id_user);
            ArrayList<PermisoConjuntoDto> pcdto;
            pcdto = new ArrayList();
            for (PermisoConjunto pt : lista_conjuntos) {
                pcdto.add(PermisoConjuntoDto.fromEntidad(pt));
            }
            salidaaux.put("PermisoConjunto", pcdto);
            salida.put(tabla.toString(), salidaaux);
        }
        return salida;

    }

    @Override
    public HashMap menus(long id_user) {
        HashMap salida = new HashMap();
        ArrayList resultado = coreDao.itemMenuPrincipal(id_user);
        if (resultado.size() > 0) {
            Item itan = (Item) resultado.get(0);
            salida.put("item", ItemDto.fromEntidad(itan));
            ArrayList<ItemDto> simples = new ArrayList();
            ArrayList<ItemDto> compuestos = new ArrayList();
            for (Item item : itan.getItemsm()) {
                if (item.getItemsm().isEmpty()) {
                    simples.add(ItemDto.fromEntidad(item));
                } else {
                    ItemDto compuesto = ItemDto.fromEntidad(item);
                    compuesto.getItemsm().clear();
                    for (Item item1 : item.getItemsm()) {
                        compuesto.getItemsm().add(ItemDto.fromEntidad(item1));
                    }
                    compuestos.add(compuesto);
                }
            }
            salida.put("simple", simples);
            salida.put("compuesto", compuestos);
        }
        return salida;

    }

    @Override
    public HashMap menus_secuendarios(long id_user, long id_menu) {
        HashMap salida = new HashMap();
        ArrayList resultado = coreDao.itemMenuSecundario(id_user, id_menu);
        if (resultado.size() > 0) {
            Item itan = (Item) resultado.get(0);
            salida.put("item", ItemDto.fromEntidad(itan));
            ArrayList<ItemDto> simples = new ArrayList();
            ArrayList<ItemDto> compuestos = new ArrayList();
            for (Item item : itan.getItemsm()) {
                if (item.getItemsm().isEmpty()) {
                    simples.add(ItemDto.fromEntidad(item));
                } else {
                    ItemDto compuesto = ItemDto.fromEntidad(item);
                    compuesto.getItemsm().clear();
                    for (Item item1 : item.getItemsm()) {
                        compuesto.getItemsm().add(ItemDto.fromEntidad(item1));
                    }
                    compuestos.add(compuesto);
                }
            }
            salida.put("simple", simples);
            salida.put("compuesto", compuestos);
        }
        return salida;
    }
        public void excepcion() throws SitteecException{
          throw new NullPointerException("Error Geneado null");
//            System.out.println("mx.gob.issste.control.gestion_sad.service.impl.CoreServiceImpl.excepcion()");
        }

}
