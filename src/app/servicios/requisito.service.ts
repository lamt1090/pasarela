import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class RequisitoService {

  public url: string;
  public url2: string;
  public url3: string;
  public url4: string;
  public url5: string;

  constructor(
    public _http: HttpClient
  ) { 
    this.url= GLOBAL.url;
    this.url2 = GLOBAL.url2;
    this.url3 = GLOBAL.url3;
    this.url4 = GLOBAL.url4;
    this.url5 = GLOBAL.url5;
  }

  addrequisito(requisito):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('name_requisito',requisito.nombre);
    return this._http.post(this.url+'insertrequisito.php',body,{headers: headers,responseType:'text'});
  }

  editrequisito(requisito):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_requisito',requisito.id_requisito)
                                  .set('name_requisito',requisito.nombre);
    return this._http.post(this.url3+'editrequisito.php',body,{headers: headers,responseType:'text'});
  }

  getrequisito(): Observable<any>{
    return this._http.get(this.url2+'?opcion=requisito');
  }

  getrequisitoid(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idrequisito',id);
    return this._http.post(this.url2+'?opcion=getrequisitoid',body,{headers: headers,responseType:'text'});
  }

  eliminarrequisito(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idrequisito',id);
    return this._http.post(this.url4+'?opcion=eliminarrequisito',body,{headers: headers,responseType:'text'});
  }

  existerequisito(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('idrequisito',id);
    return this._http.post(this.url5+'?opcion=existerequisito',body,{headers: headers,responseType:'text'});
  }
}
