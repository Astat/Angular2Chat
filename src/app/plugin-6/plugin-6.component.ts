import { Component, OnInit } from '@angular/core';
import { PluginTemplateComponent } from '../plugin-template/plugin-template.component'

@Component({
  selector: 'plugin-6',
  templateUrl: './plugin-6.component.html',
  styleUrls: ['./plugin-6.component.css']
})
export class Plugin6Component extends PluginTemplateComponent {

  constructor() {
    super()
  }

  process(command: string, value: string, author: string) {
    if (command != "plug6") {
      return
    }
    this.intercept()
  }
}