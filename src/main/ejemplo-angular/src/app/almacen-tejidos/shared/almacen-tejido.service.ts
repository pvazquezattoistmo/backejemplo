import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { AlmacenTejido } from './almacen-tejido';

@Injectable()
export class AlmacenTejidoService {

    public globalesService: GlobalesService;
    public almacenTejido: AlmacenTejido;
    public listaAlmacenTejido: AlmacenTejido[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setAlmacenTejido(almacenTejido: AlmacenTejido) {
        this.almacenTejido = almacenTejido;
    }

    getAlmacenTejido(){
        return this.almacenTejido;
    }

    guardarAlmacenTejido(almacenTejido: AlmacenTejido, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(almacenTejido, 'almacenTejido/guardarAlmacenTejido')
            .subscribe(data => {
                _evento( this.almacenTejido = this.globalesService.util.jsonOk(data),objeto);
                (this.almacenTejido);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });

    }

    actualizarAlmacenTejido(almacenTejido: AlmacenTejido , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(almacenTejido, 'almacenTejido/actualizarAlmacenTejido')
            .subscribe(data => {
                _evento( this.almacenTejido = this.globalesService.util.jsonOk(data),objeto);
                (this.almacenTejido);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    eliminarAlmacenTejido(almacenTejido , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(almacenTejido, 'solicitudTejidoCornealAlmacen/eliminarSolicitudTejidoCornealAlmacen')
            .subscribe(data => {
                _evento( this.almacenTejido = this.globalesService.util.jsonOk(data),objeto);
                (this.almacenTejido);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getAlmacenTejidodb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'almacenTejido/getAlmacenTejido')
            .subscribe(data => {
                _evento( this.almacenTejido = this.globalesService.util.jsonOk(data),objeto);
                (this.almacenTejido);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getAlmacenTejidos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'almacenTejido/getAlmacenTejidos')
            .subscribe(data => {
                _evento( this.listaAlmacenTejido = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaAlmacenTejido );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getAlmacenTejidosActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'almacenTejido/getAlmacenTejidosActivos')
            .subscribe(data => {
                _evento( this.listaAlmacenTejido = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaAlmacenTejido );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    lazyAlmacenTejido(almacenTejido: AlmacenTejido , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(almacenTejido, 'almacenTejido/lazyAlmacenTejido')
            .subscribe(data => {
                _evento( this.almacenTejido = this.globalesService.util.jsonOk(data),objeto);
                (this.almacenTejido);
            }, (err) => {
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
    getAlmacenTejidoById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'almacenTejido/getAlmacenTejidoById')
            .subscribe(data => {
                _evento( this.almacenTejido = this.globalesService.util.jsonOk(data),objeto);
                (this.almacenTejido);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getAlmacenTejidosById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'almacenTejido/getAlmacenTejidosById')
            .subscribe(data => {
                _evento( this.listaAlmacenTejido = this.globalesService.util.jsonOk(data),objeto);
                (this.listaAlmacenTejido);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getAlmacenTejidoByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'almacenTejido/getAlmacenTejidoByFechaBaja')
            .subscribe(data => {
                _evento( this.almacenTejido = this.globalesService.util.jsonOk(data),objeto);
                (this.almacenTejido);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getAlmacenTejidosByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'almacenTejido/getAlmacenTejidosByFechaBaja')
            .subscribe(data => {
                _evento( this.listaAlmacenTejido = this.globalesService.util.jsonOk(data),objeto);
                (this.listaAlmacenTejido);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getAlmacenTejidoByUbicacion(ubicacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(ubicacion, 'almacenTejido/getAlmacenTejidoByUbicacion')
            .subscribe(data => {
                _evento( this.almacenTejido = this.globalesService.util.jsonOk(data),objeto);
                (this.almacenTejido);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getAlmacenTejidosByUbicacion(ubicacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(ubicacion, 'almacenTejido/getAlmacenTejidosByUbicacion')
            .subscribe(data => {
                _evento( this.listaAlmacenTejido = this.globalesService.util.jsonOk(data),objeto);
                (this.listaAlmacenTejido);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getAlmacenTejidoByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'almacenTejido/getAlmacenTejidoByFechaRegistro')
            .subscribe(data => {
                _evento( this.almacenTejido = this.globalesService.util.jsonOk(data),objeto);
                (this.almacenTejido);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getAlmacenTejidosByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'almacenTejido/getAlmacenTejidosByFechaRegistro')
            .subscribe(data => {
                _evento( this.listaAlmacenTejido = this.globalesService.util.jsonOk(data),objeto);
                (this.listaAlmacenTejido);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getAlmacenTejidoByHoraRefrigeracion(horaRefrigeracion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(horaRefrigeracion, 'almacenTejido/getAlmacenTejidoByHoraRefrigeracion')
            .subscribe(data => {
                _evento( this.almacenTejido = this.globalesService.util.jsonOk(data),objeto);
                (this.almacenTejido);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getAlmacenTejidosByHoraRefrigeracion(horaRefrigeracion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(horaRefrigeracion, 'almacenTejido/getAlmacenTejidosByHoraRefrigeracion')
            .subscribe(data => {
                _evento( this.listaAlmacenTejido = this.globalesService.util.jsonOk(data),objeto);
                (this.listaAlmacenTejido);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getAlmacenTejidoByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'almacenTejido/getAlmacenTejidoByFechaActualizacion')
            .subscribe(data => {
                _evento( this.almacenTejido = this.globalesService.util.jsonOk(data),objeto);
                (this.almacenTejido);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getAlmacenTejidosByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'almacenTejido/getAlmacenTejidosByFechaActualizacion')
            .subscribe(data => {
                _evento( this.listaAlmacenTejido = this.globalesService.util.jsonOk(data),objeto);
                (this.listaAlmacenTejido);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getAlmacenTejidoByEstatusProceso(estatusProceso,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(estatusProceso, 'almacenTejido/getAlmacenTejidoByEstatusProceso')
            .subscribe(data => {
                _evento( this.almacenTejido = this.globalesService.util.jsonOk(data),objeto);
                (this.almacenTejido);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getAlmacenTejidosByEstatusProceso(estatusProceso,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(estatusProceso, 'almacenTejido/getAlmacenTejidosByEstatusProceso')
            .subscribe(data => {
                _evento( this.listaAlmacenTejido = this.globalesService.util.jsonOk(data),objeto);
                (this.listaAlmacenTejido);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getAlmacenTejidoByComentario(comentario,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(comentario, 'almacenTejido/getAlmacenTejidoByComentario')
            .subscribe(data => {
                _evento( this.almacenTejido = this.globalesService.util.jsonOk(data),objeto);
                (this.almacenTejido);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getAlmacenTejidosByComentario(comentario,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(comentario, 'almacenTejido/getAlmacenTejidosByComentario')
            .subscribe(data => {
                _evento( this.listaAlmacenTejido = this.globalesService.util.jsonOk(data),objeto);
                (this.listaAlmacenTejido);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getAlmacenTejidoByTemperaturaRefrigeracion(temperaturaRefrigeracion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(temperaturaRefrigeracion, 'almacenTejido/getAlmacenTejidoByTemperaturaRefrigeracion')
            .subscribe(data => {
                _evento( this.almacenTejido = this.globalesService.util.jsonOk(data),objeto);
                (this.almacenTejido);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getAlmacenTejidosByTemperaturaRefrigeracion(temperaturaRefrigeracion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(temperaturaRefrigeracion, 'almacenTejido/getAlmacenTejidosByTemperaturaRefrigeracion')
            .subscribe(data => {
                _evento( this.listaAlmacenTejido = this.globalesService.util.jsonOk(data),objeto);
                (this.listaAlmacenTejido);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getAlmacenTejidoByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'almacenTejido/getAlmacenTejidoByStatus')
            .subscribe(data => {
                _evento( this.almacenTejido = this.globalesService.util.jsonOk(data),objeto);
                (this.almacenTejido);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getAlmacenTejidosByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'almacenTejido/getAlmacenTejidosByStatus')
            .subscribe(data => {
                _evento( this.listaAlmacenTejido = this.globalesService.util.jsonOk(data),objeto);
                (this.listaAlmacenTejido);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getAlmacenTejidoByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'almacenTejido/getAlmacenTejidoByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.almacenTejido = this.globalesService.util.jsonOk(data),objeto);
                (this.almacenTejido);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getAlmacenTejidosByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'almacenTejido/getAlmacenTejidosByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaAlmacenTejido = this.globalesService.util.jsonOk(data),objeto);
                (this.listaAlmacenTejido);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getAlmacenTejidoByIdoficioDonacion(idoficioDonacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idoficioDonacion, 'almacenTejido/getAlmacenTejidoByIdoficioDonacion')
            .subscribe(data => {
                _evento( this.almacenTejido = this.globalesService.util.jsonOk(data),objeto);
                (this.almacenTejido);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getAlmacenTejidosByIdoficioDonacion(idoficioDonacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idoficioDonacion, 'almacenTejido/getAlmacenTejidosByIdoficioDonacion')
            .subscribe(data => {
                _evento( this.listaAlmacenTejido = this.globalesService.util.jsonOk(data),objeto);
                (this.listaAlmacenTejido);
            }, (err) => {
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
        return this.globalesService.util.enviar(consulta, 'almacenTejido/custom')
            .subscribe(data => {
                _evento( this.listaAlmacenTejido  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaAlmacenTejido);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getAlmacenTejidosByDto( p_almacenTejido, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_almacenTejido, 'almacenTejido/getAlmacenTejidosByDto')
            .subscribe(data => {
                _evento( this.listaAlmacenTejido  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaAlmacenTejido);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }


    getAlmacenTejidosConsulta( p_almacenTejido, _evento,objeto){
      this.error = false;
      return this.globalesService.util.enviar(p_almacenTejido, 'almacenTejido/getListaAlmacenConsulta')
          .subscribe(data => {
              _evento(this.globalesService.util.jsonOk(data),objeto);
              (this.listaAlmacenTejido);
          }, (err) => {
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
