import { Component, OnInit } from '@angular/core';
import { CiudadModule } from '../../modelos/ciudad/ciudad.module';
import { CiudadService } from '../../servicios/ciudad.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css'],
  providers: [CiudadService]
})
export class CiudadComponent implements OnInit {
  sdepartamento : any[];
  data: any[];
  public ciudad : CiudadModule;

  constructor(
    private _ciudadservice: CiudadService
  ) {
    this.ciudad = new CiudadModule("","");
   }

  ngOnInit() {
    this.departamentos();
  }

  onsubmit(formciudad: NgForm){
    let vm = this;
    vm._ciudadservice.addciudad(vm.ciudad)
    .subscribe(
      res => {
        alert("Datos Guardados correctamente");
        formciudad.reset();
        
      },
      err =>{
        alert("Error al guardar en la base de datos")
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
            this.data=result;
          
            if(this.data['status']== false){
              alert("No existen ciudades para ese departamento")
            }else{
              this.sdepartamento=this.data;
            }
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
