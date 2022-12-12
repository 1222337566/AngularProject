import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';

const routes: Routes = [
  {path:"products",component:ProductsComponent},
  {path:'myorders',component:MyOrdersComponent},
  {path:'adminproducts',component:AdminProductsComponent},
  {path:"adminorders",component:AdminOrdersComponent},
  {path:'shoppingcart',component:ShoppingcartComponent},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
