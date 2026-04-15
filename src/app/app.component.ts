import { Component, OnInit } from '@angular/core';
import { Data, Router, RouterOutlet } from '@angular/router';
import { SuperHeroService } from '../service/super-hero.service';
import { CommonModule, NgFor,} from '@angular/common';
import { SuperHeroCardComponent } from "./super-hero-card/super-hero-card.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, NgFor, SuperHeroCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  title = 'super_herois';
  herois: any; //propriedade pertence a uma classe
  heroiSelecionado: any;

    constructor(private superhero:SuperHeroService, private  router: Router) {
  }

  ngOnInit(): void {
    this.superhero.getHerois().subscribe({ //Observable = algo que entrega dados ao longo do tempo. o Subscribe quando chegar o dado, faz alguma coisa
  next: (data: any) => this.herois = data, // aqui basicamente estou pegando o valor que vem da minha api, e salvando ela na minha propriedade herois
  error: (err) => console.error('Error occurred:', err)
})

  }
  //salvarDados(heroi: any ): void { aqui eu basicamente estou pegando o heroi que eu clickei e salvando ele em heroiSelecionado
   // console.log('clicou', heroi); aqui estou testando se o click esta funcionando
    //this.heroiSelecionado = heroi
  //}

  //irParaDetails(heroi: any) { aqui eu basicamente pego o heroi clickado, pego a sua id e mostro ela na minha url virando heroi/id 
  //this.router.navigate(['heroi', heroi.id]);
//}

}
