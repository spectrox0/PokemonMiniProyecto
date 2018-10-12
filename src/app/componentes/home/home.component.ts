import { Component, OnInit } from '@angular/core';
import { DataFinder } from 'src/app/servicios/datafinder';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  coupons: any;
  pokemon = [];

  constructor(private dataFinder: DataFinder) { }

  ngOnInit() {
    this.dataFinder.getJSONDataAsync("./assets/pokemon.json").then(data => {
      this.SetQueryOptionsData(data);
    });
  }
 
  /* Sets data with returned JSON array */
  SetQueryOptionsData(data : any) {
    this.pokemon = data.pokemon;
  }


}
