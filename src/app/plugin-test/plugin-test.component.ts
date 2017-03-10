import { Component, OnInit } from '@angular/core';

import { PluginTemplateComponent } from '../plugin-template/plugin-template.component'

@Component({
  selector: 'plugin-test',
  templateUrl: './plugin-test.component.html',
  styleUrls: ['./plugin-test.component.css']
})
export class PluginTestComponent extends PluginTemplateComponent {

  constructor() {
    super()
  }

  private write: string

  process(command: string, value: string, author: string) {
    if (command != "test") {
      return
    }
    this.write = `Test command : "${value}" [${author}]`
    this.intercept()
  }

}
