import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackCat } from 'src/app/models/back-cat.model';
import { CatsBackService } from 'src/app/services/cats-back.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-edit-cat',
  templateUrl: './edit-cat.component.html',
  styleUrls: ['./edit-cat.component.css']
})
export class EditCatComponent implements OnInit {
  catId: string | null = null;
  cat!: BackCat;

  constructor(
    private route: ActivatedRoute,
    private catsBackService: CatsBackService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.getParamId();
    this.getCatById(this.catId);
  }

  getParamId() {
    this.route.paramMap.subscribe(params => {
      this.catId = params.get('id');
      // console.log(this.catId); // Display the value of the 'id' parameter in the console
    });
  }

  async getCatById(id: string | null) {
    if (id === null) {
      console.log('getCatById: No Id provided');
      return;
    }

    this.cat = await this.catsBackService.getCatById(id);
  }

  async editCat() {
    if (this.isValid()) {
      this.notificationService.showNotification(
        await this.catsBackService.updateCat(this.cat)
      );
    }
  }

  isValid(): boolean {
    // Perform your validation logic here
    if (!this.cat.name || !this.cat.description || !this.cat.weight || !this.cat.temperament || !this.cat.origin || !this.cat.life_span) {
      return false;
    }
    return true;
  }
}
