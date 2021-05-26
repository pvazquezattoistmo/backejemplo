import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CausaMuerte } from '../shared/causa-muerte';

@Component({
  selector: 'app-causa-muerte-conjunto',
  templateUrl: './causa-muerte-conjunto.component.html',
  styleUrls: ['./causa-muerte-conjunto.component.css'],
})
export class CausaMuerteConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() causaMuerteBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosCausaMuerte;
  @Input() ocultarConjuntosCausaMuerte;
  @Input() causaMuerteService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Input() lista_usuarioUltMovCausaMuerteUsuario;
  usuarioUltMovCausaMuerteUsuarioEditar : boolean = false;

  public listaCausaMuerteN: CausaMuerte[] = [];
  @Input() public listaCausaMuerte: CausaMuerte[] = [];
  @Output() public listaCausaMuerteChange = new EventEmitter<CausaMuerte[]>();
  @Input() public causaMuerteN: CausaMuerte = new CausaMuerte();
  @Output() public causaMuerteNChange = new EventEmitter<CausaMuerte>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(causaMuerte, tipo) {
        this.idSeleccionado = tipo + "-" + causaMuerte.id;
        this.causaMuerteN = causaMuerte;
    }

    ngOnInit() {
        this.causaMuerteN.id = 0;
        this.listaCausaMuerteN.push(Object.assign({}, this.causaMuerteN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new CausaMuerte();
        pg.id = this.listaCausaMuerteN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaCausaMuerteN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let causaMuerte of this.listaCausaMuerte) {
            this.causaMuerteService.actualizarCausaMuerte(causaMuerte, this.evtActualiza, this);
        }
        for (let causaMuerte of this.listaCausaMuerteN) {
            causaMuerte.id = null;
            this.causaMuerteService.guardarCausaMuerte(causaMuerte, this.evtGuardar, this);
        }
    }
    evtGuardar(causaMuerte, obj) {
        obj.agregados++;
        obj.listaCausaMuerte.push(causaMuerte);
        if (obj.agregados >= obj.listaCausaMuerteN.length) {
            obj.causaMuerteN = new CausaMuerte();
            obj.listaCausaMuerteN = [];
            obj.causaMuerteN.id = 0;
            obj.idSeleccionado = "N-" + obj.causaMuerteN.id;
            obj.listaCausaMuerteN.push(Object.assign({}, obj.causaMuerteN));
            obj.listaCausaMuerteChange.emit(obj.listaCausaMuerte);
        }
        if (obj.agregados >= obj.listaCausaMuerteN.length && 
            obj.actualizados >= obj.listaCausaMuerte.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaCausaMuerteN.length && 
            obj.actualizados >= obj.listaCausaMuerte.length  ) {
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
