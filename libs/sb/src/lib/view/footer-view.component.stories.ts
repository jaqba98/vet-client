import type { Meta, StoryObj } from '@storybook/angular'

import { FooterViewComponent } from '@vet-client/lib-view'
import { StorybookUtilsService } from '../utils/storybook-utils.service'

const meta: Meta<FooterViewComponent> = {
  component: FooterViewComponent,
  title: 'View/Footer',
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<FooterViewComponent>

export const Default: Story = {}
