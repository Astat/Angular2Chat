import { Component, OnInit } from '@angular/core';
import { PluginTemplateComponent } from '../plugin-template/plugin-template.component'

@Component({
  selector: 'plugin-7',
  templateUrl: './plugin-7.component.html',
  styleUrls: ['./plugin-7.component.css']
})
export class Plugin7Component extends PluginTemplateComponent {

  constructor() {
    super()
  }

  process(command: string, value: string, author: string) {
    if (command != "plug7") {
      return
    }
    this.intercept()
  }
}