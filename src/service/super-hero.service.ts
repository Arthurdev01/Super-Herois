import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
// aqui ficam as propriedades

  constructor(private http: HttpClient) {
// aqui você recebe as ferramentas

  }

  //aqui ficam os métodos — funções que fazem trabalho
  getHerois(){
    return this.http.get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json') //aqui estou utilizando o http da minha API, e vinculando um retorno desses dados
    //no meu getHerois, entao que for utilizar ele, vai receber a API
  }

  getHeroisDetails(id: any){
    return this.http.get(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api//id/${id}.json`)// aqui eh uma nova rota usando ID dos personagems de forma dinamica
  }
}

