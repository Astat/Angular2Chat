import { Component, OnInit } from '@angular/core';

import { ChatHandlerService } from '../chat-handler.service'

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  private name: string = ""

  constructor(private chatService: ChatHandlerService) { }

  ngOnInit() {
  }

  private connect() {
    if (!this.name) {
      return
    }
    this.chatService.connect(this.name)
  }

}
