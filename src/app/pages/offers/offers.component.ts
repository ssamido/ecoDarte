import { Params } from './../../entities/params';
import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faDiceOne } from '@fortawesome/free-solid-svg-icons';
import { Demande } from 'src/app/entities/demande';
import { Offer } from 'src/app/entities/offer';
import { ManageService } from 'src/app/services/manage.service';
import { Product } from 'src/app/entities/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  items: MenuItem[];
  activeIndex: number = 3;
  val: number;
  faMoneyIcon = faMoneyCheck;
  faMonthIcon = faCalendarAlt;
  faDiceOne = faDiceOne;

  //Vars
  eligbleMois: number[] = [];
  simulatedMois: number[] = [];
  params: Params ={};
  responsiveOptions;
  offers: Array<Offer> = new Array();
  isSimulated = false;
  fondsDatas;
  demande : Demande = { };
  products: Product[];
  constructor(private manageService: ManageService,private productService: ProductService) { }

  ngOnInit(): void {

    this.manageService.getParams().subscribe( res => {
      this.params = res ;
      this.params.nbrMois = this.params.minDure;
      this.params.montantTotal = this.params.minDarte;

    })

    this.productService.getProductsSmall().then(products => {
			this.products = products;
		});

    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];

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

    if(this.activeIndex==1) {
      this.handleChange();
      this.setOffers();
      this.activeIndex++;
    }  else {
      this.activeIndex++;
    }


  }
  moveBack():void {
    this.activeIndex--;
  }


  handleChange(): void {
    console.log(this.params.nbrMois);

    this.params.maxDarte = this.params.maxMens * this.params.nbrMois
    this.params.maxPhase = this.params.nbrMois / 12 + 1;
    let phaseDeb;
    let phaseFin;

    if (this.params.phase != this.params.maxPhase) {
      phaseDeb = (this.params.phase - 1) * 6;
      phaseFin = this.params.phase * 6;
    } else {
      phaseDeb = this.params.nbrMois / 2;
      phaseFin = this.params.nbrMois;
    }
    this.params.rangePhase = [phaseDeb, phaseFin];
    this.params.mensualite = Math.round(this.params.montantTotal / this.params.nbrMois);
    this.calculFrais();
  }

  calculFrais(): void {
    this.params.fraisPriorite = Math.round((this.params.maxPhase - this.params.phase) * this.params.coefFrais);
  }

  calculFraisPriorite(i, nbrPhase): number {

    return (i != nbrPhase)? (Math.round((nbrPhase - i - 1 ) * this.params.coefFrais)) : 0;
  }

  isEligible() {
    this.eligbleMois = [];
    this.simulatedMois = [];

    for (let i = 1; i <= this.params.nbrMois; i++) {
      if (this.fondsDatas[i] + (this.params.mensualite * i) > this.params.montantTotal * 2) {
        this.eligbleMois.push(i);
      }
      else {
        this.eligbleMois = [];
      }
     }

    console.log(this.eligbleMois);
  }

  setOffers(): void {
    this.offers = new Array();
    let nbrPhase = (this.params.nbrMois / 12) + 2 ;
    for( let i = 1 ;  i <= nbrPhase ; i++ ) {
      let offer : Offer = {};
      if (i == nbrPhase - 1) {
        offer.phaseDeb = this.params.nbrMois / 2 + 1;;
        offer.phaseFin = this.params.nbrMois - 1;
      } else if (i == nbrPhase) {
        offer.phaseDeb = this.params.nbrMois ;
        offer.phaseFin = this.params.nbrMois
      } else {
        offer.phaseDeb = (i - 1) * 6 + 1;
        offer.phaseFin = i * 6;
      }


      offer.fraisPriorite =  this.calculFraisPriorite(i, nbrPhase);
      offer.fraisService = (i == nbrPhase) ? 0 : this.params.fraisService;
      offer.totalFrais = offer.fraisPriorite +  offer.fraisService  + this.params.mensualite;
      offer.numeroPriorite = i;
      offer.isSelected = (i == this.params.phase) ? true : false;

      this.offers.push(offer);

    }
    this.isSimulated = true ;

  }
}
