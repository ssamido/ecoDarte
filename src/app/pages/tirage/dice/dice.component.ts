import { AsyncSubject, Observable, Subject, timer } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { map, switchMap, tap, take } from 'rxjs/operators'
import { Offer } from 'src/app/entities/offer';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent implements OnInit {
  @Input() jourEcheance: any;
  elDiceOne;
  rollSub = new AsyncSubject();
  result = 0;
  showResult = false;
  isRollClicked = false;
  dateReversement = new Date();
  @Input() offer: Offer = {};
  rolling = false;
  isSecondPhase = false;
  selectedType = 4;
  start$ = new Subject();

  constructor() { }


  roller$ = this.start$
    .pipe(
      switchMap(max => {
        return timer(0, 50).pipe(take(10), map(_ => {
          let total = 0;
          total += this.calcRoll(max);
          console.log('je suis la');
          return total
        }))


      })
    )

  calcRoll(max: any) {
    const min = 1;
    return Number((Math.random() * (max - min) + min).toFixed(0));
  }

  findSemestre() {
    const nbrSemestre = (this.offer.phaseFin - this.offer.phaseDeb) / 6;
    this.start$.next(nbrSemestre);
  }

  ngOnInit(): void {
    this.elDiceOne = document.getElementById('dice1');
    if (this.offer.phaseFin - this.offer.phaseDeb < 6) {
      this.isSecondPhase = false;
    } else {
      this.isSecondPhase = true;
    }

  }

  rollDice(): void {
    this.start$.next(6);
    this.start$.subscribe(res => {
      console.log('je suis la2');
    })

    this.dateReversement = new Date();
    this.showResult = false;
    this.isRollClicked = true;
    if (this.jourEcheance) {
      this.rollSub = new AsyncSubject();

      this.rollSub.subscribe(res => {
        this.showResult = true;
      });

      this.rollSub.next('');
      let diceOne = Math.floor((Math.random() * 6) + 1);
      this.result = diceOne;
      console.log(diceOne);


      for (var i = 1; i <= 6; i++) {

        this.elDiceOne.classList.remove('show-' + i);
        if (diceOne === i) {
          this.elDiceOne.classList.add('show-' + i);
        }
      }

      this.dateReversement.setMonth(this.dateReversement.getMonth() + this.offer.phaseDeb + this.result - 1);
      this.dateReversement.setDate(this.jourEcheance);
      console.log(this.dateReversement);

      setTimeout(() => {
        this.rollSub.complete();
      }, 1000);

    }
  }


  close(): void {

  }
}


