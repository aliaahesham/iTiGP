import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { car } from 'src/app/_models/car/car';
import { making } from 'src/app/_models/car/making';
import { model } from 'src/app/_models/car/model';
import { color } from 'src/app/_models/car/color';
//import { type } from 'src/app/_models/car/type';
//import { classification } from 'src/app/_models/car/classification';
import { cylinder } from 'src/app/_models/car/cylinder';
import { transimission } from 'src/app/_models/car/transimission';


import { carService } from 'src/app/features/cars/car.services';
import { makingService } from 'src/app/features/cars/making.service';
import { modelService } from 'src/app/features/cars/model.service';
import { colorService } from 'src/app/features/cars/color.service';
//import { typeService } from 'src/app/features/cars/type.service';
//import { classificationService } from 'src/app/features/cars/classification.service';
import { cylinderService } from 'src/app/features/cars/cylinder.service';
import { transimissionService } from 'src/app/features/cars/transimission.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  car: car;
  making: making[];
  model: model[];
  color: color[];
  //type: type[];
  //classification: classification[];
  cylinder: cylinder[];
  transimission: transimission[];
  hasTurbo: number;
  ABS: number;
  myForm: FormGroup;


  constructor(private makingService: makingService,
    private modelService: modelService,
    private colorService: colorService,
    //private typeService: typeService,
    //private classificationService: classificationService,
    private cylinderService: cylinderService,
    private transimissionService: transimissionService,
    private carService: carService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.car = {};
    this.making = this.makingService.getAll();
    this.model = this.modelService.getAll();
    this.color = this.colorService.getAll();
    //this.type = this.typeService.getAll();
    //his.classification = this.classificationService.getAll();
    this.cylinder = this.cylinderService.getAll();
    this.transimission = this.transimissionService.getAll();
    this.hasTurbo = 1;
    this.ABS = 1;

    this.myForm = new FormGroup({
      makingId: new FormControl('', Validators.required),
      modelId: new FormControl('', Validators.required),
      colorId: new FormControl('', Validators.required),
      cylinderId: new FormControl('', Validators.required),
      transimissionId: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      productionYear: new FormControl('', Validators.required),
      engineCapacity: new FormControl('', Validators.required),
      horsePower: new FormControl('', Validators.required),
      fueltank: new FormControl('', Validators.required),
      width: new FormControl('', Validators.required),
      height: new FormControl('', Validators.required),
      length: new FormControl('', Validators.required),

    });

  }

  onSubmit(myForm) {
    console.log(this.myForm);
    this.car.makingId = this.myForm.value.makingId;
    this.car.model = this.myForm.value.modelId;
    this.car.color = this.myForm.value.colorId;
    this.car.cylinder = this.myForm.value.cylinderId;
    this.car.transimission = this.myForm.value.transimission;
    this.car.price = this.myForm.value.price;
    this.car.year = this.myForm.value.productionYear;
    this.car.capacity = this.myForm.value.engineCapacity;
    // this.car.horsePower = this.myForm.value.horsePower;
    this.car.fuelTank = this.myForm.value.fueltank;
    this.car.width = this.myForm.value.width;
    this.car.height = this.myForm.value.height;
    this.car.length = this.myForm.value.length;

    this.carService.add(this.car);
    // this.router.navigate(['/car']); 
  }

  onClick() {
    this.router.navigate(['/car']);
  }

}
