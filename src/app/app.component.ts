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
  ngOnInit(): void {
    
  }
  title = 'cats-app';
  
}
