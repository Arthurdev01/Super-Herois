import { Component, OnInit } from '@angular/core';
import { Data, RouterOutlet } from '@angular/router';
import { SuperHeroService } from '../service/super-hero.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'super_herois';
  herois: any; //propriedade pertence a uma classe

    constructor(private superhero:SuperHeroService) {
  }

  ngOnInit(): void {
    this.superhero.getHerois().subscribe({ //Observable = algo que entrega dados ao longo do tempo. o Subscribe Quero escutar quando esse dado chegar
  next: (data) => this.herois = data, // aqui basicamente estou pegando o valor que vem da minha api, e salvando ela na minha propriedade herois
  error: (err) => console.error('Error occurred:', err)
})

  }
}
