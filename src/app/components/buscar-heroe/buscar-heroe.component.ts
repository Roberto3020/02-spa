import { Component } from '@angular/core';
import { HeroesService } from '../../service/heroes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html',

})
export class BuscarHeroeComponent{
  heroes:any[] =[]
  terminos:any;
  constructor(public activated:ActivatedRoute,
              public _heroeService:HeroesService) { 
  
      activated.params.subscribe(params => {
      this.terminos =  (params['termino']);
        this.heroes = this._heroeService.buscarHeroe(params['termino']);
        console.log(this.heroes);
      })
    }
  }


