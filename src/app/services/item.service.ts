import { Injectable } from '@angular/core';
import { Alus } from '../models/Alus';



@Injectable({
  providedIn: 'root'
})
export class ItemService {
  public items:Alus[]=[];
  
foodDark=["Zuvimi", "Saslykai"];
  constructor() {
    
  this.items.push(new Alus( 1, 'Baltas Melas',
                           'labai skanus, lengvas',
                           '/assets/img/bm.png',
                           ["Zuvimi", "Saslykai"],
                           5.2, 4.2));
   this.items.push(new Alus( 2, 'Niaukas',
                           'labai tamsus ',
                           '/assets/img/niau.png',
                           this.foodDark,
                           4, 4.2));                          
  this.items.push(new Alus( 3, 'Dvi Sostines',
                           'labai skanus ',
                           '/assets/img/dvi.png',
                           ["Zuvimi", "Kepiniai"],
                           6, 4.2));
  this.items.push(new Alus( 4, 'Kalifornikacija',
                           'labai geras ',
                           '/assets/img/kal.png',
                           ["Zuvimi", "Saslykai"], 4.5, 4.2));
   this.items.push(new Alus( 5, 'Alutis',
                           'labai tamsus ',
                           '/assets/img/niau.png',
                           this.foodDark,
                           4, 4.2));         
  
  }
  public getItems(){
    return this.items;
  }

  public getItemById(id:number):Alus {
    const alus= this.items.find(alus => alus.id == id);
    if (alus!=undefined) return alus;
    return this.items[0];
  }
}
