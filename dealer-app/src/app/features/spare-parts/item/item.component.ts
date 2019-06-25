import { Component, OnInit, Input } from '@angular/core';
import { SparePart } from '../../../_models/spare-parts/spare-parts';
import { SparePartsService } from '../spare-parts.service';
import { NumberValueAccessor } from '@angular/forms';
//import { SparePartsService } from '../../spare-parts/spare-parts.service';

@Component({
  selector: 'app-sparePart-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() sparePart: SparePart;
  price: number;
  constructor(
    private sparePartsService: SparePartsService
  ) { }

  ngOnInit() {
    this.price = this.sparePartsService.getPrice(this.sparePart.id);
  }
}
