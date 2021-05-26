import { SolicitudTejidoCornealAlmacen } from './../../solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolicitudTejidoCornealAlmacenService } from './../../solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen.service';
declare var bootbox: any;

@Component({
  selector: 'app-ingreso-solictud-tejido',
  templateUrl: './ingreso-solictud-tejido.component.html',
  styleUrls: ['./ingreso-solictud-tejido.component.css'],
  providers:[SolicitudTejidoCornealAlmacenService]
})
export class IngresoSolictudTejidoComponent implements OnInit {
  public idSolicitud = null;
  public permisosIngreso: any = [
    {
      etiqueta: 'Tejido existente ',
      validacion: "No|Si",
      permiso: 3,
      tabla: 'ingresoSolicitud',
      atributo: 'tejido'
    }];

    public validoPermisoIngreso = false;
    public permisoIngreso = null;
  public solicitudTejidoCornealAlmacen: SolicitudTejidoCornealAlmacen = null;
  constructor(    private route: ActivatedRoute, public solicitudTejidoCornealAlmacenService: SolicitudTejidoCornealAlmacenService
    ) { }

  ngOnInit() {
    this.idSolicitud = this.route.snapshot.paramMap.get('id');
    if (this.idSolicitud != null) {
      this.solicitudTejidoCornealAlmacenService.getSolicitudTejidoCornealAlmacenByIdsolicitudTejidoCornealRecepcion({ id: this.idSolicitud }, this.getSolTejCorAlm, this);
    }
  }
  getSolTejCorAlm(entrada, obj) {
    if (entrada != null && entrada.id != null) {
      obj.solicitudTejidoCornealAlmacen = entrada;
      if (obj.solicitudTejidoCornealAlmacen.tejidoExistente != null)
      obj.permisoIngreso = obj.solicitudTejidoCornealAlmacen.tejidoExistente+"";
      if (obj.solicitudTejidoCornealAlmacen!= null && obj.solicitudTejidoCornealAlmacen.tejidoExistente != null) {
        obj.permisosIngreso[0].permiso = 2;
      }
     }
  }

  actualizar() {
    if (this.permisoIngreso == null) {
      bootbox.alert("Es necesario definir si existe o no el tejido");
      return;
    }
/*     if (this.solicitudTejidoCornealAlmacen == null) {
      bootbox.alert("Solicitud de tejido corneal en almacen inexistente");
      return;
    } */
    this.solicitudTejidoCornealAlmacen.tejidoExistente = parseInt(this.permisoIngreso);
    this.solicitudTejidoCornealAlmacen.estatusProceso = 5;
    this.solicitudTejidoCornealAlmacenService.actualizarSolicitudTejidoCornealAlmacen(new SolicitudTejidoCornealAlmacen(this.solicitudTejidoCornealAlmacen), this.evActualizar, this);
  }
  evActualizar(respuesta, obj) {
    if (respuesta) {
      bootbox.alert("Guardado con éxito");
      obj.permisosIngreso[0].permiso = 2;
    }

  }

}
