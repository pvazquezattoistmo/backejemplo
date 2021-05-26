import { EntidadFederativa } from "./entidad-federativa";
import { URLProvider } from '../../shared/url-provider'

export class ConfigurarEntidadFederativa {
    crudServiceBaseUrl;
    entidadFederativaConsulta;
    tipocampoAgEl;
    campoAgEl;
    rutaAgregar: string;
    rutaActualizar: string;
    rutaEliminar: string;
    rutaLista: string;
    urlprovider: URLProvider;
    titulo:string;
    permisosAtributos;
    permisosTabla;
	altoComponente:number ;
    //   rutaAgregar:string;
    constructor() {
        this.urlprovider= new URLProvider();
        this.crudServiceBaseUrl = this.urlprovider.serverURL + "entidadFederativa";
        this.rutaLista = this.crudServiceBaseUrl + "/getEntidadFederativas";
        this.rutaAgregar = this.crudServiceBaseUrl + "/guardarEntidadFederativa";
        this.rutaActualizar = this.crudServiceBaseUrl + "/actualizarEntidadFederativa";
        this.rutaEliminar = this.crudServiceBaseUrl + "/eliminarEntidadFederativa";
        this.titulo="Catálogo EntidadFederativa";
        this.permisosAtributos= null;
        this.permisosTabla= null;
        this.entidadFederativaConsulta = null;
        this.campoAgEl=null;
        this.tipocampoAgEl= null;
		this.altoComponente=500;
    }
    lectura() {
        return {
            url: this.rutaLista,
            contentType: "application/json",
            type: "POST"
        };
    }
    lecturaP(evt,dat) {
        if (!dat) return null;
		if (typeof dat === 'object')
        return{
            url: this.rutaLista,
            contentType: "application/json",
            data: { models: dat.toDto() },
            type: "POST",
            complete:evt
        };
		return{
            url: this.rutaLista,
            contentType: "application/json",
            data: { models: dat },
            type: "POST",
            complete:evt
        };
    }
    eliminar() {
        return {
            url: this.rutaEliminar,
            contentType: "application/json",
            type: "POST"
        };
    }
    eliminarP(evt,dat) {
        if (!dat) return null;
        return{
            url: this.rutaEliminar,
            contentType: "application/json",
            data: { models: dat },
            type: "POST",
            complete:evt
        };
    }
    agregar() {
        return {
            url: this.rutaAgregar,
            contentType: "application/json",
            type: "POST"
        };
    }
    agregarP(evt,dat) {
        if (!dat) return null;
        return{
            url: this.rutaAgregar,
            contentType: "application/json",
            data: { models: dat },
            type: "POST",
            complete:evt
        };
    }
}
