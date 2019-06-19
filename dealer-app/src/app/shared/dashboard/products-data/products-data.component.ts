import { Component, OnInit, Input } from '@angular/core';
import { Seller } from 'src/app/_models/seller';
import { car } from 'src/app/_models/car/car';
import { SpareParts } from 'src/app/_models/spare-parts/spare-parts';
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
  spareParts: SpareParts[];
  constructor(private CarService: carService, private AccessoriesService: AccessoriesService, private SparePartsService: SparePartsService) { }

  ngOnInit() {
    this.accessories = this.AccessoriesService.getBySeller(this.seller.name);
    this.cars = this.CarService.getBySeller(this.seller.name);
    console.log(this.accessories)
    console.log(this.cars)
  }

}
