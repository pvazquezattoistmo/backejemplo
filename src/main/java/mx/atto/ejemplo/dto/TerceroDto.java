/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.atto.ejemplo.dto;

import mx.atto.ejemplo.entity.Tercero;

/**
 *
 * @author PC
 */
public class TerceroDto {

    private Integer idTerceros;
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

    public TerceroDto() {
    }

    public TerceroDto(Integer idTerceros, String nombreTerceros, String tipoTerceros, String direccionTerceros,
            String codigopostalTerceros, String paisTerceros, String provinciaTerceros, String rfcTerceros,
            String rpimssTerceros, String impuestoTerceros, String formaJuridicaterceros, String incotermsTerceros) {
        this.idTerceros = idTerceros;
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

    public Integer getIdTerceros() {
        return this.idTerceros;
    }

    public void setIdTerceros(Integer idTerceros) {
        this.idTerceros = idTerceros;
    }

    public String getNombreTerceros() {
        return this.nombreTerceros;
    }

    public void setNombreTerceros(String nombreTerceros) {
        this.nombreTerceros = nombreTerceros;
    }

    public String getTipoTerceros() {
        return this.tipoTerceros;
    }

    public void setTipoTerceros(String tipoTerceros) {
        this.tipoTerceros = tipoTerceros;
    }

    public String getDireccionTerceros() {
        return this.direccionTerceros;
    }

    public void setDireccionTerceros(String direccionTerceros) {
        this.direccionTerceros = direccionTerceros;
    }

    public String getCodigopostalTerceros() {
        return this.codigopostalTerceros;
    }

    public void setCodigopostalTerceros(String codigopostalTerceros) {
        this.codigopostalTerceros = codigopostalTerceros;
    }

    public String getPaisTerceros() {
        return this.paisTerceros;
    }

    public void setPaisTerceros(String paisTerceros) {
        this.paisTerceros = paisTerceros;
    }

    public String getProvinciaTerceros() {
        return this.provinciaTerceros;
    }

    public void setProvinciaTerceros(String provinciaTerceros) {
        this.provinciaTerceros = provinciaTerceros;
    }

    public String getRfcTerceros() {
        return this.rfcTerceros;
    }

    public void setRfcTerceros(String rfcTerceros) {
        this.rfcTerceros = rfcTerceros;
    }

    public String getRpimssTerceros() {
        return this.rpimssTerceros;
    }

    public void setRpimssTerceros(String rpimssTerceros) {
        this.rpimssTerceros = rpimssTerceros;
    }

    public String getImpuestoTerceros() {
        return this.impuestoTerceros;
    }

    public void setImpuestoTerceros(String impuestoTerceros) {
        this.impuestoTerceros = impuestoTerceros;
    }

    public String getFormaJuridicaterceros() {
        return this.formaJuridicaterceros;
    }

    public void setFormaJuridicaterceros(String formaJuridicaterceros) {
        this.formaJuridicaterceros = formaJuridicaterceros;
    }

    public String getIncotermsTerceros() {
        return this.incotermsTerceros;
    }

    public void setIncotermsTerceros(String incotermsTerceros) {
        this.incotermsTerceros = incotermsTerceros;
    }

    public static TerceroDto fromEntidad(Tercero entidad){
        TerceroDto salida = new TerceroDto();

        salida.setIdTerceros(entidad.getId());
        salida.setNombreTerceros(entidad.getNombreTerceros());
        salida.setTipoTerceros(entidad.getTipoTerceros());
        salida.setDireccionTerceros(entidad.getDireccionTerceros());
        salida.setCodigopostalTerceros(entidad.getCodigopostalTerceros());
        salida.setPaisTerceros(entidad.getPaisTerceros());
        salida.setProvinciaTerceros(entidad.getProvinciaTerceros());
        salida.setRfcTerceros(entidad.getRfcTerceros());
        salida.setRpimssTerceros(entidad.getRpimssTerceros());
        salida.setImpuestoTerceros(entidad.getImpuestoTerceros());
        salida.setFormaJuridicaterceros(entidad.getFormaJuridicaterceros());
        salida.setIncotermsTerceros(entidad.getIncotermsTerceros());

        return salida;
    }

    public Tercero toEntidadBase(){
        TerceroDto terEntidad = this;
        Tercero salida = new Tercero();

        salida.setId(terEntidad.getIdTerceros());
        salida.setNombreTerceros(terEntidad.getNombreTerceros());
        salida.setTipoTerceros(terEntidad.getTipoTerceros());
        salida.setDireccionTerceros(terEntidad.getDireccionTerceros());
        salida.setCodigopostalTerceros(terEntidad.getCodigopostalTerceros());
        salida.setPaisTerceros(terEntidad.getPaisTerceros());
        salida.setProvinciaTerceros(terEntidad.getProvinciaTerceros());
        salida.setRfcTerceros(terEntidad.getRfcTerceros());
        salida.setRpimssTerceros(terEntidad.getRpimssTerceros());
        salida.setImpuestoTerceros(terEntidad.getImpuestoTerceros());
        salida.setFormaJuridicaterceros(terEntidad.getFormaJuridicaterceros());
        salida.setIncotermsTerceros(terEntidad.getIncotermsTerceros());

        return salida;
    }


    @Override
    public String toString() {
        return "{" +
            " idTerceros='" + getIdTerceros() + "'" +
            ", nombreTerceros='" + getNombreTerceros() + "'" +
            ", tipoTerceros='" + getTipoTerceros() + "'" +
            ", direccionTerceros='" + getDireccionTerceros() + "'" +
            ", codigopostalTerceros='" + getCodigopostalTerceros() + "'" +
            ", paisTerceros='" + getPaisTerceros() + "'" +
            ", provinciaTerceros='" + getProvinciaTerceros() + "'" +
            ", rfcTerceros='" + getRfcTerceros() + "'" +
            ", rpimssTerceros='" + getRpimssTerceros() + "'" +
            ", impuestoTerceros='" + getImpuestoTerceros() + "'" +
            ", formaJuridicaterceros='" + getFormaJuridicaterceros() + "'" +
            ", incotermsTerceros='" + getIncotermsTerceros() + "'" +
            "}";
    }


}
