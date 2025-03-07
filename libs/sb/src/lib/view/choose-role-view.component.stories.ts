import type { Meta, StoryObj } from '@storybook/angular'

import { ChooseRoleViewComponent } from '@vet-client/lib-view'
import { StorybookUtilsService } from '../utils/storybook-utils.service'

const meta: Meta<ChooseRoleViewComponent> = {
  component: ChooseRoleViewComponent,
  title: 'View/ChooseRole',
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<ChooseRoleViewComponent>

export const Default: Story = {}
