import { Component, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { TvShow } from '../plugin-5/tvshow'

@Component({
  selector: 'tvshow',
  templateUrl: './tvshow-view.component.html',
  styleUrls: ['./tvshow-view.component.css']
})
export class TvShowViewComponent {

  detailVisible:boolean = false;

  @Input()
  tvShow: TvShow;

  @Output()
  followed = new EventEmitter<TvShow>()

  constructor() { }

  public showHideDetail() {
    this.detailVisible = !this.detailVisible;
  }

  public hideDetail() {
    this.detailVisible = false;
  }

  public follow() {
    this.followed.emit(this.tvShow);
  }
}
