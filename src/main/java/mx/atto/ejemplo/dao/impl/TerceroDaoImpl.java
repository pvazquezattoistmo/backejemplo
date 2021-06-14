/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.atto.ejemplo.dao.impl;

import mx.atto.ejemplo.dao.ITerceroDao;
import mx.atto.ejemplo.entity.Tercero;
import org.springframework.stereotype.Repository;
/**
 *
 * @author Leo
 */
@Repository("terceroDao")
public class TerceroDaoImpl extends GenericDaoImpl<Tercero, Integer> implements ITerceroDao{
    
    
    
}
