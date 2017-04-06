import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { TvShow } from './tvshow';

@Injectable()
export class TvMazeService {
    private searchUrl = 'http://api.tvmaze.com/search/shows?q=';
    private searchLimit = 5;
    
    constructor (private http: Http) {}

    public search(query): Observable<TvShow[]> {
        return this.http.get(this.searchUrl + query)
                        .map(this.extractData.bind(this))
                        .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        let result:Array<TvShow> = [];
        let count = 0;
        for (let item of body) {
            let tvShow:TvShow = new TvShow;

            tvShow.id = item.show.id;
            tvShow.name = item.show.name;
            tvShow.summary = item.show.summary;
            tvShow.network = item.show.network ? item.show.network.name : '';
            tvShow.img = item.show.image ? item.show.image.medium : '';

            result.push(tvShow);

            if (count < this.searchLimit) {
                count++;
            } else {
                break;
            }

        }
        return result;
    }

    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}