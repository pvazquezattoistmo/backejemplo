import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GlobalesService } from '../../shared/globales.service';
import { AuthService } from '../../shared/auth.service';
import { ItemService } from '../../itemes/shared/item.service';
import { Router } from '@angular/router';
import { User } from '../../shared/user';
import { Usuario } from '../../usuarios/shared/usuario'
import { UsuarioService } from '../../usuarios/shared/usuario.service'
import { Subscription } from 'rxjs';
import { Item } from '../../itemes/shared/item';

declare var Spinner: any;
declare var bootbox: any;
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [ UsuarioService,
                 AuthService,
                 FormBuilder,ItemService,
                 UsuarioService
                ],

})
export class LoginComponent implements OnInit {
    private loginForm: FormGroup;
    //private usuarioService: UsuarioService;
    private globalesService: GlobalesService;
    private authService: AuthService;
    public email = "";
    public pass = "";
    private router: Router;
    encontrado: boolean = false;
    inicio: boolean = true;
    cadenaError: string;

    constructor(fb: FormBuilder, globalesService: GlobalesService, router: Router, authService: AuthService, private usuarioService: UsuarioService) {
        this.router = router;
        this.authService = authService;
        this.globalesService = globalesService;
        this.loginForm = fb.group({
            email: [this.email, Validators.required],
            password: [this.pass, Validators.required]
        });
        this.loginForm.valueChanges.subscribe(data => this.onValueChanged(data));
        this.onValueChanged(); // (re)set validation messages now
    }

    ngOnInit() {
    }
    doLogin() {
        var opts = {
            lines: 13 // The number of lines to draw
            , length: 28 // The length of each line
            , width: 14 // The line thickness
            , radius: 42 // The radius of the inner circle
            , scale: 1 // Scales overall size of the spinner
            , corners: 1 // Corner roundness (0..1)
            , color: '#000' // #rgb or #rrggbb or array of colors
            , opacity: 0.25 // Opacity of the lines
            , rotate: 0 // The rotation offset
            , direction: 1 // 1: clockwise, -1: counterclockwise
            , speed: 1 // Rounds per second
            , trail: 60 // Afterglow percentage
            , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
            , zIndex: 2e9 // The z-index (defaults to 2000000000)
            , className: 'spinner' // The CSS class to assign to the spinner
            , top: '50%' // Top position relative to parent
            , left: '50%' // Left position relative to parent
            , shadow: false // Whether to render a shadow
            , hwaccel: false // Whether to use hardware acceleration
            , position: 'absolute' // Element positioning
        }
        var target = document.getElementById('loading-spinner')
        var spinner = new Spinner(opts).spin(target);
        this.authService.login(this.email, this.pass)
            .subscribe(data => {
                spinner.stop();
                let user: User = this.globalesService.util.convertTokenToUser(data);
                var usuarioreg: Usuario = new Usuario();
                usuarioreg.id = user.idusuario;
                usuarioreg.perfil = user.roles;
                usuarioreg.username = user.username;
//                usuarioreg.password = user.password;
                usuarioreg.usuarioUltMov = user.usuarioultimomov;
            }, (err) => {
                spinner.stop();
                this.cadenaError = err;
                this.inicio = false;
                this.encontrado = false;
                this.globalesService.cerrarSesion();
                setTimeout(() => {
                    this.encontrado = true;
                    // this.cad_err = "";
                }, 2000);
            });
    }

    onValueChanged(data?: any) {

    }
    doLogin2() {
        if(this.email == '' || this.pass == ''){
            bootbox.alert("El Usuario y Contraseña son requeridos");
            return;   
        }
        this.globalesService.menuActual=new Item();
        this.authService.login2(this.email, this.pass);
    }

    recuperarContrasena() {
      if (this.email) {
        const usuario = {username: this.email}
        this.usuarioService.recuperarContrasena(usuario, this.evnRecuperarContrasena, this);
      }
    }

    evnRecuperarContrasena(u, obj) {
      bootbox.alert("Se ha enviado a su correo electrónico los datos de recuperación.");
    }
}
