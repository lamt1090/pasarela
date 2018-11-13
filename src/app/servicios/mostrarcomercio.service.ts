import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarcomercioService {
  public editcomercio: any[];
  constructor() { }

  set(data){
    this.editcomercio= data;
  }

  get(){
    return this.editcomercio;
  }
}
