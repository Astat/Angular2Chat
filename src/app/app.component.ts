import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('textInput')
  private textInput: ElementRef

  private name: String = ""
  private text: String = ""

  private connected: boolean = false
  private users: Array<String> = ["Alban", "Ulises", "Sebastien"]

  private messages: Array<Message> = []

  connect = function () {
    this.connected = true
    this.users.push(this.name)
  }

  send = function () {
    if(!this.text) {
      return;
    }
    let message: Message = {
      time: this.formatDate(new Date()),
      author: this.name,
      text: this.text
    };
    this.text = ""
    this.messages.push(message)
    this.textInput.nativeElement.focus()
  }

  private formatDate = function (date: Date) {
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
  }
}

export class Message {
  public author: String
  public text: String
  public time: String
}