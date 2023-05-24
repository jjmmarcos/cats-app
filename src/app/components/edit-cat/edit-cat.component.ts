import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackCat } from 'src/app/models/back-cat.model';
import { CatsBackService } from 'src/app/services/cats-back.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-edit-cat',
  templateUrl: './edit-cat.component.html',
  styleUrls: ['./edit-cat.component.css']
})
export class EditCatComponent {
  catId!: string | null;
  cat!: BackCat;

  constructor(private route: ActivatedRoute,
              private catsBackService: CatsBackService,
              private notificationService: NotificationService) {}

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
    if(id == null) return console.log('getCatById: No Id provided');

     this.cat = await this.catsBackService.getCatById(id);
  }

  async editCat() {
    this.notificationService.showNotification(
      await this.catsBackService.updateCat(this.cat)
    );
  }

  


}
