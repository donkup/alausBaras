import { Component, OnInit } from '@angular/core';
import { Alus } from 'src/app/models/Alus';
import {CartService} from "../../services/cart.service";
import {ItemService} from "../../services/item.service";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  items?:Alus[];

  constructor(public cartSevice:CartService, public itemService:ItemService) { }

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }

  cartCount(){
    return this.cartSevice.cartCount();
  }

  orderByName(){
    this.items?.sort((a,b) => {
      return a.name.localeCompare(b.name);
    })
  }

  orderByAbv(){
      this.items?.sort((a,b) => {
        /*if (a.abv>b.abv) return 1;
        if (a.abv<b.abv) return -1;
        return 0;*/

        return a.abv-b.abv;
    })
  } 

}
