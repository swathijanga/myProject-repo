import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecipiesComponent } from '../recipies/recipies.component';
import {ShoppinglistComponent } from '../shoppinglist/shoppinglist.component';

const routes: Routes = [
  {path: 'recipies', component: RecipiesComponent, pathMatch: 'full'},
  {path: 'shoppinglist', component: ShoppinglistComponent, pathMatch: 'full'}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
