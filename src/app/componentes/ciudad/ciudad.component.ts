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
  spais : any[];
  data: any[];
  sp: any;
  public ciudad : CiudadModule;

  constructor(
    private _ciudadservice: CiudadService
  ) {
    this.ciudad = new CiudadModule("","","");
   }

  ngOnInit() {
    this.pais();
    
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

  pais(){
    let cate=this;
    cate._ciudadservice.getpais()
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;

            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.spais=this.data;
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

  onSelectionpais(){
    this.sp= this.ciudad.npais;
    if(this.sp!=0){
      this.sd(this.sp);
    }else{
      alert("Error al elegir el país");
    }
  }

  sd(sp){
    let pais=this;
    pais._ciudadservice.getpaisopcional(sp)
    .subscribe(
      result => {
          if(result.code != 200){
                       
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hay departamento para esta opción");
            }else{
              this.sdepartamento=this.data;
            }
          }else{
              pais = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );
  }

  /*departamentos(){
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
  }*/
}
