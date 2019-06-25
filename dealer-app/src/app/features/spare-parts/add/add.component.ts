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
import { LoggedInSellerService } from '../../../shared/loggedIn.service';
import { Seller } from 'src/app/_models/seller';
import { BrowserModule } from '@angular/platform-browser'
import { DomSanitizer } from '@angular/platform-browser';

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
  loggedInSeller: Seller;
  fileName: string;
  filePreview: string = "../assets/photoTemplate300px.png";
  constructor(
    private categoryService: CategoryService,
    private makingService: makingService,
    private modelService: modelService,
    private sparePartService: SparePartsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private EditedProductService: EditedProductService,
    private LoggedInSellerService: LoggedInSellerService,
  ) {
    this.categories = this.categoryService.getAll();
    this.makings = this.makingService.getAll();
  }

  ngOnInit() {
    this.loggedInSeller = this.LoggedInSellerService.GetSeller();
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
      const editedSparePart = this.sparePartForm.value as SparePart;
      this.sparePartById.name = editedSparePart.name;
      this.sparePartById.description = editedSparePart.description;
      this.sparePartById.categoryId = editedSparePart.categoryId;
      this.sparePartById.makingId = editedSparePart.makingId;
      this.sparePartById.modelId = editedSparePart.modelId;
      this.sparePartById.price = editedSparePart.price;
      this.sparePartById.discount = editedSparePart.discount;
      this.sparePartService.update(this.sparePartById);
      //console.log(this.sparePartService.getAll());
      console.log(this.sparePartService.getAll())
      this.router.navigateByUrl('/seller/dashboard');

    }
    else {
      if (this.sparePartForm.valid) {
        this.sparePart = this.sparePartForm.value as SparePart;
        this.sparePart.seller = this.loggedInSeller.name;
        this.sparePartService.add(this.sparePart);
        this.sparePartForm.reset();
        this.router.navigateByUrl('/seller/dashboard');
      } else {
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
  onCancel() {
    this.router.navigateByUrl('/seller/dashboard');
  }

}
