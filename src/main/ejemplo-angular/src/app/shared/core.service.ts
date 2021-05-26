import { Injectable } from '@angular/core';
import { GlobalesService } from './globales.service';

@Injectable()
export class CoreService {

    public globalesService: GlobalesService;
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }
    
    permisos(entrada, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(entrada, 'core/permisos')
            .subscribe(data => {
                _evento(this.globalesService.util.jsonOk(data),objeto);
            }, (err) => { 
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
 
    menus(entrada, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(entrada, 'core/menus')
            .subscribe(data => {
                _evento(this.globalesService.util.jsonOk(data),objeto);
            }, (err) => { 
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
 
    menus_secuendarios(entrada, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(entrada, 'core/menus_secuendarios')
            .subscribe(data => {
                _evento(this.globalesService.util.jsonOk(data),objeto);
            }, (err) => { 
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    login(entrada, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(entrada, 'directorioActivo/login')
            .subscribe(data => {
                _evento(this.globalesService.util.jsonOk(data),objeto);
            }, (err) => { 
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }
    buscarUsuario(entrada, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(entrada, 'directorioActivo/buscarUsuario')
            .subscribe(data => {
                _evento(this.globalesService.util.jsonOk(data),objeto);
            }, (err) => { 
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
