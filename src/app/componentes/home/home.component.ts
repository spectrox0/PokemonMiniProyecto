import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/servicios/pokefinder';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   pokemones = [];

  constructor(private pokefinder: ServiceService) { }

  ngOnInit() {
   this.pokemones = this.pokefinder.getPokemon();


  }
  }
