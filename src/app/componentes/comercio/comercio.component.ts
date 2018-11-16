import { Component, OnInit } from '@angular/core';
import { ComercioModule } from '../../modelos/comercio/comercio.module';
import { ComercioService } from '../../servicios/comercio.service';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';


@Component({
  selector: 'app-comercio',
  templateUrl: './comercio.component.html',
  styleUrls: ['./comercio.component.css'],
  providers: [ComercioService]
})
export class ComercioComponent implements OnInit {
  sc: any;//variable para guardar la selección de categorias del formulario
  sp: any;//variable para guardar la selección del pais del formulario
  scd: any;//variable para guardar la selección del departmento del formulario
  data: any[];
  sregimen : any[];//variable para guardar los regimen de la BD
  siva : any[]; //variable para guardar los iva de la BD
  srol : any[];//variable para guardar los roles de la BD
  scategoria : any[];//variable para guardar las categorias de al BD
  spais : any[];//variable para guardar los paises de al BD
  ssubcategoria : any[];//variable para guardar las subcategorias de al BD
  sdepartamento : any[];//variable para guardar los departamentos de al BD
  sciudad : any[];//variable para guardar las ciudades de al BD
  
  public comercio: ComercioModule;//objeto de conexión con el modelo

  constructor(
    private _comercioservice: ComercioService//objeto de conexión con el servicio
  ) { 
    this.comercio = new ComercioModule("","","","","","","","","","","","","","","","","","","","","","","","","","","","");
  }

  ngOnInit(){
    this.rol();//inicialización del metodo
    this.categoria();//inicialización del metodo
    this.pais();//inicialización del metodo
    this.regimen();//inicialización del metodo
    this.iva();//inicialización del metodo
    
   
    
  }

  //metodo para insertar
  onsubmit(formcomercio: NgForm){
    let vm = this;
    vm._comercioservice.addcomercio(vm.comercio)//petición al servicio para enviar los datos a insertar
    .subscribe(
      res => {
        swal({
          type: 'success',
          title: 'Datos guardados correctamente',
          /*text: '',
          footer: '<a href>Why do I have this issue?</a>'*/
        })
        formcomercio.reset();//se resetea el formualrio
        
      },
      err =>{
        alert("Error al guardar en la base de datos")
        console.log(err);
      } 
    ) 
  }

  //metodo para saber la selección de la categoria
  onSelection(){
    this.sc= this.comercio.catc;
    if(this.sc!=0){
      this.sb(this.sc);//lamada al metodo buscar las subcategorias según la categoria
    }else{
      alert("Error en la elección de categoria");
    }
  }

  //metodo buscar subcategorias según la categoria
  sb(sc){
    let cate=this;
    cate._comercioservice.getsubcategoriaopcional(sc)//petición al servicio para obtener las subcategorias según la categoria seleccionada
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              swal({
                type: 'error',
                title: 'No hay subcategorias para esta opción',
                /*text: '',
                footer: '<a href>Why do I have this issue?</a>'*/
              })
            }else{
              this.ssubcategoria=this.data;//se guardan los datos obtenidos en la consulta
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

  //metodo para ver que país seleccionaron
  onSelectionpais(){
    this.sp= this.comercio.npais;
    if(this.sp!=0){
      this.sd(this.sp);//llamada al metodo buscar departamento
    }else{
      alert("Error al elegir el país");
    }
  }

  //metodo buscar departamento 
  sd(sp){
    let pais=this;
    pais._comercioservice.getpaisopcional(sp)//petición al servicio para obtener los departamentos según el país seleccionado
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
              this.sdepartamento=this.data;//se guardan los datos obtenidos de la consulta
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
  
  //metodo para saber que departamento seleccionaron
  onSelectiondepartamento(){
    this.scd= this.comercio.ndep;
    if(this.scd!=0){
      this.scity(this.scd);//llaamada al metodo buscar ciudad
    }else{
      alert("Error al elegir el departamento");
    }
  }

  //metodo buscar ciudad
  scity(scd){
    
    let dpto=this;
    dpto._comercioservice.getciudadopcional(scd)//petición al servicio para buscar las ciudades segun el departamento seleccionado
    .subscribe(
      result => {
          if(result.code != 200){
                       
            this.data=JSON.parse(result);
            
            if(this.data['status']== false){
              swal({
                type: 'error',
                title: 'No hay ciudades para esta opción',
                /*text: '',
                footer: '<a href>Why do I have this issue?</a>'*/
              })
            }else{
              this.sciudad=this.data;//se guardan los datos obtenidos en la consulta
            }
          }else{
              dpto = result.data;
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
              swal({
                type: 'error',
                title: 'No hay regimen en la base de datos',
                /*text: '',
                footer: '<a href>Why do I have this issue?</a>'*/
              })
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
              swal({
                type: 'error',
                title: 'No hay iva en la base de datos',
                /*text: '',
                footer: '<a href>Why do I have this issue?</a>'*/
              })
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

  //metodo buscar roles
  rol(){
    let cate=this;
    cate._comercioservice.getrol()//petición al servicio para obtener los roles de la BD
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;

            if(this.data['status']== false){
              swal({
                type: 'error',
                title: 'No hay roles en la base de datos',
                /*text: '',
                footer: '<a href>Why do I have this issue?</a>'*/
              })
            }else{
              this.srol=result;//se guardan los datos obtenidos en la consulta
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

  //metodo buscar categorias
  categoria(){
    let cate=this;
    cate._comercioservice.getcategoria()//petición al servicio para obtener las categorias de la BD
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;

            if(this.data['status']== false){
              swal({
                type: 'error',
                title: 'No hay categorias en la base de datos',
                /*text: '',
                footer: '<a href>Why do I have this issue?</a>'*/
              })
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

  //metodo busca país
  pais(){
    let cate=this;
    cate._comercioservice.getpais()//petición al servicio para obtener los paises de la BD
    .subscribe(
      result => {
          if(result.code != 200){
            this.data=result;

            if(this.data['status']== false){
              swal({
                type: 'error',
                title: 'No hay paises en la base de datos',
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

  
  
  
}
