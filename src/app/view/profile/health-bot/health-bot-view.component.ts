import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HealthBotComponent} from '../../../component/health-bot/health-bot.component';

@Component({
  selector: 'app-health-bot-view',
  standalone: true,
  imports: [CommonModule, HealthBotComponent],
  templateUrl: './health-bot-view.component.html',
})
export class HealthBotViewComponent {
}
