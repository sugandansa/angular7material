import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';

import { HttpClient } from '@angular/common/http';

export interface DialogData {
  alert: 'true';
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-new2',
  templateUrl: './new2.component.html',
  styleUrls: ['./new2.component.scss']
})
export class New2Component implements OnInit {
  spinner:boolean= true;
  arrBirds:string[];
  FromDate:Date;
  ToDate:Date;
  VisitId:Number;
  BillNo:string;
  DeptId:number;
  today:Date;
 title = 'Angular 7 – Virtual Scrolling'; 
 states = [
  {name: 'Alabama', capital: 'Montgomery'},
 ]
  scrollingItems: string[] = [];
  constructor(private http: HttpClient,public dialog: MatDialog) {
     for (let i = 0; i < 5000; i++) {
   //  this.scrollingItems.push(i);
     setInterval(() => {

    }, 1000);
    }
  }
  ngOnInit() {
    this.http.get('https://localhost:44304/api/todo').subscribe(data =>{
  console.log(data);
  this.scrollingItems = data as string [];
  this.FromDate = new Date();
  this.ToDate = new Date();
  this.spinner=false;
  });
}
  search() {
  this.spinner=true;
this.http.post('https://localhost:44304/api/todo',{
  'FromDate': this.FromDate.toLocaleString('en-US', {timeZone: 'Asia/Kolkata'}),
  'ToDate': this.ToDate.toLocaleString('en-US', {timeZone: 'Asia/Kolkata'}),
  'VisitId': this.VisitId,
  'BillNo': this.BillNo,
  'DeptId': this.DeptId
})
.subscribe(data => {
  this.scrollingItems = data as string [];
  this.spinner = false;
  });
}
savesample(visitId, sampleCollectionTime){
  this.spinner=true;
  console.log(visitId,sampleCollectionTime);
  this.http.post('https://localhost:44304/api/todo/api/insertsample',{
  'VisitId': visitId,
  'InvestId': 1,
  'SampleId': 1,
  'ContainerId': 1,
  'SampleCollectionTime':sampleCollectionTime,
  'Edit_User': 1
})
.subscribe(data => {
  console.log(data);
  if(data === true) {
    this.spinner=false;
    this.dialog.open(AlertComponent, {
      data: {
        alert: 'true'
      }
    });
  } else{
    this.dialog.open(AlertComponent, {
      data: {
        alert: 'false'
      }
    });

  }
  });
}
}
@Component({
  selector: 'app--alert',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class AlertComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}