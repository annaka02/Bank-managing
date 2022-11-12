import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ManagementComponent } from './management/management.component';
import { PaymentRequestComponent } from './payment-request/payment-request.component';
import { DepotComponent } from './depot/depot.component';
import { RetraitComponent } from './retrait/retrait.component';
import { VirementComponent } from './virement/virement.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ManagementComponent,
    PaymentRequestComponent,
    DepotComponent,
    RetraitComponent,
    VirementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
