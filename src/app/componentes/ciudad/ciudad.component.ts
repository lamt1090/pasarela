import { Component, OnInit } from '@angular/core';
import { CiudadModule } from '../../modelos/ciudad/ciudad.module';
import { CiudadService } from '../../servicios/ciudad.service';


@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css'],
  providers: [CiudadService]
})
export class CiudadComponent implements OnInit {
  sdepartamento : any[];
  public ciudad : CiudadModule;

  constructor(
    private _ciudadservice: CiudadService
  ) {
    this.departamentos();
    this.ciudad = new CiudadModule("","");
   }

  ngOnInit() {
  }

  onsubmit(){
    let vm = this;
    vm._ciudadservice.addciudad(vm.ciudad)
    .subscribe(
      res => {
        console.log(res);
      },
      err =>{
        console.log(err);
      } 
    )
  }

  departamentos(){
    let cate=this;
    cate._ciudadservice.getdepartamentos()
    .subscribe(
      result => {
          if(result.code != 200){
            this.sdepartamento=result;
          }else{
              cate = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }
}
