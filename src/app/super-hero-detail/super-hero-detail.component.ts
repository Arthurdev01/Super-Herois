import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { SuperHeroService } from '../../service/super-hero.service';
import { SuperHeroCardComponent } from "../super-hero-card/super-hero-card.component";

@Component({
  selector: 'app-super-hero-detail',
  imports: [RouterOutlet,SuperHeroCardComponent],
  templateUrl: './super-hero-detail.component.html',
  styleUrl: './super-hero-detail.component.css'
})
export class SuperHeroDetailComponent implements OnInit {
  heroisDetails: any
  constructor(private route: ActivatedRoute, private superhero:SuperHeroService){
  }

ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id')
  this.superhero.getHeroisDetails(id).subscribe({
     next: (data: any) => this.heroisDetails = data,
     error: (err) => console.error('Error occurred:', err)
  })
}

}
