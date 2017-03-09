import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Message } from './message';

@Injectable()
export class ChatHandlerService {

  private isConnected: BehaviorSubject<Boolean> = new BehaviorSubject(false)

  private users: Array<String> = ["Alban", "Ulises", "Sebastien"]

  private messages: Array<Message> = []

  private me: String = ""

  constructor() { }

  public connect(name: String) {
    this.me = name
    this.users.push(this.me)
    this.isConnected.next(true)
    setTimeout(() => {
      this.isConnected.next(false)
    }, 10000)
  }

  public connected(): Observable<boolean> {
    return this.isConnected
  }

  public showWarning(warning: String) {
    let message: Message = {
      time: this.formatDate(new Date()),
      author: "SYSTEM",
      text: warning
    };
    this.messages.push(message)
  }

  public send(text: String): void {
    let message: Message = {
      time: this.formatDate(new Date()),
      author: this.me,
      text: text
    };
    this.messages.push(message)
  }

  public getMessages(): Array<Message> {
    return this.messages
  }

  public getUsers(): Array<String> {
    return this.users
  }

  private formatDate(date: Date) {
    return this.pad2(date.getHours()) + ":" + this.pad2(date.getMinutes()) + ":" + this.pad2(date.getSeconds())
  }

  private pad2(number: Number) {
    return ("00" + number.toString()).slice(-2)
  }

}
