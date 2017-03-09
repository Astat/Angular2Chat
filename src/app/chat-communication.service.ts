import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Message } from './message';

@Injectable()
export class ChatCommunicationService {

  private isConnected: BehaviorSubject<boolean> = new BehaviorSubject(false)

  private usersSubject: Subject<Array<string>> = new Subject()
  private messagesSubject: Subject<Message> = new Subject()

  private ws: WebSocket;

  constructor() {
  }

  public connect(name: string) {
    if (this.ws) {
      return
    }
    this.ws = new WebSocket("ws://angular2chat.herokuapp.com/chat")
    this.ws.onclose = event => this.onDisconnect()
    this.ws.onopen = event => this.finishConnection(name)
    this.ws.onmessage = event => this.onMessage(event)
    this.ws.onerror = event => this.onDisconnect()
  }

  public connected(): Observable<boolean> {
    return this.isConnected
  }

  public disconnect() {
    if (this.ws && this.isConnected.getValue()) {
      this.ws.close()
    }
  }

  public sendMessage(message: Message) {
    if (this.isConnected.getValue()) {
      this.send(message)
    }
  }

  public usersStream(): Observable<Array<string>> {
    return this.usersSubject
  }

  public messagesStream(): Observable<Message> {
    return this.messagesSubject
  }

  private onDisconnect() {
    this.ws = null
    this.isConnected.next(false)
  }

  private finishConnection(name: string) {
    let m: Message = new Message()
    m.text = name
    this.send(m)
  }

  private send(message: Message) {
    this.ws.send(JSON.stringify(message))
  }

  private onMessage(event: any) {
    let object: any = JSON.parse(event.data)
    let m:Message = object
    if(object.action == "LIST") {
      let list:Array<string> = JSON.parse(m.text)
      this.usersSubject.next(list)
      this.isConnected.next(true)
    }
    if(object.action == "MESSAGE") {
      this.messagesSubject.next(m)
    }
  }
}
