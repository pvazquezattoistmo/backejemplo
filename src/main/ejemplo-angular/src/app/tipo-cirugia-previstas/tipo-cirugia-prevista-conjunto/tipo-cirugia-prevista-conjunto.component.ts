import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TipoCirugiaPrevista } from '../shared/tipo-cirugia-prevista';

@Component({
  selector: 'app-tipo-cirugia-prevista-conjunto',
  templateUrl: './tipo-cirugia-prevista-conjunto.component.html',
  styleUrls: ['./tipo-cirugia-prevista-conjunto.component.css'],
})
export class TipoCirugiaPrevistaConjuntoComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() tipoCirugiaPrevistaBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosTipoCirugiaPrevista;
  @Input() ocultarConjuntosTipoCirugiaPrevista;
  @Input() tipoCirugiaPrevistaService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;  
  @Input() lista_usuarioUltMovTipoCirugiaPrevistaUsuario;
  usuarioUltMovTipoCirugiaPrevistaUsuarioEditar : boolean = false;
  @Input() lista_idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCorneal;
  idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCornealEditar : boolean = false;

  public listaTipoCirugiaPrevistaN: TipoCirugiaPrevista[] = [];
  @Input() public listaTipoCirugiaPrevista: TipoCirugiaPrevista[] = [];
  @Output() public listaTipoCirugiaPrevistaChange = new EventEmitter<TipoCirugiaPrevista[]>();
  @Input() public tipoCirugiaPrevistaN: TipoCirugiaPrevista = new TipoCirugiaPrevista();
  @Output() public tipoCirugiaPrevistaNChange = new EventEmitter<TipoCirugiaPrevista>();
  agregados = 0;
  actualizados = 0;
  idSeleccionado = "N-0";

	constructor( ) { }
   elegir(tipoCirugiaPrevista, tipo) {
        this.idSeleccionado = tipo + "-" + tipoCirugiaPrevista.id;
        this.tipoCirugiaPrevistaN = tipoCirugiaPrevista;
    }

    ngOnInit() {
        this.tipoCirugiaPrevistaN.id = 0;
        this.listaTipoCirugiaPrevistaN.push(Object.assign({}, this.tipoCirugiaPrevistaN))
        this.usuariologueado = this.globalesService.dameUsuario();
    }
    agregarNuevo() {
        let pg = new TipoCirugiaPrevista();
        pg.id = this.listaTipoCirugiaPrevistaN.length;
        this.idSeleccionado = "N-" + pg.id;
        this.listaTipoCirugiaPrevistaN.push(pg);
    }
    actualizaTodo() {
        this.agregados = 0;
        this.actualizados = 0;
        for (let tipoCirugiaPrevista of this.listaTipoCirugiaPrevista) {
            this.tipoCirugiaPrevistaService.actualizarTipoCirugiaPrevista(tipoCirugiaPrevista, this.evtActualiza, this);
        }
        for (let tipoCirugiaPrevista of this.listaTipoCirugiaPrevistaN) {
            tipoCirugiaPrevista.id = null;
            this.tipoCirugiaPrevistaService.guardarTipoCirugiaPrevista(tipoCirugiaPrevista, this.evtGuardar, this);
        }
    }
    evtGuardar(tipoCirugiaPrevista, obj) {
        obj.agregados++;
        obj.listaTipoCirugiaPrevista.push(tipoCirugiaPrevista);
        if (obj.agregados >= obj.listaTipoCirugiaPrevistaN.length) {
            obj.tipoCirugiaPrevistaN = new TipoCirugiaPrevista();
            obj.listaTipoCirugiaPrevistaN = [];
            obj.tipoCirugiaPrevistaN.id = 0;
            obj.idSeleccionado = "N-" + obj.tipoCirugiaPrevistaN.id;
            obj.listaTipoCirugiaPrevistaN.push(Object.assign({}, obj.tipoCirugiaPrevistaN));
            obj.listaTipoCirugiaPrevistaChange.emit(obj.listaTipoCirugiaPrevista);
        }
        if (obj.agregados >= obj.listaTipoCirugiaPrevistaN.length && 
            obj.actualizados >= obj.listaTipoCirugiaPrevista.length  ) {
                obj.opcion=0;
                obj.opcion.emit(obj.opcion);
            }
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.actualizados++;
        if (obj.agregados >= obj.listaTipoCirugiaPrevistaN.length && 
            obj.actualizados >= obj.listaTipoCirugiaPrevista.length  ) {
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
