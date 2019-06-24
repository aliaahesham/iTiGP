import { Accessories } from 'src/app/_models/accessories/accessories';
import { AccessoriesService } from './../accessories.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
@Component({
  selector: 'app-accessories',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  accessories: Accessories[];
  config: any;
  collection = { count: 30, accessories: [] };
  constructor(private accessoriesService: AccessoriesService) {
    this.accessories = this.accessoriesService.getAll();
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
  ngOnInit() {
    this.accessories = this.accessoriesService.getAll();
    this.config = {
      itemsPerPage: 4,
      currentPage: 1,
      totalItems: this.accessories.length,
    };

  }

}



