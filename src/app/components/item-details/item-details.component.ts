import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alus } from 'src/app/models/Alus';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
public alus!: Alus;

  constructor(private route:ActivatedRoute, private itemService:ItemService) {
   }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.alus = this.itemService.getItemById(id);
  }

}
