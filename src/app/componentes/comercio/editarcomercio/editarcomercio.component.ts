import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MostrarcomercioService } from '../../../servicios/mostrarcomercio.service';
import { ComercioService } from '../../../servicios/comercio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editarcomercio',
  templateUrl: './editarcomercio.component.html',
  styleUrls: ['./editarcomercio.component.css']
})
export class EditarcomercioComponent implements OnInit {

  model:any = {};//variable para guardar los datos del mostrar
  data: any;

  sc: any;//variable para guardar la selección de categorias del formulario
  sp: any;//variable para guardar la selección del pais del formulario
  scd: any;//variable para guardar la selección del departmento del formulario
  sregimen : any[];//variable para guardar los regimen de la BD
  siva : any[]; //variable para guardar los iva de la BD
  srol : any[];//variable para guardar los roles de la BD
  scategoria : any[];//variable para guardar las categorias de al BD
  ssubcategoria : any[];//variable para guardar las subcategorias segun la categoria 
  smsubcat : any[];//variable para guardar las subcategorias de al BD
  
  
  constructor(
    public rt : Router,
    private mostrar: MostrarcomercioService,//objeto de conexión con el mostrar
    private _comercioservice: ComercioService//objeto de coneción con el servicio
  ) { }

  ngOnInit() {
    let sidata = this.mostrar.get();//se obtienen los datos guardados en el mostrar
    this.model=sidata[0];//se guardan los datos obtenidos
    this.subcategoria();//inicialización del metodo
    this.categoria();//inicialización del metodo
    this.regimen();//inicialización del metodo
    this.iva();//inicialización del metodo
  }

  //medoto editar
  onsubmit(f:NgForm){
    let vm = this;
    vm._comercioservice.editcomercio(vm.model)//petición al servicio para enviar lso datos a editar
    .subscribe(
      res => {
        alert("Datos Actualizados correctamente");
        this.rt.navigateByUrl('/mostrarcomercio');//se redirecciona la vista
      },
      err =>{
        alert("Erro al guardar en la base de datos");
        console.log(err);
      } 
    )
  }

  //metodo cancelar el editar
  cancelar(formeditarcomercio:NgForm){
    formeditarcomercio.reset();//se resetea el formulario
      this.rt.navigateByUrl('/mostrarcomercio');//se redirecciona la vista
  }

  //metodo buscar categorias
  categoria(){
    let cate=this;
    cate._comercioservice.getcategoria()//petición al servicio para obtener las categorias de la BD
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;

            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.scategoria=this.data;//se guardan los datos obtenidos en la consulta
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

  //metodo para saber la selección de la categoria
  onSelection(){
    this.sc= this.model.catc;
    if(this.sc!=0){
      this.sb(this.sc);//lamada al metodo buscar las subcategorias según la categoria
    }else{
      alert("Error en la elección de categoria");
    }
  }

  //metodo buscar las subcategorias según la categoria
  sb(sc){
    let cate=this;
    cate._comercioservice.getsubcategoriaopcional(sc)//petición al servicio para obtener las subcategorias según la categoria seleccionada
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);

              this.ssubcategoria=this.data;//se guardan los datos obtenidos en la consulta
            
          }else{
              cate = result.data;
          }
      },
      error => {
          console.log(<any>error);
      }
    );

  }

   //metodo buscar regimen
  regimen(){
    let cate=this;
    cate._comercioservice.getregimen()//petición para obtener los regimen de la BD
    .subscribe(
      result => {
          if(result.code != 200){

            this.data=result;

            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.sregimen=result;//se guardan los datos obtenidos en la BD
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

  //metodo buscar  iva
  iva(){
    let cate=this;
    cate._comercioservice.getiva()//petición al servicio para buscar los ivas de la BD
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;

            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.siva=result;//se guardan los datos obtenidos en la consulta
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

  //metodo para buscar subcategorias
  subcategoria(){
    let cate=this;
    cate._comercioservice.getsubcategoria()//petición al servicio para obtener las subcategorias de la BD
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;

            if(this.data['status']== false){
              alert("No existen datos en la base de datos")
            }else{
              this.smsubcat=this.data;//se guardan los datos obtenidos en la consulta
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
