import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';

import { Message } from '../message'
import { PluginTemplateComponent } from '../plugin-template/plugin-template.component'

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

  intercept() {
    this.intercepted.emit()
    setTimeout(() => this.isHidden = false, 0)
  }

}
