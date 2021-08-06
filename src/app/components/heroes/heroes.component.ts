import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroes } from '../../service/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroes[] =[];
  constructor( private _heroeService:HeroesService,
               private _router:Router )
   {}

  ngOnInit(): void {
    this.heroes = this._heroeService.getHeroes();
    //console.log(this.heroes);
  }

  verHeroe(idx:number){
    this._router.navigate(['/heroe',idx]);
  }

}


