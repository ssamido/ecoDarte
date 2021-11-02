import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {StepsModule} from 'primeng/steps';
import { MenuModule } from 'primeng/menu';
import {SliderModule} from 'primeng/slider';

const modules = [
  ButtonModule,
  StepsModule,
  MenuModule,
  SliderModule,
];


@NgModule({
  imports: modules,
  exports: modules,
})
export class PrimengModule { }
