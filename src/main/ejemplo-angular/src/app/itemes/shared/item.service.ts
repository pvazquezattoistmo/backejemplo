import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { Item } from './item';

@Injectable()
export class ItemService {

    public globalesService: GlobalesService;
    public item: Item;
    public listaItem: Item[];
    public error: boolean;
    public cad_err: string;


    constructor(globalesService: GlobalesService) {
        this.globalesService = globalesService;
        this.error = false;
        this.cad_err = "";
    }

    setItem(item: Item) {
        this.item = item;
    }

    getItem(){
        return this.item;
    }

    guardarItem(item: Item, _evento,objeto){
        this.error = false;
        return  this.globalesService.util.enviar(item, 'item/guardarItem')
            .subscribe(data => {
                _evento( this.item = this.globalesService.util.jsonOk(data),objeto);
                (this.item);
            }, (err) => { 
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
         
    }

    actualizarItem(item: Item , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(item, 'item/actualizarItem')
            .subscribe(data => {
                _evento( this.item = this.globalesService.util.jsonOk(data),objeto);
                (this.item);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    eliminarItem(item: Item , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(item, 'item/eliminarItem')
            .subscribe(data => {
                _evento( this.item = this.globalesService.util.jsonOk(data),objeto);
                (this.item);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getItemdb(id , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'item/getItem')
            .subscribe(data => {
                _evento( this.item = this.globalesService.util.jsonOk(data),objeto);
                (this.item);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getItemes( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'item/getItemes')
            .subscribe(data => {
                _evento( this.listaItem = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaItem );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getItemesActivos( _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar("", 'item/getItemesActivos')
            .subscribe(data => {
                _evento( this.listaItem = this.globalesService.util.jsonOk(data),objeto);
                ( this.listaItem );
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    
    lazyItem(item: Item , _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(item, 'item/lazyItem')
            .subscribe(data => {
                _evento( this.item = this.globalesService.util.jsonOk(data),objeto);
                (this.item);
            }, (err) => {
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
    getItemById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'item/getItemById')
            .subscribe(data => {
                _evento( this.item = this.globalesService.util.jsonOk(data),objeto);
                (this.item);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getItemesById(id,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(id, 'item/getItemesById')
            .subscribe(data => {
                _evento( this.listaItem = this.globalesService.util.jsonOk(data),objeto);
                (this.listaItem);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getItemByPrincipal(principal,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(principal, 'item/getItemByPrincipal')
            .subscribe(data => {
                _evento( this.item = this.globalesService.util.jsonOk(data),objeto);
                (this.item);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getItemesByPrincipal(principal,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(principal, 'item/getItemesByPrincipal')
            .subscribe(data => {
                _evento( this.listaItem = this.globalesService.util.jsonOk(data),objeto);
                (this.listaItem);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getItemByRuta(ruta,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(ruta, 'item/getItemByRuta')
            .subscribe(data => {
                _evento( this.item = this.globalesService.util.jsonOk(data),objeto);
                (this.item);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getItemesByRuta(ruta,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(ruta, 'item/getItemesByRuta')
            .subscribe(data => {
                _evento( this.listaItem = this.globalesService.util.jsonOk(data),objeto);
                (this.listaItem);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getItemByNombre(nombre,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(nombre, 'item/getItemByNombre')
            .subscribe(data => {
                _evento( this.item = this.globalesService.util.jsonOk(data),objeto);
                (this.item);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getItemesByNombre(nombre,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(nombre, 'item/getItemesByNombre')
            .subscribe(data => {
                _evento( this.listaItem = this.globalesService.util.jsonOk(data),objeto);
                (this.listaItem);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getItemByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'item/getItemByStatus')
            .subscribe(data => {
                _evento( this.item = this.globalesService.util.jsonOk(data),objeto);
                (this.item);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getItemesByStatus(status,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(status, 'item/getItemesByStatus')
            .subscribe(data => {
                _evento( this.listaItem = this.globalesService.util.jsonOk(data),objeto);
                (this.listaItem);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    
    getItemByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'item/getItemByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.item = this.globalesService.util.jsonOk(data),objeto);
                (this.item);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getItemesByUsuarioUltMov(usuarioUltMov,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(usuarioUltMov, 'item/getItemesByUsuarioUltMov')
            .subscribe(data => {
                _evento( this.listaItem = this.globalesService.util.jsonOk(data),objeto);
                (this.listaItem);
            }, (err) => {
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
//   add - remove Item
    addItemsm(itemItem,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(itemItem , 'item/addItemsm')
            .subscribe(data => {
                _evento( this.globalesService.util.jsonOk(data),objeto);
                ('addItemsm ok');
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getItemsm(itemItem,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(itemItem, 'item/getItemsm')
            .subscribe(data => {
                _evento( this.globalesService.util.jsonOk(data),objeto);
                ('removeItemsm ok');
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }   
    removeItemsm(itemItem,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(itemItem, 'item/removeItemsm')
            .subscribe(data => {
                _evento( this.globalesService.util.jsonOk(data),objeto);
                ('removeItemsm ok');
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }   
//   add - remove Perfil
    addPerfiles(itemPerfil,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(itemPerfil , 'item/addPerfiles')
            .subscribe(data => {
                _evento( this.globalesService.util.jsonOk(data),objeto);
                ('addPerfiles ok');
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }    

    getPerfiles(itemPerfil,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(itemPerfil, 'item/getPerfiles')
            .subscribe(data => {
                _evento( this.globalesService.util.jsonOk(data),objeto);
                ('removePerfiles ok');
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }   
    removePerfiles(itemPerfil,_evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(itemPerfil, 'item/removePerfiles')
            .subscribe(data => {
                _evento( this.globalesService.util.jsonOk(data),objeto);
                ('removePerfiles ok');
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }   


    custom( consulta, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(consulta, 'item/custom')
            .subscribe(data => {
                _evento( this.listaItem  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaItem);
            }, (err) => {
                ("no " + err);
                this.error = true;
                this.cad_err = err;
                setTimeout(() => {
                    this.error = false;
                    this.cad_err = "";
                }, 2000);
            });
    }

    getItemesByDto( p_item, _evento,objeto){
        this.error = false;
        return this.globalesService.util.enviar(p_item, 'item/getItemesByDto')
            .subscribe(data => {
                _evento( this.listaItem  = this.globalesService.util.jsonOk(data),objeto);
                (this.listaItem);
            }, (err) => {
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
