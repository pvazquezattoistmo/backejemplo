import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { EstudioLaboratorio } from './estudio-laboratorio';

@Injectable()
export class EstudioLaboratorioService {

    public globalesService: GlobalesService;
    public estudioLaboratorio: EstudioLaboratorio;
    public listaEstudioLaboratorio: EstudioLaboratorio[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setEstudioLaboratorio(estudioLaboratorio: EstudioLaboratorio) {
        this.estudioLaboratorio = estudioLaboratorio;
    }

    getEstudioLaboratorio(){
        return this.estudioLaboratorio;
    }

    guardarEstudioLaboratorio(estudioLaboratorio: EstudioLaboratorio, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(estudioLaboratorio, 'estudioLaboratorio/guardarEstudioLaboratorio')
            .subscribe(data => {
                _evento( this.estudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.estudioLaboratorio);
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

    guardarListaEstudioLaboratorio(estudioLaboratorio: EstudioLaboratorio[], _evento,objeto){
      this.error = false;
      return  this.globalesService.util.enviar(estudioLaboratorio, 'estudioLaboratorio/guardarListaEstudioLaboratorio')
          .subscribe(data => {
              _evento( this.globalesService.util.jsonOk(data),objeto);
              (this.estudioLaboratorio);
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

    actualizarEstudioLaboratorio(estudioLaboratorio: EstudioLaboratorio , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(estudioLaboratorio, 'estudioLaboratorio/actualizarEstudioLaboratorio')
            .subscribe(data => {
                _evento( this.estudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.estudioLaboratorio);
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

    actualizarListaEstudioLaboratorio(estudioLaboratorio: EstudioLaboratorio[] , _evento,objeto){
      this.error = false;
      return this.globalesService.util.enviar(estudioLaboratorio, 'estudioLaboratorio/actualizarListaEstudioLaboratorio')
          .subscribe(data => {
              _evento( this.globalesService.util.jsonOk(data),objeto);
              (this.estudioLaboratorio);
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

    eliminarEstudioLaboratorio(estudioLaboratorio: EstudioLaboratorio , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(estudioLaboratorio, 'estudioLaboratorio/eliminarEstudioLaboratorio')
            .subscribe(data => {
                _evento( this.estudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.estudioLaboratorio);
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

    getEstudioLaboratoriodb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'estudioLaboratorio/getEstudioLaboratorio')
            .subscribe(data => {
                _evento( this.estudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.estudioLaboratorio);
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

    getEstudioLaboratorios( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'estudioLaboratorio/getEstudioLaboratorios')
            .subscribe(data => {
                _evento( this.listaEstudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaEstudioLaboratorio );
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

    getEstudioLaboratoriosActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'estudioLaboratorio/getEstudioLaboratoriosActivos')
            .subscribe(data => {
                _evento( this.listaEstudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaEstudioLaboratorio );
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

    lazyEstudioLaboratorio(estudioLaboratorio: EstudioLaboratorio , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(estudioLaboratorio, 'estudioLaboratorio/lazyEstudioLaboratorio')
            .subscribe(data => {
                _evento( this.estudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.estudioLaboratorio);
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
    getEstudioLaboratorioById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'estudioLaboratorio/getEstudioLaboratorioById')
            .subscribe(data => {
                _evento( this.estudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.estudioLaboratorio);
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

    getEstudioLaboratoriosById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'estudioLaboratorio/getEstudioLaboratoriosById')
            .subscribe(data => {
                _evento( this.listaEstudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEstudioLaboratorio);
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
    getEstudioLaboratorioByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'estudioLaboratorio/getEstudioLaboratorioByFechaBaja')
            .subscribe(data => {
                _evento( this.estudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.estudioLaboratorio);
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

    getEstudioLaboratoriosByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'estudioLaboratorio/getEstudioLaboratoriosByFechaBaja')
            .subscribe(data => {
                _evento( this.listaEstudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEstudioLaboratorio);
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
    getEstudioLaboratorioByBrilloCorneal(brilloCorneal,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(brilloCorneal, 'estudioLaboratorio/getEstudioLaboratorioByBrilloCorneal')
            .subscribe(data => {
                _evento( this.estudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.estudioLaboratorio);
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

    getEstudioLaboratoriosByBrilloCorneal(brilloCorneal,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(brilloCorneal, 'estudioLaboratorio/getEstudioLaboratoriosByBrilloCorneal')
            .subscribe(data => {
                _evento( this.listaEstudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEstudioLaboratorio);
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
    getEstudioLaboratorioByCicatriceLeucoma(cicatriceLeucoma,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(cicatriceLeucoma, 'estudioLaboratorio/getEstudioLaboratorioByCicatriceLeucoma')
            .subscribe(data => {
                _evento( this.estudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.estudioLaboratorio);
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

    getEstudioLaboratoriosByCicatriceLeucoma(cicatriceLeucoma,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(cicatriceLeucoma, 'estudioLaboratorio/getEstudioLaboratoriosByCicatriceLeucoma')
            .subscribe(data => {
                _evento( this.listaEstudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEstudioLaboratorio);
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
    getEstudioLaboratorioByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'estudioLaboratorio/getEstudioLaboratorioByFechaRegistro')
            .subscribe(data => {
                _evento( this.estudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.estudioLaboratorio);
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

    getEstudioLaboratoriosByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'estudioLaboratorio/getEstudioLaboratoriosByFechaRegistro')
            .subscribe(data => {
                _evento( this.listaEstudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEstudioLaboratorio);
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
    getEstudioLaboratorioByErocioneUlcera(erocioneUlcera,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(erocioneUlcera, 'estudioLaboratorio/getEstudioLaboratorioByErocioneUlcera')
            .subscribe(data => {
                _evento( this.estudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.estudioLaboratorio);
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

    getEstudioLaboratoriosByErocioneUlcera(erocioneUlcera,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(erocioneUlcera, 'estudioLaboratorio/getEstudioLaboratoriosByErocioneUlcera')
            .subscribe(data => {
                _evento( this.listaEstudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEstudioLaboratorio);
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
    getEstudioLaboratorioByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'estudioLaboratorio/getEstudioLaboratorioByFechaActualizacion')
            .subscribe(data => {
                _evento( this.estudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.estudioLaboratorio);
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

    getEstudioLaboratoriosByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'estudioLaboratorio/getEstudioLaboratoriosByFechaActualizacion')
            .subscribe(data => {
                _evento( this.listaEstudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEstudioLaboratorio);
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
    getEstudioLaboratorioByValoracion(valoracion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(valoracion, 'estudioLaboratorio/getEstudioLaboratorioByValoracion')
            .subscribe(data => {
                _evento( this.estudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.estudioLaboratorio);
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

    getEstudioLaboratoriosByValoracion(valoracion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(valoracion, 'estudioLaboratorio/getEstudioLaboratoriosByValoracion')
            .subscribe(data => {
                _evento( this.listaEstudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEstudioLaboratorio);
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
    getEstudioLaboratorioByCuerpoExtrano(cuerpoExtrano,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(cuerpoExtrano, 'estudioLaboratorio/getEstudioLaboratorioByCuerpoExtrano')
            .subscribe(data => {
                _evento( this.estudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.estudioLaboratorio);
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

    getEstudioLaboratoriosByCuerpoExtrano(cuerpoExtrano,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(cuerpoExtrano, 'estudioLaboratorio/getEstudioLaboratoriosByCuerpoExtrano')
            .subscribe(data => {
                _evento( this.listaEstudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEstudioLaboratorio);
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
    getEstudioLaboratorioByTipoCornea(tipoCornea,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(tipoCornea, 'estudioLaboratorio/getEstudioLaboratorioByTipoCornea')
            .subscribe(data => {
                _evento( this.estudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.estudioLaboratorio);
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

    getEstudioLaboratoriosByTipoCornea(tipoCornea,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(tipoCornea, 'estudioLaboratorio/getEstudioLaboratoriosByTipoCornea')
            .subscribe(data => {
                _evento( this.listaEstudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEstudioLaboratorio);
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
    getEstudioLaboratorioByObservacion(observacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(observacion, 'estudioLaboratorio/getEstudioLaboratorioByObservacion')
            .subscribe(data => {
                _evento( this.estudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.estudioLaboratorio);
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

    getEstudioLaboratoriosByObservacion(observacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(observacion, 'estudioLaboratorio/getEstudioLaboratoriosByObservacion')
            .subscribe(data => {
                _evento( this.listaEstudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEstudioLaboratorio);
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
    getEstudioLaboratorioByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'estudioLaboratorio/getEstudioLaboratorioByStatus')
            .subscribe(data => {
                _evento( this.estudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.estudioLaboratorio);
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

    getEstudioLaboratoriosByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'estudioLaboratorio/getEstudioLaboratoriosByStatus')
            .subscribe(data => {
                _evento( this.listaEstudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEstudioLaboratorio);
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
    getEstudioLaboratorioByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'estudioLaboratorio/getEstudioLaboratorioByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.estudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.estudioLaboratorio);
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

    getEstudioLaboratoriosByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'estudioLaboratorio/getEstudioLaboratoriosByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaEstudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEstudioLaboratorio);
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
    getEstudioLaboratorioByIdevaluacionSolicitud(idevaluacionSolicitud,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idevaluacionSolicitud, 'estudioLaboratorio/getEstudioLaboratorioByIdevaluacionSolicitud')
            .subscribe(data => {
                _evento( this.estudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.estudioLaboratorio);
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

    getEstudioLaboratoriosByIdevaluacionSolicitud(idevaluacionSolicitud,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idevaluacionSolicitud, 'estudioLaboratorio/getEstudioLaboratoriosByIdevaluacionSolicitud')
            .subscribe(data => {
                _evento( this.listaEstudioLaboratorio = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEstudioLaboratorio);
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
        return this.globalesService.util.enviar(consulta, 'estudioLaboratorio/custom')
            .subscribe(data => {
                _evento( this.listaEstudioLaboratorio  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEstudioLaboratorio);
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

    getEstudioLaboratoriosByDto( p_estudioLaboratorio, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_estudioLaboratorio, 'estudioLaboratorio/getEstudioLaboratoriosByDto')
            .subscribe(data => {
                _evento( this.listaEstudioLaboratorio  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaEstudioLaboratorio);
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
