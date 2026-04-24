import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-super-hero-card',
  imports: [CommonModule],
  templateUrl: './super-hero-card.component.html',
  styleUrl: './super-hero-card.component.css'
})
export class SuperHeroCardComponent {
  @Input() heroi: any = null;

  get powerStats() {
    return [
      {
        name: 'Inteligência', value: Number(this.heroi?.powerstats?.intelligence) || 0
      },
      {
        name: 'Força', value: Number(this.heroi?.powerstats?.strength) || 0
      },
      {
        name: 'Velocidade', value: Number(this.heroi?.powerstats?.speed) || 0
      },
      {
        name: 'Durabilidade', value: Number(this.heroi?.powerstats?.durability) || 0
      },
      {
        name: 'Poder', value: Number(this.heroi?.powerstats?.power) || 0
      },
      {
        name: 'Combate', value: Number(this.heroi?.powerstats?.combat) || 0
      }
    ];
  }
get appearance() {
  return [
    {
      name: 'Gênero',
      value: this.heroi?.appearance?.gender || 'Não informado'
    },
    {
      name: 'Raça',
      value: this.heroi?.appearance?.race || 'Não informado'
    },
    {
      name: 'Altura',
      value: this.heroi?.appearance?.height?.[1] || 'Não informado'
    },
    {
      name: 'Peso',
      value: this.heroi?.appearance?.weight?.[1] || 'Não informado'
    },
    {
      name: 'Olhos',
      value: this.heroi?.appearance?.eyeColor || 'Não informado'
    },
    {
      name: 'Cabelo',
      value: this.heroi?.appearance?.hairColor || 'Não informado'
    }
  ];
}
get biografia() {
  return [
    {
      name: 'Nome completo', value: this.heroi?.biography?.fullName || 'Não informado'
    },
    {
      name: 'Alter ego', value: this.heroi?.biography?.alterEgos || 'Não informado'
    },
    {
      name: 'Apelidos', value: this.heroi?.biography?.aliases || 'Não informado'
    },
    {
      name: 'Nascimento', value: this.heroi?.biography?.placeOfBirth || 'Não informado'
    },
    {
      name: 'Primeira aparição', value: this.heroi?.biography?.firstAppearance || 'Não informado'
    },
    {
      name: 'Editora', value: this.heroi?.biography?.publisher || 'Não informado'
    },
    {
    name: 'Alinhamento', value: this.heroi?.biography?.alignment || 'Não informado'
  }
  ];
}
get trabalho() {
  return [
    {
      name: 'Ocupação', value: this.heroi?.work?.occupation || 'Não informado'
    },
    {
      name: 'Base', value: this.heroi?.work?.base || 'Não informado'
    }
  ];
}
get conexoes() {
  return [
    {
      name: 'Grupo', value: this.heroi?.connections?.groupAffiliation || 'Não informado'
    },
    {
      name: 'Parentes', value: this.heroi?.connections?.relatives || 'Não informado'
    }
  ];
}
}




