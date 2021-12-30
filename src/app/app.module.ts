import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './primeng/primeng/primeng.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FeaturesComponent } from './pages/features/features.component';
import { FooterComponent } from './pages/footer/footer.component';
import { IndexComponent } from './pages/index/index.component';
import { OffersComponent } from './pages/offers/offers.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ServicesComponent } from './pages/services/services.component';
import { SharedModule } from './pages/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TirageComponent } from './pages/tirage/tirage.component';
import { DiceComponent } from './pages/tirage/dice/dice.component';

@NgModule({
  declarations: [AppComponent,IndexComponent,FeaturesComponent, PricingComponent, BlogComponent,
    OffersComponent, ContactComponent, ServicesComponent, FooterComponent,TirageComponent,
    DiceComponent],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    CommonModule,
    SharedModule,
    ScrollToModule.forRoot(),
    NgbModalModule,
    NgxYoutubePlayerModule,
    PrimengModule,
    FormsModule,
    PrimengModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
