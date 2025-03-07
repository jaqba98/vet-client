import type { Meta, StoryObj } from '@storybook/angular'

import { HamburgerFormComponent } from '@vet-client/lib-form'
import { StorybookUtilsService } from '../utils/storybook-utils.service'

const meta: Meta<HamburgerFormComponent> = {
  component: HamburgerFormComponent,
  title: 'Form/Hamburger',
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<HamburgerFormComponent>

export const Default: Story = {}
