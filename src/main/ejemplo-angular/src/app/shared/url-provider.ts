import { Injectable } from '@angular/core';
import { EnvService } from '../env.service';

/*
  Generated class for the URLProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class URLProvider {
    public serverURL: string = "";

    constructor() {
      const env = new EnvService();
      // Read environment variables from browser window
      const browserWindow = window || {};
      const browserWindowEnv = browserWindow['__env'] || {};
      // Assign environment variables from browser window to env
      // In the current implementation, properties from env.js overwrite defaults from the EnvService.
      // If needed, a deep merge can be performed here to merge properties instead of overwriting them.
      for (const key in browserWindowEnv) {
        if (browserWindowEnv.hasOwnProperty(key)) {
          env[key] = window['__env'][key];
        }
      }
      this.serverURL= env.apiUrl;
    }
}
