import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { SolicitudEvaluacionCorneal } from './solicitud-evaluacion-corneal';

@Injectable()
export class SolicitudEvaluacionCornealService {

    public globalesService: GlobalesService;
    public solicitudEvaluacionCorneal: SolicitudEvaluacionCorneal;
    public listaSolicitudEvaluacionCorneal: SolicitudEvaluacionCorneal[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setSolicitudEvaluacionCorneal(solicitudEvaluacionCorneal: SolicitudEvaluacionCorneal) {
        this.solicitudEvaluacionCorneal = solicitudEvaluacionCorneal;
    }

    getSolicitudEvaluacionCorneal(){
        return this.solicitudEvaluacionCorneal;
    }

    guardarSolicitudEvaluacionCorneal(solicitudEvaluacionCorneal: SolicitudEvaluacionCorneal, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(solicitudEvaluacionCorneal, 'solicitudEvaluacionCorneal/guardarSolicitudEvaluacionCorneal')
            .subscribe(data => {
                _evento( this.solicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudEvaluacionCorneal);
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

    actualizarSolicitudEvaluacionCorneal(solicitudEvaluacionCorneal: SolicitudEvaluacionCorneal , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(solicitudEvaluacionCorneal, 'solicitudEvaluacionCorneal/actualizarSolicitudEvaluacionCorneal')
            .subscribe(data => {
                _evento( this.solicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudEvaluacionCorneal);
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

    eliminarSolicitudEvaluacionCorneal(solicitudEvaluacionCorneal: SolicitudEvaluacionCorneal , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(solicitudEvaluacionCorneal, 'solicitudEvaluacionCorneal/eliminarSolicitudEvaluacionCorneal')
            .subscribe(data => {
                _evento( this.solicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudEvaluacionCorneal);
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

    getSolicitudEvaluacionCornealdb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCorneal')
            .subscribe(data => {
                _evento( this.solicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudEvaluacionCorneal);
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

  getSolicitudesEvaluacionByID(id , _evento,objeto){
    this.error = false;
    return this.globalesService.util.enviar(id, 'solicitudEvaluacionCorneal/getSolicitudesEvaluacionByID')
        .subscribe(data => {
            _evento( this.solicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
            (this.solicitudEvaluacionCorneal);
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

bajaSolicitudesEvaluacionByID(par , _evento,objeto){
  this.error = false;
  return this.globalesService.util.enviar(par, 'solicitudEvaluacionCorneal/bajaSolicitudesEvaluacionByID')
      .subscribe(data => {
          _evento( this.solicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
          (this.solicitudEvaluacionCorneal);
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

    getSolicitudEvaluacionCorneales( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCorneales')
            .subscribe(data => {
                _evento( this.listaSolicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaSolicitudEvaluacionCorneal );
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

    getSolicitudEvaluacionCornealesActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesActivos')
            .subscribe(data => {
                _evento( this.listaSolicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaSolicitudEvaluacionCorneal );
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

    lazySolicitudEvaluacionCorneal(solicitudEvaluacionCorneal: SolicitudEvaluacionCorneal , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(solicitudEvaluacionCorneal, 'solicitudEvaluacionCorneal/lazySolicitudEvaluacionCorneal')
            .subscribe(data => {
                _evento( this.solicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudEvaluacionCorneal);
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
    getSolicitudEvaluacionCornealById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealById')
            .subscribe(data => {
                _evento( this.solicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudEvaluacionCorneal);
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

    getSolicitudEvaluacionCornealesById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesById')
            .subscribe(data => {
                _evento( this.listaSolicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudEvaluacionCorneal);
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
    getSolicitudEvaluacionCornealByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByFechaBaja')
            .subscribe(data => {
                _evento( this.solicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudEvaluacionCorneal);
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

    getSolicitudEvaluacionCornealesByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByFechaBaja')
            .subscribe(data => {
                _evento( this.listaSolicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudEvaluacionCorneal);
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
    getSolicitudEvaluacionCornealByPrimerApellido(primerApellido,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(primerApellido, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByPrimerApellido')
            .subscribe(data => {
                _evento( this.solicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudEvaluacionCorneal);
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

    getSolicitudEvaluacionCornealesByPrimerApellido(primerApellido,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(primerApellido, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByPrimerApellido')
            .subscribe(data => {
                _evento( this.listaSolicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudEvaluacionCorneal);
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
    getSolicitudEvaluacionCornealByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByFechaRegistro')
            .subscribe(data => {
                _evento( this.solicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudEvaluacionCorneal);
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

    getSolicitudEvaluacionCornealesByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByFechaRegistro')
            .subscribe(data => {
                _evento( this.listaSolicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudEvaluacionCorneal);
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
    getSolicitudEvaluacionCornealByFechaMuerte(fechaMuerte,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaMuerte, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByFechaMuerte')
            .subscribe(data => {
                _evento( this.solicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudEvaluacionCorneal);
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

    getSolicitudEvaluacionCornealesByFechaMuerte(fechaMuerte,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaMuerte, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByFechaMuerte')
            .subscribe(data => {
                _evento( this.listaSolicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudEvaluacionCorneal);
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
    getSolicitudEvaluacionCornealBySegundoApellido(segundoApellido,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(segundoApellido, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealBySegundoApellido')
            .subscribe(data => {
                _evento( this.solicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudEvaluacionCorneal);
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

    getSolicitudEvaluacionCornealesBySegundoApellido(segundoApellido,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(segundoApellido, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesBySegundoApellido')
            .subscribe(data => {
                _evento( this.listaSolicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudEvaluacionCorneal);
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
    getSolicitudEvaluacionCornealByEstatusProceso(estatusProceso,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(estatusProceso, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByEstatusProceso')
            .subscribe(data => {
                _evento( this.solicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudEvaluacionCorneal);
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

    getSolicitudEvaluacionCornealesByEstatusProceso(estatusProceso,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(estatusProceso, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByEstatusProceso')
            .subscribe(data => {
                _evento( this.listaSolicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudEvaluacionCorneal);
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
    getSolicitudEvaluacionCornealByNombre(nombre,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(nombre, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByNombre')
            .subscribe(data => {
                _evento( this.solicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudEvaluacionCorneal);
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

    getSolicitudEvaluacionCornealesByNombre(nombre,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(nombre, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByNombre')
            .subscribe(data => {
                _evento( this.listaSolicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudEvaluacionCorneal);
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
    getSolicitudEvaluacionCornealByNumeroExpediente(numeroExpediente,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(numeroExpediente, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByNumeroExpediente')
            .subscribe(data => {
                _evento( this.solicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudEvaluacionCorneal);
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

    getSolicitudEvaluacionCornealesByNumeroExpediente(numeroExpediente,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(numeroExpediente, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByNumeroExpediente')
            .subscribe(data => {
                _evento( this.listaSolicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudEvaluacionCorneal);
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
    getSolicitudEvaluacionCornealByEdad(edad,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(edad, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByEdad')
            .subscribe(data => {
                _evento( this.solicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudEvaluacionCorneal);
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

    getSolicitudEvaluacionCornealesByEdad(edad,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(edad, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByEdad')
            .subscribe(data => {
                _evento( this.listaSolicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudEvaluacionCorneal);
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
    getSolicitudEvaluacionCornealByConservacionTemperaturaAmbiente(conservacionTemperaturaAmbiente,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(conservacionTemperaturaAmbiente, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByConservacionTemperaturaAmbiente')
            .subscribe(data => {
                _evento( this.solicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudEvaluacionCorneal);
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

    getSolicitudEvaluacionCornealesByConservacionTemperaturaAmbiente(conservacionTemperaturaAmbiente,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(conservacionTemperaturaAmbiente, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByConservacionTemperaturaAmbiente')
            .subscribe(data => {
                _evento( this.listaSolicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudEvaluacionCorneal);
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
    getSolicitudEvaluacionCornealByHoraInicioRefrigracion(horaInicioRefrigracion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(horaInicioRefrigracion, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByHoraInicioRefrigracion')
            .subscribe(data => {
                _evento( this.solicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudEvaluacionCorneal);
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

    getSolicitudEvaluacionCornealesByHoraInicioRefrigracion(horaInicioRefrigracion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(horaInicioRefrigracion, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByHoraInicioRefrigracion')
            .subscribe(data => {
                _evento( this.listaSolicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudEvaluacionCorneal);
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
    getSolicitudEvaluacionCornealByFolioSolicitud(folioSolicitud,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(folioSolicitud, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByFolioSolicitud')
            .subscribe(data => {
                _evento( this.solicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudEvaluacionCorneal);
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

    getSolicitudEvaluacionCornealesByFolioSolicitud(folioSolicitud,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(folioSolicitud, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByFolioSolicitud')
            .subscribe(data => {
                _evento( this.listaSolicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudEvaluacionCorneal);
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
    getSolicitudEvaluacionCornealByHoraMuerte(horaMuerte,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(horaMuerte, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByHoraMuerte')
            .subscribe(data => {
                _evento( this.solicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudEvaluacionCorneal);
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

    getSolicitudEvaluacionCornealesByHoraMuerte(horaMuerte,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(horaMuerte, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByHoraMuerte')
            .subscribe(data => {
                _evento( this.listaSolicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudEvaluacionCorneal);
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
    getSolicitudEvaluacionCornealByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByFechaActualizacion')
            .subscribe(data => {
                _evento( this.solicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudEvaluacionCorneal);
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

    getSolicitudEvaluacionCornealesByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByFechaActualizacion')
            .subscribe(data => {
                _evento( this.listaSolicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudEvaluacionCorneal);
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
    getSolicitudEvaluacionCornealByTemperaturaRefrigeracion(temperaturaRefrigeracion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(temperaturaRefrigeracion, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByTemperaturaRefrigeracion')
            .subscribe(data => {
                _evento( this.solicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudEvaluacionCorneal);
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

    getSolicitudEvaluacionCornealesByTemperaturaRefrigeracion(temperaturaRefrigeracion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(temperaturaRefrigeracion, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByTemperaturaRefrigeracion')
            .subscribe(data => {
                _evento( this.listaSolicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudEvaluacionCorneal);
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
    getSolicitudEvaluacionCornealByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByStatus')
            .subscribe(data => {
                _evento( this.solicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudEvaluacionCorneal);
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

    getSolicitudEvaluacionCornealesByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByStatus')
            .subscribe(data => {
                _evento( this.listaSolicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudEvaluacionCorneal);
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
    getSolicitudEvaluacionCornealByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.solicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudEvaluacionCorneal);
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

    getSolicitudEvaluacionCornealesByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaSolicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudEvaluacionCorneal);
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
    getSolicitudEvaluacionCornealByIdcausaMuerte(idcausaMuerte,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idcausaMuerte, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealByIdcausaMuerte')
            .subscribe(data => {
                _evento( this.solicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudEvaluacionCorneal);
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

    getSolicitudEvaluacionCornealesByIdcausaMuerte(idcausaMuerte,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idcausaMuerte, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByIdcausaMuerte')
            .subscribe(data => {
                _evento( this.listaSolicitudEvaluacionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudEvaluacionCorneal);
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
        return this.globalesService.util.enviar(consulta, 'solicitudEvaluacionCorneal/custom')
            .subscribe(data => {
                _evento( this.listaSolicitudEvaluacionCorneal  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudEvaluacionCorneal);
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

    getSolicitudEvaluacionCornealesByDto( p_solicitudEvaluacionCorneal, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_solicitudEvaluacionCorneal, 'solicitudEvaluacionCorneal/getSolicitudEvaluacionCornealesByDto')
            .subscribe(data => {
                _evento( this.listaSolicitudEvaluacionCorneal  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudEvaluacionCorneal);
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
