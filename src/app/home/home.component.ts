import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter: number = 0;
  name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  counterClick() {
    this.clickCounter +=1;
  }

  setClasses() {
    let myClasses = {
      active: this.clickCounter > 5,
      notaactive: this.clickCounter <= 5,
    }
    return myClasses;
  }

}
