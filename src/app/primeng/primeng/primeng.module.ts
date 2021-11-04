import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import {StepsModule} from 'primeng/steps';
import {SliderModule} from 'primeng/slider';
const modules = [
  ButtonModule,
  CarouselModule,
  StepsModule,
  SliderModule
]

@NgModule({
  imports: modules,
  exports: modules,
})
export class PrimengModule { }
