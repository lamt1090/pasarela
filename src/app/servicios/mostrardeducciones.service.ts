import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrardeduccionesService {
  public editdeduccion: any[];
  constructor() { }

  set(data){
    this.editdeduccion= data;
  }

  get(){
    return this.editdeduccion;
  }
}
