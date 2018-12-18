import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HomedeskComponent } from './homedesk.component';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { NouisliderModule } from 'ng2-nouislider';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
         RouterModule,
        JwBootstrapSwitchNg2Module
    ],
    declarations: [ 


        HomedeskComponent,
       
    ],
  
    exports:[ HomedeskComponent ]
})
export class HomedeskModule { }
