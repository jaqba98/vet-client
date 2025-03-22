import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class LoggedInGuard implements CanActivate {
  // constructor(
  //   private readonly store: Store<RouteStoreType>,
  //   private readonly cookie: CookieService,
  //   private readonly httpPost: HttpPostAppService,
  //   private readonly navStore: Store<NavMenuTypeStoreType>,
  // ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return true
    // const token = this.cookie.getToken()
    // if (!token) {
    //   this.store.dispatch(
    //     routeSetAction({
    //       page: RoutePageEnum.home,
    //       section: RouteSectionEnum.home,
    //     }),
    //   )
    //   this.navStore.dispatch(
    //     navSetMenuType({ menuType: MenuTypeEnum.home }),
    //   )
    //   return false
    // }
    // return this.httpPost.authPost({ token }).pipe(
    //   map((response) => {
    //     if (response.success) {
    //       this.navStore.dispatch(
    //         navSetMenuType({ menuType: MenuTypeEnum.dashboard }),
    //       )
    //       return true
    //     }
    //     this.navStore.dispatch(
    //       navSetMenuType({ menuType: MenuTypeEnum.home }),
    //     )
    //     this.store.dispatch(
    //       routeSetAction({
    //         page: RoutePageEnum.home,
    //         section: RouteSectionEnum.home,
    //       }),
    //     )
    //     return false
    //   }),
    // )
  }
}
