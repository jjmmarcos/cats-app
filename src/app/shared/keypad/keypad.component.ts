import { Component } from '@angular/core';
import { BackCat } from 'src/app/models/back-cat.model';
import { CatsBackService } from 'src/app/services/cats-back.service';


@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent {
  cats: BackCat[] = [];

  constructor(private catsBackService: CatsBackService) {
    this.cats = catsBackService.cats;
  }

  orderBy(property: string) {
    this.cats.sort((a, b) => {
      const propA = a[property];
      const propB = b[property];
      if (propA !== undefined && propB !== undefined) {
        return propA > propB ? 1 : -1;
      }
      return 0;
    });
    //this.catsBackService.cats = this.cats;
  }
  
  

  deleteAllCats() {
    
  }  

}
