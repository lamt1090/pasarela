import { Component, OnInit } from '@angular/core';
import { RolModule } from '../../modelos/rol/rol.module';
import { RolService } from '../../servicios/rol.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css'],
  providers: [RolService]
})
export class RolComponent implements OnInit {
  
  public rol: RolModule;

  constructor(
    private _rolservice: RolService
  ) {
    this.rol= new RolModule("");
   }

  ngOnInit() {
  }

    onsubmit(){
      let vm = this;
    vm._rolservice.addrol(vm.rol)
    .subscribe(
      res => {
        console.log(res);
      },
      err =>{
        console.log(err);
      } 
    )
    }
}
