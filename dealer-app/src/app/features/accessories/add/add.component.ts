import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Accessories } from 'src/app/_models/accessories/accessories';
import { Category } from 'src/app/_models/accessories/category';
import { AccessoriesService } from '../accessories.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-add-accessories',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  accessories: Accessories;
  category: Category;
  myForm: FormGroup;
  myName: FormControl;
  myPrice: FormControl;

  constructor(private accessoriesService: AccessoriesService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
  }

}
