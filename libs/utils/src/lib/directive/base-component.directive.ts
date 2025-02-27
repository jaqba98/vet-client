import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[libBaseComponent]',
})
export class BaseComponentDirective {
  @HostBinding('style.display') display = 'contents';
}

