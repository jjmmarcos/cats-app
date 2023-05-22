import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NewCatComponent } from './components/new-cat/new-cat.component';
import { EditCatComponent } from './components/edit-cat/edit-cat.component';
import { DeleteCatComponent } from './components/delete-cat/delete-cat.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCatComponent,
    EditCatComponent,
    DeleteCatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
