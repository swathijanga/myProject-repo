import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HighchartsService {
  private messageSource = new BehaviorSubject('');
  currentRecipe = this.messageSource.asObservable();

  constructor() { }
  example =[
    {
        name: "Licensed Frozen Hat",
        description: "Incidunt et magni est ut.",
       
    },
    {
       
        name: "Rustic Concrete Chicken",
        description: "Sint libero mollitia.",
       
    },
    {
        id: 3,
        name: "Fantastic Metal Computer",
        description: "In consequuntur cupiditate et unde minus.",
    }
]
users =[
  {
      name: "Licensed Frozen Hat",
      id: 1,
     
  },
  {
     
      name: "Rustic Concrete Chicken",
      id: 2,
     
  },
  {
      id: 3,
      name: "Fantastic Metal Computer",
     
  }
]
addExample(name:string,description:string){
  this.example.push({name:name,description:description})
  }
  changeMessage(message: string[]) {
    this.messageSource.next(message['']);
  }
}
