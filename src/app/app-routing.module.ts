import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { BagComponent } from './bag/bag.component';

const routes: Routes = [
  {path: 'add', component : AddComponent},
  {path: 'bag', component : BagComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
