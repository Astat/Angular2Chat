import { ChatHandlerService } from '../chat-handler.service';
import { Component, OnInit } from '@angular/core';
import { PluginTemplateComponent } from '../plugin-template/plugin-template.component';

@Component({
  selector: 'plugin-8',
  templateUrl: './plugin-8.component.html',
  styleUrls: ['./plugin-8.component.css']
})
export class Plugin8Component extends PluginTemplateComponent {

  imageUrl: string;

  constructor(private chatHandlerService: ChatHandlerService) {
    super();
  }

  process(command: string, value: string, author: string) {
    if (command == 'avatar') {
      this.imageUrl = 'https://api.adorable.io/avatars/40/' + value;
      this.intercept();
    }

    if (command == 'avatarUser') {
      this.chatHandlerService.addAvatarUser(author, value);
      this.discardMessage();
    }

    return;
  }
}

