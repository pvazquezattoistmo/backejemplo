import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { ConteoCelular } from './conteo-celular';

@Injectable()
export class ConteoCelularService {

    public globalesService: GlobalesService;
    public conteoCelular: ConteoCelular;
    public listaConteoCelular: ConteoCelular[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setConteoCelular(conteoCelular: ConteoCelular) {
        this.conteoCelular = conteoCelular;
    }

    getConteoCelular(){
        return this.conteoCelular;
    }

    guardarConteoCelular(conteoCelular: ConteoCelular, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(conteoCelular, 'conteoCelular/guardarConteoCelular')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });

    }

    guardarListaConteoCelular(conteoCelular: ConteoCelular[], _evento,objeto){
      this.error = false;
      return  this.globalesService.util.enviar(conteoCelular, 'conteoCelular/guardarListaConteoCelular')
          .subscribe(data => {
              _evento( this.globalesService.util.jsonOk(data),objeto);
              (this.conteoCelular);
          }, (err) => {
              ("no " + err);
              this.error = true;
              this.cad_err = err;
              setTimeout(() => {
                  this.error = false;
                  this.cad_err = "";
              }, 2000);
          });

  }

    actualizarConteoCelular(conteoCelular: ConteoCelular , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(conteoCelular, 'conteoCelular/actualizarConteoCelular')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    actualizarListaConteoCelular(conteoCelular: ConteoCelular[] , _evento,objeto){
      this.error = false;
      return this.globalesService.util.enviar(conteoCelular, 'conteoCelular/actualizarListaConteoCelular')
          .subscribe(data => {
              _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
              (this.conteoCelular);
          }, (err) => {
              ("no " + err);
              this.error = true;
              this.cad_err = err;
              setTimeout(() => {
                  this.error = false;
                  this.cad_err = "";
              }, 2000);
          });
  }

    eliminarConteoCelular(conteoCelular: ConteoCelular , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(conteoCelular, 'conteoCelular/eliminarConteoCelular')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelulardb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'conteoCelular/getConteoCelular')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelulares( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'conteoCelular/getConteoCelulares')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaConteoCelular );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'conteoCelular/getConteoCelularesActivos')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaConteoCelular );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    lazyConteoCelular(conteoCelular: ConteoCelular , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(conteoCelular, 'conteoCelular/lazyConteoCelular')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
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
    getConteoCelularById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'conteoCelular/getConteoCelularById')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'conteoCelular/getConteoCelularesById')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getConteoCelularByIdnumeroCelula(idnumeroCelula,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idnumeroCelula, 'conteoCelular/getConteoCelularByIdnumeroCelula')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByIdnumeroCelula(idnumeroCelula,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idnumeroCelula, 'conteoCelular/getConteoCelularesByIdnumeroCelula')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getConteoCelularByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'conteoCelular/getConteoCelularByFechaBaja')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'conteoCelular/getConteoCelularesByFechaBaja')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getConteoCelularByDiscontinuidad(discontinuidad,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(discontinuidad, 'conteoCelular/getConteoCelularByDiscontinuidad')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByDiscontinuidad(discontinuidad,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(discontinuidad, 'conteoCelular/getConteoCelularesByDiscontinuidad')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getConteoCelularByNormalMenor33(normalMenor33,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(normalMenor33, 'conteoCelular/getConteoCelularByNormalMenor33')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByNormalMenor33(normalMenor33,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(normalMenor33, 'conteoCelular/getConteoCelularesByNormalMenor33')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getConteoCelularByNumeroCampo(numeroCampo,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(numeroCampo, 'conteoCelular/getConteoCelularByNumeroCampo')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByNumeroCampo(numeroCampo,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(numeroCampo, 'conteoCelular/getConteoCelularesByNumeroCampo')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getConteoCelularByGutta(gutta,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(gutta, 'conteoCelular/getConteoCelularByGutta')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByGutta(gutta,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(gutta, 'conteoCelular/getConteoCelularesByGutta')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getConteoCelularByHexagonalidad(hexagonalidad,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(hexagonalidad, 'conteoCelular/getConteoCelularByHexagonalidad')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByHexagonalidad(hexagonalidad,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(hexagonalidad, 'conteoCelular/getConteoCelularesByHexagonalidad')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getConteoCelularByResponsableMicroscopio(responsableMicroscopio,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(responsableMicroscopio, 'conteoCelular/getConteoCelularByResponsableMicroscopio')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByResponsableMicroscopio(responsableMicroscopio,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(responsableMicroscopio, 'conteoCelular/getConteoCelularesByResponsableMicroscopio')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getConteoCelularByPaquimetria(paquimetria,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(paquimetria, 'conteoCelular/getConteoCelularByPaquimetria')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByPaquimetria(paquimetria,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(paquimetria, 'conteoCelular/getConteoCelularesByPaquimetria')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getConteoCelularByHomogeneidad(homogeneidad,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(homogeneidad, 'conteoCelular/getConteoCelularByHomogeneidad')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByHomogeneidad(homogeneidad,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(homogeneidad, 'conteoCelular/getConteoCelularesByHomogeneidad')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getConteoCelularByZonaCelular(zonaCelular,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(zonaCelular, 'conteoCelular/getConteoCelularByZonaCelular')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByZonaCelular(zonaCelular,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(zonaCelular, 'conteoCelular/getConteoCelularesByZonaCelular')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getConteoCelularByCvtamano(cvtamano,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(cvtamano, 'conteoCelular/getConteoCelularByCvtamano')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByCvtamano(cvtamano,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(cvtamano, 'conteoCelular/getConteoCelularesByCvtamano')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getConteoCelularByOtraDescripcion(otraDescripcion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(otraDescripcion, 'conteoCelular/getConteoCelularByOtraDescripcion')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByOtraDescripcion(otraDescripcion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(otraDescripcion, 'conteoCelular/getConteoCelularesByOtraDescripcion')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getConteoCelularByPlemorfismo(plemorfismo,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(plemorfismo, 'conteoCelular/getConteoCelularByPlemorfismo')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByPlemorfismo(plemorfismo,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(plemorfismo, 'conteoCelular/getConteoCelularesByPlemorfismo')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getConteoCelularByNumeroCelular(numeroCelular,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(numeroCelular, 'conteoCelular/getConteoCelularByNumeroCelular')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByNumeroCelular(numeroCelular,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(numeroCelular, 'conteoCelular/getConteoCelularesByNumeroCelular')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getConteoCelularByOtra(otra,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(otra, 'conteoCelular/getConteoCelularByOtra')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByOtra(otra,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(otra, 'conteoCelular/getConteoCelularesByOtra')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getConteoCelularByPliegue(pliegue,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(pliegue, 'conteoCelular/getConteoCelularByPliegue')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByPliegue(pliegue,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(pliegue, 'conteoCelular/getConteoCelularesByPliegue')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getConteoCelularByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'conteoCelular/getConteoCelularByFechaRegistro')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'conteoCelular/getConteoCelularesByFechaRegistro')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getConteoCelularByMayor60(mayor60,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(mayor60, 'conteoCelular/getConteoCelularByMayor60')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByMayor60(mayor60,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(mayor60, 'conteoCelular/getConteoCelularesByMayor60')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getConteoCelularByDeposito(deposito,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(deposito, 'conteoCelular/getConteoCelularByDeposito')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByDeposito(deposito,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(deposito, 'conteoCelular/getConteoCelularesByDeposito')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getConteoCelularByObservacionCd(observacionCd,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(observacionCd, 'conteoCelular/getConteoCelularByObservacionCd')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByObservacionCd(observacionCd,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(observacionCd, 'conteoCelular/getConteoCelularesByObservacionCd')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getConteoCelularByIdpaquimetria(idpaquimetria,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idpaquimetria, 'conteoCelular/getConteoCelularByIdpaquimetria')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByIdpaquimetria(idpaquimetria,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idpaquimetria, 'conteoCelular/getConteoCelularesByIdpaquimetria')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getConteoCelularByValoracionCi(valoracionCi,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(valoracionCi, 'conteoCelular/getConteoCelularByValoracionCi')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByValoracionCi(valoracionCi,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(valoracionCi, 'conteoCelular/getConteoCelularesByValoracionCi')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getConteoCelularByPolimegatismo(polimegatismo,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(polimegatismo, 'conteoCelular/getConteoCelularByPolimegatismo')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByPolimegatismo(polimegatismo,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(polimegatismo, 'conteoCelular/getConteoCelularesByPolimegatismo')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getConteoCelularByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'conteoCelular/getConteoCelularByFechaActualizacion')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'conteoCelular/getConteoCelularesByFechaActualizacion')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getConteoCelularByEstriaRotura(estriaRotura,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(estriaRotura, 'conteoCelular/getConteoCelularByEstriaRotura')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByEstriaRotura(estriaRotura,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(estriaRotura, 'conteoCelular/getConteoCelularesByEstriaRotura')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getConteoCelularByValoracionFinalEndotelioCd(valoracionFinalEndotelioCd,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(valoracionFinalEndotelioCd, 'conteoCelular/getConteoCelularByValoracionFinalEndotelioCd')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByValoracionFinalEndotelioCd(valoracionFinalEndotelioCd,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(valoracionFinalEndotelioCd, 'conteoCelular/getConteoCelularesByValoracionFinalEndotelioCd')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getConteoCelularByValoracionCd(valoracionCd,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(valoracionCd, 'conteoCelular/getConteoCelularByValoracionCd')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByValoracionCd(valoracionCd,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(valoracionCd, 'conteoCelular/getConteoCelularesByValoracionCd')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getConteoCelularByValoracionFinalEndotelioCi(valoracionFinalEndotelioCi,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(valoracionFinalEndotelioCi, 'conteoCelular/getConteoCelularByValoracionFinalEndotelioCi')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByValoracionFinalEndotelioCi(valoracionFinalEndotelioCi,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(valoracionFinalEndotelioCi, 'conteoCelular/getConteoCelularesByValoracionFinalEndotelioCi')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getConteoCelularByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'conteoCelular/getConteoCelularByStatus')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'conteoCelular/getConteoCelularesByStatus')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getConteoCelularByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'conteoCelular/getConteoCelularByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'conteoCelular/getConteoCelularesByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    getConteoCelularByIdevaluacionSolicitud(idevaluacionSolicitud,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idevaluacionSolicitud, 'conteoCelular/getConteoCelularByIdevaluacionSolicitud')
            .subscribe(data => {
                _evento( this.conteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.conteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByIdevaluacionSolicitud(idevaluacionSolicitud,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idevaluacionSolicitud, 'conteoCelular/getConteoCelularesByIdevaluacionSolicitud')
            .subscribe(data => {
                _evento( this.listaConteoCelular = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
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
        return this.globalesService.util.enviar(consulta, 'conteoCelular/custom')
            .subscribe(data => {
                _evento( this.listaConteoCelular  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getConteoCelularesByDto( p_conteoCelular, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_conteoCelular, 'conteoCelular/getConteoCelularesByDto')
            .subscribe(data => {
                _evento( this.listaConteoCelular  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaConteoCelular);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    notificacionHospitalProcurador( p_conteoCelular, _evento,objeto){
      this.error = false;
      return this.globalesService.util.enviar(p_conteoCelular, 'conteoCelular/notificacionHospitalProcurador')
          .subscribe(data => {
              _evento( this.globalesService.util.jsonOk(data),objeto);
              (this.listaConteoCelular);
          }, (err) => {
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
