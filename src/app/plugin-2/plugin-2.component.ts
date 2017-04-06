import {Component} from "@angular/core";
import {Http} from "@angular/http";
import {PluginTemplateComponent} from "../plugin-template/plugin-template.component";

@Component({
  selector: 'plugin-2',
  templateUrl: './plugin-2.component.html',
  styleUrls: ['./plugin-2.component.css']
})
export class Plugin2Component extends PluginTemplateComponent {

  constructor(private http: Http) {
    super();
  }

  private woeid: number;
  private title: string;
  private weatherStateAbbr: string;
  private weatherStateName: string;

  process(command: string, value: string, author: string) {
    if (command != "meteo") {
      return;
    }

    this.http
      .get("https://www.metaweather.com/api/location/search/?query=" + value)
      .subscribe(response => {
        let json = response.json();
        this.woeid = json[0].woeid;
        this.title = json[0].title;

        this.http
          .get("https://www.metaweather.com/api/location/" + this.woeid)
          .subscribe(response => {
            let json = response.json();
            this.weatherStateAbbr = json.consolidated_weather[0].weather_state_abbr;
            this.weatherStateName = json.consolidated_weather[0].weather_state_name;
          });

      });

    this.intercept();
  }
}
