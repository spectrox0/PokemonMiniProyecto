import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from 'src/app/servicios/pokefinder';
import { Pokemon } from 'src/app/pokemon';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  pokemon : Pokemon;
  pokemones = [];
  evol: boolean = false;
  id:number;
  evoluciones = [];
  tipos = [];

 constructor(private pokefinder: ServiceService) { }

 ngOnInit() {
  this.pokemones = this.pokefinder.getPokemon();
  this.id = this.pokefinder.id - 1;
  this.pokemon = this.pokemones[this.id];
  this.tipos = this.pokemon.types;
  if(this.pokemon.evolutions.length > 0){
    this.evol = true;
    this.evoluciones = this.pokemon.evolutions;
  }
 }

}
