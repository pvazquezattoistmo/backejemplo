import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, ResponseContentType, RequestMethod } from '@angular/http';
import { URLProvider } from './url-provider';
import { TokenProvider } from './token-provider';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FileService {
    public nologin: boolean = true;
    constructor(public http: Http, public urlProvider: URLProvider, public tokenProvider: TokenProvider) {
        ('Hello Auth Provider');
    }
    public enviar(fileList, prefijo) {
        if (fileList.length > 0) {
            for (let file of fileList) {
                // let file: File = fileList[0];
                let formData: FormData = new FormData();
                formData.append('file', file, prefijo + file.name);
                let headers = new Headers();
                headers.append('Accept', 'application/json');
                let options = new RequestOptions({ headers: headers });
                let ruta = this.urlProvider.serverURL + "file/upload";
                this.http.post(ruta, formData, options)
                    .catch(error => Observable.throw(error))
                    .subscribe(
                    data => ('success'),
                    error => (error)
                    )
            }
        }
    }
    downloadFile(nombre: string,otro?:string,path?:string,parametros?:any) {
        if (!parametros)
           parametros=nombre;
        let body: string = JSON.stringify(parametros);
        if (typeof parametros !== "object")
            body = parametros        
        if (!path)
            path="file/download";
        return this.http.post(this.urlProvider.serverURL + path, body, {
            method: RequestMethod.Post,
            responseType: ResponseContentType.Blob,
            headers: new Headers({ 'Content-Type': 'application/json' })
        }).subscribe((res) => {
            var reader = new FileReader();
            var mime = res.headers.get("Content-Type");
            var blob = new Blob([res.blob()], { type: mime });
            var fileOfBlob = new File([blob], nombre);
            var ths = this;
            if (!otro)
            var nofile = nombre;
            else
            var nofile = otro;
            reader.readAsDataURL(fileOfBlob);
            reader.onloadend = function(file) {
                ths.guardarComo(blob,nofile);  
            };
        });
    }
    guardarComo(blob,namefile) {
        var url = window.URL.createObjectURL(blob);
        var filename = namefile.split('\\').pop().split('/').pop();
        //                var myTempWindow = window.open(url, '_blank', 'left=10000,screenX=10000');
        var anchor = document.createElement('a');
        anchor.href = url;
        anchor.target = '_blank';
        anchor.download = filename;
        anchor.click();
        window.URL.revokeObjectURL(url);

    }
//    downloadAnyFile2(namefile) {
//        var xhr = new XMLHttpRequest();
//        xhr.open('GET', this.urlProvider.serverURL +'file/download', true);
//        xhr.responseType = 'arraybuffer';
//        xhr.onload = function(e) {
//            if (this.status == 200) {
//                var blob = new Blob([this.response], { type: "application/pdf" });
//                var link = document.createElement('a');
//                link.href = window.URL.createObjectURL(blob);
//                link.download = "Report_" + new Date() + ".pdf";
//                link.click();
//            }
//        };
//        xhr.send();
//    }


}