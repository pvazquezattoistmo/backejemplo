import { GlobalesService } from './../../shared/globales.service';
import { ComponenteIdentificadorComponent } from './../../core/componentes-personalizados/componente-identificador/componente-identificador.component';
import { Component, OnInit } from '@angular/core';
import { AlmacenEvaluacion } from '../shared/almacen-evaluacion';
import { URLProvider } from '../../shared/url-provider';
import { PermisoAtributoService } from '../../permiso-atributos/shared/permiso-atributo.service';
import { PermisoTablaService } from '../../permiso-tablas/shared/permiso-tabla.service';
import { timeout } from 'rxjs/operators';
import { Router } from '@angular/router';

declare var $: any;
declare var DataTable: any;

@Component ({
  selector: 'app-almacen-evaluacion-table-bandeja',
  templateUrl: './almacen-evaluacion-table-bandeja.component.html',
  styleUrls: ['./almacen-evaluacion-table-bandeja.component.css'],
  providers: [GlobalesService, PermisoAtributoService, PermisoTablaService]
})
export class AlmacenEvaluacionTableBandejaComponent implements OnInit {
  public primero: boolean = true;
  public usuariologueado: any;

  constructor(
    public globalesService: GlobalesService,
    public urlProvider: URLProvider,
    public router: Router  ) {
       this.usuariologueado = globalesService.dameUsuario();
      this.getColumnas(this);
  }

  getColumnas(obj) {

    if ($('#tabla_almacenEvaluacionBandeja').length ==  0) {
         setTimeout(() => {
            obj.getColumnas(obj);
            return;
         }, 500);
    }
    if ($('#tabla_almacenEvaluacionBandeja').length == 0) return;
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
    columnas.push({ data: 'folio' });
    columnas.push({ data: 'fechaTermino' });
    columnas.push({ data: 'horaTermino' });
    columnas.push({
      data: function(obj) {
        let salida = "<div style='text-align:center;width:100%'> <input type='checkbox' disabled /> </div>";
        if (obj.corneaIz == 1) salida = "<div style='text-align:center;width:100%'><input type='checkbox' disabled checked /> </div>";
        return salida;
      }
    });
    columnas.push({
      data: function(obj) {
        let salida = "<div style='text-align:center;width:100%'><input type='checkbox' disabled /></div>";
        if (obj.corneaDr == 1) salida = "<div style='text-align:center;width:100%'><input type='checkbox' disabled checked /></div>";
        return salida;
      }
    });
    columnasNoVisibles.push(7);
    columnas.push({ data: 'idSolicitud' });
    columnas.push({
      data: function (oObj) {
        if (oObj)
        return "<span style=\"cursor: pointer\">Ingreso Solicitudes</span>";
      }
    });
    var novisibles: any;
    novisibles = [
      {
        targets: columnasNoVisibles,
        visible: false,
        searchable: false
      }
    ];
    $.fn.dataTableExt.sErrMode = 'none';
    var tabla = $('#tabla_almacenEvaluacionBandeja').DataTable({
      columnDefs: novisibles,
      language: {
        url: 'assets/Spanish.json'
      },
      ajax: {
        url: self.urlProvider.serverURL + 'almacenEvaluacion/almacenBandeja',
        type: 'POST',
        contentType: 'application/json',
        datatype: 'json',
        dataSrc: ''
      },
      columns: columnas
    });

    $('#tabla_almacenEvaluacionBandeja tbody').on('click', 'td', function(evt) {
      if (evt.currentTarget.cellIndex ==
        $(evt.currentTarget)
          .parent()
          .find('td').length -
        1
      ) {
        var data = $('#tabla_almacenEvaluacionBandeja')
          .DataTable()
          .row(evt.currentTarget)
          .data();
        if (data.tipo == 2) {
          this.globalesService.registraIdAlmacen(data.id);
          this.globalesService.limpiaIdSolicitudTejido();
          this.router.navigateByUrl('/almacen-evaluacion-crud/' + data.id);
        }
        if (data.tipo == 1) {
          this.globalesService.limpiaIdAlmacen();
          this.globalesService.registraIdSolicitudTejido(data.idSolicitud);
          this.router.navigateByUrl('/ingreso-solictud-tejido/' + data.idSolicitud);
        }

        }
      }.bind(this)
    );
  }

  ngOnInit() {
  }


  cambio_evaluacionSolicitud(evaluacionSolicitud) {
    $('#tabla_almacenEvaluacionBandeja')
      .DataTable()
      .ajax.reload(null, false);
    this.primero = true;
  }

}
