import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Issue } from '../issue.modal';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss'],
})
export class IssuesComponent implements OnInit {
  @Input('issueApplicationName') formTitle: string = '';

  Issue = new Issue('', '', '');

  @Output() emitIssue = new EventEmitter<Issue>();

  issueDescription: string;
  issueSeverity: string;
  issueStatus: string;
  severityData: string[] = ['Critical', 'Major', 'Minor'];
  statusData: string[] = ['Open', 'In Progress', 'Closed'];
  issues: Issue[] = [
    new Issue('Issue One', 'Minor', 'Open'),
    new Issue('Issue Two', 'Major', 'In Progress'),
    new Issue('Issue Three', 'Critical', 'Closed'),
  ];

  constructor() {
    this.issueDescription = '';
    this.issueSeverity = '';
    this.issueStatus = '';
  }

  ngOnInit() {}

  onFormSubmit() {
    this.issues.push(
      new Issue(this.issueDescription, this.issueSeverity, this.issueStatus)
    );
    this.emitIssue.emit(
      new Issue(this.issueDescription, this.issueSeverity, this.issueStatus)
    );
  }
}
