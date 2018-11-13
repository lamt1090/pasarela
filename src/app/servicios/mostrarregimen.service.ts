import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarregimenService {
  public editregimen: any[];
  constructor() { }

  set(data){
    this.editregimen= data;
  }

  get(){
    return this.editregimen;
  }
}
