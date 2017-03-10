import { Component, OnInit, HostBinding, Input, Output, EventEmitter } from '@angular/core';

import { Message } from '../message'

export abstract class PluginTemplateComponent implements OnInit {

  @HostBinding('hidden')
  private isHidden: boolean = true;

  @Input()
  private message: Message

  @Output()
  private interceptor: EventEmitter<void> = new EventEmitter<void>()

  @Output()
  private discard: EventEmitter<void> = new EventEmitter<void>()

  ngOnInit() {
    let text = this.message.text;
    if (text.startsWith("/")) {
      let command = text.slice(1, text.indexOf(" "))
      let value = text.slice(text.indexOf(" ") + 1)
      if(text.indexOf(" ") == -1) {
        command = text.slice(1)
        value = ""
      }
      this.process(command, value, this.message.author)
    }
  }

  intercept() {
    this.isHidden = false
    this.interceptor.emit()
  }

  discardMessage() {
    this.discard.emit()
  }

  abstract process(command: string, value: string, author: string): void
  
}
