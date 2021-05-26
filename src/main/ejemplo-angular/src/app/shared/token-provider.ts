import { Headers, RequestOptions } from '@angular/http';

/*  Generated class for the TokenProvider provider.
**  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
**  for more info on providers and Angular 2 DI.
*/

export class TokenProvider {
    
    private token: string;
    
    constructor() {
        
    }
    
    getHeaders(): RequestOptions {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append("Authorization", "Bearer " + this.token);
        let options = new RequestOptions({ headers: headers });
        return options;
    }
    getHeadersResponse(): RequestOptions {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append("Authorization", "Bearer " + this.token);
        let options = new RequestOptions({ headers: headers });
        return options;
    }
     
    setToken(token: string) {
        this.token = token;
    }
    
}
