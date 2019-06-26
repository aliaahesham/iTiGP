import { Component, OnInit } from '@angular/core';
import { AccessoriesService } from '../accessories.service';
import { Accessories } from 'src/app/_models/accessories/accessories';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {
  accessories:Accessories[];
  constructor(private accessoriesService:AccessoriesService) { 
    this.accessories=this.accessoriesService.getAll();  
  }
  getFilteredAccessoriesbycarcover(id:number){
  return this.accessories.filter(el=>el.categoryId==1)
}
getFilteredAccessoriesbycarcleaning(id:number){
  return this.accessories.filter(el=>el.categoryId==2)
}
getFilteredAccessoriesbywheelcover(id:number){
  return this.accessories.filter(el=>el.categoryId==3)
}
getFilteredAccessoriesbysetcover(id:number){
  return this.accessories.filter(el=>el.categoryId==4)
}

  ngOnInit() {
    this.accessories=this.accessoriesService.getAll();
  }

}
