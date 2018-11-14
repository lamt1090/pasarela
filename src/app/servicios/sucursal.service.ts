import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  public url: string; //url para insertar
  public url2: string; //url para hacer consultas y traer datos
  public url3: string; //url para editar registros
  public url4 : string; //url para eliminar registros
  public url5: string; //url para saber si se puede eliminar un registro, es decir si no es foranea en otra tabla

  constructor(
    public _http: HttpClient
  ) { 
    //se asina a cada url la ruta que viene de el servicio global.ts
    this.url = GLOBAL.url;
    this.url2 = GLOBAL.url2;
    this.url3 = GLOBAL.url3;
    this.url4 = GLOBAL.url4;
    this.url5 = GLOBAL.url5;
    }

  //metodo para insertar una sucursal
   addsucursal(sucursal):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('name_sucursal',sucursal.nombre)
                                .set('address',sucursal.dirsucu)
                                .set('selectciudad',sucursal.nciu)
                                .set('selcomercio',sucursal.ncomercio);
    return this._http.post(this.url+'insertsucursal.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para editar una sucursal
  editsucursal(sucursal):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_sucursal',sucursal.id_sucursal)
                                  .set('name_sucursal',sucursal.nombre)
                                  .set('address',sucursal.direccion);
    return this._http.post(this.url3+'editsucursal.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para obtener todos los comercios
  getcomercios(): Observable<any>{
    return this._http.get(this.url2+'?opcion=comercio');
  }

  //metodo para obtener los paises
  getpais(): Observable<any>{
    return this._http.get(this.url2+'?opcion=pais');
  }

  //metodo para obtener los departamentos por el país escogido
  getpaisopcional(sp): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_pais',sp);
    return this._http.post(this.url2+'?opcion=paisopcional',body,{headers: headers,responseType:'text'});
    
  }

  //metodo para obtener las ciudades por el departamento elegido
  getciudadopcional(scd): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_departamento',scd);
    return this._http.post(this.url2+'?opcion=ciudadopcional',body,{headers: headers,responseType:'text'}); 
  }

  //metodo para traer los comercios y poder mostrar las sucursales por comercio
  getcomercioopcional(scm):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idcomercio',scm);
    return this._http.post(this.url2+'?opcion=comercioopcional',body,{headers: headers,responseType:'text'});
  }

  //metodo para obtener los datos de una sucursal  especifica
  getsucursalid(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idsucu',id);
    return this._http.post(this.url2+'?opcion=getsucursalid',body,{headers: headers,responseType:'text'});
  }

  //metodo para eliminar una sucursal
  eliminarsucursal(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idsucu',id);
    return this._http.post(this.url4+'?opcion=eliminarsucursal',body,{headers: headers,responseType:'text'});
  }

  //metodo para saber si la sucursal a eliminar ya tiene una caja registrada
  existesucursal(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idsucu',id);
    return this._http.post(this.url5+'?opcion=existesucursal',body,{headers: headers,responseType:'text'});
  }

}
