import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Message } from './message'

import { ChatHandlerService } from './chat-handler.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private chatService: ChatHandlerService) { }

  ngOnInit() {
    this.chatService.connected().subscribe(value => {
      if (this.connected && !value) {
        this.chatService.showWarning("Disconnected")
      }
      this.connected = value
    })
  }

  @ViewChild('textInput')
  private textInput: ElementRef

  private name: String = ""
  private text: String = ""

  private connected: boolean

  private getMessages(): Array<Message> {
    return this.chatService.getMessages()
  }

  private getUsers(): Array<String> {
    return this.chatService.getUsers()
  }

  private connect() {
    if (!this.name) {
      return
    }
    this.chatService.connect(this.name)
  }

  private send() {
    if (!this.text) {
      return
    }
    this.chatService.send(this.text)
    this.text = ""
    this.textInput.nativeElement.focus()
  }
}