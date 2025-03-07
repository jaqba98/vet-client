import type { Meta, StoryObj } from '@storybook/angular'

import { HomePageComponent } from '@vet-client/lib-page'
import { StorybookUtilsService } from '../../../utils/storybook-utils.service'

const meta: Meta<HomePageComponent> = {
  component: HomePageComponent,
  title: 'Page/Home',
  ...StorybookUtilsService.getFullscreen(),
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<HomePageComponent>

export const Default: Story = {}
