import { Component, OnInit ,Input} from '@angular/core';
import {HighchartsService } from '../highcharts.service';
import {Router} from '@angular/router'
import { from } from 'rxjs';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  users: { name: string; id: number; }[];

 
  constructor(private userService : HighchartsService, private router:Router) { }

  ngOnInit() {
   
    this.users=this.userService.users;
  }
  userdetails(id){
  this.router.navigate(['/id'])
  }

}
