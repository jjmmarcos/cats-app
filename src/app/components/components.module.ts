import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteCatComponent } from './delete-cat/delete-cat.component';
import { EditCatComponent } from './edit-cat/edit-cat.component';
import { NewCatComponent } from './new-cat/new-cat.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DeleteCatComponent,
    EditCatComponent,
    HomeComponent,
    NewCatComponent
  ],
  exports: [
    DeleteCatComponent,
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
