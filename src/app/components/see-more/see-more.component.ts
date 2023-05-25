import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackCat } from 'src/app/models/back-cat.model';
import { CatsBackService } from 'src/app/services/cats-back.service';

@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.component.html',
  styleUrls: ['./see-more.component.css']
})
export class SeeMoreComponent {
  catId!: string | null;
  cat!: BackCat;

  constructor(private route: ActivatedRoute,
              private catsBackService: CatsBackService) {}

  ngOnInit() {
    this.getParamId();
    this.getCatById(this.catId);
  }

  getParamId() {
    this.route.paramMap.subscribe(params => {
      this.catId = params.get('id');
    });
  }

  async getCatById(id: string | null) {
    if(id == null) return console.log('getCatById: No Id provided');

     this.cat = await this.catsBackService.getCatById(id);
  }
}
