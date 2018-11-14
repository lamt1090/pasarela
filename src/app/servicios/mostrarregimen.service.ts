import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarregimenService {
  public editregimen: any[]; //variable para guardar una consulta de la base de datos
  constructor() { }

  //metodo para guardar los datos
  set(data){
    this.editregimen= data;
  }

  //metodo para obtener los datos
  get(){
    return this.editregimen;
  }
}
