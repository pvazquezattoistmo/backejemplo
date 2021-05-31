/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.atto.ejemplo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author PC
 */
@Entity
@Table(name = "terceros")
public class Tercero {

    private Integer id;
    private String nombreTerceros;
    private String tipoTerceros;
    private String direccionTerceros;
    private String codigopostalTerceros;
    private String paisTerceros;
    private String provinciaTerceros;
    private String rfcTerceros;
    private String rpimssTerceros;
    private String impuestoTerceros;
    private String formaJuridicaterceros;
    private String incotermsTerceros;

    public Tercero() {
    }

    public Tercero(Integer idTerceros, String nombreTerceros, String tipoTerceros, String direccionTerceros, String codigopostalTerceros, String paisTerceros, String provinciaTerceros, String rfcTerceros, String rpimssTerceros, String impuestoTerceros, String formaJuridicaterceros, String incotermsTerceros) {
        this.id = idTerceros;
        this.nombreTerceros = nombreTerceros;
        this.tipoTerceros = tipoTerceros;
        this.direccionTerceros = direccionTerceros;
        this.codigopostalTerceros = codigopostalTerceros;
        this.paisTerceros = paisTerceros;
        this.provinciaTerceros = provinciaTerceros;
        this.rfcTerceros = rfcTerceros;
        this.rpimssTerceros = rpimssTerceros;
        this.impuestoTerceros = impuestoTerceros;
        this.formaJuridicaterceros = formaJuridicaterceros;
        this.incotermsTerceros = incotermsTerceros;
    }

    @Id
    @GeneratedValue
    @Column(name = "id")
    public Integer getId() {
        return id;
    }

    public void setId(Integer idTerceros) {
        this.id = idTerceros;
    }

    @Column(name = "nombre_terceros")
    public String getNombreTerceros() {
        return nombreTerceros;
    }

    public void setNombreTerceros(String nombreTerceros) {
        this.nombreTerceros = nombreTerceros;
    }

    @Column(name = "tipo_terceros")
    public String getTipoTerceros() {
        return tipoTerceros;
    }

    public void setTipoTerceros(String tipoTerceros) {
        this.tipoTerceros = tipoTerceros;
    }

    @Column(name = "direccion_terceros")
    public String getDireccionTerceros() {
        return direccionTerceros;
    }

    public void setDireccionTerceros(String direccionTerceros) {
        this.direccionTerceros = direccionTerceros;
    }

    @Column(name = "codigopostal_terceros")
    public String getCodigopostalTerceros() {
        return codigopostalTerceros;
    }

    public void setCodigopostalTerceros(String codigopostalTerceros) {
        this.codigopostalTerceros = codigopostalTerceros;
    }

    @Column(name = "pais_terceros")
    public String getPaisTerceros() {
        return paisTerceros;
    }

    public void setPaisTerceros(String paisTerceros) {
        this.paisTerceros = paisTerceros;
    }

    @Column(name = "provincia_terceros")
    public String getProvinciaTerceros() {
        return provinciaTerceros;
    }

    public void setProvinciaTerceros(String provinciaTerceros) {
        this.provinciaTerceros = provinciaTerceros;
    }

    @Column(name = "rfc_terceros")
    public String getRfcTerceros() {
        return rfcTerceros;
    }

    public void setRfcTerceros(String rfcTerceros) {
        this.rfcTerceros = rfcTerceros;
    }

    @Column(name = "rpimss_terceros")
    public String getRpimssTerceros() {
        return rpimssTerceros;
    }

    public void setRpimssTerceros(String rpimssTerceros) {
        this.rpimssTerceros = rpimssTerceros;
    }

    @Column(name = "impuesto_terceros")
    public String getImpuestoTerceros() {
        return impuestoTerceros;
    }

    public void setImpuestoTerceros(String impuestoTerceros) {
        this.impuestoTerceros = impuestoTerceros;
    }

    @Column(name = "forma_juridica_terceros")
    public String getFormaJuridicaterceros() {
        return formaJuridicaterceros;
    }

    public void setFormaJuridicaterceros(String formaJuridicaterceros) {
        this.formaJuridicaterceros = formaJuridicaterceros;
    }

    @Column(name = "incoterms_terceros")
    public String getIncotermsTerceros() {
        return incotermsTerceros;
    }

    public void setIncotermsTerceros(String incotermsTerceros) {
        this.incotermsTerceros = incotermsTerceros;
    }

}
