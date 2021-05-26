import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { DocumentacionDonacion } from './documentacion-donacion';

@Injectable()
export class DocumentacionDonacionService {

    public globalesService: GlobalesService;
    public documentacionDonacion: DocumentacionDonacion;
    public listaDocumentacionDonacion: DocumentacionDonacion[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setDocumentacionDonacion(documentacionDonacion: DocumentacionDonacion) {
        this.documentacionDonacion = documentacionDonacion;
    }

    getDocumentacionDonacion(){
        return this.documentacionDonacion;
    }

    guardarDocumentacionDonacion(documentacionDonacion: DocumentacionDonacion, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(documentacionDonacion, 'documentacionDonacion/guardarDocumentacionDonacion')
            .subscribe(data => {
                _evento( this.documentacionDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.documentacionDonacion);
            }, (err) => { 
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
         
    }

    actualizarDocumentacionDonacion(documentacionDonacion: DocumentacionDonacion , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(documentacionDonacion, 'documentacionDonacion/actualizarDocumentacionDonacion')
            .subscribe(data => {
                _evento( this.documentacionDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.documentacionDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    eliminarDocumentacionDonacion(documentacionDonacion: DocumentacionDonacion , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(documentacionDonacion, 'documentacionDonacion/eliminarDocumentacionDonacion')
            .subscribe(data => {
                _evento( this.documentacionDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.documentacionDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getDocumentacionDonaciondb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'documentacionDonacion/getDocumentacionDonacion')
            .subscribe(data => {
                _evento( this.documentacionDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.documentacionDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getDocumentacionDonaciones( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'documentacionDonacion/getDocumentacionDonaciones')
            .subscribe(data => {
                _evento( this.listaDocumentacionDonacion = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaDocumentacionDonacion );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getDocumentacionDonacionesActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'documentacionDonacion/getDocumentacionDonacionesActivos')
            .subscribe(data => {
                _evento( this.listaDocumentacionDonacion = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaDocumentacionDonacion );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    
    lazyDocumentacionDonacion(documentacionDonacion: DocumentacionDonacion , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(documentacionDonacion, 'documentacionDonacion/lazyDocumentacionDonacion')
            .subscribe(data => {
                _evento( this.documentacionDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.documentacionDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
// busquedas por atributos  inicio
    getDocumentacionDonacionById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'documentacionDonacion/getDocumentacionDonacionById')
            .subscribe(data => {
                _evento( this.documentacionDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.documentacionDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDocumentacionDonacionesById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'documentacionDonacion/getDocumentacionDonacionesById')
            .subscribe(data => {
                _evento( this.listaDocumentacionDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDocumentacionDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDocumentacionDonacionByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'documentacionDonacion/getDocumentacionDonacionByFechaBaja')
            .subscribe(data => {
                _evento( this.documentacionDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.documentacionDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDocumentacionDonacionesByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'documentacionDonacion/getDocumentacionDonacionesByFechaBaja')
            .subscribe(data => {
                _evento( this.listaDocumentacionDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDocumentacionDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDocumentacionDonacionByCertificadoMuerteEncefalico(certificadoMuerteEncefalico,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(certificadoMuerteEncefalico, 'documentacionDonacion/getDocumentacionDonacionByCertificadoMuerteEncefalico')
            .subscribe(data => {
                _evento( this.documentacionDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.documentacionDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDocumentacionDonacionesByCertificadoMuerteEncefalico(certificadoMuerteEncefalico,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(certificadoMuerteEncefalico, 'documentacionDonacion/getDocumentacionDonacionesByCertificadoMuerteEncefalico')
            .subscribe(data => {
                _evento( this.listaDocumentacionDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDocumentacionDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDocumentacionDonacionByConsentimientoInformado(consentimientoInformado,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(consentimientoInformado, 'documentacionDonacion/getDocumentacionDonacionByConsentimientoInformado')
            .subscribe(data => {
                _evento( this.documentacionDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.documentacionDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDocumentacionDonacionesByConsentimientoInformado(consentimientoInformado,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(consentimientoInformado, 'documentacionDonacion/getDocumentacionDonacionesByConsentimientoInformado')
            .subscribe(data => {
                _evento( this.listaDocumentacionDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDocumentacionDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDocumentacionDonacionByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'documentacionDonacion/getDocumentacionDonacionByFechaRegistro')
            .subscribe(data => {
                _evento( this.documentacionDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.documentacionDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDocumentacionDonacionesByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'documentacionDonacion/getDocumentacionDonacionesByFechaRegistro')
            .subscribe(data => {
                _evento( this.listaDocumentacionDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDocumentacionDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDocumentacionDonacionByPanelViral(panelViral,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(panelViral, 'documentacionDonacion/getDocumentacionDonacionByPanelViral')
            .subscribe(data => {
                _evento( this.documentacionDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.documentacionDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDocumentacionDonacionesByPanelViral(panelViral,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(panelViral, 'documentacionDonacion/getDocumentacionDonacionesByPanelViral')
            .subscribe(data => {
                _evento( this.listaDocumentacionDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDocumentacionDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDocumentacionDonacionByRevisionLampara(revisionLampara,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(revisionLampara, 'documentacionDonacion/getDocumentacionDonacionByRevisionLampara')
            .subscribe(data => {
                _evento( this.documentacionDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.documentacionDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDocumentacionDonacionesByRevisionLampara(revisionLampara,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(revisionLampara, 'documentacionDonacion/getDocumentacionDonacionesByRevisionLampara')
            .subscribe(data => {
                _evento( this.listaDocumentacionDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDocumentacionDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDocumentacionDonacionByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'documentacionDonacion/getDocumentacionDonacionByFechaActualizacion')
            .subscribe(data => {
                _evento( this.documentacionDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.documentacionDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDocumentacionDonacionesByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'documentacionDonacion/getDocumentacionDonacionesByFechaActualizacion')
            .subscribe(data => {
                _evento( this.listaDocumentacionDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDocumentacionDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDocumentacionDonacionByCertificadoDefunsion(certificadoDefunsion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(certificadoDefunsion, 'documentacionDonacion/getDocumentacionDonacionByCertificadoDefunsion')
            .subscribe(data => {
                _evento( this.documentacionDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.documentacionDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDocumentacionDonacionesByCertificadoDefunsion(certificadoDefunsion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(certificadoDefunsion, 'documentacionDonacion/getDocumentacionDonacionesByCertificadoDefunsion')
            .subscribe(data => {
                _evento( this.listaDocumentacionDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDocumentacionDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDocumentacionDonacionByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'documentacionDonacion/getDocumentacionDonacionByStatus')
            .subscribe(data => {
                _evento( this.documentacionDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.documentacionDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDocumentacionDonacionesByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'documentacionDonacion/getDocumentacionDonacionesByStatus')
            .subscribe(data => {
                _evento( this.listaDocumentacionDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDocumentacionDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDocumentacionDonacionByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'documentacionDonacion/getDocumentacionDonacionByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.documentacionDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.documentacionDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDocumentacionDonacionesByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'documentacionDonacion/getDocumentacionDonacionesByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaDocumentacionDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDocumentacionDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDocumentacionDonacionByIdoficioDonacion(idoficioDonacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idoficioDonacion, 'documentacionDonacion/getDocumentacionDonacionByIdoficioDonacion')
            .subscribe(data => {
                _evento( this.documentacionDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.documentacionDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDocumentacionDonacionesByIdoficioDonacion(idoficioDonacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idoficioDonacion, 'documentacionDonacion/getDocumentacionDonacionesByIdoficioDonacion')
            .subscribe(data => {
                _evento( this.listaDocumentacionDonacion = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDocumentacionDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
// busquedas por atributos  fin


    custom( consulta, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(consulta, 'documentacionDonacion/custom')
            .subscribe(data => {
                _evento( this.listaDocumentacionDonacion  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDocumentacionDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getDocumentacionDonacionesByDto( p_documentacionDonacion, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_documentacionDonacion, 'documentacionDonacion/getDocumentacionDonacionesByDto')
            .subscribe(data => {
                _evento( this.listaDocumentacionDonacion  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDocumentacionDonacion);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

}
