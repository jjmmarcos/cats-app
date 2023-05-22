import { Component, OnInit } from '@angular/core';
import { CatsApiService } from './services/cats-api.service';
import { CatsBackService } from './services/cats-back.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cats-app';

  constructor(private catsApiService: CatsApiService,
              private catsBackService: CatsBackService) {}

  ngOnInit() {
    this.catsApiService.getRandomCats();

    //this.catsBackService.getAllCats();
  }
}
