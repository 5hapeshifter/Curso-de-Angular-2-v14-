import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-title></app-title>
  <router-outlet></router-outlet>
  `

})
export class AppComponent implements OnInit, OnChanges {
  

  constructor(){

  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnInit(): void {
  }
}
