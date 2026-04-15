import { Component, Input } from '@angular/core';
import { SuperHeroService } from '../../service/super-hero.service';

@Component({
  selector: 'app-super-hero-card',
  imports: [],
  templateUrl: './super-hero-card.component.html',
  styleUrl: './super-hero-card.component.css'
})
export class SuperHeroCardComponent {
@Input() heroi: any = null // aqui ele basicamente recebe o heroi de fora 
}
