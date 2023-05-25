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
  //private url: string = 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_c9GP3ryTrfx4brZoyFb34SNM1sbvZVOZXqyeMTyhoe2vIJPEgVPnwfasaUqk3gqx';
  private url: string = 'https://api.thecatapi.com/v1/breeds';
  
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
      img: `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`,
      name: cat.name,
      description: cat.description,
      weight: cat.weight.metric,
      temperament: cat.temperament,
      origin: cat.origin,
      life_span: cat.life_span
    };
    this.catsBackService.createCat(backCat);
  }

  

  
}
