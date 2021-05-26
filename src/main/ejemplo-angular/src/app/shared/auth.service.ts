declare var CryptoJS: any;
declare var $: any;

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
//import {UserProvider} from '../shared/user-provider';
import { Util } from '../shared/util';
import { TokenProvider } from './token-provider';
import { URLProvider } from './url-provider';
//import {Storage} from '@ionic/storage';
import { LocalStorageService } from 'ng2-webstorage';
import { UsuarioService } from '../usuarios/shared/usuario.service';
import { Usuario } from '../usuarios/shared/usuario';
import { Router } from '@angular/router';
import { GlobalesService } from './globales.service';
import { Item } from '../itemes/shared/item';
import { ItemService } from '../itemes/shared/item.service';

/// <reference path="../../typings/crypto-js/crypto-js.d.ts" />
//import  '../../../node_modules/crypto-js/crypto-js.js';

/*
  Generated class for the Auth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
declare var bootbox: any;
@Injectable()
export class AuthService {
  public nologin: boolean = true;
  constructor(
    public http: Http,
    public tokenProvider: TokenProvider,
    public urlProvider: URLProvider,
    private storage: LocalStorageService,
    public usuarioService: UsuarioService,
    public router: Router,
    public globalesService: GlobalesService,
    public itemService: ItemService
  ) {
    ('Hello Auth Provider');
  }
  login2(username: string, password: string) {
    this.nologin = true;
    let usuario: Usuario = new Usuario();
    usuario.username = username;
    usuario.password = password;
    this.usuarioService.login(usuario, this.evtUsuarioDto, this);
  }
  evtIP(lista, objeto) {
    if (lista && lista.length > 0) {
      var mp: Item = new Item();
      mp.from(lista[0]);
      objeto.globalesService.setMenuActual(mp);
      let usuario = objeto.globalesService.dameUsuario();
      if (usuario.perfil.ruta && usuario.perfil.ruta != '') {
        objeto.router.navigateByUrl(usuario.perfil.ruta);
      } else {
        //                objeto.router.navigateByUrl('/login');
        objeto.router.navigateByUrl('/bienvenido');
      }
    }
  }
  evtUsuarioDto(arrusuario, obj) {
    if (arrusuario.length > 0) {
      let usuario = arrusuario[0];
      if (usuario.id != null) {
        obj.globalesService.registrar(usuario);
        // usuario = obj.globalesService.dameUsuario();
        var objenc = CryptoJS.AES.encrypt(JSON.stringify(usuario), 'istmo 123');
        obj.storage.store('usuario', objenc.toString());
        if (usuario && usuario.perfil) {
          //if (obj.globalesService.dameUsuario().perfil.id == 7) {
            obj.router.navigateByUrl('/bienvenido');
            // setTimeout(() => {
            //   obj.router.navigateByUrl('/solicitud-tejido-corneal-recepcion-table-bandeja');
            //   obj.router.navigateByUrl('/bienvenido');
            // }, 50);
          //}
        }
      } else {
        obj.nologin = false;
        setTimeout(() => {
          obj.nologin = true;
        }, 2000);
        obj.storage.clear('usuario');
        obj.globalesService.cerrarSesion();
      }
    } else {
      bootbox.alert("El Usuario y Contraseña no son validos");
      obj.storage.clear('usuario');
      obj.globalesService.cerrarSesion();
      obj.nologin = false;
      setTimeout(() => {
        obj.nologin = true;
      }, 2000);
    }
    //   location.reload(true);
  }

  login(username: string, password: string): Observable<any> {
    debugger;
    let body: any = JSON.stringify({ username: username, password: password });
    return this.http
      .post(this.urlProvider.serverURL + 'login', body)
      .map((response: Response) => {
        ('success');
        ('success ' + response.headers.get('Authorization'));
        let headerToken = response.headers.get('Authorization');
        let arrayToken = headerToken.split(' ');
        let token = arrayToken[1];
        this.tokenProvider.setToken(token);
        this.storage.store('auth_token', token);
        return token;
      })
      .catch(e => {
        let descError = Util.getDescripcionError(e.status);
        return Observable.throw(descError);
      });
  }
}
