import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { SuperHeroService } from '../../service/super-hero.service';
import { SuperHeroCardComponent } from "../super-hero-card/super-hero-card.component";

@Component({
  selector: 'app-super-hero-detail',
  imports: [SuperHeroCardComponent],
  templateUrl: './super-hero-detail.component.html',
  styleUrl: './super-hero-detail.component.css'
})
export class SuperHeroDetailComponent implements OnInit {
  heroisDetails: any // guardar dados do heroi
  constructor(private route: ActivatedRoute, private superhero:SuperHeroService){ // aqui estou usando o route para pegar informaçoes da url e superhero pra chamar a api
  }

ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id') // pego o id da url
  this.superhero.getHeroisDetails(id).subscribe({ // aqui eu mando ele me trazer o heroi com aquele ID
     next: (data: any) => this.heroisDetails = data, // aqui quando dados chegam eu salvo ele em herois details, que esta no meu html que manda para o card mostrar na tela
     error: (err) => console.error('Error occurred:', err)
  })
}

}
