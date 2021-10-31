import { Injectable } from '@angular/core';
import { Alus } from '../models/Alus';
import { CartItem } from '../models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
public cart:CartItem[] = [];

  constructor() {

   }
  
   getCart(){
     return this.cart;
   }
   addToCart(alus: Alus){
    for (const cartItem of this.cart) {
      if(cartItem.alus == alus){
        cartItem.addItem();
        return;
      }
  
    }
      this.cart.push(new CartItem(alus, 1));
   }
   removeFromCart(alus: Alus){
     const index = this.cart.findIndex(cartItem => cartItem.alus == alus);
     if(index!= -1){
        if(this.cart[index].kiekis > 1){
          this.cart[index].removeItem();
        }else{
          this.cart.splice(index, 1);
        }
     }
  }
   inCart(alus:Alus):boolean{
     for (const cartItem of this.cart) {
      if(cartItem.alus == alus){
        return true;
      }
    } return false;

   }

   cartCount(){
     let kiekisCart = 0;
     for (const cartItem of this.cart){
       kiekisCart += cartItem.kiekis;      
     }
     return kiekisCart;
   }
}
