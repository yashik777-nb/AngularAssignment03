import { Component, Input, OnInit } from '@angular/core';
import { Issue } from '../../issue.modal';

@Component({
  selector: 'app-issue-added',
  templateUrl: './issue-added.component.html',
  styleUrls: ['./issue-added.component.scss'],
})
export class IssueAddedComponent implements OnInit {
  @Input() addedIssue: Issue = new Issue('', '', '', '');

  constructor() {}

  ngOnInit(): void {}
}
