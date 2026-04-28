import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SuperHeroService } from '../../service/super-hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-hero-list',
  imports: [CommonModule],
  templateUrl: './super-hero-list.component.html',
  styleUrl: './super-hero-list.component.css'
})
export class SuperHeroListComponent implements OnInit, AfterViewInit {
  herois: any;

  constructor(private superhero: SuperHeroService, private router: Router) {}

  ngOnInit(): void {
    this.superhero.getHerois().subscribe({
      next: (data: any) => this.herois = data,
      error: (err) => console.error('Error occurred:', err)
    });
  }

  ngAfterViewInit(): void {
    const scrollSalvo = sessionStorage.getItem('scrollListaHerois');

    if (scrollSalvo) {
      setTimeout(() => {
        window.scrollTo({
          top: Number(scrollSalvo),
          behavior: 'auto'
        });
      }, 200);
    }
  }

  irParaDetails(heroi: any) {
    sessionStorage.setItem('scrollListaHerois', String(window.scrollY));
    this.router.navigate(['heroi', heroi.id]);
  }

  getPowerStats(heroi: any) {
    return [
      { name: 'Inteligência', value: Number(heroi?.powerstats?.intelligence) || 0 },
      { name: 'Força', value: Number(heroi?.powerstats?.strength) || 0 },
      { name: 'Velocidade', value: Number(heroi?.powerstats?.speed) || 0 },
      { name: 'Durabilidade', value: Number(heroi?.powerstats?.durability) || 0 },
      { name: 'Poder', value: Number(heroi?.powerstats?.power) || 0 },
      { name: 'Combate', value: Number(heroi?.powerstats?.combat) || 0 }
    ];
  }
}
