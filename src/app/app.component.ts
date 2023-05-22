import { Component, OnInit } from '@angular/core';
import { CatsApiService } from './services/cats-api.service';
import { CatsBackService } from './services/cats-back.service';
import { BackCat } from './models/back-cat.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cats-app';
  cats: BackCat[] = [];
  constructor(private catsApiService: CatsApiService,
              private catsBackService: CatsBackService) {
    this.loadCats();
  }

  ngOnInit() {
    
  }

  async loadCats() {
    await this.catsBackService.getAllCats();
    
    if (this.catsBackService.getCats.length === 0) {
      await this.catsApiService.getRandomCats();
    }
    
    this.cats = this.catsBackService.getCats;
  }
}
