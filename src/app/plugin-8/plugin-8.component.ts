import { Component, OnInit } from '@angular/core';
import { PluginTemplateComponent } from '../plugin-template/plugin-template.component'

@Component({
  selector: 'plugin-8',
  templateUrl: './plugin-8.component.html',
  styleUrls: ['./plugin-8.component.css']
})
export class Plugin8Component extends PluginTemplateComponent {

  constructor() {
    super()
  }

  process(command: string, value: string, author: string) {
    if (command != "plug8") {
      return
    }
    this.intercept()
  }
}