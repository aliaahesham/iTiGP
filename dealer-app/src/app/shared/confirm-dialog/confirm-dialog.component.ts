import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DeletedProductService } from '../DeletedProduct.service';
import { carService } from '../../features/cars/car.services';
import { AccessoriesService } from '../../features/accessories/accessories.service';
import { SparePartsService } from 'src/app/features/spare-parts/spare-parts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  deletedProduct;
  @Output() reloadDashboard = new EventEmitter();
  constructor(private deletedProductService: DeletedProductService,
    private carService: carService,
    private accessoriesService: AccessoriesService,
    private sparePartsService: SparePartsService,
    private router: Router) { }

  ngOnInit() {
  }
  DeleteProduct(e) {
    this.deletedProduct = this.deletedProductService.GetDeletedProduct();

    if (this.deletedProduct.Kind === 'car') {
      this.carService.delete(this.deletedProduct.Id);
      this.reloadDashboard.emit(true);

    }
    else if (this.deletedProduct.Kind === 'sparePart') {
      this.sparePartsService.delete(this.deletedProduct.Id);
      this.reloadDashboard.emit(true);

    }
    else {
      this.accessoriesService.delete(this.deletedProduct.Id);
      this.reloadDashboard.emit(true);

    }
  }

}
