import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../servicios/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nuevasCanciones:any[]=[];
  bandera:boolean;

  constructor(private spotify: SpotifyService) {
    this.bandera=true;
    //this.spotify.getNewRelease().subscribe( (data:any) => { console.log(data); });
    this.spotify.getNewRelease().subscribe( 
      (data:any) => { 
        console.log(data);
        this.nuevasCanciones=data;
        this.bandera=false;
      });
  }

  ngOnInit(): void {
  }

}
