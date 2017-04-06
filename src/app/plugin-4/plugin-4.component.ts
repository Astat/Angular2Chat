import { Component, OnInit } from '@angular/core';
import { PluginTemplateComponent } from '../plugin-template/plugin-template.component'
import { Plugin4Service } from './plugin-4.service';
import { ChatHandlerService } from '../chat-handler.service'

@Component({
  selector: 'plugin-4',
  templateUrl: './plugin-4.component.html',
  styleUrls: ['./plugin-4.component.css']
})
export class Plugin4Component extends PluginTemplateComponent {

  public gifUrls: Array<string>;
  public lastCommand: string;
  public comment: string;

  constructor(private giphyService: Plugin4Service, private chatService: ChatHandlerService) {
    super();

      
  }

  process(command: string, value: string, author: string) {
    this.lastCommand = `/${command} ${value}`;
    this.gifUrls = new Array<string>();

    switch(command)
    {
      case "giphy":
        this.giphyService.searchGif(value).then(s=> this.gifUrls.push(s));
        this.comment="Rockandroll baby!! /giphy_like pour ajouter aux favoris!";
        break;

      case "giphy_like":
        if (author!=null && author==this.chatService.me) 
        {
          this.giphyService.likeLastGif();
          this.comment="Liked! '/giphy_show_me' pour afficher tes favoris, ou '/giphy_show <pseudo>'";
          
        }
        break;

      case "giphy_show_me":
        this.gifUrls=this.giphyService.getLikedGif();
        break;

      case "giphy_show":
        if (value!=null && value==this.chatService.me) 
        {
            let favorites:string="";
            this.giphyService.getLikedGif().forEach(s=> favorites += s + " ");
            this.chatService.send(favorites);
        }
        
        break;

      default:
        break;
    }

    if(command.indexOf("giphy") >= 0) {
      this.intercept();
    }
  }
}