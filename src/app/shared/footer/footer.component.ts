import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  telefono = '+34 637 60 36 74';
  email = 'javier@gmail.com';
  direccion = '123 Calle Principal, Ciudad';
}
