import { Component, OnInit } from '@angular/core';
import { PluginTemplateComponent } from '../plugin-template/plugin-template.component'

import { ChatHandlerService } from '../chat-handler.service'

import { WoodService } from './wood.service'

@Component({
  selector: 'plugin-6',
  templateUrl: './plugin-6.component.html',
  styleUrls: ['./plugin-6.component.css']
})
export class Plugin6Component extends PluginTemplateComponent {

  isBigger = false;
  isSmaller = false;
  show = false;
  request = false;
  party = false;

  woodSize = "";

  target = "";

  constructor(private chatService: ChatHandlerService, private wood: WoodService) {
    super()
  }

  process(command: string, value: string, author: string) {
    const me = this.chatService.me;
    this.target = value.replace(" ", "");

    if (command == "bigwood" || command == "smallwood") {
      if (this.target == me) {
        if (command == "smallwood") {
          this.wood.shrink();
        } else {
          this.wood.grow();
        }
      }
      if (this.chatService.getUsers().indexOf(this.target) >= 0) {
        if (command == "smallwood") {
          this.isSmaller = true;
        } else {
          this.isBigger = true;
        }
        this.intercept();
      } else {
        this.discardMessage();
      }
    }
    if (command == "showmywood") {
      this.show = true;
      this.woodSize = this.target;
      this.target = author;
      this.intercept()
    }
    if (command == "showwood") {
      if (this.chatService.getUsers().indexOf(this.target) >= 0) {
        this.request = true;
        this.intercept();
      } else {
        this.discardMessage();
      }
      if (this.target == me) {
        this.chatService.send("/showmywood " + this.getWoodSize());
      }
    }
    if (command == "WOODPARTYY") {
      this.party = true;
      this.intercept();
      this.chatService.send("/showmywood " + this.getWoodSize());
    }
  }

  getWoodSize() {
    if(this.chatService.me == "Alban") {
      return 6;
    }
    return this.wood.myWoodSize;
  }
}