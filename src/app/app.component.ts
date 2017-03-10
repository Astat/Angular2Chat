import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Message } from './message'

import { ChatHandlerService } from './chat-handler.service'
import { ChatCommunicationService } from './chat-communication.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private chatService: ChatHandlerService, private chatCommunication: ChatCommunicationService) { }

  ngOnInit() {
    this.chatService.connected().subscribe(value => {
      if (this.connected && !value) {
        this.chatService.showWarning("Disconnected")
      }
      this.connected = value
    })
    this.chatCommunication.messagesStream().subscribe(m => {
      setTimeout(() => this.messagesDiv.nativeElement.scrollTop = this.messagesDiv.nativeElement.scrollHeight, 50);
    })
  }

  @ViewChild('messagesDiv')
  private messagesDiv: ElementRef

  @ViewChild('textInput')
  private textInput: ElementRef

  private name: string = ""
  private text: string = ""

  private connected: boolean

  private getMessages(): Array<Message> {
    return this.chatService.getMessages()
  }

  private getUsers(): Array<string> {
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
    this.focusChatInput()
  }

  private focusChatInput() {
    setTimeout(() => this.textInput.nativeElement.focus(), 0)
  }

  private writeToChat(text: string) {
    if(this.text.slice(-1) != " ") {
      this.text += " "
    }
    this.text += text + " "
    this.focusChatInput()
  }
}