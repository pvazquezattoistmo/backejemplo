import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConteoCelular } from '../shared/conteo-celular';

@Component({
  selector: 'app-conteo-celular-conjunto',
  templateUrl: './conteo-celular-conjunto.component.html',
  styleUrls: ['./conteo-celular-conjunto.component.css'],
})
export class ConteoCelularConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() conteoCelularBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosConteoCelular;
  @Input() ocultarConjuntosConteoCelular;
  @Input() conteoCelularService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Input() lista_usuarioUltMovConteoCelularUsuario;
  usuarioUltMovConteoCelularUsuarioEditar : boolean = false;
  @Input() lista_idevaluacionSolicitudConteoCelularEvaluacionSolicitud;
  idevaluacionSolicitudConteoCelularEvaluacionSolicitudEditar : boolean = false;

  public listaConteoCelularN: ConteoCelular[] = [];
  @Input() public listaConteoCelular: ConteoCelular[] = [];
  @Output() public listaConteoCelularChange = new EventEmitter<ConteoCelular[]>();
  @Input() public conteoCelularN: ConteoCelular = new ConteoCelular();
  @Output() public conteoCelularNChange = new EventEmitter<ConteoCelular>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(conteoCelular, tipo) {
        this.idSeleccionado = tipo + "-" + conteoCelular.id;
        this.conteoCelularN = conteoCelular;
    }

    ngOnInit() {
        this.conteoCelularN.id = 0;
        this.listaConteoCelularN.push(Object.assign({}, this.conteoCelularN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new ConteoCelular();
        pg.id = this.listaConteoCelularN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaConteoCelularN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let conteoCelular of this.listaConteoCelular) {
            this.conteoCelularService.actualizarConteoCelular(conteoCelular, this.evtActualiza, this);
        }
        for (let conteoCelular of this.listaConteoCelularN) {
            conteoCelular.id = null;
            this.conteoCelularService.guardarConteoCelular(conteoCelular, this.evtGuardar, this);
        }
    }
    evtGuardar(conteoCelular, obj) {
        obj.agregados++;
        obj.listaConteoCelular.push(conteoCelular);
        if (obj.agregados >= obj.listaConteoCelularN.length) {
            obj.conteoCelularN = new ConteoCelular();
            obj.listaConteoCelularN = [];
            obj.conteoCelularN.id = 0;
            obj.idSeleccionado = "N-" + obj.conteoCelularN.id;
            obj.listaConteoCelularN.push(Object.assign({}, obj.conteoCelularN));
            obj.listaConteoCelularChange.emit(obj.listaConteoCelular);
        }
        if (obj.agregados >= obj.listaConteoCelularN.length && 
            obj.actualizados >= obj.listaConteoCelular.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaConteoCelularN.length && 
            obj.actualizados >= obj.listaConteoCelular.length  ) {
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
