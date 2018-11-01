import { Injectable } from '@angular/core';

import { Observable, of , Observer } from 'rxjs';

import { ValidoModule } from '../modelos/valido/valido.module';


@Injectable({
  providedIn: 'root'
})

export class IsloginService {

  data$ : any;

  dataChange: Observable<any>;

  dataChangeObserver : any;

  constructor() { 
    this.dataChange = new Observable((observer:Observer<any>)=>{
      this.dataChangeObserver = observer;
    });
  }

  setData(data:any) : void {
      this.data$ = data;
      console.log(this.data$);
    this.dataChangeObserver.next(this.data$);
  }
}

