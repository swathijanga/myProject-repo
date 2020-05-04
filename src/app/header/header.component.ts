import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  recipesclicked: boolean=false;
  shoppingclicked: boolean=false;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotorecipe(view){
    if(view === 'recipe'){
      this.shoppingclicked=false;
      this.recipesclicked=true;
      this.router.navigate(['/recipies']);
    }
    else if(view ==='shopping'){
      this.recipesclicked=false;
      this.shoppingclicked=true;
      this.router.navigate(['/shoppinglist']);
    }
  }
  homepage(){
    this.router.navigate([''])
  }
}
