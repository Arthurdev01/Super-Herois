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
    return this.http.get('/api/api/8cc84fa7a7174f633ad1ad83c55ed1b1/10') //aqui estou utilizando o http da minha API, e vinculando um retorno desses dados
    //no meu getHerois, entao que for utilizar ele, vai receber a API
    // return this.http.get('https://superheroapi.com/ids.html')

  }
}

