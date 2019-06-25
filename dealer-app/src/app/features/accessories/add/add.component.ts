import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { Accessories } from 'src/app/_models/accessories/accessories';
import { Category } from 'src/app/_models/accessories/category';
import { AccessoriesService } from '../accessories.service';
import { CategoryService } from '../category.service';
import { SellerService } from 'src/app/shared/seller.service';
import { EditedProductService } from '../../../shared/EditedProduct.service';
import { LoggedInSellerService } from '../../../shared/loggedIn.service';
import { Seller } from 'src/app/_models/seller';
@Component({
  selector: 'app-add-accessories',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  accessories: Accessories;
  numOfAllAccessores: Accessories[];
  category: Category[];
  seller: Seller;
  myForm: FormGroup;
  // myName: FormControl;
  // myPrice: FormControl;
  fileName: string;
  filePreview: string = "../assets/photoTemplate300px.png";
  editedSparePart;
  loggedInSeller: Seller;
  constructor(private accessoriesService: AccessoriesService,
    private categoryService: CategoryService,
    private sellerService: SellerService,
    private router: Router,
    private EditedProductService: EditedProductService,
    private LoggedInSellerService: LoggedInSellerService,
  ) { }

  ngOnInit() {
    this.loggedInSeller = this.LoggedInSellerService.GetSeller();

    this.accessories = {};
    this.numOfAllAccessores = this.accessoriesService.getAll();
    this.category = this.categoryService.getAll();

    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(70)]),
      price: new FormControl('', [Validators.required, Validators.pattern(/^([0-9]*|\d*\.\d{1}?\d*)$/)]),
      image: new FormControl(''),
      categoryId: new FormControl('0', Validators.required)
    });

  }

  onSubmit(myForm) {
    if (this.myForm.valid) {

      this.accessories.name = this.myForm.value.name;
      this.accessories.description = this.myForm.value.description;
      this.accessories.price = this.myForm.value.price;
      this.accessories.image = this.myForm.value.image;
      this.accessories.categoryId = this.myForm.value.categoryId;
      this.accessories.seller = this.loggedInSeller.name;

      this.accessoriesService.add(this.accessories);

      console.log(this.accessories);
      console.log(this.numOfAllAccessores);

      this.router.navigateByUrl('/seller/dashboard');

    } else {
      console.log("error");
      console.log(this.myForm);
    }
  }

  onFileChanged(event) {

    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {

        this.fileName = file.name + " " + file.type;
        this.filePreview = 'data:image/png' + ';base64,' + (<string>reader.result).split(',')[1];
      };
    }
  }
  onClick() {
    this.router.navigateByUrl('/seller/dashboard');

  }
}
