import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { GestionMuestraMicrobiologia } from './gestion-muestra-microbiologia';

@Injectable()
export class GestionMuestraMicrobiologiaService {

    public globalesService: GlobalesService;
    public gestionMuestraMicrobiologia: GestionMuestraMicrobiologia;
    public listaGestionMuestraMicrobiologia: GestionMuestraMicrobiologia[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setGestionMuestraMicrobiologia(gestionMuestraMicrobiologia: GestionMuestraMicrobiologia) {
        this.gestionMuestraMicrobiologia = gestionMuestraMicrobiologia;
    }

    getGestionMuestraMicrobiologia(){
        return this.gestionMuestraMicrobiologia;
    }

    guardarGestionMuestraMicrobiologia(gestionMuestraMicrobiologia: GestionMuestraMicrobiologia, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(gestionMuestraMicrobiologia, 'gestionMuestraMicrobiologia/guardarGestionMuestraMicrobiologia')
            .subscribe(data => {
                _evento( this.gestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.gestionMuestraMicrobiologia);
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

    actualizarGestionMuestraMicrobiologia(gestionMuestraMicrobiologia: GestionMuestraMicrobiologia , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(gestionMuestraMicrobiologia, 'gestionMuestraMicrobiologia/actualizarGestionMuestraMicrobiologia')
            .subscribe(data => {
                _evento( this.gestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.gestionMuestraMicrobiologia);
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

    eliminarGestionMuestraMicrobiologia(gestionMuestraMicrobiologia: GestionMuestraMicrobiologia , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(gestionMuestraMicrobiologia, 'gestionMuestraMicrobiologia/eliminarGestionMuestraMicrobiologia')
            .subscribe(data => {
                _evento( this.gestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.gestionMuestraMicrobiologia);
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

    getGestionMuestraMicrobiologiadb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologia')
            .subscribe(data => {
                _evento( this.gestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.gestionMuestraMicrobiologia);
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

    getGestionMuestraMicrobiologias( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologias')
            .subscribe(data => {
                _evento( this.listaGestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaGestionMuestraMicrobiologia );
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

    getGestionMuestraMicrobiologiasActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiasActivos')
            .subscribe(data => {
                _evento( this.listaGestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaGestionMuestraMicrobiologia );
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
    
    lazyGestionMuestraMicrobiologia(gestionMuestraMicrobiologia: GestionMuestraMicrobiologia , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(gestionMuestraMicrobiologia, 'gestionMuestraMicrobiologia/lazyGestionMuestraMicrobiologia')
            .subscribe(data => {
                _evento( this.gestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.gestionMuestraMicrobiologia);
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
    getGestionMuestraMicrobiologiaById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiaById')
            .subscribe(data => {
                _evento( this.gestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.gestionMuestraMicrobiologia);
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

    getGestionMuestraMicrobiologiasById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiasById')
            .subscribe(data => {
                _evento( this.listaGestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.listaGestionMuestraMicrobiologia);
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
    getGestionMuestraMicrobiologiaByEnvio(envio,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(envio, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiaByEnvio')
            .subscribe(data => {
                _evento( this.gestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.gestionMuestraMicrobiologia);
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

    getGestionMuestraMicrobiologiasByEnvio(envio,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(envio, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiasByEnvio')
            .subscribe(data => {
                _evento( this.listaGestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.listaGestionMuestraMicrobiologia);
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
    getGestionMuestraMicrobiologiaByHoraInicioRevision(horaInicioRevision,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(horaInicioRevision, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiaByHoraInicioRevision')
            .subscribe(data => {
                _evento( this.gestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.gestionMuestraMicrobiologia);
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

    getGestionMuestraMicrobiologiasByHoraInicioRevision(horaInicioRevision,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(horaInicioRevision, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiasByHoraInicioRevision')
            .subscribe(data => {
                _evento( this.listaGestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.listaGestionMuestraMicrobiologia);
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
    getGestionMuestraMicrobiologiaByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiaByFechaBaja')
            .subscribe(data => {
                _evento( this.gestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.gestionMuestraMicrobiologia);
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

    getGestionMuestraMicrobiologiasByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiasByFechaBaja')
            .subscribe(data => {
                _evento( this.listaGestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.listaGestionMuestraMicrobiologia);
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
    getGestionMuestraMicrobiologiaByFechaInicioRevision(fechaInicioRevision,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaInicioRevision, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiaByFechaInicioRevision')
            .subscribe(data => {
                _evento( this.gestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.gestionMuestraMicrobiologia);
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

    getGestionMuestraMicrobiologiasByFechaInicioRevision(fechaInicioRevision,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaInicioRevision, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiasByFechaInicioRevision')
            .subscribe(data => {
                _evento( this.listaGestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.listaGestionMuestraMicrobiologia);
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
    getGestionMuestraMicrobiologiaByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiaByFechaRegistro')
            .subscribe(data => {
                _evento( this.gestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.gestionMuestraMicrobiologia);
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

    getGestionMuestraMicrobiologiasByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiasByFechaRegistro')
            .subscribe(data => {
                _evento( this.listaGestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.listaGestionMuestraMicrobiologia);
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
    getGestionMuestraMicrobiologiaByAlmacenHora(almacenHora,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(almacenHora, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiaByAlmacenHora')
            .subscribe(data => {
                _evento( this.gestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.gestionMuestraMicrobiologia);
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

    getGestionMuestraMicrobiologiasByAlmacenHora(almacenHora,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(almacenHora, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiasByAlmacenHora')
            .subscribe(data => {
                _evento( this.listaGestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.listaGestionMuestraMicrobiologia);
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
    getGestionMuestraMicrobiologiaByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiaByFechaActualizacion')
            .subscribe(data => {
                _evento( this.gestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.gestionMuestraMicrobiologia);
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

    getGestionMuestraMicrobiologiasByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiasByFechaActualizacion')
            .subscribe(data => {
                _evento( this.listaGestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.listaGestionMuestraMicrobiologia);
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
    getGestionMuestraMicrobiologiaByComentario(comentario,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(comentario, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiaByComentario')
            .subscribe(data => {
                _evento( this.gestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.gestionMuestraMicrobiologia);
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

    getGestionMuestraMicrobiologiasByComentario(comentario,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(comentario, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiasByComentario')
            .subscribe(data => {
                _evento( this.listaGestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.listaGestionMuestraMicrobiologia);
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
    getGestionMuestraMicrobiologiaByAlmacenMuestra(almacenMuestra,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(almacenMuestra, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiaByAlmacenMuestra')
            .subscribe(data => {
                _evento( this.gestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.gestionMuestraMicrobiologia);
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

    getGestionMuestraMicrobiologiasByAlmacenMuestra(almacenMuestra,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(almacenMuestra, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiasByAlmacenMuestra')
            .subscribe(data => {
                _evento( this.listaGestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.listaGestionMuestraMicrobiologia);
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
    getGestionMuestraMicrobiologiaByRevision(revision,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(revision, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiaByRevision')
            .subscribe(data => {
                _evento( this.gestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.gestionMuestraMicrobiologia);
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

    getGestionMuestraMicrobiologiasByRevision(revision,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(revision, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiasByRevision')
            .subscribe(data => {
                _evento( this.listaGestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.listaGestionMuestraMicrobiologia);
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
    getGestionMuestraMicrobiologiaByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiaByStatus')
            .subscribe(data => {
                _evento( this.gestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.gestionMuestraMicrobiologia);
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

    getGestionMuestraMicrobiologiasByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiasByStatus')
            .subscribe(data => {
                _evento( this.listaGestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.listaGestionMuestraMicrobiologia);
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
    getGestionMuestraMicrobiologiaByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiaByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.gestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.gestionMuestraMicrobiologia);
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

    getGestionMuestraMicrobiologiasByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiasByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaGestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.listaGestionMuestraMicrobiologia);
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
    getGestionMuestraMicrobiologiaByIdoficioDonacion(idoficioDonacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idoficioDonacion, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiaByIdoficioDonacion')
            .subscribe(data => {
                _evento( this.gestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.gestionMuestraMicrobiologia);
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

    getGestionMuestraMicrobiologiasByIdoficioDonacion(idoficioDonacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idoficioDonacion, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiasByIdoficioDonacion')
            .subscribe(data => {
                _evento( this.listaGestionMuestraMicrobiologia = this.globalesService.util.jsonOk(data),objeto);
                (this.listaGestionMuestraMicrobiologia);
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
        return this.globalesService.util.enviar(consulta, 'gestionMuestraMicrobiologia/custom')
            .subscribe(data => {
                _evento( this.listaGestionMuestraMicrobiologia  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaGestionMuestraMicrobiologia);
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

    getGestionMuestraMicrobiologiasByDto( p_gestionMuestraMicrobiologia, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_gestionMuestraMicrobiologia, 'gestionMuestraMicrobiologia/getGestionMuestraMicrobiologiasByDto')
            .subscribe(data => {
                _evento( this.listaGestionMuestraMicrobiologia  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaGestionMuestraMicrobiologia);
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
