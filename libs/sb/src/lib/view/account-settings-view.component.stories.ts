import type { Meta, StoryObj } from '@storybook/angular'

import { AccountSettingsViewComponent } from '@vet-client/lib-view'
import { StorybookUtilsService } from '../utils/storybook-utils.service'

const meta: Meta<AccountSettingsViewComponent> = {
  component: AccountSettingsViewComponent,
  title: 'View/AccountSettings',
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<AccountSettingsViewComponent>

export const Default: Story = {}
