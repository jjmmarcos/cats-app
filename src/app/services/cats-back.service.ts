import { Injectable } from '@angular/core';

import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatsBackService {
  private url: string = 'http://localhost:8080/api/cats';
  private cats: any;

  constructor(private http: HttpClient) { }

  getAllCats() {
    this.http.get(this.url)
      .subscribe((res) => {
        console.log(res);
      });
  }

}
