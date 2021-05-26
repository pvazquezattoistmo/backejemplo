import {Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild} from '@angular/core';
import {GlobalesService} from '../../../shared/globales.service';
import {NgModel} from '@angular/forms';

@Component({
    selector: 'app-componente-cadena',
    templateUrl: './componente-cadena.component.html',
    styleUrls: ['./componente-cadena.component.css'],
    providers: [GlobalesService]


})
export class ComponenteCadenaComponent implements OnInit {
    @Input() public buscar: boolean = true;
    @Input() public componente: string;
    @Input() public atributo: string;
    @Input() public permisosAtributos;
    @Input() public dato: string;
    @Input() public maxlength: string;
    /*
     *----- Agregados start----
    */
    @Input() public posicion: string = 'default';
    @Input() public sizeLB: string = '100';
    @Input() public sizeInput: string = '100';
    @Input() public isVisibleLB: boolean = true;
    @Input() public isVisibleInput: boolean = true;
    @Input() public alineacion: string = 'text-justify';
    /*
     *----- Agregados end----
    */
    @Output() public datoChange = new EventEmitter<string>();
    public datointerno: string;
    @Input() public valido: boolean = true;
    @Output() public validoChange = new EventEmitter<boolean>();
    @ViewChild('componenteInput') componenteInput: NgModel;
    @Input() enable: boolean;

    datoCambio() {
      var estcad = this;
      //setTimeout(() => {
        estcad.dato = estcad.datointerno.toUpperCase();
        estcad.datoChange.emit(estcad.dato);
        estcad.validaGenerales();
     // });
    }
    constructor(private globalesService: GlobalesService) {}
     validaGenerales(){
        let validacion = this.globalesService.avalidacion(this, this.componente, this.atributo);
        let datovalido = true;
        if (validacion != null) {
            let regexp = new RegExp(validacion);
            if (this.datointerno)
                datovalido = regexp.test(this.datointerno);
            else
                datovalido = false;
        }

        if (!this.requerido && this.dato == null) {
            if (!this.valido) {
              setTimeout(() => {
                this.valido = true;
                this.validoChange.emit(this.valido);
              });
            }
        } else {

            if (this.datointerno && datovalido) {
                if (!this.valido) {
                  setTimeout(() => {
                    this.valido = true;
                    this.validoChange.emit(this.valido);
                  });
                }
            } else {
                if (this.valido) {
                  setTimeout(() => {
                    this.valido = false;
                    this.validoChange.emit(this.valido);
                  });
                }
            }
        }
        let salida = false;
        if (this.componenteInput && (this.componenteInput.dirty || this.componenteInput.touched)) {
            salida = !datovalido;
        }
        //        if (this.requerido && !datovalido)
        //            salida = true;
        //        if ( this.componenteInput) {
        //                salida = datovalido;
        //            }
        //        }
     }

    get alertar() {
      return this.valido;
    }

    get requerido() {
        if (this.componenteInput && this.componenteInput.errors && this.componenteInput.errors.required)
            return true
        return false;
    }
    get patron() {
        if (this.componenteInput && this.componenteInput.errors && this.componenteInput.errors.pattern)
            return true
        return false;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes && changes.dato && (changes.dato.currentValue !== undefined) && changes.dato.currentValue != this.datointerno){
          this.datointerno = changes.dato.currentValue;
          this.validaGenerales();
        }
    }
}
