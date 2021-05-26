import { DialogsModule } from '@progress/kendo-angular-dialog';
// Librerias nativas angular2
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2Webstorage } from 'ng2-webstorage';
import { LocalStorageService } from 'ng2-webstorage';
import { MomentModule } from 'angular2-moment';
// Librerias y componentes del core de la aplicación
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './core/menu/menu.component';
import { LoginComponent } from './core/login/login.component';
import { BienvenidoComponent } from './core/bienvenido/bienvenido.component';

// Librerias compartidas de la aplicación
import { GlobalesService } from './shared/globales.service';
import { TokenProvider } from './shared/token-provider';
import { URLProvider } from './shared/url-provider';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import '@progress/kendo-angular-intl/locales/es-MX/all';
import { IntlModule } from '@progress/kendo-angular-intl';
// import { DetalleEvaluacionSolicitudComponent } from './src/app/evaluacion-solicitudes/detalle-evaluacion-solicitud/detalle-evaluacion-solicitud.component';
import { NgxSpinnerModule } from 'ngx-spinner';

import localeEsMX from '@angular/common/locales/es-MX';
import { registerLocaleData } from '@angular/common';
import { EnvServiceProvider } from './env.service.provider';
registerLocaleData(localeEsMX, 'es-MX');

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        LoginComponent,
        BienvenidoComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        Ng2Webstorage,
        MomentModule,
        GridModule,
        BrowserAnimationsModule,
        IntlModule,
        NgxSpinnerModule,
        DialogsModule
    ],
    providers: [
      { provide: LOCALE_ID, useValue: 'es-MX' },
        URLProvider,
        TokenProvider,
        GlobalesService,
        EnvServiceProvider
//        LocalStorageService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
