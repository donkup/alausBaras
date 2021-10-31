import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { ItemComponent } from './components/item/item.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ItemComponent,
    ItemListComponent,
    ItemDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
