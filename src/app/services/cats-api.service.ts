import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ApiCat } from '../models/api-cat.model';
import { BackCat } from '../models/back-cat.model';
import { CatsBackService } from './cats-back.service';

@Injectable({
  providedIn: 'root'
})
export class CatsApiService {
  private url: string = 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_c9GP3ryTrfx4brZoyFb34SNM1sbvZVOZXqyeMTyhoe2vIJPEgVPnwfasaUqk3gqx';
  constructor(private http: HttpClient,
              private catsBackService: CatsBackService) { }

  getRandomCats(): Promise<ApiCat[]>  {
    return new Promise<ApiCat[]>((resolve, reject) => {
      this.http.get<ApiCat[]>(this.url).subscribe( 
        (cats) => {
        cats.forEach(cat => {
          this.createCat(cat);          
        });
        resolve(cats);
      }, (error) => {
        reject(error);
      });
    });
    
  }

  createCat(cat: ApiCat) {
    const backCat: BackCat = {
      img: cat.url,
      name: cat.breeds[0].name,
      description: cat.breeds[0].description,
      weight: cat.breeds[0].weight.metric,
      temperament: cat.breeds[0].temperament,
      origin: cat.breeds[0].origin,
      life_span: cat.breeds[0].life_span
    };
    this.catsBackService.createCat(backCat);
  }

  

  
}
