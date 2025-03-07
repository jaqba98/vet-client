import type { Meta, StoryObj } from '@storybook/angular'

import { ProfilePageComponent } from '@vet-client/lib-page'
import { StorybookUtilsService } from '../../../../utils/storybook-utils.service'

const meta: Meta<ProfilePageComponent> = {
  component: ProfilePageComponent,
  title: 'Page/Profile',
  ...StorybookUtilsService.getFullscreen(),
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<ProfilePageComponent>

export const Default: Story = {}
