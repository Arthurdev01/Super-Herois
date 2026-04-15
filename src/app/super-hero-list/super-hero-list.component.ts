import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SuperHeroService } from '../../service/super-hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-hero-list',
  imports: [CommonModule],
  templateUrl: './super-hero-list.component.html',
  styleUrl: './super-hero-list.component.css'
})
export class SuperHeroListComponent implements OnInit{
herois : any

constructor(private superhero:SuperHeroService, private router:Router){
}

ngOnInit(): void {
  this.superhero.getHerois().subscribe({ //Observable = algo que entrega dados ao longo do tempo. o Subscribe quando chegar o dado, faz alguma coisa
    next: (data: any) => this.herois = data, // aqui basicamente estou pegando o valor que vem da minha api, e salvando ela na minha propriedade herois
    error: (err) => console.error('Error occurred:', err)
  })
}

irParaDetails(heroi: any){
  this.router.navigate(['heroi', heroi.id]);
}
}
