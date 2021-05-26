import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { LamparaHendidura } from './lampara-hendidura';

@Injectable()
export class LamparaHendiduraService {

    public globalesService: GlobalesService;
    public lamparaHendidura: LamparaHendidura;
    public listaLamparaHendidura: LamparaHendidura[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setLamparaHendidura(lamparaHendidura: LamparaHendidura) {
        this.lamparaHendidura = lamparaHendidura;
    }

    getLamparaHendidura(){
        return this.lamparaHendidura;
    }

    guardarLamparaHendidura(lamparaHendidura: LamparaHendidura, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(lamparaHendidura, 'lamparaHendidura/guardarLamparaHendidura')
            .subscribe(data => {
                _evento( this.lamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.lamparaHendidura);
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

    guardarListaLamparaHendidura(lamparaHendidura: LamparaHendidura[], _evento,objeto){
      this.error = false;
      return  this.globalesService.util.enviar(lamparaHendidura, 'lamparaHendidura/guardarListaLamparaHendidura')
          .subscribe(data => {
              _evento( this.globalesService.util.jsonOk(data),objeto);
              (this.lamparaHendidura);
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

    actualizarLamparaHendidura(lamparaHendidura: LamparaHendidura , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(lamparaHendidura, 'lamparaHendidura/actualizarLamparaHendidura')
            .subscribe(data => {
                _evento( this.lamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.lamparaHendidura);
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

    actualizarListaLamparaHendidura(lamparaHendidura: LamparaHendidura[] , _evento,objeto){
      this.error = false;
      return this.globalesService.util.enviar(lamparaHendidura, 'lamparaHendidura/actualizarListaLamparaHendidura')
          .subscribe(data => {
              _evento(this.globalesService.util.jsonOk(data),objeto);
              (this.lamparaHendidura);
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

    eliminarLamparaHendidura(lamparaHendidura: LamparaHendidura , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(lamparaHendidura, 'lamparaHendidura/eliminarLamparaHendidura')
            .subscribe(data => {
                _evento( this.lamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.lamparaHendidura);
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

    getLamparaHendiduradb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'lamparaHendidura/getLamparaHendidura')
            .subscribe(data => {
                _evento( this.lamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.lamparaHendidura);
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

    getLamparaHendiduras( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'lamparaHendidura/getLamparaHendiduras')
            .subscribe(data => {
                _evento( this.listaLamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaLamparaHendidura );
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

    getLamparaHendidurasActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'lamparaHendidura/getLamparaHendidurasActivos')
            .subscribe(data => {
                _evento( this.listaLamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaLamparaHendidura );
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

    lazyLamparaHendidura(lamparaHendidura: LamparaHendidura , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(lamparaHendidura, 'lamparaHendidura/lazyLamparaHendidura')
            .subscribe(data => {
                _evento( this.lamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.lamparaHendidura);
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
    getLamparaHendiduraById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'lamparaHendidura/getLamparaHendiduraById')
            .subscribe(data => {
                _evento( this.lamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.lamparaHendidura);
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

    getLamparaHendidurasById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'lamparaHendidura/getLamparaHendidurasById')
            .subscribe(data => {
                _evento( this.listaLamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.listaLamparaHendidura);
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
    getLamparaHendiduraByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'lamparaHendidura/getLamparaHendiduraByFechaBaja')
            .subscribe(data => {
                _evento( this.lamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.lamparaHendidura);
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

    getLamparaHendidurasByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'lamparaHendidura/getLamparaHendidurasByFechaBaja')
            .subscribe(data => {
                _evento( this.listaLamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.listaLamparaHendidura);
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
    getLamparaHendiduraByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'lamparaHendidura/getLamparaHendiduraByFechaRegistro')
            .subscribe(data => {
                _evento( this.lamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.lamparaHendidura);
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

    getLamparaHendidurasByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'lamparaHendidura/getLamparaHendidurasByFechaRegistro')
            .subscribe(data => {
                _evento( this.listaLamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.listaLamparaHendidura);
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
    getLamparaHendiduraByOpacidadEstromal(opacidadEstromal,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(opacidadEstromal, 'lamparaHendidura/getLamparaHendiduraByOpacidadEstromal')
            .subscribe(data => {
                _evento( this.lamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.lamparaHendidura);
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

    getLamparaHendidurasByOpacidadEstromal(opacidadEstromal,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(opacidadEstromal, 'lamparaHendidura/getLamparaHendidurasByOpacidadEstromal')
            .subscribe(data => {
                _evento( this.listaLamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.listaLamparaHendidura);
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
    getLamparaHendiduraByArcoSenil(arcoSenil,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(arcoSenil, 'lamparaHendidura/getLamparaHendiduraByArcoSenil')
            .subscribe(data => {
                _evento( this.lamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.lamparaHendidura);
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

    getLamparaHendidurasByArcoSenil(arcoSenil,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(arcoSenil, 'lamparaHendidura/getLamparaHendidurasByArcoSenil')
            .subscribe(data => {
                _evento( this.listaLamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.listaLamparaHendidura);
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
    getLamparaHendiduraByTipoCornea(tipoCornea,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(tipoCornea, 'lamparaHendidura/getLamparaHendiduraByTipoCornea')
            .subscribe(data => {
                _evento( this.lamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.lamparaHendidura);
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

    getLamparaHendidurasByTipoCornea(tipoCornea,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(tipoCornea, 'lamparaHendidura/getLamparaHendidurasByTipoCornea')
            .subscribe(data => {
                _evento( this.listaLamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.listaLamparaHendidura);
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
    getLamparaHendiduraByDesecacion(desecacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(desecacion, 'lamparaHendidura/getLamparaHendiduraByDesecacion')
            .subscribe(data => {
                _evento( this.lamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.lamparaHendidura);
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

    getLamparaHendidurasByDesecacion(desecacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(desecacion, 'lamparaHendidura/getLamparaHendidurasByDesecacion')
            .subscribe(data => {
                _evento( this.listaLamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.listaLamparaHendidura);
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
    getLamparaHendiduraByMicrocornea(microcornea,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(microcornea, 'lamparaHendidura/getLamparaHendiduraByMicrocornea')
            .subscribe(data => {
                _evento( this.lamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.lamparaHendidura);
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

    getLamparaHendidurasByMicrocornea(microcornea,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(microcornea, 'lamparaHendidura/getLamparaHendidurasByMicrocornea')
            .subscribe(data => {
                _evento( this.listaLamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.listaLamparaHendidura);
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
    getLamparaHendiduraByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'lamparaHendidura/getLamparaHendiduraByFechaActualizacion')
            .subscribe(data => {
                _evento( this.lamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.lamparaHendidura);
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

    getLamparaHendidurasByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'lamparaHendidura/getLamparaHendidurasByFechaActualizacion')
            .subscribe(data => {
                _evento( this.listaLamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.listaLamparaHendidura);
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
    getLamparaHendiduraByDanoEndotelial(danoEndotelial,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(danoEndotelial, 'lamparaHendidura/getLamparaHendiduraByDanoEndotelial')
            .subscribe(data => {
                _evento( this.lamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.lamparaHendidura);
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

    getLamparaHendidurasByDanoEndotelial(danoEndotelial,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(danoEndotelial, 'lamparaHendidura/getLamparaHendidurasByDanoEndotelial')
            .subscribe(data => {
                _evento( this.listaLamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.listaLamparaHendidura);
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
    getLamparaHendiduraByObservacion(observacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(observacion, 'lamparaHendidura/getLamparaHendiduraByObservacion')
            .subscribe(data => {
                _evento( this.lamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.lamparaHendidura);
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

    getLamparaHendidurasByObservacion(observacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(observacion, 'lamparaHendidura/getLamparaHendidurasByObservacion')
            .subscribe(data => {
                _evento( this.listaLamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.listaLamparaHendidura);
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
    getLamparaHendiduraByPliegueEstria(pliegueEstria,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(pliegueEstria, 'lamparaHendidura/getLamparaHendiduraByPliegueEstria')
            .subscribe(data => {
                _evento( this.lamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.lamparaHendidura);
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

    getLamparaHendidurasByPliegueEstria(pliegueEstria,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(pliegueEstria, 'lamparaHendidura/getLamparaHendidurasByPliegueEstria')
            .subscribe(data => {
                _evento( this.listaLamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.listaLamparaHendidura);
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
    getLamparaHendiduraByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'lamparaHendidura/getLamparaHendiduraByStatus')
            .subscribe(data => {
                _evento( this.lamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.lamparaHendidura);
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

    getLamparaHendidurasByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'lamparaHendidura/getLamparaHendidurasByStatus')
            .subscribe(data => {
                _evento( this.listaLamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.listaLamparaHendidura);
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
    getLamparaHendiduraByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'lamparaHendidura/getLamparaHendiduraByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.lamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.lamparaHendidura);
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

    getLamparaHendidurasByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'lamparaHendidura/getLamparaHendidurasByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaLamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.listaLamparaHendidura);
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
    getLamparaHendiduraByIdevaluacionSolicitud(idevaluacionSolicitud,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idevaluacionSolicitud, 'lamparaHendidura/getLamparaHendiduraByIdevaluacionSolicitud')
            .subscribe(data => {
                _evento( this.lamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.lamparaHendidura);
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

    getLamparaHendidurasByIdevaluacionSolicitud(idevaluacionSolicitud,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idevaluacionSolicitud, 'lamparaHendidura/getLamparaHendidurasByIdevaluacionSolicitud')
            .subscribe(data => {
                _evento( this.listaLamparaHendidura = this.globalesService.util.jsonOk(data),objeto);
                (this.listaLamparaHendidura);
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
        return this.globalesService.util.enviar(consulta, 'lamparaHendidura/custom')
            .subscribe(data => {
                _evento( this.listaLamparaHendidura  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaLamparaHendidura);
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

    getLamparaHendidurasByDto( p_lamparaHendidura, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_lamparaHendidura, 'lamparaHendidura/getLamparaHendidurasByDto')
            .subscribe(data => {
                _evento( this.listaLamparaHendidura  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaLamparaHendidura);
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
