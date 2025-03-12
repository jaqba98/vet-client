import type { Meta, StoryObj } from '@storybook/angular'

import { TableFormComponent } from '@vet-client/lib-form'
import { StorybookUtilsService } from '../utils/storybook-utils.service'
import { ClinicDomainFormModel } from '@vet-client/lib-domain'

const meta: Meta<TableFormComponent<ClinicDomainFormModel>> = {
  component: TableFormComponent,
  title: 'Form/Table',
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<TableFormComponent<ClinicDomainFormModel>>

export const Default: Story = {}
