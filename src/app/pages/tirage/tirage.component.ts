import { Params } from './../../entities/params';
import { Offer } from 'src/app/entities/offer';
import { ManageService } from 'src/app/services/manage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.scss']
})
export class TirageComponent implements OnInit {

  jourEcheance;
  isStarted = true;
  offer : Offer = {};
  rangeOffer: number[] = [0,0];
  constructor(private manageService:ManageService) { }

  ngOnInit(): void {
    this.manageService.getDemande("1").subscribe(res=>{
      this.offer = res.offer;
      this.rangeOffer = [this.offer.phaseDeb, this.offer.phaseFin]

    });

  }

  start():void {
    this.isStarted= true;
  }
}
