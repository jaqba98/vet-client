import type { Meta, StoryObj } from '@storybook/angular'

import { LogoutFormComponent } from '@vet-client/lib-form'
import { StorybookUtilsService } from '../utils/storybook-utils.service'

const meta: Meta<LogoutFormComponent> = {
  component: LogoutFormComponent,
  title: 'Form/Logout',
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<LogoutFormComponent>

export const Default: Story = {}
