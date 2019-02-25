import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new1',
  templateUrl: './new1.component.html',
  styleUrls: ['./new1.component.scss']
})
export class New1Component implements OnInit {
  spinnersample:boolean=true;
  now:Number;
  items: any = [];
  constructor() { 
    setInterval(() => {
      this.now = Date.now();
    }, 1);
  }
  ngOnInit() {
this.items = [{item: 'Phlebotomist', router: '/new1/new2'},
{item: 'Lab Technician', router: '/new1/new3/20'},
{item : 'Sr. Lab Technician', router: '/new1/new5/30'}
];
this.spinnersample = false;
  } 
}