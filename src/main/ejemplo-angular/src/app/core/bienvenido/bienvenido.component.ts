import { Component, OnInit } from '@angular/core';
import { FileService } from '../../shared/file.service'
@Component({
selector: 'app-bienvenido',
templateUrl: './bienvenido.component.html',
styleUrls: ['./bienvenido.component.css'],
providers: [FileService]
})
export class BienvenidoComponent implements OnInit {
public fileList: FileList = null;
constructor(public fileservice: FileService) { }

ngOnInit() {
// debugger;
//this.downloadAnyFile();
}

fileChange(event) {
this.fileList = event.target.files;
}
upload() {
this.downloadAnyFile();
}

 downloadAnyFile() {
var path:string = "file/reporteSolicitud";
var otros:string ="HOLA"
var parametros:any ={"id":1};
var nombre:string = "ReporteSolicitud.pdf";


// var path:string = "file/etiquetaBTC";
// var otros:string ="HOLA"
// var parametros:any ={"id":61, "tipoCornea":2};
// var nombre:string = "etiquetaBTC.pdf";

// var path:string = "file/registroRecepcion";
// var otros:string ="reporteRecepcion"
// var parametros:any ={"id":61, "tipoCornea":2};
// var nombre:string = "Registro de la Evaluacion_1.pdf";

this.fileservice.downloadFile(nombre,otros,path,parametros);


}

}
