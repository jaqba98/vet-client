import type { Meta, StoryObj } from '@storybook/angular'

import { AccountSettingsPageComponent } from '@vet-client/lib-page'
import { StorybookUtilsService } from '../../../../utils/storybook-utils.service'

const meta: Meta<AccountSettingsPageComponent> = {
  component: AccountSettingsPageComponent,
  title: 'Page/AccountSettings',
  ...StorybookUtilsService.getFullscreen(),
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<AccountSettingsPageComponent>

export const Default: Story = {}
