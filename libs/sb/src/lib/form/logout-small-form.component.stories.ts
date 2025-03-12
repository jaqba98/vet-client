import type { Meta, StoryObj } from '@storybook/angular'

import { StorybookUtilsService } from '../utils/storybook-utils.service'
import { LogoutFormComponent } from '@vet-client/lib-form'

const meta: Meta<LogoutFormComponent> = {
  component: LogoutFormComponent,
  title: 'Form/LogoutSmall',
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<LogoutFormComponent>

export const Default: Story = {}
