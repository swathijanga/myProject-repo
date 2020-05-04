import { Component, OnInit } from '@angular/core';
import{ Recipie} from '../recipie.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
recipies:Recipie[] = [
  
];
  constructor() { }
 
  ngOnInit() {
  }

}
