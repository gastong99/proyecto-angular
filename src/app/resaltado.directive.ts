import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]',
  standalone: false
})
export class ResaltadoDirective {

  constructor(public el: ElementRef) {
    
  }

  ngOnInit() {
    var element = this.el.nativeElement;
        element.style.background = "red";
        element.style.padding = "20px";
        element.style.marginTop = "15px";
        element.style.color = "white";

        element.innerText = element.innerHTML.toUpperCase().replace("CONTACTO", "%%%%%%");
  }

}
