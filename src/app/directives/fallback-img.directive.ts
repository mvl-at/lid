import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: 'img[fallback]'
})
export class FallbackImgDirective {

  @Input()
  @HostBinding('src')
  src!: string;
  @Input() fallback!: string;

  constructor() {
  }

  @HostListener('error')
  onError() {
    this.src = this.fallback;
  }
}
