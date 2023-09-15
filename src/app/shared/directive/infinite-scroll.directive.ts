import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[infinitScroll]',
})
export class infinitScrollDirective {
  @Output() scrollEndReached = new EventEmitter<boolean>();
  scrollThreshold = 95;

  @HostListener('scroll', ['$event'])
  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight;
    const clientHeight = element.clientHeight;

    const maxScrollDistance = scrollHeight - clientHeight;
    const scrollPercentage = (scrollTop / maxScrollDistance) * 100;

    if (scrollPercentage >= this.scrollThreshold) {
      this.scrollEndReached.emit(true);
    }
  }
}
