import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit, AfterViewInit{

  public widthSlider: number | undefined;
  public anchuraToSlider: any;
  public captions: boolean;
  public autor: any;

  @ViewChild('textos') textos: any;

  constructor() { 
    this.captions = true;
  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    //alert(this.textos.nativeElement.textContent);
  }

  cargarSlider() {
    this.anchuraToSlider = this.widthSlider;
  }

  resetearSlider() {
    this.anchuraToSlider = false;
  }

  getAutor(event: any) {
    this.autor = event;
  }

}
