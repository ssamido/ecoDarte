import { TirageComponent } from './pages/tirage/tirage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { OffersComponent } from './pages/offers/offers.component';

const routes: Routes = [
  {
    path: '',
    component: TirageComponent,
},
{
  path: 'offers',
  component: OffersComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
