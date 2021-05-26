/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.atto.ejemplo.dto.token;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 *
 * @author eavendano_fs
 */
public class HeaderTokenDTO {
    @JsonProperty
    private String typ;
    @JsonProperty
    private String alg;
    
    public HeaderTokenDTO() {
    }
    public HeaderTokenDTO(String typ, String alg) {
        this.typ = typ;
        this.alg = alg;
    }

    public String getTyp() {
        return typ;
    }

    public void setTyp(String typ) {
        this.typ = typ;
    }

    public String getAlg() {
        return alg;
    }

    public void setAlg(String alg) {
        this.alg = alg;
    }
    
}
