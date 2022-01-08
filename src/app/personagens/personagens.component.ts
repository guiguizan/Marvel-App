import { Component, OnInit } from '@angular/core';
import { Hero, ListaHeroisResponse,  thumbModel } from '../models/heroi.model';
import { PersonagensService } from '../services/peronsagens.service';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css'],
  providers:[
    PersonagensService,
    
  ]
})
export class PersonagensComponent implements OnInit {
  constructor( private PersonagensService: PersonagensService,  ) { }

  cont: number = 1;
  hero: Hero = new Hero();
  herois: ListaHeroisResponse[] = [];
  heroisInfo = [this.hero];


  ngOnInit(): void {
    this.carregaPersonagens();
  }

  
  carregaPersonagens() {
    this.cont = 0;
    this.PersonagensService.getPersonagens().subscribe(
      (result: any) => {
        console.log(result);
        this.herois = result.data.results;
        for (let item of this.herois) { 
          if (this.cont != 0){
            this.hero = new Hero();
          }
          this.hero.path = result.data.results[this.cont].thumbnail.path;
          this.hero.name = result.data.results[this.cont].name;
          this.hero.nomeSerie = result.data.results[this.cont].series.items[0].name;
          if (!this.heroisInfo.includes(this.hero)){
            this.heroisInfo.push(this.hero);
          }
          this.cont = this.cont +1;
        }
        console.log(this.heroisInfo)
        
      },
      (error: Response) => {
        console.log(error);
      }
    )
  }


}
