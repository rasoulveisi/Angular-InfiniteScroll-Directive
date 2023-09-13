import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[infinitScroll]',
})
export class infinitScrollDirective {
    @HostListener('scroll', ['$event']) onScroll(e: any) {
        console.log('do something!');
    }
}
