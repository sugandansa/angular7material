import { Component, OnInit } from '@angular/core';

import { Alert } from 'selenium-webdriver';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  spinnerlogin: boolean = true;
  username: any;
  password:any;
  customersObservable:any;
  constructor(private router:Router,private httpClient:HttpClient) { }

  ngOnInit() {
    this.spinnerlogin=false;
  }
  login() {
    if(this.username!==30) {
    alert('UserName is wrong');
    }
    this.spinnerlogin=true;
    this.httpClient.get('https://localhost:44304/api/values/' + this.username).subscribe(data => {
      localStorage.setItem('user', this.username);
      localStorage.setItem('localhost', 'https://localhost:44304/');
     console.log(localStorage.getItem('user'));
      console.log(data);
      console.log(navigator.platform);
      if(data === true){
        this.router.navigateByUrl('/new1');
        this.spinnerlogin=false;
      } else{
        alert('wrong credentials');
      }
    });
  }
}
