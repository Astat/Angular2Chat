import { Component, OnInit, EventEmitter } from '@angular/core';
import { PluginTemplateComponent } from '../plugin-template/plugin-template.component'
import { ChatHandlerService } from '../chat-handler.service';
import { TvMazeService } from './tvmaze.service'
import { TvShow } from './tvshow'

@Component({
  selector: 'plugin-5',
  templateUrl: './plugin-5.component.html',
  styleUrls: ['./plugin-5.component.css']
})
export class Plugin5Component extends PluginTemplateComponent {

  public tvShows:Array<TvShow>;
  public query:String;
  private followed:Array<TvShow> = [];

  constructor(private tvMaze:TvMazeService, private chatHandler:ChatHandlerService) {
    super()
  }

  process(command: string, value: string, author: string) {
    if (command != "tvshow") {
      return
    }

    if (this.chatHandler.me == author && value != '') {
      this.query = value;
      this.tvMaze.search(value).subscribe(tvShows => this.tvShows = tvShows);
      this.intercept();
    } else {
      this.discardMessage();
    }
  }

  follow(tvShow:TvShow) {
    console.log(tvShow);
    this.followed.push(tvShow);
  }

  private isUser(name:string) : boolean {
    for (let user of this.chatHandler.getUsers()) {
      if (name == user) {
        return true;
      }
    }
    return false;
  }
}