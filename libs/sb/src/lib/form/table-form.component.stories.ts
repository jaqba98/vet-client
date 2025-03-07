import type { Meta, StoryObj } from '@storybook/angular'

import { TableFormComponent } from '@vet-client/lib-form'
import { StorybookUtilsService } from '../utils/storybook-utils.service'

const meta: Meta<TableFormComponent> = {
  component: TableFormComponent,
  title: 'Form/Table',
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<TableFormComponent>

export const Default: Story = {}
