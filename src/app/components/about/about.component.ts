import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{

  public title: string;
  public subtitle: string;
  public email: string;

  constructor(){
    this.title = "Gaston Galotto";
    this.subtitle = "Desarrollador Web";
    this.email = "gastongalotto99@gmail.com";
  }

  ngOnInit() {
    
  }

}
