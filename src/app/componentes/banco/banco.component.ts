import { Component, OnInit } from '@angular/core';
import { BancoModule } from '../../modelos/banco/banco.module';


@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css']
})
export class BancoComponent implements OnInit {
  
  public banco : BancoModule;

  constructor() { 
    this.banco= new BancoModule("");
  }

  ngOnInit() {}

  onsubmit(){
    console.log(this.banco);
  }

}
