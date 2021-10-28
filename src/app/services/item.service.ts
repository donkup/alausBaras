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
                           '../../../assets/img/bm.png'));
     ;
  }
}
