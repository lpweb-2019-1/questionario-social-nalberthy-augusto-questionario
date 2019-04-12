import { Injectable } from '@angular/core';
import {Pessoa} from './Pessoa';

@Injectable({
  providedIn: 'root'
})
export class AtividadeServiceService {
  pessoas:Pessoa[];

  constructor() {this.pessoas = [] }

  salvar(pessoa : Pessoa){
  /*  if (localStorage.getItem('pessoa')){
      var lista=[];
      lista.push(pessoa.nome)
      lista.push(pessoa.sexo)
      lista.push(pessoa.idade)
      lista.push(pessoa.cidade)
  */
    this.pessoas.push(pessoa)
    let pessoas:Pessoa[]=[];
    if(localStorage.getItem('pessoas') === null ){
      pessoas.push(pessoa);
      localStorage.setItem('pessoas', JSON.stringify(pessoas))
    }
    else{
      pessoas = JSON.parse(localStorage.getItem('pessoas'))
      pessoas.push(pessoa)
      localStorage.setItem('pessoas', JSON.stringify(pessoas));
    }

  }
  
  pessoaMaisVelha(){
    let pessoas:Pessoa[]=[];
    let maiorIdade = 0;
    let pessoa:Pessoa= null;
    pessoas = JSON.parse(localStorage.getItem('pessoas'));
    
    
    for(var i=0; i< pessoas.length; i++){
      if(pessoas[i].idade> maiorIdade){
        maiorIdade = pessoas[i].idade;
        pessoa = pessoas[i];
      }
    }
    return pessoa

  }
  pessoaMaisNova(){
    let pessoas:Pessoa[]=[];
    let menorIdade = 120;
    let pessoa:Pessoa= null;
    pessoas = JSON.parse(localStorage.getItem('pessoas'));  
    for(var i=0; i< pessoas.length; i++){
      if(pessoas[i].idade< menorIdade){
        menorIdade = pessoas[i].idade;
        pessoa = pessoas[i];
      }
    }
    return pessoa
  }

  mediaIdadeSexo(sexo){
    let pessoas:Pessoa[]=[];
    let idadeMedia = 0;
    let qtPessoas = 0
    let pessoa:Pessoa= null;
    pessoas = JSON.parse(localStorage.getItem('pessoas'));
    for(var i=0; i< pessoas.length; i++){
      if (pessoas[i].sexo == sexo){
        qtPessoas ++;
        idadeMedia += pessoas[i].idade
      }
    }
    return idadeMedia = idadeMedia/qtPessoas
  }

  mediaIdadeCidade(cidade){
    let pessoas:Pessoa[]=[];
    let idadeMedia = 0;
    let qtPessoas = 0
    let pessoa:Pessoa= null;
    pessoas = JSON.parse(localStorage.getItem('pessoas'));
    for(var i=0; i< pessoas.length; i++){
      if (pessoas[i].cidade == cidade){
        qtPessoas ++;
        idadeMedia += pessoas[i].idade
      }
    }
    return idadeMedia = idadeMedia/qtPessoas
  }

  PorcentagemSexoCidade(cidade,sexo){
    let pessoas:Pessoa[]=[];
    let porcentagem = 0;
    let qtPessoas = 0
    let totalPessoas=0;
    let pessoa:Pessoa= null;
    pessoas = JSON.parse(localStorage.getItem('pessoas'));
    for(var i=0; i< pessoas.length; i++){
      if (pessoas[i].cidade ==  cidade){ 
          totalPessoas ++;
        if(pessoas[i].sexo == sexo){
          qtPessoas ++;
        }
      } 
      
    }
    porcentagem = (qtPessoas*100)/totalPessoas
    return porcentagem
  }


}

