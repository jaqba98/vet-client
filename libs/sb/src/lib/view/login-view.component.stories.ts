import type { Meta, StoryObj } from '@storybook/angular'

import { LoginViewComponent } from '@vet-client/lib-view'
import { StorybookUtilsService } from '../utils/storybook-utils.service'

const meta: Meta<LoginViewComponent> = {
  component: LoginViewComponent,
  title: 'View/Login',
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<LoginViewComponent>

export const Default: Story = {}
