import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Cat } from '../models/cat.model';

@Injectable({
  providedIn: 'root'
})
export class CatsApiService {
  private url: string = 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_c9GP3ryTrfx4brZoyFb34SNM1sbvZVOZXqyeMTyhoe2vIJPEgVPnwfasaUqk3gqx';
  private randomCats: Cat[] = [];
  constructor(private http: HttpClient) { }

  getRandomCats() {
    this.http.get<Cat[]>(this.url)
      .subscribe( (cats) => {
        cats.forEach(cat => {
          console.log(cat);
        });
      });
  }
}
