import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

//modelo
import { BancoModule } from '../modelos/banco/banco.module';



@Injectable({
  providedIn: 'root'
})
export class BancoService {
  
  public url: string;
  public url2: string;
  public url3: string;

  constructor(
    public _http: HttpClient
  ) {
      this.url = GLOBAL.url;
      this.url2 = GLOBAL.url2;
      this.url3 = GLOBAL.url3;
   }

  getBanco(){
    return "los datos se han guardado correctamente"; //--msm de prueba
   //return this._http.get(this.url+'banco').map(res =>res.json());
  } 

  addbanco(banco):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('nombre_banco',banco.nombre);
    return this._http.post(this.url+'insertbanco.php',body,{headers: headers,responseType:'text'});
  }

  editbanco(banco):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('nombre_banco',banco.nombre);
    return this._http.post(this.url3+'editbanco.php',body,{headers: headers,responseType:'text'});
  }

  getbancos(): Observable<any>{
    return this._http.get(this.url2+'?opcion=banco');
  }
}

