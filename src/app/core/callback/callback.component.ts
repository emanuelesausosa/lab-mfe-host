import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'lab-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private router: Router) {
    setTimeout(() => {
      router.navigate(['/']);
    }, 2500);
  }

  ngOnInit(): void {
    console.log("hello from callback component");
  }

}
