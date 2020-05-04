import { Component, OnInit } from '@angular/core';
import { HighchartsService} from '../../app/highcharts.service'

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  data: ({ name: string; description: string; id?: undefined; } | { id: number; name: string; description: string; })[];
 textentered:string;
 descex:string;
  constructor(private exservice:HighchartsService) { }

  ngOnInit() {
    this.data=this.exservice.example;
  }
  addEx(){
    
    this.exservice.addExample(this.textentered,this.descex)
  }
}
