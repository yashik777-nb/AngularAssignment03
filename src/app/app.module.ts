import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IssuesComponent } from './issues/issues.component';
import { IssueAddedComponent } from './issues/issue-added/issue-added.component';

import { IssuesService } from './issues/issues.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, IssuesComponent, IssueAddedComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [IssuesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
