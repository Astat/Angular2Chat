import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Message } from './message';
import { ChatCommunicationService } from './chat-communication.service'

@Injectable()
export class ChatHandlerService {

  public me: string = ""

  private users: Array<string> = []
  private messages: Array<Message> = []

  constructor(private chatCommunication: ChatCommunicationService) {
    this.chatCommunication.messagesStream().subscribe(m => {
      this.messages.push(m)
    })
    this.chatCommunication.usersStream().subscribe(l => {
      this.users = l
    })
  }

  public connect(name: string) {
    this.me = name
    this.chatCommunication.connect(name)
  }

  public connected(): Observable<boolean> {
    return this.chatCommunication.connected()
  }

  public showWarning(warning: string) {
    let message: Message = {
      time: this.formatDate(new Date()),
      author: "SYSTEM",
      text: warning
    };
    this.messages.push(message)
  }

  public send(text: string): void {
    let message: Message = {
      time: null,
      author: null,
      text: text
    };
    this.chatCommunication.sendMessage(message)
  }

  public getMessages(): Array<Message> {
    return this.messages
  }

  public getUsers(): Array<string> {
    return this.users
  }

  private formatDate(date: Date) {
    return this.pad2(date.getHours()) + ":" + this.pad2(date.getMinutes()) + ":" + this.pad2(date.getSeconds())
  }

  private pad2(number: Number) {
    return ("00" + number.toString()).slice(-2)
  }

}
