import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Heroes } from '../../../service/heroes.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  heroes: any
  constructor(private _heroeService:HeroesService,
    private _router:Router) { }

  ngOnInit(): void {
  }
  buscarHeroe(termino:string){
    console.log(termino);
    this._router.navigate(['/buscar',termino]);

  }
}
