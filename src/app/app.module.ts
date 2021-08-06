import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Routes
import{APP_ROUTING} from './app.ruta';

//Servico

import { HeroesService } from './service/heroes.service';
//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscarHeroeComponent } from './components/buscar-heroe/buscar-heroe.component';
import { HereoeTarjetaComponent } from './components/hereoe-tarjeta/hereoe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscarHeroeComponent,
    HereoeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesComponent,
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
