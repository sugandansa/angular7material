import { RouterModule, Routes } from '@angular/router';

import { New2Component } from '../new2/new2.component';
import { New3Component } from '../new3/new3.component';
import { NgModule } from '@angular/core';

const routes1: Routes = [
  {path:'new2', component:New2Component},
  {path:'new3', component:New3Component}
];