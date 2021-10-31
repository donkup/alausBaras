import {Alus} from './Alus'

export class CartItem{
    public constructor(public alus:Alus, public kiekis: number){
        
    }
    addItem(){
        return this.kiekis++;
    }
    removeItem(){
        return this.kiekis--;
    }
}