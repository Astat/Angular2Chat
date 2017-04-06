import { Component, OnInit } from '@angular/core';
import { PluginTemplateComponent } from '../plugin-template/plugin-template.component'

import { ChatHandlerService } from '../chat-handler.service'

@Component({
  selector: 'plugin-1',
  templateUrl: './plugin-1.component.html',
  styleUrls: ['./plugin-1.component.css']
})
export class Plugin1Component extends PluginTemplateComponent {

  value = "";

  constructor(private chatService: ChatHandlerService) {
    super()
  }

  process(command: string, value: string, author: string) {
    if (command != "secret") {
      return
    }
    const me = this.chatService.me;
    if(value.startsWith(me) || author == me) {
      this.value = value;
      this.intercept();
    } else {
      this.discardMessage();
    }
  }
}