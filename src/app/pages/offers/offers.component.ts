import { Params } from './../../entities/params';
import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  items: MenuItem[];
  activeIndex: number = 1;
  params: Params = {};
  val: number

  constructor() { }

  ngOnInit(): void {
    this.items = [{
      label: 'Personal',
      command: (event: any) => {
          this.activeIndex = 0;

      }
  },
  {
      label: 'Seat',
      command: (event: any) => {
          this.activeIndex = 1;

      }
  },
  {
      label: 'Payment',
      command: (event: any) => {
          this.activeIndex = 2;

      }
  },
  {
      label: 'Confirmation',
      command: (event: any) => {
          this.activeIndex = 3;

      }
  }
];
  }

  moveNext():void {
    this.activeIndex= 3
  }
  handleChange($event) : void {

  }
}
