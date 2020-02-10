
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NgbdDatepickerPopup } from './datepicker-popup';
import { InputMaskModule } from 'racoon-mask-raw';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, NgbModule.forRoot(), InputMaskModule], 
  declarations: [AppComponent, NgbdDatepickerPopup],
  bootstrap: [AppComponent]
}) 
export class AppModule {}
