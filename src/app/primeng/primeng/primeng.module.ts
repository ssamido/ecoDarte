import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import {StepsModule} from 'primeng/steps';
import {SliderModule} from 'primeng/slider';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {RadioButtonModule} from 'primeng/radiobutton';
const modules = [
  ButtonModule,
  CarouselModule,
  StepsModule,
  SliderModule,
  InputTextModule,
  InputNumberModule,
  RadioButtonModule
]

@NgModule({
  imports: modules,
  exports: modules,
})
export class PrimengModule { }
