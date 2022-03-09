import { Component, OnInit } from '@angular/core';

declare let nome: any;
declare let telefone: any;
declare let email: any;
declare let assunto: any;
declare let descricao: any;

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    function cadastroDepoimento() {
      console.log(nome);
      console.log(telefone);
      console.log(email);
      console.log(assunto);
      console.log(descricao);
    }
  }
  

}
