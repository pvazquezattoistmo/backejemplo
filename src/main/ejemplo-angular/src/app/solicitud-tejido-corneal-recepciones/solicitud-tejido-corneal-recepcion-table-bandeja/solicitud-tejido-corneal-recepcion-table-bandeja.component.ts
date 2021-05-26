import { GlobalesService } from './../../shared/globales.service';
import { SolicitudTejidoCornealAlmacenService } from './../../solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen.service';
import { SolicitudTejidoCornealAlmacen } from './../../solicitud-tejido-corneal-almacenes/shared/solicitud-tejido-corneal-almacen';
import { Router } from '@angular/router';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ViewChild, NgZone, EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';
import { SolicitudTejidoCornealRecepcion } from '../shared/solicitud-tejido-corneal-recepcion';
import { URLProvider } from '../../shared/url-provider';
import { PermisoAtributoService } from '../../permiso-atributos/shared/permiso-atributo.service';
import { PermisoTablaService } from '../../permiso-tablas/shared/permiso-tabla.service';
import { Usuario } from '../../usuarios/shared/usuario';

declare var $: any;
declare var DataTable: any;
declare var bootbox:any;

@Component({
  selector: 'app-solicitud-tejido-corneal-recepcion-table-bandeja',
  templateUrl: './solicitud-tejido-corneal-recepcion-table-bandeja.component.html',
  styleUrls: ['./solicitud-tejido-corneal-recepcion-table-bandeja.component.css'],
  providers: [GlobalesService, PermisoAtributoService, PermisoTablaService,SolicitudTejidoCornealAlmacenService]
})
export class SolicitudTejidoCornealRecepcionTableBandejaComponent implements OnInit {
  public primero: boolean = true;
  public idSeleccionado = -1;
  public idSolicitudTejido = -1;
  public tipo = -1;
  public idRecepcionSolicitudEvaluacion = -1;
  //public solicitudTejidoCornealRecepcion: SolicitudTejidoCornealRecepcion;
  @Input()
  public solicitudTejidoCornealRecepcion: SolicitudTejidoCornealRecepcion = new SolicitudTejidoCornealRecepcion();
  @Output() solicitudTejidoCornealRecepcionChange = new EventEmitter<
    SolicitudTejidoCornealRecepcion
  >();
  public usuariologueado;
  public permisosAtributos = [];
  public permisosTabla = { tabla: 'solicitudTejidoCornealRecepcion', permiso: 0, etiqueta: '' };
  public ptabla: boolean = false;
  public pattr: boolean = false;
  public enAlmacen = 0;
  constructor(
    public globalesService: GlobalesService,
    public permisoAtributoService: PermisoAtributoService,
    public permisoTablaService: PermisoTablaService,
    public solicitudTejidoCornealAlmacenService: SolicitudTejidoCornealAlmacenService,
    public urlProvider: URLProvider,
    public router: Router
  ) {
    this.solicitudTejidoCornealRecepcion = new SolicitudTejidoCornealRecepcion();
    this.usuariologueado = globalesService.dameUsuario();
    this.getColumnas(this);
  }

  getColumnas(obj) {
    if ($('#tabla_solicitudTejidoCornealRecepcionBandeja').length == 0) {
      setTimeout(() => {
        obj.getColumnas(obj);
        return;
      }, 500);
    }

    var self = obj;
    var columnas = [];
    var columnasNoVisibles = [];
    columnasNoVisibles.push(0);
    columnas.push({ data: 'id' });
    columnas.push({
      data: function(oObj) {
        if (oObj)
          if (oObj.estatusProceso == '1')
            return "<i data-toggle='tooltip' data-placement='top' title='Solicitud Nueva' class='icon-infocircle text-danger'  ></i>";
        if (oObj.estatusProceso == '2')
          return "<i data-toggle='tooltip' data-placement='top' title='Solicitud en Recepción' class='icon-infocircle text-warning' ></i>";
        if (oObj.estatusProceso == '3')
          return "<i data-toggle='tooltip' data-placement='top' title='Solicitud en Evaluación' class='icon-infocircle text-primary' ></i>";
        if (oObj.estatusProceso == '4')
          return "<i data-toggle='tooltip' data-placement='top' title='Solicitud en  Almacén' class='icon-infocircle text-success' ></i>";
      }
    });
    columnas.push({
      data: function(oObj) {
        return '<span style="cursor: pointer">' + oObj.folioSolicitud + '</span>';
      }
    });

    columnas.push({
      data: function(oObj) {
        return '<span style="cursor: pointer">' + oObj.fechaRegistro + '</span>';
      }
    });
    columnasNoVisibles.push(4);
    columnas.push({ data: 'tipo' });
    columnasNoVisibles.push(5);
    columnas.push({ data: 'idRecepcionSolicitudEvaluacion' });
    columnasNoVisibles.push(6);
    columnas.push({ data: 'enAlmacen' });
    columnas.push({
      data: function(oObj) {
        return "<span style=\"cursor: pointer\">Detalle</span>";
      }
    });
    columnasNoVisibles.push(8);
    columnas.push({ data: 'idSolicitudtejido' });
    var novisibles: any;
    novisibles = [
      {
        targets: columnasNoVisibles,
        visible: false,
        searchable: false
      }
    ];
    $.fn.dataTableExt.sErrMode = 'none';
    var tabla = $('#tabla_solicitudTejidoCornealRecepcionBandeja').DataTable({
      columnDefs: novisibles,
      language: {
        url: 'assets/Spanish.json'
      },
      initComplete: function(settings, json) {
        var xs = $('#tabla_solicitudTejidoCornealRecepcionBandeja_wrapper').find('.row');
        $($(xs[0]).find('.col-sm-6')[0])
          .find('.dataTables_length')
          .append('<button   class="btn btn-default pull-right">Nuevo Registro</button >')
          .click(function() {
            self.solicitudTejidoCornealRecepcion = new SolicitudTejidoCornealRecepcion();
            self.primero = false;
          });
      },
      drawCallback: function() {
        $('[data-toggle="tooltip"]').tooltip();
      },
      ajax: {
        url:
          self.urlProvider.serverURL +
          'solicitudTejidoCornealRecepcion/getSolicitudTejidoCornealRecepcionesBandeja',
        type: 'POST',
        contentType: 'application/json',
        datatype: 'json',
        dataSrc: ''
      },
      columns: columnas
    });
    $('#tabla_solicitudTejidoCornealRecepcionBandeja tbody').on(
      'click',
      'td',
      function(evt) {
        if (
          evt.currentTarget.cellIndex ==
          $(evt.currentTarget)
            .parent()
            .find('td').length -
            1
        ) {
          var data = $('#tabla_solicitudTejidoCornealRecepcionBandeja')
            .DataTable()
            .row(evt.currentTarget)
            .data();
          self.solicitudTejidoCornealRecepcion = new SolicitudTejidoCornealRecepcion();
          self.solicitudTejidoCornealRecepcion.from(data);
          self.primero = false;
          (data.id);
          this.idSeleccionado = data.id;
          this.idSolicitudTejido = data.idSolicitudtejido;
          this.globalesService.registraIdRecepcion(data.id);
          this.idRecepcionSolicitudEvaluacion = data.idRecepcionSolicitudEvaluacion;
          this.tipo = data.tipo;
          this.enAlmacen = data.enAlmacen;
          if (data.tipo == 1) {
            $('#solicitudModal').modal();
          } else {
            $('#evaluacionModal').modal();
          }
        }
      }.bind(this)
    );
  }
  enviarAlmacen() {
    let solTejCorAlm = new SolicitudTejidoCornealAlmacen();
    solTejCorAlm.idsolicitudTejidoCornealRecepcion = { id: this.idSeleccionado };
    solTejCorAlm.estatusProceso = 4;
    solTejCorAlm.usuarioUltMov = new Usuario (this.usuariologueado);
    solTejCorAlm.fechaRegistro = new Date();
    solTejCorAlm.status = "1";

    this.solicitudTejidoCornealAlmacenService.guardarSolicitudTejidoCornealAlmacen(solTejCorAlm,this.evtGuardaSolTejCorAlm, this );
  }
  evtGuardaSolTejCorAlm(solTejCorAl, obj) {
    if (solTejCorAl.id != null) {
      bootbox.alert("Solicitud Enviada a Almacén");
      $('#tabla_solicitudTejidoCornealRecepcionBandeja').DataTable().ajax.reload(null, false);
      $('#solicitudModal').modal('hide');
    }
  }
  irRecepcion() {
    $('#evaluacionModal').modal('hide');
    this.globalesService.registraIdRecepcion(this.idRecepcionSolicitudEvaluacion);
    this.router.navigateByUrl(
      '/recepcion-solicitud-evaluacion-crud/' + this.idRecepcionSolicitudEvaluacion
    );
  }
  irOficio() {
    $('#evaluacionModal').modal('hide');
    this.globalesService.registraIdRecepcion(this.idRecepcionSolicitudEvaluacion);

    this.router.navigateByUrl('/oficio-donacion-crud/' + this.idRecepcionSolicitudEvaluacion);
  }
  ngOnInit() {
/*     this.getColumnas(this);
 */
  }
  cambio_solicitudTejidoCornealRecepcion(solicitudTejidoCornealRecepcion) {
    $('#tabla_solicitudTejidoCornealRecepcionBandeja')
      .DataTable()
      .ajax.reload(null, false);
    this.primero = true;
  }
}
