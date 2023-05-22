import { Injectable } from '@angular/core';

import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { BackCat } from '../models/back-cat.model';
import { CatsApiService } from './cats-api.service';

@Injectable({
  providedIn: 'root'
})
export class CatsBackService {
  private url: string = 'http://localhost:8080/api/cats';
  private cats: BackCat[] = [];
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  getAllCats(): Promise<BackCat[]> {
    return new Promise<BackCat[]>((resolve, reject) => {
      this.http.get<BackCat[]>(this.url).subscribe(
        (cats) => {
          cats.forEach((cat) => {
            this.cats.push(cat);
          });
          this.cats = cats;
          //console.log('Response getAllCats:', cats);
          resolve(cats);
        },
        (error) => {
          console.log('Error getAllCats: ' + error);
          reject(error);
        }
      );
    });
  }

  createCat(cat: BackCat) {
    this.http.post(this.url, cat, {headers: this.headers}).subscribe( 
      (res) => {
        console.log('Response createCat:', res);
      }, error => {
        console.log('Error createCat: ' + error);
      });
  }

  getCatById(id: string): Promise<BackCat> {
    return new Promise<BackCat>((resolve, reject) => {
      this.http.get<BackCat>(`${this.url}/${id}`).subscribe(
        (catById) => {
          resolve(catById);
        },
        (error) => {
          console.log('Error getCatById: ' + error);
          reject(error);
        }
      )
    }) 
    
  }

  get getCats() {
    return [...this.cats];
  }

}
