import { Component, OnInit, Input } from '@angular/core';
import { Accessories } from 'src/app/_models/accessories/accessories';
import { AccessoriesService } from './../accessories.service';

@Component({
  selector: 'app-item-category',
  templateUrl: './item-category.component.html',
  styleUrls: ['./item-category.component.scss']
})
export class ItemCategoryComponent implements OnInit {
  @Input() accessories:Accessories;
  constructor(private AccessoriesService:AccessoriesService) { }

  ngOnInit() {
  // this.accessories=this.AccessoriesService.getAll();
    //console.log(this.accessories);
  }
 

}
