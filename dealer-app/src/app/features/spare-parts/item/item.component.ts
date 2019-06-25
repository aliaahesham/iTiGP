import { Component, OnInit, Input } from '@angular/core';
import { SparePart } from '../../../_models/spare-parts/spare-parts';
//import { SparePartsService } from '../../spare-parts/spare-parts.service';

@Component({
  selector: 'app-sparePart-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() sparePart: SparePart;
  constructor() { }

  ngOnInit() {
  }
  getPrice() {
    let result: number;
    if (this.sparePart.discount) {
      result = this.sparePart.price - this.sparePart.discount;
    } else {
      result = this.sparePart.price;
    }
    return result;
  }
}
