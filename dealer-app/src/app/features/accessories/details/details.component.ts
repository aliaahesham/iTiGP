import { Accessories } from './../../../_models/accessories/accessories';
import { AccessoriesService } from './../accessories.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-accessories-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  constructor(private AccessoriesService: AccessoriesService, private activeRoute: ActivatedRoute,
    private Router: Router) { }
  id: number;
  accessories: Accessories;
  subscription: Subscription;
  ngOnInit() {
    this.accessories = this.activeRoute.snapshot.data.myResolver;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  count = 0;
  myval = 1;
  counter(flag) {

    if (flag === 'increment') {
      this.count++;
    }
    if (flag === 'decrement') {
      this.count--;
    }
    this.myval = this.count;
  }
}
