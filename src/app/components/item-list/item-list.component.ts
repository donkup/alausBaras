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

}
