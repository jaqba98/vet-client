import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class LoggedOutGuard implements CanActivate {
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
    //   this.navStore.dispatch(
    //     navSetMenuType({ menuType: MenuTypeEnum.home }),
    //   )
    //   return true
    // }
    // return this.httpPost.authPost({ token }).pipe(
    //   map((response) => {
    //     if (response.success) {
    //       this.navStore.dispatch(
    //         navSetMenuType({ menuType: MenuTypeEnum.dashboard }),
    //       )
    //       this.store.dispatch(
    //         routeSetAction({
    //           page: RoutePageEnum.dashboard,
    //           section: RouteSectionEnum.dashboard,
    //         }),
    //       )
    //       return false
    //     }
    //     this.navStore.dispatch(
    //       navSetMenuType({ menuType: MenuTypeEnum.home }),
    //     )
    //     return true
    //   }),
    // )
  }
}
