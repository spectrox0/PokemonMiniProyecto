import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from 'src/app/servicios/pokefinder';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  pokemon = [];
  pokemones = [];

    @Input('id') public id;

 constructor(private pokefinder: ServiceService) { }

 ngOnInit() {
  this.pokemones = this.pokefinder.getPokemon();


 }

}
