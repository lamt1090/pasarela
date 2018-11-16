import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class MonedaService {

  public url: string; //url para insertar
  public url2: string; //url para hacer consultas y traer datos
  public url3: string; //url para editar registros
  public url4 : string; //url para eliminar registros
  

  constructor(
    public _http: HttpClient
  ) { 
    //se asina a cada url la ruta que viene de el servicio global.ts
    this.url = GLOBAL.url;
    this.url2 = GLOBAL.url2;
    this.url3 = GLOBAL.url3;
    this.url4 = GLOBAL.url4;
  }

  //metodo para insertar una moneda
  addmoneda(moneda):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('nombre_moneda',moneda.nombre)
                                  .set('simbolo', moneda.simbolo);
    return this._http.post(this.url+'insertmoneda.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para editar una moneda
  editmoneda(moneda):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_coin',moneda.id_moneda)
                                  .set('nombre_moneda',moneda.nombre)
                                  .set('simbolo',moneda.simbolo);
    return this._http.post(this.url3+'editmoneda.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para obtener las onedas que existen
  getmoneda(): Observable<any>{
    return this._http.get(this.url2+'?opcion=moneda');
  }

  //metodo para obtener una mneda especifica 
  getmonedaid(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idmoneda',id);
    return this._http.post(this.url2+'?opcion=getmonedaid',body,{headers: headers,responseType:'text'});
  }

  //metodo para eliminar una moneda
  eliminarmoneda(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idmoneda',id);
    return this._http.post(this.url4+'?opcion=eliminarmoneda',body,{headers: headers,responseType:'text'});
  }


}
