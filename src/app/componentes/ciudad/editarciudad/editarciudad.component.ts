import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MostrarciudadService } from '../../../servicios/mostrarciudad.service';
import { CiudadService } from '../../../servicios/ciudad.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editarciudad',
  templateUrl: './editarciudad.component.html',
  styleUrls: ['./editarciudad.component.css']
})
export class EditarciudadComponent implements OnInit {

  model:any = {}; //variable para guardar los datos del mostrar
  sciudad: any[]; //variable para guardar los departamentos
  spais: any[]; //variable para guardar los paises
  sp: any;//variable para saber la seleccón en el formulario
  data: any;

  constructor(
    public rt : Router,
    private mostrar: MostrarciudadService, //objeto de conexión con mostrar
    private _ciudadservice: CiudadService//objeto de conexión con el servicio
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get();//se extraen los datos del mostrar
    this.model=sidata[0];//se guardan los datos obtenidos
    this.pais();//inicialización del metodo
  }

  //metodo para editar
  onsubmit(f:NgForm){
    let vm = this;
    vm._ciudadservice.editciudad(vm.model)//petición al servico para enviar los datos a editar
    .subscribe(
      res => {
        swal({
          type: 'success',
          title: 'Datos actualizados correctamente',
          /*text: '',
          footer: '<a href>Why do I have this issue?</a>'*/
        })
        this.rt.navigateByUrl('/ciudad');//se redirecciona la vista
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  //metodo para cancelar el editar
  cancelar(formeditarciudad:NgForm){
    formeditarciudad.reset();//se resetea el formulario
      this.rt.navigateByUrl('/ciudad'); //se redirecciona la vista
  }

  //metodo para traer los paises de la BD
  pais(){
    let cate=this;
    cate._ciudadservice.getpais()//petición al servicio para obtener los paises de la BD
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;

            if(this.data['status']== false){
              swal({
                type: 'error',
                title: 'No existen datos en la base de datos',
                /*text: '',
                footer: '<a href>Why do I have this issue?</a>'*/
              })
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

  //metodo para saber que país se escogio en el formulario
  onSelectionpais(){
    this.sp= this.model.npais;
    if(this.sp!=0){
      this.sd(this.sp);//llamada al metodo buscar departamento
    }else{
      alert("Error al elegir el país");
    }
  }

  //metodo buscar departamentos
  sd(sp){
    let pais=this;
    pais._ciudadservice.getpaisopcional(sp)//petición al servico para buscar los departamentos del país seleccionado
    .subscribe(
      result => {
          if(result.code != 200){
                       
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              swal({
                type: 'error',
                title: 'No hay departamentos para esta opción',
                /*text: '',
                footer: '<a href>Why do I have this issue?</a>'*/
              })
            }else{
              this.sciudad=this.data;//se guardan los datos obtenidos en la consulta
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
