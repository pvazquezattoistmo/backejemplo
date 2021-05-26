import { Component, OnInit, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { Item } from '../../itemes/shared/item';
import { ItemService } from '../../itemes/shared/item.service';
import { LocalStorageService } from 'ng2-webstorage';
import { Router } from '@angular/router';

var self;
declare var $: any;
declare var CryptoJS: any;

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    providers: [GlobalesService,
        LocalStorageService,
        ItemService]

})
export class MenuComponent implements OnInit {
    public menuprincipal: Item;
    public inicio: Item;
    public ligasSimples = [];
    public ligasCompuestas = [];
    public bsubmenus = [];
    public submenus2 = [];
    @Input()
    get menup() {
        return this.menuprincipal;
    }
    @Output() menupChange = new EventEmitter();
    set menup(val) {
        this.menuprincipal = val;
        this.menupChange.emit(this.menuprincipal);
    }
    constructor(public globalesService: GlobalesService,
        public localStorageService: LocalStorageService,
        public itemService: ItemService, private router: Router) {
        self = this;
    }

    ngOnInit() {
    }
    evtIP(lista, objeto) {
        if (lista && lista.length > 0) {
            var mp: Item = new Item();
            mp.from(lista[0]);
            objeto.inicio = mp;
            objeto.localStorageService.store("inicio", mp);
            objeto.localStorageService.store("mp", mp);
            objeto.globalesService.setMenuActual(mp);
            objeto.itemService.lazyItem(mp, objeto.lazyItem, objeto);
        }
    }
    evtIPmanual(lista, objeto) {
        if (lista && lista.length > 0) {
            var mp: Item = new Item();
            mp.from(lista[0]);
            objeto.globalesService.setMenuActual(mp);
            objeto.bsubmenus = [];
            objeto.itemService.lazyItem(mp, objeto.lazyItem, objeto);
        }
    }
    evtCambioInicio(p) {
        this.localStorageService.store("mp", p);
        this.evtIPmanual([p], this);
    }
    lazyItem(item, obj) {
        var mp: Item = new Item();
        mp.from(item);
        obj.menuprincipal = mp;
        obj.menupChange.emit(obj.menuprincipal);
        obj.submenus2 = [];
        obj.ligasSimples = [];
        obj.ligasCompuestas = [];
        for (let indice in obj.menuprincipal.itemsm) {
            obj.itemService.lazyItem(obj.menuprincipal.itemsm[indice],
                obj.lazyItemS,
                obj);
            //                obj.menuprincipal.itemsm[indice]);
            obj.bsubmenus.push(false);
        }
    }
    lazyItemS(item, obj) {
        var mp: Item = new Item();
        mp.from(item);
        for (let indice in obj.menuprincipal.itemsm) {
            if (obj.menuprincipal.itemsm[indice].id == mp.id) {
                obj.menuprincipal.itemsm[indice] = mp;
                if (obj.menuprincipal.itemsm[indice].itemsm.length == 0) {
                    if (!obj.ligasSimples.some(x => x.id === mp.id)) {
                        obj.ligasSimples.push(mp);
                    }
                } else {
                    if (!obj.ligasCompuestas.some(x => x.id === mp.id)) {
                        mp.itemsm = mp.itemsm.sort((n1, n2) => {
                            if (n1.nombre > n2.nombre) {
                                return 1;
                            }
                            if (n1.nombre < n2.nombre) {
                                return -1;
                            }
                            return 0;
                        });
                        obj.ligasCompuestas.push(mp);
                        obj.ligasCompuestas = obj.ligasCompuestas.sort((n1, n2) => {
                            if (n1.nombre > n2.nombre) {
                                return 1;
                            }
                            if (n1.nombre < n2.nombre) {
                                return -1;
                            }
                            return 0;
                        });
                    }
                    for (let submenu2 of obj.menuprincipal.itemsm[indice].itemsm) {
                        obj.itemService.lazyItem(submenu2, obj.lazyItemS2, obj.menuprincipal.itemsm[indice]);
                        let elemento = { idp: obj.menuprincipal.itemsm[indice].id, ids: submenu2.id, valor: false };
                        obj.submenus2.push(elemento);
                    }
                }
                obj.bsubmenus[indice] = true;
                break;
            }
        }
        obj.menupChange.emit(obj.menuprincipal);
    }
    lazyItemS2(item, obj) {
        var mp: Item = new Item();
        mp.from(item);
        for (let iprin in self.ligasCompuestas) {
            let prin = self.ligasCompuestas[iprin];
            if (obj.id == prin.id) {
                for (let isec in prin.itemsm) {
                    let sec = self.ligasCompuestas[iprin].itemsm[isec];
                    if (sec.id == mp.id) {
                        self.ligasCompuestas[iprin].itemsm[isec] = mp;
                        self.submenus2.forEach((item, index) => {
                            if (item.idp == prin.id && item.ids == sec.id) {
                                self.submenus2[index].valor = true;
                            }
                        });
                        break;
                    }
                }
                break;
            }
        }
        self.menupChange.emit(self.menuprincipal);
    }
    get presentarMenus() {
//        var sal = true;
//        if (this.globalesService.dameUsuario() == null)
//            sal = false;
//        for (let bsub of this.bsubmenus)
//            if (!bsub) sal = false;
//        for (let elem of this.submenus2)
//            if (!elem.valor) sal = false;
//        if (this.bsubmenus.length == 0)
//            sal = false;
        if (this.globalesService.menuActual && this.globalesService.menuActual.isOk() )
             return true;
        return false;
    }
    ngOnChanges(changes: SimpleChanges) {
        if (this.globalesService.menuActual == undefined || this.globalesService.menuActual == null){
            this.actualizaMenu();
        }else{
            if (this.globalesService.menuActual.isOk && !this.globalesService.menuActual.isOk() ){
                this.actualizaMenu();
            }    
        }    
//        for (let propName in changes) {
//            let chng = changes[propName];
//            //            if (chng.currentValue == undefined) {
//            if (chng.currentValue == undefined || 
//                chng.previousValue == undefined || 
//               (chng.currentValue.id != chng.previousValue.id) ||
//                ! this.globalesService.menuActual ) {
//                   this.actualizaMenu();            
//                break;
//            }
//        }
    }

    actualizaMenu() {
        let usuarioencriptado = this.globalesService.dameUsuario();
        //                let usuarioencriptado = this.localStorageService.retrieve("usuario");
        if (usuarioencriptado != null) {
            //                    var bytes = CryptoJS.AES.decrypt(usuarioencriptado.toString(), 'istmo 123');
            //                    var usuario = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            var usuario = usuarioencriptado;
            //                    this.globalesService.registrar(usuario);
            var discon = "";
            if (usuario) {
                if (usuario.perfil) {
                    discon = "with perfil.id = " + usuario.perfil.id;
                }
            }
            
            let mp = this.localStorageService.retrieve("mp");
            if (mp) {
                this.inicio = this.localStorageService.retrieve("inicio");
                this.evtCambioInicio(mp);
            } else {
                let consulta = "select distinct i from Item i inner join i.itemsm h  inner join i.perfiles as perfil " + discon + " where h is not empty and i.principal = 1";
                this.itemService.custom(consulta, this.evtIP, this);
            }
        }
    }
    confirmarCierre() {
        $("#modalConfirmSesion").modal();
    }

    cerrarSesion() {
        this.globalesService.cerrarSesion();
        this.globalesService.menuActual=new Item();
        var mp: Item = new Item();
        this.globalesService.setMenuActual(mp);
        //        $(location).attr('href','/login');
        this.router.navigateByUrl('/login');
    }
    get usuarioActivo(){
        if (this.globalesService.dameUsuario())
        {
            return this.globalesService.dameUsuario().username ;
        }
       return "" 
    }
    get departamentoActivo(){
        
       return "" 
    }
}