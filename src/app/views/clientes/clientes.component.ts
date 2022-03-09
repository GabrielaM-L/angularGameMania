import { Component, OnInit } from '@angular/core';

declare let nomeDigitado: any;
declare let idadeDigitada: any;
declare let cidadeDigitada: any;
declare let produtoComprado: any;
declare let mensagem: any;

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    function faleConosco() {
      console.log(nomeDigitado);
      console.log(idadeDigitada);
      console.log(cidadeDigitada);
      console.log(produtoComprado);
      console.log(mensagem);
    }
  }

}
