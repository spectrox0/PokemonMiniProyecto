import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServiceService } from 'src/app/servicios/pokefinder';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  coupons: any;
  pokemon = [];
  id: number;
   pokemones = [];

   idtransmit(id:number){
    this.pokefinder.cambiarID(id);
   }

  constructor(private pokefinder: ServiceService) { }

  ngOnInit() {
   this.pokemones = this.pokefinder.getPokemon();
  }

  }
