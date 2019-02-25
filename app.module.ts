import 'hammerjs';

import { AlertComponent, New2Component } from "./new2/new2.component";
import { AlertResultComponent, New4Component } from "./new4/new4.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
} from "@angular/material";
import { OWL_DATE_TIME_FORMATS, OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { HttpClientModule } from "@angular/common/http";
import { JsonService } from './new3/text.service';
import { New1Component } from "./new1/new1.component";
import { New3Component } from "./new3/new3.component";
import { NewComponent } from "./new/new.component";
import { NgModule } from "@angular/core";
import { OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { RouterModule } from "@angular/router";
import { ScrollingModule } from "@angular/cdk/scrolling";

export const MY_MOMENT_FORMATS = {
  fullPickerInput: 'dd, L, LT',
  datePickerInput: 'dd, L, LT',
  monthYearLabel: 'MMMM YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'MMMM YYYY',
};

@NgModule({
 imports: [
  FormsModule,
  ReactiveFormsModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ScrollingModule,
    DragDropModule,
    ReactiveFormsModule,OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  declarations: [
    AppComponent,
    NewComponent,
    New1Component,
    New2Component,
    New3Component,
    New4Component, AlertComponent, AlertResultComponent
  ],
  entryComponents: [AlertComponent,AlertResultComponent],
  providers: [JsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
