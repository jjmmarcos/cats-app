import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCatComponent } from './edit-cat/edit-cat.component';
import { NewCatComponent } from './new-cat/new-cat.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { SeeMoreComponent } from './see-more/see-more.component';



@NgModule({
  declarations: [
    EditCatComponent,
    HomeComponent,
    NewCatComponent,
    SeeMoreComponent
  ],
  exports: [
    EditCatComponent,
    HomeComponent,
    NewCatComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule 
  ]
})
export class ComponentsModule { }
