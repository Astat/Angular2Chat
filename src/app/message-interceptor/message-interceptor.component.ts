import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';

import { Message } from '../message'
import { PluginTemplateComponent } from '../plugin-template/plugin-template.component'
import { ChatHandlerService } from '../chat-handler.service'

@Component({
  selector: 'message-interceptor',
  templateUrl: './message-interceptor.component.html',
  styleUrls: ['./message-interceptor.component.css']
})
export class MessageInterceptorComponent {

  @HostBinding('hidden')
  isHidden: boolean = true;

  @Input()
  message: Message

  @Output()
  intercepted = new EventEmitter<void>()

  constructor(private chat: ChatHandlerService) {
  }

  intercept() {
    this.intercepted.emit()
    setTimeout(() => this.isHidden = false, 0)
  }

  discardMessage() {
    var index = this.chat.getMessages().indexOf(this.message, 0);
    if (index > -1) {
      this.chat.getMessages().splice(index, 1);
    }
  }

}
