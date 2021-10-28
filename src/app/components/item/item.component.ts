import { Component,
  Input,
  OnInit,
  Output } from '@angular/core';
import { Alus } from 'src/app/models/Alus';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
   @Input()
  public item!: Alus;

  constructor() { }

  ngOnInit(): void {
  }

}
