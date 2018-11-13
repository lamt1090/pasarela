import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarrolesService {
  public editrol: any[];
  constructor() { }

  set(data){
    this.editrol= data;
  }

  get(){
    return this.editrol;
  }
}
