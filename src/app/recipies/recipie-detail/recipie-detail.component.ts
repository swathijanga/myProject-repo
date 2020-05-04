import { Component, OnInit, ViewChild,ElementRef, Input} from '@angular/core';
import { Chart } from 'angular-highcharts';
import {HighchartsService } from '../../highcharts.service'



@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css']
})
export class RecipieDetailComponent implements OnInit {
  @Input() currentingrediants:any;
  constructor(private recipeservice : HighchartsService) { }

  ngOnInit() {
  
  }
 
}