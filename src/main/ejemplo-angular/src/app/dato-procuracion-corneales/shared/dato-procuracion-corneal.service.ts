import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { DatoProcuracionCorneal } from './dato-procuracion-corneal';

@Injectable()
export class DatoProcuracionCornealService {

    public globalesService: GlobalesService;
    public datoProcuracionCorneal: DatoProcuracionCorneal;
    public listaDatoProcuracionCorneal: DatoProcuracionCorneal[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setDatoProcuracionCorneal(datoProcuracionCorneal: DatoProcuracionCorneal) {
        this.datoProcuracionCorneal = datoProcuracionCorneal;
    }

    getDatoProcuracionCorneal(){
        return this.datoProcuracionCorneal;
    }

    guardarDatoProcuracionCorneal(datoProcuracionCorneal: DatoProcuracionCorneal, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(datoProcuracionCorneal, 'datoProcuracionCorneal/guardarDatoProcuracionCorneal')
            .subscribe(data => {
                _evento( this.datoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.datoProcuracionCorneal);
            }, (err) => { 
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
         
    }

    actualizarDatoProcuracionCorneal(datoProcuracionCorneal: DatoProcuracionCorneal , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(datoProcuracionCorneal, 'datoProcuracionCorneal/actualizarDatoProcuracionCorneal')
            .subscribe(data => {
                _evento( this.datoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.datoProcuracionCorneal);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    eliminarDatoProcuracionCorneal(datoProcuracionCorneal: DatoProcuracionCorneal , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(datoProcuracionCorneal, 'datoProcuracionCorneal/eliminarDatoProcuracionCorneal')
            .subscribe(data => {
                _evento( this.datoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.datoProcuracionCorneal);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getDatoProcuracionCornealdb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'datoProcuracionCorneal/getDatoProcuracionCorneal')
            .subscribe(data => {
                _evento( this.datoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.datoProcuracionCorneal);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getDatoProcuracionCorneales( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'datoProcuracionCorneal/getDatoProcuracionCorneales')
            .subscribe(data => {
                _evento( this.listaDatoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaDatoProcuracionCorneal );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getDatoProcuracionCornealesActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'datoProcuracionCorneal/getDatoProcuracionCornealesActivos')
            .subscribe(data => {
                _evento( this.listaDatoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaDatoProcuracionCorneal );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    
    lazyDatoProcuracionCorneal(datoProcuracionCorneal: DatoProcuracionCorneal , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(datoProcuracionCorneal, 'datoProcuracionCorneal/lazyDatoProcuracionCorneal')
            .subscribe(data => {
                _evento( this.datoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.datoProcuracionCorneal);
            }, (err) => {
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
    getDatoProcuracionCornealById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'datoProcuracionCorneal/getDatoProcuracionCornealById')
            .subscribe(data => {
                _evento( this.datoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.datoProcuracionCorneal);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDatoProcuracionCornealesById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'datoProcuracionCorneal/getDatoProcuracionCornealesById')
            .subscribe(data => {
                _evento( this.listaDatoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDatoProcuracionCorneal);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDatoProcuracionCornealByHoraFin(horaFin,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(horaFin, 'datoProcuracionCorneal/getDatoProcuracionCornealByHoraFin')
            .subscribe(data => {
                _evento( this.datoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.datoProcuracionCorneal);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDatoProcuracionCornealesByHoraFin(horaFin,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(horaFin, 'datoProcuracionCorneal/getDatoProcuracionCornealesByHoraFin')
            .subscribe(data => {
                _evento( this.listaDatoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDatoProcuracionCorneal);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDatoProcuracionCornealByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'datoProcuracionCorneal/getDatoProcuracionCornealByFechaBaja')
            .subscribe(data => {
                _evento( this.datoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.datoProcuracionCorneal);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDatoProcuracionCornealesByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'datoProcuracionCorneal/getDatoProcuracionCornealesByFechaBaja')
            .subscribe(data => {
                _evento( this.listaDatoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDatoProcuracionCorneal);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDatoProcuracionCornealByTipo(tipo,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(tipo, 'datoProcuracionCorneal/getDatoProcuracionCornealByTipo')
            .subscribe(data => {
                _evento( this.datoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.datoProcuracionCorneal);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDatoProcuracionCornealesByTipo(tipo,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(tipo, 'datoProcuracionCorneal/getDatoProcuracionCornealesByTipo')
            .subscribe(data => {
                _evento( this.listaDatoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDatoProcuracionCorneal);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDatoProcuracionCornealByFechaInicio(fechaInicio,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaInicio, 'datoProcuracionCorneal/getDatoProcuracionCornealByFechaInicio')
            .subscribe(data => {
                _evento( this.datoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.datoProcuracionCorneal);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDatoProcuracionCornealesByFechaInicio(fechaInicio,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaInicio, 'datoProcuracionCorneal/getDatoProcuracionCornealesByFechaInicio')
            .subscribe(data => {
                _evento( this.listaDatoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDatoProcuracionCorneal);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDatoProcuracionCornealByIdcenatra(idcenatra,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idcenatra, 'datoProcuracionCorneal/getDatoProcuracionCornealByIdcenatra')
            .subscribe(data => {
                _evento( this.datoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.datoProcuracionCorneal);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDatoProcuracionCornealesByIdcenatra(idcenatra,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idcenatra, 'datoProcuracionCorneal/getDatoProcuracionCornealesByIdcenatra')
            .subscribe(data => {
                _evento( this.listaDatoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDatoProcuracionCorneal);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDatoProcuracionCornealByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'datoProcuracionCorneal/getDatoProcuracionCornealByFechaRegistro')
            .subscribe(data => {
                _evento( this.datoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.datoProcuracionCorneal);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDatoProcuracionCornealesByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'datoProcuracionCorneal/getDatoProcuracionCornealesByFechaRegistro')
            .subscribe(data => {
                _evento( this.listaDatoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDatoProcuracionCorneal);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDatoProcuracionCornealByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'datoProcuracionCorneal/getDatoProcuracionCornealByFechaActualizacion')
            .subscribe(data => {
                _evento( this.datoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.datoProcuracionCorneal);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDatoProcuracionCornealesByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'datoProcuracionCorneal/getDatoProcuracionCornealesByFechaActualizacion')
            .subscribe(data => {
                _evento( this.listaDatoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDatoProcuracionCorneal);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDatoProcuracionCornealByFechaFin(fechaFin,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaFin, 'datoProcuracionCorneal/getDatoProcuracionCornealByFechaFin')
            .subscribe(data => {
                _evento( this.datoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.datoProcuracionCorneal);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDatoProcuracionCornealesByFechaFin(fechaFin,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaFin, 'datoProcuracionCorneal/getDatoProcuracionCornealesByFechaFin')
            .subscribe(data => {
                _evento( this.listaDatoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDatoProcuracionCorneal);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDatoProcuracionCornealByHoraInicio(horaInicio,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(horaInicio, 'datoProcuracionCorneal/getDatoProcuracionCornealByHoraInicio')
            .subscribe(data => {
                _evento( this.datoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.datoProcuracionCorneal);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDatoProcuracionCornealesByHoraInicio(horaInicio,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(horaInicio, 'datoProcuracionCorneal/getDatoProcuracionCornealesByHoraInicio')
            .subscribe(data => {
                _evento( this.listaDatoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDatoProcuracionCorneal);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDatoProcuracionCornealByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'datoProcuracionCorneal/getDatoProcuracionCornealByStatus')
            .subscribe(data => {
                _evento( this.datoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.datoProcuracionCorneal);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDatoProcuracionCornealesByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'datoProcuracionCorneal/getDatoProcuracionCornealesByStatus')
            .subscribe(data => {
                _evento( this.listaDatoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDatoProcuracionCorneal);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDatoProcuracionCornealByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'datoProcuracionCorneal/getDatoProcuracionCornealByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.datoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.datoProcuracionCorneal);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDatoProcuracionCornealesByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'datoProcuracionCorneal/getDatoProcuracionCornealesByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaDatoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDatoProcuracionCorneal);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getDatoProcuracionCornealByIdsolicitudEvaluacionCorneal(idsolicitudEvaluacionCorneal,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idsolicitudEvaluacionCorneal, 'datoProcuracionCorneal/getDatoProcuracionCornealByIdsolicitudEvaluacionCorneal')
            .subscribe(data => {
                _evento( this.datoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.datoProcuracionCorneal);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getDatoProcuracionCornealesByIdsolicitudEvaluacionCorneal(idsolicitudEvaluacionCorneal,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(idsolicitudEvaluacionCorneal, 'datoProcuracionCorneal/getDatoProcuracionCornealesByIdsolicitudEvaluacionCorneal')
            .subscribe(data => {
                _evento( this.listaDatoProcuracionCorneal = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDatoProcuracionCorneal);
            }, (err) => {
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
        return this.globalesService.util.enviar(consulta, 'datoProcuracionCorneal/custom')
            .subscribe(data => {
                _evento( this.listaDatoProcuracionCorneal  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDatoProcuracionCorneal);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getDatoProcuracionCornealesByDto( p_datoProcuracionCorneal, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_datoProcuracionCorneal, 'datoProcuracionCorneal/getDatoProcuracionCornealesByDto')
            .subscribe(data => {
                _evento( this.listaDatoProcuracionCorneal  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaDatoProcuracionCorneal);
            }, (err) => {
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
