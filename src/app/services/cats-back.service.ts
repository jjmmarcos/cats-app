import { Component, Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BackCat } from '../models/back-cat.model';
import { NotificationService } from './notification.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatsBackService {
  private url: string = 'http://localhost:8080/api/cats';
  private cats: BackCat[] = [];
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  constructor(private http: HttpClient,
    private notificationService: NotificationService) { }

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
        });
    });    
  }

  updateCat(cat: BackCat): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.http.put(`${this.url}/${cat.id}`, cat, {headers: this.headers}).subscribe(
        (res) => {
          console.log('UpdateCat: ' + res);
          resolve('Cat updated successfully');
        }, 
        (error) => {
          console.log('Error updateCat: ' + error);
          reject('Error updating cat');
        });
    });
  }

  deleteCat(id: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.http.delete(`${this.url}/${id}`, {headers: this.headers}).subscribe(
        (res) => {
          console.log('DeleteCat:', res);
          resolve('Cat deleted successfully');
        },
        (error) => {
          console.log('Error deleting cat', error);
          reject('Error deleting cat');
        });
    });
  }

  get getCats() {
    return [...this.cats];
  }

}
