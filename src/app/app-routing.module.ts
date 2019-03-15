import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomElementsComponent } from './custom-elements/custom-elements.component';

const routes: Routes = [
   { path: '', component: CustomElementsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
