import { Component, OnInit } from '@angular/core';
import { DepartamentoModule } from '../../modelos/departamento/departamento.module';
import { DepartamentoService } from '../../servicios/departamento.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css'],
  providers: [DepartamentoService]
})
export class DepartamentoComponent implements OnInit {
  pais: any[];//variable para guardar los paises traidos de la BD
  data: any[];
  public departamento: DepartamentoModule;//objeto de conexión con el modelo

  constructor(
    private _departamentoservice: DepartamentoService //objeto de conexión con el servicio
  ) { 
    this.departamento = new DepartamentoModule("","");
  }

  ngOnInit() {
    this.paises();//se inicializa el metodo
  }

  //metodo para insertar
  onsubmit(formdepartamento: NgForm){
    let vm = this;
    vm._departamentoservice.adddepartamento(vm.departamento)//petición al servicio para enviar los datos a insertar
    .subscribe(
      res => {
        alert("Datos Guardados correctamente");
        formdepartamento.reset();//se reseteael formulario
        
      },
      err =>{
        alert("Error al guardar en la base de datos")
        console.log(err);
      } 
    )
  }

  //metodo mostrar paises
  paises(){
    let cate=this;
    cate._departamentoservice.getpaises()//petición al serrvicio para obtener los paises de la BD
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;
          
            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.pais=result;//se guardan los datos obtenidos
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
