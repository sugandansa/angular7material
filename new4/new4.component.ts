import { BehaviorSubject, Observable } from 'rxjs';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatTableDataSource } from '@angular/material';

import { ActivatedRoute } from '@angular/router';
import { DataSource } from '@angular/cdk/table';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export interface DialogData {
  alert: 'true';
}
export interface PeriodicElement {
  patientName: string;
  position: number;
  investName: string;
  rRrange: string;
  unit: string;
  inputType: string;
  labValues1: string;
  labValues2: string;
  labValues3: string;
  status: string;
}

@Component({
  selector: 'app-new4',
  templateUrl: './new4.component.html',
  styleUrls: ['./new4.component.scss']
})
export class New4Component implements OnInit {
  style: string;
  spinnerlabresult: boolean = true;
  datas: string[] = [] ;
  datass: string[] = [];
  patientName: string;
  clientName: string;
  CollectionTime: string;
  BilledDate: string;
  Age: string;
  DepartmentName: string;
  angForm: FormGroup;
  visitId: number;
  optionss: string;
  private sub: any;
  tenents: any =  [];
  resultvalue: any;
  values: any;
  rows: any;
  row: any;
  resultData: any;

  displayedColumns: string[] = ['investName' , 'inputType', 'unit', 'rRrange', 'status'];
  options: string[] = ['1', 'Two', 'Three'];
  public dataSource = new MatTableDataSource<PeriodicElement>();
 constructor(private fb: FormBuilder, private route: ActivatedRoute, private http: HttpClient, private router: Router
  , public dialog: MatDialog) {

}
  ngOnInit() {
    this.style = 'color-text:red;';
    this.sub = this.route.params.subscribe(params => {
      this.visitId = +params['id'];
      this.http.post('https://localhost:44304/api/todo/EnterResults', {
        'VisitId': this.visitId,
        'FromDate': '2017-01-01 00:00:00',
        'ToDate': '2019-01-01 00:00:00',
        'BillNo': '',
        'DeptId': 0
      }).subscribe(res => {
      console.log(res);
      this.resultData = res;
      this.resultData.forEach(rowdata => {
        if (rowdata['investId'] === '0') {
            rowdata['investId'] = '';
        }
      });
      console.log(this.resultData);
      this.datas = this.resultData as string [];
      this.patientName = this.datas[0]['patientName'];
      this.clientName = this.datas[0]['clientName'];
      this.CollectionTime = this.datas[0]['sampleCollectionTime'];
      this.Age = this.datas[0]['age'];
      this.visitId = this.datas[0]['visitId'];
      this.BilledDate = this.datas[0]['billedDate'];
      this.DepartmentName = this.datas[0]['departmentName'];
      this.dataSource.data = this.resultData as PeriodicElement[];
      console.log(this.dataSource.data);
      this.spinnerlabresult = false;
      });
   });
  }
  eventEmitChange(investId: any) {
    this.http.post('https://localhost:44304/api/todo/GetPattern', {
        'VisitId': this.visitId,
        'investId': investId
      }).subscribe(res => {
        this.datas = res as string [];
        this.datas.forEach((item, index) => {
        this.datass.push(this.datas[index]['labValues2']);
      });
      });
    }
    remove() {
      this.datass = [];
    }
    saveResult() {
      this.spinnerlabresult = true;
      console.log(this.resultData);
      this.resultData.forEach(rowdata => {
        this.tenents.push({
          visitId: this.visitId,
          investId: rowdata['investId'],
          resultValues: rowdata['labValues3']
        });
      });
        console.log(this.tenents);
        this.http.post('https://localhost:44304/api/todo/ResultValue', this.tenents
        ).subscribe(res => {
          this.datas = res as string [];
          this.dialog.open(AlertResultComponent, {
            data: {
              alert: 'true'
            }
          });
        this.spinnerlabresult = false;
        this.router.navigateByUrl('/new1/new3/30');
        });
        this.tenents = [];
    }
  }
  @Component({
    selector: 'app--alert',
    templateUrl: 'dialog.html',
  })
  export class AlertResultComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  }