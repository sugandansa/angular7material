import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { New1Component } from './new1/new1.component';
import { New2Component } from './new2/new2.component';
import { New3Component } from './new3/new3.component';
import { New4Component } from './new4/new4.component';
import { NewComponent } from './new/new.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', redirectTo: 'new', pathMatch: 'full'},
  {path: 'new' , component: NewComponent},
  {path: 'new1' , component: New1Component,
  children: [
{path: 'new2', component: New2Component},
{path: 'new3/:id', component: New3Component},
{path: 'new4/:id', component: New4Component},
{path: 'new5/:id', component: New3Component},
  ]
}
 // {path: 'products',  redirectTo: '/new', pathMatch: 'full'}
 ];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule
  ],
})
export class AppRoutingModule {
}
