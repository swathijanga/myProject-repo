import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { HighchartsService } from '../../../highcharts.service'


@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent implements OnInit {
  favRecipe=[{name:'Chicken Curry' ,ingrediants:['chicken','onions','tomato']},{name:'Fish',ingrediants:['Fish','masala','tamarind']}];
  @Output() valueChange = new EventEmitter();
  currentingrediants: string[];
  showingrediantsflag: boolean;

  constructor(private recipeService:HighchartsService) { }

  ngOnInit() {
  }
recipeDetails(i){
  this.showingrediantsflag=true;
  this.currentingrediants=this.favRecipe[i].ingrediants;
 this.valueChange.emit(this.currentingrediants)
  console.log(i);
}
}
