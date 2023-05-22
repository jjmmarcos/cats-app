import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DeleteCatComponent } from "./delete-cat/delete-cat.component";
import { EditCatComponent } from "./edit-cat/edit-cat.component";
import { NewCatComponent } from "./new-cat/new-cat.component";


const routes: Routes = [
    {
        path: 'cats',
        component: NewCatComponent,
        children: [
            
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class ComponentsRoutingModule { }