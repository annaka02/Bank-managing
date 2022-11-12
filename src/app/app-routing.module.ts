import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepotComponent } from './depot/depot.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ManagementComponent } from './management/management.component';
import { PaymentRequestComponent } from './payment-request/payment-request.component';
import { RetraitComponent } from './retrait/retrait.component';
import { VirementComponent } from './virement/virement.component';

const routes: Routes = [
  {path: 'accueil', component: HomepageComponent},
  {path: 'management', component: ManagementComponent},
  {path:'request', component: PaymentRequestComponent},
  {path:'depot', component: DepotComponent},
  {path: 'retrait', component: RetraitComponent},
  {path: 'virement', component:VirementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
