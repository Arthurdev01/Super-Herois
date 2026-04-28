import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SuperHeroService } from '../../service/super-hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-hero-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './super-hero-list.component.html',
  styleUrl: './super-hero-list.component.css'
})
export class SuperHeroListComponent implements OnInit, AfterViewInit {
  herois: any[] = [];
  busca: string = '';
  filtroPublisher: string = 'todos';

  constructor(
    private superhero: SuperHeroService,
    private router: Router
  ) {}

ngOnInit(): void {
  const buscaSalva = sessionStorage.getItem('buscaHerois');
  const publisherSalvo = sessionStorage.getItem('filtroPublisher');

  if (buscaSalva) {
    this.busca = buscaSalva;
  }

  if (publisherSalvo) {
    this.filtroPublisher = publisherSalvo;
  }

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

heroisFiltrados() {
  return this.herois.filter((heroi: any) => {
    const nomeHeroi = heroi?.name?.toLowerCase() || '';
    const buscaDigitada = this.busca.toLowerCase();

    const passouNaBusca = nomeHeroi.includes(buscaDigitada);

    const publisherHeroi = heroi?.biography?.publisher || '';

    const passouNoPublisher =
      this.filtroPublisher === 'todos' ||
      publisherHeroi === this.filtroPublisher;

    return passouNaBusca && passouNoPublisher;
  });
}

irParaDetails(heroi: any) {
  sessionStorage.setItem('scrollListaHerois', String(window.scrollY));
  sessionStorage.setItem('buscaHerois', this.busca);
  sessionStorage.setItem('filtroPublisher', this.filtroPublisher);

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
