import { Component, AfterViewInit, Input, HostBinding } from '@angular/core';

import { Message } from '../message'

@Component({
  selector: 'message',
  templateUrl: './message-view.component.html',
  styleUrls: ['./message-view.component.css']
})
export class MessageViewComponent implements AfterViewInit {

  @HostBinding('hidden')
  isHidden: boolean = true;

  @Input()
  message: Message

  constructor() { }

  ngAfterViewInit() {
    setTimeout(() => this.isHidden = false, 0);
  }


}
