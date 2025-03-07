import type { Meta, StoryObj } from '@storybook/angular'

import { StorybookUtilsService } from '../utils/storybook-utils.service'
import { SmallLogoutFormComponent } from '@vet-client/lib-form'

const meta: Meta<SmallLogoutFormComponent> = {
  component: SmallLogoutFormComponent,
  title: 'Form/LogoutSmall',
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<SmallLogoutFormComponent>

export const Default: Story = {}
