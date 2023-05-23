import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditCatComponent } from './components/edit-cat/edit-cat.component';
import { ComponentsRoutingModule } from './components/components.routing';
import { NewCatComponent } from './components/new-cat/new-cat.component';
import { HomeComponent } from './components/home/home.component';
import { SeeMoreComponent } from './components/see-more/see-more.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'info/:id', component: SeeMoreComponent },
  { path: 'new', component: NewCatComponent },
  { path: 'edit/:id', component: EditCatComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
