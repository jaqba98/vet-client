import type { Meta, StoryObj } from '@storybook/angular'

import { SmallLogoutFormComponent } from '@vet-client/lib-form'
import { StorybookUtilsService } from '../utils/storybook-utils.service'

const meta: Meta<SmallLogoutFormComponent> = {
  component: SmallLogoutFormComponent,
  title: 'Form/Logout',
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<SmallLogoutFormComponent>

export const Default: Story = {}
