import type { Meta, StoryObj } from '@storybook/angular'

import { PriceViewComponent } from '@vet-client/lib-view'
import { StorybookUtilsService } from '../utils/storybook-utils.service'

const meta: Meta<PriceViewComponent> = {
  component: PriceViewComponent,
  title: 'View/Price',
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<PriceViewComponent>

export const Default: Story = {}
