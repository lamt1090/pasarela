import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class EstadoRequisitoService {

  public url: string;
  public url2: string;
  public url3: string;
  public url4: string;
  public url5: string;

  constructor(
    public _http: HttpClient
  ) { 
    this.url = GLOBAL.url;
    this.url2 = GLOBAL.url2;
    this.url3 = GLOBAL.url3;
    this.url4 = GLOBAL.url4;
    this.url5 = GLOBAL.url5;
  }

  addestado(estadorequisito):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('nombre_estado',estadorequisito.nombre);
    return this._http.post(this.url+'insertestadorequisito.php',body,{headers: headers,responseType:'text'});
  }

  editestadorequisito(estado):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_estado',estado.id_estado)
                                  .set('nombre_estado',estado.nombre);
    return this._http.post(this.url3+'editestadorequisito.php',body,{headers: headers,responseType:'text'});
  }

  getestado(): Observable<any>{
    return this._http.get(this.url2+'?opcion=estadorequisito');
  }

  getestadoid(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idestadoreq',id);
    return this._http.post(this.url2+'?opcion=getestadorequisitoid',body,{headers: headers,responseType:'text'});
  }

  eliminarestado(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idestadoreq',id);
    return this._http.post(this.url4+'?opcion=eliminarestado',body,{headers: headers,responseType:'text'});
  }

  existeestado(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idestadoreq',id);
    return this._http.post(this.url5+'?opcion=existeestado',body,{headers: headers,responseType:'text'});
  }

}
