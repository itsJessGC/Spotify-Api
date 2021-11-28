import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log("Spotify Service Listo");
  }

  getQuery(query:string){
    const url=`https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({'Authorization':'Bearer BQArcJOGvX0BYoUUKsAnxzQVW87v7jFVI4dHpVct8qn6zwOhZepJ7bCoFQKBZdkiq1jq_RZE4c_3hQXBpdM'});
    return this.http.get(url, { headers });
  }

  getNewRelease(){
    return this.getQuery('browse/new-releases')
      .pipe( map ( data => data['albums'].items ));
  }

  getArtistas(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=5`)
      .pipe( map ( data => data['artists'].items ));
  }

  getArtista(id:string){
    return this.getQuery(`artists/${ id }`);
      //.pipe( map ( data => data['artists'].items ));
  }

  getTopTracks( id:string ){
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
      .pipe( map( data => data['tracks']));
  }

}
