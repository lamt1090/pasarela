import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarrepresentantelegalService {
  public editreplegal: any[]; //variable para guardar una consulta de la base de datos
  constructor() { }

  //metodo para guardar los datos
  set(data){
    this.editreplegal= data;
  }

  //metodo para obtener los datos
  get(){
    return this.editreplegal;
  }
}
