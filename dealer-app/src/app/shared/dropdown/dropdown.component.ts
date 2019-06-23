import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  isClosed: boolean;
  constructor() {
    this.isClosed = true;
  }

  ngOnInit() {
  }

}
