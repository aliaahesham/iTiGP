import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Seller } from 'src/app/_models/seller';
import { car } from 'src/app/_models/car/car';
import { SparePart } from 'src/app/_models/spare-parts/spare-parts';
import { Accessories } from 'src/app/_models/accessories/accessories';
import { carService } from '../../../features/cars/car.services';
import { AccessoriesService } from '../../../features/accessories/accessories.service';
import { SparePartsService } from '../../../features/spare-parts/spare-parts.service';

@Component({
  selector: 'app-products-data',
  templateUrl: './products-data.component.html',
  styleUrls: ['./products-data.component.scss']
})
export class ProductsDataComponent implements OnInit {
  @Input() seller: Seller;
  cars: car[];
  accessories: Accessories[];
  spareParts: SparePart[];

  constructor(private CarService: carService, private AccessoriesService: AccessoriesService, private SparePartsService: SparePartsService, private router: Router) { }

  ngOnInit() {
    this.accessories = this.AccessoriesService.getBySeller(this.seller.name);
    this.cars = this.CarService.getBySeller(this.seller.name);
    this.spareParts = this.SparePartsService.getBySeller(this.seller.name);
  }
  DeleteProduct(service, id) {

    if (service === 'car') {
      this.CarService.delete(id);
      this.ngOnInit();
    }
    else if (service === 'sparePart') {
      this.SparePartsService.delete(id);
      this.ngOnInit();
    }
    else {
      this.AccessoriesService.delete(id);
      this.ngOnInit();
    }
  }
  EditProduct(product) {
    this.router.navigateByUrl(`${product}/add`);

  }
}
