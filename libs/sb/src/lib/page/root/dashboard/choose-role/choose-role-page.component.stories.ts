import type { Meta, StoryObj } from '@storybook/angular'

import { ChooseRolePageComponent } from '@vet-client/lib-page'
import { StorybookUtilsService } from '../../../../utils/storybook-utils.service'

const meta: Meta<ChooseRolePageComponent> = {
  component: ChooseRolePageComponent,
  title: 'Page/ChooseRole',
  ...StorybookUtilsService.getFullscreen(),
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<ChooseRolePageComponent>

export const Default: Story = {}
