/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.text.ParseException;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.logging.Logger;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.criterion.Conjunction;
import org.hibernate.criterion.Disjunction;
import org.hibernate.criterion.ProjectionList;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;

import mx.atto.ejemplo.dto.DatoPersonal1Dto;
import mx.atto.ejemplo.dto.Direccion1Dto;
import mx.atto.ejemplo.dto.Direccion2Dto;
import mx.atto.ejemplo.dto.Direccion3Dto;
import mx.atto.ejemplo.entity.DatoPersonal1;
import mx.atto.ejemplo.entity.Direccion1;
import mx.atto.ejemplo.entity.Direccion2;
import mx.atto.ejemplo.entity.Direccion3;
/**
 *
 * @author luis
 */
public class Hibernate {
    private static final Logger logger = Logger.getLogger(Hibernate.class.getName());



    public Session getSession() {
        SessionFactory sessionFactory = HibernateUtil.getSessionFactory();
        if (sessionFactory.isClosed() )
           sessionFactory = HibernateUtil.buildSessionFactory();
        return HibernateUtil.getSessionFactory().getCurrentSession();

    }

    private void actualiazarBase() {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
//        session.
        session.beginTransaction();
        session.getTransaction().commit();
    }
   
    public void consultaEjemploHQL2(){
        Session session = getSession();
        Transaction tx = session.beginTransaction();
        String consulta ="select dp1.direccion1 from DatoPersonal1 as dp1";
        Query q = session.createQuery(consulta);
        List<Direccion1> resultado =  (List<Direccion1>) q.list();
        System.out.println("*************************");            
        System.out.println("*************************");            
        for (Direccion1 direccion1 : resultado) {
            Direccion1Dto direccion1Dto = Direccion1Dto.fromEntidad(direccion1);
            System.out.println(direccion1Dto);            
        }
        System.out.println("*************************");            
    }
    public void consultaEjemploHQL3(){
        Session session = getSession();
        Transaction tx = session.beginTransaction();
        String consulta ="from Direccion2 ";
        Query q = session.createQuery(consulta);
        List<Direccion2> resultado =  (List<Direccion2>) q.list();
        System.out.println("*************************");            
        System.out.println("*************************");            
        for (Direccion2 direccion2 : resultado) {
            Direccion2Dto direccion2Dto = Direccion2Dto.fromEntidad(direccion2);
            System.out.println(direccion2Dto);            
        }
        System.out.println("*************************");            
    }

    public void consultaEjemploHQL4(){
        Session session = getSession();
        Transaction tx = session.beginTransaction();
        String consulta ="from Direccion3 ";
        Query q = session.createQuery(consulta);
        List<Direccion3> resultado =  (List<Direccion3>) q.list();
        System.out.println("*************************");            
        System.out.println("*************************");            
        for (Direccion3 direccion3 : resultado) {
            Direccion3Dto direccion3Dto = Direccion3Dto.fromEntidad(direccion3);
            System.out.println(direccion3Dto);            
        }
        System.out.println("*************************");            
    } 
    public static void main(String[] args) throws ParseException {
        Hibernate mgr = new Hibernate();
        mgr.actualiazarBase();
        /*
        Hibernate mgr = new Hibernate();
        System.out.println("//////////////////////////////////////////");
        mgr.consultaEjemploHQL1();
        System.out.println("//////////////////////////////////////////");
        mgr.consultaEjemploCriterio1();
        System.out.println("//////////////////////////////////////////");
        
        HibernateUtil.getSessionFactory().close();
        */
    }
    public void consultaEjemploHQL1(){
        Session session = getSession();
        Transaction tx = session.beginTransaction();
        String consulta ="from DatoPersonal1 where  id = 1 or id = 3" ;
        Query q = session.createQuery(consulta);
        List<DatoPersonal1> resultado =  (List<DatoPersonal1>) q.list();
        // tx.commit();
        System.out.println("*************************");            
        System.out.println("*************************");            
        for (DatoPersonal1 datoPersonal1 : resultado) {
            DatoPersonal1Dto datoPersonal1Dto = DatoPersonal1Dto.fromEntidad(datoPersonal1);
            System.out.println(datoPersonal1Dto);            
        }
        System.out.println("*************************");            
    }

    public void consultaEjemploCriterio1(){
        Session session = getSession();
//        Transaction tx = session.beginTransaction();
        Criteria criteria = session.createCriteria(DatoPersonal1.class);
        Disjunction condiciones = Restrictions.disjunction();
        condiciones.add(Restrictions.eq("id",1));
        condiciones.add(Restrictions.eq("id",3));
        criteria.add(condiciones);
        List <DatoPersonal1> list = (List <DatoPersonal1>)criteria.list();
        // tx.commit();
        System.out.println("*************************");            
        System.out.println("*************************");           
        for (DatoPersonal1 datoPersonal1 :  list) {
            System.out.println(DatoPersonal1Dto.fromEntidad(datoPersonal1));
        }
        System.out.println("*************************");           
    }
    public void consultaEjemploCriterio2(){
        Session session = getSession();
        Transaction tx = session.beginTransaction();
        Criteria criteria = session.createCriteria(DatoPersonal1.class,"dp1");
        ProjectionList pl = Projections.projectionList();
        pl.add( Projections.property( "dp1.direccion1" ) );
        criteria.setProjection( pl );
        List  list = criteria.list();
        System.out.println("*************************");            
        System.out.println("*************************");           
        for (Direccion1 direccion1 : (List <Direccion1>) list) {
            System.out.println(Direccion1Dto.fromEntidad(direccion1));
        }
        System.out.println("*************************");           
    }

    public void consultaEjemploCriterio3(){
        Session session = getSession();
        Transaction tx = session.beginTransaction();
        Criteria criteria = session.createCriteria(Direccion2.class);
        List  list = criteria.list();
        System.out.println("*************************");            
        System.out.println("*************************");           
        for (Direccion2 direccion2 : (List <Direccion2>) list) {
            System.out.println(Direccion2Dto.fromEntidad(direccion2));
        }
        System.out.println("*************************");           
    }

    public void consultaEjemploCriterio4(){
        Session session = getSession();
        Transaction tx = session.beginTransaction();
        Criteria criteria = session.createCriteria(Direccion3.class);
        List  list = criteria.list();
        System.out.println("*************************");            
        System.out.println("*************************");           
        for (Direccion3 direccion3 : (List <Direccion3>) list) {
            System.out.println(Direccion3Dto.fromEntidad(direccion3));
        }
        System.out.println("*************************");           
    }

}
