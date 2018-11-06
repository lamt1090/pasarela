import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarbancoService {
  public editbn: any[];
  constructor() { }

  set(data){
    this.editbn= data;
  }

  get(){
    return this.editbn;
  }
}
