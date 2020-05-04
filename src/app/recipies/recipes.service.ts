import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  favRecipe= [
    {name:'Chicken Curry' ,ingrediants:['chicken','onions','tomato']},
    {name:'Fish',ingrediants:['Fish','masala','tamarind']}
];

  constructor() { }
}
