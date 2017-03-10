import { Component, OnInit } from '@angular/core';
import { PluginTemplateComponent } from '../plugin-template/plugin-template.component'

@Component({
  selector: 'plugin-2',
  templateUrl: './plugin-2.component.html',
  styleUrls: ['./plugin-2.component.css']
})
export class Plugin2Component extends PluginTemplateComponent {

  constructor() {
    super()
  }

  process(command: string, value: string, author: string) {
    if (command != "plug2") {
      return
    }
    this.intercept()
  }
}