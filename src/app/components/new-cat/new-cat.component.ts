import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BackCat } from 'src/app/models/back-cat.model';
import { CatsBackService } from 'src/app/services/cats-back.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-new-cat',
  templateUrl: './new-cat.component.html',
  styleUrls: ['./new-cat.component.css']
})
export class NewCatComponent {
  cat: BackCat = {
    img: 'https://cdn.dribbble.com/users/6620596/screenshots/14792345/media/af61fa935b055891cb800a9e41ebb747.gif',
    name: '',
    description: '',
    weight: '',
    temperament: '',
    origin: '',
    life_span: ''
  };
  catForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
              private catsBackService: CatsBackService,
              private notificationService: NotificationService,
              private router: Router) {
    this.catForm = this.formBuilder.group({
      img: ['', [Validators.required, Validators.maxLength(500)]],
      name: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      weight: ['', [Validators.required, Validators.maxLength(10)]],
      temperament: ['', [Validators.required, Validators.maxLength(300)]],
      origin: ['', [Validators.required, Validators.maxLength(50)]],
      life_span: ['', [Validators.required, Validators.maxLength(10)]]
    });
  }

  async newCat() {
    if (!this.catForm.valid) throw new Error('Invalid cat form'); 

      const cat: BackCat = {
        img: this.catForm.get('img')?.value,
        name: this.catForm.get('name')?.value,
        description: this.catForm.get('description')?.value,
        weight: this.catForm.get('weight')?.value,
        temperament: this.catForm.get('temperament')?.value,
        origin: this.catForm.get('origin')?.value,
        life_span: this.catForm.get('life_span')?.value
      };
      
      this.notificationService.showNotification(
        await this.catsBackService.createCat(cat)
      );      

      this.router.navigate(['/home/']);

      console.log(cat);    
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.catForm.get(controlName);
    return !!control?.invalid && (control.dirty || control.touched);
  }

  getErrorMessage(controlName: string): string {
    const control = this.catForm.get(controlName);
  
    if (control && control.hasError('required')) {
      return 'Este campo es requerido.';
    }
  
    if (control && control.hasError('maxlength')) {
      const maxLength = control.getError('maxlength').requiredLength;
      return `El número máximo de caracteres es ${maxLength}.`;
    }
  
    return '';
  }
}
