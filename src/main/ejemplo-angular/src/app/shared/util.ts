import { User } from './user';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpParams } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { TokenProvider } from './token-provider';
import { URLProvider } from './url-provider';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class Util {
  private requestCount: number;
  constructor(
    public http: Http,
    public tokenProvider: TokenProvider,
    public urlProvider: URLProvider,
    private spinner: NgxSpinnerService
  ) {
    ('Util Ok');
    this.requestCount = 0;
  }

  enviar(objeto, ruta): Observable<any> {
    if (this.requestCount === 0) {
      this.spinner.show();
    }
    this.requestCount++;
    let options = this.tokenProvider.getHeaders();
    let body: string = JSON.stringify(objeto);

    if (typeof objeto !== 'object') body = objeto;
    return this.http
      .post(this.urlProvider.serverURL + ruta, body, options)
      .map((response: Response) => {
        this.requestCount--;
        if (this.requestCount === 0) {
          this.spinner.hide();
        }
        return response.json() || {};
      })
      .catch(e => {
        ('error');
        this.requestCount--;
        if (this.requestCount === 0) {
          this.spinner.hide();
        }
        return Observable.throw('Sin conexion al servidor, verifique su conexión a internet');
      });
  }

  convertTokenToUser(token: string): User {
    let user: User = new User();
    let userJSON = JSON.parse(
      decodeURIComponent(
        encodeURIComponent(atob(token.split('.')[1]))
          .replace('%C3%83%C2%81', 'Á')
          .replace('%C3%83%C2%89', 'É')
          .replace('%C3%83%C2%8D', 'Í')
          .replace('%C3%83%C2%93', 'Ó')
          .replace('%C3%83%C2%9A', 'Ú')
          .replace('%C3%83%C2%A1', 'á')
          .replace('%C3%83%C2%A9', 'é')
          .replace('%C3%83%C2%AD', 'í')
          .replace('%C3%83%C2%B3', 'ó')
          .replace('%C3%83%C2%BA', 'ú')
          .replace('%C3%83%C2%B3n', 'ón')
      )
    );
    (userJSON);
    user.adscripciones = userJSON.adscripciones;
    user.apellidomaterno = userJSON.apellidomaterno;
    user.apellidopaterno = userJSON.apellidopaterno;
    user.correoe = userJSON.correoe;
    user.expires = userJSON.expires;
    user.fechahora = userJSON.fechahora;
    user.idusuario = userJSON.idusuario;
    user.nombre = userJSON.nombre;
    user.puestos = userJSON.puestos;
    user.roles = userJSON.perfil;
    user.status = userJSON.status;
    user.tipousuarios = userJSON.tipousuarios;
    user.username = userJSON.username;
    user.usuarioultimomov = userJSON.usuarioultimomov;
    return user;
  }
  jsonOk(data) {
    let data1 = JSON.stringify(data);
    let data2 = JSON.parse(data1);
    return data2;
  }

  static getDescripcionError(error: number): string {
    (error);
    let descError = '';
    switch (error) {
      case 401:
        descError = 'Credenciales incorrectas.';
        break;
      case 500:
        descError = 'Tenemos problemas en el servidor. Intentelo nuevamente.';
        break;
      default:
        descError = ' El servidor no esta disponible. Intentelo nuevamente.';
    }
    return descError;
  }
}
