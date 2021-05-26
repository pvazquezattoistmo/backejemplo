import { Injectable } from '@angular/core';
import { GlobalesService } from '../../shared/globales.service';
import { Usuario } from './usuario';

@Injectable()
export class UsuarioService {

  public globalesService: GlobalesService;
  public usuario: Usuario;
  public listaUsuario: Usuario[];
  public error: boolean;
  public cad_err: string;


  constructor(globalesService: GlobalesService) {
    this.globalesService = globalesService;
    this.error = false;
    this.cad_err = "";
  }

  setUsuario(usuario: Usuario) {
    this.usuario = usuario;
  }

  getUsuario() {
    return this.usuario;
  }

  guardarUsuario(usuario: Usuario, _evento, objeto) {
    this.error = false;
    return this.globalesService.util.enviar(usuario, 'usuario/guardarUsuario')
      .subscribe(data => {
        _evento(this.usuario = this.globalesService.util.jsonOk(data), objeto);
        (this.usuario);
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

  actualizarUsuario(usuario: Usuario, _evento, objeto) {
    this.error = false;
    return this.globalesService.util.enviar(usuario, 'usuario/actualizarUsuario')
      .subscribe(data => {
        _evento(this.usuario = this.globalesService.util.jsonOk(data), objeto);
        (this.usuario);
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

  eliminarUsuario(usuario: Usuario, _evento, objeto) {
    this.error = false;
    return this.globalesService.util.enviar(usuario, 'usuario/eliminarUsuario')
      .subscribe(data => {
        _evento(this.usuario = this.globalesService.util.jsonOk(data), objeto);
        (this.usuario);
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

  getUsuariodb(id, _evento, objeto) {
    this.error = false;
    return this.globalesService.util.enviar(id, 'usuario/getUsuario')
      .subscribe(data => {
        _evento(this.usuario = this.globalesService.util.jsonOk(data), objeto);
        (this.usuario);
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

  getUsuarios(_evento, objeto) {
    this.error = false;
    return this.globalesService.util.enviar("", 'usuario/getUsuarios')
      .subscribe(data => {
        _evento(this.listaUsuario = this.globalesService.util.jsonOk(data), objeto);
        (this.listaUsuario);
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

  getUsuariosActivos(_evento, objeto) {
    this.error = false;
    return this.globalesService.util.enviar("", 'usuario/getUsuariosActivos')
      .subscribe(data => {
        _evento(this.listaUsuario = this.globalesService.util.jsonOk(data), objeto);
        (this.listaUsuario);
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

  lazyUsuario(usuario: Usuario, _evento, objeto) {
    this.error = false;
    return this.globalesService.util.enviar(usuario, 'usuario/lazyUsuario')
      .subscribe(data => {
        _evento(this.usuario = this.globalesService.util.jsonOk(data), objeto);
        (this.usuario);
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
  getUsuarioById(id, _evento, objeto) {
    this.error = false;
    return this.globalesService.util.enviar(id, 'usuario/getUsuarioById')
      .subscribe(data => {
        _evento(this.usuario = this.globalesService.util.jsonOk(data), objeto);
        (this.usuario);
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

  getUsuariosById(id, _evento, objeto) {
    this.error = false;
    return this.globalesService.util.enviar(id, 'usuario/getUsuariosById')
      .subscribe(data => {
        _evento(this.listaUsuario = this.globalesService.util.jsonOk(data), objeto);
        (this.listaUsuario);
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
  getUsuarioByPassword(password, _evento, objeto) {
    this.error = false;
    return this.globalesService.util.enviar(password, 'usuario/getUsuarioByPassword')
      .subscribe(data => {
        _evento(this.usuario = this.globalesService.util.jsonOk(data), objeto);
        (this.usuario);
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

  getUsuariosByPassword(password, _evento, objeto) {
    this.error = false;
    return this.globalesService.util.enviar(password, 'usuario/getUsuariosByPassword')
      .subscribe(data => {
        _evento(this.listaUsuario = this.globalesService.util.jsonOk(data), objeto);
        (this.listaUsuario);
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
  getUsuarioByUsername(username, _evento, objeto) {
    this.error = false;
    return this.globalesService.util.enviar(username, 'usuario/getUsuarioByUsername')
      .subscribe(data => {
        _evento(this.usuario = this.globalesService.util.jsonOk(data), objeto);
        (this.usuario);
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

  getUsuariosByUsername(username, _evento, objeto) {
    this.error = false;
    return this.globalesService.util.enviar(username, 'usuario/getUsuariosByUsername')
      .subscribe(data => {
        _evento(this.listaUsuario = this.globalesService.util.jsonOk(data), objeto);
        (this.listaUsuario);
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
  getUsuarioByStatus(status, _evento, objeto) {
    this.error = false;
    return this.globalesService.util.enviar(status, 'usuario/getUsuarioByStatus')
      .subscribe(data => {
        _evento(this.usuario = this.globalesService.util.jsonOk(data), objeto);
        (this.usuario);
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

  getUsuariosByStatus(status, _evento, objeto) {
    this.error = false;
    return this.globalesService.util.enviar(status, 'usuario/getUsuariosByStatus')
      .subscribe(data => {
        _evento(this.listaUsuario = this.globalesService.util.jsonOk(data), objeto);
        (this.listaUsuario);
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
  getUsuarioByUsuarioUltMov(usuarioUltMov, _evento, objeto) {
    this.error = false;
    return this.globalesService.util.enviar(usuarioUltMov, 'usuario/getUsuarioByUsuarioUltMov')
      .subscribe(data => {
        _evento(this.usuario = this.globalesService.util.jsonOk(data), objeto);
        (this.usuario);
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

  getUsuariosByUsuarioUltMov(usuarioUltMov, _evento, objeto) {
    this.error = false;
    return this.globalesService.util.enviar(usuarioUltMov, 'usuario/getUsuariosByUsuarioUltMov')
      .subscribe(data => {
        _evento(this.listaUsuario = this.globalesService.util.jsonOk(data), objeto);
        (this.listaUsuario);
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
  getUsuarioByUsuarioBtc(usuarioBtc, _evento, objeto) {
    this.error = false;
    return this.globalesService.util.enviar(usuarioBtc, 'usuario/getUsuarioByUsuarioBtc')
      .subscribe(data => {
        _evento(this.usuario = this.globalesService.util.jsonOk(data), objeto);
        (this.usuario);
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

  getUsuariosByUsuarioBtc(usuarioBtc, _evento, objeto) {
    this.error = false;
    return this.globalesService.util.enviar(usuarioBtc, 'usuario/getUsuariosByUsuarioBtc')
      .subscribe(data => {
        _evento(this.listaUsuario = this.globalesService.util.jsonOk(data), objeto);
        (this.listaUsuario);
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
  getUsuarioByPerfil(perfil, _evento, objeto) {
    this.error = false;
    return this.globalesService.util.enviar(perfil, 'usuario/getUsuarioByPerfil')
      .subscribe(data => {
        _evento(this.usuario = this.globalesService.util.jsonOk(data), objeto);
        (this.usuario);
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

  getUsuariosByPerfil(perfil, _evento, objeto) {
    this.error = false;
    return this.globalesService.util.enviar(perfil, 'usuario/getUsuariosByPerfil')
      .subscribe(data => {
        _evento(this.listaUsuario = this.globalesService.util.jsonOk(data), objeto);
        (this.listaUsuario);
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
  getUsuarioBtcByCorreoElectronico(correoElectronico, _evento, objeto) {
    this.error = false;
    return this.globalesService.util.enviar(correoElectronico, 'usuario/getUsuarioByCorreoElectronico')
      .subscribe(data => {
        _evento(this.usuario = this.globalesService.util.jsonOk(data), objeto);
        (this.usuario);
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


  custom(consulta, _evento, objeto) {
    this.error = false;
    return this.globalesService.util.enviar(consulta, 'usuario/custom')
      .subscribe(data => {
        _evento(this.listaUsuario = this.globalesService.util.jsonOk(data), objeto);
        (this.listaUsuario);
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

  getUsuariosByDto(p_usuario, _evento, objeto) {
    this.error = false;
    return this.globalesService.util.enviar(p_usuario, 'usuario/getUsuariosByDto')
      .subscribe(data => {
        _evento(this.listaUsuario = this.globalesService.util.jsonOk(data), objeto);
        ("lista usuarios: " + this.listaUsuario);
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

  login(p_usuario, _evento, objeto) {
    this.error = false;
    return this.globalesService.util.enviar(p_usuario, 'usuario/login')
      .subscribe(data => {
        _evento(this.listaUsuario = this.globalesService.util.jsonOk(data), objeto);
        ("lista usuarios: " + this.listaUsuario);
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

  recuperarContrasena(p_usuario, _evento, objeto) {
    this.error = false;
    return this.globalesService.util.enviar(p_usuario, 'usuario/recuperarContrasena')
      .subscribe(data => {
        _evento(this.globalesService.util.jsonOk(data), objeto);
        (this.listaUsuario);
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
