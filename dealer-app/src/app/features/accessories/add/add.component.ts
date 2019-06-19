import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { Accessories } from 'src/app/_models/accessories/accessories';
import { Category } from 'src/app/_models/accessories/category';
import { Seller } from 'src/app/_models/seller';
import { AccessoriesService } from '../accessories.service';
import { CategoryService } from '../category.service';
import { SellerService } from 'src/app/shared/seller.service';

@Component({
  selector: 'app-add-accessories',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  accessories: Accessories;
  numOfAllAccessores: Accessories[];
  category: Category[];
  seller: Seller[];
  myForm: FormGroup;
  // myName: FormControl;
  // myPrice: FormControl;

  constructor(private accessoriesService: AccessoriesService,
    private categoryService: CategoryService,
    private sellerService: SellerService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.accessories = {};
    this.numOfAllAccessores = this.accessoriesService.getAll();
    this.category = this.categoryService.getAll();
    this.seller = this.sellerService.GetAll();

    this.myForm = new FormGroup({
      code: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
      price: new FormControl('', Validators.required),
      image: new FormControl(''),
      sellerId: new FormControl('', Validators.required),
      categoryId: new FormControl('', Validators.required)
    });

  }

  onSubmit(myForm) {
    // console.log(this.myForm);
    // const num = this.numOfAllAccessores.length - 1
    // let tst = 8;
    // console.log(this.numOfAllAccessores[num].id);
    // console.log(tst);
    // this.accessories.id = 9;
    // console.log(this.accessories.id);

    this.accessories.code = this.myForm.value.code;
    this.accessories.name = this.myForm.value.name;
    this.accessories.description = this.myForm.value.description;
    this.accessories.price = this.myForm.value.price;
    this.accessories.image = this.myForm.value.image;
    this.accessories.sellerId = this.myForm.value.sellerId;
    this.accessories.categoryId = this.myForm.value.categoryId;

    this.accessoriesService.add(this.accessories);

    console.log(this.accessories);
    console.log(this.numOfAllAccessores);

    // this.router.navigate(['/accessory']);
  }
}
