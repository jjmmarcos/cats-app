import { Component } from '@angular/core';
import { BackCat } from 'src/app/models/back-cat.model';
import { CatsApiService } from 'src/app/services/cats-api.service';
import { CatsBackService } from 'src/app/services/cats-back.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cats: BackCat[] = [];
  modalOpen: boolean = false;
  idCatToDelete: string = '';

  constructor(private catsApiService: CatsApiService,
              private catsBackService: CatsBackService,
              private modalService: NgbModal) {
    this.loadCats();
  }

  ngOnInit() {
    
  }

  async loadCats() {
    await this.catsBackService.getAllCats();
    
    if (this.catsBackService.getCats.length === 0) {
      await this.catsApiService.getRandomCats();
    }
    
    this.cats = this.catsBackService.getCats;
  }

  async deleteCat(catId: string) {
    await this.catsBackService.deleteCat(catId);
    const index = this.cats.findIndex(cat => cat.id === catId);
    if (index !== -1) 
      this.cats.splice(index, 1);
    this.idCatToDelete = '';
    this.closeModal();
  }

  openModal(catId: string | undefined) {
    if(catId === undefined) return;
    this.idCatToDelete = catId; // Asigna el id del gato a la propiedad idCatToDelete
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

  handleImageError(event: any) {
    event.target.src = 'https://media2.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif'; // Ruta de una imagen por defecto que puedes proporcionar
  }
}
