import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarHeroeComponent } from './components/buscar-heroe/buscar-heroe.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'buscar/:termino', component: BuscarHeroeComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', pathMatch: 'full',redirectTo:'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
