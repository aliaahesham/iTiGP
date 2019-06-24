import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { category } from '../../../_models/spare-parts/category';
import { SparePart } from 'src/app/_models/spare-parts/spare-parts';
import {CategoryService} from '../category.service';
import { SparePartsService } from '../spare-parts.service';

@Component({
  selector: 'app-add-sparePart',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  sparePart: SparePart;
  categories: category[];
  sparePartForm: FormGroup;
  saleOptions = new FormControl('onSale');
  constructor(
    private categoryService: CategoryService,
    private sparePartService: SparePartsService
  ) {
    this.categories = this.categoryService.getAll();
  }

  ngOnInit() {
    this.sparePartForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      'description': new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(70)]),
      'categoryId': new FormControl('', Validators.required),
      'price': new FormControl('', [Validators.required, Validators.pattern(/^([0-9]*|\d*\.\d{1}?\d*)$/)]),
      'discount': new FormControl('', [Validators.pattern(/^([0-9]*|\d*\.\d{1}?\d*)$/)])
    })

    this.saleOptions.valueChanges.subscribe((value) => {
      if (value === 'notOnSale') {
        this.sparePartForm.get('sparePartDiscount').disable();
      } else {
        this.sparePartForm.get('sparePartDiscount').enable();
      }
    })
  }
  onSubmit() {
    if (this.sparePartForm.valid) {
      console.log(this.sparePartForm.value);
      this.sparePart = this.sparePartForm.value as SparePart;
      this.sparePartService.add(this.sparePart);
      this.sparePartForm.reset();
      console.log(this.sparePartService.getAll());
    } else {
      console.log(this.sparePartForm);
      console.log("error");
    }
  }
}
