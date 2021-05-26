import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild
} from "@angular/core";
import { GlobalesService } from "../../../shared/globales.service";
import { map } from 'rxjs/operators/map';
import {Observable} from 'rxjs';

@Component({
  selector: "app-componente-objeto",
  templateUrl: "./componente-objeto.component.html",
  styleUrls: ["./componente-objeto.component.css"],
  providers: [GlobalesService]
})
export class ComponenteObjetoComponent implements OnInit {
  @Input() public buscar: boolean = true;
  @Input() public componente: string;
  @Input() public atributo: string;
  @Input() public permisosAtributos;
  @Input() public dato: any;
  /*
   *----- Agregados start----
   */
  @Input() public posicion: string = "default";
  @Input() public sizeLB: string = "100";
  @Input() public sizeInput: string = "100";
  @Input() public isVisibleLB: boolean = true;
  @Input() public isVisibleInput: boolean = true;
  @Input() public isVisibleEditar: boolean = false;
  @Input() public alineacion: string = "text-justify";
  /*
   *----- Agregados end----
   */
  @Output() public datoChange = new EventEmitter<any>();
  public datointerno;
  @Input() public valido: boolean = false;
  @Output() public validoChange = new EventEmitter<boolean>();

  @Input() public opciones: any[];
  @Input() public atributoVisible: string = "id";
  @Input() public ocultarConjuntos: boolean = false;
  @Input() public objetoEdicion: boolean;
  @Output() public objetoEdicionChange = new EventEmitter<boolean>();
  @Input() enable = true;
  public data: any[];

  public valueNormalizer = (text: Observable<string>) =>
    text.pipe(
      map((text: string) => {
        return {
          value: this.data[this.data.length - 1].value + 1,
          text: text
        };
      })
    );

  constructor(public globalesService: GlobalesService) {}

  ngOnInit() {}
  objetoEdicionCambio() {
    //  this.dato = this.datointerno;
    setTimeout(() => {
      this.objetoEdicionChange.emit(this.objetoEdicion);
    });
  }

  datoCambio() {
    setTimeout(() => {
    this.dato = this.datointerno;
    this.datoChange.emit(this.dato);
    });
    this.validaGeneral();
  }

  ngOnChanges(changes) {
    if (
      changes &&
      changes.dato &&
      changes.dato.currentValue !== undefined &&
      changes.dato.currentValue != this.datointerno
    ) {
      (changes.dato.currentValue);
      this.validaGeneral();
      if (typeof changes.dato.currentValue === 'object'){
          this.datointerno = changes.dato.currentValue;
      } else {
        this.datointerno = {id: changes.dato.currentValue};
      }
    }

    if (changes.opciones) {
      this.data = changes.opciones.currentValue;
    }

  }

  validaGeneral(){
    if (this.globalesService.arequerido(this, this.componente, this.atributo)) {
      if (this.datointerno == null) {
        // valido es falso
        if (this.valido) {
          setTimeout(() => {
          this.valido = false;
          this.validoChange.emit(this.valido);
          });
        }
      } else {
        // valido es verdadero
        if (!this.valido) {
          setTimeout(() => {
          this.valido = true;
          this.validoChange.emit(this.valido);
          });
        }
      }
    } else {
      if (!this.valido) {
        setTimeout(() => {
        this.valido = true;
        this.validoChange.emit(this.valido);
        });
      }
    }
    // return (
    //   this.globalesService.arequerido(this, this.componente, this.atributo) &&
    //   (this.datointerno == null || this.datointerno == "") &&
    //   !this.buscar
    // );
  }
  get alertar(): boolean {
    return this.valido;

  }

  handleFilter(value) {
    this.data = this.opciones.filter(
      s =>
        s[this.atributoVisible].toLowerCase().indexOf(value.toLowerCase()) !==
        -1
    );
  }

  public valueChange(value: any): void {
    setTimeout(() => {
    this.dato = this.datointerno = value;
    this.datoChange.emit(this.dato);
    this.validaGeneral();
    });

  }
}
