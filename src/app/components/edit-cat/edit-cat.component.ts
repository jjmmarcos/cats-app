import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-cat',
  templateUrl: './edit-cat.component.html',
  styleUrls: ['./edit-cat.component.css']
})
export class EditCatComponent {
  catId!: string | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.catId = params.get('id');
      console.log(this.catId); // Display the value of the 'id' parameter in the console
    });
  }


}
