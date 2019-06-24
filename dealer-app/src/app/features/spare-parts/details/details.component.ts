import { Component, OnInit } from '@angular/core';
import { SparePart } from '../../../_models/spare-parts/spare-parts';
import { SparePartsService } from '../spare-parts.service';

@Component({
  selector: 'app-sparePart-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(
    private sparePartService: SparePartsService
  ) { }

  ngOnInit() {
  }

}
