import { Component, OnInit } from '@angular/core';
import { PluginTemplateComponent } from '../plugin-template/plugin-template.component'

@Component({
  selector: 'plugin-5',
  templateUrl: './plugin-5.component.html',
  styleUrls: ['./plugin-5.component.css']
})
export class Plugin5Component extends PluginTemplateComponent {

  constructor() {
    super()
  }

  process(command: string, value: string, author: string) {
    if (command != "plug5") {
      return
    }
    this.intercept()
  }
}