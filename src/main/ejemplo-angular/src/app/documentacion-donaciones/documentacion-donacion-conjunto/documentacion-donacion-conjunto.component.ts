import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DocumentacionDonacion } from '../shared/documentacion-donacion';

@Component({
  selector: 'app-documentacion-donacion-conjunto',
  templateUrl: './documentacion-donacion-conjunto.component.html',
  styleUrls: ['./documentacion-donacion-conjunto.component.css'],
})
export class DocumentacionDonacionConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() documentacionDonacionBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosDocumentacionDonacion;
  @Input() ocultarConjuntosDocumentacionDonacion;
  @Input() documentacionDonacionService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Input() lista_usuarioUltMovDocumentacionDonacionUsuario;
  usuarioUltMovDocumentacionDonacionUsuarioEditar : boolean = false;
  @Input() lista_idoficioDonacionDocumentacionDonacionOficioDonacion;
  idoficioDonacionDocumentacionDonacionOficioDonacionEditar : boolean = false;

  public listaDocumentacionDonacionN: DocumentacionDonacion[] = [];
  @Input() public listaDocumentacionDonacion: DocumentacionDonacion[] = [];
  @Output() public listaDocumentacionDonacionChange = new EventEmitter<DocumentacionDonacion[]>();
  @Input() public documentacionDonacionN: DocumentacionDonacion = new DocumentacionDonacion();
  @Output() public documentacionDonacionNChange = new EventEmitter<DocumentacionDonacion>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(documentacionDonacion, tipo) {
        this.idSeleccionado = tipo + "-" + documentacionDonacion.id;
        this.documentacionDonacionN = documentacionDonacion;
    }

    ngOnInit() {
        this.documentacionDonacionN.id = 0;
        this.listaDocumentacionDonacionN.push(Object.assign({}, this.documentacionDonacionN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new DocumentacionDonacion();
        pg.id = this.listaDocumentacionDonacionN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaDocumentacionDonacionN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let documentacionDonacion of this.listaDocumentacionDonacion) {
            this.documentacionDonacionService.actualizarDocumentacionDonacion(documentacionDonacion, this.evtActualiza, this);
        }
        for (let documentacionDonacion of this.listaDocumentacionDonacionN) {
            documentacionDonacion.id = null;
            this.documentacionDonacionService.guardarDocumentacionDonacion(documentacionDonacion, this.evtGuardar, this);
        }
    }
    evtGuardar(documentacionDonacion, obj) {
        obj.agregados++;
        obj.listaDocumentacionDonacion.push(documentacionDonacion);
        if (obj.agregados >= obj.listaDocumentacionDonacionN.length) {
            obj.documentacionDonacionN = new DocumentacionDonacion();
            obj.listaDocumentacionDonacionN = [];
            obj.documentacionDonacionN.id = 0;
            obj.idSeleccionado = "N-" + obj.documentacionDonacionN.id;
            obj.listaDocumentacionDonacionN.push(Object.assign({}, obj.documentacionDonacionN));
            obj.listaDocumentacionDonacionChange.emit(obj.listaDocumentacionDonacion);
        }
        if (obj.agregados >= obj.listaDocumentacionDonacionN.length && 
            obj.actualizados >= obj.listaDocumentacionDonacion.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaDocumentacionDonacionN.length && 
            obj.actualizados >= obj.listaDocumentacionDonacion.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }            
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizaTodo() ;
            }
        }
    }
  
}
