import { EventEmitter, Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BackCat } from '../models/back-cat.model';

@Injectable({
  providedIn: 'root'
})
export class CatsBackService {
  private url: string = 'http://localhost:8080/api/cats';
  private _cats: BackCat[] = [];
  public catsUpdated: EventEmitter<any[]> = new EventEmitter<BackCat[]>();
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
          resolve(cats);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  createCat(cat: BackCat): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.http.post(this.url, cat, {headers: this.headers}).subscribe( 
        (res) => {
          resolve('Cat created successfully');
        }, (error) => {
          reject('Error creating cat');
        });
    });
  }

  getCatById(id: string): Promise<BackCat> {
    return new Promise<BackCat>((resolve, reject) => {
      this.http.get<BackCat>(`${this.url}/${id}`).subscribe(
        (catById) => {
          resolve(catById);
        },
        (error) => {
          reject(error);
        });
    });    
  }

  updateCat(cat: BackCat): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.http.put(`${this.url}/${cat.id}`, cat, {headers: this.headers}).subscribe(
        (res) => {
          resolve('Cat updated successfully');
        }, 
        (error) => {
          reject('Error updating cat');
        });
    });
  }

  deleteCat(id: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.http.delete(`${this.url}/${id}`, {headers: this.headers}).subscribe(
        (res) => {
          resolve('Cat deleted successfully');
        },
        (error) => {
          reject('Error deleting cat');
        });
    });
  }

  deleteAllCats(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.http.delete<string>(`${this.url}/deleteAll`, {headers: this.headers}).subscribe(
        (res) => {
          resolve(res);
        }, 
        (error) => {
          reject(error);
        });
    });
  }

  updateArrayCats(newCats: any[]) {
    this.cats = newCats;
    this.catsUpdated.emit(this.cats);
  }

  get cats(): BackCat[] {
    return [...this._cats];
  }

  set cats(cats: BackCat[]) {
    this._cats = cats;
  }

}
