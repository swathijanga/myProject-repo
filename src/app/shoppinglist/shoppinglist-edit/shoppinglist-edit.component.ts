import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppinglist-edit',
  templateUrl: './shoppinglist-edit.component.html',
  styleUrls: ['./shoppinglist-edit.component.css']
})
export class ShoppinglistEditComponent implements OnInit {
msg:any;
  constructor() { }

  ngOnInit() {
  }
  goto(){
    this.msg="";
  }

}
