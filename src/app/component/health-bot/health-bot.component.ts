import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-health-bot',
  templateUrl: './health-bot.component.html',
  styleUrls: ['./health-bot.component.scss']
})
export class HealthBotComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const secret = 'Cz1tRbf73ezfh1YFR08PH08N42J7xNUEVaPNrwummJ8NslpPcsP6JQQJ99BFACYeBjFAArohAAABAZBS3YKp.4LfFI4VRSw4AWjAVRbZbiK70SeHa2dVVsoype4WQ09UyMtUs8P4hJQQJ99BFACYeBjFAArohAAABAZBS4FPN';
    const scenarioId = 'vet_app_healthcare_scenario';

    const script = document.createElement('script');
    script.src = 'https://cdn.botframework.com/botframework-webchat/latest/webchat.js';
    script.onload = () => {
      const store = (window as any).WebChat.createStore({}, (storeAPI: any) => (next: any) => (action: any) => {
        if (action.type === 'DIRECT_LINE/CONNECT_FULFILLED') {
          console.log('Connection established, wysyłam InitConversation ze scenariuszem');
          store.dispatch({
            type: 'WEB_CHAT/SEND_EVENT',
            payload: {
              name: 'InitConversation',
              type: 'event',
              value: {
                scenario: {
                  scenario_id: 'vet_app_healthcare_scenario',  // Twój ID scenariusza
                  parameters: { /* parametry, jeśli są */ }
                },
                locale: 'pl'
              }
            }
          });
        }
        return next(action);
      });

      (window as any).WebChat.renderWebChat(
        {
          directLine: (window as any).WebChat.createDirectLine({ secret }),
          store,
          locale: 'pl',
          styleOptions: {
            botAvatarInitials: 'HB',
            userAvatarInitials: 'ME',
            backgroundColor: '#f0f0f0'
          },
        },
        document.getElementById('webchat')
      );
    };

    document.body.appendChild(script);
  }
}
