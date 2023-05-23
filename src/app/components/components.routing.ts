import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

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