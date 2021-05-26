import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { SolicitudTejidoCorneal } from './solicitud-tejido-corneal';

@Injectable()
export class SolicitudTejidoCornealService {

    public globalesService: GlobalesService;
    public solicitudTejidoCorneal: SolicitudTejidoCorneal;
    public listaSolicitudTejidoCorneal: SolicitudTejidoCorneal[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setSolicitudTejidoCorneal(solicitudTejidoCorneal: SolicitudTejidoCorneal) {
        this.solicitudTejidoCorneal = solicitudTejidoCorneal;
    }

    getSolicitudTejidoCorneal(){
        return this.solicitudTejidoCorneal;
    }

    guardarSolicitudTejidoCorneal(solicitudTejidoCorneal: SolicitudTejidoCorneal, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(solicitudTejidoCorneal, 'solicitudTejidoCorneal/guardarSolicitudTejidoCorneal')
            .subscribe(data => {
                _evento( this.solicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCorneal);
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

    actualizarSolicitudTejidoCorneal(solicitudTejidoCorneal: SolicitudTejidoCorneal , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(solicitudTejidoCorneal, 'solicitudTejidoCorneal/actualizarSolicitudTejidoCorneal')
            .subscribe(data => {
                _evento( this.solicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCorneal);
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

    eliminarSolicitudTejidoCorneal(solicitudTejidoCorneal: SolicitudTejidoCorneal , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(solicitudTejidoCorneal, 'solicitudTejidoCorneal/eliminarSolicitudTejidoCorneal')
            .subscribe(data => {
                _evento( this.solicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCorneal);
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
    eliminarLogicoSolicitudTejidoCorneal(solicitudTejidoCorneal: SolicitudTejidoCorneal , _evento,objeto){
      this.error = false;
      return this.globalesService.util.enviar(solicitudTejidoCorneal, 'solicitudTejidoCorneal/eliminarLogicoSolicitudTejidoCorneal')
          .subscribe(data => {
              _evento( this.solicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
              (this.solicitudTejidoCorneal);
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

    getSolicitudTejidoCornealdb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'solicitudTejidoCorneal/getSolicitudTejidoCorneal')
            .subscribe(data => {
                _evento( this.solicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCorneal);
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

    getSolicitudTejidoCorneales( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'solicitudTejidoCorneal/getSolicitudTejidoCorneales')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaSolicitudTejidoCorneal );
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

    bajaSolicitudesTejidoByID(par , _evento,objeto){
      this.error = false;
      return this.globalesService.util.enviar(par, 'solicitudTejidoCorneal/bajaSolicitudesTejidoByID')
          .subscribe(data => {
              _evento( this.solicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
              (this.solicitudTejidoCorneal);
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

    getSolicitudTejidoCornealesActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'solicitudTejidoCorneal/getSolicitudTejidoCornealesActivos')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaSolicitudTejidoCorneal );
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

    lazySolicitudTejidoCorneal(solicitudTejidoCorneal: SolicitudTejidoCorneal , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(solicitudTejidoCorneal, 'solicitudTejidoCorneal/lazySolicitudTejidoCorneal')
            .subscribe(data => {
                _evento( this.solicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCorneal);
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
    getSolicitudTejidoCornealById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'solicitudTejidoCorneal/getSolicitudTejidoCornealById')
            .subscribe(data => {
                _evento( this.solicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCorneal);
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

    getSolicitudTejidoCornealesById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesById')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCorneal);
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
    getSolicitudTejidoCornealByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByFechaBaja')
            .subscribe(data => {
                _evento( this.solicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCorneal);
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

    getSolicitudTejidoCornealesByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByFechaBaja')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCorneal);
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
    getSolicitudTejidoCornealByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByFechaRegistro')
            .subscribe(data => {
                _evento( this.solicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCorneal);
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

    getSolicitudTejidoCornealesByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByFechaRegistro')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCorneal);
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
    getSolicitudTejidoCornealByEstatusProceso(estatusProceso,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(estatusProceso, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByEstatusProceso')
            .subscribe(data => {
                _evento( this.solicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCorneal);
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

    getSolicitudTejidoCornealesByEstatusProceso(estatusProceso,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(estatusProceso, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByEstatusProceso')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCorneal);
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
    getSolicitudTejidoCornealBySegundoApellidoReceptor(segundoApellidoReceptor,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(segundoApellidoReceptor, 'solicitudTejidoCorneal/getSolicitudTejidoCornealBySegundoApellidoReceptor')
            .subscribe(data => {
                _evento( this.solicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCorneal);
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

    getSolicitudTejidoCornealesBySegundoApellidoReceptor(segundoApellidoReceptor,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(segundoApellidoReceptor, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesBySegundoApellidoReceptor')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCorneal);
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
    getSolicitudTejidoCornealByFechaTentativaCirugia(fechaTentativaCirugia,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaTentativaCirugia, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByFechaTentativaCirugia')
            .subscribe(data => {
                _evento( this.solicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCorneal);
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

    getSolicitudTejidoCornealesByFechaTentativaCirugia(fechaTentativaCirugia,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaTentativaCirugia, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByFechaTentativaCirugia')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCorneal);
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
    getSolicitudTejidoCornealByNombreReceptor(nombreReceptor,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(nombreReceptor, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByNombreReceptor')
            .subscribe(data => {
                _evento( this.solicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCorneal);
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

    getSolicitudTejidoCornealesByNombreReceptor(nombreReceptor,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(nombreReceptor, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByNombreReceptor')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCorneal);
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
    getSolicitudTejidoCornealByNumeroExpedienteReceptor(numeroExpedienteReceptor,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(numeroExpedienteReceptor, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByNumeroExpedienteReceptor')
            .subscribe(data => {
                _evento( this.solicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCorneal);
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

    getSolicitudTejidoCornealesByNumeroExpedienteReceptor(numeroExpedienteReceptor,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(numeroExpedienteReceptor, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByNumeroExpedienteReceptor')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCorneal);
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
    getSolicitudTejidoCornealBySexoReceptor(sexoReceptor,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(sexoReceptor, 'solicitudTejidoCorneal/getSolicitudTejidoCornealBySexoReceptor')
            .subscribe(data => {
                _evento( this.solicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCorneal);
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

    getSolicitudTejidoCornealesBySexoReceptor(sexoReceptor,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(sexoReceptor, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesBySexoReceptor')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCorneal);
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
    getSolicitudTejidoCornealByFolioSolicitudTejidoCorneal(folioSolicitudTejidoCorneal,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(folioSolicitudTejidoCorneal, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByFolioSolicitudTejidoCorneal')
            .subscribe(data => {
                _evento( this.solicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCorneal);
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

    getSolicitudTejidoCornealesByFolioSolicitudTejidoCorneal(folioSolicitudTejidoCorneal,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(folioSolicitudTejidoCorneal, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByFolioSolicitudTejidoCorneal')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCorneal);
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
    getSolicitudTejidoCornealByDiagnostico(diagnostico,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(diagnostico, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByDiagnostico')
            .subscribe(data => {
                _evento( this.solicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCorneal);
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

    getSolicitudTejidoCornealesByDiagnostico(diagnostico,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(diagnostico, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByDiagnostico')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCorneal);
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
    getSolicitudTejidoCornealByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByFechaActualizacion')
            .subscribe(data => {
                _evento( this.solicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCorneal);
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

    getSolicitudTejidoCornealesByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByFechaActualizacion')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCorneal);
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
    getSolicitudTejidoCornealByEdadReceptor(edadReceptor,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(edadReceptor, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByEdadReceptor')
            .subscribe(data => {
                _evento( this.solicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCorneal);
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

    getSolicitudTejidoCornealesByEdadReceptor(edadReceptor,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(edadReceptor, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByEdadReceptor')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCorneal);
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
    getSolicitudTejidoCornealByCaracteristicaCornea(caracteristicaCornea,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(caracteristicaCornea, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByCaracteristicaCornea')
            .subscribe(data => {
                _evento( this.solicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCorneal);
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

    getSolicitudTejidoCornealesByCaracteristicaCornea(caracteristicaCornea,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(caracteristicaCornea, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByCaracteristicaCornea')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCorneal);
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
    getSolicitudTejidoCornealByCorneaSolicitada(corneaSolicitada,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(corneaSolicitada, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByCorneaSolicitada')
            .subscribe(data => {
                _evento( this.solicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCorneal);
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

    getSolicitudTejidoCornealesByCorneaSolicitada(corneaSolicitada,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(corneaSolicitada, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByCorneaSolicitada')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCorneal);
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
    getSolicitudTejidoCornealByPrimerApellidoReceptor(primerApellidoReceptor,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(primerApellidoReceptor, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByPrimerApellidoReceptor')
            .subscribe(data => {
                _evento( this.solicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCorneal);
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

    getSolicitudTejidoCornealesByPrimerApellidoReceptor(primerApellidoReceptor,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(primerApellidoReceptor, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByPrimerApellidoReceptor')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCorneal);
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
    getSolicitudTejidoCornealByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByStatus')
            .subscribe(data => {
                _evento( this.solicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCorneal);
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

    getSolicitudTejidoCornealesByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByStatus')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCorneal);
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
    getSolicitudTejidoCornealByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.solicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCorneal);
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

    getSolicitudTejidoCornealesByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCorneal);
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
    getSolicitudTejidoCornealByIddoctorResponsableSolicitud(iddoctorResponsableSolicitud,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(iddoctorResponsableSolicitud, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByIddoctorResponsableSolicitud')
            .subscribe(data => {
                _evento( this.solicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCorneal);
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

    getSolicitudTejidoCornealesByIddoctorResponsableSolicitud(iddoctorResponsableSolicitud,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(iddoctorResponsableSolicitud, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByIddoctorResponsableSolicitud')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCorneal);
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
    getSolicitudTejidoCornealByIdhospital(idhospital,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idhospital, 'solicitudTejidoCorneal/getSolicitudTejidoCornealByIdhospital')
            .subscribe(data => {
                _evento( this.solicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.solicitudTejidoCorneal);
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

    getSolicitudTejidoCornealesByIdhospital(idhospital,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idhospital, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByIdhospital')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCorneal);
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
        return this.globalesService.util.enviar(consulta, 'solicitudTejidoCorneal/custom')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCorneal  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCorneal);
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

    getSolicitudTejidoCornealesByDto( p_solicitudTejidoCorneal, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_solicitudTejidoCorneal, 'solicitudTejidoCorneal/getSolicitudTejidoCornealesByDto')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCorneal  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCorneal);
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
    getDetalleSolicitudTejidoCorneales( p_solicitudTejidoCorneal, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_solicitudTejidoCorneal, 'solicitudTejidoCorneal/getDetalleSolicitudTejidoCorneales')
            .subscribe(data => {
                _evento( this.listaSolicitudTejidoCorneal  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaSolicitudTejidoCorneal);
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
