import { Component } from '@angular/core';
import {AtividadeServiceService } from './atividade-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private atividade:AtividadeServiceService) {

   }

  nome = null;
  sexo = null;
  idade = null;
  cidade = null;
  listaCidades = ["Palmas","Paraiso","Gurupi","Miracema"]


  salvar() {
    const pessoa = {
      nome: this.nome, 
      sexo: this.sexo, 
      idade:this.idade, 
      cidade: this.cidade,
    };
    this.atividade.salvar(pessoa);
    this.nome = null;
    this.sexo = null;
    this.idade = null;
    this.cidade = null;
  }


}


