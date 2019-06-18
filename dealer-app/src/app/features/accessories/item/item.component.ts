import { AccessoriesService } from './../accessories.service';
import { Accessories } from './../../../_models/accessories/accessories';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accessories-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
@Input() myItemAccessories:Accessories[];
  constructor(private AccessoriesService:AccessoriesService) { }

  ngOnInit() {
    this.myItemAccessories=this.AccessoriesService.getAll();
    console.log(this.myItemAccessories);
  }

}
