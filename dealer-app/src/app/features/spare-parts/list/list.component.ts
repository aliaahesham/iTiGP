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
  makingId: number;
  modelId: number;
  categoryId: number;
  @Input() allSpareParts: SparePart[];
  //@Input() filteredSpareParts: SparePart[];
  isFiltered: boolean;

  constructor(
    private makingService: makingService,
    private modelService: modelService,
    private categoryService: CategoryService,
    private sparePartsService: SparePartsService
  ) {
    this.makings = this.makingService.getAll();
    this.categories = this.categoryService.getAll();
    this.isFiltered = false;
    this.makingId = 0;
    this.modelId = 0;
    this.categoryId = 0;
  }

  ngOnInit() {
    this.allSpareParts = this.sparePartsService.getFiltered(0, 0, 0);
  }

  /**
   * ngDoCheck() {
    //debugger;
    if (!this.isFiltered) {
      this.allSpareParts = this.sparePartsService.getAll();
    } else {
      //this.allSpareParts = null;
      this.allSpareParts = this.sparePartsService.getFiltered(this.makingId, this.modelId, this.categoryId);
    }
    if (this.makingId != 0 && this.modelId != 0 && this.categoryId != 0) {
      this.isFiltered = true;
    } else {
      this.isFiltered = false;
    }
  }
   */


  makingOnChange(event: Event) {
    const makingIdNum = +(event.target as HTMLTextAreaElement).value;
    this.models = this.modelService.getBymakingId(makingIdNum);
    this.makingId = makingIdNum;
    this.allSpareParts = this.sparePartsService.getFiltered(this.makingId, this.modelId, this.categoryId);
  }

  modelOnChange(event: Event) {
    this.modelId = +(event.target as HTMLTextAreaElement).value;
    this.allSpareParts = this.sparePartsService.getFiltered(this.makingId, this.modelId, this.categoryId);
    /**
     * if (this.modelId != 0) {
      this.isFiltered = true;
    } else {
      this.isFiltered = false
    }
     */

  }

  categoryOnChange(event: Event) {
    this.categoryId = +(event.target as HTMLTextAreaElement).value;
    this.allSpareParts = this.sparePartsService.getFiltered(this.makingId, this.modelId, this.categoryId);
    /**
     * if (this.categoryId != 0) {
      this.isFiltered = true;
    } else {
      this.isFiltered = false
    }
     */

  }


  /**
   * addFilter(filter: {key :string, value :number}) {
    const existedFilter = this.filters.find(f => f.key === filter.key && f.value === filter.value);
    if(!existedFilter) {
      this.filters.push(filter);
    }
  }
   */

}
