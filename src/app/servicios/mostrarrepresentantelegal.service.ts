import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarrepresentantelegalService {
  public editreplegal: any[];
  constructor() { }

  set(data){
    this.editreplegal= data;
  }

  get(){
    return this.editreplegal;
  }
}
