import type { Meta, StoryObj } from '@storybook/angular'

import { ChooseRoleFormComponent } from '@vet-client/lib-form'
import { StorybookUtilsService } from '../utils/storybook-utils.service'

const meta: Meta<ChooseRoleFormComponent> = {
  component: ChooseRoleFormComponent,
  title: 'Form/ChooseRole',
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<ChooseRoleFormComponent>

export const Default: Story = {}
