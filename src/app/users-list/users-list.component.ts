import { AvatarUser } from '../chat-handler.service';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @Input()
  private users: Array<AvatarUser>

  @Output()
  private onSelectUser = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  selectUser(user: string) {
    this.onSelectUser.emit(user)
  }

}
