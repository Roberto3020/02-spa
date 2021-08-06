import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../service/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any ={};
  constructor(public activated:ActivatedRoute,
              public _heroeService:HeroesService) { 

    activated.params.subscribe(params => {
      console.log(params['id']);
      this.heroe = this._heroeService.getHeroe(params['id']);
    });
  }

}
