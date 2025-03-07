import type { Meta, StoryObj } from '@storybook/angular'

import { VetSettingsViewComponent } from '@vet-client/lib-view'
import { StorybookUtilsService } from '../utils/storybook-utils.service'

const meta: Meta<VetSettingsViewComponent> = {
  component: VetSettingsViewComponent,
  title: 'View/VetSettings',
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<VetSettingsViewComponent>

export const Default: Story = {}
