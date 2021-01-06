import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AddComponent } from './add/add.component';
import { BagComponent } from './bag/bag.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {ShowbagsComponent} from './showbags/showbags.component'

const routes: Routes = [
  {path: 'add', component : AddComponent},
  {path: 'bag', component : BagComponent},
  {path: 'Checkout', component : CheckoutComponent},
  {path: 'show', component : ShowbagsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
