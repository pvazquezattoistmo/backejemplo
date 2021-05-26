import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TipoCirugiaPrevista } from '../shared/tipo-cirugia-prevista';

@Component({
  selector: 'app-tipo-cirugia-prevista',
  templateUrl: './tipo-cirugia-prevista.component.html',
  styleUrls: ['./tipo-cirugia-prevista.component.css'],
})
export class TipoCirugiaPrevistaComponent implements OnInit {
  @Input() usuariologueado;
  @Input() etiquetaGeneral;
  @Input() tipoCirugiaPrevistaBuscar;
  @Input() permisosAtributos;
  @Input() permisosConjuntos;
  @Input() validosTipoCirugiaPrevista;
  @Input() tipoCirugiaPrevista:TipoCirugiaPrevista;
  @Input() tipoCirugiaPrevistaService;
  @Input() public opcion: number;
  @Output() public opcionChange = new EventEmitter<number>();
  @Input() globalesService;
  @Output() tipoCirugiaPrevistaChange = new EventEmitter<TipoCirugiaPrevista>();
  @Input() ocultarConjuntos;
  @Input() lista_usuarioUltMovTipoCirugiaPrevistaUsuario;
  usuarioUltMovTipoCirugiaPrevistaUsuarioEditar : boolean = false;
  @Input() lista_idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCorneal;
  idsolicitudTejidoCornealTipoCirugiaPrevistaSolicitudTejidoCornealEditar : boolean = false;
  @Input() public desactiva: boolean = false;
  @Input() otracheck: number;
  @Input() public isDisabled: boolean;

  constructor( ) { }
    actualizarTipoCirugiaPrevista() {
        if (this.tipoCirugiaPrevista.id == null) {
            this.tipoCirugiaPrevistaService.guardarTipoCirugiaPrevista(this.tipoCirugiaPrevista, this.evtGuardar, this);
        } else {
            this.tipoCirugiaPrevistaService.actualizarTipoCirugiaPrevista(this.tipoCirugiaPrevista, this.evtActualiza, this);
        }
    }
    evtGuardar(tipoCirugiaPrevista, obj) {
        obj.tipoCirugiaPrevista = tipoCirugiaPrevista;
        obj.tipoCirugiaPrevistaChange.emit(obj.tipoCirugiaPrevista);
        obj.opcion = 0;
        obj.opcion.emit(obj.opcion);
    }
    evtActualiza(bandera, obj) {
        if (bandera) {
            obj.tipoCirugiaPrevistaChange.emit(obj.tipoCirugiaPrevista);
            obj.opcion = 0;
            obj.opcion.emit(obj.opcion);
        }
    }
   ngOnChanges(changes) {
        if (changes.opcion && changes.opcion.currentValue != null ){
            if (changes.opcion.currentValue ==1){
                this.opcion=1;
                this.actualizarTipoCirugiaPrevista() ;
            }
        }
    }


  ngOnInit() {
  }

    triggerSomeEvent() {
        this.isDisabled = !this.isDisabled;
        this.limpiarOtra();
        return;
    }

    //   get desactivarOtra(): boolean {
    //     ("this.tipoCirugiaPrevista.otra: " + this.tipoCirugiaPrevista.otra);
    //this.limpiarOtra();
    //     //("otra" + this.otra);
    //     return (
    //       this.otra != 1
    //     );
    //   }

      limpiarOtra() {
          if(this.isDisabled)
            this.otracheck = 0;
            this.tipoCirugiaPrevista.otra = null;
      }
}
