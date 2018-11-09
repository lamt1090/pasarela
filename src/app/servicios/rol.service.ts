import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class RolService {

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

  addrol(rol):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('name_rol',rol.nombre);
    return this._http.post(this.url+'insertrol.php',body,{headers: headers,responseType:'text'});
  }

  editrol(rol):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_rol',rol.id_rol)
                                  .set('name_rol',rol.nombre);
    return this._http.post(this.url3+'editrol.php',body,{headers: headers,responseType:'text'});
  }

  getrol(): Observable<any>{
    return this._http.get(this.url2+'?opcion=rol');
  }

  getrolid(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idrol',id);
    return this._http.post(this.url2+'?opcion=getrolid',body,{headers: headers,responseType:'text'});
  }

  eliminarrol(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idrol',id);
    return this._http.post(this.url4+'?opcion=eliminarrol',body,{headers: headers,responseType:'text'});
  }

  existerol(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idrol',id);
    return this._http.post(this.url5+'?opcion=existerol',body,{headers: headers,responseType:'text'});
  }
}
