import { Injectable } from '@angular/core';
import { Alus } from '../models/Alus';



@Injectable({
  providedIn: 'root'
})
export class ItemService {
  public items:Alus[]=[];

  constructor() {
    
  this.items.push(new Alus( 1, 'Baltas Melas',
                           'labai skanus, lengvas',
                           '/assets/img/bm.png'));
  this.items.push(new Alus( 2, 'Dvi Sostines',
                           'labai ',
                           '/assets/img/dvi.png'));
  this.items.push(new Alus( 3, 'Kalifornikacija',
                           'labai ',
                           '/assets/img/kal.png'));
  this.items.push(new Alus( 3, 'Niaukas',
                           'labai tamsus ',
                           '/assets/img/niau.png'));
     ;
  
  }
  public getItems(){
    return this.items;
  }
}
