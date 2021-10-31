import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
public cart?: CartItem [];

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart(); 
  }


}
