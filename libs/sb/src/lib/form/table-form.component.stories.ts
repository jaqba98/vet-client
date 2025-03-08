import type { Meta, StoryObj } from '@storybook/angular'

import { TableFormComponent } from '@vet-client/lib-form'
import { StorybookUtilsService } from '../utils/storybook-utils.service'
import { ClinicDomainFormDataModel } from '@vet-client/lib-domain'

const meta: Meta<TableFormComponent<ClinicDomainFormDataModel>> = {
  component: TableFormComponent,
  title: 'Form/Table',
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<TableFormComponent<ClinicDomainFormDataModel>>

export const Default: Story = {}
