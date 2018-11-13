import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarciudadService {
  public editciudad: any[];
  constructor() { }

  set(data){
    this.editciudad= data;
  }

  get(){
    return this.editciudad;
  }
}
