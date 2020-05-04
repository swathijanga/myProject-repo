import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { RecipieListComponent } from './recipies/recipie-list/recipie-list.component';
import { RecipieDetailComponent } from './recipies/recipie-detail/recipie-detail.component';
import { RecipieItemComponent } from './recipies/recipie-list/recipie-item/recipie-item.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppinglistEditComponent } from './shoppinglist/shoppinglist-edit/shoppinglist-edit.component';
import { ChartModule } from 'angular-highcharts';
import { FormsModule } from '@angular/forms';
import { GamecontrolComponent } from './gamecontrol/gamecontrol.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { TestDirective } from './test.directive'
import { DropdownDirective } from './shared/dropdown.directive';
import { NgbModule} from "@ng-bootstrap/ng-bootstrap"
import { from } from 'rxjs';
import { RecipestartComponent } from './recipies/recipestart/recipestart.component';



const routes: Routes = [
  {path:'',redirectTo:'/recipies',pathMatch:'full'},
  {path: 'recipies', component: RecipiesComponent},
  {path: 'shoppinglist', component: ShoppinglistComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipiesComponent,
    RecipieListComponent,
    RecipieDetailComponent,
    RecipieItemComponent,
    ShoppinglistComponent,
    ShoppinglistEditComponent,
    GamecontrolComponent,
    OddComponent,
    EvenComponent,
    TestDirective,
    DropdownDirective,
    RecipestartComponent
 
  
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ChartModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
