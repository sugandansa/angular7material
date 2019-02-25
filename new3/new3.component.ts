import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { MatSort, MatSortModule, MatTableDataSource } from "@angular/material";

import { ActivatedRoute } from "@angular/router";
import { DataSource } from "@angular/cdk/table";
import {
HttpClient
} from '@angular/common/http';
import { JsonService } from "./text.service";
import { StringMap } from "@angular/core/src/render3/jit/compiler_facade_interface";
import { element } from "protractor";
import { pulseAnimation } from "angular-animations";

export interface PeriodicElement {
  visitId: number;
  patientId: number;
  billedDate: string;
  patientName:string;
  clientName:string;
  investName:string;
  tenentName:string;
  AmountDue:string;
  EnterFindings:string;
  View:string;
  PDF:string;
}
@Component({
  selector: 'app-new3',
  templateUrl: './new3.component.html',
  styleUrls: ['./new3.component.scss']
})
export class New3Component implements OnInit,AfterViewInit {
 ELEMENT_DATAss:any[];
  spinnerlab: boolean = true;
  datas: string[] = [];
  arrBirds:string[];
  FromDates:Date;
  ToDates:Date;
  VisitId:Number;
  BillNo:string;
  DeptId:number;
  num:Number;
  val:Number=1;
  private sub: any;
  userRole:Number;
  arrBirdsss: string [];
  displayedColumns: string[] = [ 'visitId','patientName','tenentName','investName','clientName','billedDate'];

  constructor(private http: HttpClient,private route: ActivatedRoute,private service:JsonService) { 
    this.http.post('https://localhost:44304/api/todo/EnterResult', {
          'FromDate': this.FromDates,
          'ToDate': this.ToDates,
          'VisitId': this.VisitId,
          'BillNo': this.BillNo,
          'DeptId': this.DeptId,
          'UserRole': this.userRole
        }).subscribe(data => {
        console.log(data);
         this.datas = data as string[];
         this.spinnerlab=false;
        });
  }
  public dataSource = new MatTableDataSource<PeriodicElement>();
 // dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.FromDates= new Date();
      this.ToDates= new Date();
      this.userRole = +params['id'];});
      if(this.userRole === 20) {
   this.displayedColumns.push('EnterFindings');
      } else if (this.userRole === 30) {
        this.displayedColumns.push('View');
      }
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
  ngAfterViewInit() {
    // viewChild is set after the view has been initialized
  }
  search(){
    this.spinnerlab=true;
    this.http.post('https://localhost:44304/api/todo/EnterResult', {
      'FromDate': this.FromDates.toLocaleString('en-US', {timeZone: 'Asia/Kolkata'}),
      'ToDate': this.ToDates.toLocaleString('en-US', {timeZone: 'Asia/Kolkata'}),
      'VisitId': this.VisitId,
      'BillNo': this.BillNo,
      'DeptId': this.DeptId,
      'UserRole': this.userRole
    }).subscribe(res => {
      this.dataSource.data = res as PeriodicElement[];
    console.log(res);
    this.spinnerlab = false;
  });
  }
  save() {
    const url = './assets/css/new.json';
    this.http.get(url, {responseType: 'json'})
      .subscribe((res) => {
        console.log(res);
        // saveAs(res, "")
      });
  }
}