import { Component, OnInit } from '@angular/core';
import { PluginTemplateComponent } from '../plugin-template/plugin-template.component'

@Component({
  selector: 'plugin-4',
  templateUrl: './plugin-4.component.html',
  styleUrls: ['./plugin-4.component.css']
})
export class Plugin4Component extends PluginTemplateComponent {

  constructor() {
    super()
  }

  process(command: string, value: string, author: string) {
    if (command != "plug4") {
      return
    }
    this.intercept()
  }
}