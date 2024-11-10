import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },                  // Home page
  { path: 'cart', component: CartComponent },              // Cart page
  { path: 'login', component: LoginComponent },            // Login page
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] }, // Restricted to logged-in users
  { path: 'add-product', component: AddProductComponent, canActivate: [AuthGuardService] } // Restricted to logged-in users
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
