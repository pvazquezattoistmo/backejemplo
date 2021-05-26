import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { GlobalesService } from "../../../shared/globales.service";

declare var $: any;
@Component({
  selector: "app-componente-hora",
  templateUrl: "./componente-hora.component.html",
  styleUrls: ["./componente-hora.component.css"]
})
export class ComponenteHoraComponent implements OnInit, OnChanges {
  @Input() public buscar = true;
  @Input() public componente: string;
  @Input() public atributo: string;
  @Input() public permisosAtributos;
  @Input() public dato;
  /*
   *----- Agregados start----
   */
  @Input() public posicion = "default";
  @Input() public sizeLB = 2;
  @Input() public sizeInput = 4;
  @Input() public isVisibleLB = true;
  @Input() public isVisibleInput = true;
  @Input() public alineacion = "text-justify";
  @Input() public required = false;
  @Input() public enabled = true;
  @Input() public label: string;
  /*
   *----- Agregados end----
   */
  @Output() public datoChange = new EventEmitter<Date>();
  public datointerno: Date;
  @Input() public valido = false;
  @Output() public validoChange = new EventEmitter<boolean>();
  @Input() public minHour: Date;
  constructor(public globalesService: GlobalesService) {}

  ngOnInit() {}

  // changeFechaValidarFecha(entrada) {
  //   if (entrada.sender.value) {
  //     this.datointerno = entrada.sender.value();
  //     this.dato = this.datointerno;
  //     this.datoChange.emit(this.dato);
  //   }
  // }

  get alertar() {
    if (!this.required) {
      if (!this.valido) {
        setTimeout(() => {
        this.valido = true;
        this.validoChange.emit(this.valido);
        });
      }
    } else {
      if (this.datointerno instanceof Date) {
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
    return (this.required || this.patron) && !this.buscar;
  }

  get patron() {
    return false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.dato) {
      if (changes.dato.currentValue != null){
        this.datointerno = new Date(changes.dato.currentValue);
      } else {
        this.datointerno = null;
      }
    }
  }

  onChange(value: Date): void {
    setTimeout(() => {
    if (value != null) {
      this.dato = value.getTime();
    } else {
      this.dato = null;
    }
    this.datoChange.emit(this.dato);
    });
  }

  public onFocus(): void {
    ('focus');
  }
}
