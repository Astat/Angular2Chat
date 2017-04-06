import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class Plugin4Service 
{ 
    private baseUrl:string = "http://api.giphy.com/v1/gifs/search";
    private key:string = "api_key=dc6zaTOxFJmzC";

    private likedGifs:Array<string>;
    private lastGif:string;
    
    constructor(private callHttp : Http)
    {
        this.likedGifs = new Array<string>();
    }



    likeLastGif()
    {
        this.likedGifs.push(this.lastGif);
    }

    getLikedGif(): Array<string>
    {
        return this.likedGifs;
    }

    searchGif(name:string) : Promise<string>
    {
        let url:string = `${this.baseUrl}?q=${name}&${this.key}&limit=1`;
        console.log(url);

        return this.callHttp.get(url).toPromise().then(r=> 
        { 
            if (r.status==200)
            {
                //let imageUrl:string;

                let body = r.json();
                
                if (!body.data || body.data.length==0){
                    this.lastGif = "http://www.sitesbay.com/files/404.gif";
                }
                else{
                    this.lastGif = body.data[0].images.fixed_height.url;
                    
                }

                return this.lastGif;
            }
            else{
                return "";
            }
        });

        
    }
}