import { Component, OnInit } from '@angular/core';
import { SparePart } from '../../../_models/spare-parts/spare-parts';
import { SparePartsService } from '../spare-parts.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';
import { category } from 'src/app/_models/spare-parts/category';
import { making } from 'src/app/_models/car/making';
import { makingService } from '../../cars/making.service';
import { modelService } from '../../cars/model.service';
import { model } from 'src/app/_models/car/model';

@Component({
  selector: 'app-sparePart-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id: number;
  sparePart: SparePart;
  category: category;
  making: making;
  model: model;
  price: number;
  count: number;
  countValue: number;
  constructor(
    private sparePartService: SparePartsService,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private makingService: makingService,
    private modelService: modelService
  ) {
    this.count = 1;
    this.countValue = 1;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.id = +params.id;
        this.sparePart = this.sparePartService.getById(this.id);
      }
    )
    this.category = this.categoryService.getById(this.sparePart.categoryId);
    this.making = this.makingService.getById(this.sparePart.makingId);
    this.model = this.modelService.getById(this.sparePart.modelId);
    this.price = this.sparePartService.getPrice(this.sparePart.id);
  }
  counter(flag: string) {
    if (flag === 'increment') {
      this.count++;
    } else if (flag === 'decrement') {
      this.count--;
    }
    this.countValue = this.count;
  }
}
