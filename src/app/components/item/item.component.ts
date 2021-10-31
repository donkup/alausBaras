import { Component,
  Input,
  OnInit,
  Output } from '@angular/core';
import { Alus } from 'src/app/models/Alus';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
   @Input()
  public item!: Alus;

  constructor(private cartService:CartService) {

   }
  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.item);
  }
  removeFromCart(){
    this.cartService.removeFromCart(this.item);
  }

  inCart(): boolean{
    return this.cartService.inCart(this.item);
  }


}
