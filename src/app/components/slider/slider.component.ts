import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare var $: any;

@Component({
  selector: 'slider',
  standalone: false,
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit {

  @Input() anchura: number | undefined;
  @Input('etiquetas') captions: boolean | undefined;
  @Output() conseguirAutor = new EventEmitter();

  public autor: any;

  constructor() { 

    this.autor = {
      nombre: 'Gaston',
      website: 'gaston.com',
      youtube: 'youtube.com/gaston'
    };
  }

  ngOnInit() {
    $("#logo").on("click", function(e: any){
                  e.preventDefault();
                  $("header").css("background", "green")
                             .css("height", "50px");
    });
    
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: this.captions,
      slideWidth: this.anchura
    });

    this.conseguirAutor.emit(this.autor);
  }

  lanzar(event: any) {
    this.conseguirAutor.emit(this.autor);
  }

}
