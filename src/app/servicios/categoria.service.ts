import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

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

  //metodo para insertar categorias
  addcategoria(categoria):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('nombre_categoria',categoria.nombre);
    return this._http.post(this.url+'insertcategoria.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para editar categorias
  editcategoria(categoria):Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('nombre_categoria',categoria.nombre)
                                  .set('id_categoria',categoria.id_categoria);
    return this._http.post(this.url3+'editcategoria.php',body,{headers: headers,responseType:'text'});
  }

  //metodo para obtener todas las categorias de la bse de datos
  getcategorias(): Observable<any>{
    return this._http.get(this.url2+'?opcion=categoria');
  }

  //metodo para obtener una categoria en especifico
  getcategoriaid(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_categoria',id);
    return this._http.post(this.url2+'?opcion=getcategoria',body,{headers: headers,responseType:'text'});
  }

  //metodo para eliminar una categoria
  eliminarcategoria(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_categoria',id);
    return this._http.post(this.url4+'?opcion=eliminarcategoria',body,{headers: headers,responseType:'text'});
  }

  //metodo para ver si en subcategorias esta la categoria que se desea eliminar
  existecategoria(id): Observable<any>{
    let headers = new HttpHeaders({"Content-type": 'application/x-www-form-urlencoded; charset=UTF-8'});
    const body = new HttpParams().set('id_categoria',id);
    return this._http.post(this.url5+'?opcion=existecategoria',body,{headers: headers,responseType:'text'});
  }

}


