import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Inputs
  private name: String = ""
  private text: String = ""

  // Display
  private connected: boolean = false
  private users: Array<String> = ["Alban", "Ulises", "Sebastien"]
  /* Expected format of items :
    {
      "time": "15:45:28",
      "author": "Ulises",
      "text": "Cras ac tellus."
    }
  */
  private messages: Array<any> = []

  connect = function () {
    this.connected = true
    this.users.push(this.name)
  }

  send = function () {
    let message: any = {
      time: this.formatDate(new Date()),
      author: this.name,
      text: this.text
    };
    this.text = "";
    this.messages.push(message);
  }

  private formatDate = function (date: Date) {
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  }
}