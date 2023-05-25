import { Component, OnInit } from '@angular/core';
import { BackCat } from 'src/app/models/back-cat.model';
import { CatsBackService } from 'src/app/services/cats-back.service';


@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {
  cats: BackCat[] = [];
  modalOpen: boolean = false;

  constructor(private catsBackService: CatsBackService) {
    
  }

  ngOnInit(): void {
    
  }

  async deleteAllCats() {
    await this.catsBackService.deleteAllCats();    
    this.catsBackService.updateArrayCats([]);
    this.closeModal();
  }

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

}
