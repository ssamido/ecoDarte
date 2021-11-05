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
  activeIndex: number = 0;
  params: Params = {};
  val: number;

  constructor() { }

  ngOnInit(): void {
    this.items = [{
      label: 'Mensualité',
      command: (event: any) => {
          this.activeIndex = 0;

      }
  },
  {
      label: 'Montant',
      command: (event: any) => {
          this.activeIndex = 1;

      }
  },
  {
      label: 'Offre',
      command: (event: any) => {
          this.activeIndex = 2;

      }
  },
  {
      label: 'informations',
      command: (event: any) => {
          this.activeIndex = 3;

      }
  }
];
  }

  moveNext():void {
    this.activeIndex++;
  }
  moveBack():void {
    this.activeIndex--;
  }
  handleChange($event) : void {

  }

 
}
