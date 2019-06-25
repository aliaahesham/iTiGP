import { Component, OnInit, Input } from '@angular/core';
import { making } from '../../../_models/car/making';
import { makingService } from '../../cars/making.service';
import { model } from '../../../_models/car/model';
import { modelService } from '../../cars/model.service';
import { category } from '../../../_models/spare-parts/category';
import { CategoryService } from '../../spare-parts/category.service';
import { SparePart } from '../../../_models/spare-parts/spare-parts';
import { SparePartsService } from '../../spare-parts/spare-parts.service';

@Component({
  selector: 'app-spare-parts',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  makings: making[];
  models: model[];
  categories: category[];
  @Input() allSpareParts: SparePart[];

  constructor(
    private makingService: makingService,
    private modelService: modelService,
    private categoryService: CategoryService,
    private sparePartsService: SparePartsService
  ) {
    this.makings = this.makingService.getAll();
    this.categories = this.categoryService.getAll();
  }

  ngOnInit() {
    if (!this.allSpareParts) {
      this.allSpareParts = this.sparePartsService.getAll();
    }
  }

  makingOnChange(event: Event) {
    const eventTarget = event.target as HTMLTextAreaElement;
    const makingIdUnknown = eventTarget.value as unknown;
    const makingId = makingIdUnknown as number;
    this.models = this.modelService.getBymakingId(makingId);
  }
}
