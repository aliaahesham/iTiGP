import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { category } from '../../../_models/spare-parts/category';
import { SparePart } from 'src/app/_models/spare-parts/spare-parts';
import { making } from '../../../_models/car/making';
import { model } from '../../../_models/car/model';
import { makingService } from '../../cars/making.service';
import { modelService } from '../../cars/model.service';
import { CategoryService } from '../category.service';
import { SparePartsService } from '../spare-parts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EditedProductService } from '../../../shared/EditedProduct.service';
@Component({
  selector: 'app-add-sparePart',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  sparePart: SparePart;
  sparePartById: SparePart;
  categories: category[];
  makings: making[];
  models: model[];
  sparePartForm: FormGroup;
  saleOptions = new FormControl('onSale');
  editedSparePart;
  constructor(
    private categoryService: CategoryService,
    private makingService: makingService,
    private modelService: modelService,
    private sparePartService: SparePartsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private EditedProductService: EditedProductService
  ) {
    this.categories = this.categoryService.getAll();
    this.makings = this.makingService.getAll();
    //this.editFlag = false;
  }

  ngOnInit() {
    this.sparePartForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(70)]),
      categoryId: new FormControl('0', Validators.required),
      makingId: new FormControl('0', Validators.required),
      modelId: new FormControl('0'),
      price: new FormControl('', [Validators.required, Validators.pattern(/^([0-9]*|\d*\.\d{1}?\d*)$/)]),
      discount: new FormControl('', [Validators.pattern(/^([0-9]*|\d*\.\d{1}?\d*)$/)])
    })

    this.saleOptions.valueChanges.subscribe((value) => {
      if (value === 'notOnSale') {
        this.sparePartForm.get('discount').disable();
      } else {
        this.sparePartForm.get('discount').enable();
      }
    })
    this.editedSparePart = this.EditedProductService.GetEditedProduct();
    const id: number = this.editedSparePart.Id;
    this.sparePartById = this.sparePartService.getById(id)
    console.log(this.sparePartById)
    if (this.sparePartById) {
      this.sparePartForm.patchValue({
        name: this.sparePartById.name,
        description: this.sparePartById.description,
        categoryId: this.sparePartById.categoryId,
        makingId: this.sparePartById.makingId,
        modelId: this.sparePartById.modelId,
        price: this.sparePartById.price,
        discount: this.sparePartById.discount
      })
    }

  }
  onSubmit() {
    if (this.sparePartById) {
      //send new spare part after editing
      this.sparePartService.update(this.sparePartById);
      console.log(this.sparePartService.getAll())

    }
    else {
      if (this.sparePartForm.valid) {
        //console.log(this.sparePartForm.value);
        this.sparePart = this.sparePartForm.value as SparePart;
        this.sparePartService.add(this.sparePart);
        this.sparePartForm.reset();
        //console.log(this.sparePartService.getAll());
        //this.router.navigate(['/spareParts']);

      } else {
        //console.log(this.sparePartForm);
        console.log("error");
      }
    }
  }
  onChange(event: Event) {
    const eventTarget = event.target as HTMLTextAreaElement;
    const makingIdUnknown = eventTarget.value as unknown;
    const makingId = makingIdUnknown as number;
    this.models = this.modelService.getBymakingId(makingId);
  }

}
