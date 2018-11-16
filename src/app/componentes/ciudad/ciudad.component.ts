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
  sdepartamento : any[]; //variable para guardar los departamento
  spais : any[];//variable para guardar los paises
  data: any[];
  sp: any; //variable para saber la selección del formulario
  public ciudad : CiudadModule;

  constructor(
    private _ciudadservice: CiudadService //objeto de conexión al servicio
  ) {
    this.ciudad = new CiudadModule("","","");
   }

  ngOnInit() {
    this.pais();//se inicializa el metodo
    
  }

  //metodo para insertar
  onsubmit(formciudad: NgForm){
    let vm = this;
    vm._ciudadservice.addciudad(vm.ciudad)//petición al servicio para enviar los datos a insertar
    .subscribe(
      res => {
        alert("Datos Guardados correctamente");
        formciudad.reset();//se resetea el formulario
        
      },
      err =>{
        alert("Error al guardar en la base de datos")
        console.log(err);
      } 
    )
  }

  //metodo para obtener los paises 
  pais(){
    let cate=this;
    cate._ciudadservice.getpais()//petición al servicio para obtener los paises de la BD
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;

            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.spais=this.data;//se guardan los datos obtenidos en la consulta
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

  //metodo para saber que país eligio en en le formulario
  onSelectionpais(){
    this.sp= this.ciudad.npais;
    if(this.sp!=0){
      this.sd(this.sp);//llamado al metodo para traer los departamentos
    }else{
      alert("Error al elegir el país");
    }
  }

  //metodo para traer los departamentos 
  sd(sp){
    let pais=this;
    pais._ciudadservice.getpaisopcional(sp)//petición al servicio para obtener los departamentos del país seleccionado
    .subscribe(
      result => {
          if(result.code != 200){
                       
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              alert("No hay departamento para esta opción");
            }else{
              this.sdepartamento=this.data;//guardar los datos obtenidos en la consulta
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

}
