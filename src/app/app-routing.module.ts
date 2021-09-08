import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'list', component: ProductsComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: '',   redirectTo: '/Login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
