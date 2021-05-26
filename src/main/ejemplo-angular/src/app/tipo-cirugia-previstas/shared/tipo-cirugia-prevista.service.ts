import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { TipoCirugiaPrevista } from './tipo-cirugia-prevista';

@Injectable()
export class TipoCirugiaPrevistaService {

    public globalesService: GlobalesService;
    public tipoCirugiaPrevista: TipoCirugiaPrevista;
    public listaTipoCirugiaPrevista: TipoCirugiaPrevista[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setTipoCirugiaPrevista(tipoCirugiaPrevista: TipoCirugiaPrevista) {
        this.tipoCirugiaPrevista = tipoCirugiaPrevista;
    }

    getTipoCirugiaPrevista(){
        return this.tipoCirugiaPrevista;
    }

    guardarTipoCirugiaPrevista(tipoCirugiaPrevista: TipoCirugiaPrevista, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(tipoCirugiaPrevista, 'tipoCirugiaPrevista/guardarTipoCirugiaPrevista')
            .subscribe(data => {
                _evento( this.tipoCirugiaPrevista = this.globalesService.util.jsonOk(data),objeto);
                (this.tipoCirugiaPrevista);
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

    actualizarTipoCirugiaPrevista(tipoCirugiaPrevista: TipoCirugiaPrevista , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(tipoCirugiaPrevista, 'tipoCirugiaPrevista/actualizarTipoCirugiaPrevista')
            .subscribe(data => {
                _evento( this.tipoCirugiaPrevista = this.globalesService.util.jsonOk(data),objeto);
                (this.tipoCirugiaPrevista);
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

    eliminarTipoCirugiaPrevista(tipoCirugiaPrevista: TipoCirugiaPrevista , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(tipoCirugiaPrevista, 'tipoCirugiaPrevista/eliminarTipoCirugiaPrevista')
            .subscribe(data => {
                _evento( this.tipoCirugiaPrevista = this.globalesService.util.jsonOk(data),objeto);
                (this.tipoCirugiaPrevista);
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

    getTipoCirugiaPrevistadb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'tipoCirugiaPrevista/getTipoCirugiaPrevista')
            .subscribe(data => {
                _evento( this.tipoCirugiaPrevista = this.globalesService.util.jsonOk(data),objeto);
                (this.tipoCirugiaPrevista);
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

    getTipoCirugiaPrevistas( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'tipoCirugiaPrevista/getTipoCirugiaPrevistas')
            .subscribe(data => {
                _evento( this.listaTipoCirugiaPrevista = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaTipoCirugiaPrevista );
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

    getTipoCirugiaPrevistasActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'tipoCirugiaPrevista/getTipoCirugiaPrevistasActivos')
            .subscribe(data => {
                _evento( this.listaTipoCirugiaPrevista = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaTipoCirugiaPrevista );
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
    
    lazyTipoCirugiaPrevista(tipoCirugiaPrevista: TipoCirugiaPrevista , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(tipoCirugiaPrevista, 'tipoCirugiaPrevista/lazyTipoCirugiaPrevista')
            .subscribe(data => {
                _evento( this.tipoCirugiaPrevista = this.globalesService.util.jsonOk(data),objeto);
                (this.tipoCirugiaPrevista);
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
    getTipoCirugiaPrevistaById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'tipoCirugiaPrevista/getTipoCirugiaPrevistaById')
            .subscribe(data => {
                _evento( this.tipoCirugiaPrevista = this.globalesService.util.jsonOk(data),objeto);
                (this.tipoCirugiaPrevista);
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
    getTipoCirugiaPrevistaByIdSolicitudTejidoCorneal(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'tipoCirugiaPrevista/getTipoCirugiaPrevistasByIdSolicitudTejidoCorneal')
            .subscribe(data => {
                _evento( this.tipoCirugiaPrevista = this.globalesService.util.jsonOk(data),objeto);
                (this.tipoCirugiaPrevista);
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

    getTipoCirugiaPrevistasById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'tipoCirugiaPrevista/getTipoCirugiaPrevistasById')
            .subscribe(data => {
                _evento( this.listaTipoCirugiaPrevista = this.globalesService.util.jsonOk(data),objeto);
                (this.listaTipoCirugiaPrevista);
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
    getTipoCirugiaPrevistaByDmek(dmek,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(dmek, 'tipoCirugiaPrevista/getTipoCirugiaPrevistaByDmek')
            .subscribe(data => {
                _evento( this.tipoCirugiaPrevista = this.globalesService.util.jsonOk(data),objeto);
                (this.tipoCirugiaPrevista);
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

    getTipoCirugiaPrevistasByDmek(dmek,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(dmek, 'tipoCirugiaPrevista/getTipoCirugiaPrevistasByDmek')
            .subscribe(data => {
                _evento( this.listaTipoCirugiaPrevista = this.globalesService.util.jsonOk(data),objeto);
                (this.listaTipoCirugiaPrevista);
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
    getTipoCirugiaPrevistaByOtra(otra,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(otra, 'tipoCirugiaPrevista/getTipoCirugiaPrevistaByOtra')
            .subscribe(data => {
                _evento( this.tipoCirugiaPrevista = this.globalesService.util.jsonOk(data),objeto);
                (this.tipoCirugiaPrevista);
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

    getTipoCirugiaPrevistasByOtra(otra,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(otra, 'tipoCirugiaPrevista/getTipoCirugiaPrevistasByOtra')
            .subscribe(data => {
                _evento( this.listaTipoCirugiaPrevista = this.globalesService.util.jsonOk(data),objeto);
                (this.listaTipoCirugiaPrevista);
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
    getTipoCirugiaPrevistaByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'tipoCirugiaPrevista/getTipoCirugiaPrevistaByFechaBaja')
            .subscribe(data => {
                _evento( this.tipoCirugiaPrevista = this.globalesService.util.jsonOk(data),objeto);
                (this.tipoCirugiaPrevista);
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

    getTipoCirugiaPrevistasByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'tipoCirugiaPrevista/getTipoCirugiaPrevistasByFechaBaja')
            .subscribe(data => {
                _evento( this.listaTipoCirugiaPrevista = this.globalesService.util.jsonOk(data),objeto);
                (this.listaTipoCirugiaPrevista);
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
    getTipoCirugiaPrevistaByDalk(dalk,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(dalk, 'tipoCirugiaPrevista/getTipoCirugiaPrevistaByDalk')
            .subscribe(data => {
                _evento( this.tipoCirugiaPrevista = this.globalesService.util.jsonOk(data),objeto);
                (this.tipoCirugiaPrevista);
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

    getTipoCirugiaPrevistasByDalk(dalk,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(dalk, 'tipoCirugiaPrevista/getTipoCirugiaPrevistasByDalk')
            .subscribe(data => {
                _evento( this.listaTipoCirugiaPrevista = this.globalesService.util.jsonOk(data),objeto);
                (this.listaTipoCirugiaPrevista);
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
    getTipoCirugiaPrevistaByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'tipoCirugiaPrevista/getTipoCirugiaPrevistaByFechaRegistro')
            .subscribe(data => {
                _evento( this.tipoCirugiaPrevista = this.globalesService.util.jsonOk(data),objeto);
                (this.tipoCirugiaPrevista);
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

    getTipoCirugiaPrevistasByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'tipoCirugiaPrevista/getTipoCirugiaPrevistasByFechaRegistro')
            .subscribe(data => {
                _evento( this.listaTipoCirugiaPrevista = this.globalesService.util.jsonOk(data),objeto);
                (this.listaTipoCirugiaPrevista);
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
    getTipoCirugiaPrevistaByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'tipoCirugiaPrevista/getTipoCirugiaPrevistaByFechaActualizacion')
            .subscribe(data => {
                _evento( this.tipoCirugiaPrevista = this.globalesService.util.jsonOk(data),objeto);
                (this.tipoCirugiaPrevista);
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

    getTipoCirugiaPrevistasByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'tipoCirugiaPrevista/getTipoCirugiaPrevistasByFechaActualizacion')
            .subscribe(data => {
                _evento( this.listaTipoCirugiaPrevista = this.globalesService.util.jsonOk(data),objeto);
                (this.listaTipoCirugiaPrevista);
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
    getTipoCirugiaPrevistaByDsaek(dsaek,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(dsaek, 'tipoCirugiaPrevista/getTipoCirugiaPrevistaByDsaek')
            .subscribe(data => {
                _evento( this.tipoCirugiaPrevista = this.globalesService.util.jsonOk(data),objeto);
                (this.tipoCirugiaPrevista);
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

    getTipoCirugiaPrevistasByDsaek(dsaek,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(dsaek, 'tipoCirugiaPrevista/getTipoCirugiaPrevistasByDsaek')
            .subscribe(data => {
                _evento( this.listaTipoCirugiaPrevista = this.globalesService.util.jsonOk(data),objeto);
                (this.listaTipoCirugiaPrevista);
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
    getTipoCirugiaPrevistaByQp(qp,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(qp, 'tipoCirugiaPrevista/getTipoCirugiaPrevistaByQp')
            .subscribe(data => {
                _evento( this.tipoCirugiaPrevista = this.globalesService.util.jsonOk(data),objeto);
                (this.tipoCirugiaPrevista);
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

    getTipoCirugiaPrevistasByQp(qp,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(qp, 'tipoCirugiaPrevista/getTipoCirugiaPrevistasByQp')
            .subscribe(data => {
                _evento( this.listaTipoCirugiaPrevista = this.globalesService.util.jsonOk(data),objeto);
                (this.listaTipoCirugiaPrevista);
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
    getTipoCirugiaPrevistaByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'tipoCirugiaPrevista/getTipoCirugiaPrevistaByStatus')
            .subscribe(data => {
                _evento( this.tipoCirugiaPrevista = this.globalesService.util.jsonOk(data),objeto);
                (this.tipoCirugiaPrevista);
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

    getTipoCirugiaPrevistasByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'tipoCirugiaPrevista/getTipoCirugiaPrevistasByStatus')
            .subscribe(data => {
                _evento( this.listaTipoCirugiaPrevista = this.globalesService.util.jsonOk(data),objeto);
                (this.listaTipoCirugiaPrevista);
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
    getTipoCirugiaPrevistaByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'tipoCirugiaPrevista/getTipoCirugiaPrevistaByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.tipoCirugiaPrevista = this.globalesService.util.jsonOk(data),objeto);
                (this.tipoCirugiaPrevista);
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

    getTipoCirugiaPrevistasByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'tipoCirugiaPrevista/getTipoCirugiaPrevistasByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaTipoCirugiaPrevista = this.globalesService.util.jsonOk(data),objeto);
                (this.listaTipoCirugiaPrevista);
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
    getTipoCirugiaPrevistaByIdsolicitudTejidoCorneal(idsolicitudTejidoCorneal,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idsolicitudTejidoCorneal, 'tipoCirugiaPrevista/getTipoCirugiaPrevistaByIdsolicitudTejidoCorneal')
            .subscribe(data => {
                _evento( this.tipoCirugiaPrevista = this.globalesService.util.jsonOk(data),objeto);
                (this.tipoCirugiaPrevista);
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

    getTipoCirugiaPrevistasByIdsolicitudTejidoCorneal(idsolicitudTejidoCorneal,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idsolicitudTejidoCorneal, 'tipoCirugiaPrevista/getTipoCirugiaPrevistasByIdsolicitudTejidoCorneal')
            .subscribe(data => {
                _evento( this.listaTipoCirugiaPrevista = this.globalesService.util.jsonOk(data),objeto);
                (this.listaTipoCirugiaPrevista);
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
        return this.globalesService.util.enviar(consulta, 'tipoCirugiaPrevista/custom')
            .subscribe(data => {
                _evento( this.listaTipoCirugiaPrevista  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaTipoCirugiaPrevista);
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

    getTipoCirugiaPrevistasByDto( p_tipoCirugiaPrevista, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_tipoCirugiaPrevista, 'tipoCirugiaPrevista/getTipoCirugiaPrevistasByDto')
            .subscribe(data => {
                _evento( this.listaTipoCirugiaPrevista  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaTipoCirugiaPrevista);
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
