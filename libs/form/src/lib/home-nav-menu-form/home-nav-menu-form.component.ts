import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { RoutePageEnum, RouteSectionEnum, RouteStoreModel, setRoute } from '@vet-client/lib-store';
import { BaseFormComponent, BaseFormService } from '@vet-client/lib-base-form';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import {
  HomeNavMenuFormModel,
  HomeNavMenuModel,
} from './home-nav-menu-form.model';

@Component({
  selector: 'lib-home-nav-menu-form',
  imports: [BaseFormComponent],
  templateUrl: './home-nav-menu-form.component.html',
  hostDirectives: [BaseComponentDirective]
})
export class HomeNavMenuFormComponent extends BaseFormService<HomeNavMenuFormModel, HomeNavMenuModel> {
  @Input() isHorizontal = true;

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
        fullWidth: true
      },
      aboutUs: {
        id: 'aboutUs',
        kind: 'button',
        value: {
          type: 'text',
          text: 'About us'
        },
        defaultValue: false,
        fullWidth: true
      },
      price: {
        id: 'price',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Price'
        },
        defaultValue: false,
        fullWidth: true
      },
      contact: {
        id: 'contact',
        kind: 'button',
        value: {
          type: 'text',
          text: 'Contact'
        },
        defaultValue: false,
        fullWidth: true
      },
    });
  }

  override onSubmit(model: HomeNavMenuModel) {
    const { home, aboutUs, price, contact } = model;
    if (home) {
      this.store.dispatch(
        setRoute({ page: RoutePageEnum.home, section: RouteSectionEnum.home })
      );
    } else if (aboutUs) {
      this.store.dispatch(
        setRoute({ page: RoutePageEnum.home, section: RouteSectionEnum.aboutUs })
      );
    } else if (price) {
      this.store.dispatch(
        setRoute({ page: RoutePageEnum.home, section: RouteSectionEnum.price })
      );
    } else if (contact) {
      this.store.dispatch(
        setRoute({ page: RoutePageEnum.home, section: RouteSectionEnum.contact })
      );
    }
  }
}
