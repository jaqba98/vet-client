import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  RoutePageEnum, RouteSectionEnum,
  RouteStoreModel,
  setRoute
} from '@vet-client/lib-store';
import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import {
  HomeNavMenuFormModel,
  MenuOptionsModel,
} from './home-nav-menu-form.model';

@Component({
  selector: 'lib-home-nav-menu-form',
  imports: [BaseFormComponent],
  templateUrl: './home-nav-menu-form.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class HomeNavMenuFormComponent extends BaseFormService<HomeNavMenuFormModel, MenuOptionsModel> {
  @Input() isHorizontal = false;

  constructor(private readonly store: Store<RouteStoreModel>) {
    super({
      home: {
        id: 'home',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Home'
        },
        defaultValue: false,
        fullWidth: false
      },
      aboutUs: {
        id: 'aboutUs',
        kind: 'button',
        value: {
          type: 'text',
          text: 'About us'
        },
        defaultValue: false,
        fullWidth: false
      },
      price: {
        id: 'price',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Price'
        },
        defaultValue: false,
        fullWidth: false
      },
      contact: {
        id: 'contact',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Contact'
        },
        defaultValue: false,
        fullWidth: false
      },
    });
  }

  override onSubmit(model: MenuOptionsModel) {
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
  }
}
