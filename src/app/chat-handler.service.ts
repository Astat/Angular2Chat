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

  avatarUsers: Array<AvatarUser> = [];

  constructor(private chatCommunication: ChatCommunicationService) {
    this.chatCommunication.messagesStream().subscribe(m => {
      this.messages.push(m)
    })
    this.chatCommunication.usersStream().subscribe(l => {
      this.users = l;
      this.users.forEach(usr => {
        if(this.avatarUsers.filter(au => au.user === usr).length == 0) {
          this.avatarUsers.push({user: usr, avatar:''});
        }
      });
      
      let a = []
      this.avatarUsers.forEach(au => {
        if(this.users.filter(usr => usr === au.user).length === 0) {
          a.push(au);
        }
      });
      
      a.forEach(au => {
        this.avatarUsers.splice(this.avatarUsers.indexOf(au), 1);
      });
    })
  }

  public connect(name: string) {
    this.me = name
    this.chatCommunication.connect(name)
  }

  public addAvatarUser(user: string, value: string) {
    this.avatarUsers.forEach(usr => {
      if (usr.user === user) {
        usr.avatar = 'https://api.adorable.io/avatars/40/' + value;
      };
    });
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

export class AvatarUser {
  user: string;
  avatar: string;
}
