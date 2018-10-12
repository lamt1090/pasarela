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

  constructor(
    public _http: HttpClient
  ) {
      this.url = GLOBAL.url;
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
}

