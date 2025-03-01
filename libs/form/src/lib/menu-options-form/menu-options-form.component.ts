// done
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';

import { RouterService } from '@vet-client/lib-system';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import {
  MenuOptionsFormDataModel,
  MenuOptionsFormModel,
} from './menu-options-form.model';
import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form';
import {
  RoutePageEnum,
  RouteSectionEnum,
  RouteStoreModel,
  setRoute
} from '@vet-client/lib-store';

@Component({
  selector: 'lib-menu-options-form',
  imports: [BaseFormComponent],
  templateUrl: './menu-options-form.component.html',
  hostDirectives: [BaseComponentDirective],
})
export class MenuOptionsFormComponent extends BaseFormService<
  MenuOptionsFormModel,
  MenuOptionsFormDataModel
> {
  @Output() event = new EventEmitter();

  @Input() flexDirectionColumn = false;

  constructor(
    private readonly store: Store<RouteStoreModel>
  ) {
    super({
      home: {
        id: 'home',
        kind: 'button',
        value: { type: 'text', text: 'Home' },
        defaultValue: false,
        fullWidth: false,
      },
      aboutUs: {
        id: 'aboutUs',
        kind: 'button',
        value: { type: 'text', text: 'About us' },
        defaultValue: false,
        fullWidth: false,
      },
      price: {
        id: 'price',
        kind: 'button',
        value: { type: 'text', text: 'Price' },
        defaultValue: false,
        fullWidth: false,
      },
      contact: {
        id: 'contact',
        kind: 'button',
        value: { type: 'text', text: 'Contact' },
        defaultValue: false,
        fullWidth: false,
      },
    });
  }

  override onSubmit(model: MenuOptionsFormDataModel) {
    if (model.home) {
      this.store.dispatch(
        setRoute({ page: RoutePageEnum.home, section: RouteSectionEnum.home })
      );
    } else if (model.aboutUs) {
      this.store.dispatch(
        setRoute({ page: RoutePageEnum.home, section: RouteSectionEnum.aboutUs })
      );
    } else if (model.price) {
      this.store.dispatch(
        setRoute({ page: RoutePageEnum.home, section: RouteSectionEnum.price })
      );
    } else if (model.contact) {
      this.store.dispatch(
        setRoute({ page: RoutePageEnum.home, section: RouteSectionEnum.contact })
      );
    }
    this.event.emit();
  }
}
