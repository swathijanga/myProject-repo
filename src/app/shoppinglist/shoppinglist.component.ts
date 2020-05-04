import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
msg="";
  items: any =[];
  i=0;
  styleflag: boolean;
  array:any=[];
  constructor() { }

  ngOnInit() {
  }
  goto(){
    this.items.push(this.msg);
    this.msg=""
  }
  toggle(){
    this.i++
    console.log(this.i);
    this.array.push(new Date());
  }
  
}
