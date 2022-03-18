import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lab-lab-mfe-one',
  template: `<lib-tt-mfe-mfe-one></lib-tt-mfe-mfe-one>`,
  styleUrls: ['./lab-mfe-one.component.scss']
})
export class LabMfeOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("hello from labMfe component");
  }

}
