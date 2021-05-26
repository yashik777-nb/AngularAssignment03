import { Component } from '@angular/core';
import { Issue } from './issue.modal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  applicationName: string = 'Online Shopping App';
  appIssue: Issue;

  constructor() {
    this.appIssue = new Issue('', '', '', '');
  }

  newIssueEmitted(issueData: Issue) {
    this.appIssue = issueData;
  }
}
