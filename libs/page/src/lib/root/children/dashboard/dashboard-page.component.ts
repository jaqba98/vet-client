import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'lib-dashboard-page',
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
})
export class DashboardPageComponent {}
