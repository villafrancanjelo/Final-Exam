import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';

  public Operand1!:number;
  public Operand2!:number;
  public result!:number;

  add(){
    this.result=this.Operand1+this.Operand2;
  }
  sub(){
    this.result=this.Operand1-this.Operand2;
  }
  mul(){
    this.result=this.Operand1*this.Operand2;
  }
  div(){
    this.result=this.Operand1/this.Operand2;
  }
}
