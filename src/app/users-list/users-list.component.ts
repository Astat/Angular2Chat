import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @Input()
  private users: Array<string>

  constructor() { }

  ngOnInit() {
  }

}
