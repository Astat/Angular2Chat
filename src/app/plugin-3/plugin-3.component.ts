import { Component, OnInit } from '@angular/core';
import { PluginTemplateComponent } from '../plugin-template/plugin-template.component'

@Component({
  selector: 'plugin-3',
  templateUrl: './plugin-3.component.html',
  styleUrls: ['./plugin-3.component.css']
})
export class Plugin3Component extends PluginTemplateComponent {

  constructor() {
    super()
  }

  process(command: string, value: string, author: string) {
    if (command != "plug3") {
      return
    }
    this.intercept()
  }
}