import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { CatalogoCargo } from './catalogo-cargo';

@Injectable()
export class CatalogoCargoService {

    public globalesService: GlobalesService;
    public catalogoCargo: CatalogoCargo;
    public listaCatalogoCargo: CatalogoCargo[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setCatalogoCargo(catalogoCargo: CatalogoCargo) {
        this.catalogoCargo = catalogoCargo;
    }

    getCatalogoCargo(){
        return this.catalogoCargo;
    }

    guardarCatalogoCargo(catalogoCargo: CatalogoCargo, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(catalogoCargo, 'catalogoCargo/guardarCatalogoCargo')
            .subscribe(data => {
                _evento( this.catalogoCargo = this.globalesService.util.jsonOk(data),objeto);
                (this.catalogoCargo);
            }, (err) => { 
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
         
    }

    actualizarCatalogoCargo(catalogoCargo: CatalogoCargo , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(catalogoCargo, 'catalogoCargo/actualizarCatalogoCargo')
            .subscribe(data => {
                _evento( this.catalogoCargo = this.globalesService.util.jsonOk(data),objeto);
                (this.catalogoCargo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    eliminarCatalogoCargo(catalogoCargo: CatalogoCargo , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(catalogoCargo, 'catalogoCargo/eliminarCatalogoCargo')
            .subscribe(data => {
                _evento( this.catalogoCargo = this.globalesService.util.jsonOk(data),objeto);
                (this.catalogoCargo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getCatalogoCargodb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'catalogoCargo/getCatalogoCargo')
            .subscribe(data => {
                _evento( this.catalogoCargo = this.globalesService.util.jsonOk(data),objeto);
                (this.catalogoCargo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getCatalogoCargos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'catalogoCargo/getCatalogoCargos')
            .subscribe(data => {
                _evento( this.listaCatalogoCargo = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaCatalogoCargo );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getCatalogoCargosActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'catalogoCargo/getCatalogoCargosActivos')
            .subscribe(data => {
                _evento( this.listaCatalogoCargo = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaCatalogoCargo );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    
    lazyCatalogoCargo(catalogoCargo: CatalogoCargo , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(catalogoCargo, 'catalogoCargo/lazyCatalogoCargo')
            .subscribe(data => {
                _evento( this.catalogoCargo = this.globalesService.util.jsonOk(data),objeto);
                (this.catalogoCargo);
            }, (err) => {
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
    getCatalogoCargoById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'catalogoCargo/getCatalogoCargoById')
            .subscribe(data => {
                _evento( this.catalogoCargo = this.globalesService.util.jsonOk(data),objeto);
                (this.catalogoCargo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getCatalogoCargosById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'catalogoCargo/getCatalogoCargosById')
            .subscribe(data => {
                _evento( this.listaCatalogoCargo = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCatalogoCargo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getCatalogoCargoByDescripcion(descripcion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(descripcion, 'catalogoCargo/getCatalogoCargoByDescripcion')
            .subscribe(data => {
                _evento( this.catalogoCargo = this.globalesService.util.jsonOk(data),objeto);
                (this.catalogoCargo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getCatalogoCargosByDescripcion(descripcion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(descripcion, 'catalogoCargo/getCatalogoCargosByDescripcion')
            .subscribe(data => {
                _evento( this.listaCatalogoCargo = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCatalogoCargo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getCatalogoCargoByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'catalogoCargo/getCatalogoCargoByFechaBaja')
            .subscribe(data => {
                _evento( this.catalogoCargo = this.globalesService.util.jsonOk(data),objeto);
                (this.catalogoCargo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getCatalogoCargosByFechaBaja(fechaBaja,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaBaja, 'catalogoCargo/getCatalogoCargosByFechaBaja')
            .subscribe(data => {
                _evento( this.listaCatalogoCargo = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCatalogoCargo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getCatalogoCargoByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'catalogoCargo/getCatalogoCargoByFechaActualizacion')
            .subscribe(data => {
                _evento( this.catalogoCargo = this.globalesService.util.jsonOk(data),objeto);
                (this.catalogoCargo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getCatalogoCargosByFechaActualizacion(fechaActualizacion,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaActualizacion, 'catalogoCargo/getCatalogoCargosByFechaActualizacion')
            .subscribe(data => {
                _evento( this.listaCatalogoCargo = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCatalogoCargo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getCatalogoCargoByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'catalogoCargo/getCatalogoCargoByFechaRegistro')
            .subscribe(data => {
                _evento( this.catalogoCargo = this.globalesService.util.jsonOk(data),objeto);
                (this.catalogoCargo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getCatalogoCargosByFechaRegistro(fechaRegistro,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(fechaRegistro, 'catalogoCargo/getCatalogoCargosByFechaRegistro')
            .subscribe(data => {
                _evento( this.listaCatalogoCargo = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCatalogoCargo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getCatalogoCargoByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'catalogoCargo/getCatalogoCargoByStatus')
            .subscribe(data => {
                _evento( this.catalogoCargo = this.globalesService.util.jsonOk(data),objeto);
                (this.catalogoCargo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getCatalogoCargosByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'catalogoCargo/getCatalogoCargosByStatus')
            .subscribe(data => {
                _evento( this.listaCatalogoCargo = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCatalogoCargo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getCatalogoCargoByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'catalogoCargo/getCatalogoCargoByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.catalogoCargo = this.globalesService.util.jsonOk(data),objeto);
                (this.catalogoCargo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getCatalogoCargosByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'catalogoCargo/getCatalogoCargosByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaCatalogoCargo = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCatalogoCargo);
            }, (err) => {
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
        return this.globalesService.util.enviar(consulta, 'catalogoCargo/custom')
            .subscribe(data => {
                _evento( this.listaCatalogoCargo  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCatalogoCargo);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getCatalogoCargosByDto( p_catalogoCargo, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_catalogoCargo, 'catalogoCargo/getCatalogoCargosByDto')
            .subscribe(data => {
                _evento( this.listaCatalogoCargo  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaCatalogoCargo);
            }, (err) => {
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
