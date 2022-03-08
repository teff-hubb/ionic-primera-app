import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor() { }

  ngOnInit() {
    // eslint-disable-next-line no-trailing-spaces
    

    let numero = 10;
    // eslint-disable-next-line no-debugger
    // debugger;

    numero = 20;

    numero = numero + 10;

    numero = 0;

    console.log(numero);

  }
}
