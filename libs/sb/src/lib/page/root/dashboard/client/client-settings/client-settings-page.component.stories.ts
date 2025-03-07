import type { Meta, StoryObj } from '@storybook/angular'

import { ClientSettingsPageComponent } from '@vet-client/lib-page'
import { StorybookUtilsService } from '../../../../../utils/storybook-utils.service'

const meta: Meta<ClientSettingsPageComponent> = {
  component: ClientSettingsPageComponent,
  title: 'Page/ClientSettings',
  ...StorybookUtilsService.getFullscreen(),
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<ClientSettingsPageComponent>

export const Default: Story = {}
