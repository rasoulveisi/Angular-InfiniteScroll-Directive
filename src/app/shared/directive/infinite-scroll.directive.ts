import { Directive, EventEmitter, HostListener, Input, Output } from "@angular/core";

@Directive({
  selector: "[infinitScroll]",
})
export class infinitScrollDirective {
  @Input() threshold:number = 85;
  @Output() scrollEndReached = new EventEmitter<boolean>();
  previousValues = { scrollTop: 0, scrollHeight: 0 };

  @HostListener("scroll", ["$event"])
  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight;
    const clientHeight = element.clientHeight;

    const maxScrollDistance = scrollHeight - clientHeight;
    const scrollPercentage = (scrollTop / maxScrollDistance) * 100;

    const isScrollDown = scrollTop > this.previousValues.scrollTop;
    this.previousValues.scrollTop = scrollTop;

    const isHeightChanged = this.previousValues.scrollHeight < scrollHeight;

    if (this.previousValues.scrollHeight > scrollHeight) {
      this.previousValues.scrollHeight = 0;
    }
    
    if (isScrollDown && isHeightChanged && scrollPercentage >= this.threshold) {
      this.previousValues.scrollHeight = scrollHeight;
      this.scrollEndReached.emit(true);
    }
  }
}
