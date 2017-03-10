import { Component, OnInit } from '@angular/core';
import { PluginTemplateComponent } from '../plugin-template/plugin-template.component'

@Component({
  selector: 'plugin-1',
  templateUrl: './plugin-1.component.html',
  styleUrls: ['./plugin-1.component.css']
})
export class Plugin1Component extends PluginTemplateComponent {

  constructor() {
    super()
  }

  process(command: string, value: string, author: string) {
    if (command != "plug1") {
      return
    }
    this.intercept()
  }
}