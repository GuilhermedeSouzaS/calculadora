import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {

  public teclas: string[] = ['AC', '%', '*', '/', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '=', ',', '0', '+/-'];
  public visor: any = '';


  public funcoes = (tecla: string) => {
    if(tecla === '=') {
      this.visor = eval(this.visor);
    } else if (tecla === 'AC') {
      this.visor = '';
    } else {
      this.guardaTecla(tecla);
    }


  }

  guardaTecla(tecla: string): void   {
    this.visor += tecla;

  }

}
