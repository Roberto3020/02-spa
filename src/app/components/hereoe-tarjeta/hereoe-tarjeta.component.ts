
import { NgIf } from '@angular/common';
import { Component, OnInit,Input,EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hereoe-tarjeta',
  templateUrl: './hereoe-tarjeta.component.html'
  
})
export class HereoeTarjetaComponent implements OnInit {

   @Input() heroe:any ={}
   @Input() index?:number;
   @Output() heroesSelecionados:EventEmitter< number>;

  constructor(private _router:Router ) {
                this.heroesSelecionados = new EventEmitter()
               }

  ngOnInit(): void {
  }
  verHeroe(){
    //console.log(this.index);
    this._router.navigate(['/heroe',this.index]);
    //this.heroesSelecionados.emit(this.index);
  }

}
