import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lab-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Hello from Layout cmp");
  }

}
