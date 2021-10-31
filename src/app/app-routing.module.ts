import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ItemListComponent } from './components/item-list/item-list.component';

const routes: Routes = [
  {path:'' , component: ItemListComponent},
  {path:'cart' , component: CartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
