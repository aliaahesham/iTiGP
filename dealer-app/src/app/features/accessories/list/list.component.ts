import { AccessoriesService } from './../accessories.service';
import { Accessories } from './../../../_models/accessories/accessories';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accessories',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
 @Input() accessories:Accessories[];
   
  constructor(private accessoriesService:AccessoriesService) { }

  ngOnInit() {
    this.accessories=this.accessoriesService.getAll();
    console.log(this.accessories);
  }
}
