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
    this.subscription = this.activeRoute.params.subscribe(
      (params) => {
        this.id = params.id;
        this.accessories = this.AccessoriesService.getById(+this.id);
      }
    )
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
