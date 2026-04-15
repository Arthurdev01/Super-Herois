import { Routes } from '@angular/router';
import { SuperHeroDetailComponent } from './super-hero-detail/super-hero-detail.component';
import { SuperHeroCardComponent } from './super-hero-card/super-hero-card.component';

export const routes: Routes = [{path:'heroi/:id', component: SuperHeroDetailComponent}]; //eu criei uma rota que, quando acessada, abre o componente de detalhe passando um id na URL
// a rota abre o componente certo que eh eu  o super hero detail  e ai ele busca esses dados
