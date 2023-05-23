import { Component } from '@angular/core';
import { BackCat } from 'src/app/models/back-cat.model';
import { CatsApiService } from 'src/app/services/cats-api.service';
import { CatsBackService } from 'src/app/services/cats-back.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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

  delete(catId: string | undefined) {
    console.log('catId', catId);
  }

  handleImageError(event: any) {
    event.target.src = 'https://media2.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif'; // Ruta de una imagen por defecto que puedes proporcionar
  }
}
